# Support Ticket Report
- Generated: 2025-08-20 05:08:39
- Period: 2025-08-18 to 2025-08-20

## Summary
- **Total Tickets:** 5
- **Resolved:** 1
- **Open:** 4

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 8.18 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 7.40 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.38 |
| [#834](https://github.com/pieces-app/support/issues/834) | Cannot connect to Authentication site during install of Pieces | 3.21 |
| [#747](https://github.com/pieces-app/support/issues/747) | MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM | 2.92 |

## Common Issues
### 1. Pieces for Developers and Pieces OS Startup/Connectivity Issues
Users report Pieces for Developers crashing on startup on Ubuntu 24.04, failing to connect during installation on Windows, and Pro users unable to upgrade to the latest LLM version despite selecting it.  Issues may involve system compatibility conflicts, network connectivity problems, or bugs in Pieces. Check system requirements, network configuration, firewall settings, and Pieces logs for clues. Reinstalling Pieces or contacting support may be necessary.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#834](https://github.com/pieces-app/support/issues/834): Cannot connect to Authentication site during install of Pieces
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to

### 2. Pieces OS MCP Integration Failures and LLM Version Discrepancies
Users report Pieces OS MCP tools failing to integrate with Claude Code and other IDEs.  The `ask_pieces_ltm` tool frequently returns "Failed to extract context" despite functional LTM.  Additionally, LLM versions reported within Pieces for Developers and IDE plugins don't always reflect the user's chosen Pro LLM version (Sonnet 4 or Gemini 2.5 Pro).  Troubleshooting steps include verifying server connections, restarting services, and checking configuration files. Further investigation into MCP server implementation and LLM version synchronization is needed.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM


## Recommendations
- Prioritize debugging the 'pieces-for-developers' crash on Ubuntu 24.04 (Issue #835) due to high activity and impact on new users.
- Investigate MCP server issues, specifically the SSE connection hangs (Issue #810) and the 'ask_pieces_ltm' tool failure (Issue #747), to restore MCP functionality.
- Address the LLM version discrepancy between user selection and reported version in Pieces for Developers and IDE plugins (Issue #818) to ensure Pro users receive the correct LLM.
- Troubleshoot the Pieces installation authentication error on Windows (Issue #834), potentially related to security software conflicts, to improve onboarding.
- Review and update documentation regarding system compatibility, network configuration, and troubleshooting steps for common startup/connectivity issues.

## Daily Reports
Here are the daily reports for this week:

- [report_131455](daily/2025-08-19/report_131455.md)
- [report_210655](daily/2025-08-19/report_210655.md)
- [report_050747](daily/2025-08-20/report_050747.md)
