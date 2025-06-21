# Support Ticket Report
- Generated: 2025-06-21 05:08:33
- Period: 2025-06-16 to 2025-06-21

## Summary
- **Total Tickets:** 11
- **Resolved:** 4
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#759](https://github.com/pieces-app/support/issues/759) | Can't login/authentication message won't arrive | 8.50 |
| [#713](https://github.com/pieces-app/support/issues/713) | LTM not working in Pieces CLI | 6.58 |
| [#751](https://github.com/pieces-app/support/issues/751) | Unable to generate Workstream Summary | 6.17 |
| [#754](https://github.com/pieces-app/support/issues/754) | LTM-2.5 causes Chrome to freeze on large dynamic pages | 6.17 |
| [#755](https://github.com/pieces-app/support/issues/755) | Pieces has become increasingly slow and is now unresponsive | 5.34 |

## Common Issues
### 1. Pieces OS Performance Issues and LTM Integration Failures
Users report performance issues with Pieces OS, including Chrome freezes with LTM 2.5 enabled on large webpages, LTM not working in Pieces CLI, and slow/unresponsive new chats.  Common factors include various Pieces OS versions, Windows and macOS platforms, and different LLM models. Disabling LTM 2.5 sometimes resolves Chrome freezes. Further investigation needed into LTM integration and overall performance bottlenecks.

**Related Issues:**
- [#754](https://github.com/pieces-app/support/issues/754): LTM-2.5 causes Chrome to freeze on large dynamic pages
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 2. Pieces OS and Desktop App Performance Issues and Login Failures
Users are experiencing login failures due to verification codes not arriving, slow performance, and unresponsiveness, especially with 'New chats'.  The issues appear to be related to cloud-connected features and a potential service interruption.  Pieces is investigating the root cause and working on restoring full functionality.  Users can contact support for urgent concerns.

**Related Issues:**
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#756](https://github.com/pieces-app/support/issues/756): 🚨 Ongoing Service Interruption Impacting Pieces Products and Cloud-Connected Features

### 3. LTM connection issues and slow performance
Users report LTM connectivity problems in Pieces CLI and Desktop, including 404 errors and timeouts.  Slow performance and unresponsiveness are also observed, sometimes accompanied by error messages.  Potential solutions include verifying LTM settings, checking network connectivity, and ensuring sufficient resources.

**Related Issues:**
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#758](https://github.com/pieces-app/support/issues/758): Error Activating LTM-2.5 During Onboarding
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 4. LTM Context Extraction Failure in Pieces
Users report the `ask_pieces_ltm` tool and Pieces CLI fail to retrieve LTM context, despite LTM functionality within the Pieces desktop app.  The issue occurs across different OS and Pieces versions. Potential causes include MCP server implementation issues, authentication problems, or data access layer bugs.  Suggested troubleshooting includes restarting the Pieces MCP server and verifying Pieces OS permissions. Further investigation into the interaction between MCP tools and the LTM data access layer is needed.

**Related Issues:**
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 5. Pieces OS 12.0.0 Desktop App Issues
Users are experiencing issues with the Pieces OS 12.0.0 Desktop application.  On Linux, the app gets stuck on the initialization screen. On macOS, users are unable to log in due to verification code issues. These problems coincide with a reported service interruption affecting cloud-connected features.  Check the status page for updates and consider reverting to a previous version if possible.

**Related Issues:**
- [#752](https://github.com/pieces-app/support/issues/752): Doesn't move past Initialising Desktop screen
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive
- [#756](https://github.com/pieces-app/support/issues/756): 🚨 Ongoing Service Interruption Impacting Pieces Products and Cloud-Connected Features


## Recommendations
- Prioritize resolving login and LTM connection issues impacting Pieces OS 12.0.0 and Desktop App, focusing on verification code delivery and cloud service stability.
- Investigate and address the root cause of slow performance and unresponsiveness, particularly with 'New chats' and LTM integration, considering resource constraints and potential bottlenecks.
- Improve communication with users regarding the ongoing service interruption and provide regular updates on the status page, including estimated resolution times and workarounds.
- Develop more robust error handling and messaging for LTM context extraction failures in Pieces CLI and MCP tools, providing clearer guidance for troubleshooting and resolution.
- Enhance documentation and support resources for LTM setup, configuration, and troubleshooting, addressing common issues like 404 errors and timeouts.

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
