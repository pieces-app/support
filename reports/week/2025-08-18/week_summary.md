# Support Ticket Report
- Generated: 2025-08-22 21:08:23
- Period: 2025-08-18 to 2025-08-22

## Summary
- **Total Tickets:** 12
- **Resolved:** 2
- **Open:** 10

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 8.83 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.63 |
| [#839](https://github.com/pieces-app/support/issues/839) | Cannot collapse all code block in Pieces Desktop | 5.68 |
| [#838](https://github.com/pieces-app/support/issues/838) | All files greyed out in the file picker | 5.60 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.50 |

## Common Issues
### 1. Pieces for Developers startup crashes or fails to initialize
Users on Linux and Windows experience Pieces for Developers crashing on startup or failing during initialization steps like "Ensure core dependencies." Issues include a blank window briefly appearing then disappearing on Linux, and code collapse issues on Windows.  Further investigation into logs and dependency management is needed. On Linux, potential X11/GTK conflicts are observed. Ensure Pieces OS and Pieces for Developers are compatible versions.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Users unable to access Pieces Pro features despite upgrade
Multiple Pro users report being unable to access features like LLM upgrades and activity summaries, receiving messages like "requires Pieces Pro" or encountering LLM version discrepancies.  Issue appears across Windows and macOS, various Pieces versions, and different IDE plugins.  Suggested solutions include verifying Pro status, re-login, restarting, checking configuration files, and ensuring Pieces OS and app versions are compatible.

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 3. Pieces MCP Integration Failures
Users report Pieces MCP tools, specifically `ask_pieces_ltm`, failing with "Failed to extract context" or tool unavailability.  Issues arise across various IDE plugins (VS Code, Sublime) and desktop applications.  LLM model version discrepancies and SSE connection hangs are also observed.  Suggested solutions include verifying MCP server configuration, checking LTM functionality, and ensuring proper Pieces OS and application versions.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM

### 4. MacOS Desktop App Issues
Users are experiencing issues with the MacOS desktop application, including pixelated tray icons, subscription upgrade failures leading to blank checkout pages, and files appearing greyed out in the file picker despite Pieces having necessary permissions.  These issues persist across different MacOS versions (12.1.1 and 12.2.1) and may require investigation into rendering processes, payment gateway integration, and file system access handling within the app.

**Related Issues:**
- [#840](https://github.com/pieces-app/support/issues/840): Mac icon is pixelated
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription
- [#838](https://github.com/pieces-app/support/issues/838): All files greyed out in the file picker

### 5. Pieces Desktop App and OS Issues
Users are experiencing various issues with the Pieces Desktop application and OS, including backup restoration failures, dependency issues, and UI bugs like the inability to collapse code blocks.  The issues appear across different OS versions (Windows, Linux) and Pieces versions (4.3.1, 4.3.4, 12.2.1, 12.2.2).  Logs and screenshots have been provided. Further investigation is needed to identify the root causes and solutions.

**Related Issues:**
- [#837](https://github.com/pieces-app/support/issues/837): backup restoration fails
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop


## Recommendations
- Prioritize resolution of startup crashes on Linux and Windows to ensure basic functionality. Investigate logs, dependency conflicts (X11/GTK on Linux), and version compatibility between Pieces OS and Pieces for Developers.
- Address the issue of Pro users unable to access paid features. Verify Pro status checks, re-login mechanisms, and configuration file handling. Ensure compatibility between Pieces OS, app versions, and IDE plugins.
- Investigate and resolve MCP integration failures, particularly the 'Failed to extract context' error and SSE connection hangs. Focus on MCP server configuration, LTM functionality, and version compatibility.
- Fix MacOS desktop app issues: pixelated tray icon, blank checkout page during subscription upgrade, and greyed-out files in the file picker.  Check rendering processes, payment gateway integration, and file system access handling.
- Address backup restoration failures on Windows, dependency issues on Linux, and UI bugs like code block collapse. Review logs and screenshots provided by users.

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
