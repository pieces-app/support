# Support Ticket Report
- Generated: 2025-06-15 21:07:45
- Period: 2025-06-09 to 2025-06-15

## Summary
- **Total Tickets:** 8
- **Resolved:** 2
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#471](https://github.com/pieces-app/support/issues/471) | I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app | 11.45 |
| [#739](https://github.com/pieces-app/support/issues/739) | Failed to connect to PiecesOS | 6.97 |
| [#713](https://github.com/pieces-app/support/issues/713) | LTM not working in Pieces CLI | 6.90 |
| [#750](https://github.com/pieces-app/support/issues/750) | Delete chat bubbles breaks the onhover chat menu's appearance | 6.25 |
| [#747](https://github.com/pieces-app/support/issues/747) | MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM | 4.26 |

## Common Issues
### 1. PiecesOS and related components connection issues
Users are experiencing difficulties connecting to PiecesOS from various components, including the Chrome plugin, desktop application, and CLI. Issues include plugin functionality errors, general connection failures, and LTM context retrieval problems.  Troubleshooting steps may involve checking plugin versions, ensuring PiecesOS is updated, and examining logs for specific error messages.

**Related Issues:**
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI

### 2. LTM not working or frequently turning off
Users on Windows and macOS are reporting issues with Long Term Memory (LTM) in the Pieces CLI and Desktop app.  LTM fails to provide context or turns off unexpectedly, requiring manual reactivation.  Error messages indicate a potential issue with the Gemini-Pro model access.  Further investigation is needed to determine the root cause and provide a solution.

**Related Issues:**
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app
- [#734](https://github.com/pieces-app/support/issues/734): bug: LTM continues to turn off, requiring me to turn LTM back on periodically

### 3. Chat bubble deletion breaks hover menu UI
Deleting chat bubbles other than the latest one in a group causes hover menu issues on macOS and Windows.  The menu only appears on the last bubble of the group. This affects Pieces desktop app versions 10.1.13 and 11.4.4.  The issue may be related to the grouping of bubbles after deletion.

**Related Issues:**
- [#750](https://github.com/pieces-app/support/issues/750): Delete chat bubbles breaks the onhover chat menu's appearance
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app
- [#734](https://github.com/pieces-app/support/issues/734): bug: LTM continues to turn off, requiring me to turn LTM back on periodically

### 4. Pieces OS and plugin connection and functionality issues
Users are experiencing problems with Pieces OS and its Chrome plugin across different operating systems (Windows, Linux, Chromebook). Issues include installation problems (Chromebook), unresponsive buttons, failure to connect, and outdated plugin messages despite having the latest version.  Further investigation is needed to identify the root cause and provide solutions.

**Related Issues:**
- [#744](https://github.com/pieces-app/support/issues/744): Installation issue in cromebook
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app

### 5. Pieces OS and plugin connection issues
Users report various connection problems with Pieces OS and its plugins across different operating systems (Windows, Linux). Issues include "No available configurations for RGBA pixel format" error on Linux, general connection failures on Windows, and Chrome plugin malfunctions with reported outdated versions despite being the latest from the store.  Solutions may involve checking graphics drivers, Pieces OS version compatibility, and plugin updates.

**Related Issues:**
- [#565](https://github.com/pieces-app/support/issues/565): Starting error: No available configurations for the given RGBA pixel format
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS


## Recommendations
- Prioritize resolving connection issues between Pieces OS and its components (CLI, plugins, desktop app). This is the most frequent problem across different operating systems.
- Investigate the root cause of LTM malfunctions, including frequent shutdowns and failure to provide context.  Focus on potential Gemini-Pro model access issues.
- Address the UI regression related to chat bubble deletion and hover menu behavior on macOS and Windows.
- Improve Chromebook installation experience and address the reported unresponsiveness.
- Review and update support documentation and troubleshooting guides for connection issues and LTM problems, including clear steps for checking plugin versions, Pieces OS updates, and graphics drivers (for Linux users).
- Consider implementing error logging and reporting mechanisms to gather more detailed information about connection failures and LTM issues for faster diagnosis.
- Monitor plugin version compatibility with Pieces OS and ensure prompt updates are available to users through the respective app stores.
- Proactively communicate known issues and workarounds to users through a dedicated status page or community forum to reduce support ticket volume. 

## Daily Reports
Here are the daily reports for this week:

- [report_210716](daily/2025-06-10/report_210716.md)
- [report_131633](daily/2025-06-12/report_131633.md)
- [report_050750](daily/2025-06-12/report_050750.md)
- [report_210719](daily/2025-06-12/report_210719.md)
- [report_131225](daily/2025-06-14/report_131225.md)
- [report_210624](daily/2025-06-14/report_210624.md)
- [report_210630](daily/2025-06-15/report_210630.md)
