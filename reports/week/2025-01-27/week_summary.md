# Support Ticket Report
- Generated: 2025-02-02 05:08:02
- Period: 2025-01-27 to 2025-02-02

## Summary
- **Total Tickets:** 13
- **Resolved:** 6
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#606](https://github.com/pieces-app/support/issues/606) | LTM cannot see code inside a sandbox in the browser | 5.50 |
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 5.35 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 5.28 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.67 |
| [#608](https://github.com/pieces-app/support/issues/608) | Models Download Fail | 4.42 |

## Common Issues
### 1. PiecesOS Resource Usage and Sandbox Issues
Users report high RAM/CPU usage with PiecesOS, potentially linked to internet connectivity or Live Context.  Additionally, sandboxed environments lack certain dependencies (like 'curl') hindering functionality like Ollama installation.  Proposed solutions include memory optimizations, dependency inclusion in sandbox environments, and bug fixes in future releases.

**Related Issues:**
- [#606](https://github.com/pieces-app/support/issues/606): LTM cannot see code inside a sandbox in the browser
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux

### 2. Ollama Installation Failures in Pieces OS
Users are experiencing issues installing and using Ollama within the Pieces OS desktop application across different operating systems.  This seems to stem from missing dependencies within the Pieces OS sandbox environment, such as 'curl', preventing Ollama from properly installing or interacting with locally downloaded models.  Proposed solutions involve updating the Pieces OS snap definition file to include the missing dependencies and ensuring Ollama can function within the sandbox.

**Related Issues:**
- [#608](https://github.com/pieces-app/support/issues/608): Models Download Fail
- [#605](https://github.com/pieces-app/support/issues/605): Ollama failed to install in pieces
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux

### 3. Pieces OS Connection and Performance Issues
Users report difficulties connecting to Pieces OS endpoints, encountering "Connection refused" and "Route not found" errors. This is often attributed to port configuration issues. Additionally, slow response times and accuracy concerns compared to alternatives like ChatGPT are raised. Solutions involve verifying port settings, reinstalling via Microsoft Store, and potential troubleshooting with Pieces support.

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 4. Early Access Program Dependency Errors
Users are experiencing issues with "Ensure core dependencies" error messages during the Early Access Program.  This is often resolved by reinstalling Pieces through the Microsoft Store, suggesting potential issues with the .appinstaller file or update mechanisms outside the store.

**Related Issues:**
- [#607](https://github.com/pieces-app/support/issues/607): Feat: Localization(french) for the Desktop Application
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap

### 5. Pieces Desktop App Update and Launch Issues
Users are experiencing issues with Pieces Desktop App updates and launching, particularly on Windows. Problems include non-dismissable overlay messages, failed automatic updates, and errors during startup. Proposed solutions involve checking startup configurations, reinstalling the app, and improving the update process for Microsoft Store installations.

**Related Issues:**
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug


## Recommendations
- **Prioritize Ollama Installation Issues:** Focus on resolving the recurring problems with Ollama installation across operating systems. This likely involves addressing the missing dependencies within the Pieces OS sandbox environment, specifically ensuring 'curl' is available.
- **Investigate and Address PiecesOS Resource Usage:** Allocate resources to investigate and address the reports of high RAM/CPU usage in PiecesOS. Explore memory optimization techniques, potential bug fixes, and clearer communication with users about resource-intensive features like Live Context.
- **Improve Pieces OS Connection Stability:** Investigate and address the root causes of connection errors, such as "Connection refused" and "Route not found." Ensure consistent port configuration and provide clear troubleshooting steps for users.
- **Review Early Access Program Update Mechanisms:** Investigate the "Ensure core dependencies" errors during the Early Access Program. Review the .appinstaller file functionality and update mechanisms outside of the Microsoft Store to ensure smooth update experiences.
- **Enhance Communication for Pieces Desktop App Issues:** Provide clearer instructions and solutions for common Pieces Desktop App issues, such as non-dismissable overlay messages and failed automatic updates. Consider improving in-app messaging and troubleshooting documentation.
- **Gather More Data on Slow Response Times:** While some users have reported slow response times, gather more data to understand the scope and potential causes. This may involve performance monitoring, user surveys, or A/B testing to compare with alternatives like ChatGPT.
- **Proactively Monitor and Address Emerging Issues:** Implement a system for proactively monitoring support tickets and community forums to identify and address emerging issues quickly. This can help prevent recurring problems and improve user satisfaction.

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
- [report_050613](daily/2025-02-02/report_050613.md)
