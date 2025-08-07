# Support Ticket Report
- Generated: 2025-08-07 05:15:32
- Period: 2025-08-04 to 2025-08-07

## Summary
- **Total Tickets:** 6
- **Resolved:** 0
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.06 |
| [#813](https://github.com/pieces-app/support/issues/813) | Ensure Core Dependencies | 4.26 |
| [#808](https://github.com/pieces-app/support/issues/808) | Unable to upgrade subscription | 4.10 |
| [#805](https://github.com/pieces-app/support/issues/805) | LTM gets gunged up over time | 3.81 |
| [#811](https://github.com/pieces-app/support/issues/811) | I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue. | 2.49 |

## Common Issues
### 1. Pieces OS Data Access and Performance Issues
Users report problems with Pieces OS data access, including MissingPlatformDirectoryException on Windows and macOS, leading to application crashes or unavailability of LTM and MCP features.  The "Clear LTM Data" button is also reported as non-functional.  Reinstalling or clearing Pieces data temporarily resolves issues, suggesting potential database corruption or performance bottlenecks with large datasets.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time

### 2. Users unable to upgrade to Pro
Multiple users report being unable to upgrade to Pieces Pro.  Clicking "Upgrade" leads to a blank checkout page with zero values, eventually returning an error.  One user, already on Pro, encountered a "Pro required" error message.  Issue affects macOS and Windows users on version 12.1.1. Further investigation needed into checkout flow and Pro access validation.

**Related Issues:**
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription
- [#812](https://github.com/pieces-app/support/issues/812): Unable to generate Workstream Summary
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.


## Recommendations
- Investigate and resolve the MissingPlatformDirectoryException on Windows and macOS to address data access issues and application crashes in Pieces OS.
- Fix the SSE connection hanging issue affecting MCP integration with Claude Code, both as a standalone CLI and within VS Code.
- Address the problem with the "Clear LTM Data" button being non-functional, as it hinders users' ability to resolve LTM issues.
- Investigate and resolve the checkout flow issues preventing users from upgrading to Pieces Pro, including blank checkout pages and incorrect error messages.
- Investigate performance bottlenecks in the LTM with large datasets, as long query times and empty results impact user experience.
- Verify Pro access validation logic to ensure paid users have proper access to Pro features and avoid "Pro required" errors.

## Daily Reports
Here are the daily reports for this week:

- [report_132038](daily/2025-08-05/report_132038.md)
- [report_210738](daily/2025-08-05/report_210738.md)
- [report_210726](daily/2025-08-06/report_210726.md)
- [report_051516](daily/2025-08-06/report_051516.md)
- [report_132048](daily/2025-08-06/report_132048.md)
