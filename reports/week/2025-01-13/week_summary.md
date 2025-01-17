# Support Ticket Report
- Generated: 2025-01-17 05:09:19
- Period: 2025-01-13 to 2025-01-17

## Summary
- **Total Tickets:** 13
- **Resolved:** 4
- **Open:** 9

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 7.78 |
| [#586](https://github.com/pieces-app/support/issues/586) | Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script | 5.80 |
| [#589](https://github.com/pieces-app/support/issues/589) | Conversation titles save too eagerly while editing | 5.68 |
| [#588](https://github.com/pieces-app/support/issues/588) | Neural Code Search returns no results | 4.50 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.23 |

## Common Issues
### 1. PiecesOS Performance Issues
Users report high RAM and CPU usage by PiecesOS, sometimes exceeding 2GB RAM and causing system slowdowns. This issue may be related to internet connectivity or the Live Context feature. Short-term solutions include restarting PiecesOS or unloading ML models. The Pieces team is actively working on performance optimization.

**Related Issues:**
- [#588](https://github.com/pieces-app/support/issues/588): Neural Code Search returns no results
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU

### 2. Pieces Copilot experiencing errors and unresponsiveness
Users are reporting various issues with Pieces Copilot, including error messages, unresponsiveness, and incorrect output. These issues appear to be related to both the desktop application and integrations. Proposed solutions include upgrading to the latest Pieces OS version, removing OpenAI API keys, and using alternative language models like GPT4o.

**Related Issues:**
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script

### 3. VS Code Extension Connection Issues with Pieces OS
Users are experiencing difficulties connecting the VS Code extension to Pieces OS, particularly in remote environments like WSL2 and DevContainers.  Common issues include rendering problems with Pieces Copilot and general connection failures. Solutions involve ensuring proper network configuration, using the latest extension version, and potentially adjusting Pieces OS settings to listen on all interfaces.

**Related Issues:**
- [#489](https://github.com/pieces-app/support/issues/489): VSCode extension issue rendering Copilot when installed via snap in WSL2
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#421](https://github.com/pieces-app/support/issues/421): Pieces OS does not connect to Jetbrains plugin

### 4. Desktop application bugs reported by users
Users reported various bugs in the Pieces desktop application, including issues with saving conversation titles, snippet welcome messages, and Copilot responses. These bugs were acknowledged by the Pieces team, and solutions such as patches and updates were proposed. Users were advised to update to the latest version or wait for upcoming releases for fixes.

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#582](https://github.com/pieces-app/support/issues/582): Saved Snippets Welcome Screen
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback

### 5. Pieces OS fails to launch or connect
Users report Pieces OS desktop app failing to launch, showing a blank window, or getting stuck on "Connecting." Issues also appear with browser extensions and JetBrains plugin failing to connect. Proposed solutions involve checking for updates, examining log files, and live debugging sessions with support.

**Related Issues:**
- [#131](https://github.com/pieces-app/support/issues/131): Unable to Launch Pieces Windows Desktop Version
- [#456](https://github.com/pieces-app/support/issues/456): Not Working
- [#421](https://github.com/pieces-app/support/issues/421): Pieces OS does not connect to Jetbrains plugin


## Recommendations
- **Address Pieces OS Performance:** Investigate and optimize the high RAM and CPU usage reported by users, particularly related to internet connectivity and the Live Context feature.
- **Improve Pieces Copilot Stability:** Troubleshoot and resolve the errors, unresponsiveness, and incorrect output experienced with Pieces Copilot across different platforms and integrations.
- **Enhance VS Code Extension Connectivity:** Provide clearer instructions and solutions for connection issues between the VS Code extension and Pieces OS, especially in remote environments like WSL2 and DevContainers.
- **Prioritize Desktop Application Bug Fixes:** Address the reported bugs in the desktop application, such as issues with saving conversation titles, snippet welcome messages, and Copilot responses.
- **Investigate Pieces OS Launch Failures:** Identify the root cause and provide solutions for Pieces OS failing to launch or connect, including blank windows and "Connecting" issues across different platforms and plugins.
- **Proactive Communication:** Keep users informed about the status of known issues, planned fixes, and estimated resolution timelines through release notes, blog posts, or in-app notifications.
- **Expand Troubleshooting Resources:** Enhance documentation and support resources with detailed troubleshooting steps, FAQs, and known workarounds for common issues.
- **Gather User Feedback:** Implement a system for collecting user feedback on specific features, pain points, and suggestions for improvement. This can be done through surveys, in-app feedback forms, or community forums.
- **Monitor Error Logs:** Implement robust error logging and monitoring to proactively identify and address emerging issues before they impact a large number of users.
- **Performance Testing:** Conduct thorough performance testing before releasing new versions or features to ensure optimal resource usage and minimize performance issues for users.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-01-14/report_210608.md)
- [report_210557](daily/2025-01-15/report_210557.md)
- [report_130931](daily/2025-01-15/report_130931.md)
- [report_210557](daily/2025-01-16/report_210557.md)
- [report_050643](daily/2025-01-16/report_050643.md)
- [report_130918](daily/2025-01-16/report_130918.md)
- [report_050629](daily/2025-01-17/report_050629.md)
