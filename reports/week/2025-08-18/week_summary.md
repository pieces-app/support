# Support Ticket Report
- Generated: 2025-08-21 21:07:53
- Period: 2025-08-18 to 2025-08-21

## Summary
- **Total Tickets:** 8
- **Resolved:** 1
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 8.19 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 7.18 |
| [#838](https://github.com/pieces-app/support/issues/838) | All files greyed out in the file picker | 6.50 |
| [#837](https://github.com/pieces-app/support/issues/837) | backup restoration fails | 5.50 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 4.62 |

## Common Issues
### 1. Pieces Desktop App Encounters Various Issues
Users are experiencing different issues with the Pieces Desktop App across macOS, Linux, and Windows. Issues include files appearing greyed out in the file picker on macOS, "Ensure core dependencies" step failing on Linux, and backup restoration problems on Windows.  Further investigation is needed to determine root causes and solutions for each platform-specific issue. Logs and screenshots are available for some reports.

**Related Issues:**
- [#838](https://github.com/pieces-app/support/issues/838): All files greyed out in the file picker
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#837](https://github.com/pieces-app/support/issues/837): backup restoration fails

### 2. Pieces installation and startup failures across platforms
Users are experiencing issues with Pieces installation and startup on Linux and Windows. On Linux, the desktop application crashes at startup with XCB errors. On Windows, users encounter authentication errors during installation, possibly due to security software conflicts.  A common solution for Linux is to check dependencies. For Windows, verifying network connectivity and firewall settings is recommended.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#834](https://github.com/pieces-app/support/issues/834): Cannot connect to Authentication site during install of Pieces

### 3. Pieces OS MCP Integration Failures and LLM Upgrade Issues
Users report Pieces OS MCP tools, specifically `ask_pieces_ltm`, failing with "Failed to extract context" errors despite functional LTM.  Other MCP tools like `create_pieces_memory` work correctly.  Additionally, users experience difficulty upgrading their LLMs to the latest version after upgrading to Pieces Pro, with IDE plugins and desktop apps reporting older LLM versions.  Suggested solutions include verifying server connections, restarting the MCP server, and checking LLM configurations.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM


## Recommendations
- Prioritize debugging the Pieces Desktop App file picker issue on macOS (Issue #838) due to high activity and potential impact on user workflow.
- Investigate and resolve the Pieces Desktop App crash on Linux startup (Issue #835) as it blocks initial usage and has the highest activity level.
- Address the MCP server's failure to extract LTM context (Issue #747) impacting multiple users and integrations.
- Improve the LLM upgrade process for Pro users (Issue #818) to ensure they can access the latest features.
- Develop clearer documentation or troubleshooting steps for installation issues on Linux (Issue #809) and Windows (Issue #834) to reduce support requests.
- Investigate the MCP Server SSE connection issues (Issue #810) affecting VS Code integration and potentially other IDEs.
- Address the backup restoration failure on Windows (Issue #837) to prevent data loss and frustration.

## Daily Reports
Here are the daily reports for this week:

- [report_131455](daily/2025-08-19/report_131455.md)
- [report_210655](daily/2025-08-19/report_210655.md)
- [report_131533](daily/2025-08-20/report_131533.md)
- [report_050747](daily/2025-08-20/report_050747.md)
- [report_210652](daily/2025-08-20/report_210652.md)
- [report_210649](daily/2025-08-21/report_210649.md)
- [report_131501](daily/2025-08-21/report_131501.md)
