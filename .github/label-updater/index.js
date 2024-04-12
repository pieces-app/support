const { Octokit } = require("@octokit/rest");
const auth = process.env.GITHUB_TOKEN;
const issue_number = process.env.ISSUE_NUMBER;
const comment_id = process.env.COMMENT_ID;
const octokit = new Octokit({ auth });

async function run() {
  // Fetch the issue
  const issue = await octokit.issues.get({
    owner: 'pieces-app',
    repo: 'support',
    issue_number
  });

  // Get the author of the issue
  const author = issue.data.user.login;

  // Get the labels of the issue
  const issueLabels = issue.data.labels.map(label => label.name);

  // Fetch the comment
  const comment = await octokit.issues.getComment({
    owner: 'pieces-app',
    repo: 'support',
    comment_id
  });

  // Fetch the user
  const user = await octokit.users.getByUsername({
    username: comment.data.user.login
  });
  // If the issue is labeled `status:needs triage` and the user commenting is a Pieces team member
  if (issueLabels.includes('status:needs triage') && user.data.email && user.data.email.endsWith('@pieces.app')) {
    console.log('The user is a Pieces team member');

    // Remove the `status:needs triage` label
    await octokit.issues.removeLabel({
      owner: 'pieces-app',
      repo: 'support',
      issue_number,
      name: 'status:needs triage'
    });

    // Add the `status:waiting on user response` label
    await octokit.issues.addLabels({
      owner: 'pieces-app',
      repo: 'support',
      issue_number,
      labels: ['status:waiting on user response']
    });
  // If the issue is labeled `status:waiting on user response` and the user commenting is the author of the issue
  } else if (issueLabels.includes('status:waiting on user response') && author === user.data.login) {
    console.log('The user is the author of the issue');

    // Remove the `status:waiting on user response` label
    await octokit.issues.removeLabel({
      owner: 'pieces-app',
      repo: 'support',
      issue_number,
      name: 'status:waiting on user response'
    });

    // Add the `status:needs triage` label
    await octokit.issues.addLabels({
      owner: 'pieces-app',
      repo: 'support',
      issue_number,
      labels: ['status:user responded']
    });
  }
}

run().catch(err => console.error(err));
