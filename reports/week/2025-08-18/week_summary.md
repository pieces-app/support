# Support Ticket Report
- Generated: 2025-08-18 13:19:03
- Period: 2025-08-18 to 2025-08-18

## Summary
- **Total Tickets:** 2
- **Resolved:** 1
- **Open:** 1

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#834](https://github.com/pieces-app/support/issues/834) | Cannot connect to Authentication site during install of Pieces | 3.48 |
| [#747](https://github.com/pieces-app/support/issues/747) | MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM | 2.94 |

## Common Issues
### 1. Pieces fails to connect to authentication site or LTM
Users are experiencing connectivity issues with Pieces, either during installation (failing to connect to the authentication site) or when using the `ask_pieces_ltm` tool (failing to extract context from a functional LTM).  The installation issue may be related to security software blocking connections. The LTM issue seems to be an MCP server-side problem, potentially related to authentication, data access, permissions, or initialization. 

**Related Issues:**
- [#834](https://github.com/pieces-app/support/issues/834): Cannot connect to Authentication site during install of Pieces
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM


## Recommendations
- Investigate the root cause of the "Pieces fails to connect to authentication site or LTM" issue, focusing on potential security software conflicts and MCP server-side problems.
- Prioritize resolution of ticket #834 and #747 due to high activity levels and potential impact on user experience.
- Review and update documentation regarding installation troubleshooting, especially concerning security software configurations.
- Improve error messaging and logging for LTM and authentication issues to facilitate faster diagnosis.
- Consider implementing a more robust authentication mechanism for the MCP server to ensure reliable access to LTM data.

## Daily Reports
Here are the daily reports for this week:

- [report_131824](daily/2025-08-18/report_131824.md)
