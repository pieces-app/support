# Support Ticket Report
- Generated: 2025-06-22 21:07:39
- Period: 2025-06-16 to 2025-06-22

## Summary
- **Total Tickets:** 12
- **Resolved:** 4
- **Open:** 8

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#713](https://github.com/pieces-app/support/issues/713) | LTM not working in Pieces CLI | 6.09 |
| [#754](https://github.com/pieces-app/support/issues/754) | LTM-2.5 causes Chrome to freeze on large dynamic pages | 5.84 |
| [#759](https://github.com/pieces-app/support/issues/759) | Can't login/authentication message won't arrive | 5.80 |
| [#751](https://github.com/pieces-app/support/issues/751) | Unable to generate Workstream Summary | 5.21 |
| [#762](https://github.com/pieces-app/support/issues/762) | UI in Pieces OS for VS Code is extremely slow after sending several messages | 4.42 |

## Common Issues
### 1. Pieces OS Performance Issues and LTM Integration Failures
Multiple reports indicate performance problems with Pieces OS 12.0.0, including Chrome freezes on large dynamic pages with LTM 2.5 enabled and VS Code UI slowdowns after multiple Copilot messages.  LTM integration also appears faulty in the Pieces CLI (version 11.3.6). Users report high CPU usage and unresponsiveness. Disabling LTM 2.5 sometimes resolves browser freezes. Further investigation into LTM integration and resource management is needed.

**Related Issues:**
- [#754](https://github.com/pieces-app/support/issues/754): LTM-2.5 causes Chrome to freeze on large dynamic pages
- [#762](https://github.com/pieces-app/support/issues/762): UI in Pieces OS for VS Code is extremely slow after sending several messages
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI

### 2. Pieces OS Performance Degradation and Unresponsiveness
Users report slow performance, unresponsiveness, and errors in Pieces OS across VS Code and Desktop app (macOS and Windows). Issues include slow UI, delayed LLM responses, and login failures.  The problems seem to worsen over time and persist across different LLM models. Some users experience high CPU and RAM usage. One user could not receive a login verification code.

**Related Issues:**
- [#762](https://github.com/pieces-app/support/issues/762): UI in Pieces OS for VS Code is extremely slow after sending several messages
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive

### 3. LTM Context Extraction Failure in Pieces
Users report the `ask_pieces_ltm` tool and Pieces CLI fail to retrieve LTM context, despite LTM functioning correctly within the Pieces desktop application.  The issue occurs across various operating systems, Pieces versions, and LLM models.  Users have tried restarting the MCP server, verifying permissions, and testing different clients, but the problem persists. Further investigation into MCP server's LTM data access is required.

**Related Issues:**
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 4. PiecesOS Cloud Service Interruption and Feature Issues
Users are experiencing issues with cloud-connected features like Copilot, Workstream summaries, and snippet functionalities. Potential causes include cloud service problems and a possible cyber-related incident.  Data security is not believed to be impacted. The Pieces team is investigating and working to restore full functionality. Some users also report login/authentication issues with verification codes not arriving.

**Related Issues:**
- [#756](https://github.com/pieces-app/support/issues/756): 🚨 Ongoing Service Interruption Impacting Pieces Products and Cloud-Connected Features
- [#751](https://github.com/pieces-app/support/issues/751): Unable to generate Workstream Summary
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive

### 5. LTM connection issues and slow performance
Users report LTM connectivity problems in Pieces CLI and Desktop, including 404 errors and timeouts.  Slow performance and unresponsiveness are also observed, sometimes accompanied by error messages.  Potential solutions include verifying LTM settings, checking network connectivity, and ensuring sufficient resources.

**Related Issues:**
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#758](https://github.com/pieces-app/support/issues/758): Error Activating LTM-2.5 During Onboarding
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive


## Recommendations
- Prioritize resolving LTM integration issues impacting Pieces CLI and VS Code to improve user experience and expand LTM accessibility.
- Investigate and address the performance degradation and unresponsiveness in Pieces OS across different platforms and applications to ensure stability and responsiveness.
- Address cloud service interruptions and feature issues affecting Copilot, Workstream summaries, and snippet functionalities to restore full functionality and user confidence.
- Improve communication with users regarding ongoing service interruptions and provide timely updates on resolution progress.
- Investigate and resolve the login/authentication issues, specifically the problem with verification codes not arriving, to ensure seamless user access.

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
- [report_210624](daily/2025-06-22/report_210624.md)
