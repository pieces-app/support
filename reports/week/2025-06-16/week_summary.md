# Support Ticket Report
- Generated: 2025-06-22 13:13:40
- Period: 2025-06-16 to 2025-06-22

## Summary
- **Total Tickets:** 11
- **Resolved:** 4
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#759](https://github.com/pieces-app/support/issues/759) | Can't login/authentication message won't arrive | 6.58 |
| [#713](https://github.com/pieces-app/support/issues/713) | LTM not working in Pieces CLI | 6.14 |
| [#751](https://github.com/pieces-app/support/issues/751) | Unable to generate Workstream Summary | 5.84 |
| [#754](https://github.com/pieces-app/support/issues/754) | LTM-2.5 causes Chrome to freeze on large dynamic pages | 5.84 |
| [#755](https://github.com/pieces-app/support/issues/755) | Pieces has become increasingly slow and is now unresponsive | 4.73 |

## Common Issues
### 1. Pieces OS Performance Issues and LTM Bugs
Multiple reports indicate performance problems with Pieces OS, including Chrome freezes with LTM 2.5 on large dynamic pages, LTM not working in Pieces CLI, and general slowness/unresponsiveness in the desktop app.  Disabling LTM 2.5 seems to resolve the Chrome freezing issue. Further investigation needed for CLI and general slowness.

**Related Issues:**
- [#754](https://github.com/pieces-app/support/issues/754): LTM-2.5 causes Chrome to freeze on large dynamic pages
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 2. LTM Context Extraction Failure in Pieces
Users report the `ask_pieces_ltm` tool and Pieces CLI fail to retrieve LTM context, despite LTM functionality within the Pieces desktop app.  The issue occurs across different OS and Pieces versions. Potential causes include MCP server implementation issues, authentication problems, or data access layer bugs.  Suggested solutions include verifying MCP server functionality, checking Pieces OS permissions, and ensuring proper LTM data collection.

**Related Issues:**
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 3. Pieces OS and Desktop App Performance Issues and Login Failures
Users are experiencing login failures due to verification codes not arriving, slow performance, and unresponsiveness, especially with new chats and cloud-connected features.  The Pieces team has acknowledged a service interruption and is investigating the root cause, including a potential cyber-related incident.  They assure users that data security is not impacted and are working to restore full functionality.

**Related Issues:**
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#756](https://github.com/pieces-app/support/issues/756): 🚨 Ongoing Service Interruption Impacting Pieces Products and Cloud-Connected Features

### 4. LTM connection issues and slow performance
Users report LTM connectivity problems in Pieces CLI and Desktop, including 404 errors and timeouts.  Slow performance and unresponsiveness are also observed, sometimes accompanied by error messages.  Potential solutions include checking LTM status, verifying Pieces OS and application versions, and ensuring sufficient system resources.

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
- Prioritize resolving login failures and verification code issues impacting macOS users, particularly in Pieces OS 12.0.0.
- Investigate and address the performance issues and unresponsiveness reported in Pieces OS, Desktop App, and CLI, especially related to LTM connectivity and new chats.
- Focus on fixing the LTM context extraction failures in the `ask_pieces_ltm` tool and Pieces CLI, ensuring consistent LTM functionality across all platforms.
- Address the Chrome freezing issue with LTM 2.5 on large dynamic pages, optimizing LTM performance to handle large webpages efficiently.
- Monitor and provide updates on the ongoing service interruption affecting cloud-connected features, keeping users informed about progress and estimated restoration time.
- Review and improve the LTM onboarding process, addressing the timeout errors encountered during LTM 2.5 activation.
- Consider adding more detailed logging and error reporting to Pieces OS and applications to facilitate faster root cause analysis and debugging.
- Proactively communicate with users experiencing issues, offering workarounds or temporary solutions while fixes are being implemented.
- Analyze user feedback and prioritize bug fixes based on frequency and impact, focusing on the most common and disruptive issues first.
- Allocate resources to address the backlog of open tickets, aiming to reduce resolution time and improve overall support responsiveness.

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
