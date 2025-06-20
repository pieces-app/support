# Support Ticket Report
- Generated: 2025-06-20 13:17:24
- Period: 2025-06-16 to 2025-06-20

## Summary
- **Total Tickets:** 11
- **Resolved:** 0
- **Open:** 11

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#713](https://github.com/pieces-app/support/issues/713) | LTM not working in Pieces CLI | 6.64 |
| [#754](https://github.com/pieces-app/support/issues/754) | LTM-2.5 causes Chrome to freeze on large dynamic pages | 6.59 |
| [#759](https://github.com/pieces-app/support/issues/759) | Can't login/authentication message won't arrive | 5.50 |
| [#751](https://github.com/pieces-app/support/issues/751) | Unable to generate Workstream Summary | 5.17 |
| [#758](https://github.com/pieces-app/support/issues/758) | Error Activating LTM-2.5 During Onboarding | 4.50 |

## Common Issues
### 1. Pieces OS Performance Issues and LTM Integration Failures
Multiple users report performance problems with Pieces OS, including Chrome freezes with LTM 2.5 enabled on large webpages, LTM not functioning in the CLI, and overall application slowness/unresponsiveness.  Common factors include various Pieces OS versions, Windows and macOS platforms, and different LLM models.  Disabling LTM 2.5 sometimes resolves the Chrome freezes. Further investigation into LTM integration and Pieces OS optimization is needed.

**Related Issues:**
- [#754](https://github.com/pieces-app/support/issues/754): LTM-2.5 causes Chrome to freeze on large dynamic pages
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 2. LTM connection failures and slow performance
Users report LTM connectivity issues across Pieces CLI and Desktop, including 404 errors for the Gemini-Pro model and timeouts.  Slow performance and unresponsiveness have also been observed, even with different LLM models.  Suggested solutions include verifying LTM settings, checking network connectivity, and ensuring sufficient resources.

**Related Issues:**
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#758](https://github.com/pieces-app/support/issues/758): Error Activating LTM-2.5 During Onboarding
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 3. LTM and model integration issues causing failures and slowdowns
Users report LTM context extraction failures in MCP and CLI despite functional LTM in the desktop app.  This manifests as "Failed to extract context" errors or slow/unresponsive behavior. Potential causes include MCP server implementation issues, data access layer bugs, authentication/permission problems, or initialization errors.  Some users experience general slowdowns and unresponsiveness, possibly related to LTM or model integration issues. Troubleshooting steps include restarting the MCP server, verifying permissions, and testing different clients/parameters. 

**Related Issues:**
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 4. Pieces Desktop App Issues on macOS and Linux
Users are experiencing various issues with the Pieces desktop app, including login failures due to missing verification codes on macOS, slow performance and unresponsiveness on macOS, and failure to initialize past the initial screen on Linux.  The issues appear to be related to recent updates.  Suggested solutions include checking for Pieces OS updates and reinstalling the app.

**Related Issues:**
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#752](https://github.com/pieces-app/support/issues/752): Doesn't move past Initialising Desktop screen

### 5. Users unable to cancel LLM downloads
Multiple users reported being unable to stop ongoing downloads of Large Language Models (LLMs).  The issue appears across different operating systems (Windows and macOS) and Pieces OS versions.  Error messages related to model access and HTTP connection failures are present. Further investigation into download cancellation mechanisms and error handling is needed.

**Related Issues:**
- [#459](https://github.com/pieces-app/support/issues/459): Bug: unable to cancel the download of an LLLM
- [#751](https://github.com/pieces-app/support/issues/751): Unable to generate Workstream Summary
- [#758](https://github.com/pieces-app/support/issues/758): Error Activating LTM-2.5 During Onboarding


## Recommendations
- Prioritize resolving LTM integration issues impacting Pieces CLI and Desktop applications, focusing on connectivity failures, 404 errors with Gemini-Pro, and slow performance. Investigate MCP server implementation, data access layer, authentication, and initialization processes.
- Address Pieces OS performance problems, particularly Chrome freezes with LTM 2.5 enabled, CLI functionality, and overall application slowness. Optimize Pieces OS and LTM integration for large web pages and dynamic content.
- Investigate and resolve the issue preventing users from canceling LLM downloads across different operating systems and Pieces OS versions.  Address error messages related to model access and HTTP connection failures.
- Resolve macOS and Linux desktop app issues, including login failures due to missing verification codes on macOS, slow performance and unresponsiveness on macOS, and initialization failures on Linux.  Verify compatibility with recent updates and provide clear instructions for users experiencing these issues.
- Improve communication with users regarding ongoing service interruptions and provide timely status updates on resolutions.  Proactively address user concerns about maintenance and service disruptions.
- Investigate and resolve the "Failed to extract context" error in the MCP `ask_pieces_ltm` tool, ensuring proper data access and functionality parity with the main Pieces application.
- Address the inability to generate workstream summaries due to HTTP connection failures and "Connection closed before full header was received" errors.  Improve error handling and connection stability.
- Investigate reports of the workstream activities tab not functioning correctly and provide solutions or workarounds for affected users. 

## Daily Reports
Here are the daily reports for this week:

- [report_131646](daily/2025-06-17/report_131646.md)
- [report_210659](daily/2025-06-17/report_210659.md)
- [report_210648](daily/2025-06-18/report_210648.md)
- [report_131708](daily/2025-06-18/report_131708.md)
- [report_050754](daily/2025-06-19/report_050754.md)
- [report_210641](daily/2025-06-19/report_210641.md)
- [report_131600](daily/2025-06-19/report_131600.md)
- [report_131535](daily/2025-06-20/report_131535.md)
