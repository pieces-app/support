# Support Ticket Report
- Generated: 2025-09-25 13:15:34
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
| [#860](https://github.com/pieces-app/support/issues/860) | Detected multiple PiecesOS installations | 6.38 |
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 5.66 |
| [#859](https://github.com/pieces-app/support/issues/859) | Detected multiple PiecesOS installations | 4.81 |

## Common Issues
### 1. Pieces fails to start on Linux and Windows after update
Users report Pieces OS and Desktop app failing to start after recent updates. On Windows, users see "Ensure Core Dependencies" error. On Linux, the app crashes at startup.  Reinstallation does not resolve the issue. Logs indicate potential conflicts with GTK+ versions on Linux and issues with Pieces OS service on Windows. Further investigation is needed into dependency management and service stability across platforms.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Pieces OS fails to start or initialize core services
Users on Linux and MacOS encounter issues with "Ensure core dependencies" step, failing to connect to Pieces OS or facing authentication errors.  Check Pieces OS logs, ensure network connectivity, and verify user authentication status. Reinstalling Pieces OS or updating to the latest version may resolve the issue.

**Related Issues:**
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#863](https://github.com/pieces-app/support/issues/863): Unable to open Pieces Core Services
- [#855](https://github.com/pieces-app/support/issues/855): Unable to open Pieces Core Services

### 3. Pieces Core Services Failing to Open
Users are unable to open Pieces Core Services across macOS and Windows. Errors include Internal Server Error (500), UnauthenticatedUserException, and multiple installations detected. Verify Pieces OS installation, user authentication, and network connectivity.  Uninstall duplicate installations on Windows.

**Related Issues:**
- [#863](https://github.com/pieces-app/support/issues/863): Unable to open Pieces Core Services
- [#855](https://github.com/pieces-app/support/issues/855): Unable to open Pieces Core Services
- [#860](https://github.com/pieces-app/support/issues/860): Detected multiple PiecesOS installations

### 4. Multiple PiecesOS Installations Detected
Multiple PiecesOS installations detected on Windows 10 machines, causing installation failures.  Users need to uninstall all but one PiecesOS installation via "Add or Remove Programs" to resolve the issue. The affected users are running different Windows 10 builds and hardware configurations.

**Related Issues:**
- [#860](https://github.com/pieces-app/support/issues/860): Detected multiple PiecesOS installations
- [#859](https://github.com/pieces-app/support/issues/859): Detected multiple PiecesOS installations
- [#862](https://github.com/pieces-app/support/issues/862): Detected multiple PiecesOS installations


## Recommendations
- Prioritize resolving the 'Pieces fails to start' issue on Linux and Windows, focusing on dependency conflicts (GTK+ on Linux, Pieces OS service on Windows).
- Investigate and address the root cause of 'Pieces OS fails to start or initialize core services' on Linux and MacOS, including authentication errors and network connectivity issues.
- Provide clear instructions or an automated tool to help Windows users uninstall duplicate PiecesOS installations.
- Improve error messaging and logging for Pieces OS and Desktop application to aid in faster diagnosis and resolution.
- Consider increasing support resources for Linux and MacOS, given the increasing number of issues reported on these platforms.

## Daily Reports
Here are the daily reports for this week:

- [report_131357](daily/2025-09-23/report_131357.md)
- [report_210626](daily/2025-09-23/report_210626.md)
- [report_210640](daily/2025-09-24/report_210640.md)
- [report_131415](daily/2025-09-24/report_131415.md)
- [report_131428](daily/2025-09-25/report_131428.md)
