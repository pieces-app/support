# Support Ticket Report
- Generated: 2025-05-02 05:09:45
- Period: 2025-04-28 to 2025-05-02

## Summary
- **Total Tickets:** 7
- **Resolved:** 1
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#702](https://github.com/pieces-app/support/issues/702) | I'm unable to do Handshake with asana | 6.94 |
| [#701](https://github.com/pieces-app/support/issues/701) | Copilot not responding | 6.94 |
| [#691](https://github.com/pieces-app/support/issues/691) | OS: login does not work ( /os/sign_in HTTP 500) | 4.28 |
| [#700](https://github.com/pieces-app/support/issues/700) | Issues with local llm models | 3.50 |
| [#584](https://github.com/pieces-app/support/issues/584) | Copilot is not giving any feedback | 3.14 |

## Common Issues
### 1. Pieces OS and Integrations Failing
Users report various failures in Pieces OS and integrations like Asana and Copilot. Issues include Handshake failures with Asana, login failures with a 500 error on /os/sign_in, and Copilot unresponsiveness despite conversation summaries updating.  Suggested troubleshooting includes checking logs for errors, ensuring valid model versions, and verifying network connectivity.

**Related Issues:**
- [#702](https://github.com/pieces-app/support/issues/702): I'm unable to do Handshake with asana
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#701](https://github.com/pieces-app/support/issues/701): Copilot not responding

### 2. Copilot not responding or generating output
Users across different operating systems (macOS, Windows, Linux) are reporting that Copilot is not generating any output, often getting stuck in a loading state.  Some users report partial functionality, such as conversation summaries generating but no chat responses.  A common error message points to a 404 for the Gemini-pro model.  Suggested troubleshooting includes restarting, reinstalling, checking logs, and verifying model access.

**Related Issues:**
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#701](https://github.com/pieces-app/support/issues/701): Copilot not responding
- [#700](https://github.com/pieces-app/support/issues/700): Issues with local llm models

### 3. Pieces Copilot not responding or generating output
Users report Pieces Copilot not responding in conversations within the app or extensions (VS Code, Chrome).  Symptoms include continuous loading, lack of responses in chat, and potential Sentry Event Errors in logs.  Some conversation summaries or name updates may still function.  Issue affects Windows and macOS, across various Pieces OS and extension versions.  Troubleshooting steps like resets, restarts, reinstalls, and switching between On-Device and Cloud LLMs have been unsuccessful.  One user reported a conflict with the Visual Studio Diagnostic tool output.

**Related Issues:**
- [#697](https://github.com/pieces-app/support/issues/697): Visual Studio 2022 extension interfering with Diagnostic tool output
- [#701](https://github.com/pieces-app/support/issues/701): Copilot not responding
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback

### 4. Pieces for Developers and OS connection issues
Users are experiencing connection issues between Pieces for Developers and Pieces OS on Linux and macOS.  Problems include invalid port errors, login failures with HTTP 500 errors, and Copilot failing to provide feedback.  Check Pieces OS logs for error messages and ensure the correct port is configured. Verify Pieces for Developers and OS compatibility.

**Related Issues:**
- [#641](https://github.com/pieces-app/support/issues/641): Invalid port http://0.0.0.0:null/connect
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback


## Recommendations
- Prioritize resolving Copilot issues impacting multiple operating systems and extensions, focusing on the "Copilot not responding or generating output" common issue and the potential Gemini-pro model access problem.
- Investigate and address the Pieces OS and integrations failures, particularly the Asana handshake and login issues, potentially related to server-side errors ("/os/sign_in HTTP 500").
- Improve documentation and communication around Pieces OS and Pieces for Developers port configuration and compatibility to mitigate connection issues on Linux and macOS.
- Gather more data on local LLM model installation failures on Linux to understand the root cause and provide better support.
- Review and address the Visual Studio 2022 extension conflict with the Diagnostic tool output to improve the developer experience for Windows users.
- Monitor the frequency and activity levels of reported issues to identify and address emerging trends proactively.
- Consider implementing automated troubleshooting steps or self-service resources for common issues like Copilot unresponsiveness and connection problems to reduce support ticket volume.

## Daily Reports
Here are the daily reports for this week:

- [report_210641](daily/2025-04-29/report_210641.md)
- [report_131345](daily/2025-04-30/report_131345.md)
- [report_210651](daily/2025-04-30/report_210651.md)
- [report_131300](daily/2025-05-01/report_131300.md)
- [report_210644](daily/2025-05-01/report_210644.md)
- [report_050802](daily/2025-05-01/report_050802.md)
- [report_050756](daily/2025-05-02/report_050756.md)
