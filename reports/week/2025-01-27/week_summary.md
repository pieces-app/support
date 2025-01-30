# Support Ticket Report
- Generated: 2025-01-30 13:11:01
- Period: 2025-01-27 to 2025-01-30

## Summary
- **Total Tickets:** 10
- **Resolved:** 4
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 6.17 |
| [#605](https://github.com/pieces-app/support/issues/605) | Ollama failed to install in pieces | 5.68 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 5.46 |
| [#598](https://github.com/pieces-app/support/issues/598) | Ensure core dependencies need help asap | 5.17 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.92 |

## Common Issues
### 1. Ollama Installation Failures in Pieces OS
Users on Linux experience "Ollama failed to install" errors due to missing curl dependencies in the Pieces OS sandbox environment.  This prevents local LLM model downloads and usage. A temporary solution is to install Ollama directly on the host machine outside the sandbox. Developers are working on a permanent fix by including curl in the sandbox.

**Related Issues:**
- [#605](https://github.com/pieces-app/support/issues/605): Ollama failed to install in pieces
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 2. Connection Issues with Pieces OS Endpoint
Users are experiencing difficulties connecting to the Pieces OS endpoint, encountering errors like "connect ECONNREFUSED" and "Route not found." This might be related to firewall settings, incorrect port numbers, or issues with the Pieces OS port-finding algorithm. Reinstallation using the Microsoft Store and verifying the correct port (starting from 39300) are suggested solutions.  

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 3. PiecesOS Installation and Update Issues
Users report problems installing, launching, and updating PiecesOS, particularly with the .appinstaller and Microsoft Store versions. Workarounds include reinstalling via the Microsoft Store, quitting and reopening apps, or manually updating. The Pieces team is aware of these issues and working on solutions, including improving the update experience.

**Related Issues:**
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.

### 4. PiecesOS Performance Issues and Font Customization
Users report high RAM/CPU usage by PiecesOS, impacting performance. This might be linked to internet connectivity or background processes. A temporary solution is restarting PiecesOS. Additionally, users request font customization options, which are planned for future releases.

**Related Issues:**
- [#601](https://github.com/pieces-app/support/issues/601): How to change the font of the linux app?
- [#604](https://github.com/pieces-app/support/issues/604): Unable to open Pieces Copilot Service
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU


## Recommendations
- **Prioritize resolving Ollama installation issues on Linux:** This is a recurring problem with high frequency and activity, impacting users' ability to utilize local LLM models.
- **Investigate and address Pieces OS endpoint connection problems:**  Errors like "connect ECONNREFUSED" are hindering users' ability to connect to Pieces OS. Improve documentation around firewall settings, port numbers, and the port-finding algorithm.
- **Improve the PiecesOS installation and update process:** Address issues related to .appinstaller and Microsoft Store installations to ensure a smoother user experience. 
- **Optimize PiecesOS resource usage:** Investigate and address high RAM/CPU usage reports, potentially linked to internet connectivity or background processes. Explore options for resource management and optimization.
- **Consider implementing font customization:** This is a recurring request from users and can enhance the overall user experience.

## Daily Reports
Here are the daily reports for this week:

- [report_050642](daily/2025-01-28/report_050642.md)
- [report_130931](daily/2025-01-28/report_130931.md)
- [report_210619](daily/2025-01-28/report_210619.md)
- [report_210606](daily/2025-01-29/report_210606.md)
- [report_050716](daily/2025-01-30/report_050716.md)
- [report_130914](daily/2025-01-30/report_130914.md)
