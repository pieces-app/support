/**
 * This script automates the process of marking issues as stale and closing them if necessary
 * in a GitHub repository using the Octokit REST API client.
 */
const { Octokit } = require("@octokit/rest");
const auth = process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth });

/**
 * Asynchronously fetches paginated data from a GitHub API endpoint.
 * @param {string} url - The GitHub API endpoint URL.
 * @returns {Promise<Array>} A promise that resolves to an array of data from all pages.
 */
const getPaginatedData = async (url) => {
  const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
  let pagesRemaining = true;
  let data = [];

  while (pagesRemaining) {
    const response = await octokit.request(`GET ${url}`, {
      per_page: 100,
      headers: {
        "X-GitHub-Api-Version":
          "2022-11-28",
      },
    });

    data = data.concat(parseData(response.data));

    const linkHeader = response.headers.link;

    pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`);

    if (pagesRemaining) {
      url = linkHeader.match(nextPattern)[0];
    }
  }

  return data;
}

/**
 * Parses the data returned by the GitHub API, handling different response formats.
 * @param {Object|Array} data - The data returned by the GitHub API.
 * @returns {Array} The parsed data as an array.
 */
const parseData = (data) => {
  // If the data is an array, return that
  if (Array.isArray(data)) {
    return data
  }

  // Some endpoints respond with 204 No Content instead of empty array
  //   when there is no data. In that case, return an empty array.
  if (!data) {
    return []
  }

  // Otherwise, the array of items that we want is in an object
  // Delete keys that don't include the array of items
  const namespaceKey = Object.keys(data).find((key) => !['incomplete_results', 'repository_selection', 'total_count'].includes(key))
  return data[namespaceKey]
}

/**
 * Main function to run the script. It fetches issues, checks if they are stale, and handles them accordingly.
 */
const run = async () => {
  const issues = await getPaginatedData('/repos/pieces-app/support/issues');

  for (const issue of issues) {
    const isStale = checkIfStale(issue);

    if (isStale) {
      await octokit.issues.addLabels({
        owner: 'pieces-app',
        repo: 'support',
        issue_number: issue.number,
        labels: ['stale']
      });

      await octokit.issues.createComment({
        owner: 'pieces-app',
        repo: 'support',
        issue_number: issue.number,
        body: 'This issue is stale because 3 days has passed with no response from the author. Remove the stale label or have the author comment or else this issue will be closed in 4 days from today.'
      });

      // Removes the `stale` label, sends a comment, and closes the issue
      if (shouldClose(issue)) {
        await octokit.issues.removeLabel({
          owner: 'pieces-app',
          repo: 'support',
          issue_number,
          name: 'stale'
        });

        await octokit.issues.createComment({
          owner: 'pieces-app',
          repo: 'support',
          issue_number: issue.number,
          body: 'This issue was closed because it has been stale for 7 days without response from the author.'
        });

        await octokit.issues.update({
          owner: 'pieces-app',
          repo: 'support',
          issue_number: issue.number,
          state: 'closed'
        });
      }
    }
  }
}

/**
 * Determines if an issue should be marked as stale.
 * @param {Object} issue - The issue to check.
 * @returns {boolean} True if the issue is stale, false otherwise.
 */
const checkIfStale = (issue) => {
  const lastCommentDate = new Date(issue.comments[issue.comments.length - 1].created_at);
  const daysSinceLastComment = (new Date() - lastCommentDate) / (1000 * 60 * 60 * 24);
  return daysSinceLastComment >= 3;
}

/**
 * Determines if a stale issue should be closed.
 * @param {Object} issue - The issue to check.
 * @returns {boolean} True if the issue should be closed, false otherwise.
 */
const shouldClose = (issue) => {
  const lastCommentDate = new Date(issue.comments[issue.comments.length - 1].created_at);
  const daysSinceLastComment = (new Date() - lastCommentDate) / (1000 * 60 * 60 * 24);
  return daysSinceLastComment >= 4;
}

// Run the script
run().catch(err => console.error(err));
