# Support Ticket Report
- Generated: 2025-06-06 05:09:30
- Period: 2025-06-02 to 2025-06-06

## Summary
- **Total Tickets:** 14
- **Resolved:** 5
- **Open:** 9

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#739](https://github.com/pieces-app/support/issues/739) | Failed to connect to PiecesOS | 9.50 |
| [#719](https://github.com/pieces-app/support/issues/719) | Pieces Desktop freezes after inactivity | 7.09 |
| [#730](https://github.com/pieces-app/support/issues/730) | WSL cannot connect to Pieces OS in VS Code | 6.94 |
| [#733](https://github.com/pieces-app/support/issues/733) | Chat responses are slow/dont happen | 5.36 |
| [#734](https://github.com/pieces-app/support/issues/734) | bug: LTM continues to turn off, requiring me to turn LTM back on periodically | 4.73 |

## Common Issues
### 1. Pieces OS connectivity issues across VS Code and Chrome plugin
Users report various connectivity problems with Pieces OS 11.4.2 on Windows.  VS Code extension displays empty settings, fails to connect to WSL, and logs errors. Chrome plugin malfunctions, reporting outdated version despite being the latest. Issues may involve custom URL settings, Ngrok forwarding, and conflicts with WSL.

**Related Issues:**
- [#730](https://github.com/pieces-app/support/issues/730): WSL cannot connect to Pieces OS in VS Code
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS

### 2. Pieces OS 11.0.0 Update Causes Plugin Issues
Users report plugin incompatibility and performance issues after updating to Pieces OS 11.0.0.  Some plugins require updates to function correctly with the new OS version. Ensure all Pieces plugins are updated to their latest versions. Check for plugin-specific update instructions. If issues persist, contact Pieces support.

**Related Issues:**
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active

### 3. Pieces OS and Desktop app performance issues
Users report freezing, slowdowns, and unresponsiveness in Pieces Desktop and other applications like VS Code when Pieces OS is running.  Issues appear to be triggered by inactivity after using chat features, especially with LTM enabled.  Restarting Pieces Desktop temporarily resolves the freezing issue.  The problems seem to have increased since the May 22nd update.

**Related Issues:**
- [#719](https://github.com/pieces-app/support/issues/719): Pieces Desktop freezes after inactivity
- [#734](https://github.com/pieces-app/support/issues/734): bug: LTM continues to turn off, requiring me to turn LTM back on periodically
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active

### 4. Pieces Desktop App and Plugin Issues on macOS and Windows
Users are experiencing issues with the Pieces desktop application and Chrome plugin on macOS and Windows.  Keyboard shortcuts are not functioning on macOS, and the Chrome plugin has connectivity and functionality problems on Windows. Additionally, the Pieces desktop app on macOS periodically jumps to the main monitor and steals focus.  Troubleshooting steps include checking for plugin updates and reinstalling the desktop application.

**Related Issues:**
- [#742](https://github.com/pieces-app/support/issues/742): Mac OS Keyboard Shortcuts do not work
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#727](https://github.com/pieces-app/support/issues/727): MacOS Desktop periodically jumps to main monitor & grabs focus off of current window

### 5. Pieces OS 11.4.2 performance issues and Copilot integration bugs
Users are experiencing performance issues with Pieces OS 11.4.2, including VS Code slowdowns and unresponsiveness.  Additionally, Copilot's create_memory_pieces tool is failing with connection drops and "404 Publisher Model not found" errors. Chat responses are also delayed or absent. The create_memory issue will be resolved in 11.4.3.

**Related Issues:**
- [#737](https://github.com/pieces-app/support/issues/737): bug: create memory via mcp(resolved in next release 11.4.3)
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#733](https://github.com/pieces-app/support/issues/733): Chat responses are slow/dont happen


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and VS Code/Chrome plugin, especially on Windows, given the high frequency and activity level of related tickets (e.g., #730, #739, #732).
- Investigate and address performance issues in Pieces Desktop and VS Code when Pieces OS is running, particularly freezing after inactivity and slowdowns, potentially related to LTM usage (e.g., #719, #732, #734).
- Ensure compatibility of all plugins with Pieces OS 11.0.0 and provide clear update instructions to users to mitigate plugin-related issues (e.g., #538, #739, #732).
- Address macOS-specific issues, including non-functional keyboard shortcuts and the desktop app stealing focus, to improve user experience on this platform (e.g., #742, #727).
- Monitor and resolve Copilot integration bugs, such as the "404 Publisher Model not found" error and delayed chat responses, to ensure smooth Copilot functionality (e.g., #737, #733).
- Review and update documentation regarding keyboard shortcuts and connectivity troubleshooting to provide accurate and helpful information to users.
- Consider improving error messaging and logging within Pieces OS and related applications to facilitate faster diagnosis of connectivity and performance problems.
- Proactively communicate known issues and their resolutions to users through announcements or updates to reduce support ticket volume.
- Analyze support tickets for trends and patterns to identify potential underlying issues or areas for improvement in the software itself.
- Gather user feedback on specific pain points and prioritize development efforts based on user needs and impact.

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
