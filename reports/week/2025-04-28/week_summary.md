# Support Ticket Report
- Generated: 2025-05-04 13:12:31
- Period: 2025-04-28 to 2025-05-04

## Summary
- **Total Tickets:** 9
- **Resolved:** 2
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#648](https://github.com/pieces-app/support/issues/648) | Pieces Desktop not Launching on my Windows PC | 6.02 |
| [#702](https://github.com/pieces-app/support/issues/702) | I'm unable to do Handshake with asana | 5.60 |
| [#700](https://github.com/pieces-app/support/issues/700) | Issues with local llm models | 4.26 |
| [#691](https://github.com/pieces-app/support/issues/691) | OS: login does not work ( /os/sign_in HTTP 500) | 4.12 |
| [#697](https://github.com/pieces-app/support/issues/697) | Visual Studio 2022 extension interfering with Diagnostic tool output | 3.50 |

## Common Issues
### 1. Pieces Desktop and Copilot not responding after update
Users report Pieces Desktop and Copilot become unresponsive after updating to recent versions on Windows and Linux. Issues include app failing to launch, getting stuck during loading, and Copilot not responding in conversations. Troubleshooting steps like restarting, reinstalling, and checking logs have not resolved the problems. Some users report partial functionality like conversation summaries updating despite unresponsiveness. 

**Related Issues:**
- [#648](https://github.com/pieces-app/support/issues/648): Pieces Desktop not Launching on my Windows PC
- [#701](https://github.com/pieces-app/support/issues/701): Copilot not responding
- [#700](https://github.com/pieces-app/support/issues/700): Issues with local llm models

### 2. Pieces Integrations and Copilot Failures
Users report failures with Pieces integrations (Asana handshake) and Copilot unresponsiveness across desktop and extensions.  Copilot exhibits continuous loading, occasional summary updates, and Sentry errors in logs. Asana integration fails during handshake with "failed to do handshake" error.  HTTP 500 errors observed during login on Linux. Troubleshooting includes resets, restarts, reinstalls, and switching LLMs.

**Related Issues:**
- [#702](https://github.com/pieces-app/support/issues/702): I'm unable to do Handshake with asana
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#701](https://github.com/pieces-app/support/issues/701): Copilot not responding

### 3. Pieces Desktop fails to launch or connect to Pieces OS
Users report Pieces Desktop application failing to launch or connect to Pieces OS across different operating systems (Windows, Linux). Issues include "Invalid port" errors, indefinite loading at the "Verify Dependency Connections" step, and HTTP 500 errors during login.  Suggested solutions include checking Pieces OS port configuration, reinstalling Pieces Desktop, and verifying Pieces OS is running correctly.

**Related Issues:**
- [#641](https://github.com/pieces-app/support/issues/641): Invalid port http://0.0.0.0:null/connect
- [#648](https://github.com/pieces-app/support/issues/648): Pieces Desktop not Launching on my Windows PC
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)

### 4. Pieces for Windows: Extension and App Functionality Issues
Multiple users report issues with Pieces for Windows, including VS 2022 extension conflicts affecting Diagnostic Tools, Copilot unresponsiveness in conversations and extensions, and Desktop app failing to launch past "Ensure Core Dependencies" after update.  Suggested troubleshooting includes disabling extensions, checking logs, reinstalling apps, and restarting systems. Further investigation into Pieces OS and app compatibility is needed.

**Related Issues:**
- [#697](https://github.com/pieces-app/support/issues/697): Visual Studio 2022 extension interfering with Diagnostic tool output
- [#701](https://github.com/pieces-app/support/issues/701): Copilot not responding
- [#648](https://github.com/pieces-app/support/issues/648): Pieces Desktop not Launching on my Windows PC

### 5. Local and Cloud LLM Model Issues
Users are experiencing issues with both locally hosted and cloud-based LLMs.  Symptoms include failure to install local models, Copilot unresponsiveness, and continuous loading.  A common error message points to a 404 for the Gemini Pro model.  Suggested troubleshooting includes checking model validity and project access.

**Related Issues:**
- [#700](https://github.com/pieces-app/support/issues/700): Issues with local llm models
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#701](https://github.com/pieces-app/support/issues/701): Copilot not responding


## Recommendations
- Prioritize resolving the "Pieces Desktop and Copilot not responding after update" issue, focusing on Windows and Linux given the high frequency and impact on core functionality.
- Investigate the root cause of Copilot unresponsiveness across desktop and extensions, addressing the potential connection to LLM model issues (both local and cloud-based) and Sentry errors.
- Address Pieces Desktop launch failures, focusing on "Invalid port" errors and dependency connection problems on Linux and Windows. Review Pieces OS and app compatibility.
- Improve Asana integration handshake reliability, addressing the "failed to do handshake" error and potential conflicts with Pieces for Windows extensions.
- Review and address HTTP 500 errors during login on Linux, impacting Pieces OS and Desktop app connectivity.
- Investigate VS 2022 extension conflicts affecting Diagnostic Tools on Windows and ensure compatibility with Pieces Desktop.
- Improve communication with users experiencing Copilot and Desktop app issues, providing updates and workarounds while fixes are being developed.
- Monitor and address local LLM model installation failures on Linux and investigate the 404 error related to the Gemini Pro model.
- Consider adding more detailed logging and error reporting to Pieces OS and Desktop applications to aid in troubleshooting and identifying root causes of issues.
- Proactively monitor support tickets for emerging trends and prioritize issues based on frequency, severity, and user impact to optimize support operations efficiency.

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
