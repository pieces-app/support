# Support Ticket Report
- Generated: 2025-01-31 05:08:34
- Period: 2025-01-27 to 2025-01-31

## Summary
- **Total Tickets:** 10
- **Resolved:** 5
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#605](https://github.com/pieces-app/support/issues/605) | Ollama failed to install in pieces | 5.50 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 5.43 |
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 5.21 |
| [#598](https://github.com/pieces-app/support/issues/598) | Ensure core dependencies need help asap | 5.17 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.68 |

## Common Issues
### 1. Ollama Installation Failures in Pieces OS
Users reported various issues with installing and using Ollama within the Pieces OS desktop application across Linux and Windows platforms.  Problems included installation failures, dependency conflicts, and sandbox restrictions. Proposed solutions involved patching Pieces OS to enable Ollama functionality and addressing dependency issues. Some fixes were implemented, while others were under development or pending release.

**Related Issues:**
- [#605](https://github.com/pieces-app/support/issues/605): Ollama failed to install in pieces
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 2. PiecesOS Linux App Issues
Users report issues with PiecesOS Linux app, including font customization limitations, high resource consumption, and Ollama installation failures. Solutions involve UI updates for font control, memory optimization, and enabling external tool access within the snap environment.

**Related Issues:**
- [#601](https://github.com/pieces-app/support/issues/601): How to change the font of the linux app?
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux

### 3. Pieces Desktop App Launch and Update Issues
Users reported Pieces Desktop app failing to launch or update, particularly after a Pieces OS upgrade or when installed via Microsoft Store.  This seems to stem from startup conflicts and update mechanism issues. Proposed solutions include managing startup programs, reinstalling via Microsoft Store, and awaiting improved update functionality.

**Related Issues:**
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 4. Pieces OS Connection Issues
Users are experiencing difficulties connecting to the Pieces OS endpoint on various ports, including 1000, 39300, and 54321. This issue seems to stem from incorrect port configurations or potential conflicts with other applications. Solutions include verifying the correct port using Pieces OS's port-finding algorithm and ensuring no other processes are using the required ports.

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 5. PiecesOS Connection and Launch Issues
Users report difficulties connecting to PiecesOS from external applications and launching the service.  Problems include incorrect port usage, potential firewall issues, and software conflicts. Solutions involve verifying the correct port (39300), ensuring firewall access, and reinstalling PiecesOS via the Microsoft Store.

**Related Issues:**
- [#604](https://github.com/pieces-app/support/issues/604): Unable to open Pieces Copilot Service
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000


## Recommendations
- **Prioritize Ollama Integration Issues:** Allocate resources to address the recurring problem of Ollama installation failures within Pieces OS, particularly on Linux and Windows. Investigate dependency conflicts, sandbox restrictions, and implement necessary patches to ensure seamless Ollama functionality.
- **Improve PiecesOS Linux App Stability:** Address reported issues with the Linux app, including font customization limitations, high resource consumption, and Ollama installation failures. Implement UI updates for font control, optimize memory usage, and enable smoother external tool access within the snap environment.
- **Resolve Pieces Desktop App Launch and Update Issues:** Investigate and fix problems related to the Desktop app failing to launch or update, especially after a Pieces OS upgrade or when installed via the Microsoft Store. Address startup conflicts, improve update mechanisms, and provide clear guidance to users experiencing these issues.
- **Provide Clear Guidance on Pieces OS Connection Issues:** Create comprehensive documentation or FAQs addressing connection issues with Pieces OS, specifically regarding port configurations. Explain the port-finding algorithm, common error messages (like ECONNREFUSED), and potential firewall issues.
- **Gather More Data on Performance Issues:** While some users reported high RAM/CPU usage, more data is needed. Implement better logging and error reporting for performance issues to help developers identify the root causes and implement effective solutions.
- **Improve Communication on Update Processes:** Clearly communicate to users the differences between installing Pieces OS via the website and the Microsoft Store, particularly regarding the update process. Provide timely updates on the progress of improvements to the update functionality for Microsoft Store installations.
- **Proactively Monitor Common Issues:** Develop a system to proactively monitor and identify recurring issues across different platforms. This could involve analyzing support tickets, community forums, and social media for emerging trends and common pain points. 

## Daily Reports
Here are the daily reports for this week:

- [report_050642](daily/2025-01-28/report_050642.md)
- [report_130931](daily/2025-01-28/report_130931.md)
- [report_210619](daily/2025-01-28/report_210619.md)
- [report_210606](daily/2025-01-29/report_210606.md)
- [report_050716](daily/2025-01-30/report_050716.md)
- [report_210553](daily/2025-01-30/report_210553.md)
- [report_130914](daily/2025-01-30/report_130914.md)
