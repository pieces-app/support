# Support Ticket Report
- Generated: 2025-08-17 05:10:52
- Period: 2025-08-11 to 2025-08-17

## Summary
- **Total Tickets:** 30
- **Resolved:** 13
- **Open:** 17

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 7.85 |
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 6.53 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 5.87 |
| [#829](https://github.com/pieces-app/support/issues/829) | Unable to open Pieces Settings Service | 4.99 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 4.77 |

## Common Issues
### 1. LTM and Workstream Issues on macOS
Users on macOS are experiencing issues with LTM and Workstream functionality, including queries not returning results, slow performance, and failure to record new activities.  Some users encounter "Pro membership required" errors despite having a Pro subscription.  Potential solutions include clearing LTM data (although the button is reported as not working), reinstalling the app, and verifying Pro subscription status.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 2. Pieces MCP and Desktop App Connection Issues
Multiple reports indicate connection problems between Pieces OS, Desktop app, and MCP tools. Symptoms include tools failing, SSE hanging, and connection leaks attributed to the Desktop app.  Workarounds involve closing the Desktop app, restarting Pieces OS, and monitoring connections.  The core issue seems to be excessive connections originating from the Desktop app hindering MCP functionality.

**Related Issues:**
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak

### 3. Pieces Pro Features Unavailable Despite Upgrade
Users are reporting inability to access Pieces Pro features after upgrading. Issues include LLM not upgrading to the latest version, browser extensions failing to connect to Pieces OS, and "Pro required" errors for Pro users.  Common factors include recent Pro upgrade, VPN use, and Pieces OS v12.1.1.  Troubleshooting steps like restarting, re-login, and VPN configuration changes haven't resolved the problems.

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 4. Pieces Desktop Application Bugs
Users are experiencing various bugs in the Pieces desktop application, including issues with dragging files into conversation context, sharing snippets via links or GitHub gists, and hotkeys not functioning.  The file dragging issue involves the file choosing window appearing behind other windows and filter rules not applying to all file types. The sharing issue results in failure when attempting to share code snippets.  The hotkey issue involves no hotkeys working and producing a macOS sound. These issues have been reported on Windows and macOS with Pieces OS versions 12.1.0 and 12.1.1.

**Related Issues:**
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#793](https://github.com/pieces-app/support/issues/793): No hotkeys work

### 5. PiecesOS services failing to open on MacOS
Users are unable to open Pieces Settings Service or Pieces Core Services.  Error messages include "Type ZJb is already registered inside GetIt" and websocket connection failures with 404 errors.  This occurs on MacOS versions 15.5 and 15.7 with Pieces OS version 12.1.1. Check for conflicting applications or services, reinstall Pieces OS, and ensure network connectivity.

**Related Issues:**
- [#829](https://github.com/pieces-app/support/issues/829): Unable to open Pieces Settings Service
- [#830](https://github.com/pieces-app/support/issues/830): Unable to open Pieces Settings Service
- [#773](https://github.com/pieces-app/support/issues/773): Unable to open Pieces Core Services


## Recommendations
- Prioritize resolving LTM and Workstream issues on macOS (especially impacting Pro users).  This includes investigating the "Pro membership required" error, LTM data clearing functionality, and general performance/data retrieval problems.
- Address Pieces MCP and Desktop app connection issues. Focus on excessive connections from the Desktop app and ensure MCP tools (like ask_pieces_ltm) function reliably.
- Investigate why Pro features are unavailable despite user upgrades.  This involves checking LLM version discrepancies, browser extension connectivity, and resolving the "Pro required" error for paying users.
- Fix reported Pieces desktop application bugs.  This includes file dragging issues (window placement, filter rules), sharing failures for code snippets, and non-functional hotkeys.
- Resolve PiecesOS service failures on MacOS.  Investigate the "Type ZJb already registered" error and websocket connection problems (404 errors) with Settings and Core Services.

## Daily Reports
Here are the daily reports for this week:

- [report_210706](daily/2025-08-12/report_210706.md)
- [report_210659](daily/2025-08-13/report_210659.md)
- [report_210715](daily/2025-08-14/report_210715.md)
- [report_210640](daily/2025-08-15/report_210640.md)
- [report_131527](daily/2025-08-15/report_131527.md)
- [report_210612](daily/2025-08-16/report_210612.md)
