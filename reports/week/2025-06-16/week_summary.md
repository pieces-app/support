# Support Ticket Report
- Generated: 2025-06-22 05:08:57
- Period: 2025-06-16 to 2025-06-22

## Summary
- **Total Tickets:** 11
- **Resolved:** 4
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#759](https://github.com/pieces-app/support/issues/759) | Can't login/authentication message won't arrive | 7.32 |
| [#713](https://github.com/pieces-app/support/issues/713) | LTM not working in Pieces CLI | 6.14 |
| [#751](https://github.com/pieces-app/support/issues/751) | Unable to generate Workstream Summary | 5.84 |
| [#754](https://github.com/pieces-app/support/issues/754) | LTM-2.5 causes Chrome to freeze on large dynamic pages | 5.84 |
| [#755](https://github.com/pieces-app/support/issues/755) | Pieces has become increasingly slow and is now unresponsive | 5.00 |

## Common Issues
### 1. Pieces OS Performance Issues and LTM Bugs
Multiple users report performance issues with Pieces OS, including Chrome freezes with LTM 2.5 enabled on large webpages, LTM not working in the Pieces CLI, and general slowness/unresponsiveness in the desktop application.  Disabling LTM 2.5 seems to resolve the Chrome freezing issue. Further investigation needed for CLI and general performance issues across different OS versions.

**Related Issues:**
- [#754](https://github.com/pieces-app/support/issues/754): LTM-2.5 causes Chrome to freeze on large dynamic pages
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 2. Pieces OS and Desktop App Performance Issues and Login Failures
Users are experiencing login failures due to verification codes not arriving.  Additionally, the Pieces desktop app is exhibiting slow performance, unresponsiveness, and errors, especially with new chats and cloud-connected features.  A service interruption is affecting cloud-connected features, and a cyber-related incident is being investigated.  Data security is not impacted. The Pieces team is working to restore full functionality.

**Related Issues:**
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#756](https://github.com/pieces-app/support/issues/756): 🚨 Ongoing Service Interruption Impacting Pieces Products and Cloud-Connected Features

### 3. LTM Context Extraction Failure in Pieces
Users report the `ask_pieces_ltm` tool and Pieces CLI fail to retrieve LTM context, despite LTM functionality within the Pieces desktop app.  The issue occurs across different OS and Pieces versions. Potential causes include MCP server implementation issues, authentication problems, or data access layer bugs.  Suggested troubleshooting includes restarting the MCP server, verifying Pieces OS permissions, and confirming LTM data collection.

**Related Issues:**
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 4. LTM connection issues and slow performance
Users report LTM connectivity problems in Pieces CLI and Desktop, including 404 errors and timeouts.  Slow performance and unresponsiveness also occur, sometimes with LTM enabled.  Issues appear across different OS versions (Windows, macOS) and Pieces versions (4.2.0, 4.2.1, 11.3.6, 12.0.0).  Suggested checks include verifying LTM settings, network connectivity, and Pieces version.  Consider disabling LTM temporarily as a workaround.

**Related Issues:**
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#758](https://github.com/pieces-app/support/issues/758): Error Activating LTM-2.5 During Onboarding
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 5. Pieces OS 12.0.0 Desktop App Issues
Users are experiencing issues with the Pieces OS 12.0.0 Desktop App, including initialization problems on Linux, login/authentication failures on macOS, and general cloud service interruptions affecting various features like Copilot and Workstream summaries.  The Pieces team is investigating these issues and working on a resolution.

**Related Issues:**
- [#752](https://github.com/pieces-app/support/issues/752): Doesn't move past Initialising Desktop screen
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive
- [#756](https://github.com/pieces-app/support/issues/756): 🚨 Ongoing Service Interruption Impacting Pieces Products and Cloud-Connected Features


## Recommendations
- Prioritize resolving the LTM connection and performance issues affecting the Pieces CLI and Desktop App, as indicated by multiple tickets (713, 754, 755, 758).  This appears to be a major source of user frustration.
- Investigate the login/authentication failures reported in ticket 759, especially for macOS users on Pieces OS 12.0.0.
- Address the Pieces OS 12.0.0 initialization problem on Linux (ticket 752) to ensure a smooth user experience across platforms.
- Provide regular updates and communication to users regarding the ongoing service interruption affecting cloud-connected features (ticket 756), and offer potential workarounds or temporary solutions.
- Review and improve the onboarding process, particularly the LTM-2.5 activation step, based on the error reported in ticket 758.
- Investigate the root cause of Chrome freezes with LTM 2.5 enabled on large webpages (ticket 754) and optimize performance for large content.
- Look into the MCP `ask_pieces_ltm` tool's failure to extract context (ticket 747) and ensure consistent LTM functionality across all Pieces components.
- Monitor and address the reported slow performance and unresponsiveness issues in the desktop application (ticket 755), especially for new chats and cloud-connected features.

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
