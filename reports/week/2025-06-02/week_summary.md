# Support Ticket Report
- Generated: 2025-06-05 05:10:33
- Period: 2025-06-02 to 2025-06-05

## Summary
- **Total Tickets:** 13
- **Resolved:** 5
- **Open:** 8

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#739](https://github.com/pieces-app/support/issues/739) | Failed to connect to PiecesOS | 10.15 |
| [#730](https://github.com/pieces-app/support/issues/730) | WSL cannot connect to Pieces OS in VS Code | 7.22 |
| [#734](https://github.com/pieces-app/support/issues/734) | bug: LTM continues to turn off, requiring me to turn LTM back on periodically | 5.67 |
| [#733](https://github.com/pieces-app/support/issues/733) | Chat responses are slow/dont happen | 5.67 |
| [#732](https://github.com/pieces-app/support/issues/732) | Performance Issues in VSCode with Pieces OS Active | 4.67 |

## Common Issues
### 1. Pieces OS connectivity issues across VS Code and Chrome extensions
Users report various connectivity problems with Pieces OS 11.4.2 on Windows.  VS Code extension fails to connect, showing empty settings or errors in developer tools and Pieces OS logs. Chrome extension malfunctions, reporting outdated version despite being the latest. Issues persist despite attempts like custom URL settings and Ngrok forwarding. Some users experience VS Code performance degradation while Pieces OS is running.

**Related Issues:**
- [#730](https://github.com/pieces-app/support/issues/730): WSL cannot connect to Pieces OS in VS Code
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS

### 2. Pieces OS 11.0.0 Update and Plugin Compatibility Issues
Users are experiencing issues with Pieces OS 11.0.0 and its plugins. Some plugins are outdated or not functioning correctly after the update.  The Chrome extension, for example, has reported connection problems. Users should ensure all plugins are updated to their respective latest versions (listed in the first support ticket) to resolve compatibility issues. Performance issues with VS Code have also been reported while Pieces OS is running.

**Related Issues:**
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active

### 3. Pieces Desktop App and Plugin Issues
Users are experiencing various issues with the Pieces desktop application and plugins, including keyboard shortcuts not working on macOS, Chrome plugin connection problems on Windows, and the desktop app periodically jumping to the main monitor on macOS.  Troubleshooting steps include checking for plugin updates and reinstalling the desktop application.

**Related Issues:**
- [#742](https://github.com/pieces-app/support/issues/742): Mac OS Keyboard Shortcuts do not work
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#727](https://github.com/pieces-app/support/issues/727): MacOS Desktop periodically jumps to main monitor & grabs focus off of current window

### 4. Pieces OS 11.4.2 performance issues and Copilot integration bugs
Users are experiencing performance issues with Pieces OS 11.4.2, including VS Code slowdowns and unresponsiveness.  Additionally, Copilot integration is failing, specifically with the `create_memory_pieces` tool, and connections are being dropped.  Issues appear across VS Code, VS 2022, and the Pieces desktop app. The next release, 11.4.3, is expected to resolve the memory creation bug.

**Related Issues:**
- [#737](https://github.com/pieces-app/support/issues/737): bug: create memory via mcp(resolved in next release 11.4.3)
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#733](https://github.com/pieces-app/support/issues/733): Chat responses are slow/dont happen

### 5. Pieces OS: Data clearing, performance, and Copilot issues
Users report issues with clearing LTM data, including persistent context and workstream activity.  A workaround involves manually deleting the 'com.pieces.os' directory. Performance issues in VS Code are also reported when Pieces OS is active, resolving upon closing Pieces.  Additionally, Pieces Copilot sometimes struggles to access LTM, displaying incorrect dates and generating unrelated content, requiring specific prompts for accurate responses.

**Related Issues:**
- [#743](https://github.com/pieces-app/support/issues/743): Clear Long Term Memory Data" Does Not Remove Captured Context or Workstream Activity
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#731](https://github.com/pieces-app/support/issues/731): Pieces Copilot doesn't get the LTM info and shows a wrong date


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and VS Code/Chrome extensions, focusing on Windows users and Pieces OS 11.4.2. Investigate error messages in developer tools and Pieces OS logs, custom URL settings, Ngrok forwarding, and potential VS Code performance degradation.
- Address Pieces OS and plugin compatibility following the 11.0.0 update. Ensure users update all plugins to the latest versions and investigate reported Chrome extension connection problems and VS Code performance issues.
- Investigate and resolve Pieces desktop app issues, including macOS keyboard shortcut malfunctions, Chrome plugin connection problems on Windows, and the app unexpectedly jumping to the main monitor on macOS.  Test plugin updates and reinstallation as potential solutions.
- Address Pieces OS 11.4.2 performance issues impacting VS Code (slowdowns and unresponsiveness) and Copilot integration failures (especially the 'create_memory_pieces' tool and dropped connections). Verify fixes in the 11.4.3 release.
- Improve LTM data clearing functionality to fully remove context and workstream activity.  Provide clearer options within the app or enhance documentation regarding manual directory deletion.
- Investigate Pieces Copilot's LTM access issues, including incorrect date displays and unrelated content generation.  Improve Copilot's ability to understand user prompts and accurately retrieve relevant LTM data.
- Monitor and address the bug causing LTM to repeatedly turn off, requiring users to manually re-enable it.
- Fix the bug preventing image pasting functionality.
- Improve chat response times and address instances where responses are not generated. Investigate potential bottlenecks or connection issues related to Pieces OS and its integrations.
- Investigate and resolve the issue where the Pieces desktop app on macOS periodically jumps to the main monitor and grabs focus from the current window. 

## Daily Reports
Here are the daily reports for this week:

- [report_210657](daily/2025-06-03/report_210657.md)
- [report_050809](daily/2025-06-03/report_050809.md)
- [report_131650](daily/2025-06-03/report_131650.md)
- [report_210610](daily/2025-06-04/report_210610.md)
- [report_131714](daily/2025-06-04/report_131714.md)
- [report_050818](daily/2025-06-05/report_050818.md)
