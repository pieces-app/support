# Support Ticket Report
- Generated: 2025-06-03 21:09:27
- Period: 2025-06-02 to 2025-06-03

## Summary
- **Total Tickets:** 13
- **Resolved:** 5
- **Open:** 8

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#739](https://github.com/pieces-app/support/issues/739) | Failed to connect to PiecesOS | 9.91 |
| [#730](https://github.com/pieces-app/support/issues/730) | WSL cannot connect to Pieces OS in VS Code | 7.33 |
| [#733](https://github.com/pieces-app/support/issues/733) | Chat responses are slow/dont happen | 6.77 |
| [#734](https://github.com/pieces-app/support/issues/734) | bug: LTM continues to turn off, requiring me to turn LTM back on periodically | 6.06 |
| [#742](https://github.com/pieces-app/support/issues/742) | Mac OS Keyboard Shortcuts do not work | 5.68 |

## Common Issues
### 1. Pieces OS connectivity issues across VS Code and Chrome extensions
Users report various connectivity problems with Pieces OS 11.4.2 on Windows.  VS Code extensions fail to connect, showing empty settings or errors related to custom URLs and version strings. Chrome extensions also experience connection failures and outdated version messages.  Potential solutions include verifying network settings, checking Pieces OS and extension versions, and ensuring proper communication between Pieces OS, VS Code, and Chrome extensions.

**Related Issues:**
- [#730](https://github.com/pieces-app/support/issues/730): WSL cannot connect to Pieces OS in VS Code
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS

### 2. Pieces Desktop App and Plugin Issues on macOS and Windows
Users are experiencing issues with the Pieces desktop application and Chrome plugin on macOS and Windows.  Problems include keyboard shortcuts not working on macOS, plugin connection and functionality issues on Windows, and the desktop app periodically jumping to the main monitor on macOS.  Troubleshooting steps include checking for plugin updates and reinstalling the desktop application.

**Related Issues:**
- [#742](https://github.com/pieces-app/support/issues/742): Mac OS Keyboard Shortcuts do not work
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#727](https://github.com/pieces-app/support/issues/727): MacOS Desktop periodically jumps to main monitor & grabs focus off of current window

### 3. Pieces OS 11.0.0 Update and Plugin Compatibility Issues
Users are experiencing issues with Pieces OS 11.0.0 and its plugins. Some plugins are outdated or not functioning correctly after the update.  The Chrome extension, for example, has reported connection problems. Users should ensure all plugins are updated to the latest versions (Desktop App: 3.3.0, Pieces OS: 11.0.0, VSCode: 2.0.0, JetBrains: 11.0.0, Visual Studio: 4.0.0, Jupyter: 1.21.0, Obsidian: 1.21.0, Sublime: 1.5.0, CLI: 1.9.0, NeoVim: 1.3.0, Chrome Extension: 4.0.0). Performance issues with VS Code have also been reported while Pieces OS is running.

**Related Issues:**
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active

### 4. Pieces OS 11.4.2 performance issues and Copilot integration bugs
Users are experiencing performance issues with Pieces OS 11.4.2, including VS Code slowdowns and unresponsiveness.  Additionally, Copilot's create_memory_pieces tool is failing, sometimes with connection drops. Chat responses are also delayed or absent. The create_memory tool issue will be resolved in Pieces OS 11.4.3.

**Related Issues:**
- [#737](https://github.com/pieces-app/support/issues/737): bug: create memory via mcp(resolved in next release 11.4.3)
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#733](https://github.com/pieces-app/support/issues/733): Chat responses are slow/dont happen

### 5. Pieces OS 11.4.2: Slow or no response to chat, image pasting fails
Users report slow or no responses from chat, primarily using GPT-4.1 on Windows in Pieces OS 11.4.2.  Pasting images results in "Uuups" errors.  Issue affects Desktop Application, VS Code, and Visual Studio integrations.  Error messages suggest a potential issue with the Gemini-Pro model access.

**Related Issues:**
- [#738](https://github.com/pieces-app/support/issues/738): Pasting images doesn't work.
- [#729](https://github.com/pieces-app/support/issues/729): No response to chat. It just keeps loading .
- [#733](https://github.com/pieces-app/support/issues/733): Chat responses are slow/dont happen


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and plugins (VS Code, Chrome).  This appears to be the most frequent and impactful problem.
- Investigate performance issues with Pieces OS 11.4.2, especially VS Code slowdowns, and ensure the 11.4.3 update addresses Copilot and chat response problems.
- Update documentation and messaging around Pieces OS updates and plugin compatibility to minimize disruption after releases.
- Improve error messaging and troubleshooting steps for connectivity problems, including network settings, version checks, and communication between Pieces OS and extensions.
- Address the "Uuups" error when pasting images, potentially related to Gemini-Pro model access.
- Review and address issues with keyboard shortcuts on macOS and the desktop app's focus behavior.
- Monitor and address the issue of Long Term Memory (LTM) periodically turning off.
- Investigate Pieces Copilot's inaccurate LTM information and date display.
- Clarify the functionality of "Clear Long Term Memory Data" and ensure it removes captured context and workstream activity as expected.
- Proactively communicate known issues and their resolutions to users through release notes, FAQs, or other channels.
- Gather more data on the specific causes of connectivity issues to identify patterns and implement targeted solutions.
- Consider automated checks for plugin compatibility with Pieces OS updates to prevent future issues.
- Implement performance monitoring and alerting for Pieces OS and its integrations to detect and address issues quickly.
- Review user feedback and prioritize bug fixes based on frequency and impact on user workflows.
- Improve the chat response time and reliability, especially for GPT-4.1 on Windows with Pieces OS 11.4.2.

## Daily Reports
Here are the daily reports for this week:

- [report_210657](daily/2025-06-03/report_210657.md)
- [report_050809](daily/2025-06-03/report_050809.md)
- [report_131650](daily/2025-06-03/report_131650.md)
