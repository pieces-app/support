# Support Ticket Report
- Generated: 2025-08-19 21:08:01
- Period: 2025-08-18 to 2025-08-19

## Summary
- **Total Tickets:** 4
- **Resolved:** 1
- **Open:** 3

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 7.32 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.38 |
| [#834](https://github.com/pieces-app/support/issues/834) | Cannot connect to Authentication site during install of Pieces | 3.21 |
| [#747](https://github.com/pieces-app/support/issues/747) | MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM | 2.93 |

## Common Issues
### 1. Pieces for Developers and Pieces OS Startup/Connectivity Issues
Users are experiencing issues with Pieces for Developers crashing on startup on Ubuntu 24.04, failing to connect to authentication site during installation on Windows, and Pro users unable to upgrade to the latest LLM version despite selecting it.  The Ubuntu crash involves XCB errors, possibly related to multi-threading. The Windows connection issue may be due to security software blocking connections. The LLM upgrade issue may be related to configuration or network connectivity problems.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#834](https://github.com/pieces-app/support/issues/834): Cannot connect to Authentication site during install of Pieces
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to

### 2. Pieces fails to access LTM data via MCP
Users report the `ask_pieces_ltm` MCP tool consistently returns "Failed to extract context" despite functional LTM.  This occurs across different clients and OS versions. Potential causes include authentication issues, data access layer bugs, permissions problems, or MCP initialization errors. Suggested solutions include verifying MCP server authentication, checking data access layer implementation, and ensuring correct MCP initialization.

**Related Issues:**
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS


## Recommendations
- Prioritize resolving the Pieces for Developers crash on Ubuntu 24.04 (Issue #835) due to its high activity level and impact on Linux users.
- Investigate the LLM upgrade issue for Pro users (Issue #818) affecting multiple IDE plugins and the desktop app.
- Address the Pieces installation authentication error on Windows (Issue #834), potentially caused by security software conflicts.
- Debug the MCP `ask_pieces_ltm` tool's failure to extract context (Issue #747) impacting LTM functionality across clients.
- Improve documentation and communication around LLM versioning and configuration to reduce user confusion.
- Consider adding troubleshooting steps for common installation and startup issues to the support knowledge base.

## Daily Reports
Here are the daily reports for this week:

- [report_131455](daily/2025-08-19/report_131455.md)
- [report_210655](daily/2025-08-19/report_210655.md)
