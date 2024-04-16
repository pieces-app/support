const { Octokit } = require("@octokit/rest");
const auth = process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth });

async function getPaginatedData(url) {
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

    const parsedData = parseData(response.data)
    data = [...data, ...parsedData];

    const linkHeader = response.headers.link;

    pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`);

    if (pagesRemaining) {
      url = linkHeader.match(nextPattern)[0];
    }
  }

  return data;
}

function parseData(data) {
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
  delete data.incomplete_results;
  delete data.repository_selection;
  delete data.total_count;
  // Pull out the array of items
  const namespaceKey = Object.keys(data)[0];
  data = data[namespaceKey];

  return data;
}

async function run() {
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

// Should be stale if the most recent comment is 3 or more days old
const checkIfStale = (issue) => {
  const lastCommentDate = new Date(issue.comments[issue.comments.length - 1].created_at);
  const daysSinceLastComment = (new Date() - lastCommentDate) / (1000 * 60 * 60 * 24);
  return daysSinceLastComment >= 3;
}

// Should close if the issue is stale and the most recent comment is 4 or more days old
// This is the case because this bot will send a comment and add the `stale` label to the issue when the issue is marked as stale
const shouldClose = (issue) => {
  const lastCommentDate = new Date(issue.comments[issue.comments.length - 1].created_at);
  const daysSinceLastComment = (new Date() - lastCommentDate) / (1000 * 60 * 60 * 24);
  return daysSinceLastComment >= 4;
}

run().catch(err => console.error(err));
