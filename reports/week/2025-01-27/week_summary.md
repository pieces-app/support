# Support Ticket Report
- Generated: 2025-01-30 05:09:00
- Period: 2025-01-27 to 2025-01-30

## Summary
- **Total Tickets:** 10
- **Resolved:** 3
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 6.17 |
| [#605](https://github.com/pieces-app/support/issues/605) | Ollama failed to install in pieces | 5.68 |
| [#598](https://github.com/pieces-app/support/issues/598) | Ensure core dependencies need help asap | 5.61 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 5.46 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.92 |

## Common Issues
### 1. Ollama Installation Failures in Pieces OS
Users on various Pieces OS versions and operating systems are experiencing failures when installing the Ollama model. This is primarily due to dependency conflicts and snap confinement issues. Proposed solutions involve ensuring dependency accessibility within the snap environment and potential patching by the Pieces team.

**Related Issues:**
- [#605](https://github.com/pieces-app/support/issues/605): Ollama failed to install in pieces
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 2. Pieces OS Connection Issues
Users are experiencing difficulties connecting to Pieces OS endpoints, encountering errors like "Connection refused" and "Route not found" on ports 1000 and 39300. This might be related to Pieces OS version upgrades and port changes. Solutions include verifying the correct port (39300), checking if Pieces OS is running, and contacting Pieces support for further assistance.

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 3. Pieces Desktop App Update and Launch Issues
Users are experiencing issues with Pieces Desktop App after updating to PiecesOS 11.0.x, including non-dismissable overlay messages, repeated update prompts, and launch failures.  Suggested solutions include verifying auto-launch settings, updating through the Microsoft Store, and restarting the computer. The Pieces team is actively investigating these issues and working on improvements.

**Related Issues:**
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 4. PiecesOS Performance Issues and Feature Requests
Users report high RAM/CPU usage by PiecesOS, potentially linked to internet connectivity or Live Context. Short-term solutions include restarting PiecesOS or disabling Live Context. A database technology replacement in PiecesOS 11.1.0 aims to address these issues. Additionally, users request font customization in Copilot chats, which is planned for an upcoming release.

**Related Issues:**
- [#601](https://github.com/pieces-app/support/issues/601): How to change the font of the linux app?
- [#604](https://github.com/pieces-app/support/issues/604): Unable to open Pieces Copilot Service
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU


## Recommendations
- **Prioritize Ollama Installation Issues:** Allocate immediate resources to address the Ollama installation failures, focusing on dependency conflicts and snap confinement issues within Pieces OS. 
- **Investigate Pieces OS Connection Problems:** Investigate and resolve the connection issues users are facing with Pieces OS endpoints, specifically on ports 1000 and 39300. Ensure clear communication about port changes in future updates.
- **Address Pieces Desktop App Update and Launch Concerns:** Focus on resolving the issues users are experiencing with the Pieces Desktop App after updating to PiecesOS 11.0.x, including non-dismissable overlays, update prompts, and launch failures.
- **Improve PiecesOS Resource Management:** Continue optimizing PiecesOS to reduce RAM/CPU usage, particularly in relation to internet connectivity and Live Context. Monitor the effectiveness of the database technology replacement in version 11.1.0.
- **Enhance Communication about Known Issues:** Proactively communicate known issues, such as the high resource usage, to manage user expectations and provide potential workarounds while solutions are being developed.
- **Implement Font Customization:** Prioritize the implementation of font customization in Copilot chats, as requested by users, to improve user experience and accessibility.

## Daily Reports
Here are the daily reports for this week:

- [report_050642](daily/2025-01-28/report_050642.md)
- [report_130931](daily/2025-01-28/report_130931.md)
- [report_210619](daily/2025-01-28/report_210619.md)
- [report_210606](daily/2025-01-29/report_210606.md)
- [report_050716](daily/2025-01-30/report_050716.md)
