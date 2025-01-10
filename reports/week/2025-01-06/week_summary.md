# Support Ticket Report
- Generated: 2025-01-10 13:12:54
- Period: 2025-01-06 to 2025-01-10

## Summary
- **Total Tickets:** 20
- **Resolved:** 5
- **Open:** 15

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 8.10 |
| [#572](https://github.com/pieces-app/support/issues/572) | Pieces OS Does not recognize folders or files | 6.92 |
| [#540](https://github.com/pieces-app/support/issues/540) | LTM doesn't work; the copilot model by defaults not saved | 6.89 |
| [#568](https://github.com/pieces-app/support/issues/568) | Long-Term Memory Feature Not Working on Linux | 5.52 |
| [#538](https://github.com/pieces-app/support/issues/538) | Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins | 4.85 |

## Common Issues
### 1. Pieces OS LTM and File Content Access Issues
Users report Pieces OS struggling to access and utilize file content, especially large files, impacting features like LTM and code assistance.  Troubleshooting includes verifying LTM settings, ensuring Pieces OS is updated, and checking for conflicts with other applications. Developers are actively investigating and resolving identified issues.

**Related Issues:**
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved
- [#556](https://github.com/pieces-app/support/issues/556): Live context seems not to work on linux

### 2. Pieces OS Plugin Issues
Users report Pieces OS plugins, specifically for Obsidian, fail to load or function properly after updating to Pieces OS 11.x.x.  This might be related to plugin compatibility issues with the new Pieces OS version. Solutions include reinstalling or updating plugins, checking developer consoles for errors, and contacting Pieces support for further assistance.

**Related Issues:**
- [#574](https://github.com/pieces-app/support/issues/574): Obsidian Plugin
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files

### 3. Pieces OS connection issues in remote environments
Users are experiencing difficulties connecting to Pieces OS from VS Code in remote environments, particularly docker containers. This is often due to recent updates affecting port usage and network configurations. Solutions include updating to the latest Pieces OS and VS Code plugin versions, which offer automatic detection and eliminate the need for manual custom URL configurations.

**Related Issues:**
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#562](https://github.com/pieces-app/support/issues/562): Chrome Extension Fills Developer Console with Errors
- [#564](https://github.com/pieces-app/support/issues/564): Unable to open Pieces Copilot Service

### 4. Pieces OS Compatibility Issues on Linux
Users are experiencing difficulties running Pieces OS on Linux due to compatibility issues with Nvidia drivers and Wayland.  Suggested workarounds include trying different drivers, switching to X11, and setting `LIBGL_ALWAYS_SOFTWARE=1`.  The Pieces team is actively investigating these issues and working on solutions.

**Related Issues:**
- [#565](https://github.com/pieces-app/support/issues/565): Starting error: No available configurations for the given RGBA pixel format
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux
- [#574](https://github.com/pieces-app/support/issues/574): Obsidian Plugin

### 5. Long-Term Memory Feature Issues
Users are experiencing issues with the Long-Term Memory feature on various operating systems, particularly Linux. Problems include feature unavailability, activation errors, and inconsistent performance. Solutions involve switching to X11 on Linux, troubleshooting with the Pieces team, and awaiting a planned infrastructure migration.

**Related Issues:**
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux
- [#556](https://github.com/pieces-app/support/issues/556): Live context seems not to work on linux
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory


## Recommendations
- **Prioritize resolving issues related to Pieces OS LTM and File Content Access:** These issues are causing significant user frustration and impacting core product functionality. Focus development efforts on addressing the root causes and providing timely solutions.
- **Improve Pieces OS Plugin Compatibility and Support:** Address plugin-related issues, particularly for Obsidian, to ensure seamless integration and user experience. Provide clear documentation and support resources for plugin installation and troubleshooting.
- **Enhance Pieces OS Connection Stability in Remote Environments:** Investigate and resolve connection issues encountered by users in remote environments, such as Docker containers. Ensure compatibility with various network configurations and provide clear instructions for troubleshooting.
- **Address Pieces OS Compatibility Issues on Linux:** Dedicate resources to investigate and resolve compatibility issues on Linux, specifically related to Nvidia drivers and Wayland. Provide workarounds and updates to improve Linux user experience.
- **Provide Clear Communication and Updates on Long-Term Memory Feature Issues:** Keep users informed about the status of LTM feature issues, particularly on Linux. Offer timelines for resolutions, workarounds, and alternative solutions while issues are being addressed.
- **Investigate and Address High-Activity Tickets Promptly:** Allocate resources to promptly investigate and address the most active support tickets, such as those related to Copilot feedback, Snippets Welcome Screen, and specific error messages. 
- **Improve Error Messaging and Documentation:** Provide more informative error messages to help users understand and troubleshoot issues. Enhance documentation with clear instructions, troubleshooting steps, and FAQs for common problems.
- **Consider Expanding Cross-Platform Testing:** Implement a robust cross-platform testing strategy to identify and address compatibility issues early in the development cycle, ensuring a consistent user experience across all supported operating systems.

## Daily Reports
Here are the daily reports for this week:

- [report_194217](daily/2025-01-09/report_194217.md)
- [report_210606](daily/2025-01-09/report_210606.md)
- [report_050651](daily/2025-01-10/report_050651.md)
- [report_131001](daily/2025-01-10/report_131001.md)
