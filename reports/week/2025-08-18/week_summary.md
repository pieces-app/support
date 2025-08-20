# Support Ticket Report
- Generated: 2025-08-20 21:08:20
- Period: 2025-08-18 to 2025-08-20

## Summary
- **Total Tickets:** 8
- **Resolved:** 1
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 7.35 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 7.29 |
| [#837](https://github.com/pieces-app/support/issues/837) | backup restoration fails | 6.94 |
| [#838](https://github.com/pieces-app/support/issues/838) | All files greyed out in the file picker | 5.68 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.25 |

## Common Issues
### 1. Pieces Desktop App Installation and Usage Issues
Users are experiencing problems with Pieces Desktop App across different operating systems (Windows, Linux, macOS). Issues include backup restoration failures, core dependency errors during installation, and file access restrictions within the app.  Further investigation is needed to determine the root cause and potential solutions across these different scenarios. Logs and screenshots have been provided by users.

**Related Issues:**
- [#837](https://github.com/pieces-app/support/issues/837): backup restoration fails
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#838](https://github.com/pieces-app/support/issues/838): All files greyed out in the file picker

### 2. Pieces MCP Integration Issues and LLM Upgrade Problems
Users report Pieces MCP tools failing to connect or retrieve data, specifically `ask_pieces_ltm` returning "Failed to extract context" despite functional LTM.  LLM upgrades to Sonnet 4 are not reflected in Pieces for Developers or VS Code plugin.  SSE connections hang indefinitely in some cases. Troubleshooting includes verifying server status, permissions, and client configurations. Further investigation into MCP server implementation and LTM data access is needed.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM

### 3. Pieces installation and startup failures across platforms
Users are experiencing issues with Pieces installation and startup on Linux and Windows. On Linux, the desktop application crashes at startup with XCB errors, potentially related to missing dependencies or GTK version conflicts. On Windows, installation fails due to an authentication error, possibly caused by network restrictions or security software conflicts.  Suggested solutions include verifying dependencies, checking GTK versions, and reviewing network/firewall settings.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#834](https://github.com/pieces-app/support/issues/834): Cannot connect to Authentication site during install of Pieces


## Recommendations
- Investigate XCB errors and GTK version conflicts on Linux to resolve Pieces for Developers startup crashes (Ticket 835).
- Address MCP server SSE connection hangs and tool registration failures in Claude Code (Ticket 810).
- Troubleshoot backup restoration failures in the Pieces Desktop App on Windows (Ticket 837).
- Resolve file access restrictions in the Pieces Desktop App file picker on macOS (Ticket 838).
- Investigate LLM upgrade issues for Pro users in Pieces for Developers and VS Code plugin (Ticket 818).
- Address core dependency issues during Pieces installation on Linux (Ticket 809).
- Troubleshoot authentication errors during Pieces installation on Windows VDIs, possibly related to network restrictions or security software (Ticket 834).
- Investigate and fix the "Failed to extract context" error in the `ask_pieces_ltm` MCP tool (Ticket 747).

## Daily Reports
Here are the daily reports for this week:

- [report_131455](daily/2025-08-19/report_131455.md)
- [report_210655](daily/2025-08-19/report_210655.md)
- [report_131533](daily/2025-08-20/report_131533.md)
- [report_050747](daily/2025-08-20/report_050747.md)
- [report_210652](daily/2025-08-20/report_210652.md)
