# Support Ticket Report
- Generated: 2025-08-05 13:21:33
- Period: 2025-08-04 to 2025-08-05

## Summary
- **Total Tickets:** 5
- **Resolved:** 0
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 4.26 |
| [#805](https://github.com/pieces-app/support/issues/805) | LTM gets gunged up over time | 4.04 |
| [#813](https://github.com/pieces-app/support/issues/813) | Ensure Core Dependencies | 3.88 |
| [#812](https://github.com/pieces-app/support/issues/812) | Unable to generate Workstream Summary | 3.88 |
| [#811](https://github.com/pieces-app/support/issues/811) | I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue. | 3.48 |

## Common Issues
### 1. Pieces OS Data Access and Performance Issues
Users report problems with Pieces OS data access and performance. Symptoms include application crashes due to MissingPlatformDirectoryException, MCP server SSE connection hangs, and slow LTM queries.  Reinstalling or clearing data temporarily resolves issues.  Potential solutions include verifying data directory permissions, investigating SSE connection stability, and optimizing LTM performance for large datasets.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time

### 2. Pieces OS LTM and MCP Issues
Users report issues with Pieces OS Long Term Memory (LTM) queries failing after extended use, possibly due to data overload.  Additionally,  Model Context Protocol (MCP) integration with Claude Code experiences SSE connection hangs, preventing tool registration. Clearing LTM data and checking MCP server configuration are suggested troubleshooting steps. Some users also encounter "Pieces Pro required" errors despite having a Pro subscription.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 3. Pieces Pro Features Unavailable or Failing
Users are experiencing issues with Pieces Pro features like Workstream Summary and LTM queries.  Errors include "ApiException 511", "requires Pieces Pro" even for paid users, and 404 errors related to the Gemini-Pro model. Potential solutions include verifying Pro subscriptions, checking LLM settings, ensuring sufficient resources for LTM, and clearing LTM data (if functionality is restored).

**Related Issues:**
- [#812](https://github.com/pieces-app/support/issues/812): Unable to generate Workstream Summary
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time


## Recommendations
- Investigate and resolve the MissingPlatformDirectoryException on Windows to address data access issues in Pieces OS.
- Troubleshoot and fix the SSE connection hangs between the MCP server and Claude Code, especially for macOS users.
- Optimize LTM performance for large datasets to prevent query failures and slowdowns after extended use.
- Verify and address the "Pieces Pro required" error for users with active Pro subscriptions.
- Investigate the root cause of the ApiException 511 and 404 errors related to Workstream Summary and Gemini-Pro model.
- Prioritize resolution of issues affecting core features like LTM queries and MCP integration with Claude Code.
- Improve error messaging and guidance for users experiencing data access or Pro feature issues.
- Monitor support tickets for recurring patterns and prioritize fixes for common problems.

## Daily Reports
Here are the daily reports for this week:

- [report_132038](daily/2025-08-05/report_132038.md)
