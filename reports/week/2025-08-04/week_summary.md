# Support Ticket Report
- Generated: 2025-08-08 05:15:33
- Period: 2025-08-04 to 2025-08-08

## Summary
- **Total Tickets:** 9
- **Resolved:** 0
- **Open:** 9

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 5.50 |
| [#817](https://github.com/pieces-app/support/issues/817) | Filling out Personal Domain in Pieces OS leads to null.pieces.cloud | 4.42 |
| [#816](https://github.com/pieces-app/support/issues/816) | Pieces Desktop Connection Leak | 4.42 |
| [#815](https://github.com/pieces-app/support/issues/815) | Failed sharing my snippets using a link or GitHub gist. | 4.42 |
| [#805](https://github.com/pieces-app/support/issues/805) | LTM gets gunged up over time | 4.22 |

## Common Issues
### 1. Pieces OS and Desktop App Connection Issues
Users report connection leaks and hangs with Pieces OS and Desktop App, primarily on Windows and macOS.  Symptoms include excessive connections from the Desktop app to the OS server, leading to resource exhaustion.  Temporary solutions involve closing the Desktop app, monitoring connections, restarting Pieces OS, or clearing LTM data.  The "Clear LTM Data" button is also reported as non-functional.

**Related Issues:**
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time

### 2. Pieces OS and Desktop App Connection Issues
Users are experiencing connection issues between Pieces OS, Desktop App, and other integrations like VS Code and Claude Code.  Symptoms include connection leaks with the Desktop App generating excessive connections to OS, and SSE connections hanging indefinitely, preventing MCP tools from registering.  Suggested solutions include closing/restarting the Desktop App, monitoring connections, and reporting the issues to Pieces support.  Issues appear on both Windows and macOS.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code

### 3. Pieces OS 12.1.1 Bugs Reported on Desktop App
Users are experiencing issues with Pieces OS 12.1.1 on the desktop application, including an issue with personal domains displaying as "null.pieces.cloud", failure to share snippets via link or GitHub gist, and an inability to upgrade subscriptions due to a blank checkout page. These issues have been reported across both Windows and macOS platforms. Further investigation is needed to identify the root cause and implement solutions.

**Related Issues:**
- [#817](https://github.com/pieces-app/support/issues/817): Filling out Personal Domain in Pieces OS leads to null.pieces.cloud
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription

### 4. Pieces OS 12.1.1: Feature Access and Upgrade Issues
Users are experiencing difficulties with specific features in Pieces OS 12.1.1, including generating Workstream Summaries, sharing snippets via link/GitHub gist, and upgrading subscriptions.  These issues manifest as errors, blank pages, or failed processes. A common error message points to a missing or inaccessible Gemini-Pro model.  Check model access and version compatibility. For upgrade issues, review checkout process and payment gateway integration.

**Related Issues:**
- [#812](https://github.com/pieces-app/support/issues/812): Unable to generate Workstream Summary
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription

### 5. Pieces macOS app issues with Pro access, LTM, and upgrade
Users on macOS 12.1.1 are experiencing issues with Pieces Pro features, including LTM queries failing after extended use and a blank upgrade page.  Clearing LTM data does not resolve the LTM issue.  Users are unable to access paid Pro features or upgrade their subscription.

**Related Issues:**
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription


## Recommendations
- Prioritize resolving connection issues between Pieces OS and Desktop App, focusing on connection leaks and hangs on Windows and macOS.
- Investigate and address the issue of personal domains displaying as "null.pieces.cloud" after editing.
- Fix the "Clear LTM Data" button functionality to allow users to clear LTM and potentially resolve performance issues.
- Address the problem of sharing snippets via link or GitHub gist failing.
- Investigate and resolve the blank checkout page issue preventing subscription upgrades.
- Troubleshoot MCP Server SSE connection hangs affecting Claude Code integration.
- Investigate and resolve the root cause of the "MissingPlatformDirectoryException" error on Windows.
- Ensure Pieces Pro features are accessible to paid users and address the error message related to Pro access.
- Address the issue of Workstream Summary generation failing with an API exception.

## Daily Reports
Here are the daily reports for this week:

- [report_132038](daily/2025-08-05/report_132038.md)
- [report_210738](daily/2025-08-05/report_210738.md)
- [report_210726](daily/2025-08-06/report_210726.md)
- [report_051516](daily/2025-08-06/report_051516.md)
- [report_132048](daily/2025-08-06/report_132048.md)
- [report_210614](daily/2025-08-07/report_210614.md)
- [report_132017](daily/2025-08-07/report_132017.md)
