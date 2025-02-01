# Support Ticket Report
- Generated: 2025-02-01 21:08:21
- Period: 2025-01-27 to 2025-02-01

## Summary
- **Total Tickets:** 12
- **Resolved:** 6
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#606](https://github.com/pieces-app/support/issues/606) | LTM cannot see code inside a sandbox in the browser | 5.50 |
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 5.35 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 5.01 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.68 |
| [#598](https://github.com/pieces-app/support/issues/598) | Ensure core dependencies need help asap | 3.94 |

## Common Issues
### 1. Ollama Installation Failures in Pieces OS
Users report consistent failures when installing Ollama within the Pieces OS desktop application across Linux and Windows.  Primary causes include missing dependencies in the sandboxed environment and potential conflicts with existing LLM installations.  Solutions involve ensuring curl is included in the snap, patching the sandbox for external LLM access, and providing clear troubleshooting steps for users.

**Related Issues:**
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#605](https://github.com/pieces-app/support/issues/605): Ollama failed to install in pieces
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 2. Pieces OS Connection Issues
Users report "Connection refused" or "Route not found" errors when connecting to Pieces OS, particularly on port 39300. This might be due to Pieces OS running on a different port. Suggested solutions include checking the port configuration file, ensuring Pieces OS is running, and reinstalling the application.

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 3. PiecesOS Launch and Performance Issues
Users report PiecesOS failing to launch, high RAM/CPU usage, and slow performance. Solutions include restarting PiecesOS, reinstalling via Microsoft Store, waiting for PiecesOS 11.1.0 update, and contacting support for troubleshooting. Issues may be related to internet connection, memory leaks, or database technologies.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap

### 4. Pieces OS users experience issues with Copilot
Multiple users report issues with the Copilot feature in Pieces OS, including LTM not accessing sandbox content, Copilot model not saving on Linux, and Ollama installation failures. Proposed solutions involve upgrading to the latest Pieces OS version (11.1.0) and referring to related GitHub issues for troubleshooting.

**Related Issues:**
- [#606](https://github.com/pieces-app/support/issues/606): LTM cannot see code inside a sandbox in the browser
- [#604](https://github.com/pieces-app/support/issues/604): Unable to open Pieces Copilot Service
- [#605](https://github.com/pieces-app/support/issues/605): Ollama failed to install in pieces

### 5. PiecesOS and Desktop App Launch and Update Issues
Users report difficulties launching PiecesOS and the Desktop app, encountering errors during startup. This is particularly prevalent with Early Access Program features and installations via the Microsoft Store. Solutions include reinstalling through the Microsoft Store, verifying PiecesOS functionality, and ensuring both PiecesOS and the Desktop app are updated to the latest versions.

**Related Issues:**
- [#607](https://github.com/pieces-app/support/issues/607): Feat: Localization(french) for the Desktop Application
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap


## Recommendations
- Prioritize resolving Ollama installation issues on Pieces OS, addressing missing dependencies and sandbox conflicts.
- Provide clear instructions and troubleshooting steps for users experiencing "Connection refused" errors on port 39300, including verifying port configuration and Pieces OS status.
- Investigate and address the root cause of PiecesOS launch and performance issues, including high RAM/CPU usage. Consider optimizing memory management and database technologies.
- Improve communication and documentation around Early Access Program features, particularly regarding installation, updates, and known issues.
- Develop a more robust solution for updating PiecesOS and the Desktop app for users who installed via the Microsoft Store to prevent launch and update errors.
- Investigate and resolve the issue preventing Copilot's LTM from accessing sandbox content, ensuring seamless integration between these features.
- Address the bug preventing Copilot model saving on Linux to provide a consistent experience across platforms.
- Monitor and address the non-dismissable overlay message issue (ticket #590) to improve user experience.
- Consider implementing font customization options for the Linux app (ticket #601) to enhance user experience and accessibility.

## Daily Reports
Here are the daily reports for this week:

- [report_050642](daily/2025-01-28/report_050642.md)
- [report_130931](daily/2025-01-28/report_130931.md)
- [report_210619](daily/2025-01-28/report_210619.md)
- [report_210606](daily/2025-01-29/report_210606.md)
- [report_050716](daily/2025-01-30/report_050716.md)
- [report_210553](daily/2025-01-30/report_210553.md)
- [report_130914](daily/2025-01-30/report_130914.md)
- [report_210606](daily/2025-01-31/report_210606.md)
- [report_130902](daily/2025-01-31/report_130902.md)
