# Support Ticket Report
- Generated: 2025-01-11 21:08:45
- Period: 2025-01-06 to 2025-01-11

## Summary
- **Total Tickets:** 20
- **Resolved:** 5
- **Open:** 15

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 7.85 |
| [#540](https://github.com/pieces-app/support/issues/540) | LTM doesn't work; the copilot model by defaults not saved | 6.38 |
| [#572](https://github.com/pieces-app/support/issues/572) | Pieces OS Does not recognize folders or files | 5.86 |
| [#568](https://github.com/pieces-app/support/issues/568) | Long-Term Memory Feature Not Working on Linux | 5.38 |
| [#538](https://github.com/pieces-app/support/issues/538) | Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins | 4.73 |

## Common Issues
### 1. Connectivity issues between Pieces OS and clients
Users reported difficulties connecting to Pieces OS from VS Code in remote docker containers and browser extensions. The issues stemmed from Pieces OS listening only on the loopback interface and port scanning behavior causing console errors. Solutions included patches for Pieces OS and the VS Code extension to enable broader network access and error handling.

**Related Issues:**
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#562](https://github.com/pieces-app/support/issues/562): Chrome Extension Fills Developer Console with Errors
- [#566](https://github.com/pieces-app/support/issues/566): Pieces Copilot not working on Windsurf

### 2. Long-Term Memory (LTM) Feature Issues
Users are experiencing problems with the Long-Term Memory (LTM) feature, including issues with enabling the feature, LTM not working as expected, and inconsistencies across different operating systems. The Pieces team has acknowledged these issues and is actively working on solutions, including database infrastructure updates and software patches.

**Related Issues:**
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory
- [#556](https://github.com/pieces-app/support/issues/556): Live context seems not to work on linux

### 3. Long-Term Memory Feature Issues on Linux
Users are experiencing issues with the Long-Term Memory (LTM) feature on Linux, particularly with Wayland. Problems include difficulty activating the feature and inconsistent functionality. Proposed solutions involve switching to X11, analyzing log files, and investigating potential dependency conflicts. The Pieces team is actively working on resolving these issues.

**Related Issues:**
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux
- [#556](https://github.com/pieces-app/support/issues/556): Live context seems not to work on linux
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory

### 4. Pieces OS Plugin and File Access Issues
Users report Pieces OS plugins failing to load or the application not recognizing files and folders.  Suggested solutions include checking for updates, reviewing console logs for errors, and ensuring compatibility between Pieces OS, plugins, and the operating system.

**Related Issues:**
- [#574](https://github.com/pieces-app/support/issues/574): Obsidian Plugin
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files
- [#581](https://github.com/pieces-app/support/issues/581): Unable to open Pieces Copilot Service

### 5. Pieces OS Functionality Issues
Users report various issues with Pieces OS, including failure to recognize files/folders, inability to activate Long-Term Memory, and Copilot service errors. Troubleshooting steps and updates have addressed some issues, while others are still under investigation. Solutions include updating to the latest Pieces OS version, verifying system compatibility, and engaging with support for further assistance.

**Related Issues:**
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files
- [#581](https://github.com/pieces-app/support/issues/581): Unable to open Pieces Copilot Service
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and clients, especially for remote environments and browser extensions.
- Address Long-Term Memory (LTM) feature issues urgently, focusing on enabling the feature, ensuring consistent behavior across operating systems, and improving database infrastructure.
- Investigate and resolve issues with Pieces OS plugins, including loading failures and file/folder recognition problems. Improve documentation and compatibility information.
- Provide clear guidance on LTM usage and best practices to help users understand and utilize the feature effectively.
- Analyze console logs and error messages to identify and address the root causes of reported issues, such as the Chrome extension error flooding.
- Consider implementing a system for users to easily provide detailed logs and system information when reporting issues to expedite troubleshooting.
- Review and update the Pieces OS plugin installation process to provide more helpful error messages and troubleshooting steps for users.
- Proactively communicate known issues and workarounds to users through release notes, documentation, and in-app messaging.
- Prioritize resolving issues based on frequency, severity, and impact on user workflows, such as the inability to access files/folders.
- Gather user feedback on specific features, such as LTM, to identify areas for improvement and prioritize future development efforts.

## Daily Reports
Here are the daily reports for this week:

- [report_194217](daily/2025-01-09/report_194217.md)
- [report_210606](daily/2025-01-09/report_210606.md)
- [report_050651](daily/2025-01-10/report_050651.md)
- [report_131001](daily/2025-01-10/report_131001.md)
- [report_210606](daily/2025-01-10/report_210606.md)
