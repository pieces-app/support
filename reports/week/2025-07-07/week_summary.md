# Support Ticket Report
- Generated: 2025-07-07 21:08:51
- Period: 2025-07-07 to 2025-07-07

## Summary
- **Total Tickets:** 11
- **Resolved:** 2
- **Open:** 9

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#773](https://github.com/pieces-app/support/issues/773) | Unable to open Pieces Core Services | 6.83 |
| [#787](https://github.com/pieces-app/support/issues/787) | Unable to open Pieces Copilot Service | 4.50 |
| [#781](https://github.com/pieces-app/support/issues/781) | Raycast Extension Incompatible with Current Version of Raycast | 4.06 |
| [#769](https://github.com/pieces-app/support/issues/769) | An error occurred in the authentication flow. | 3.97 |
| [#784](https://github.com/pieces-app/support/issues/784) | Pieces desktop (MacOS) won't update | 3.88 |

## Common Issues
### 1. Pieces macOS app and Raycast extension update issues
Users are experiencing issues with the Pieces macOS app and its Raycast extension. The app update process gets stuck in a loop, and the extension is incompatible with recent Raycast versions, displaying error messages.  This suggests potential bugs in the update mechanism and version compatibility checks.

**Related Issues:**
- [#781](https://github.com/pieces-app/support/issues/781): Raycast Extension Incompatible with Current Version of Raycast
- [#784](https://github.com/pieces-app/support/issues/784): Pieces desktop (MacOS) won't update
- [#787](https://github.com/pieces-app/support/issues/787): Unable to open Pieces Copilot Service

### 2. Pieces Desktop App on macOS update issues
Users are experiencing problems updating the Pieces desktop app on macOS.  Symptoms include the inability to update workstream activities, app update failures getting stuck in a loop, and general slowness/restarting issues after attempted updates.  The issue appears across different Pieces OS versions.

**Related Issues:**
- [#763](https://github.com/pieces-app/support/issues/763): Workstream activity can't update last week tasks
- [#770](https://github.com/pieces-app/support/issues/770): verify dependiencies
- [#784](https://github.com/pieces-app/support/issues/784): Pieces desktop (MacOS) won't update

### 3. Authentication error on new Pieces install
Users are encountering "An error occurred in the authentication flow" on new Pieces installations.  The error occurs on initial sign-in attempts, regardless of browser.  Reinstallation, browser extension disabling, and firewall checks haven't resolved the issue.  The Pieces log file lacks clear solutions. The issue appears related to Pieces OS version 12.0.0 on Windows 11 and MacOS.

**Related Issues:**
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services
- [#783](https://github.com/pieces-app/support/issues/783): Unable to open Pieces Core Services

### 4. Pieces Core Services Fails to Open Due to WebSocket Error
Multiple users reported a WebSocketException with a 404 HTTP status code when attempting to open Pieces Core Services. The connection to 'http://127.0.0.1:39300/user/last_checked_in/stream#' fails to upgrade to a websocket.  This issue occurs across different operating systems (MacOS, Windows) and Pieces OS IDs.  Further investigation into the server-side websocket handling and potential network connectivity issues is recommended.

**Related Issues:**
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services
- [#783](https://github.com/pieces-app/support/issues/783): Unable to open Pieces Core Services
- [#785](https://github.com/pieces-app/support/issues/785): Unable to open Pieces Core Services

### 5. Pieces Core Services Fails to Open Due to WebSocket Error
Multiple users reported a WebSocketException with a 404 HTTP status code when attempting to open Pieces Core Services. The connection to 'http://127.0.0.1:39300/user/last_checked_in/stream#' fails to upgrade to a WebSocket.  This issue occurs across different operating systems (MacOS, Windows) and Pieces OS IDs.  Further investigation into the server-side WebSocket configuration and potential network connectivity issues is recommended.

**Related Issues:**
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services
- [#783](https://github.com/pieces-app/support/issues/783): Unable to open Pieces Core Services
- [#785](https://github.com/pieces-app/support/issues/785): Unable to open Pieces Core Services


## Recommendations
- Prioritize resolving the "Unable to open Pieces Core Services" issue, given its high frequency and activity level. Investigate the root cause of the WebSocketException and 404 error.
- Address the Pieces macOS app and Raycast extension update issues. Focus on fixing the update loop and ensuring compatibility with the latest Raycast version.
- Investigate and resolve the authentication flow error occurring on new Pieces installations. Check the authentication process, especially for new users on Windows and macOS.
- Improve communication with users experiencing update issues on macOS. Provide clear instructions or workarounds while a permanent fix is being developed.
- Monitor the status of resolved tickets to ensure the issues are truly fixed and do not reoccur.

## Daily Reports
Here are the daily reports for this week:

- [report_131646](daily/2025-07-07/report_131646.md)
- [report_210641](daily/2025-07-07/report_210641.md)
