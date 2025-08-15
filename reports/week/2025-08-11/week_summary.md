# Support Ticket Report
- Generated: 2025-08-15 13:18:32
- Period: 2025-08-11 to 2025-08-15

## Summary
- **Total Tickets:** 29
- **Resolved:** 12
- **Open:** 17

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 8.07 |
| [#829](https://github.com/pieces-app/support/issues/829) | Unable to open Pieces Settings Service | 6.89 |
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 6.63 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.50 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.57 |

## Common Issues
### 1. LTM and Workstream Issues on macOS
Users on macOS are experiencing issues with the LTM and Workstream features in the Pieces desktop application.  Problems include LTM queries failing after a period of use, the "Clear LTM Data" button not working, and the Workstream not updating.  One user reported LTM functionality ceasing after 20 minutes. Another user received a "Pieces Pro required" error despite having a Pro subscription.  Reinstalling the application and clearing Pieces data temporarily resolves the LTM issue for some users.

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
Users are reporting inability to access Pieces Pro features after upgrading. Issues include LLM not upgrading to latest version (Sonnet 4), browser extensions failing to connect to Pieces OS, and "Pro required" errors for features like activity summaries.  Common factors include recent Pro upgrade, VPN use (especially in China), and installations via Microsoft Store.  Troubleshooting steps like restarts, account re-logins, and proxy adjustments haven't resolved the problems.

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 4. Pieces Desktop and OS exhibit connection and setting persistence issues
Users report connection leaks with Pieces Desktop on Windows and macOS, causing MCP to disconnect every 5-10 minutes.  A high number of connections from the Desktop app to the OS server is observed.  Additionally, the Auto-Generated Context setting in Machine Learning consistently reverts to "Medium" despite user changes.  Workarounds include closing Pieces Desktop or restarting Pieces OS. The root cause of both issues requires further investigation.

**Related Issues:**
- [#796](https://github.com/pieces-app/support/issues/796): MCP goes down in Cursor every 5-10 minutes
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#801](https://github.com/pieces-app/support/issues/801): Auto Generated Context Always returns to Medium

### 5. Pieces Copilot Service fails to open on MacOS
Users are unable to open the Pieces Copilot Service on MacOS.  Two distinct errors are observed: "Instance of 'fp'" and "HttpException: Connection reset by peer." Affected users are running MacOS versions 15.5 and 15.6 with Pieces OS versions 11.0.4 and 12.1.1. The issue might be related to Pieces OS version compatibility or network connectivity problems. Ensure Pieces OS is updated to the latest version and check the local network connection.

**Related Issues:**
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service
- [#831](https://github.com/pieces-app/support/issues/831): Unable to open Pieces Copilot Service
- [#824](https://github.com/pieces-app/support/issues/824): Unable to open Pieces Copilot Service


## Recommendations
- Prioritize resolving the Pieces Desktop connection leak and MCP instability issues as they impact multiple applications and core functionality.
- Investigate and address the Pieces Pro upgrade failures to ensure users can access paid features.
- Improve LTM stability and functionality on macOS, focusing on query performance and data clearing.
- Address the Pieces Copilot Service startup failures on macOS.
- Review and fix the persistence issue with the Auto-Generated Context setting in Machine Learning.
- Investigate browser extension connection problems, particularly for users in China or using VPNs.

## Daily Reports
Here are the daily reports for this week:

- [report_210706](daily/2025-08-12/report_210706.md)
- [report_210659](daily/2025-08-13/report_210659.md)
- [report_210715](daily/2025-08-14/report_210715.md)
- [report_131527](daily/2025-08-15/report_131527.md)
