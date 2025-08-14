# Support Ticket Report
- Generated: 2025-08-14 21:11:15
- Period: 2025-08-11 to 2025-08-14

## Summary
- **Total Tickets:** 28
- **Resolved:** 11
- **Open:** 17

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 8.07 |
| [#829](https://github.com/pieces-app/support/issues/829) | Unable to open Pieces Settings Service | 6.89 |
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 6.68 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.65 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.84 |

## Common Issues
### 1. LTM and Workstream Issues on macOS
Users on macOS are experiencing issues with LTM and Workstream functionality, including queries not returning results, slow performance, and failure to record new activities.  Some users encounter "Pro membership required" errors despite having a Pro subscription.  Potential solutions include clearing LTM data (although the button is reported as not working), reinstalling the app, and verifying Pro subscription status.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 2. Pieces MCP connection instability across multiple applications
Users report Pieces MCP connections becoming unstable or hanging within VS Code, Cursor, and Claude Code.  Common symptoms include tools not appearing, connections dropping after a few minutes, and excessive connections from the Pieces Desktop app.  Suggested workarounds include restarting Pieces OS or the affected application, monitoring connections, and disabling the Pieces Desktop app. The underlying issue appears related to connection management and potential leaks.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#796](https://github.com/pieces-app/support/issues/796): MCP goes down in Cursor every 5-10 minutes

### 3. Pieces Pro Features Inaccessible Despite Upgrade
Users report being unable to access Pieces Pro features after upgrading. Issues include LLM not upgrading to the latest version, browser extensions failing to connect to Pieces OS, and "Pro required" errors for Pro users.  Common factors include recent Pro upgrade, VPN use (especially in China), and use of various Pieces platforms (desktop, VS Code, Sublime).  Troubleshooting steps like restarting, re-login, and proxy adjustments haven't resolved the problems.

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 4. Pieces Copilot Service fails to open on MacOS
Users are unable to open the Pieces Copilot Service on MacOS.  Two distinct errors are observed: "Instance of 'fp'" and "HttpException: Connection reset by peer." Affected users are running MacOS versions 15.5 and 15.6 with Pieces OS versions 11.0.4 and 12.1.1. The issue might be related to Pieces OS version compatibility or network connectivity problems. Check for Pieces OS updates and ensure the local port 39300 is accessible.

**Related Issues:**
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service
- [#831](https://github.com/pieces-app/support/issues/831): Unable to open Pieces Copilot Service
- [#824](https://github.com/pieces-app/support/issues/824): Unable to open Pieces Copilot Service

### 5. Pieces Desktop and OS Intermittently Fail
Pieces Desktop app on MacOS and Windows experiences MCP connection drops every 5-10 minutes and connection leaks when the desktop app is running.  Additionally, auto-generated context settings in Machine Learning revert to "Medium".  Workarounds include toggling MCP, restarting Pieces OS, and manually re-setting context settings. The root cause appears to be Pieces Desktop app's interaction with Pieces OS.

**Related Issues:**
- [#796](https://github.com/pieces-app/support/issues/796): MCP goes down in Cursor every 5-10 minutes
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#801](https://github.com/pieces-app/support/issues/801): Auto Generated Context Always returns to Medium


## Recommendations
- Prioritize resolving MCP connection instability issues across VS Code, Cursor, and Claude Code to improve user experience with integrations.
- Investigate and address the root cause of LTM and Workstream issues on macOS, focusing on query performance, data clearing functionality, and "Pro membership required" errors.
- Address Pieces Pro accessibility issues after upgrade, including LLM version discrepancies, browser extension connectivity, and persistent "Pro required" errors, especially for users in China.
- Fix Pieces Copilot Service startup failures on MacOS, addressing both "Instance of 'fp'" and "Connection reset by peer" errors, potentially by improving version compatibility checks.
- Resolve Pieces Desktop and OS intermittent failures, focusing on MCP connection drops, connection leaks, and auto-generated context settings reverting to default, to ensure stable performance.

## Daily Reports
Here are the daily reports for this week:

- [report_210706](daily/2025-08-12/report_210706.md)
- [report_210659](daily/2025-08-13/report_210659.md)
- [report_210715](daily/2025-08-14/report_210715.md)
