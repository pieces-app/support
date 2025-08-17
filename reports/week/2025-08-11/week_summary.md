# Support Ticket Report
- Generated: 2025-08-17 21:09:27
- Period: 2025-08-11 to 2025-08-17

## Summary
- **Total Tickets:** 31
- **Resolved:** 13
- **Open:** 18

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 7.75 |
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 6.53 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 5.76 |
| [#816](https://github.com/pieces-app/support/issues/816) | Pieces Desktop Connection Leak | 4.86 |
| [#829](https://github.com/pieces-app/support/issues/829) | Unable to open Pieces Settings Service | 4.67 |

## Common Issues
### 1. LTM and Workstream Issues on macOS
Users on macOS are experiencing issues with the LTM and Workstream features in the Pieces desktop application.  Problems include LTM queries failing after a period of use, the "Clear LTM Data" button not working, and the Workstream not updating.  One user reported LTM functionality ceasing after 20 minutes. Another user received a "Pieces Pro required" error despite having a Pro subscription.  Reinstalling the application and clearing Pieces data temporarily resolves LTM issues for some users.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 2. Pieces MCP Connectivity Issues
Multiple reports indicate Pieces MCP connectivity problems across different clients and operating systems.  Common symptoms include "Failed to extract context" errors, SSE endpoint hangs, and connection leaks attributed to the Pieces Desktop application.  Suggested solutions involve verifying LTM functionality, restarting Pieces OS, checking permissions, and monitoring connections. Further investigation into MCP server implementation and data access layer is needed.

**Related Issues:**
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak

### 3. Pieces Pro Features Unavailable Despite Upgrade
Users are reporting inability to access Pieces Pro features after upgrading. Issues include LLM not upgrading to the latest version, browser extensions failing to connect to Pieces OS, and "Pro required" errors for Pro users.  Common factors include recent Pro upgrade, Pieces OS v12.1.1, and VPN use (especially in China). Troubleshooting steps like restarting, re-login, and proxy adjustments haven't resolved the problems.

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 4. Pieces for Developers startup crashes or fails to initialize
Users on Linux (Ubuntu 24.04) and Windows experience crashes or initialization failures with Pieces for Developers. On Linux, the application crashes with XCB errors, potentially related to multi-threading or missing dependencies. On Windows, the application redirects to Pieces support.  A potential solution for Linux is to ensure XInitThreads is called before any other Xlib functions if using multiple threads.  Reinstalling or verifying dependencies may also resolve initialization issues.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#826](https://github.com/pieces-app/support/issues/826): Pieces os
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 5. Pieces Desktop and OS connection issues
Users report connection instability with Pieces Desktop and OS. MCP in Cursor disconnects every 5-10 minutes on macOS. On Windows, Pieces Desktop creates excessive connections to Pieces OS, causing leaks.  A temporary solution involves closing Pieces Desktop or restarting Pieces OS. Additionally, Auto-Generated Context settings revert to "Medium" after app or OS updates across platforms.

**Related Issues:**
- [#796](https://github.com/pieces-app/support/issues/796): MCP goes down in Cursor every 5-10 minutes
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#801](https://github.com/pieces-app/support/issues/801): Auto Generated Context Always returns to Medium


## Recommendations
- Prioritize resolving LTM and Workstream issues on macOS (especially impacting Pro users).  This includes investigating LTM query failures, the non-functional "Clear LTM Data" button, and Workstream update problems.
- Investigate and address MCP connectivity issues across platforms. Focus on "Failed to extract context" errors, SSE endpoint hangs, and connection leaks from Pieces Desktop.
- Troubleshoot Pieces Pro access issues for recently upgraded users.  Verify LLM version upgrades, browser extension connectivity, and address "Pro required" errors. Pay special attention to VPN/proxy configurations.
- Address Pieces for Developers startup crashes on Linux (Ubuntu 24.04) and Windows. Investigate XCB errors on Linux and redirect issues on Windows.  Explore multi-threading conflicts and dependency issues.
- Stabilize Pieces Desktop and OS connection issues.  Address frequent MCP disconnections in Cursor on macOS and connection leaks on Windows.  Ensure Auto-Generated Context settings persist across app/OS updates.

## Daily Reports
Here are the daily reports for this week:

- [report_210706](daily/2025-08-12/report_210706.md)
- [report_210659](daily/2025-08-13/report_210659.md)
- [report_210715](daily/2025-08-14/report_210715.md)
- [report_210640](daily/2025-08-15/report_210640.md)
- [report_131527](daily/2025-08-15/report_131527.md)
- [report_210612](daily/2025-08-16/report_210612.md)
- [report_210621](daily/2025-08-17/report_210621.md)
- [report_131343](daily/2025-08-17/report_131343.md)
