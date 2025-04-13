# Support Ticket Report
- Generated: 2025-04-13 21:07:41
- Period: 2025-04-07 to 2025-04-13

## Summary
- **Total Tickets:** 5
- **Resolved:** 0
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#686](https://github.com/pieces-app/support/issues/686) | Pieces OS doesn't start because it's unable to open database due to corruption: LateInitializationError: Field 'database' has not been initialized. | 9.15 |
| [#685](https://github.com/pieces-app/support/issues/685) | Stuck at https://authentication.pieces.services/ | 8.50 |
| [#687](https://github.com/pieces-app/support/issues/687) | Application Crash on Startup | 6.94 |
| [#663](https://github.com/pieces-app/support/issues/663) | Kaspersky Internet Security flags Pieces OS as a virus | 3.70 |
| [#672](https://github.com/pieces-app/support/issues/672) | Invalid Port (at character 18) http://127.0.0.1:null/connect | 3.06 |

## Common Issues
### 1. Pieces OS application crashes or login issues after update
Users are experiencing crashes on startup or getting stuck on the login page after updating to Pieces OS 11.3.0. This seems to affect macOS and Windows users. Proposed solutions include checking for database corruption, attempting login from the Pieces toolbar, and contacting support for real-time debugging.

**Related Issues:**
- [#687](https://github.com/pieces-app/support/issues/687): Application Crash on Startup
- [#686](https://github.com/pieces-app/support/issues/686): Pieces OS doesn't start because it's unable to open database due to corruption: LateInitializationError: Field 'database' has not been initialized.
- [#685](https://github.com/pieces-app/support/issues/685): Stuck at https://authentication.pieces.services/

### 2. Pieces OS fails to launch after update
Users are reporting Pieces OS failing to launch after updating to version 11.3.0 on Windows. Issues include database corruption errors, invalid port errors, and authentication issues. Proposed solutions involve checking log files, real-time debugging with support, and potential database resets.

**Related Issues:**
- [#672](https://github.com/pieces-app/support/issues/672): Invalid Port (at character 18) http://127.0.0.1:null/connect
- [#686](https://github.com/pieces-app/support/issues/686): Pieces OS doesn't start because it's unable to open database due to corruption: LateInitializationError: Field 'database' has not been initialized.
- [#685](https://github.com/pieces-app/support/issues/685): Stuck at https://authentication.pieces.services/

### 3. Pieces OS startup issues and errors
Users are experiencing issues with Pieces OS not starting due to antivirus software flagging it as malicious, database corruption, and dependency connection problems. Solutions include adding Pieces OS to antivirus allowlist, downloading from Microsoft Store, choosing a different antivirus, and reinstalling the application. Pieces team is actively investigating and working on solutions.

**Related Issues:**
- [#663](https://github.com/pieces-app/support/issues/663): Kaspersky Internet Security flags Pieces OS as a virus
- [#672](https://github.com/pieces-app/support/issues/672): Invalid Port (at character 18) http://127.0.0.1:null/connect
- [#686](https://github.com/pieces-app/support/issues/686): Pieces OS doesn't start because it's unable to open database due to corruption: LateInitializationError: Field 'database' has not been initialized.


## Recommendations
- **Prioritize database issues:** Investigate and address the root cause of database corruption errors, as they are causing launch failures and login issues in Pieces OS 11.3.0.
- **Review authentication flow:** Investigate the authentication pipeline, particularly the Google account linking process, to resolve the infinite loading issue on the authentication page.
- **Improve antivirus compatibility:** Collaborate with antivirus vendors like Kaspersky, Nod32, Malwarebytes, and ESET to address false positive detections of Pieces OS and minimize disruptions for users.
- **Enhance startup diagnostics:** Implement more robust error logging and diagnostics during startup to help identify the specific cause of issues like invalid port errors and dependency connection problems.
- **Provide clear workarounds:** Publish clear and concise workarounds for known issues, such as adding Pieces OS to antivirus allow lists, using the Microsoft Store version, and resetting databases, to minimize user downtime.
- **Consider database reset option:** Offer a safe and user-friendly option for resetting the Pieces OS database as a potential solution for users experiencing persistent database corruption issues.
- **Gather detailed system information:** During support interactions, request detailed system information, including OS version, hardware specs, and antivirus software, to aid in issue diagnosis and reproduction.

## Daily Reports
Here are the daily reports for this week:

- [report_210639](daily/2025-04-10/report_210639.md)
- [report_210621](daily/2025-04-11/report_210621.md)
- [report_130927](daily/2025-04-12/report_130927.md)
- [report_210609](daily/2025-04-12/report_210609.md)
- [report_131018](daily/2025-04-13/report_131018.md)
- [report_210635](daily/2025-04-13/report_210635.md)
