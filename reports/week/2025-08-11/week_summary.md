# Support Ticket Report
- Generated: 2025-08-16 21:10:10
- Period: 2025-08-11 to 2025-08-16

## Summary
- **Total Tickets:** 30
- **Resolved:** 13
- **Open:** 17

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 7.85 |
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 6.58 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 5.87 |
| [#829](https://github.com/pieces-app/support/issues/829) | Unable to open Pieces Settings Service | 4.99 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 4.77 |

## Common Issues
### 1. LTM and Workstream Issues on macOS
Users on macOS are experiencing issues with the LTM and Workstream features in the Pieces desktop application.  The LTM either fails to return results after extended use or stops recording activity altogether.  Workstream updates may also be affected.  One user reported a Pro subscription error despite having a paid account.  Clearing LTM data has proven ineffective. Further investigation is needed to determine the root cause and potential solutions.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 2. Pieces MCP Server Connection Issues
Users report Pieces MCP server connection problems across macOS and Windows, including "Failed to extract context" errors with `ask_pieces_ltm` despite functional LTM, SSE endpoint hangs in VS Code/Claude Code integration, and connection leaks caused by the Pieces Desktop app.  Suggested solutions include verifying LTM functionality, checking server logs, restarting Pieces OS, and closing Pieces Desktop to prevent connection leaks. Further investigation of MCP server implementation and data access layer is needed.

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

### 4. Pieces Desktop Application Bugs
Users are experiencing various bugs in the Pieces desktop application, including issues with dragging files into conversation context, sharing snippets via links or GitHub gists, and hotkeys not functioning.  These issues appear across different operating systems (Windows and macOS) and Pieces OS versions (12.1.0 and 12.1.1). Further investigation is needed to identify the root causes and implement fixes.

**Related Issues:**
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#793](https://github.com/pieces-app/support/issues/793): No hotkeys work

### 5. PiecesOS services failing to open on MacOS
Multiple users reported Pieces Settings and Core Services failing to open on MacOS.  Errors include "Type ZJb already registered" and websocket connection failures with 404 status code. Issues observed across different MacOS versions (15.5, 15.7) and PiecesOS versions (12.1.1, Unknown). Potential solutions include reinstalling PiecesOS, checking firewall settings, and ensuring correct port configuration.

**Related Issues:**
- [#829](https://github.com/pieces-app/support/issues/829): Unable to open Pieces Settings Service
- [#830](https://github.com/pieces-app/support/issues/830): Unable to open Pieces Settings Service
- [#773](https://github.com/pieces-app/support/issues/773): Unable to open Pieces Core Services


## Recommendations
- Prioritize resolving LTM and Workstream issues on macOS (especially impacting Pro users).  This is a recurring problem affecting core functionality and user experience.
- Investigate and address MCP server connection problems across platforms.  Focus on the "Failed to extract context" error, SSE endpoint hangs, and connection leaks caused by the Pieces Desktop app.
- Resolve Pieces Pro access issues for users who have recently upgraded.  Ensure LLM upgrades are applied correctly, browser extensions connect reliably, and Pro features are accessible without errors.
- Fix bugs in the Pieces desktop application related to file dragging, sharing snippets, and hotkey functionality.  These issues impact usability across different operating systems.
- Address PiecesOS services failing to open on MacOS, including "Type ZJb already registered" and websocket connection failures.  Provide clear troubleshooting steps for users.

## Daily Reports
Here are the daily reports for this week:

- [report_210706](daily/2025-08-12/report_210706.md)
- [report_210659](daily/2025-08-13/report_210659.md)
- [report_210715](daily/2025-08-14/report_210715.md)
- [report_210640](daily/2025-08-15/report_210640.md)
- [report_131527](daily/2025-08-15/report_131527.md)
- [report_210612](daily/2025-08-16/report_210612.md)
