# Support Ticket Report
- Generated: 2025-08-21 13:16:17
- Period: 2025-08-18 to 2025-08-21

## Summary
- **Total Tickets:** 8
- **Resolved:** 1
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#838](https://github.com/pieces-app/support/issues/838) | All files greyed out in the file picker | 8.20 |
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 7.48 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 7.18 |
| [#837](https://github.com/pieces-app/support/issues/837) | backup restoration fails | 6.94 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.12 |

## Common Issues
### 1. Pieces Desktop App Encounters Various Issues
Users are experiencing different problems with the Pieces desktop app across macOS, Linux, and Windows. Issues include files appearing greyed out in the file picker on macOS, "Ensure core dependencies" step failing on Linux, and backup restoration problems on Windows.  Further investigation is needed to determine root causes and solutions for each platform-specific issue. Logs and screenshots are available for some reports.

**Related Issues:**
- [#838](https://github.com/pieces-app/support/issues/838): All files greyed out in the file picker
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#837](https://github.com/pieces-app/support/issues/837): backup restoration fails

### 2. Pieces MCP Integration Issues and LLM Upgrade Problems
Users report Pieces MCP tools failing to connect or retrieve data, specifically `ask_pieces_ltm` returning "Failed to extract context" despite functional LTM.  LLM upgrades to Sonnet 4 are not reflected in Pieces for Developers or VS Code plugin.  SSE connections hang indefinitely in some cases. Troubleshooting includes verifying server status, permissions, and client configurations. 

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
- Prioritize resolving the file picker issue on macOS (Ticket #838) due to its high activity level.
- Investigate the Pieces Desktop App crashes on Linux (Ticket #835 and #809) and the Windows installation authentication error (Ticket #834) to address installation and startup problems across platforms.
- Troubleshoot the MCP integration issues, specifically the `ask_pieces_ltm` failures (Ticket #747) and SSE connection hangs (Ticket #810), to ensure proper functionality of Pieces tools with Claude Code and other integrations.
- Address the LLM upgrade problem for Pro users (Ticket #818) to ensure they can utilize the latest LLM features.
- Review backup restoration failures on Windows (Ticket #837) to improve data recovery processes.

## Daily Reports
Here are the daily reports for this week:

- [report_131455](daily/2025-08-19/report_131455.md)
- [report_210655](daily/2025-08-19/report_210655.md)
- [report_131533](daily/2025-08-20/report_131533.md)
- [report_050747](daily/2025-08-20/report_050747.md)
- [report_210652](daily/2025-08-20/report_210652.md)
- [report_131501](daily/2025-08-21/report_131501.md)
