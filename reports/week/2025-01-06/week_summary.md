# Support Ticket Report
- Generated: 2025-01-12 13:11:01
- Period: 2025-01-06 to 2025-01-12

## Summary
- **Total Tickets:** 20
- **Resolved:** 5
- **Open:** 15

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 7.85 |
| [#540](https://github.com/pieces-app/support/issues/540) | LTM doesn't work; the copilot model by defaults not saved | 6.31 |
| [#572](https://github.com/pieces-app/support/issues/572) | Pieces OS Does not recognize folders or files | 5.86 |
| [#568](https://github.com/pieces-app/support/issues/568) | Long-Term Memory Feature Not Working on Linux | 5.25 |
| [#538](https://github.com/pieces-app/support/issues/538) | Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins | 4.73 |

## Common Issues
### 1. Long-Term Memory (LTM) Feature Issues on Linux
Users report LTM feature not working as expected on Linux, specifically on Wayland. Issues include feature unavailability, incorrect information from support, and dependency problems. Solutions involve bug fixes, user education on prompting LTM effectively, and ongoing investigation into dependency issues. The Pieces team is actively addressing these issues.

**Related Issues:**
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux
- [#556](https://github.com/pieces-app/support/issues/556): Live context seems not to work on linux
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved

### 2. Long-Term Memory Engine Activation Issues
Users are experiencing difficulties enabling the Long-Term Memory (LTM) Engine in the Pieces app. This issue appears to be related to infrastructure limitations. The Pieces team is actively working on replacing the existing infrastructure to resolve this problem. A fix is expected to be released by the end of January.

**Related Issues:**
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory

### 3. Pieces OS Connectivity Issues in Remote Environments
Users are experiencing difficulties connecting to Pieces OS from remote environments, particularly Docker containers, due to networking changes. This results in connection errors and failure to access Pieces OS features. Solutions include configuring custom URLs, adjusting firewall settings, and awaiting upcoming patches that address the root cause.

**Related Issues:**
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#562](https://github.com/pieces-app/support/issues/562): Chrome Extension Fills Developer Console with Errors
- [#581](https://github.com/pieces-app/support/issues/581): Unable to open Pieces Copilot Service

### 4. Raycast and Pieces OS Integration Issues
Users report Raycast failing to connect with Pieces OS, prompting reinstallations despite being installed. This issue stems from outdated plugins and infrastructure. Solutions include updating to the latest Pieces OS and plugin versions, which incorporate hotfixes and stability improvements. If problems persist, users are advised to provide logs and software versions for further investigation.

**Related Issues:**
- [#573](https://github.com/pieces-app/support/issues/573): extension Raycast is outdated
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#443](https://github.com/pieces-app/support/issues/443): Unable to generate personal shareable links for 6+ months

### 5. Pieces for Developers Obsidian Plugin Issues
Users report the Pieces for Developers Obsidian plugin fails to load after installation.  Suggested workarounds, including plugin reinstallations and reviewing Obsidian logs, have proven unsuccessful.  The Pieces team is actively investigating these issues and recommends users ensure their Pieces OS and plugin versions are up to date.

**Related Issues:**
- [#574](https://github.com/pieces-app/support/issues/574): Obsidian Plugin
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#581](https://github.com/pieces-app/support/issues/581): Unable to open Pieces Copilot Service


## Recommendations
- **Prioritize LTM Issues:** Allocate additional resources to address the ongoing issues related to the Long-Term Memory (LTM) feature, specifically focusing on Linux (Wayland) compatibility and dependency problems.  This may involve assigning dedicated developers to investigate and resolve these issues.
- **Improve Remote Environment Connectivity:** Investigate and address the connectivity issues users are experiencing when accessing Pieces OS from remote environments, such as Docker containers. This may involve reviewing networking configurations, firewall settings, and providing clearer documentation for remote access.
- **Enhance Raycast Integration:** Address the reported issues with the Raycast plugin, ensuring compatibility with the latest Pieces OS version. This may involve collaborating with the Raycast team to expedite hotfix approvals and improve integration stability.
- **Investigate Obsidian Plugin Issues:** Allocate resources to diagnose and resolve the problems users are encountering with the Pieces for Developers Obsidian plugin. This may involve reviewing plugin code, testing different Obsidian versions, and providing clearer troubleshooting steps for users.
- **Improve Communication on Known Issues:**  Proactively communicate known issues and their expected resolution timelines to users, particularly for high-impact problems like LTM and remote connectivity. This could involve updating the Pieces OS support page, sending in-app notifications, or posting updates on relevant community forums.
- **Gather Detailed User Feedback:**  Encourage users experiencing issues to provide detailed logs, software versions, and system information to aid in troubleshooting and bug fixing. This could involve simplifying the bug reporting process and providing clear instructions on how to gather relevant data.
- **Develop Automated Tests:** Implement automated testing for critical features like LTM, remote connectivity, and plugin integrations to catch regressions and ensure stability across different environments and configurations.
- **Review and Update Documentation:** Review and update the Pieces OS documentation to address common issues, clarify remote access instructions, and provide up-to-date information on plugin compatibility and troubleshooting steps.

## Daily Reports
Here are the daily reports for this week:

- [report_194217](daily/2025-01-09/report_194217.md)
- [report_210606](daily/2025-01-09/report_210606.md)
- [report_050651](daily/2025-01-10/report_050651.md)
- [report_131001](daily/2025-01-10/report_131001.md)
- [report_210606](daily/2025-01-10/report_210606.md)
