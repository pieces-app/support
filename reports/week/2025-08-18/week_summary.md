# Support Ticket Report
- Generated: 2025-08-21 05:08:50
- Period: 2025-08-18 to 2025-08-21

## Summary
- **Total Tickets:** 8
- **Resolved:** 1
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#838](https://github.com/pieces-app/support/issues/838) | All files greyed out in the file picker | 8.20 |
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 7.35 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 7.29 |
| [#837](https://github.com/pieces-app/support/issues/837) | backup restoration fails | 6.94 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.25 |

## Common Issues
### 1. Pieces Desktop App Encounters Various Issues
Users are experiencing issues with the Pieces desktop app across different operating systems (macOS, Linux, Windows). Problems include files appearing greyed out in the file picker, failure to "Ensure core dependencies" during setup, and backup restoration failures.  Further investigation is needed to determine root causes and solutions. Logs and screenshots have been provided by users.

**Related Issues:**
- [#838](https://github.com/pieces-app/support/issues/838): All files greyed out in the file picker
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#837](https://github.com/pieces-app/support/issues/837): backup restoration fails

### 2. Pieces MCP Integration Issues and LLM Upgrade Problems
Users report Pieces MCP tools, specifically `ask_pieces_ltm`, failing with "Failed to extract context" errors despite functional LTM.  Other MCP tools like `create_pieces_memory` work correctly.  Additionally, users experience difficulty upgrading their LLMs to the latest version after upgrading to Pieces Pro, with LLMs reporting older versions despite configuration changes.  Suggested solutions include verifying server connections, restarting the MCP server, and checking LTM data access permissions. Further investigation into MCP server implementation and LLM version synchronization is needed.

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
- Investigate XCB errors and GTK version conflicts on Linux to resolve Pieces desktop application crashes.
- Troubleshoot Windows installation authentication errors, checking network restrictions and security software conflicts.
- Address MCP server's failure to extract context from LTM, ensuring data access and API usage are correct.
- Prioritize resolution of file picker issues, backup restoration failures, and LLM upgrade problems in the desktop application.
- Improve MCP server and LLM version synchronization to ensure users have the latest versions.
- Verify core dependencies during Pieces installation on Linux to prevent "Retry Step" issues.

## Daily Reports
Here are the daily reports for this week:

- [report_131455](daily/2025-08-19/report_131455.md)
- [report_210655](daily/2025-08-19/report_210655.md)
- [report_131533](daily/2025-08-20/report_131533.md)
- [report_050747](daily/2025-08-20/report_050747.md)
- [report_210652](daily/2025-08-20/report_210652.md)
