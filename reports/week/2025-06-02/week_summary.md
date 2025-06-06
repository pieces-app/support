# Support Ticket Report
- Generated: 2025-06-06 21:09:19
- Period: 2025-06-02 to 2025-06-06

## Summary
- **Total Tickets:** 15
- **Resolved:** 5
- **Open:** 10

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#739](https://github.com/pieces-app/support/issues/739) | Failed to connect to PiecesOS | 10.17 |
| [#719](https://github.com/pieces-app/support/issues/719) | Pieces Desktop freezes after inactivity | 6.95 |
| [#730](https://github.com/pieces-app/support/issues/730) | WSL cannot connect to Pieces OS in VS Code | 6.94 |
| [#733](https://github.com/pieces-app/support/issues/733) | Chat responses are slow/dont happen | 6.32 |
| [#732](https://github.com/pieces-app/support/issues/732) | Performance Issues in VSCode with Pieces OS Active | 4.82 |

## Common Issues
### 1. Pieces OS connectivity issues across VS Code and Chrome extensions
Users report various connectivity problems with Pieces OS on Windows.  VS Code extension fails to connect, showing errors in developer tools and Pieces OS logs. Chrome extension malfunctions, reporting outdated version despite being the latest. Issues persist across different Pieces OS versions (11.4.2) and involve VS Code's WSL environment.  Troubleshooting includes custom URL settings and Ngrok forwarding, but without success.

**Related Issues:**
- [#730](https://github.com/pieces-app/support/issues/730): WSL cannot connect to Pieces OS in VS Code
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS

### 2. Pieces OS and plugin compatibility issues
Users are experiencing issues with Pieces OS and its plugins, primarily connection problems and performance degradation.  A common solution is to ensure all Pieces components (OS, desktop app, and plugins) are updated to their latest versions, especially after a major release like 11.0.0.  Check for version compatibility and update through the respective app stores or Pieces update mechanisms.

**Related Issues:**
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active

### 3. Pieces OS and Desktop App Performance Issues
Users report performance issues including freezing, unresponsiveness, and unexpected restarts, primarily with the Pieces Desktop app on Windows and macOS.  Issues appear linked to LTM usage and inactivity.  Potential solutions include checking for updates, restarting the app or OS, and disabling LTM.

**Related Issues:**
- [#719](https://github.com/pieces-app/support/issues/719): Pieces Desktop freezes after inactivity
- [#734](https://github.com/pieces-app/support/issues/734): bug: LTM continues to turn off, requiring me to turn LTM back on periodically
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active

### 4. Pieces Desktop App and Plugin Issues on macOS and Windows
Users are experiencing issues with the Pieces desktop app and Chrome plugin on macOS and Windows.  Keyboard shortcuts are not functioning on macOS, and the Chrome plugin has connectivity and functionality problems on Windows. Additionally, the macOS desktop app periodically jumps to the main monitor and steals focus.  Reinstallation may resolve some of these issues.

**Related Issues:**
- [#742](https://github.com/pieces-app/support/issues/742): Mac OS Keyboard Shortcuts do not work
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#727](https://github.com/pieces-app/support/issues/727): MacOS Desktop periodically jumps to main monitor & grabs focus off of current window

### 5. Pieces OS 11.4.2 performance issues and Gemini connection failures
Users are experiencing performance issues with Pieces OS 11.4.2, including VS Code slowdowns, dropped connections, and delayed or absent chat responses.  A "create memory" bug via MCP is resolved in the upcoming 11.4.3 release.  Gemini API connection failures are also reported, indicated by 404 errors for the gemini-pro model.

**Related Issues:**
- [#737](https://github.com/pieces-app/support/issues/737): bug: create memory via mcp(resolved in next release 11.4.3)
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#733](https://github.com/pieces-app/support/issues/733): Chat responses are slow/dont happen


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and its plugins, especially for VS Code and Chrome extensions on Windows.  Focus on issues related to WSL environments and version compatibility.
- Address performance problems with Pieces OS and the Desktop app, particularly freezing and unresponsiveness on Windows and macOS. Investigate the impact of LTM usage and inactivity.
- Ensure keyboard shortcuts are fully functional on macOS and resolve the focus stealing issue. Re-evaluate the Chrome plugin's functionality and connectivity on Windows.
- Investigate and resolve Gemini API connection failures, focusing on the reported 404 errors for the gemini-pro model.
- Proactively monitor and address issues related to the upcoming 11.4.3 release, especially the resolved "create memory" bug, to prevent further user disruption.
- Improve communication with users regarding plugin updates and compatibility issues, particularly after major releases like 11.0.0. Provide clear instructions on updating all Pieces components.
- Gather more data on the frequency and impact of LTM-related issues to determine if disabling LTM is a viable temporary solution for performance problems.
- Analyze user feedback and logs to identify common pain points and areas for improvement in the Pieces ecosystem. Use this data to inform future development and prioritization of bug fixes.
- Develop more robust troubleshooting documentation and resources for users experiencing connectivity and performance issues. Include step-by-step instructions and common solutions.
- Consider implementing automated testing and monitoring to catch and address issues more quickly, particularly for critical functionalities like connectivity and performance.

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
