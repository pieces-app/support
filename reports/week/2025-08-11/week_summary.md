# Support Ticket Report
- Generated: 2025-08-16 05:10:22
- Period: 2025-08-11 to 2025-08-16

## Summary
- **Total Tickets:** 29
- **Resolved:** 12
- **Open:** 17

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 7.96 |
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 6.58 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.50 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.57 |
| [#829](https://github.com/pieces-app/support/issues/829) | Unable to open Pieces Settings Service | 5.42 |

## Common Issues
### 1. LTM and Workstream Issues on macOS
Users on macOS are experiencing issues with LTM and Workstream functionality, including queries not returning results, slow performance, and failure to record new activities.  Some users report that clearing LTM data temporarily resolves the issue.  Additionally, Pro users are encountering errors suggesting they need to upgrade despite having a Pro subscription.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 2. Pieces MCP connection instability across multiple applications
Users report Pieces MCP connections becoming unstable or hanging within VS Code, Cursor, and other applications. Issues include connection leaks associated with the Pieces desktop app, SSE endpoint hangs, and intermittent failures.  Suggested workarounds include restarting Pieces OS or the desktop app, monitoring connections, and verifying the MCP configuration. The Pieces desktop app is a recurring factor in connection issues.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#796](https://github.com/pieces-app/support/issues/796): MCP goes down in Cursor every 5-10 minutes

### 3. Pieces Pro Features Unavailable Despite Upgrade
Users report being unable to access Pieces Pro features after upgrading, encountering errors or limitations. Issues include LLM not upgrading, browser extensions failing to connect to Pieces OS, and "Pro required" messages for paid users.  Troubleshooting includes verifying Pro status, checking configurations, restarting, and VPN/proxy adjustments. Connectivity issues may be related to network settings or location.

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 4. Pieces Desktop and OS connection issues and setting persistence
Users report connection issues with Pieces Desktop and OS, including MCP connections dropping every 5-10 minutes on macOS and connection leaks on Windows when the Desktop app is running.  Additionally, the Auto-Generated Context setting in Machine Learning resets to "Medium" despite user changes.  Suggested solutions include checking connection status, restarting Pieces OS or Desktop app, and verifying MCP server health.

**Related Issues:**
- [#796](https://github.com/pieces-app/support/issues/796): MCP goes down in Cursor every 5-10 minutes
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#801](https://github.com/pieces-app/support/issues/801): Auto Generated Context Always returns to Medium

### 5. Pieces Desktop Application Bugs
Users are experiencing various bugs in the Pieces desktop application, including issues with dragging files into conversation context, sharing snippets via links or GitHub gists, and hotkeys not functioning.  These problems have been reported on both Windows and macOS platforms, with Pieces OS versions 12.1.0 and 12.1.1. Further investigation is needed to identify the root causes and implement solutions.

**Related Issues:**
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#793](https://github.com/pieces-app/support/issues/793): No hotkeys work


## Recommendations
- Prioritize resolving the "Pieces MCP connection instability" issue as it impacts multiple applications and has a high frequency. Investigate connection leaks associated with the Pieces desktop app and SSE endpoint hangs.
- Address the "Pieces Pro Features Unavailable Despite Upgrade" issue to ensure paying users have access to the features they've purchased. Focus on LLM upgrade failures, browser extension connection problems, and inaccurate "Pro required" messages.
- Investigate and fix the "LTM and Workstream Issues on macOS" to improve core product functionality for macOS users. Focus on query failures, slow performance, and data clearing issues.
- Address bugs in the Pieces desktop application, including file dragging, sharing snippets, and hotkey functionality on both Windows and macOS. These impact usability and user experience.
- Improve communication with users regarding known issues and workarounds. Provide clear instructions for troubleshooting connection problems, Pro access, and LTM/Workstream issues.

## Daily Reports
Here are the daily reports for this week:

- [report_210706](daily/2025-08-12/report_210706.md)
- [report_210659](daily/2025-08-13/report_210659.md)
- [report_210715](daily/2025-08-14/report_210715.md)
- [report_210640](daily/2025-08-15/report_210640.md)
- [report_131527](daily/2025-08-15/report_131527.md)
