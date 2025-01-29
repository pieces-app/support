# Support Ticket Report
- Generated: 2025-01-29 05:07:58
- Period: 2025-01-27 to 2025-01-29

## Summary
- **Total Tickets:** 9
- **Resolved:** 2
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 6.59 |
| [#598](https://github.com/pieces-app/support/issues/598) | Ensure core dependencies need help asap | 5.38 |
| [#597](https://github.com/pieces-app/support/issues/597) | Getting an error of Route not found error | 5.03 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.93 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 4.85 |

## Common Issues
### 1. Pieces OS Connection Issues
Users are experiencing difficulties connecting to Pieces OS after upgrading to version 11.0.4.  The issues involve connection refused errors, route not found errors, and problems accessing Pieces Core Services.  Solutions include verifying the correct port (39300), checking the .port.txt file, and ensuring all dependencies are met.

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 2. Issues with Pieces OS on Linux
Users are experiencing issues with Pieces OS on Linux, including font customization limitations in Copilot Chats, "PiecesWebSocketCreator not registered" errors, and Ollama installation failures. Proposed solutions involve exploring font customization settings, investigating the WebSocket error, and developing a patch for Ollama installation within the Pieces sandbox environment.

**Related Issues:**
- [#601](https://github.com/pieces-app/support/issues/601): How to change the font of the linux app?
- [#604](https://github.com/pieces-app/support/issues/604): Unable to open Pieces Copilot Service
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux

### 3. PiecesOS Performance Issues
Users report high RAM/CPU usage, particularly on Windows. Issues potentially linked to internet connection, background updates, and core services. Short-term solution: restart PiecesOS. Long-term: update to latest version, contact support for troubleshooting, consider turning off 'Live Context' feature.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.

### 4. Pieces Copilot/Core Services Access Failure
Users report Pieces Copilot/Core Services inaccessibility on Linux & Windows. Error messages indicate potential dependency registration issues within the application. Proposed solutions include checking Pieces OS version compatibility, ensuring core dependencies are met, and reviewing installation steps.

**Related Issues:**
- [#604](https://github.com/pieces-app/support/issues/604): Unable to open Pieces Copilot Service
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap

### 5. Pieces Desktop App Installation and Access Issues
Users report Pieces Desktop App installation failures, particularly with Ollama on Linux, and difficulties accessing core services. Proposed solutions involve infrastructure updates, patches for sandboxed environments, and ensuring core dependencies are met. Support teams are actively investigating and addressing these issues.

**Related Issues:**
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.


## Recommendations
- **Prioritize resolution of Pieces OS connection issues:** Focus on addressing connection refused errors, route not found errors, and problems accessing Pieces Core Services, particularly for users who recently upgraded to version 11.0.4. Ensure clear communication about the correct port (39300) and troubleshooting steps.
- **Improve Pieces OS stability on Linux:** Investigate and address issues related to font customization limitations in Copilot Chats, "PiecesWebSocketCreator not registered" errors, and Ollama installation failures. Explore solutions like enhanced font customization settings, debugging the WebSocket error, and developing a patch for Ollama installation within the Pieces sandbox environment.
- **Address PiecesOS performance issues:** Investigate reports of high RAM/CPU usage, especially on Windows. Explore potential links to internet connection, background updates, and core services. While restarting PiecesOS offers a temporary fix, prioritize long-term solutions like optimizing core functionalities and potentially releasing an update.
- **Enhance communication and documentation for core dependencies:** Provide clear instructions and troubleshooting steps for users encountering issues with Pieces Copilot/Core Services on both Linux and Windows. Ensure compatibility information and installation procedures are readily available.
- **Proactively monitor and address installation issues:** Continue monitoring reports of Pieces Desktop App installation failures, particularly with Ollama on Linux. Implement necessary infrastructure updates and patches to ensure a smooth installation process for all users.
- **Consider creating a dedicated troubleshooting guide for Pieces OS 11.0.4:** This guide can consolidate solutions for common issues encountered after the recent upgrade, including connection problems and core service access failures.

## Daily Reports
Here are the daily reports for this week:

- [report_050642](daily/2025-01-28/report_050642.md)
- [report_130931](daily/2025-01-28/report_130931.md)
- [report_210619](daily/2025-01-28/report_210619.md)
