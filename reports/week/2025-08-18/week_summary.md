# Support Ticket Report
- Generated: 2025-08-20 13:16:49
- Period: 2025-08-18 to 2025-08-20

## Summary
- **Total Tickets:** 6
- **Resolved:** 1
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 7.35 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 7.29 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.25 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 4.15 |
| [#834](https://github.com/pieces-app/support/issues/834) | Cannot connect to Authentication site during install of Pieces | 3.00 |

## Common Issues
### 1. Pieces MCP Integration Issues and LLM Upgrade Problems
Users report Pieces MCP tools failing to connect or retrieve LTM data, specifically `ask_pieces_ltm` returning errors despite functional LTM.  LLM upgrades to Sonnet 4 are not reflected in Pieces for Developers or VS Code plugin.  Issues persist across macOS and Windows, affecting various IDE plugins and the desktop app. Troubleshooting includes verifying server connections, restarting services, and checking configurations, but the root cause remains unclear. Some users experience SSE connection hangs with Claude Code integration.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM

### 2. Pieces installation and startup failures across platforms
Users are experiencing issues with Pieces installation and startup on Linux and Windows. On Linux, the desktop application crashes at startup with XCB errors. On Windows, users encounter authentication errors during installation, possibly due to security software conflicts.  A common solution for Linux is to ensure core dependencies are met. For Windows, verifying network connectivity and firewall settings may resolve authentication issues.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#834](https://github.com/pieces-app/support/issues/834): Cannot connect to Authentication site during install of Pieces

### 3. Pieces installation and upgrade issues
Users are experiencing problems with Pieces installation, dependency setup, and LLM upgrades. Issues include "Retry Step" errors during dependency checks, authentication failures during installation, and LLM versions not updating to the selected Pro version.  Suggested solutions include checking network connectivity, firewall settings, and ensuring the Pieces OS and app versions are compatible.

**Related Issues:**
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#834](https://github.com/pieces-app/support/issues/834): Cannot connect to Authentication site during install of Pieces
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to


## Recommendations
- Prioritize resolving the MCP integration issues and LLM upgrade problems as they affect multiple users across different platforms.
- Investigate and address the root cause of the XCB errors causing crashes on Linux and the authentication errors during installation on Windows.
- Provide clear documentation or troubleshooting steps for users experiencing installation and startup failures, including verifying dependencies, network connectivity, and firewall settings.
- Ensure compatibility between Pieces OS, app versions, and LLM upgrades to prevent conflicts.
- Monitor the most active tickets (835, 810, 818) closely and provide timely updates to users.

## Daily Reports
Here are the daily reports for this week:

- [report_131455](daily/2025-08-19/report_131455.md)
- [report_210655](daily/2025-08-19/report_210655.md)
- [report_131533](daily/2025-08-20/report_131533.md)
- [report_050747](daily/2025-08-20/report_050747.md)
