const { Octokit } = require("@octokit/rest");
const auth = process.env.GITHUB_TOKEN;
const issues = process.env.ISSUES;
const octokit = new Octokit({ auth });

async function run() {
  const openIssuesWaitingOnUserResponse = issues.filter(issue => issue.state === 'open' && issue.labels.some(label => label.name === 'status:waiting on user response'));
  console.log(`Found ${openIssuesWaitingOnUserResponse.length} open issues with the 'status:waiting on user response' label.`);
  console.log(openIssuesWaitingOnUserResponse.map(issue => issue.number).join('\n'));

  for (const issue of openIssuesWaitingOnUserResponse) {
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
