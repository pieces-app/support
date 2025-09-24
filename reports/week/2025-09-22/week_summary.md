# Support Ticket Report
- Generated: 2025-09-24 05:08:48
- Period: 2025-09-22 to 2025-09-24

## Summary
- **Total Tickets:** 7
- **Resolved:** 2
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#852](https://github.com/pieces-app/support/issues/852) | Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading | 11.32 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 6.51 |
| [#860](https://github.com/pieces-app/support/issues/860) | Detected multiple PiecesOS installations | 6.24 |
| [#859](https://github.com/pieces-app/support/issues/859) | Detected multiple PiecesOS installations | 6.00 |
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 5.73 |

## Common Issues
### 1. Pieces fails to start on Linux and Windows after update
Users report Pieces OS and Desktop app failing to start after recent updates on both Windows 11 and Ubuntu 24.04. Windows users see "Ensure Core Dependencies" error, while Ubuntu users experience crashes. Logs indicate potential XCB/GTK issues on Ubuntu and dependency problems on Windows. Reinstallation doesn't resolve the issue.  Further investigation into Pieces OS dependencies and compatibility with latest OS versions is needed.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Multiple PiecesOS Installations Detected
Multiple PiecesOS installations detected on Windows 10 machines, causing installation failures.  Users need to uninstall all but one PiecesOS installation via "Add or Remove Programs" to resolve the issue. The affected users are running different Windows 10 builds and hardware configurations.

**Related Issues:**
- [#860](https://github.com/pieces-app/support/issues/860): Detected multiple PiecesOS installations
- [#859](https://github.com/pieces-app/support/issues/859): Detected multiple PiecesOS installations
- [#862](https://github.com/pieces-app/support/issues/862): Detected multiple PiecesOS installations

### 3. Pieces OS installation and startup failures
Users are experiencing issues with Pieces OS installation and startup across different operating systems (Linux, macOS, Windows). Problems include "Ensure core dependencies" step failing, "UnauthenticatedUserException" errors, and multiple installation detection errors.  Check for proper authentication, dependency installation, and ensure only one instance of Pieces OS is installed. Review logs for more specific error messages.

**Related Issues:**
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#855](https://github.com/pieces-app/support/issues/855): Unable to open Pieces Core Services
- [#860](https://github.com/pieces-app/support/issues/860): Detected multiple PiecesOS installations


## Recommendations
- Prioritize resolving the 'Pieces fails to start' issue on Linux and Windows, focusing on dependency conflicts and XCB/GTK issues on Ubuntu.
- Create a troubleshooter or automated script to detect and resolve multiple PiecesOS installations on Windows.
- Improve the 'Ensure Core Dependencies' step in the installation process to provide more specific error messages and potential solutions.
- Investigate the 'UnauthenticatedUserException' error on macOS and ensure proper authentication mechanisms are in place.
- Proactively monitor and address Pieces OS installation and startup failures across all operating systems.

## Daily Reports
Here are the daily reports for this week:

- [report_210626](daily/2025-09-23/report_210626.md)
- [report_131357](daily/2025-09-23/report_131357.md)
