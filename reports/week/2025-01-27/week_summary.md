# Support Ticket Report
- Generated: 2025-02-02 13:09:24
- Period: 2025-01-27 to 2025-02-02

## Summary
- **Total Tickets:** 13
- **Resolved:** 6
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 5.35 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 5.28 |
| [#606](https://github.com/pieces-app/support/issues/606) | LTM cannot see code inside a sandbox in the browser | 4.74 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.67 |
| [#608](https://github.com/pieces-app/support/issues/608) | Models Download Fail | 4.42 |

## Common Issues
### 1. Ollama Installation Failure in Pieces OS
Users are experiencing issues installing and using Ollama within the Pieces OS desktop application across different operating systems. This is primarily due to missing dependencies and sandbox environment restrictions in the Pieces OS snap package. The Pieces team is aware of the issue and actively working on a fix. However, as of January 28, 2025, a permanent solution has not been released. Users are advised to follow the GitHub issue for updates and potential workarounds.

**Related Issues:**
- [#608](https://github.com/pieces-app/support/issues/608): Models Download Fail
- [#605](https://github.com/pieces-app/support/issues/605): Ollama failed to install in pieces
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux

### 2. Pieces OS Linux Integration Issues
Users are experiencing difficulties with Pieces OS on Linux, including Copilot access problems, sandbox limitations preventing LTM code visibility, and Ollama installation failures due to missing dependencies and sandbox restrictions. Proposed solutions involve upgrading to Pieces OS 11.1.0, addressing sandbox permissions, and including curl in the snap package.

**Related Issues:**
- [#606](https://github.com/pieces-app/support/issues/606): LTM cannot see code inside a sandbox in the browser
- [#604](https://github.com/pieces-app/support/issues/604): Unable to open Pieces Copilot Service
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux

### 3. Pieces OS connection issues on port 39300
Users are experiencing difficulties connecting to Pieces OS on port 39300, encountering errors like "connect ECONNREFUSED" and "Route not found." This is often due to Pieces OS dynamically assigning ports within a range starting from 39300.  Solutions include checking the .port.txt file for the active port or reinstalling Pieces OS.

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 4. PiecesOS High RAM and CPU Usage
Users report PiecesOS consuming excessive RAM and CPU, causing slowdowns. This issue appears related to internet connectivity and background processes. Proposed solutions include restarting PiecesOS, disabling Live Context, and upgrading to version 11.1.0, which optimizes memory and CPU usage. Users experiencing persistent issues are encouraged to contact Pieces support.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 5. PiecesOS/Desktop App Launch and Update Issues
Users report PiecesOS/Desktop app launch failures, often after updates. This might involve non-dismissable dialogs or repeated "Ensure core dependencies" errors. Suggested solutions include restarting the computer, ensuring only one app (OS or Desktop) launches at startup, reinstalling from the Microsoft Store, or waiting for automatic updates.

**Related Issues:**
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap


## Recommendations
- **Prioritize resolution of Ollama installation issues on Pieces OS, particularly focusing on dependency conflicts and sandbox restrictions within the snap package.**
- **Investigate and address the root causes of Pieces OS connection issues on port 39300, potentially by improving port assignment logic or providing clearer guidance to users on identifying the active port.**
- **Provide support and documentation for Pieces OS on Linux, addressing issues like Copilot access problems, sandbox limitations, and Ollama installation failures.**
- **Investigate and address reports of high RAM and CPU usage in PiecesOS, potentially optimizing background processes and resource management.**
- **Improve the PiecesOS/Desktop app launch and update process, focusing on resolving issues with non-dismissable dialogs and "Ensure core dependencies" errors.**

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
- [report_130724](daily/2025-02-02/report_130724.md)
- [report_050613](daily/2025-02-02/report_050613.md)
