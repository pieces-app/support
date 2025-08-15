# Support Ticket Report
- Generated: 2025-08-15 21:09:40
- Period: 2025-08-11 to 2025-08-15

## Summary
- **Total Tickets:** 29
- **Resolved:** 12
- **Open:** 17

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 7.96 |
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 6.63 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.50 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.57 |
| [#829](https://github.com/pieces-app/support/issues/829) | Unable to open Pieces Settings Service | 5.42 |

## Common Issues
### 1. LTM and Workstream Issues on macOS
Users on macOS are experiencing issues with LTM and Workstream functionality, including queries not returning results, slow performance, and failure to record new activities.  Some users encounter "Pro membership required" errors despite having a Pro subscription.  Potential solutions include clearing LTM data (although the button is reported as not working), reinstalling the app, and verifying Pro subscription status.

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
Users report being unable to access Pieces Pro features after upgrading, encountering errors or limitations. Issues include LLM not upgrading to the latest version, browser extensions failing to connect to Pieces OS, and "Pro required" messages for features like activity summaries.  Affected software includes desktop app, VS Code, Sublime plugin, and browser extensions. Troubleshooting includes checking configuration files, restarting, and VPN/proxy adjustments. Some users are located in regions with internet restrictions.

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 4. Pieces Desktop and OS exhibit connection and setting persistence issues
Users report connection leaks with Pieces Desktop on Windows and macOS, causing MCP to disconnect every 5-10 minutes.  A high number of connections from the Desktop app to the OS server is observed.  Additionally, the Auto-Generated Context setting in Machine Learning resets to "Medium" despite user changes. Workarounds include closing Pieces Desktop or restarting Pieces OS. The root cause appears to lie within the Pieces Desktop application.

**Related Issues:**
- [#796](https://github.com/pieces-app/support/issues/796): MCP goes down in Cursor every 5-10 minutes
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#801](https://github.com/pieces-app/support/issues/801): Auto Generated Context Always returns to Medium

### 5. Pieces Desktop App Bugs
Users report issues with the Pieces desktop app, including file drag-and-drop into conversation context failing on Windows (v12.1.1), sharing snippets via link/GitHub gist failing on Windows (v12.1.1), and hotkeys being completely unresponsive on macOS (v12.1.0).  Further investigation is needed to identify the root causes and solutions.

**Related Issues:**
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#793](https://github.com/pieces-app/support/issues/793): No hotkeys work


## Recommendations
- Prioritize resolving the Pieces Desktop connection leak issue to stabilize MCP connections and improve user experience across VS Code, Cursor, and other applications.
- Investigate and address the issue of Pieces Pro features being unavailable despite user upgrades, including LLM version discrepancies and browser extension connectivity problems.
- Address the LTM and Workstream issues on macOS, focusing on query failures, slow performance, and "Pro membership required" errors.
- Fix the bug preventing file drag-and-drop into conversation context and sharing snippets via link/GitHub gist in the Pieces Desktop app on Windows.
- Ensure settings persistence in the Pieces Desktop app, specifically the Auto-Generated Context setting under Machine Learning.
- Improve communication with users in regions with internet restrictions to provide tailored support for connection and upgrade issues.
- Monitor and address the recurring "Unable to open Pieces Core Services" errors to maintain essential service stability.

## Daily Reports
Here are the daily reports for this week:

- [report_210706](daily/2025-08-12/report_210706.md)
- [report_210659](daily/2025-08-13/report_210659.md)
- [report_210715](daily/2025-08-14/report_210715.md)
- [report_210640](daily/2025-08-15/report_210640.md)
- [report_131527](daily/2025-08-15/report_131527.md)
