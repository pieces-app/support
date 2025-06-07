# Support Ticket Report
- Generated: 2025-06-07 05:09:30
- Period: 2025-06-02 to 2025-06-07

## Summary
- **Total Tickets:** 15
- **Resolved:** 6
- **Open:** 9

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#739](https://github.com/pieces-app/support/issues/739) | Failed to connect to PiecesOS | 9.62 |
| [#719](https://github.com/pieces-app/support/issues/719) | Pieces Desktop freezes after inactivity | 6.95 |
| [#733](https://github.com/pieces-app/support/issues/733) | Chat responses are slow/dont happen | 6.32 |
| [#730](https://github.com/pieces-app/support/issues/730) | WSL cannot connect to Pieces OS in VS Code | 6.14 |
| [#732](https://github.com/pieces-app/support/issues/732) | Performance Issues in VSCode with Pieces OS Active | 4.82 |

## Common Issues
### 1. Pieces OS connectivity issues across VS Code and Chrome extensions
Users report various connectivity problems with Pieces OS on Windows.  VS Code extension fails to connect, showing errors in developer tools and Pieces OS logs. Chrome extension malfunctions, reporting outdated version despite being the latest. Issues persist despite attempts like custom URL settings and Ngrok forwarding. Some users experience VS Code performance degradation while Pieces OS is running.

**Related Issues:**
- [#730](https://github.com/pieces-app/support/issues/730): WSL cannot connect to Pieces OS in VS Code
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS

### 2. Pieces OS and plugin compatibility issues
Users report plugin malfunctions, connection failures, and performance degradation with Pieces OS, especially after updates.  A common solution involves ensuring all Pieces components (desktop app, OS, and plugins) are updated to their latest compatible versions, as listed in the 11.0.0 release notes. Check for version compatibility and update accordingly.

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
Users are experiencing issues with the Pieces desktop application and Chrome plugin on macOS and Windows.  Problems include keyboard shortcuts not working on macOS, plugin connection and functionality issues on Windows, and the desktop app periodically jumping to the main monitor on macOS.  Troubleshooting steps include checking for plugin updates and reinstalling the desktop application.

**Related Issues:**
- [#742](https://github.com/pieces-app/support/issues/742): Mac OS Keyboard Shortcuts do not work
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#727](https://github.com/pieces-app/support/issues/727): MacOS Desktop periodically jumps to main monitor & grabs focus off of current window

### 5. Pieces OS 11.4.2 performance issues and Copilot memory creation failure
Users are experiencing performance issues with Pieces OS 11.4.2, including VS Code slowdowns and unresponsiveness. Additionally, the Copilot `create_memory_pieces` tool is failing with a 404 error.  Chat responses are also delayed or absent. The memory creation bug is resolved in 11.4.3.  Users should update to this version. Further investigation is needed for the performance issues and chat response delays.

**Related Issues:**
- [#737](https://github.com/pieces-app/support/issues/737): bug: create memory via mcp(resolved in next release 11.4.3)
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#733](https://github.com/pieces-app/support/issues/733): Chat responses are slow/dont happen


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and plugins, especially for VS Code and Chrome extensions on Windows.  Investigate error messages in developer tools and Pieces OS logs, custom URL settings, Ngrok forwarding, and potential VS Code performance impacts.
- Address Pieces OS and plugin compatibility issues by emphasizing the importance of updating all Pieces components to their latest compatible versions, referencing the 11.0.0 release notes.
- Investigate and resolve Pieces Desktop issues related to LTM inaccuracy and application freezing after inactivity, focusing on macOS and Windows platforms.
- Address macOS and Windows desktop application and plugin issues, including non-functional keyboard shortcuts on macOS, plugin connection problems on Windows, and the desktop app's focus grabbing behavior on macOS. Check for plugin updates and consider desktop application reinstallation.
- Investigate Pieces OS 11.4.2 performance issues, including VS Code slowdowns and chat response delays. While the Copilot memory creation bug is resolved in 11.4.3, encourage users to update and continue monitoring performance and chat functionality.
- Proactively monitor and address issues related to LTM data persistence after clearing, keyboard shortcut functionality on macOS, and chat response delays or failures across different IDEs and the desktop app. 

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
- [report_050717](daily/2025-06-07/report_050717.md)
