# Support Ticket Report
- Generated: 2025-01-28 21:08:18
- Period: 2025-01-27 to 2025-01-28

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
| [#601](https://github.com/pieces-app/support/issues/601) | How to change the font of the linux app? | 4.50 |

## Common Issues
### 1. Pieces OS Connection Issues
Users are experiencing difficulties connecting to Pieces OS after the 11.0.4 update. The issue stems from a port change, with the new port being dynamically assigned and documented in the 'com.pieces.os/production/config/.port.txt' file.  Solutions involve verifying the correct port, checking Pieces OS version, and consulting relevant documentation.

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 2. Pieces Core Services Failing to Launch
Users are experiencing difficulties launching Pieces Core Services on both Windows and Linux. The issue on Linux seems to stem from snap sandbox restrictions and a potential fix is awaiting release. On Windows, the exact cause is unclear, and the Pieces team is actively investigating, offering live troubleshooting sessions to affected users.

**Related Issues:**
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap

### 3. Pieces Core Services Failing to Open
Users are experiencing difficulties opening Pieces Core Services on various operating systems. The issue seems to stem from potential dependency errors during startup. Proposed solutions include checking for updates, ensuring dependencies are met, and engaging in live troubleshooting with the Pieces team.

**Related Issues:**
- [#604](https://github.com/pieces-app/support/issues/604): Unable to open Pieces Copilot Service
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap

### 4. PiecesOS High Resource Usage and Startup Issues
Users report high RAM/CPU usage, sometimes exceeding 5GB, potentially due to memory leaks.  Suggested workarounds include restarting PiecesOS and disabling the Live Context feature.  A potential fix was released in PiecesOS 11.1.0.  Additionally, some users experience issues with PiecesOS or core services not opening, often requiring individual troubleshooting.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.

### 5. Pieces for Desktop App Issues and Errors
Users are experiencing various issues with the Pieces for Desktop App, including font customization limitations, service launch errors with "Bad State" messages, and non-dismissable overlay messages. Troubleshooting steps often involve checking installation details, Pieces OS information, and device information. The Pieces support team is actively investigating these issues and providing updates to users.

**Related Issues:**
- [#601](https://github.com/pieces-app/support/issues/601): How to change the font of the linux app?
- [#604](https://github.com/pieces-app/support/issues/604): Unable to open Pieces Copilot Service
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.


## Recommendations
- **Prioritize Pieces OS Connection Issues:** Allocate additional resources to address the difficulties users face connecting to Pieces OS after the 11.0.4 update. Investigate the root cause of the port change issue and provide clear guidance on port configuration.
- **Investigate Pieces Core Services Launch Failures:** Address the issues preventing users from launching Pieces Core Services on Windows and Linux. Prioritize resolving the snap sandbox restrictions on Linux and provide a timely fix. Continue investigating the cause of launch failures on Windows and offer support through live troubleshooting sessions.
- **Address PiecesOS High Resource Usage:** Investigate and address the high RAM/CPU usage reported by users, potentially caused by memory leaks. While PiecesOS 11.1.0 includes a potential fix, continue monitoring its effectiveness and explore further optimizations to reduce resource consumption.
- **Improve Communication on Known Issues:** Provide clear and timely communication to users regarding the status of known issues, such as the Pieces Core Services launch failures and PiecesOS high resource usage. Offer workarounds and alternative solutions while fixes are being developed.
- **Enhance Font Customization Options:** Consider adding a setting to allow users to customize the font in the Pieces Copilot interface, addressing the feedback received regarding font boldness and lack of customization options.
- **Review and Update Support Documentation:** Ensure that support documentation, particularly regarding Pieces OS port configuration and troubleshooting core services launch failures, is up-to-date and comprehensive. Provide clear step-by-step instructions and troubleshooting tips.

## Daily Reports
Here are the daily reports for this week:

- [report_050642](daily/2025-01-28/report_050642.md)
- [report_130931](daily/2025-01-28/report_130931.md)
- [report_210619](daily/2025-01-28/report_210619.md)
