# Support Ticket Report
- Generated: 2025-01-09 21:09:25
- Period: 2025-01-06 to 2025-01-09

## Summary
- **Total Tickets:** 19
- **Resolved:** 5
- **Open:** 14

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 8.10 |
| [#540](https://github.com/pieces-app/support/issues/540) | LTM doesn't work; the copilot model by defaults not saved | 6.98 |
| [#572](https://github.com/pieces-app/support/issues/572) | Pieces OS Does not recognize folders or files | 6.92 |
| [#568](https://github.com/pieces-app/support/issues/568) | Long-Term Memory Feature Not Working on Linux | 5.68 |
| [#538](https://github.com/pieces-app/support/issues/538) | Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins | 4.85 |

## Common Issues
### 1. Pieces OS Connection Issues in VS Code and Extensions
Users are experiencing difficulties connecting to Pieces OS from VS Code, particularly within remote environments like Docker containers. This is due to recent changes in Pieces OS networking. Solutions include using custom DNS entries, modifying host files, and ensuring the latest VS Code extension is installed. The Pieces team is actively addressing these issues and improving compatibility.

**Related Issues:**
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#566](https://github.com/pieces-app/support/issues/566): Pieces Copilot not working on Windsurf
- [#562](https://github.com/pieces-app/support/issues/562): Chrome Extension Fills Developer Console with Errors

### 2. Long-Term Memory (LTM) Engine Issues
Users are experiencing difficulties enabling and using the Long-Term Memory (LTM) Engine. Issues include the engine failing to start, overriding saved models, and not working as expected on Linux. Proposed solutions involve infrastructure updates, dependency fixes, and improved user education on LTM prompting techniques.

**Related Issues:**
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory
- [#556](https://github.com/pieces-app/support/issues/556): Live context seems not to work on linux

### 3. Pieces OS LTM and File Context Issues
Users report Pieces OS struggling to access and utilize file content and Long-Term Memory (LTM) features.  This includes difficulties enabling LTM, inconsistent file content recognition, and limited LTM functionality on Linux. Proposed solutions involve infrastructure upgrades, bug fixes, and improved user education on LTM prompting techniques.

**Related Issues:**
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory
- [#556](https://github.com/pieces-app/support/issues/556): Live context seems not to work on linux

### 4. Pieces Software Bugs and Updates
Users report various bugs across Pieces software versions, including issues with saved snippets welcome screen, shareable links, and plugin updates. Solutions involve bug fixes, infrastructure upgrades, and new releases. Users are encouraged to update to the latest versions and report any issues.

**Related Issues:**
- [#582](https://github.com/pieces-app/support/issues/582): Saved Snippets Welcome Screen
- [#443](https://github.com/pieces-app/support/issues/443): Unable to generate personal shareable links for 6+ months
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins

### 5. Long-Term Memory Feature Issues on Linux
Users are experiencing issues with the Long-Term Memory (LTM) feature on Linux, including it not working as expected or the button to enable it not functioning correctly. The Pieces team is aware of these issues and is actively working on solutions, including replacing the LTM infrastructure and migrating the database stack.  No workaround is available yet, but users are encouraged to provide logs and engage in troubleshooting with the Pieces team.

**Related Issues:**
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux
- [#556](https://github.com/pieces-app/support/issues/556): Live context seems not to work on linux
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory


## Recommendations
- **Prioritize LTM and File Context Issues:** Allocate additional resources to investigate and resolve the recurring issues related to Long-Term Memory (LTM) and Pieces OS's ability to access and utilize file content.  These issues are causing significant user frustration and hindering core product functionality.
- **Improve LTM User Education:** Develop comprehensive documentation and tutorials specifically focused on LTM prompting techniques, particularly for Linux users. This will help users understand how to effectively utilize LTM and reduce support tickets related to its functionality.
- **Address Pieces OS Connection Issues:** Continue to prioritize resolving connection issues between Pieces OS and various IDEs, especially in remote environments like Docker containers. This includes investigating custom DNS entries, host file modifications, and ensuring seamless compatibility with the latest IDE extensions.
- **Monitor Plugin Updates and Compatibility:** Implement a more robust system for testing and communicating plugin updates, ensuring compatibility with new Pieces OS releases. This will help prevent issues arising from outdated or incompatible plugins.
- **Investigate and Resolve Linux-Specific Issues:** Dedicate resources to thoroughly test and address the disproportionate number of issues reported by Linux users, particularly those related to LTM functionality and plugin compatibility. This may involve collaborating with the Linux community and optimizing Pieces OS for different distributions.
- **Enhance Bug Reporting and Tracking:** Implement a more structured bug reporting system that captures detailed system information, logs, and steps to reproduce the issue. This will help developers identify and resolve bugs more efficiently.
- **Improve Communication on Known Issues:** Proactively communicate known issues and workarounds to users through release notes, blog posts, or a dedicated status page. This will keep users informed and reduce support tickets related to already identified problems.
- **Consider User Feedback on UI/UX:**  While not a major issue in this dataset, be receptive to user feedback regarding UI/UX elements, such as the reported intrusive popup URL and unnecessary update prompts. Addressing these minor annoyances can significantly improve user satisfaction.

## Daily Reports
Here are the daily reports for this week:

- [report_194217](daily/2025-01-09/report_194217.md)
- [report_210606](daily/2025-01-09/report_210606.md)
