# Support Ticket Report
- Generated: 2025-01-30 21:07:50
- Period: 2025-01-27 to 2025-01-30

## Summary
- **Total Tickets:** 10
- **Resolved:** 5
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#605](https://github.com/pieces-app/support/issues/605) | Ollama failed to install in pieces | 6.94 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 5.43 |
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 5.21 |
| [#598](https://github.com/pieces-app/support/issues/598) | Ensure core dependencies need help asap | 5.17 |
| [#602](https://github.com/pieces-app/support/issues/602) | Ensure core dependencies  Retry Step , I need help #bug | 4.74 |

## Common Issues
### 1. Ollama Installation Failures in Pieces OS
Users on Linux experience consistent failures when installing Ollama. This is primarily due to Snap confinement blocking access to "curl", needed for Ollama download. While a fix is in development, temporary solutions involve manual Ollama installation or avoiding Snap. Users on other platforms report issues with Pieces OS launching, often resolved by reinstallation.

**Related Issues:**
- [#605](https://github.com/pieces-app/support/issues/605): Ollama failed to install in pieces
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 2. Pieces Desktop App Launch and Update Issues
Users are experiencing issues with Pieces Desktop App launching and updating, particularly on Windows with Pieces OS v11.0.4. Problems include non-dismissable overlay messages, update errors, and dependency conflicts. Proposed solutions involve checking startup configurations, updating through the Microsoft Store, and reinstalling the app. The Pieces team is investigating the root causes and working on improvements.

**Related Issues:**
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 3. Pieces OS Connection Issues on Windows
Users on Windows encounter "Connection refused" or "Route not found" errors when connecting to Pieces OS on ports 1000 or 39300. This is often due to Pieces OS not running or using an incorrect port. Solutions include verifying Pieces OS is running, using the correct port (39300), and ensuring firewall is not blocking the connection.

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 4. PiecesOS Performance and Usability Issues
Users report high RAM/CPU usage, font customization issues in PiecesOS. Workarounds include restarting the app and disabling Live Context. The development team is addressing these issues with updates, including font settings and memory optimization.

**Related Issues:**
- [#601](https://github.com/pieces-app/support/issues/601): How to change the font of the linux app?
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#604](https://github.com/pieces-app/support/issues/604): Unable to open Pieces Copilot Service


## Recommendations
- **Prioritize Ollama Installation Issues:** Allocate additional resources to address the Ollama installation failures on Pieces OS, particularly for Linux users experiencing Snap confinement issues.  This is the most frequent and active issue reported.
- **Improve Pieces Desktop App Stability:** Investigate and resolve the launch and update issues with the Pieces Desktop App on Windows, specifically for version 11.0.4. Focus on resolving non-dismissable overlay messages, update errors, and dependency conflicts.
- **Address Pieces OS Connection Problems:** Provide clear instructions and troubleshooting steps for users experiencing "Connection refused" or "Route not found" errors on Windows. Ensure users understand the correct port (39300) and potential firewall configurations.
- **Enhance Communication on Known Issues:** Proactively communicate the status of known issues, such as Ollama installation problems and Pieces Desktop App launch issues, through release notes, FAQs, or in-app notifications. Provide clear workarounds or temporary solutions while fixes are in development.
- **Optimize PiecesOS Resource Usage:** Continue efforts to optimize PiecesOS for reduced RAM and CPU usage. Investigate memory leaks and explore further optimizations for on-device ML capabilities and the Live Context feature. Keep users informed about progress and any potential workarounds.
- **Improve Font Customization:** Prioritize implementing font customization options, including font weight and style, in the Pieces Copilot chats and sidebar. This addresses a common user request and enhances the overall user experience.
- **Gather More Detailed Issue Reports:** Encourage users to provide comprehensive information when reporting issues, including software versions, operating systems, specific error messages, and steps to reproduce the problem. This helps in faster diagnosis and resolution.
- **Consider a Bug Bounty Program:** To incentivize community involvement in identifying and reporting bugs, explore implementing a bug bounty program. This can help uncover hidden issues and improve the overall software quality.

## Daily Reports
Here are the daily reports for this week:

- [report_050642](daily/2025-01-28/report_050642.md)
- [report_130931](daily/2025-01-28/report_130931.md)
- [report_210619](daily/2025-01-28/report_210619.md)
- [report_210606](daily/2025-01-29/report_210606.md)
- [report_050716](daily/2025-01-30/report_050716.md)
- [report_210553](daily/2025-01-30/report_210553.md)
- [report_130914](daily/2025-01-30/report_130914.md)
