# Support Ticket Report
- Generated: 2025-08-17 13:17:27
- Period: 2025-08-11 to 2025-08-17

## Summary
- **Total Tickets:** 31
- **Resolved:** 13
- **Open:** 18

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 7.85 |
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 6.53 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 5.76 |
| [#816](https://github.com/pieces-app/support/issues/816) | Pieces Desktop Connection Leak | 5.02 |
| [#829](https://github.com/pieces-app/support/issues/829) | Unable to open Pieces Settings Service | 4.99 |

## Common Issues
### 1. LTM and Workstream Issues on macOS
Users on macOS are experiencing issues with LTM and Workstream functionality, including queries not returning results, slow performance, and failure to record new activities.  Some users encounter "Pro membership required" errors despite having a Pro subscription.  Potential solutions include clearing LTM data (although the button is reported as not working), reinstalling the app, and verifying Pro subscription status.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 2. Pieces MCP Integration Issues
Multiple reports indicate Pieces MCP integration problems, including "Failed to extract context" errors despite functional LTM, SSE connection hangs preventing tool registration in Claude Code/VS Code, and connection leaks caused by the Pieces Desktop app.  Suggested solutions include verifying LTM functionality, checking MCP server logs, restarting Pieces OS, and closing/monitoring the Pieces Desktop app.

**Related Issues:**
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak

### 3. Pieces Pro Features Unavailable Despite Upgrade
Users are reporting inability to access Pieces Pro features after upgrading. Issues include LLM not upgrading to the latest version, browser extensions failing to connect to Pieces OS, and "Pro required" errors for Pro users.  Common factors include recent Pro upgrade, VPN use, and Pieces OS v12.1.1.  Troubleshooting steps like restarting, re-login, and VPN adjustments haven't resolved the problems.

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 4. Pieces for Developers startup crashes or fails to initialize
Users on Linux and Windows experience crashes or initialization failures with Pieces for Developers. On Linux, core dumps occur after installation, potentially due to XCB issues and GTK conflicts. On Windows, the application redirects to Pieces support upon launch.  A common solution involves ensuring core dependencies are met and checking for GTK version compatibility on Linux systems. Reinstalling or updating the application may also resolve the issue.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#826](https://github.com/pieces-app/support/issues/826): Pieces os
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 5. Pieces Desktop and OS exhibit connection and setting persistence issues
Users report connection leaks with Pieces Desktop on Windows and macOS, causing MCP to disconnect every 5-10 minutes.  A high number of connections from the Desktop app to the OS server is observed.  Additionally, the Auto-Generated Context setting in Machine Learning consistently reverts to "Medium" despite user changes.  Suggested workarounds include closing Pieces Desktop, monitoring connections, and restarting Pieces OS.

**Related Issues:**
- [#796](https://github.com/pieces-app/support/issues/796): MCP goes down in Cursor every 5-10 minutes
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#801](https://github.com/pieces-app/support/issues/801): Auto Generated Context Always returns to Medium


## Recommendations
- Prioritize resolving LTM and Workstream issues on macOS, focusing on data clearing functionality, query performance, and Pro subscription validation.
- Investigate and fix Pieces MCP integration problems, addressing "Failed to extract context" errors, SSE connection hangs, and connection leaks caused by the Pieces Desktop app.
- Address Pieces Pro access issues after upgrade, ensuring LLM version updates, browser extension connectivity, and consistent Pro feature availability.
- Troubleshoot Pieces for Developers startup crashes on Linux (XCB/GTK conflicts) and Windows (support redirection), verifying core dependencies and installation procedures.
- Mitigate Pieces Desktop and OS connection issues, focusing on connection leaks on Windows and macOS impacting MCP stability and setting persistence.
- Improve communication with Pro users experiencing issues, providing clear guidance on troubleshooting steps and confirming resolution after upgrade.

## Daily Reports
Here are the daily reports for this week:

- [report_210706](daily/2025-08-12/report_210706.md)
- [report_210659](daily/2025-08-13/report_210659.md)
- [report_210715](daily/2025-08-14/report_210715.md)
- [report_210640](daily/2025-08-15/report_210640.md)
- [report_131527](daily/2025-08-15/report_131527.md)
- [report_210612](daily/2025-08-16/report_210612.md)
- [report_131343](daily/2025-08-17/report_131343.md)
