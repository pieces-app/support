# Support Ticket Report
- Generated: 2025-09-23 13:15:00
- Period: 2025-09-22 to 2025-09-23

## Summary
- **Total Tickets:** 5
- **Resolved:** 2
- **Open:** 3

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#852](https://github.com/pieces-app/support/issues/852) | Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading | 11.50 |
| [#860](https://github.com/pieces-app/support/issues/860) | Detected multiple PiecesOS installations | 7.25 |
| [#859](https://github.com/pieces-app/support/issues/859) | Detected multiple PiecesOS installations | 6.68 |
| [#862](https://github.com/pieces-app/support/issues/862) | Detected multiple PiecesOS installations | 4.42 |
| [#855](https://github.com/pieces-app/support/issues/855) | Unable to open Pieces Core Services | 3.76 |

## Common Issues
### 1. Pieces OS/Desktop Startup Failure After Update
Users report Pieces OS and Desktop failing to start after an update, stuck at "Ensure Core Dependencies" screen on Windows.  Issue persists despite reinstallation. Logs indicate potential service failure and authentication issues.  Possible solutions include verifying Pieces OS service status, checking user authentication, and as a last resort, removing all Pieces data/configurations before reinstalling.

**Related Issues:**
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#855](https://github.com/pieces-app/support/issues/855): Unable to open Pieces Core Services
- [#860](https://github.com/pieces-app/support/issues/860): Detected multiple PiecesOS installations

### 2. Multiple PiecesOS installations detected
Multiple PiecesOS installations on Windows 10 systems are causing installation failures.  The error message suggests uninstalling all but one PiecesOS installation via "Add or Remove Programs" to resolve the issue. Affected users are running different Windows 10 builds and hardware configurations.

**Related Issues:**
- [#860](https://github.com/pieces-app/support/issues/860): Detected multiple PiecesOS installations
- [#859](https://github.com/pieces-app/support/issues/859): Detected multiple PiecesOS installations
- [#862](https://github.com/pieces-app/support/issues/862): Detected multiple PiecesOS installations

### 3. Multiple PiecesOS Installations Detected
Two Windows users encountered an error indicating multiple PiecesOS installations. This can lead to data corruption.  Users should uninstall all but one installation through "Add or Remove Programs" to resolve the issue.  A macOS user reported being unable to open Pieces Core Services due to an UnauthenticatedUserException. Further investigation is needed for this case.

**Related Issues:**
- [#855](https://github.com/pieces-app/support/issues/855): Unable to open Pieces Core Services
- [#860](https://github.com/pieces-app/support/issues/860): Detected multiple PiecesOS installations
- [#859](https://github.com/pieces-app/support/issues/859): Detected multiple PiecesOS installations


## Recommendations
- Investigate the "Pieces OS/Desktop Startup Failure After Update" issue, focusing on Windows and the "Ensure Core Dependencies" error.  Prioritize solutions like verifying Pieces OS service status and user authentication.
- Address the multiple PiecesOS installations issue on Windows 10 by improving the installer to prevent or handle multiple installations more gracefully.
- Investigate the "Unable to open Pieces Core Services" issue on macOS, specifically the UnauthenticatedUserException error.

## Daily Reports
Here are the daily reports for this week:

- [report_131357](daily/2025-09-23/report_131357.md)
