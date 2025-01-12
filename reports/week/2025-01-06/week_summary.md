# Support Ticket Report
- Generated: 2025-01-12 05:09:08
- Period: 2025-01-06 to 2025-01-12

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
### 1. Pieces OS Long-Term Memory Engine Activation Issues
Users are experiencing difficulties activating the Long-Term Memory Engine in Pieces OS. This is often due to issues with the LLM overriding saved models or problems with the Qdrant dependency. Solutions include software updates, reinstalling Pieces OS, and restoring settings from backups. The Pieces team is actively working on infrastructure upgrades to address these issues.

**Related Issues:**
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory

### 2. Pieces OS connectivity issues with VS Code and extensions
Users report Pieces OS connectivity problems with VS Code and extensions due to remote environments, port changes, and networking issues. Solutions include updating to the latest extension versions, configuring custom URLs with the correct port (39300), and checking network settings. Workarounds involve manual installation from VSIX and hiding network messages in developer console.

**Related Issues:**
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#562](https://github.com/pieces-app/support/issues/562): Chrome Extension Fills Developer Console with Errors
- [#566](https://github.com/pieces-app/support/issues/566): Pieces Copilot not working on Windsurf

### 3. Pieces OS and Plugin Update Issues
Users are experiencing issues with Pieces OS and plugin updates, including software glitches, unexpected behavior like pop-ups, and difficulties with specific features like shareable links and file recognition. Solutions involve updating to the latest compatible versions, debugging with user-provided information, and planned software improvements to address the root causes.

**Related Issues:**
- [#443](https://github.com/pieces-app/support/issues/443): Unable to generate personal shareable links for 6+ months
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files

### 4. Pieces OS Linux Compatibility Issues
Users report Pieces OS facing compatibility issues on Linux, particularly with Wayland. Errors include "No available configurations for the given RGBA pixel format" and Long-Term Memory feature malfunction. Proposed solutions involve trying different drivers, switching to X11, and using specific environment variables. Issues are under investigation.

**Related Issues:**
- [#565](https://github.com/pieces-app/support/issues/565): Starting error: No available configurations for the given RGBA pixel format
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files

### 5. Pieces for Obsidian plugin installation and functionality issues
Users report the Pieces for Obsidian plugin fails to load or recognize files, despite successful installation.  Troubleshooting includes checking for console errors, updating plugins, and ensuring compatibility between Pieces OS, plugin, and Obsidian versions. Developers are actively working on solutions and gathering information to address these issues.

**Related Issues:**
- [#574](https://github.com/pieces-app/support/issues/574): Obsidian Plugin
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files


## Recommendations
- **Prioritize resolving Long-Term Memory Engine issues:** This appears to be a recurring and widespread problem across different operating systems and setups, impacting user experience and adoption of a key feature.
- **Improve Pieces OS connectivity with VS Code and extensions:** Address connectivity problems stemming from remote environments, port changes, and networking issues to ensure seamless integration with a popular IDE.
- **Investigate and resolve Pieces OS Linux compatibility issues:** Address compatibility issues on Linux, particularly with Wayland, to expand the user base and improve platform stability.
- **Enhance Pieces OS and plugin update mechanisms:** Provide clearer communication and smoother update processes to minimize user disruption and confusion.
- **Improve Pieces for Obsidian plugin stability and functionality:** Address plugin loading errors and file recognition problems to ensure a seamless experience for Obsidian users.
- **Gather more detailed information on less frequent issues:** While focusing on the most common problems, systematically collect data on less frequent issues to identify potential trends and underlying causes.
- **Consider a dedicated internal testing team or process:** Implement a robust testing process, potentially involving a dedicated team, to proactively identify and address issues before they reach users.
- **Improve error messaging and logging:** Provide more informative error messages and detailed logs to help users and developers troubleshoot problems more effectively.
- **Enhance documentation and support resources:** Update and expand documentation, FAQs, and troubleshooting guides to empower users with self-service solutions and reduce support requests.
- **Analyze user feedback for emerging trends:** Regularly analyze user feedback from various channels (GitHub, Discord, etc.) to identify emerging trends and proactively address potential issues before they escalate.

## Daily Reports
Here are the daily reports for this week:

- [report_194217](daily/2025-01-09/report_194217.md)
- [report_210606](daily/2025-01-09/report_210606.md)
- [report_050651](daily/2025-01-10/report_050651.md)
- [report_131001](daily/2025-01-10/report_131001.md)
- [report_210606](daily/2025-01-10/report_210606.md)
