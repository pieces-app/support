# Support Ticket Report
- Generated: 2025-01-11 05:09:14
- Period: 2025-01-06 to 2025-01-11

## Summary
- **Total Tickets:** 20
- **Resolved:** 5
- **Open:** 15

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 7.97 |
| [#540](https://github.com/pieces-app/support/issues/540) | LTM doesn't work; the copilot model by defaults not saved | 6.89 |
| [#572](https://github.com/pieces-app/support/issues/572) | Pieces OS Does not recognize folders or files | 6.65 |
| [#568](https://github.com/pieces-app/support/issues/568) | Long-Term Memory Feature Not Working on Linux | 5.52 |
| [#538](https://github.com/pieces-app/support/issues/538) | Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins | 4.79 |

## Common Issues
### 1. Pieces OS Copilot struggles to access and read files
Users report Pieces OS Copilot encountering difficulties in accessing and reading files, leading to inaccurate code suggestions and requiring manual copy-pasting. The issue appears to stem from problems with Pieces OS versions, potential bugs in file integration, and LTM activation issues. Solutions include updating Pieces OS, reinstalling the application, and ongoing bug fixes from the Pieces team.

**Related Issues:**
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files
- [#564](https://github.com/pieces-app/support/issues/564): Unable to open Pieces Copilot Service
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved

### 2. Long-Term Memory (LTM) Feature Issues on Linux
Users are experiencing issues with the Long-Term Memory (LTM) feature on Linux, particularly with Wayland. Some users report LTM not working at all, while others have issues with specific functionalities. Proposed solutions include switching to x11 as a temporary workaround, providing log files for troubleshooting, and addressing dependency failures. The Pieces team is actively investigating and working on resolving these issues.

**Related Issues:**
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux
- [#556](https://github.com/pieces-app/support/issues/556): Live context seems not to work on linux
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved

### 3. Pieces OS Plugin Integration Issues
Users report Pieces OS plugins, particularly for Obsidian, fail to load or function correctly.  This might involve plugin installation errors, mismatched version numbers, or issues with Pieces OS recognizing files. Troubleshooting includes updating plugins, checking console logs, and contacting Pieces support for further assistance.

**Related Issues:**
- [#574](https://github.com/pieces-app/support/issues/574): Obsidian Plugin
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files

### 4. Long-Term Memory (LTM) Feature Not Working
Users are reporting issues with the Long-Term Memory (LTM) feature not activating or functioning as expected. This issue has been observed across different operating systems, including macOS, Windows, and Linux. The Pieces team is actively working on resolving this issue, which involves replacing the current LTM infrastructure and addressing database migration challenges. Temporary workarounds include switching to x11 on Linux and reinstalling the Pieces app. The team is also gathering logs and conducting live troubleshooting sessions to address persistent issues.

**Related Issues:**
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux

### 5. Pieces OS Connection Issues in Remote Environments
Users are experiencing difficulties connecting to Pieces OS from remote environments, particularly within Docker containers. This is often due to port access issues and changes in Pieces OS's default listening address. Solutions include upgrading to the latest Pieces OS and VS Code plugin versions, which offer automatic environment detection and eliminate the need for custom URLs.  If problems persist, contacting support for further troubleshooting is recommended.

**Related Issues:**
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#562](https://github.com/pieces-app/support/issues/562): Chrome Extension Fills Developer Console with Errors
- [#564](https://github.com/pieces-app/support/issues/564): Unable to open Pieces Copilot Service


## Recommendations
- **Prioritize LTM Issues:** Allocate resources to address the recurring issues with the Long-Term Memory (LTM) feature, particularly on Linux and with database migration challenges.
- **Improve Plugin Integration:** Investigate and resolve issues with Pieces OS plugin integration, focusing on Obsidian and ensuring compatibility with different versions.
- **Enhance Remote Environment Support:** Provide clearer documentation and solutions for users experiencing connection issues in remote environments, especially within Docker containers.
- **Address File Access Problems:** Investigate and fix the root cause of Pieces OS Copilot struggling to access and read files, which leads to inaccurate code suggestions.
- **Monitor Common Error Messages:** Analyze and address common error messages, such as "'I'm sorry. Something went wrong with processing. Please...'" and "ApiException 500: Format Metrics snapshot failed.", to improve user experience and streamline troubleshooting.

## Daily Reports
Here are the daily reports for this week:

- [report_194217](daily/2025-01-09/report_194217.md)
- [report_210606](daily/2025-01-09/report_210606.md)
- [report_050651](daily/2025-01-10/report_050651.md)
- [report_131001](daily/2025-01-10/report_131001.md)
- [report_210606](daily/2025-01-10/report_210606.md)
