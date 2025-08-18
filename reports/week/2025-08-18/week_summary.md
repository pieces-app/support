# Support Ticket Report
- Generated: 2025-08-18 21:07:24
- Period: 2025-08-18 to 2025-08-18

## Summary
- **Total Tickets:** 3
- **Resolved:** 1
- **Open:** 2

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 5.50 |
| [#834](https://github.com/pieces-app/support/issues/834) | Cannot connect to Authentication site during install of Pieces | 3.48 |
| [#747](https://github.com/pieces-app/support/issues/747) | MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM | 2.94 |

## Common Issues
### 1. Pieces fails to launch or connect, impacting core features
Users report Pieces for Developers crashing on startup (Ubuntu), failing to connect during installation (Windows, potentially due to firewall), and the ask_pieces_ltm MCP tool failing to extract context despite a functional LTM (macOS). Issues may involve GTK conflicts, authentication failures, or MCP server implementation bugs.  Check system compatibility, firewall settings, and Pieces OS logs for clues. Further investigation into MCP server and LTM interaction is needed.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#834](https://github.com/pieces-app/support/issues/834): Cannot connect to Authentication site during install of Pieces
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM


## Recommendations
- Prioritize debugging the Pieces launch/connection issue across Ubuntu, Windows, and macOS, focusing on GTK conflicts (Ubuntu), firewall interference (Windows), and MCP/LTM interaction (macOS).
- Investigate the authentication process during Pieces installation on Windows, specifically addressing potential conflicts with Cortex XDR security software.
- Address the "Failed to extract context" error in the `ask_pieces_ltm` MCP tool, ensuring proper authentication, data access, and initialization within the MCP server implementation.

## Daily Reports
Here are the daily reports for this week:

- [report_210627](daily/2025-08-18/report_210627.md)
- [report_131824](daily/2025-08-18/report_131824.md)
