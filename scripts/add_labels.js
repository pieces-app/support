const { Octokit } = require("@octokit/rest");
const githubToken = process.env.GITHUB_TOKEN;
const issueNumber = process.env.ISSUE_NUMBER;
const octokit = new Octokit({ auth: githubToken });

async function run() {
  const issue = await octokit.issues.get({
    owner: 'pieces-app',
    repo: 'support',
    issue_number: issueNumber,
  });

  const issueBodyLines = issue.data.body.split('\n');

  let software;
  if (issueBodyLines[0] === '### Software') software = issueBodyLines[2];

  if (software) await octokit.issues.addLabels({
    owner: 'pieces-app',
    repo: 'support',
    issue_number: issueNumber,
    labels: [software],
  });
}

run().catch(err => console.error(err));