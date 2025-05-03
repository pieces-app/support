# Support Ticket Report
- Generated: 2025-05-03 13:11:58
- Period: 2025-04-28 to 2025-05-03

## Summary
- **Total Tickets:** 8
- **Resolved:** 1
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#702](https://github.com/pieces-app/support/issues/702) | I'm unable to do Handshake with asana | 6.50 |
| [#701](https://github.com/pieces-app/support/issues/701) | Copilot not responding | 4.74 |
| [#691](https://github.com/pieces-app/support/issues/691) | OS: login does not work ( /os/sign_in HTTP 500) | 4.20 |
| [#700](https://github.com/pieces-app/support/issues/700) | Issues with local llm models | 3.88 |
| [#697](https://github.com/pieces-app/support/issues/697) | Visual Studio 2022 extension interfering with Diagnostic tool output | 3.74 |

## Common Issues
### 1. Pieces OS and Integrations Failing
Users report various failures in Pieces OS and integrations like Asana and Copilot. Issues include Handshake failures with Asana, login failures with a 500 error on /os/sign_in, and Copilot unresponsiveness despite conversation summaries updating.  Suggested troubleshooting includes checking logs for errors, ensuring valid model versions, and verifying network connectivity.

**Related Issues:**
- [#702](https://github.com/pieces-app/support/issues/702): I'm unable to do Handshake with asana
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#701](https://github.com/pieces-app/support/issues/701): Copilot not responding

### 2. Local and Cloud LLM Model Issues
Users are experiencing issues with both locally hosted and cloud-based LLMs.  Symptoms include failure to install local models, Copilot unresponsiveness, and continuous loading.  A common error message points to a 404 for the Gemini Pro model.  Suggested solutions include verifying model access, checking network connectivity, and ensuring the Pieces app is up-to-date.

**Related Issues:**
- [#700](https://github.com/pieces-app/support/issues/700): Issues with local llm models
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#701](https://github.com/pieces-app/support/issues/701): Copilot not responding

### 3. Pieces Copilot not responding or generating output
Users report Pieces Copilot not responding in conversations within the app or extensions (VS Code, Chrome).  Symptoms include continuous loading, lack of responses in chat, and potential Sentry Event Errors in logs.  Some conversation summaries or name updates may still function.  Issue affects Windows and macOS, across various Pieces OS and extension versions.  Troubleshooting steps like resets, restarts, reinstalls, and switching between On-Device/Cloud LLMs have been unsuccessful.  Additionally, the Pieces plugin for Visual Studio may interfere with the Diagnostic tools output, resulting in a blank pane during debugging.

**Related Issues:**
- [#697](https://github.com/pieces-app/support/issues/697): Visual Studio 2022 extension interfering with Diagnostic tool output
- [#701](https://github.com/pieces-app/support/issues/701): Copilot not responding
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback

### 4. Pieces for Developers and OS connection issues
Users are experiencing connection issues between Pieces for Developers and Pieces OS on Linux and macOS.  Problems include invalid port errors, login failures with HTTP 500 errors, and Copilot failing to provide feedback.  Check Pieces OS logs for error messages and ensure proper port configuration. Verify Pieces for Developers and OS compatibility.

**Related Issues:**
- [#641](https://github.com/pieces-app/support/issues/641): Invalid port http://0.0.0.0:null/connect
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback

### 5. Issues with LLM Download and Functionality
Users are experiencing problems with LLM interaction, including an inability to cancel downloads on Windows, installation failures of locally hosted models on Linux, and unresponsiveness/loading issues with Copilot on macOS.  Further investigation is needed to determine the root cause and potential solutions across different operating systems and LLM types.

**Related Issues:**
- [#459](https://github.com/pieces-app/support/issues/459): Bug: unable to cancel the download of an LLLM
- [#700](https://github.com/pieces-app/support/issues/700): Issues with local llm models
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback


## Recommendations
- Prioritize resolving Copilot issues (unresponsiveness, loading, and LLM model errors) across Windows, macOS, and Linux, given their high frequency and impact on core functionality.
- Investigate and address the root cause of Asana handshake failures and Pieces OS login issues (HTTP 500 errors) on Linux, focusing on potential port conflicts and authentication problems.
- Improve LLM management by fixing the LLM download cancellation bug on Windows and ensuring seamless installation of locally hosted models on Linux.
- Address the conflict between the Pieces Visual Studio extension and Diagnostic tools output on Windows to enhance the debugging experience.
- Review and update documentation regarding port configuration and compatibility between Pieces for Developers and Pieces OS, especially for Linux and macOS users.
- Proactively monitor error logs, particularly Sentry events, to identify and address emerging issues quickly.
- Consider implementing automated tests to catch issues like Asana handshake failures, login errors, and LLM installation problems before they reach users.
- Gather more data on user workflows and pain points to identify areas for improvement in the Pieces ecosystem and prioritize future development efforts based on user needs and impact. 

## Daily Reports
Here are the daily reports for this week:

- [report_210641](daily/2025-04-29/report_210641.md)
- [report_131345](daily/2025-04-30/report_131345.md)
- [report_210651](daily/2025-04-30/report_210651.md)
- [report_131300](daily/2025-05-01/report_131300.md)
- [report_210644](daily/2025-05-01/report_210644.md)
- [report_050802](daily/2025-05-01/report_050802.md)
- [report_131321](daily/2025-05-02/report_131321.md)
- [report_050756](daily/2025-05-02/report_050756.md)
- [report_210635](daily/2025-05-02/report_210635.md)
