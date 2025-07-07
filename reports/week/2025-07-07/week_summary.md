# Support Ticket Report
- Generated: 2025-07-07 13:18:25
- Period: 2025-07-07 to 2025-07-07

## Summary
- **Total Tickets:** 7
- **Resolved:** 2
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#773](https://github.com/pieces-app/support/issues/773) | Unable to open Pieces Core Services | 7.30 |
| [#787](https://github.com/pieces-app/support/issues/787) | Unable to open Pieces Copilot Service | 5.68 |
| [#785](https://github.com/pieces-app/support/issues/785) | Unable to open Pieces Core Services | 4.50 |
| [#786](https://github.com/pieces-app/support/issues/786) | Unable to open Pieces Core Services | 4.50 |
| [#782](https://github.com/pieces-app/support/issues/782) | Unable to open Pieces Core Services | 3.01 |

## Common Issues
### 1. Raycast Extension Incompatibility
Users are experiencing incompatibility issues with the Pieces Raycast extension and recent Raycast versions (1.100.3+).  The extension triggers an update error message.  This might be related to Pieces OS and its core services, as some users report websocket connection failures and issues with Pieces Copilot.  Check for Pieces OS and Raycast extension updates.

**Related Issues:**
- [#781](https://github.com/pieces-app/support/issues/781): Raycast Extension Incompatible with Current Version of Raycast
- [#787](https://github.com/pieces-app/support/issues/787): Unable to open Pieces Copilot Service
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services

### 2. Pieces Core Services Fails to Open Due to WebSocket Error
Multiple users reported a WebSocketException with a 404 HTTP status code when attempting to open Pieces Core Services. The connection to 'http://127.0.0.1:39300/user/last_checked_in/stream#' fails to upgrade to a WebSocket.  This issue occurs across different operating systems (MacOS, Windows) and Pieces OS IDs.  Further investigation into the server-side WebSocket configuration and network connectivity is needed.

**Related Issues:**
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services
- [#783](https://github.com/pieces-app/support/issues/783): Unable to open Pieces Core Services
- [#785](https://github.com/pieces-app/support/issues/785): Unable to open Pieces Core Services

### 3. Pieces Core Services Fails to Open Due to WebSocket Error
Multiple users reported a WebSocketException with a 404 HTTP status code when attempting to open Pieces Core Services. The connection to 'http://127.0.0.1:39300/user/last_checked_in/stream#' fails to upgrade to a websocket.  The issue appears on both macOS and Windows. Suggested troubleshooting includes checking Pieces OS installation, network connectivity, and firewall settings. Reinstallation of Pieces OS might also resolve the issue.

**Related Issues:**
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services
- [#783](https://github.com/pieces-app/support/issues/783): Unable to open Pieces Core Services
- [#785](https://github.com/pieces-app/support/issues/785): Unable to open Pieces Core Services

### 4. Pieces Core Services Fails to Open Due to WebSocket Error
Multiple users reported a WebSocketException with a 404 HTTP status code when attempting to open Pieces Core Services. The connection to 'http://127.0.0.1:39300/user/last_checked_in/stream#' fails to upgrade to a websocket.  The issue appears on both macOS and Windows.  Further investigation into the server and websocket configuration is needed. Ensure the Pieces Core Services application is running and check the firewall settings.

**Related Issues:**
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services
- [#783](https://github.com/pieces-app/support/issues/783): Unable to open Pieces Core Services
- [#785](https://github.com/pieces-app/support/issues/785): Unable to open Pieces Core Services


## Recommendations
- Prioritize resolving the WebSocketException causing Pieces Core Services to fail. This appears to be the most frequent and impactful issue across multiple platforms.
- Investigate Raycast Extension incompatibility issues, focusing on recent Raycast versions and potential conflicts with Pieces OS core services.
- Improve error messaging and logging for Pieces Core Services and Raycast Extension to aid in faster diagnosis and resolution.
- Consider adding troubleshooting steps to the FAQ or knowledge base for common issues like WebSocket errors and extension incompatibility.
- Monitor support tickets for emerging trends and proactively address recurring problems.

## Daily Reports
Here are the daily reports for this week:

- [report_131646](daily/2025-07-07/report_131646.md)
