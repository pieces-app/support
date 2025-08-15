# Support Ticket Report
- Generated: 2025-08-15 05:11:33
- Period: 2025-08-11 to 2025-08-15

## Summary
- **Total Tickets:** 28
- **Resolved:** 11
- **Open:** 17

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 8.07 |
| [#829](https://github.com/pieces-app/support/issues/829) | Unable to open Pieces Settings Service | 6.89 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.65 |
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 6.63 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.84 |

## Common Issues
### 1. LTM and Workstream Issues on macOS
Users on macOS are experiencing issues with LTM and Workstream functionality, including queries not returning results, slow performance, and failure to record new activities.  Some users report that clearing LTM data temporarily resolves the issue.  Additionally, Pro users are encountering errors suggesting they need to upgrade despite having a Pro subscription.  Further investigation is needed to determine the root cause and potential solutions.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 2. Pieces MCP connection instability across multiple applications
Users report Pieces MCP connections becoming unstable or hanging in VS Code, Cursor, and Claude Code. Issues include connection leaks associated with the Pieces Desktop app, SSE endpoint hangs, and intermittent failures.  Suggested workarounds involve restarting Pieces OS or the Desktop app, monitoring connections, and verifying configuration. The Pieces Desktop app is a recurring factor in connection issues.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#796](https://github.com/pieces-app/support/issues/796): MCP goes down in Cursor every 5-10 minutes

### 3. Pieces Pro Features Inaccessible Despite Upgrade
Users are reporting inability to access Pieces Pro features even after upgrading. Issues include LLM not upgrading to the latest version, browser extensions failing to connect to Pieces OS, and "Pro required" errors for Pro users.  Common factors include recent Pro upgrade, VPN use (especially in China), and using Pieces OS 12.1.1.  Troubleshooting steps like restarting, re-login, and VPN adjustments haven't resolved the problems. Some users encounter issues across multiple Pieces components (desktop, VS Code, Sublime plugins).

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 4. Pieces Copilot Service fails to open on MacOS
Users are unable to open the Pieces Copilot Service on MacOS.  Two distinct errors are observed: "Instance of 'fp'" and "HttpException: Connection reset by peer." Affected users are running MacOS versions 15.5 and 15.6 with Pieces OS versions 11.0.4 and 12.1.1. The issue may be related to Pieces OS version compatibility or network connectivity problems. Check for Pieces OS updates and ensure the local port (39300) is accessible.

**Related Issues:**
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service
- [#831](https://github.com/pieces-app/support/issues/831): Unable to open Pieces Copilot Service
- [#824](https://github.com/pieces-app/support/issues/824): Unable to open Pieces Copilot Service

### 5. Pieces Desktop and OS exhibit connection and setting persistence issues
Users report connection leaks with Pieces Desktop on Windows and macOS, causing MCP to disconnect every 5-10 minutes.  A high number of connections from the Desktop app to the OS server is observed.  Additionally, the Auto-Generated Context setting in Machine Learning resets to "Medium" despite user changes.  Workarounds include closing Pieces Desktop, monitoring connections, restarting Pieces OS, and repeatedly changing the setting.

**Related Issues:**
- [#796](https://github.com/pieces-app/support/issues/796): MCP goes down in Cursor every 5-10 minutes
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#801](https://github.com/pieces-app/support/issues/801): Auto Generated Context Always returns to Medium


## Recommendations
- Prioritize resolving the 'Pieces MCP connection instability' issue as it impacts multiple applications and has a high frequency.  Focus on identifying the root cause of connection leaks associated with the Pieces Desktop app.
- Address the 'Pieces Pro Features Inaccessible Despite Upgrade' issue, particularly for users on macOS and those using VPNs. Investigate LLM upgrade failures, browser extension connection problems, and "Pro required" errors.
- Investigate the two distinct errors preventing users from opening the Pieces Copilot Service on MacOS ('Instance of 'fp'' and 'HttpException: Connection reset by peer'). Check for Pieces OS version compatibility issues.
- Address the 'LTM and Workstream Issues on macOS' to improve core product functionality. Focus on query failures, slow performance, and the non-functional 'Clear LTM Data' button.
- Improve communication with Pro users experiencing issues. Provide clear troubleshooting steps and updates on resolution progress.  Consider offering temporary workarounds while fixes are being developed.
- Review and improve error messaging, particularly around Pro features and LTM issues. Provide more specific error codes and guidance to help users and support staff diagnose problems.
- Monitor the 'Auto-Generated Context' setting issue and determine why it resets to 'Medium'.  This may indicate a broader problem with settings persistence.
- Investigate the high number of open tickets related to Pieces Desktop and Pieces OS.  This suggests underlying stability and usability problems that need to be addressed.

## Daily Reports
Here are the daily reports for this week:

- [report_210706](daily/2025-08-12/report_210706.md)
- [report_210659](daily/2025-08-13/report_210659.md)
- [report_210715](daily/2025-08-14/report_210715.md)
