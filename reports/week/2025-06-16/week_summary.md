# Support Ticket Report
- Generated: 2025-06-21 13:13:54
- Period: 2025-06-16 to 2025-06-21

## Summary
- **Total Tickets:** 11
- **Resolved:** 4
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#759](https://github.com/pieces-app/support/issues/759) | Can't login/authentication message won't arrive | 7.32 |
| [#713](https://github.com/pieces-app/support/issues/713) | LTM not working in Pieces CLI | 6.58 |
| [#751](https://github.com/pieces-app/support/issues/751) | Unable to generate Workstream Summary | 6.17 |
| [#754](https://github.com/pieces-app/support/issues/754) | LTM-2.5 causes Chrome to freeze on large dynamic pages | 6.17 |
| [#755](https://github.com/pieces-app/support/issues/755) | Pieces has become increasingly slow and is now unresponsive | 5.00 |

## Common Issues
### 1. Pieces OS Performance Issues and LTM Integration Failures
Multiple reports indicate performance problems with Pieces OS, including Chrome freezes with LTM 2.5 enabled on large webpages, LTM functionality not working in the Pieces CLI, and overall application slowness/unresponsiveness.  Common factors include various Pieces OS versions, Windows and macOS platforms, and different LLM models. Disabling LTM 2.5 seems to resolve the Chrome freezing issue. Further investigation needed for CLI and general slowness.

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

### 3. Pieces OS and Desktop App Performance Issues and Login Failures
Users are experiencing login failures due to verification codes not arriving.  Additionally, slow performance, unresponsiveness, and errors have been reported with new chats, workstream summaries, and other cloud-connected features.  A service interruption is currently being investigated, potentially related to cloud service issues or a cyber-related incident.  Data security is not believed to be impacted.

**Related Issues:**
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#756](https://github.com/pieces-app/support/issues/756): 🚨 Ongoing Service Interruption Impacting Pieces Products and Cloud-Connected Features

### 4. LTM Context Extraction Failure in Pieces
Users report the `ask_pieces_ltm` tool and Pieces CLI fail to retrieve LTM context, despite LTM functionality within the Pieces desktop app.  The issue occurs across various OS, Pieces versions, and LLM models.  Potential causes include MCP server implementation issues, authentication problems, or data access layer bugs.  Workarounds such as restarting the MCP server and verifying permissions have been unsuccessful.

**Related Issues:**
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 5. Pieces OS 12.0.0 Desktop App Issues
Users are experiencing issues with the Pieces OS 12.0.0 Desktop application.  On Linux, the app gets stuck on the initialization screen. On macOS, users are unable to log in due to verification code issues. These problems coincide with a reported service interruption affecting cloud-connected features.  Check the status page for updates and consider reverting to a prior version if possible.

**Related Issues:**
- [#752](https://github.com/pieces-app/support/issues/752): Doesn't move past Initialising Desktop screen
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive
- [#756](https://github.com/pieces-app/support/issues/756): 🚨 Ongoing Service Interruption Impacting Pieces Products and Cloud-Connected Features


## Recommendations
- Prioritize resolving the LTM connection failures and performance issues as they affect multiple products and impact core functionality.
- Investigate the login failures and verification code delivery problems impacting macOS users on version 12.0.0.
- Address the Pieces OS 12.0.0 initialization issue on Linux to ensure users can access the application.
- Provide support and workarounds for users experiencing Chrome freezes with LTM 2.5 enabled on large webpages.
- Monitor and address the ongoing service interruption affecting cloud-connected features, keeping users informed of progress.
- Review and improve the onboarding process, particularly LTM 2.5 activation, to prevent timeout errors.
- Investigate the "Failed to extract context" error in the `ask_pieces_ltm` tool and Pieces CLI.
- Gather more data on the unresponsive desktop application and slow performance issues to identify the root cause and potential solutions.
- Consider adding more detailed logging to Pieces OS and the desktop application to aid in troubleshooting and faster resolution times.
- Proactively communicate with users about known issues and provide updates on resolution progress through the status page and other channels.

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
- [report_210626](daily/2025-06-20/report_210626.md)
