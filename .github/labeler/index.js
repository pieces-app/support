const { Octokit } = require("@octokit/rest");
const auth = process.env.GITHUB_TOKEN;
const issue_number = process.env.ISSUE_NUMBER;
const octokit = new Octokit({ auth });

async function run() {
  const issue = await octokit.issues.get({
    owner: 'pieces-app',
    repo: 'support',
    issue_number
  });

  const issueBodyLines = issue.data.body.split('\n');

  const labels = [];

  let software;
  if (issueBodyLines[0] === '### Software') software = issueBodyLines[2].toLowerCase();
  if (software) labels.push(`app:${software}`);

  let os;
  if (issueBodyLines[4] === '### Operating System') os = issueBodyLines[6].toLowerCase();
  if (os) labels.push(`os:${os}`);

  if (labels.length) await octokit.issues.addLabels({
    owner: 'pieces-app',
    repo: 'support',
    issue_number,
    labels
  });
}

run().catch(err => console.error(err));