# Support Ticket Report
- Generated: 2025-08-24 13:13:36
- Period: 2025-08-18 to 2025-08-24

## Summary
- **Total Tickets:** 13
- **Resolved:** 3
- **Open:** 10

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 8.07 |
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 7.38 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.46 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 6.24 |
| [#839](https://github.com/pieces-app/support/issues/839) | Cannot collapse all code block in Pieces Desktop | 4.50 |

## Common Issues
### 1. Subscription and Upgrade Issues on macOS
Users on macOS 12.1.1 are experiencing issues with subscriptions not showing up in the app after cancellation and resubscription, LTM queries failing after a few weeks of use (clearing LTM data doesn't work), and Pro upgrade attempts leading to a blank checkout page with zero values.  Reinstalling the app temporarily resolves LTM issues.  The upgrade issue may be related to backend service errors.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription

### 2. Pieces for Developers startup crashes or dependency issues
Users report Pieces for Developers crashing on startup on Ubuntu 24.04 LTS, often with a blank window briefly appearing.  Dependency issues and GTK-related errors are observed in the logs.  Additionally, some users experience issues with the "Ensure core dependencies" step during installation on Linux, requiring step retry.  On Windows, there are reports of incompatibility between Pieces OS and Desktop versions.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 3. Pieces MCP Integration Issues and LLM Upgrade Failures
Users report problems with Pieces MCP tools, primarily `ask_pieces_ltm` failing to retrieve LTM data despite a functional LTM workstream.  Other issues include SSE connection hangs in VS Code integration and outdated LLM versions despite Pro upgrades.  Suggested solutions include verifying server configurations, checking data access permissions, and ensuring proper LTM initialization for MCP tools. Network connectivity, especially for VPN users, should also be investigated.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM

### 4. Users unable to access Pieces Pro features despite upgrades
Multiple users report being unable to use Pro features after upgrading. Issues include LLM not upgrading to the latest version, code block collapse failures, and "Pro required" error messages.  Troubleshooting steps like restarting, re-login, and VPN changes haven't resolved the problems. Some users encounter issues with Pieces OS and Desktop app version compatibility.

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 5. MacOS Desktop App Issues
Users are experiencing issues with the MacOS desktop application, including a pixelated tray icon, subscription upgrade failures leading to a blank checkout page, and all files appearing greyed out in the file picker despite having proper permissions.  These issues persist across different MacOS versions (12.1.1 and 12.2.1) and reinstalling the app does not resolve the file picker problem.

**Related Issues:**
- [#840](https://github.com/pieces-app/support/issues/840): Mac icon is pixelated
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription
- [#838](https://github.com/pieces-app/support/issues/838): All files greyed out in the file picker


## Recommendations
- Prioritize resolving the top three most active tickets (805, 835, 810) to address critical issues affecting users.
- Investigate the recurring problems with macOS, including subscription upgrades, pixelated icons, and file picker issues.
- Address the issues related to Pieces Pro upgrades, ensuring users can access the features they paid for.
- Focus on resolving MCP integration problems, particularly the `ask_pieces_ltm` tool failure and SSE connection hangs.
- Improve the installation process on Linux by addressing the dependency issues and retry step failures.
- Review and update documentation related to LTM usage, MCP configuration, and subscription upgrades.
- Consider implementing better error handling and logging for MCP tools to aid in debugging.
- Monitor VPN-related issues and provide support for users experiencing connectivity problems.

## Daily Reports
Here are the daily reports for this week:

- [report_131455](daily/2025-08-19/report_131455.md)
- [report_210655](daily/2025-08-19/report_210655.md)
- [report_131533](daily/2025-08-20/report_131533.md)
- [report_050747](daily/2025-08-20/report_050747.md)
- [report_210652](daily/2025-08-20/report_210652.md)
- [report_210649](daily/2025-08-21/report_210649.md)
- [report_131501](daily/2025-08-21/report_131501.md)
- [report_131419](daily/2025-08-22/report_131419.md)
- [report_210630](daily/2025-08-22/report_210630.md)
- [report_210632](daily/2025-08-23/report_210632.md)
- [report_131150](daily/2025-08-24/report_131150.md)
