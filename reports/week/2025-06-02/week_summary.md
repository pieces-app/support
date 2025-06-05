# Support Ticket Report
- Generated: 2025-06-05 21:09:03
- Period: 2025-06-02 to 2025-06-05

## Summary
- **Total Tickets:** 14
- **Resolved:** 5
- **Open:** 9

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#739](https://github.com/pieces-app/support/issues/739) | Failed to connect to PiecesOS | 10.15 |
| [#730](https://github.com/pieces-app/support/issues/730) | WSL cannot connect to Pieces OS in VS Code | 7.22 |
| [#719](https://github.com/pieces-app/support/issues/719) | Pieces Desktop freezes after inactivity | 7.09 |
| [#733](https://github.com/pieces-app/support/issues/733) | Chat responses are slow/dont happen | 5.36 |
| [#734](https://github.com/pieces-app/support/issues/734) | bug: LTM continues to turn off, requiring me to turn LTM back on periodically | 4.73 |

## Common Issues
### 1. Pieces OS connectivity issues across VS Code and Chrome extensions
Users report various connectivity problems with Pieces OS 11.4.2 on Windows.  VS Code extension displays empty settings, fails to connect to WSL, and logs errors. Chrome extension malfunctions, reporting outdated version despite being the latest. Issues may involve custom URL settings, Ngrok forwarding, and conflicts with WSL.

**Related Issues:**
- [#730](https://github.com/pieces-app/support/issues/730): WSL cannot connect to Pieces OS in VS Code
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS

### 2. Pieces OS 11.0.0 Update and Plugin Compatibility Issues
Users are experiencing issues with Pieces OS 11.0.0 and its plugins. Some plugins are outdated or not functioning correctly after the update.  The Chrome extension, for example, has reported connection problems.  Users should ensure all plugins are updated to their respective latest versions as listed in the 11.0.0 release notes to resolve compatibility issues. Performance issues with VS Code have also been reported while Pieces OS is running.

**Related Issues:**
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active

### 3. Pieces OS and Desktop App Performance Issues
Users report performance issues including freezing, unresponsiveness, and unexpected restarts, primarily with the Pieces Desktop app. These issues appear to be linked to LTM usage, recent updates (May 22nd), and specific actions like interacting with chats.  Additional reports indicate performance degradation in other applications like VS Code while Pieces OS is running. Further investigation is needed to pinpoint the root cause and potential solutions.

**Related Issues:**
- [#719](https://github.com/pieces-app/support/issues/719): Pieces Desktop freezes after inactivity
- [#734](https://github.com/pieces-app/support/issues/734): bug: LTM continues to turn off, requiring me to turn LTM back on periodically
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active

### 4. Pieces Desktop App and Plugin Issues on macOS and Windows
Users are experiencing issues with the Pieces desktop application and Chrome plugin on macOS and Windows.  Problems include keyboard shortcuts not working on macOS, plugin functionality issues and connection problems on Windows, and the desktop app periodically jumping to the main monitor on macOS.  Troubleshooting steps include checking for plugin updates and reinstalling the desktop application.

**Related Issues:**
- [#742](https://github.com/pieces-app/support/issues/742): Mac OS Keyboard Shortcuts do not work
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#727](https://github.com/pieces-app/support/issues/727): MacOS Desktop periodically jumps to main monitor & grabs focus off of current window

### 5. Pieces OS 11.4.2 performance issues and Copilot integration bugs
Users are experiencing performance issues with Pieces OS 11.4.2, including VS Code slowdowns and unresponsiveness.  Additionally, Copilot integration is failing, specifically with the `create_memory_pieces` tool, and connections are being dropped.  Issues appear across VS Code, VS 2022, and the Pieces desktop app. The next release, 11.4.3, is expected to resolve the memory creation bug.

**Related Issues:**
- [#737](https://github.com/pieces-app/support/issues/737): bug: create memory via mcp(resolved in next release 11.4.3)
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#733](https://github.com/pieces-app/support/issues/733): Chat responses are slow/dont happen


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and VS Code/Chrome extensions, especially for Windows users experiencing empty settings, WSL connection failures, and outdated plugin reports.
- Investigate and address performance issues impacting the Pieces Desktop app and VS Code, including freezing, unresponsiveness, and slowdowns, potentially related to LTM usage and recent updates.
- Ensure compatibility of all plugins with Pieces OS 11.0.0 and subsequent updates, addressing reported connection problems and functionality issues.
- Verify and fix keyboard shortcut functionality on macOS for the Pieces Desktop app.
- Improve communication regarding plugin updates and compatibility issues, referencing the 11.0.0 release notes and providing clear guidance to users.
- Investigate Copilot integration failures, particularly the 'create_memory_pieces' tool and dropped connections, across VS Code, VS 2022, and the Pieces desktop app.
- Monitor and address the issue of LTM repeatedly turning off, requiring users to manually re-enable it.
- Address the bug preventing pasting images within the Pieces environment.
- Investigate chat response delays and failures, ensuring timely and consistent communication with users.
- Address the issue where clearing Long Term Memory Data does not fully remove captured context or workstream activity.
- Investigate the bug causing Pieces Copilot to display incorrect LTM information and dates.
- Address the issue of the Pieces Desktop app periodically jumping to the main monitor and grabbing focus on macOS.

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
