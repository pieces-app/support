# Support Ticket Report
- Generated: 2025-01-17 13:10:58
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
### 1. Pieces Copilot Unresponsive or Returning Errors
Users report Pieces Copilot being unresponsive, returning errors, or generating no output. Issues are linked to outdated OpenAI API keys, problems with Claude and Gemini models, and rate limiting. Solutions include removing OpenAI keys, switching to GPT4o, updating Pieces OS, and signing in to increase rate limits.

**Related Issues:**
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response

### 2. Pieces OS Connection Issues in Remote Environments
Users are experiencing difficulties connecting to Pieces OS from VS Code in remote environments, such as WSL2 and DevContainers. This is often due to network configuration issues, particularly with Pieces OS listening on the loopback interface. Solutions include configuring custom URLs, adjusting WSL2 network settings, and upgrading to the latest Pieces for VS Code extension (2.0.2 or later) which includes a patch to address this issue.

**Related Issues:**
- [#489](https://github.com/pieces-app/support/issues/489): VSCode extension issue rendering Copilot when installed via snap in WSL2
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#421](https://github.com/pieces-app/support/issues/421): Pieces OS does not connect to Jetbrains plugin

### 3. Desktop App Bugs on macOS
Multiple users reported various bugs on the Pieces Desktop App for macOS, including issues with conversation titles saving prematurely, repetitive welcome messages, and Copilot malfunctions. Solutions varied from patches in upcoming releases to ongoing investigations by the Pieces team.

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#582](https://github.com/pieces-app/support/issues/582): Saved Snippets Welcome Screen
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback

### 4. Pieces OS Search and Connection Issues
Users report Pieces OS search not returning results or getting stuck. Solutions involve clarifying search functionality, planned upgrades, and investigating logs for connection problems.

**Related Issues:**
- [#588](https://github.com/pieces-app/support/issues/588): Neural Code Search returns no results
- [#456](https://github.com/pieces-app/support/issues/456): Not Working
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback

### 5. PiecesOS Launch and Performance Issues
Users report PiecesOS failing to launch, consuming excessive RAM/CPU, or getting stuck on "connecting." Proposed solutions include restarting the app, checking internet connection, and disabling resource-intensive features. The Pieces team is actively investigating these issues and encourages users to share their experiences and logs for troubleshooting.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#456](https://github.com/pieces-app/support/issues/456): Not Working
- [#131](https://github.com/pieces-app/support/issues/131): Unable to Launch Pieces Windows Desktop Version


## Recommendations
- **Prioritize Pieces Copilot Issues:** Allocate additional resources to investigate and resolve the ongoing issues with Pieces Copilot, such as unresponsiveness, errors, and outdated API keys. This is the most frequent and impactful problem reported by users.
- **Improve Remote Connection Stability:** Address the challenges users face when connecting to Pieces OS from remote environments like WSL2 and DevContainers. Ensure the documentation clearly outlines the necessary configuration steps and consider implementing auto-detection mechanisms to simplify the process.
- **Enhance macOS Desktop App Experience:** Investigate and fix the reported bugs on the macOS Desktop App, including issues with conversation titles, welcome messages, and Copilot functionality. A smooth and bug-free experience on macOS is crucial for user satisfaction.
- **Optimize Pieces OS Search:** Address the user feedback regarding Pieces OS search functionality. Improve the search algorithm to deliver more accurate and relevant results. Consider implementing features like search filters and query suggestions.
- **Investigate and Address Performance Issues:** Dedicate resources to investigate and resolve the reported performance issues with PiecesOS, including high RAM/CPU usage, launch failures, and connection problems. Optimize the software to ensure smooth and efficient performance across different hardware configurations.
- **Proactively Communicate Known Issues:** Maintain a dedicated section on the Pieces website or within the app itself to communicate known issues, workarounds, and expected resolution timelines. This will keep users informed and reduce support requests for already identified problems.
- **Gather Detailed User Feedback:** Implement mechanisms to collect more detailed user feedback, including system information, logs, and steps to reproduce issues. This will empower the support team to diagnose and resolve problems more effectively.
- **Expand Knowledge Base and Troubleshooting Guides:** Enhance the Pieces knowledge base and support documentation with comprehensive troubleshooting guides, FAQs, and video tutorials. This will empower users to self-serve and find solutions to common problems independently.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-01-14/report_210608.md)
- [report_210557](daily/2025-01-15/report_210557.md)
- [report_130931](daily/2025-01-15/report_130931.md)
- [report_210557](daily/2025-01-16/report_210557.md)
- [report_050643](daily/2025-01-16/report_050643.md)
- [report_130918](daily/2025-01-16/report_130918.md)
- [report_130901](daily/2025-01-17/report_130901.md)
- [report_050629](daily/2025-01-17/report_050629.md)
