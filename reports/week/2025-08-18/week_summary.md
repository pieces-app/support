# Support Ticket Report
- Generated: 2025-08-23 21:08:18
- Period: 2025-08-18 to 2025-08-23

## Summary
- **Total Tickets:** 13
- **Resolved:** 3
- **Open:** 10

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 8.36 |
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 8.07 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.54 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.40 |
| [#839](https://github.com/pieces-app/support/issues/839) | Cannot collapse all code block in Pieces Desktop | 4.50 |

## Common Issues
### 1. Pieces for Developers startup crashes or fails to initialize
Users report Pieces for Developers crashing on startup or failing to initialize on Linux and Windows. On Linux, crashes occur after a brief window appearance, with logs indicating potential XCB/GTK issues. On Windows, the "Ensure core dependencies" step may require retrying.  One user also reported an issue with code block collapsing.  Further investigation is needed to pinpoint the root cause and provide solutions.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Subscription and Upgrade Issues on macOS
Users on macOS 12.1.1 are experiencing issues with subscriptions not showing up after cancellation and resubscription, LTM queries failing after a few weeks, and upgrade attempts leading to a blank checkout page.  Potential solutions include clearing LTM data (although the button is currently not working), checking subscription status, and ensuring the upgrade process functions correctly.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription

### 3. Pieces MCP Integration Issues and LLM Upgrade Failures
Users report problems with Pieces MCP tools, primarily `ask_pieces_ltm` failing to extract context despite functional LTM.  SSE connections hang, preventing tool registration in Claude Code.  Additionally, Pro users experience difficulty upgrading their LLMs to the latest version (Sonnet 4), with IDE plugins reporting older versions. Troubleshooting includes verifying server connections, restarting services, and checking configurations.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM

### 4. Users unable to access Pro features despite upgrades
Multiple Pro users report being unable to access features like specific LLMs or activity summaries, receiving messages prompting them to upgrade. Issues span different platforms (Windows, macOS) and Pieces versions.  Users confirm Pro subscriptions and attempts to resolve by restarting, re-logging, and changing network configurations. Some report LLM versions not updating as expected.

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
- Prioritize resolving the startup crashes on Linux and Windows to ensure basic functionality. Investigate XCB/GTK issues on Linux and the "Ensure core dependencies" step on Windows.
- Address the macOS subscription issues to ensure users can access Pro features. Investigate why subscriptions don't show up after cancellation and resubscription, and why the upgrade process leads to a blank checkout page.
- Fix the MCP integration issues, particularly the hanging SSE connection, to enable tool registration in Claude Code and restore `ask_pieces_ltm` functionality.
- Investigate why Pro users are unable to access features despite upgrades. Verify LLM version updates and ensure consistent access across platforms.
- Address the pixelated tray icon and file picker issues on macOS to improve user experience.
- Improve the Clear LTM Data button functionality to allow users to manage their LTM data effectively.

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
