# Support Ticket Report
- Generated: 2025-01-11 13:15:48
- Period: 2025-01-06 to 2025-01-11

## Summary
- **Total Tickets:** 20
- **Resolved:** 5
- **Open:** 15

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 7.97 |
| [#540](https://github.com/pieces-app/support/issues/540) | LTM doesn't work; the copilot model by defaults not saved | 6.81 |
| [#572](https://github.com/pieces-app/support/issues/572) | Pieces OS Does not recognize folders or files | 6.65 |
| [#568](https://github.com/pieces-app/support/issues/568) | Long-Term Memory Feature Not Working on Linux | 5.38 |
| [#538](https://github.com/pieces-app/support/issues/538) | Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins | 4.79 |

## Common Issues
### 1. Pieces OS Functionality Issues
Users report Pieces OS struggling to recognize files/folders, leading to difficulties with code analysis and LTM.  Suggested workarounds include restarting the app, reinstalling from the Microsoft store, and ensuring the latest version is installed.  The Pieces team is actively investigating the root causes and potential solutions.

**Related Issues:**
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response

### 2. Pieces OS connection issues in remote environments
Users are experiencing difficulties connecting to Pieces OS from remote environments like Docker containers and the Windsurf platform. This is often due to outdated plugin versions, changes in default listening ports, and network configuration issues. Solutions include updating to the latest plugin version, configuring Pieces OS to listen on all interfaces, and ensuring proper network connectivity between the remote environment and the Pieces OS instance.

**Related Issues:**
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#562](https://github.com/pieces-app/support/issues/562): Chrome Extension Fills Developer Console with Errors
- [#566](https://github.com/pieces-app/support/issues/566): Pieces Copilot not working on Windsurf

### 3. Pieces OS Connection Issues
Users are experiencing difficulties connecting to Pieces OS from remote environments and encountering errors when generating shareable links or using Copilot features. This is likely due to changes in Pieces OS versions 11.0.0 and above, affecting default listening ports and API integrations. Solutions include updating Pieces OS and extensions, configuring custom URLs, and verifying API keys.

**Related Issues:**
- [#443](https://github.com/pieces-app/support/issues/443): Unable to generate personal shareable links for 6+ months
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response

### 4. Long-Term Memory Feature Issues in Pieces OS
Users are experiencing difficulties enabling and using the Long-Term Memory (LTM) feature in Pieces OS, particularly on Linux.  The issues include the LTM engine not activating, functionality not working as expected, and incompatibility with Wayland.  Proposed solutions and workarounds involve switching to X11, providing log files for debugging, and waiting for upcoming software updates and database migrations.

**Related Issues:**
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux
- [#556](https://github.com/pieces-app/support/issues/556): Live context seems not to work on linux
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory

### 5. Pieces OS and Plugin Compatibility Issues
Users report various compatibility issues with Pieces OS, including graphics errors on Linux related to Nvidia drivers and problems with the Obsidian plugin and Long-Term Memory feature. Proposed solutions involve driver updates, switching between x11 and Wayland, setting environment variables, and ongoing troubleshooting with the development team.

**Related Issues:**
- [#565](https://github.com/pieces-app/support/issues/565): Starting error: No available configurations for the given RGBA pixel format
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux
- [#574](https://github.com/pieces-app/support/issues/574): Obsidian Plugin


## Recommendations
- **Prioritize Pieces OS Functionality Issues:** Focus on resolving the root causes of Pieces OS struggling to recognize files/folders, as this significantly impacts code analysis and LTM, crucial features for the product.
- **Address Pieces OS Connection Issues:** Investigate and resolve connection problems from remote environments like Docker and Windsurf, ensuring seamless integration for users in diverse development setups.
- **Improve Long-Term Memory (LTM) Feature Stability:** Address issues with LTM, particularly on Linux, ensuring consistent functionality and compatibility across platforms.
- **Enhance Plugin Compatibility and Stability:** Investigate and resolve compatibility issues with plugins like Obsidian, prioritizing those with high usage and impact on user workflows.
- **Review and Update Documentation:** Update documentation to reflect changes in Pieces OS versions 11.0.0 and above, especially regarding default listening ports, API integrations, and remote connection setup.
- **Monitor and Address Common Copilot Errors:** Proactively monitor and address common Copilot errors, such as the "I'm sorry. Something went wrong with processing" message, to ensure a smooth and reliable user experience.
- **Improve Communication on Known Issues:** Provide clear and timely communication on known issues, including workarounds, estimated resolution times, and progress updates, to manage user expectations and reduce support requests.
- **Gather Detailed Logs and System Information:** Encourage users to provide detailed logs and system information when reporting issues, enabling faster diagnosis and resolution by the support team.
- **Consider Automated Troubleshooting Tools:** Explore the development of automated troubleshooting tools or scripts to help users resolve common issues independently, reducing the load on the support team.
- **Collect User Feedback on Support Experience:** Implement a system for collecting user feedback on their support experience, identifying areas for improvement and enhancing overall satisfaction with support operations.

## Daily Reports
Here are the daily reports for this week:

- [report_194217](daily/2025-01-09/report_194217.md)
- [report_210606](daily/2025-01-09/report_210606.md)
- [report_050651](daily/2025-01-10/report_050651.md)
- [report_131001](daily/2025-01-10/report_131001.md)
- [report_210606](daily/2025-01-10/report_210606.md)
