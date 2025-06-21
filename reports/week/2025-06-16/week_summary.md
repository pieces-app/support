# Support Ticket Report
- Generated: 2025-06-21 21:07:16
- Period: 2025-06-16 to 2025-06-21

## Summary
- **Total Tickets:** 11
- **Resolved:** 4
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#759](https://github.com/pieces-app/support/issues/759) | Can't login/authentication message won't arrive | 7.32 |
| [#751](https://github.com/pieces-app/support/issues/751) | Unable to generate Workstream Summary | 6.17 |
| [#754](https://github.com/pieces-app/support/issues/754) | LTM-2.5 causes Chrome to freeze on large dynamic pages | 6.17 |
| [#713](https://github.com/pieces-app/support/issues/713) | LTM not working in Pieces CLI | 6.14 |
| [#755](https://github.com/pieces-app/support/issues/755) | Pieces has become increasingly slow and is now unresponsive | 5.00 |

## Common Issues
### 1. Pieces OS Performance Issues and LTM Integration Failures
Multiple reports indicate performance problems with Pieces OS, including Chrome freezes with LTM 2.5 enabled on large webpages, LTM functionality not working in the Pieces CLI, and overall application slowness/unresponsiveness.  Common factors include various Pieces OS versions, Windows and macOS platforms, and different LLM models. Disabling LTM 2.5 seems to resolve the Chrome freezing issue. Further investigation needed for CLI and general slowness.

**Related Issues:**
- [#754](https://github.com/pieces-app/support/issues/754): LTM-2.5 causes Chrome to freeze on large dynamic pages
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 2. Pieces OS and Desktop App Performance Issues and Login Failures
Users are experiencing login failures due to verification codes not arriving.  Additionally, slow performance, unresponsiveness, and errors in new chats and cloud-connected features like Copilot and Workstream summaries are reported.  A service interruption related to cloud services and a potential cyber incident is being investigated.  Data security is not impacted.

**Related Issues:**
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#756](https://github.com/pieces-app/support/issues/756): 🚨 Ongoing Service Interruption Impacting Pieces Products and Cloud-Connected Features

### 3. LTM Context Extraction Failure in Pieces
Users report the `ask_pieces_ltm` tool and Pieces CLI fail to retrieve LTM context, despite LTM functioning correctly within the Pieces desktop app.  The issue occurs across different OS and Pieces versions.  Potential causes include MCP server implementation issues, authentication problems, or data access layer bugs.  Workarounds or solutions are currently unknown, requiring further investigation by the Pieces team.

**Related Issues:**
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 4. LTM connection issues and slow performance
Users report LTM connectivity problems in Pieces CLI and Desktop, including 404 errors for the Gemini-Pro model and timeouts.  Slow performance and unresponsiveness are also observed, particularly with new chats, even with different LLM models.  The issue seems related to the Pieces app rather than the LLMs themselves.

**Related Issues:**
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#758](https://github.com/pieces-app/support/issues/758): Error Activating LTM-2.5 During Onboarding
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 5. Pieces OS 12.0.0 Desktop App Issues
Users are experiencing issues with the Pieces OS 12.0.0 Desktop application.  On Linux, the app gets stuck on the initialization screen. On macOS, users are unable to log in due to verification code issues. These problems coincide with a reported service interruption affecting cloud-connected features.  Check the status page for updates and consider reverting to a previous version if possible.

**Related Issues:**
- [#752](https://github.com/pieces-app/support/issues/752): Doesn't move past Initialising Desktop screen
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive
- [#756](https://github.com/pieces-app/support/issues/756): 🚨 Ongoing Service Interruption Impacting Pieces Products and Cloud-Connected Features


## Recommendations
- Prioritize resolving the LTM connection issues impacting the Pieces CLI and Desktop app, focusing on the 404 errors related to the Gemini-Pro model and timeout problems.
- Address the performance issues causing slowness and unresponsiveness in Pieces OS, especially in new chats and cloud-connected features like Copilot and Workstream summaries.
- Investigate and fix the login failures on macOS related to verification codes not arriving.
- Resolve the issue with the Pieces Desktop app getting stuck on the initialization screen on Linux.
- Provide support and workarounds for users experiencing Chrome freezes with LTM 2.5 enabled on large webpages.
- Communicate the service interruption and its impact on cloud-connected features to users, providing updates on the investigation and resolution progress.
- Consider adding more detailed logging to Pieces OS and the Desktop app to better diagnose and troubleshoot performance and connection problems.
- Review and improve the onboarding process for LTM 2.5 to prevent activation errors.
- Based on user feedback, create more documentation or FAQs about LTM usage, troubleshooting, and known issues.

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
