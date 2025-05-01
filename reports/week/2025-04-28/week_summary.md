# Support Ticket Report
- Generated: 2025-05-01 21:09:16
- Period: 2025-04-28 to 2025-05-01

## Summary
- **Total Tickets:** 6
- **Resolved:** 0
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#701](https://github.com/pieces-app/support/issues/701) | Copilot not responding | 5.68 |
| [#700](https://github.com/pieces-app/support/issues/700) | Issues with local llm models | 4.42 |
| [#691](https://github.com/pieces-app/support/issues/691) | OS: login does not work ( /os/sign_in HTTP 500) | 3.91 |
| [#641](https://github.com/pieces-app/support/issues/641) | Invalid port http://0.0.0.0:null/connect | 3.27 |
| [#584](https://github.com/pieces-app/support/issues/584) | Copilot is not giving any feedback | 3.15 |

## Common Issues
### 1. Copilot Unresponsive, Not Generating Feedback
Users report Copilot not responding in conversations or extensions (VS Code, Chrome) across Windows, macOS, and Linux. Copilot continuously loads, sometimes updating conversation summaries or names, but doesn't respond in chat.  Troubleshooting steps like resetting, restarting, reinstalling, and switching between On-Device and Cloud LLMs have been unsuccessful.  Log files contain Sentry Event Errors.  One user also reported issues installing locally hosted models.

**Related Issues:**
- [#701](https://github.com/pieces-app/support/issues/701): Copilot not responding
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#700](https://github.com/pieces-app/support/issues/700): Issues with local llm models

### 2. Pieces Copilot not responding or generating output
Users report Pieces Copilot not responding in conversations within the app or extensions (VS Code, Chrome).  Symptoms include continuous loading, lack of responses in chat, and potential Sentry Event Errors in logs.  Some conversation summaries or name updates may still function.  Issue affects Windows and macOS, across various Pieces OS and extension versions.  Troubleshooting steps like resets, restarts, reinstalls, and switching between On-Device and Cloud LLMs have been unsuccessful.  One user reported a conflict with Visual Studio's Diagnostic Tools, resolved by disabling the Pieces plugin.

**Related Issues:**
- [#697](https://github.com/pieces-app/support/issues/697): Visual Studio 2022 extension interfering with Diagnostic tool output
- [#701](https://github.com/pieces-app/support/issues/701): Copilot not responding
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback

### 3. Pieces for Developers and OS connection issues
Users are experiencing connection issues between Pieces for Developers and Pieces OS on Linux and macOS.  Problems include invalid port errors, login failures with HTTP 500 errors, and Copilot failing to provide feedback.  Check Pieces OS logs for error messages and ensure proper port configuration. Verify Pieces for Developers and OS versions for compatibility.

**Related Issues:**
- [#641](https://github.com/pieces-app/support/issues/641): Invalid port http://0.0.0.0:null/connect
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback


## Recommendations
- Prioritize resolving the "Copilot Unresponsive" issue affecting Windows, macOS, and Linux users across VS Code, Chrome, and Desktop app. Investigate Sentry Event Errors and local model installation issues.
- Address Pieces Copilot and OS connection problems on Linux and macOS. Check port configurations, logs, and version compatibility between Pieces for Developers and OS.
- Investigate the HTTP 500 error during OS login on Linux.  Review related logs and error messages.
- Look into the invalid port error ("http://0.0.0.0:null/connect") reported on Linux. Ensure correct port configuration in Pieces for Developers and OS.
- Address the Visual Studio 2022 extension conflict with Diagnostic Tools on Windows. Ensure compatibility and consider a workaround or fix for affected users.
- Proactively monitor and address the "Copilot not giving any feedback" issue on macOS and other platforms. This may be related to the broader Copilot unresponsiveness problem.
- Improve communication with users experiencing Copilot issues. Provide updates, workarounds, or temporary solutions while a fix is being developed.
- Collect more detailed logs and system information from affected users to aid in debugging and resolution of Copilot and connection issues.
- Consider adding troubleshooting steps for common Copilot issues to the Pieces documentation or support resources.
- Review and update the local LLM model installation process on Linux to address reported issues and improve user experience.
- Analyze support tickets for trends and patterns to identify potential areas for improvement in the software or documentation.
- Prioritize bug fixes and improvements based on the frequency and impact of reported issues, focusing on those affecting the most users and core functionality like Copilot responsiveness and OS connectivity.

## Daily Reports
Here are the daily reports for this week:

- [report_210641](daily/2025-04-29/report_210641.md)
- [report_131345](daily/2025-04-30/report_131345.md)
- [report_210651](daily/2025-04-30/report_210651.md)
- [report_131300](daily/2025-05-01/report_131300.md)
- [report_210644](daily/2025-05-01/report_210644.md)
- [report_050802](daily/2025-05-01/report_050802.md)
