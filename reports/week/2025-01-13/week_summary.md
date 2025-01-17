# Support Ticket Report
- Generated: 2025-01-17 21:08:38
- Period: 2025-01-13 to 2025-01-17

## Summary
- **Total Tickets:** 15
- **Resolved:** 5
- **Open:** 10

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 7.70 |
| [#590](https://github.com/pieces-app/support/issues/590) | Non-dismissable overlay message. | 5.68 |
| [#589](https://github.com/pieces-app/support/issues/589) | Conversation titles save too eagerly while editing | 5.68 |
| [#586](https://github.com/pieces-app/support/issues/586) | Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script | 4.63 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.23 |

## Common Issues
### 1. Pieces OS Connection Issues in Remote Environments
Users are experiencing difficulties connecting to Pieces OS from remote environments like WSL2 and VS Code DevContainers. This is often due to network inconsistencies and the Pieces OS server listening on the loopback interface. Solutions include enabling dns-tunnel in WSL2, configuring custom URLs, and ensuring the Pieces for VSCode extension is updated to the latest version (2.0.2 or higher).

**Related Issues:**
- [#489](https://github.com/pieces-app/support/issues/489): VSCode extension issue rendering Copilot when installed via snap in WSL2
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#131](https://github.com/pieces-app/support/issues/131): Unable to Launch Pieces Windows Desktop Version

### 2. Pieces OS Software Bugs and Errors
Users report various issues with Pieces OS, including search functionality problems, connectivity issues, and plugin unresponsiveness. Proposed solutions involve software upgrades, log analysis, and bug fixes. The Pieces team actively responds to user reports, investigates issues, and provides updates on resolutions.

**Related Issues:**
- [#588](https://github.com/pieces-app/support/issues/588): Neural Code Search returns no results
- [#456](https://github.com/pieces-app/support/issues/456): Not Working
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script

### 3. Pieces Desktop Launch Failures
Users report Pieces Desktop failing to launch on Windows, often remaining stuck on a connecting screen.  This may be related to background updates or Pieces OS connection issues. Troubleshooting includes checking for updates, submitting logs to support, and ensuring Pieces OS is running.

**Related Issues:**
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#131](https://github.com/pieces-app/support/issues/131): Unable to Launch Pieces Windows Desktop Version
- [#456](https://github.com/pieces-app/support/issues/456): Not Working

### 4. Desktop App UI/UX Bugs
Users reported various UI/UX bugs in the Pieces Desktop App on macOS, including issues with conversation titles saving prematurely, repetitive welcome messages, and unresponsive Copilot. These issues were acknowledged by the Pieces team and solutions were proposed, such as patches and updates in upcoming releases.

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#582](https://github.com/pieces-app/support/issues/582): Saved Snippets Welcome Screen
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback

### 5. Pieces OS Launch and Performance Issues
Users report Pieces OS failing to launch, high RAM usage, CPU spikes, and connection issues.  Suggested workarounds include restarting the app, optimizing memory, disabling 'Live Context', and checking for updates.  Pieces team is aware of these issues and actively investigating solutions.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#456](https://github.com/pieces-app/support/issues/456): Not Working
- [#131](https://github.com/pieces-app/support/issues/131): Unable to Launch Pieces Windows Desktop Version


## Recommendations
- **Prioritize resolving connection issues:** The most frequent and active tickets revolve around difficulties connecting to Pieces OS from remote environments like WSL2 and VS Code DevContainers. Focus on resolving these issues to improve user experience and reduce support volume.
- **Investigate and address Pieces OS performance issues:** Tickets related to high RAM usage, CPU spikes, and launch failures indicate potential performance bottlenecks in Pieces OS. Prioritize optimizing Pieces OS performance to improve stability and resource consumption.
- **Improve search functionality:** Users have reported issues with Pieces OS search, particularly with Neural Code Search. Enhance search accuracy, clarity, and overall user experience to address these concerns.
- **Address Desktop App UI/UX bugs:** Several tickets highlight UI/UX glitches in the Desktop App, such as issues with conversation titles and repetitive welcome messages. Dedicate resources to resolve these bugs and improve the overall usability of the Desktop App.
- **Proactively monitor and address common errors:** Analyze error logs and user reports to identify common error messages like 'Failed to connect to Pieces OS' and 'I'm sorry. Something went wrong with processing.'  Proactively investigate and address the root causes of these errors to prevent recurrence and minimize user disruption.
- **Review and update documentation:** Ensure that documentation, particularly regarding connecting to Pieces OS from remote environments, is up-to-date, comprehensive, and easy to understand. Clear and concise documentation can empower users to troubleshoot issues independently and reduce support requests.
- **Consider implementing a system status page:** A publicly accessible system status page can provide users with real-time information about service availability, planned maintenance, and known issues. This can reduce support inquiries during service disruptions and improve communication with users.
- **Gather more detailed user feedback:** Encourage users to provide detailed feedback about their support experiences, including what worked well and what could be improved. This feedback can help identify areas for improvement in support processes and communication.

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
