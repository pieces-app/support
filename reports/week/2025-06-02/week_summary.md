# Support Ticket Report
- Generated: 2025-06-08 05:09:01
- Period: 2025-06-02 to 2025-06-08

## Summary
- **Total Tickets:** 15
- **Resolved:** 6
- **Open:** 9

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#739](https://github.com/pieces-app/support/issues/739) | Failed to connect to PiecesOS | 9.18 |
| [#719](https://github.com/pieces-app/support/issues/719) | Pieces Desktop freezes after inactivity | 6.36 |
| [#733](https://github.com/pieces-app/support/issues/733) | Chat responses are slow/dont happen | 6.07 |
| [#730](https://github.com/pieces-app/support/issues/730) | WSL cannot connect to Pieces OS in VS Code | 5.95 |
| [#732](https://github.com/pieces-app/support/issues/732) | Performance Issues in VSCode with Pieces OS Active | 4.63 |

## Common Issues
### 1. Pieces OS connectivity issues across VS Code and Chrome extensions
Users report various connectivity problems with Pieces OS 11.4.2 on Windows.  VS Code extension displays empty settings, fails to connect to WSL, and logs errors. Chrome extension malfunctions, reporting outdated version despite being the latest.  Suggested solutions include checking custom URL settings for remote environments in VS Code and verifying Pieces OS logs for 404 errors.

**Related Issues:**
- [#730](https://github.com/pieces-app/support/issues/730): WSL cannot connect to Pieces OS in VS Code
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS

### 2. Pieces OS and plugin compatibility issues
Users report plugin malfunctions, connection failures, and performance degradation, especially with the Chrome extension and VSCode integration.  Updating to the latest Pieces OS and plugin versions (v11.0.0 and respective plugin versions) is recommended to resolve compatibility issues and improve performance. Ensure all plugins are updated after major Pieces OS updates.

**Related Issues:**
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active

### 3. Pieces Desktop Issues with LTM and Freezing
Users report Pieces Desktop experiencing issues related to LTM and application freezing. LTM information is sometimes inaccurate or unavailable, leading to incorrect context in Copilot chats.  Additionally, the application freezes after periods of inactivity, especially after chat interactions, requiring a restart. These issues occur across different operating systems (macOS, Windows) and Pieces versions.

**Related Issues:**
- [#731](https://github.com/pieces-app/support/issues/731): Pieces Copilot doesn't get the LTM info and shows a wrong date
- [#734](https://github.com/pieces-app/support/issues/734): bug: LTM continues to turn off, requiring me to turn LTM back on periodically
- [#719](https://github.com/pieces-app/support/issues/719): Pieces Desktop freezes after inactivity

### 4. Pieces Desktop App and Plugin Issues on macOS and Windows
Users are experiencing issues with the Pieces desktop application and Chrome plugin on macOS and Windows.  Keyboard shortcuts are not functioning on macOS, and the Chrome plugin has connectivity and functionality problems on Windows. Additionally, the Pieces desktop app on macOS periodically jumps to the main monitor and steals focus. Troubleshooting steps include checking for plugin updates and reinstalling the desktop application.

**Related Issues:**
- [#742](https://github.com/pieces-app/support/issues/742): Mac OS Keyboard Shortcuts do not work
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#727](https://github.com/pieces-app/support/issues/727): MacOS Desktop periodically jumps to main monitor & grabs focus off of current window

### 5. Pieces OS 11.4.2 performance issues and Copilot integration bugs
Users are experiencing performance issues with Pieces OS 11.4.2, including VS Code slowdowns and unresponsiveness.  Additionally, Copilot's create_memory_pieces tool is failing, sometimes with connection drops. Chat responses are also delayed or absent. The create_memory tool issue will be resolved in Pieces OS 11.4.3. Further investigation is needed for the performance and chat response issues.

**Related Issues:**
- [#737](https://github.com/pieces-app/support/issues/737): bug: create memory via mcp(resolved in next release 11.4.3)
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#733](https://github.com/pieces-app/support/issues/733): Chat responses are slow/dont happen


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and plugins, especially for VS Code and Chrome extensions, given the high frequency and impact on users.
- Investigate and address performance issues with Pieces OS 11.4.2, particularly VS Code slowdowns and chat response delays, to improve user experience.
- Ensure LTM functionality is stable and accurate, addressing bugs related to incorrect information and periodic disabling.
- Improve Pieces Desktop application stability on macOS and Windows, focusing on application freezing and keyboard shortcut malfunctions.
- Review and update documentation for keyboard shortcuts on macOS to ensure accuracy and clarity.
- Monitor plugin compatibility with Pieces OS updates and proactively communicate breaking changes and required updates to users.
- Investigate the "Clear Long Term Memory Data" feature not removing captured context and workstream activity as expected.
- Address the issue of pasting images not working within the application.
- Look into the issue of the Pieces Desktop app on macOS periodically jumping to the main monitor and stealing focus.
- Investigate the issue of chat responses being slow or not appearing at all.
- Investigate the issue of Visual Studio 2022 extension interfering with Diagnostic tool output.
- Look into the issue of no response to chat and continuous loading.
- Address the bug where creating memory via MCP fails and the connection drops occasionally.
- Ensure Copilot's create_memory_pieces tool functions reliably after the 11.4.3 update and monitor for any recurring issues.
- Communicate the resolution of the create_memory tool issue in the 11.4.3 release to affected users.
- Provide clear and concise troubleshooting steps for common issues, such as connectivity problems and application freezes, in the documentation and support resources.
- Gather more data on the frequency and impact of less common issues, such as WSL connection problems and UI bugs related to context time, to prioritize future bug fixes.
- Consider implementing a more robust system for tracking and prioritizing bug reports based on frequency, severity, and user impact.
- Proactively communicate known issues and their planned resolutions to users through release notes, blog posts, or other channels.
- Encourage users to report issues through the appropriate channels and provide feedback on their experience with Pieces OS and related tools.
- Analyze user feedback and bug reports to identify underlying patterns and areas for improvement in the software and support processes.
- Provide regular updates to users on the progress of bug fixes and new feature development to maintain transparency and build trust.

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
