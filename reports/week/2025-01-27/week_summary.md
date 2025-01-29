# Support Ticket Report
- Generated: 2025-01-29 13:11:00
- Period: 2025-01-27 to 2025-01-29

## Summary
- **Total Tickets:** 9
- **Resolved:** 2
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 6.59 |
| [#597](https://github.com/pieces-app/support/issues/597) | Getting an error of Route not found error | 5.03 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.93 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 4.85 |
| [#598](https://github.com/pieces-app/support/issues/598) | Ensure core dependencies need help asap | 4.84 |

## Common Issues
### 1. Pieces OS Connectivity Issues
Users report "Connection refused" or "Route not found" errors when accessing Pieces OS on port 1000 or 39300. This might be due to port migration in version 11.0.0. Suggested solutions include verifying the port number in the config file, checking firewall settings, and ensuring Pieces OS is running. The Pieces team is aware of the issue and offers further assistance through GitHub and direct communication.

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 2. PiecesOS High Resource Usage and Crashes
Users report high RAM/CPU usage by PiecesOS, sometimes exceeding 2GB RAM and 50% CPU. This causes system slowdowns and crashes. Proposed solutions include restarting PiecesOS, upgrading to the latest version (11.1.0), and disabling the Live Context feature. The Pieces team is actively investigating and resolving these issues.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 3. Pieces Desktop App Crashes and Fails to Launch
Users report Pieces Desktop App on both Windows and Linux crashing after update or failing to launch due to dependency issues.  This seems related to sandbox environment and core dependencies. Proposed solutions include adding missing dependencies like 'curl' and enabling functionalities within the sandbox.  The Pieces team is actively investigating and working on a fix.

**Related Issues:**
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 4. PiecesOS Performance and Customization Issues
Users report high RAM/CPU usage with PiecesOS, particularly in the background or with Live Context. Solutions include upgrading to versions with optimized database technology (11.1.0+), using the "Optimize Memory" option, and disabling Live Context. Additionally, users seek font customization in Copilot chats, which is currently unavailable but being considered for future development.

**Related Issues:**
- [#601](https://github.com/pieces-app/support/issues/601): How to change the font of the linux app?
- [#604](https://github.com/pieces-app/support/issues/604): Unable to open Pieces Copilot Service
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU

### 5. Pieces Core Services Access and Launch Issues
Users report difficulties accessing Pieces Core Services and launching the desktop app on Windows. This prevents core functionalities and software usage. Proposed solutions include checking core dependencies, ensuring compatibility with the latest OS version, and reviewing similar reported issues. The Pieces team is actively investigating and providing support through issue tracking and potential live troubleshooting.

**Related Issues:**
- [#604](https://github.com/pieces-app/support/issues/604): Unable to open Pieces Copilot Service
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap


## Recommendations
- **Address Pieces OS Connectivity Issues:** Investigate and resolve the root cause of "Connection refused" and "Route not found" errors on ports 1000 and 39300. Update documentation and communication channels to reflect the port migration in version 11.0.0.
- **Mitigate PiecesOS High Resource Usage:** Continue optimizing PiecesOS to reduce RAM/CPU usage, particularly in the background and with Live Context. Explore ways to improve memory management and reduce the footprint of ML models.
- **Stabilize Pieces Desktop App:** Prioritize resolving crashes and launch failures in the Desktop App, focusing on dependency issues and sandbox environment compatibility. Ensure smooth user experience across Windows and Linux.
- **Improve Pieces Core Services Accessibility:** Investigate and address issues hindering access to Pieces Core Services, especially on Windows. Provide clear troubleshooting steps and ensure compatibility with the latest OS versions.
- **Consider Font Customization:** Explore the feasibility of adding font customization options for Copilot chats based on user feedback. This can enhance user experience and accessibility.

## Daily Reports
Here are the daily reports for this week:

- [report_050642](daily/2025-01-28/report_050642.md)
- [report_130931](daily/2025-01-28/report_130931.md)
- [report_210619](daily/2025-01-28/report_210619.md)
