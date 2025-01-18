# Support Ticket Report
- Generated: 2025-01-18 13:10:08
- Period: 2025-01-13 to 2025-01-18

## Summary
- **Total Tickets:** 16
- **Resolved:** 5
- **Open:** 11

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 7.70 |
| [#590](https://github.com/pieces-app/support/issues/590) | Non-dismissable overlay message. | 5.68 |
| [#586](https://github.com/pieces-app/support/issues/586) | Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script | 4.63 |
| [#589](https://github.com/pieces-app/support/issues/589) | Conversation titles save too eagerly while editing | 4.50 |
| [#591](https://github.com/pieces-app/support/issues/591) | Unable to open Pieces Copilot Service | 4.42 |

## Common Issues
### 1. Pieces OS & VS Code Extension Connection Issues
Users are experiencing difficulties connecting the VS Code extension to Pieces OS, particularly within remote environments like WSL2 and DevContainers.  Common problems include Copilot rendering failures and API connection errors. Solutions involve configuring custom URLs, adjusting network settings, and ensuring compatibility between Pieces OS and extension versions.

**Related Issues:**
- [#489](https://github.com/pieces-app/support/issues/489): VSCode extension issue rendering Copilot when installed via snap in WSL2
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service

### 2. Desktop app UI glitches and unexpected behavior
Users report various UI issues in the Pieces desktop app, including premature saving of conversation titles, persistent welcome messages, and non-dismissable overlay messages. Troubleshooting steps include updating the app, checking system compatibility, and providing detailed bug reports to the Pieces team. Solutions often involve bug fixes in subsequent app releases.

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#582](https://github.com/pieces-app/support/issues/582): Saved Snippets Welcome Screen
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.

### 3. Pieces Copilot Unresponsive or Returning Errors
Users report Pieces Copilot becoming unresponsive, timing out, or returning generic error messages like "I'm sorry...". This seems to affect both desktop and IDE extensions across Windows and macOS. Proposed solutions include updating to the latest Pieces OS version (11.0.4 as of January 2025), ensuring a stable internet connection, and potentially switching to OpenAI models as a temporary workaround.

**Related Issues:**
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback

### 4. PiecesOS Performance Issues and Bugs
Users report high RAM/CPU usage with PiecesOS, sometimes reaching 100% CPU. This might be related to internet connectivity or Live Context feature. Restarting PiecesOS provides a temporary fix. Developers are working on optimizations and a potential permanent solution. Other bugs reported include software unresponsiveness and context issues with large code files.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#456](https://github.com/pieces-app/support/issues/456): Not Working
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script

### 5. Pieces OS/Desktop App Launch Failure
Users report Pieces OS or Desktop App failing to launch on Windows. Issue persists across versions, sometimes after background updates. Users see "Connecting..." indefinitely or no UI despite background process. Troubleshooting includes checking system compatibility, reinstalling, and reviewing logs with support.

**Related Issues:**
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#131](https://github.com/pieces-app/support/issues/131): Unable to Launch Pieces Windows Desktop Version
- [#456](https://github.com/pieces-app/support/issues/456): Not Working


## Recommendations
- **Prioritize resolving connection issues:** The most frequent and active tickets revolve around difficulties connecting VS Code extensions to Pieces OS, especially in remote environments. Focus on improving compatibility and providing clearer setup instructions for these scenarios.
- **Address Pieces Copilot unresponsiveness:** Users are encountering frequent errors and unresponsiveness with Pieces Copilot. Investigate the root cause, potentially related to specific models or internet connectivity, and provide a permanent fix. 
- **Improve Desktop App stability and UI:** Several tickets report UI glitches and unexpected behavior in the desktop app. Prioritize bug fixes and UI/UX improvements to enhance the user experience.
- **Optimize PiecesOS resource usage:** Investigate and address reports of high RAM/CPU usage, particularly with Live Context enabled. Optimizing performance will improve user experience and reduce support requests.
- **Enhance error messages and troubleshooting:** Provide more informative error messages to users, enabling them to self-diagnose and resolve issues. Expand troubleshooting documentation for common problems like connection issues and Copilot errors.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-01-14/report_210608.md)
- [report_210557](daily/2025-01-15/report_210557.md)
- [report_130931](daily/2025-01-15/report_130931.md)
- [report_210557](daily/2025-01-16/report_210557.md)
- [report_050643](daily/2025-01-16/report_050643.md)
- [report_130918](daily/2025-01-16/report_130918.md)
- [report_130901](daily/2025-01-17/report_130901.md)
- [report_210610](daily/2025-01-17/report_210610.md)
- [report_050629](daily/2025-01-17/report_050629.md)
- [report_130733](daily/2025-01-18/report_130733.md)
