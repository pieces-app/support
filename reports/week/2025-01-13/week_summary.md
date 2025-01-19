# Support Ticket Report
- Generated: 2025-01-19 13:09:48
- Period: 2025-01-13 to 2025-01-19

## Summary
- **Total Tickets:** 16
- **Resolved:** 5
- **Open:** 11

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 7.62 |
| [#590](https://github.com/pieces-app/support/issues/590) | Non-dismissable overlay message. | 4.50 |
| [#586](https://github.com/pieces-app/support/issues/586) | Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script | 4.33 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.22 |
| [#561](https://github.com/pieces-app/support/issues/561) | Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response | 3.83 |

## Common Issues
### 1. Pieces OS Connection Issues with JetBrains and VS Code
Users are experiencing difficulties connecting Pieces OS to JetBrains plugins and VS Code, particularly in remote environments like Docker. This is often caused by network configuration issues, such as Pieces OS listening only on the loopback interface. Solutions include upgrading to the latest Pieces OS and plugin versions, configuring custom URLs, and modifying DNS settings. The Pieces team actively provides support and workarounds, including patches and potential live debugging sessions.

**Related Issues:**
- [#421](https://github.com/pieces-app/support/issues/421): Pieces OS does not connect to Jetbrains plugin
- [#456](https://github.com/pieces-app/support/issues/456): Not Working
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)

### 2. Pieces OS Connection Issues in Remote Environments
Users are experiencing difficulties connecting Pieces OS to IDE extensions (VSCode, JetBrains) in remote environments like WSL2 and Docker.  This is often due to networking configurations and Pieces OS listening on specific interfaces. Solutions include custom URL configurations, Pieces OS patches to broaden listening interfaces, and ensuring proper DNS resolution within the remote environment.

**Related Issues:**
- [#489](https://github.com/pieces-app/support/issues/489): VSCode extension issue rendering Copilot when installed via snap in WSL2
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#421](https://github.com/pieces-app/support/issues/421): Pieces OS does not connect to Jetbrains plugin

### 3. Pieces Desktop App Bugs and Issues
Users are reporting various bugs in the Pieces Desktop App, including issues with saving conversation titles, persistent welcome messages, and non-dismissable overlay messages. The Pieces team is actively investigating these issues, providing workarounds, and planning patches for future releases.

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#582](https://github.com/pieces-app/support/issues/582): Saved Snippets Welcome Screen
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.

### 4. Pieces Copilot Service Connection Issues
Users report Pieces Copilot not working, getting stuck loading, or receiving error messages. This appears across operating systems and Pieces versions. Proposed solutions include waiting for the next Pieces update, removing OpenAI keys, or switching to a different model like GPT4o.

**Related Issues:**
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service

### 5. Pieces OS Search and Performance Issues
Users report Pieces OS search functionality returning no results or being stuck connecting. Issues also include latency, scrolling problems, and incorrect line numbers in code view. Proposed solutions involve upgrading search functionality and addressing context issues in code processing.

**Related Issues:**
- [#588](https://github.com/pieces-app/support/issues/588): Neural Code Search returns no results
- [#456](https://github.com/pieces-app/support/issues/456): Not Working
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script


## Recommendations
- **Prioritize Connection Issues:** Focus on resolving connection issues between Pieces OS and IDE extensions (VSCode, JetBrains) in both local and remote environments. This is a recurring and high-impact problem affecting user experience.
- **Improve Desktop App Stability:** Address bugs and issues reported for the Pieces Desktop App, such as saving conversation titles, persistent welcome messages, and non-dismissable overlays. These impact usability and user confidence.
- **Enhance Copilot Service Reliability:** Investigate and resolve issues related to Pieces Copilot, including loading problems, error messages, and inconsistencies across operating systems. A reliable Copilot experience is crucial for user satisfaction.
- **Optimize Search Functionality:** Address the issues with Pieces OS search, such as no results, inaccurate line numbers, and latency. Improve search accuracy and speed to enhance productivity.
- **Proactive Communication:** Keep users informed about known issues, planned patches, and workarounds through release notes, blog posts, and in-app notifications. Transparency builds trust and reduces support requests.
- **Invest in Troubleshooting Documentation:** Create detailed troubleshooting guides for common issues, particularly connection problems in remote environments. This empowers users to resolve issues independently.
- **Gather Detailed Diagnostics:** When users encounter issues, collect comprehensive logs, system information, and steps to reproduce the problem. This helps developers diagnose and fix issues faster.
- **Prioritize Issues Based on Impact and Frequency:** Use data on ticket frequency, activity level, and user impact to prioritize development efforts. Focus on resolving the most critical issues first.
- **Consider User Feedback:** Analyze user feedback from support tickets, community forums, and surveys to identify pain points and areas for improvement. User input is invaluable for product development.

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
- [report_210628](daily/2025-01-18/report_210628.md)
- [report_130733](daily/2025-01-18/report_130733.md)
