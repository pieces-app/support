# Support Ticket Report
- Generated: 2025-01-31 13:11:09
- Period: 2025-01-27 to 2025-01-31

## Summary
- **Total Tickets:** 12
- **Resolved:** 5
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#605](https://github.com/pieces-app/support/issues/605) | Ollama failed to install in pieces | 5.50 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 5.43 |
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 5.21 |
| [#598](https://github.com/pieces-app/support/issues/598) | Ensure core dependencies need help asap | 4.83 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.68 |

## Common Issues
### 1. Ollama Installation Failure on Linux
Users on Linux, particularly in snap-based environments, are experiencing failures when installing Ollama through the Pieces desktop app. This is due to a missing 'curl' dependency in the snap package. A fix has been implemented and is expected to be released shortly. Users are advised to update their Pieces installation once the fix is available.

**Related Issues:**
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#605](https://github.com/pieces-app/support/issues/605): Ollama failed to install in pieces
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 2. PiecesOS Installation and Performance Issues
Users report PiecesOS installation failures, high RAM/CPU usage, and slow performance. Solutions include reinstalling via Microsoft Store, restarting the app, and waiting for updates addressing these issues.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap

### 3. Pieces OS Update and Installation Issues
Users report issues with Pieces OS and Pieces for Developers installation and automatic updates, particularly on Windows using the Microsoft Store. Workarounds include reinstalling via the Microsoft Store or quitting and reopening the apps. The Pieces team is aware of the need for a more intuitive update experience for Microsoft Store builds.

**Related Issues:**
- [#607](https://github.com/pieces-app/support/issues/607): https://github.com/pieces-app/support/issues/new/choose
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap

### 4. Pieces Desktop App and OS Startup and Update Issues
Users reported issues with Pieces Desktop App and OS startup and automatic updates, particularly on Windows using the Microsoft Store version.  Workarounds include restarting the app or updating through the Microsoft Store. The Pieces team is aware of these issues and working on improvements. Reinstalling the app through the Microsoft Store resolved some startup issues.

**Related Issues:**
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 5. Pieces OS Connection Issues
Users are experiencing difficulties connecting to Pieces OS endpoints, encountering errors like "connect ECONNREFUSED" and "Route not found." This might be related to port configuration issues. Reinstalling Pieces OS through the Microsoft Store and verifying port settings based on the `com.pieces.os/production/config/.port.txt` file are potential solutions.

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug


## Recommendations
- **Prioritize Ollama Installation Issues:** Allocate resources to address the Ollama installation failures on Linux, particularly in snap-based environments.  The missing 'curl' dependency is a critical issue impacting user experience.
- **Improve PiecesOS Installation and Performance:** Investigate and address the reported PiecesOS installation failures, high resource usage, and slow performance issues. Ensure a smooth and efficient user experience.
- **Enhance Update Mechanism for Microsoft Store:** Develop a more intuitive and seamless update experience for Pieces OS and Pieces for Developers installed via the Microsoft Store.  Address the issues with automatic updates and provide clear guidance for users.
- **Investigate and Resolve Connection Issues:** Troubleshoot and resolve the connection issues users are facing with Pieces OS endpoints. Provide clear instructions on port configuration and ensure stable connectivity.
- **Proactive Communication:**  Communicate known issues and workarounds to users through release notes, FAQs, and support channels. Keep users informed about upcoming fixes and updates to manage expectations. 

## Daily Reports
Here are the daily reports for this week:

- [report_050642](daily/2025-01-28/report_050642.md)
- [report_130931](daily/2025-01-28/report_130931.md)
- [report_210619](daily/2025-01-28/report_210619.md)
- [report_210606](daily/2025-01-29/report_210606.md)
- [report_050716](daily/2025-01-30/report_050716.md)
- [report_210553](daily/2025-01-30/report_210553.md)
- [report_130914](daily/2025-01-30/report_130914.md)
- [report_130902](daily/2025-01-31/report_130902.md)
