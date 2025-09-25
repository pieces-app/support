# Support Ticket Report
- Generated: 2025-09-25 05:08:51
- Period: 2025-09-22 to 2025-09-25

## Summary
- **Total Tickets:** 8
- **Resolved:** 2
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#852](https://github.com/pieces-app/support/issues/852) | Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading | 10.72 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 6.49 |
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 5.69 |
| [#863](https://github.com/pieces-app/support/issues/863) | Unable to open Pieces Core Services | 5.68 |
| [#860](https://github.com/pieces-app/support/issues/860) | Detected multiple PiecesOS installations | 5.61 |

## Common Issues
### 1. Pieces fails to start on various platforms
Users report Pieces OS and Desktop app failing to start after updates on Windows, Linux, and Ubuntu. Symptoms include application crashes, "Ensure Core Dependencies" errors, and blank windows.  Suggested solutions include reinstalling, checking logs, and ensuring Pieces OS is running. Some users experience repeated data loss.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Pieces OS fails to initialize or connect to core services
Users on Linux and MacOS encounter issues with Pieces OS after installation.  Problems include "Ensure core dependencies" step failing with "Retry Step" message, and "Unable to open Pieces Core Services" errors with codes 500 (Internal Server Error) and UnauthenticatedUserException.  Check Pieces OS logs, ensure network connectivity, and verify user authentication.

**Related Issues:**
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#863](https://github.com/pieces-app/support/issues/863): Unable to open Pieces Core Services
- [#855](https://github.com/pieces-app/support/issues/855): Unable to open Pieces Core Services

### 3. Pieces Core Services Failing to Open
Users are unable to open Pieces Core Services across macOS and Windows.  macOS errors include Internal Server Error (500) and UnauthenticatedUserException. Windows reports multiple PiecesOS installations. Verify single installation and proper authentication. Check server status for 500 errors.

**Related Issues:**
- [#863](https://github.com/pieces-app/support/issues/863): Unable to open Pieces Core Services
- [#855](https://github.com/pieces-app/support/issues/855): Unable to open Pieces Core Services
- [#860](https://github.com/pieces-app/support/issues/860): Detected multiple PiecesOS installations

### 4. Multiple PiecesOS Installations Detected
Three support tickets report failed PiecesOS installations due to multiple existing installations.  The error message suggests uninstalling extra installations via "Add or Remove Programs" before retrying. Affected users are on Windows 10 (various builds) with different hardware configurations.  PiecesOS versions are unknown but require a minimum of 12.3.0 and a maximum of 13.0.0.

**Related Issues:**
- [#860](https://github.com/pieces-app/support/issues/860): Detected multiple PiecesOS installations
- [#859](https://github.com/pieces-app/support/issues/859): Detected multiple PiecesOS installations
- [#862](https://github.com/pieces-app/support/issues/862): Detected multiple PiecesOS installations


## Recommendations
- Prioritize resolving the "Pieces fails to start" issue across platforms (Windows, Linux, Ubuntu) by investigating application crashes, "Ensure Core Dependencies" errors, and blank windows. Address the repeated data loss problem reported by some users.
- Investigate and resolve the "Pieces OS fails to initialize or connect to core services" issue on Linux and MacOS, focusing on the "Ensure core dependencies" failure and "Unable to open Pieces Core Services" errors (500, UnauthenticatedUserException).
- Develop a troubleshooting guide or FAQ for users experiencing multiple PiecesOS installations on Windows, guiding them through the uninstallation process via "Add or Remove Programs".
- Improve error messaging and logging for Pieces OS and Desktop applications to provide more specific information for faster diagnosis and resolution.
- Consider implementing automated checks during installation to detect and prevent multiple PiecesOS installations.

## Daily Reports
Here are the daily reports for this week:

- [report_131357](daily/2025-09-23/report_131357.md)
- [report_210626](daily/2025-09-23/report_210626.md)
- [report_210640](daily/2025-09-24/report_210640.md)
- [report_131415](daily/2025-09-24/report_131415.md)
