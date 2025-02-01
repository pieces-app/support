# Support Ticket Report
- Generated: 2025-02-01 05:07:53
- Period: 2025-01-27 to 2025-02-01

## Summary
- **Total Tickets:** 12
- **Resolved:** 6
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#606](https://github.com/pieces-app/support/issues/606) | LTM cannot see code inside a sandbox in the browser | 6.94 |
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 5.57 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 5.04 |
| [#605](https://github.com/pieces-app/support/issues/605) | Ollama failed to install in pieces | 4.74 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.68 |

## Common Issues
### 1. Ollama Installation Failures in Pieces OS
Users on Linux and Windows encounter "Ollama failed to install" errors in the Pieces desktop app. This is likely due to Pieces OS's sandboxed environment and potential dependency issues with 'curl'. Workarounds include reinstalling Pieces OS via the Microsoft Store (Windows) or waiting for a patch from the Pieces team to resolve the 'curl' dependency within the snap environment (Linux).

**Related Issues:**
- [#605](https://github.com/pieces-app/support/issues/605): Ollama failed to install in pieces
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 2. PiecesOS Performance and Functionality Issues
Users report high RAM/CPU usage, LTM sandbox issues, and Copilot service errors. Solutions include restarting PiecesOS, upgrading to version 11.1.0, and contacting support. Issues may relate to internet connectivity, Live Context feature, or underlying database technology.

**Related Issues:**
- [#606](https://github.com/pieces-app/support/issues/606): LTM cannot see code inside a sandbox in the browser
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#604](https://github.com/pieces-app/support/issues/604): Unable to open Pieces Copilot Service

### 3. Pieces OS Connectivity Issues on Port 39300
Users are experiencing difficulties connecting to Pieces OS on port 39300 after upgrading to version 11.0.0. This is due to a change in the port used by Pieces OS.  Suggested solutions include checking the Pieces OS version, verifying the port number, and ensuring the application is using the correct port-finding algorithm.

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 4. Pieces OS and Desktop App Installation and Update Issues
Users report issues installing Pieces OS and Desktop App using the .appinstaller file, encountering errors and launch failures. Reinstalling through the Microsoft Store often resolves the problem. Additionally, users experience difficulties updating the Desktop App, with missing update buttons and non-functional update mechanisms. Workarounds include restarting Pieces OS and the Desktop App or updating through the Microsoft Store, with improved update experiences planned for future releases.

**Related Issues:**
- [#607](https://github.com/pieces-app/support/issues/607): Feat: Localization(french) for the Desktop Application
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap

### 5. Pieces Desktop App Launch and Update Issues
Users report Pieces Desktop App failing to launch, displaying a non-dismissable overlay message, or having trouble updating. Issues potentially stem from conflicts with PiecesOS updates, Microsoft Store installations, or the .appinstaller method. Suggested solutions include restarting PiecesOS and Desktop App, updating through the Microsoft Store, or reinstalling using a different method.

**Related Issues:**
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug


## Recommendations
- **Prioritize resolution of Ollama installation failures:** This issue is prevalent on both Windows and Linux and presents a significant barrier to users leveraging local LLM capabilities.
- **Investigate and address PiecesOS performance issues:** High RAM/CPU usage, LTM sandbox issues, and Copilot service errors are recurring concerns that impact user experience.  Focus on optimizing resource consumption and improving overall stability.
- **Improve Pieces OS and Desktop App installation and update processes:** Users encounter frequent errors with the .appinstaller method and experience difficulties updating the Desktop App. Streamline these processes and provide clearer guidance to users.
- **Enhance communication around Pieces OS port changes:** The shift to port 39300 in version 11.0.0 has caused confusion. Clearly document this change and update support resources accordingly.
- **Consider developing a dedicated troubleshooting guide for common issues:** This would empower users to self-resolve problems and potentially reduce support ticket volume. 

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
