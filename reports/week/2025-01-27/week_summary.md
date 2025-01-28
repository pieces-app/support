# Support Ticket Report
- Generated: 2025-01-28 05:07:42
- Period: 2025-01-27 to 2025-01-28

## Summary
- **Total Tickets:** 6
- **Resolved:** 1
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 6.38 |
| [#601](https://github.com/pieces-app/support/issues/601) | How to change the font of the linux app? | 5.68 |
| [#597](https://github.com/pieces-app/support/issues/597) | Getting an error of Route not found error | 5.60 |
| [#598](https://github.com/pieces-app/support/issues/598) | Ensure core dependencies need help asap | 5.50 |
| [#590](https://github.com/pieces-app/support/issues/590) | Non-dismissable overlay message. | 3.38 |

## Common Issues
### 1. Pieces OS Connection Issues
Users are experiencing difficulties connecting to Pieces OS, encountering errors like "Connection refused" or "Route not found" when accessing the endpoint. This is often due to using the incorrect port. Pieces OS dynamically assigns ports, starting from 39300. Solutions involve identifying the correct port by checking log files or using port scanning techniques.

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 2. Pieces OS launch errors and font customization
Users report issues with Pieces OS failing to launch, encountering "Ensure core dependencies" errors. Troubleshooting steps and potential solutions are being explored. Additionally, users seek font customization options for the Pieces Copilot chat and sidebar, a feature currently unavailable but under consideration for future development.

**Related Issues:**
- [#601](https://github.com/pieces-app/support/issues/601): How to change the font of the linux app?
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap

### 3. Pieces OS fails to launch on Windows
Users are reporting that Pieces OS (versions 11.0.3 and 11.0.4) on Windows fails to launch, getting stuck on "Ensure core dependencies" step. This seems to be related to Pieces Core Services failing to start. Proposed solutions include checking for updates, restarting the computer, and contacting Pieces support for live troubleshooting.

**Related Issues:**
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.


## Recommendations
- **Prioritize Pieces OS Connection Issues:** Focus on resolving the root cause of connection problems with Pieces OS, such as the dynamic port assignment.  Consider a more user-friendly way to identify the correct port or improve error messages.
- **Investigate Pieces OS Launch Errors:** Address the "Ensure core dependencies" error preventing Pieces OS launch on Windows. This may require debugging Pieces Core Services startup.
- **Improve Documentation for Common Issues:** Create or update documentation that clearly explains how to troubleshoot Pieces OS connection problems and launch errors. Include steps to identify the correct port and solutions for common error messages.
- **Consider Font Customization:** Explore the feasibility of adding font customization options for the Pieces Copilot chat and sidebar based on user feedback.
- **Gather More Information on Launch Errors:**  For the "Ensure core dependencies" error, collect more detailed logs and system information to help identify the root cause and provide more specific solutions. 

## Daily Reports
Here are the daily reports for this week:

- [report_050642](daily/2025-01-28/report_050642.md)
