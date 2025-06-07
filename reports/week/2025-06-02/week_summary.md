# Support Ticket Report
- Generated: 2025-06-07 21:08:19
- Period: 2025-06-02 to 2025-06-07

## Summary
- **Total Tickets:** 15
- **Resolved:** 6
- **Open:** 9

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#739](https://github.com/pieces-app/support/issues/739) | Failed to connect to PiecesOS | 9.62 |
| [#719](https://github.com/pieces-app/support/issues/719) | Pieces Desktop freezes after inactivity | 6.36 |
| [#730](https://github.com/pieces-app/support/issues/730) | WSL cannot connect to Pieces OS in VS Code | 6.14 |
| [#733](https://github.com/pieces-app/support/issues/733) | Chat responses are slow/dont happen | 6.07 |
| [#732](https://github.com/pieces-app/support/issues/732) | Performance Issues in VSCode with Pieces OS Active | 4.63 |

## Common Issues
### 1. Pieces OS connectivity issues across VS Code and Chrome extensions
Users report various connectivity problems with Pieces OS 11.4.2 on Windows.  VS Code extension fails to connect, showing errors in developer tools and Pieces OS logs. Chrome extension malfunctions, reporting outdated version despite being the latest. Users experience performance issues in VS Code when Pieces OS is running.  Troubleshooting includes checking custom URLs and network connectivity.

**Related Issues:**
- [#730](https://github.com/pieces-app/support/issues/730): WSL cannot connect to Pieces OS in VS Code
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS

### 2. Pieces OS and plugin compatibility issues
Users are experiencing issues with Pieces OS and its plugins, primarily with connection problems and performance degradation in applications like VS Code.  A common solution is to ensure all Pieces OS components and plugins are updated to their latest versions, especially considering the breaking changes introduced in Pieces OS 11.0.0.

**Related Issues:**
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active

### 3. Pieces Desktop Issues with LTM and Freezing
Users report Pieces Desktop experiencing issues related to LTM and application freezing. LTM information is sometimes inaccurate or unavailable, leading to incorrect context in Copilot chats. Additionally, the application freezes after periods of inactivity, especially after interacting with chat features.  Issues occur across macOS and Windows platforms. Further investigation is needed to pinpoint the root cause and solutions.

**Related Issues:**
- [#731](https://github.com/pieces-app/support/issues/731): Pieces Copilot doesn't get the LTM info and shows a wrong date
- [#734](https://github.com/pieces-app/support/issues/734): bug: LTM continues to turn off, requiring me to turn LTM back on periodically
- [#719](https://github.com/pieces-app/support/issues/719): Pieces Desktop freezes after inactivity

### 4. Pieces Desktop App and Plugin Issues on macOS and Windows
Users are experiencing issues with the Pieces desktop application and Chrome plugin on macOS and Windows.  Keyboard shortcuts are not functioning on macOS, and the Chrome plugin has connectivity and functionality problems on Windows. Additionally, the Pieces desktop app on macOS periodically jumps to the main monitor and steals focus.  Troubleshooting steps include checking for plugin updates and reinstalling the desktop application.

**Related Issues:**
- [#742](https://github.com/pieces-app/support/issues/742): Mac OS Keyboard Shortcuts do not work
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#727](https://github.com/pieces-app/support/issues/727): MacOS Desktop periodically jumps to main monitor & grabs focus off of current window

### 5. Pieces OS 11.4.2 performance issues and Gemini connection failures
Users are experiencing performance issues with Pieces OS 11.4.2, including VS Code slowdowns, dropped connections, and delayed or absent chat responses.  A "create memory" bug via MCP is resolved in the upcoming 11.4.3 release.  Issues may relate to Gemini connection failures.

**Related Issues:**
- [#737](https://github.com/pieces-app/support/issues/737): bug: create memory via mcp(resolved in next release 11.4.3)
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#733](https://github.com/pieces-app/support/issues/733): Chat responses are slow/dont happen


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and its plugins, especially for VS Code and Chrome extensions on Windows.  Focus on issues related to Pieces OS version 11.4.2.
- Investigate and address performance issues in VS Code when Pieces OS is active, including slowdowns and unresponsiveness.
- Improve LTM functionality within Pieces Desktop, ensuring accurate information and preventing application freezes.  Address the incorrect date display in the context time.
- Ensure keyboard shortcuts are functional on macOS and resolve the focus stealing issue on multi-monitor setups.
- Verify Gemini connection stability and address slow or absent chat responses, particularly in VS Code, Visual Studio, and the desktop app.
- Monitor and address issues related to the upcoming Pieces OS 11.4.3 release, specifically regarding the "create memory" bug fix.
- Review and update documentation for keyboard shortcuts and plugin compatibility to reflect recent changes and known issues.
- Proactively communicate known issues and their solutions to users, especially regarding plugin updates and breaking changes introduced in Pieces OS 11.0.0.
- Gather more data on the frequency and impact of LTM issues and Chrome plugin problems to prioritize development efforts.
- Consider implementing automated tests to catch connectivity and performance issues before they reach users. 

## Daily Reports
Here are the daily reports for this week:

- [report_210657](daily/2025-06-03/report_210657.md)
- [report_050809](daily/2025-06-03/report_050809.md)
- [report_131650](daily/2025-06-03/report_131650.md)
- [report_210610](daily/2025-06-04/report_210610.md)
- [report_131714](daily/2025-06-04/report_131714.md)
- [report_131611](daily/2025-06-05/report_131611.md)
- [report_210653](daily/2025-06-05/report_210653.md)
- [report_050818](daily/2025-06-05/report_050818.md)
- [report_210639](daily/2025-06-06/report_210639.md)
- [report_131512](daily/2025-06-06/report_131512.md)
- [report_210613](daily/2025-06-07/report_210613.md)
- [report_050717](daily/2025-06-07/report_050717.md)
- [report_131212](daily/2025-06-07/report_131212.md)
