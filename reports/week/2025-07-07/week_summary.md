# Support Ticket Report
- Generated: 2025-07-08 05:10:06
- Period: 2025-07-07 to 2025-07-08

## Summary
- **Total Tickets:** 11
- **Resolved:** 2
- **Open:** 9

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#773](https://github.com/pieces-app/support/issues/773) | Unable to open Pieces Core Services | 6.83 |
| [#787](https://github.com/pieces-app/support/issues/787) | Unable to open Pieces Copilot Service | 4.50 |
| [#769](https://github.com/pieces-app/support/issues/769) | An error occurred in the authentication flow. | 3.97 |
| [#763](https://github.com/pieces-app/support/issues/763) | Workstream activity can't update last week tasks | 3.96 |
| [#784](https://github.com/pieces-app/support/issues/784) | Pieces desktop (MacOS) won't update | 3.88 |

## Common Issues
### 1. Pieces macOS App and Raycast Extension Update Issues
Users are experiencing issues with the Pieces macOS app and its Raycast extension. The app update process gets stuck in a loop, and the extension is incompatible with recent Raycast versions, displaying error messages.  This suggests potential bugs in the update mechanism and version compatibility checks.  Users should try reinstalling the app and extension or check for manual update options.

**Related Issues:**
- [#781](https://github.com/pieces-app/support/issues/781): Raycast Extension Incompatible with Current Version of Raycast
- [#784](https://github.com/pieces-app/support/issues/784): Pieces desktop (MacOS) won't update
- [#787](https://github.com/pieces-app/support/issues/787): Unable to open Pieces Copilot Service

### 2. Pieces Desktop App on macOS update issues
Users are experiencing problems updating the Pieces desktop app on macOS.  Symptoms include the app reporting it's out of date, update checks failing or looping, and workstream activities not updating.  This affects various Pieces OS versions.  Check for existing reported issues and ensure a stable internet connection. Further troubleshooting may be required.

**Related Issues:**
- [#763](https://github.com/pieces-app/support/issues/763): Workstream activity can't update last week tasks
- [#770](https://github.com/pieces-app/support/issues/770): verify dependiencies
- [#784](https://github.com/pieces-app/support/issues/784): Pieces desktop (MacOS) won't update

### 3. Authentication error on new Pieces install
Users are encountering "An error occurred in the authentication flow" on new Pieces installations.  This occurs on Windows and MacOS during initial sign-in.  Changing browsers, reinstalling, and checking firewall settings have not resolved the issue.  Logs indicate a potential websocket connection failure with Pieces Core Services (HTTP 404).

**Related Issues:**
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services
- [#783](https://github.com/pieces-app/support/issues/783): Unable to open Pieces Core Services

### 4. Pieces Core Services Fails to Open Due to WebSocket Error
Multiple users reported a WebSocketException with a 404 HTTP status code when attempting to open Pieces Core Services. The connection to 'http://127.0.0.1:39300/user/last_checked_in/stream#' fails to upgrade to a WebSocket.  This issue occurs across different operating systems (MacOS, Windows) and Pieces OS IDs.  Further investigation into the server-side WebSocket configuration and potential network connectivity issues is required.

**Related Issues:**
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services
- [#783](https://github.com/pieces-app/support/issues/783): Unable to open Pieces Core Services
- [#785](https://github.com/pieces-app/support/issues/785): Unable to open Pieces Core Services

### 5. Pieces Core Services Fails to Open Due to WebSocket Error
Multiple users reported a WebSocketException with a 404 HTTP status code when attempting to open Pieces Core Services. The connection to 'http://127.0.0.1:39300/user/last_checked_in/stream#' fails to upgrade to a websocket.  The issue appears on both macOS and Windows.  Further investigation into the server-side websocket configuration and Pieces Core Services installation is needed.

**Related Issues:**
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services
- [#783](https://github.com/pieces-app/support/issues/783): Unable to open Pieces Core Services
- [#785](https://github.com/pieces-app/support/issues/785): Unable to open Pieces Core Services


## Recommendations
- Prioritize resolving the "Unable to open Pieces Core Services" issue, given its high frequency and impact on users. Investigate the root cause of the WebSocketException and 404 error.
- Address the Pieces macOS app and Raycast extension update issues.  Ensure a smooth update process and compatibility with the latest Raycast version.
- Investigate the authentication flow error ("An error occurred in the authentication flow") impacting new installations on Windows and macOS. Review logs and server-side authentication processes.
- Improve communication with users experiencing update issues and authentication errors. Provide clear troubleshooting steps or workarounds.
- Monitor the workstream activity update issue and determine if it's related to the broader update problems.

## Daily Reports
Here are the daily reports for this week:

- [report_050842](daily/2025-07-08/report_050842.md)
