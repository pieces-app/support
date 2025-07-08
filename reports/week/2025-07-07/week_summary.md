# Support Ticket Report
- Generated: 2025-07-08 21:08:53
- Period: 2025-07-07 to 2025-07-08

## Summary
- **Total Tickets:** 12
- **Resolved:** 2
- **Open:** 10

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#790](https://github.com/pieces-app/support/issues/790) | com.pieces.os does not exist | 6.94 |
| [#773](https://github.com/pieces-app/support/issues/773) | Unable to open Pieces Core Services | 6.47 |
| [#769](https://github.com/pieces-app/support/issues/769) | An error occurred in the authentication flow. | 4.25 |
| [#763](https://github.com/pieces-app/support/issues/763) | Workstream activity can't update last week tasks | 3.96 |
| [#787](https://github.com/pieces-app/support/issues/787) | Unable to open Pieces Copilot Service | 3.88 |

## Common Issues
### 1. Pieces OS installation and connection issues
Users are experiencing problems with Pieces OS installation, integration with other apps, and authentication. Issues include missing com.pieces.os directory, authentication flow errors, and websocket connection failures.  Reinstallation, checking firewall settings, and verifying Pieces OS version compatibility are suggested troubleshooting steps.

**Related Issues:**
- [#790](https://github.com/pieces-app/support/issues/790): com.pieces.os does not exist
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services

### 2. Pieces macOS app and Raycast extension update issues
Users are experiencing issues with the Pieces macOS app and its Raycast extension. The app update process gets stuck in a loop, and the extension is incompatible with recent Raycast versions, displaying error messages.  This suggests potential bugs in the update mechanism and version compatibility checks.

**Related Issues:**
- [#781](https://github.com/pieces-app/support/issues/781): Raycast Extension Incompatible with Current Version of Raycast
- [#784](https://github.com/pieces-app/support/issues/784): Pieces desktop (MacOS) won't update
- [#787](https://github.com/pieces-app/support/issues/787): Unable to open Pieces Copilot Service

### 3. Pieces Desktop App on macOS update issues
Users are experiencing problems updating the Pieces desktop app on macOS.  Symptoms include the app reporting it's out of date, update checks failing or looping, and inability to update past workstream activities.  Issues have been reported across various Pieces OS versions. Further investigation is needed to identify the root cause and provide a solution.

**Related Issues:**
- [#763](https://github.com/pieces-app/support/issues/763): Workstream activity can't update last week tasks
- [#770](https://github.com/pieces-app/support/issues/770): verify dependiencies
- [#784](https://github.com/pieces-app/support/issues/784): Pieces desktop (MacOS) won't update

### 4. Pieces Core Services Fails to Open Due to WebSocket Error
Multiple users reported a WebSocketException with a 404 HTTP status code when attempting to open Pieces Core Services. The connection to 'http://127.0.0.1:39300/user/last_checked_in/stream#' fails to upgrade to a WebSocket.  The issue appears on both macOS and Windows. Suggested troubleshooting includes checking Pieces Core Services installation, network connectivity, and firewall settings.

**Related Issues:**
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services
- [#783](https://github.com/pieces-app/support/issues/783): Unable to open Pieces Core Services
- [#785](https://github.com/pieces-app/support/issues/785): Unable to open Pieces Core Services

### 5. Pieces Core Services Fails to Open Due to WebSocket Error
Multiple users reported a WebSocketException with a 404 HTTP status code when attempting to open Pieces Core Services. The connection to 'http://127.0.0.1:39300/user/last_checked_in/stream#' fails to upgrade to a WebSocket.  Affected operating systems include macOS and Windows.  The issue may stem from server-side problems or incorrect client configuration. Check server status, network connectivity, and firewall settings.

**Related Issues:**
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services
- [#783](https://github.com/pieces-app/support/issues/783): Unable to open Pieces Core Services
- [#785](https://github.com/pieces-app/support/issues/785): Unable to open Pieces Core Services


## Recommendations
- Prioritize resolving the "Pieces OS installation and connection issues" as it has the highest frequency and significant user impact. Investigate the root cause of the com.pieces.os directory not being created during installation, authentication flow errors, and websocket connection failures.
- Address the "Pieces macOS app and Raycast extension update issues" by fixing the app update loop and ensuring compatibility with the latest Raycast version. This will improve user experience and reduce support tickets related to updates.
- Investigate and resolve the "Pieces Core Services Fails to Open Due to WebSocket Error" across macOS and Windows.  This appears to be a critical issue affecting multiple users and impacting core functionality.
- Improve the update mechanism for the Pieces Desktop App on macOS to prevent issues with update checks failing or looping. Ensure clear communication to users about the update process and provide troubleshooting steps if needed.
- Review and update documentation regarding Pieces OS installation, integration with other apps, and troubleshooting common issues. This will empower users to self-resolve problems and reduce the support burden.

## Daily Reports
Here are the daily reports for this week:

- [report_131730](daily/2025-07-08/report_131730.md)
- [report_210712](daily/2025-07-08/report_210712.md)
- [report_050842](daily/2025-07-08/report_050842.md)
