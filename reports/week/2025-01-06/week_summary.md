# Support Ticket Report
- Generated: 2025-01-10 21:08:59
- Period: 2025-01-06 to 2025-01-10

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
### 1. Long-Term Memory (LTM) Engine Issues
Users are experiencing problems enabling and using the Long-Term Memory (LTM) Engine in Pieces OS. This includes issues with LTM not activating, downloaded LLMs overriding saved data, and potential conflicts with the Qdrant dependency. Solutions include patches to prevent data overrides and planned infrastructure updates to address Qdrant boot issues.

**Related Issues:**
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory

### 2. Pieces OS Connectivity Issues in Remote Environments
Users reported difficulties connecting to Pieces OS from VS Code in remote environments like Docker containers, encountering error messages and API check failures. This was attributed to network changes in Pieces OS 11.0.0. A patch in VS Code extension v2.0.1 aimed to resolve this, but some users still faced issues, requiring further debugging.

**Related Issues:**
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#562](https://github.com/pieces-app/support/issues/562): Chrome Extension Fills Developer Console with Errors
- [#581](https://github.com/pieces-app/support/issues/581): Unable to open Pieces Copilot Service

### 3. Long-Term Memory Feature Issues
Users report the Long-Term Memory (LTM) feature is not working as expected, particularly on Linux. Issues include feature unavailability, failure to activate, and inability to access LTM context. Proposed solutions involve infrastructure improvements, database migration, and software updates. Users are encouraged to update to the latest version and try specific prompting techniques for better LTM performance.

**Related Issues:**
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory
- [#556](https://github.com/pieces-app/support/issues/556): Live context seems not to work on linux

### 4. Pieces for Developers Obsidian Plugin Installation Issues
Users report the Pieces for Developers Obsidian plugin fails to load after installation, despite successful installation messages.  Troubleshooting steps include checking console logs, updating Pieces OS and the plugin to the latest versions, and ensuring compatibility between Pieces OS, the plugin, and Obsidian versions. 

**Related Issues:**
- [#574](https://github.com/pieces-app/support/issues/574): Obsidian Plugin
- [#581](https://github.com/pieces-app/support/issues/581): Unable to open Pieces Copilot Service
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins

### 5. Pieces for Developers Bugs and Issues
Users are experiencing various bugs in Pieces for Developers including a welcome message appearing after every saved snippet, Copilot not generating code, and issues generating shareable links. Solutions vary from bug fixes in upcoming releases to temporary workarounds. Users are encouraged to check for updates and report any issues.

**Related Issues:**
- [#582](https://github.com/pieces-app/support/issues/582): Saved Snippets Welcome Screen
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#443](https://github.com/pieces-app/support/issues/443): Unable to generate personal shareable links for 6+ months


## Recommendations
- **Prioritize LTM Issues:** Allocate resources to address the ongoing issues with the Long-Term Memory (LTM) feature, particularly on Linux. This includes investigating and resolving problems with feature unavailability, activation failures, and inconsistent context access.
- **Improve Remote Environment Connectivity:** Investigate and address the persistent connectivity issues users face when using Pieces OS in remote environments like Docker containers, even after implementing the patch in VS Code extension v2.0.1.
- **Resolve Obsidian Plugin Installation Issues:** Investigate and fix the problem preventing the Pieces for Developers Obsidian plugin from loading for some users, despite successful installation messages. Ensure clear documentation and troubleshooting steps are available.
- **Address Pieces for Developers Bugs:** Dedicate resources to resolve reported bugs in Pieces for Developers, such as the welcome message appearing repeatedly, Copilot loading issues, and problems with shareable links. Communicate known issues and workarounds clearly.
- **Review Support Documentation:** Review and update support documentation, particularly regarding connecting to Pieces OS from remote environments and troubleshooting plugin installations. Ensure consistency and clarity in instructions.
- **Enhance Communication Clarity:** Encourage support staff to provide clear and concise instructions to users, avoiding technical jargon and ambiguity. Utilize visual aids like screenshots and videos when helpful.
- **Gather User Feedback:** Implement a system for gathering user feedback on support interactions. This can help identify areas for improvement in communication, issue resolution, and documentation.

## Daily Reports
Here are the daily reports for this week:

- [report_194217](daily/2025-01-09/report_194217.md)
- [report_210606](daily/2025-01-09/report_210606.md)
- [report_050651](daily/2025-01-10/report_050651.md)
- [report_131001](daily/2025-01-10/report_131001.md)
- [report_210606](daily/2025-01-10/report_210606.md)
