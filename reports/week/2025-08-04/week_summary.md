# Support Ticket Report
- Generated: 2025-08-05 21:08:31
- Period: 2025-08-04 to 2025-08-05

## Summary
- **Total Tickets:** 5
- **Resolved:** 0
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.58 |
| [#805](https://github.com/pieces-app/support/issues/805) | LTM gets gunged up over time | 3.92 |
| [#813](https://github.com/pieces-app/support/issues/813) | Ensure Core Dependencies | 3.88 |
| [#812](https://github.com/pieces-app/support/issues/812) | Unable to generate Workstream Summary | 3.88 |
| [#811](https://github.com/pieces-app/support/issues/811) | I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue. | 3.48 |

## Common Issues
### 1. Pieces OS data access and LTM performance issues
Users report issues with Pieces OS accessing data directories on Windows and macOS, leading to application errors.  Additionally, LTM performance degrades over time, causing slow queries and empty results.  Clearing LTM data through the UI is unsuccessful.  Reinstalling or clearing all Pieces data temporarily resolves the issues.  One user experiences MCP server connection hanging with Claude Code integration.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time

### 2. Pieces OS LTM and MCP Issues
Users report problems with Pieces OS Long Term Memory (LTM) queries failing after extended use and MCP integration issues with Claude Code. LTM queries become unresponsive after weeks of use, possibly due to data overload.  Clearing LTM data doesn't resolve the issue.  MCP connections hang when integrating with Claude Code, preventing tool registration. Additionally, some Pro users encounter errors suggesting they need to upgrade despite having a Pro subscription.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 3. PiecesOS 12.1.1: LTM and Workstream Summary Errors
Users are experiencing issues with LTM queries and Workstream Summary generation in PiecesOS 12.1.1 on macOS and Windows.  LTM queries either time out or return nothing after a few weeks of use. Workstream Summary generation fails with API exception 511 or a message requiring Pieces Pro, even for subscribed users.  A common error message points to a missing Gemini Pro model. Clearing LTM data via the UI is also unsuccessful.

**Related Issues:**
- [#812](https://github.com/pieces-app/support/issues/812): Unable to generate Workstream Summary
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time


## Recommendations
- Investigate and resolve the LTM performance degradation issue.  Focus on why queries fail after extended use and why clearing LTM data is unsuccessful.
- Address the MCP server connection hanging issue with Claude Code integration.  Diagnose the SSE endpoint behavior and ensure tools are registered correctly.
- Investigate reports of Pro users encountering upgrade prompts despite having active subscriptions.
- Improve error messaging and user experience around LTM data clearing and Workstream Summary generation.
- Prioritize bug fixes for data access issues on Windows and macOS, especially the MissingPlatformDirectoryException.

## Daily Reports
Here are the daily reports for this week:

- [report_132038](daily/2025-08-05/report_132038.md)
- [report_210738](daily/2025-08-05/report_210738.md)
