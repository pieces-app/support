# Support Ticket Report
- Generated: 2025-08-07 21:07:29
- Period: 2025-08-04 to 2025-08-07

## Summary
- **Total Tickets:** 9
- **Resolved:** 0
- **Open:** 9

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 5.50 |
| [#813](https://github.com/pieces-app/support/issues/813) | Ensure Core Dependencies | 4.45 |
| [#817](https://github.com/pieces-app/support/issues/817) | Filling out Personal Domain in Pieces OS leads to null.pieces.cloud | 4.42 |
| [#816](https://github.com/pieces-app/support/issues/816) | Pieces Desktop Connection Leak | 4.42 |
| [#815](https://github.com/pieces-app/support/issues/815) | Failed sharing my snippets using a link or GitHub gist. | 4.42 |

## Common Issues
### 1. Pieces OS and Desktop App Connection Issues
Users are experiencing connection issues between Pieces OS, Desktop App, and other integrations like VS Code and Claude Code.  Symptoms include connection leaks with the Desktop App generating excessive connections to OS, and SSE connections hanging indefinitely, preventing MCP tools from registering.  Suggested solutions include closing/restarting the Desktop App, monitoring connections, and restarting Pieces OS to clear leaks.  Further investigation is needed into the Desktop App's connection handling and SSE endpoint behavior.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code

### 2. Pieces OS and Desktop App Connection Issues
Users report connection leaks and hangs with Pieces OS and Desktop app, especially on Windows and macOS.  The Desktop app often creates excessive connections to the OS server, impacting performance.  Suggested workarounds include closing the Desktop app, monitoring connections, restarting the OS server, and clearing LTM data.  The "Clear LTM Data" button is reported as non-functional.

**Related Issues:**
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time

### 3. Pieces OS 12.1.1 Bugs Reported on Desktop App
Users are experiencing issues with Pieces OS 12.1.1 on the desktop application, including personal domain names reverting to null.pieces.cloud, failure to share snippets via link or GitHub gist, and inability to upgrade subscriptions due to a blank checkout page.  These issues have been reported on both Windows and macOS. Further investigation is needed to identify the root cause and solutions.

**Related Issues:**
- [#817](https://github.com/pieces-app/support/issues/817): Filling out Personal Domain in Pieces OS leads to null.pieces.cloud
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription

### 4. Pieces OS 12.1.1: Features Failing with API and Model Errors
Users are experiencing issues with various Pieces OS 12.1.1 features, including Workstream Summary generation, snippet sharing, and subscription upgrades.  These failures are accompanied by API exceptions (Error 511 related to application mode) and errors indicating the Gemini Pro model is not found or accessible (Error 404).  Check application mode and model access permissions.

**Related Issues:**
- [#812](https://github.com/pieces-app/support/issues/812): Unable to generate Workstream Summary
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription

### 5. Pieces macOS app issues with Pro access, LTM, and upgrade
Users on macOS (version 12.1.1) are experiencing issues with Pieces Pro features, including LTM functionality and upgrading subscriptions.  LTM queries fail after extended use, requiring data clearing.  Attempts to upgrade result in a blank checkout page.  Users are unable to access paid features despite active subscriptions.

**Related Issues:**
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription


## Recommendations
- Prioritize resolving connection issues between Pieces OS and Desktop App, focusing on connection leaks and hangs, especially on Windows and macOS.
- Investigate and fix the MCP Server SSE connection hang, which prevents tools from being available in Claude Code.
- Address the issue of personal domain names reverting to null.pieces.cloud in Pieces OS 12.1.1.
- Fix the "Clear LTM Data" button functionality to allow users to clear LTM data effectively.
- Investigate and resolve the issue preventing successful sharing of snippets via link or GitHub gist.
- Address the blank checkout page issue that prevents users from upgrading their subscriptions.
- Investigate API exceptions (Error 511 related to application mode) and errors indicating the Gemini Pro model is not found or accessible (Error 404).
- Check application mode and model access permissions.

## Daily Reports
Here are the daily reports for this week:

- [report_132038](daily/2025-08-05/report_132038.md)
- [report_210738](daily/2025-08-05/report_210738.md)
- [report_210726](daily/2025-08-06/report_210726.md)
- [report_051516](daily/2025-08-06/report_051516.md)
- [report_132048](daily/2025-08-06/report_132048.md)
- [report_210614](daily/2025-08-07/report_210614.md)
- [report_132017](daily/2025-08-07/report_132017.md)
