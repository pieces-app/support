# Support Ticket Report
- Generated: 2025-09-24 21:07:54
- Period: 2025-09-22 to 2025-09-24

## Summary
- **Total Tickets:** 8
- **Resolved:** 2
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#852](https://github.com/pieces-app/support/issues/852) | Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading | 10.72 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 6.49 |
| [#860](https://github.com/pieces-app/support/issues/860) | Detected multiple PiecesOS installations | 6.24 |
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 5.69 |
| [#863](https://github.com/pieces-app/support/issues/863) | Unable to open Pieces Core Services | 5.68 |

## Common Issues
### 1. Pieces fails to start on Linux and Windows after update
Users report Pieces OS and Desktop app failing to start after recent updates. On Windows, users encounter "Ensure Core Dependencies" error. On Linux, the app crashes at startup.  Reinstallation doesn't resolve the issue. Logs indicate potential conflicts with GTK+ versions on Linux and issues with Pieces OS service on Windows. Further investigation needed into dependency management and service stability.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Pieces OS fails to initialize or connect to core services
Users on Linux and MacOS encounter issues with Pieces OS after installation.  "Ensure core dependencies" step fails on Linux, while MacOS users experience "Unable to open Pieces Core Services" errors with messages like "Internal Server Error" or "UnauthenticatedUserException". Check Pieces OS logs, connectivity, and user authentication status. Reinstallation or updating Pieces OS might be necessary.

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
Multiple PiecesOS installations detected on Windows 10 systems, causing installation failures.  Users need to uninstall all but one PiecesOS installation via "Add or Remove Programs" to resolve the issue. Affected users are running different Windows 10 builds and hardware configurations.

**Related Issues:**
- [#860](https://github.com/pieces-app/support/issues/860): Detected multiple PiecesOS installations
- [#859](https://github.com/pieces-app/support/issues/859): Detected multiple PiecesOS installations
- [#862](https://github.com/pieces-app/support/issues/862): Detected multiple PiecesOS installations


## Recommendations
- Prioritize resolving the "Pieces fails to start" issue on Linux and Windows, focusing on dependency conflicts (GTK+ on Linux, Pieces OS service on Windows).
- Investigate "Pieces OS fails to initialize/connect" issue on Linux/MacOS, checking logs, connectivity, and authentication. Consider reinstallation/update solutions.
- Address multiple PiecesOS installations on Windows by improving installer logic or providing clearer uninstallation instructions.
- Review support tickets related to Pieces Core Services failing to open, especially the Internal Server Error (500) and UnauthenticatedUserException on macOS.

## Daily Reports
Here are the daily reports for this week:

- [report_210626](daily/2025-09-23/report_210626.md)
- [report_131357](daily/2025-09-23/report_131357.md)
- [report_210640](daily/2025-09-24/report_210640.md)
- [report_131415](daily/2025-09-24/report_131415.md)
