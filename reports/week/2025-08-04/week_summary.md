# Support Ticket Report
- Generated: 2025-08-07 13:21:11
- Period: 2025-08-04 to 2025-08-07

## Summary
- **Total Tickets:** 7
- **Resolved:** 0
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 5.67 |
| [#815](https://github.com/pieces-app/support/issues/815) | Failed sharing my snippets using a link or GitHub gist. | 4.42 |
| [#805](https://github.com/pieces-app/support/issues/805) | LTM gets gunged up over time | 4.33 |
| [#813](https://github.com/pieces-app/support/issues/813) | Ensure Core Dependencies | 3.92 |
| [#808](https://github.com/pieces-app/support/issues/808) | Unable to upgrade subscription | 3.91 |

## Common Issues
### 1. Pieces OS Data Access and Performance Issues
Users report problems with Pieces OS data access and performance. These include MissingPlatformDirectoryException on Windows, MCP server SSE connection hangs on macOS, and LTM performance degradation over time on macOS.  Suggested solutions include restarting the machine, checking data directory permissions, verifying MCP server configuration, and clearing LTM data (though the button is reported as not working).

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time

### 2. Pieces OS 12.1.1: Sharing, Workstream Summary, and Upgrade Failures
Users are experiencing issues with sharing snippets via link or GitHub gist, generating workstream summaries, and upgrading subscriptions.  Sharing attempts result in 404 errors or UI failures.  Workstream summary generation fails with API 511 errors.  Upgrade attempts lead to a blank checkout page with zero values, eventually timing out.  These issues affect Windows and macOS users on version 12.1.1.

**Related Issues:**
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#812](https://github.com/pieces-app/support/issues/812): Unable to generate Workstream Summary
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription

### 3. LTM performance degrades over time and becomes unusable
Users report that the Long Term Memory (LTM) feature in Pieces for Desktop becomes unresponsive after several weeks of use. Queries take a long time and return nothing. Clearing LTM data through the UI fails. Reinstalling Pieces temporarily resolves the issue.  This affects macOS and Windows users. The issue might be related to the LTM's size or data handling.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#812](https://github.com/pieces-app/support/issues/812): Unable to generate Workstream Summary


## Recommendations
- Investigate and resolve the MissingPlatformDirectoryException on Windows to address data access issues.
- Fix the MCP server SSE connection hang on macOS to enable Claude Code integration.
- Address the LTM performance degradation issue on macOS, possibly by optimizing data handling or implementing size limits.
- Implement a reliable LTM data clearing mechanism in the UI.
- Investigate and resolve the sharing failures via link and GitHub gist, addressing 404 errors and UI issues.
- Troubleshoot and fix the workstream summary generation failure with API 511 errors.
- Address the subscription upgrade issue causing a blank checkout page and timeouts.
- Prioritize resolution of issues based on frequency and activity level, starting with the MCP server SSE connection hang and LTM performance problems.

## Daily Reports
Here are the daily reports for this week:

- [report_132038](daily/2025-08-05/report_132038.md)
- [report_210738](daily/2025-08-05/report_210738.md)
- [report_210726](daily/2025-08-06/report_210726.md)
- [report_051516](daily/2025-08-06/report_051516.md)
- [report_132048](daily/2025-08-06/report_132048.md)
- [report_132017](daily/2025-08-07/report_132017.md)
