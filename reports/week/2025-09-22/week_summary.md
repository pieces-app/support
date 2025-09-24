# Support Ticket Report
- Generated: 2025-09-24 13:15:29
- Period: 2025-09-22 to 2025-09-24

## Summary
- **Total Tickets:** 8
- **Resolved:** 2
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#852](https://github.com/pieces-app/support/issues/852) | Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading | 11.32 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 6.51 |
| [#860](https://github.com/pieces-app/support/issues/860) | Detected multiple PiecesOS installations | 6.24 |
| [#859](https://github.com/pieces-app/support/issues/859) | Detected multiple PiecesOS installations | 6.00 |
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 5.69 |

## Common Issues
### 1. Pieces fails to start on Linux and Windows after update
Users report Pieces OS and Desktop app failing to start after recent updates on both Windows 11 and Ubuntu 24.04. Windows users see "Ensure Core Dependencies" error, while Ubuntu users experience crashes. Logs indicate potential XCB/GTK issues on Ubuntu and dependency problems on Windows. Reinstallation has not resolved the issue for affected users. Further investigation into dependency management and OS compatibility is needed.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Pieces OS fails to start or initialize core services
Users on MacOS and Linux experience issues with Pieces OS after installation.  Symptoms include "Retry Step" at "Ensure core dependencies" stage, failure to connect to Pieces OS with "Internal Server Error" or "UnauthenticatedUserException".  Check Pieces OS logs, ensure network connectivity, and reinstall if necessary.

**Related Issues:**
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#863](https://github.com/pieces-app/support/issues/863): Unable to open Pieces Core Services
- [#855](https://github.com/pieces-app/support/issues/855): Unable to open Pieces Core Services

### 3. Multiple PiecesOS Installations Detected
Multiple PiecesOS installations detected on Windows 10 machines, causing installation failures.  Users need to uninstall all but one PiecesOS installation via "Add or Remove Programs" to resolve the issue. The affected users are running different Windows 10 builds and hardware configurations.

**Related Issues:**
- [#860](https://github.com/pieces-app/support/issues/860): Detected multiple PiecesOS installations
- [#859](https://github.com/pieces-app/support/issues/859): Detected multiple PiecesOS installations
- [#862](https://github.com/pieces-app/support/issues/862): Detected multiple PiecesOS installations

### 4. Pieces Core Services Failing to Open
Users are unable to open Pieces Core Services across macOS and Windows.  macOS errors include Internal Server Error (500) and UnauthenticatedUserException. Windows error indicates multiple PiecesOS installations. Verify single installation and proper authentication. Check server status for 500 errors.

**Related Issues:**
- [#863](https://github.com/pieces-app/support/issues/863): Unable to open Pieces Core Services
- [#855](https://github.com/pieces-app/support/issues/855): Unable to open Pieces Core Services
- [#860](https://github.com/pieces-app/support/issues/860): Detected multiple PiecesOS installations


## Recommendations
- Prioritize resolving the "Pieces fails to start" issue on Linux and Windows, focusing on dependency management and OS compatibility.
- Investigate and address the root cause of Pieces OS failing to start or initialize core services, particularly the "Retry Step" issue and authentication failures on MacOS and Linux.
- Provide clear instructions or an automated tool to help users with multiple PiecesOS installations on Windows 10, guiding them through the uninstallation process.
- Improve error messaging and logging for Pieces Core Services failures to aid in faster diagnosis and resolution.
- Consider increasing support capacity or prioritizing tickets related to startup failures, given their high activity levels and impact on user experience.

## Daily Reports
Here are the daily reports for this week:

- [report_210626](daily/2025-09-23/report_210626.md)
- [report_131357](daily/2025-09-23/report_131357.md)
- [report_131415](daily/2025-09-24/report_131415.md)
