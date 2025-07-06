# Support Ticket Report
- Generated: 2025-07-06 21:09:01
- Period: 2025-06-30 to 2025-07-06

## Summary
- **Total Tickets:** 19
- **Resolved:** 7
- **Open:** 12

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#774](https://github.com/pieces-app/support/issues/774) | Unable to open Pieces Core Services | 7.12 |
| [#315](https://github.com/pieces-app/support/issues/315) | Pieces desktop application is very slow/laggy, not generating any response in copilot chat. | 6.84 |
| [#775](https://github.com/pieces-app/support/issues/775) | Unable to open Pieces Core Services | 6.59 |
| [#773](https://github.com/pieces-app/support/issues/773) | Unable to open Pieces Core Services | 5.88 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 4.89 |

## Common Issues
### 1. Pieces Desktop App Performance Issues
Users are experiencing various performance issues with the Pieces desktop application, including update failures on macOS (version 12.1.0), slow response times and lag on Windows (version 10.0.1), and crashes when scrolling or moving the window to another screen on Windows (versions 12.0.0 and 4.2.1).  Further investigation is needed to identify the root causes and potential solutions.

**Related Issues:**
- [#784](https://github.com/pieces-app/support/issues/784): Pieces desktop (MacOS) won't update
- [#315](https://github.com/pieces-app/support/issues/315): Pieces desktop application is very slow/laggy, not generating any response in copilot chat.
- [#771](https://github.com/pieces-app/support/issues/771): Crash when scrolling or moving a window to another screen

### 2. Pieces OS and Ollama Installation and Feature Issues
Users are experiencing problems with Pieces OS, including Ollama installation failures on Linux, Long-Term Memory feature unavailability on Linux despite official support, and WebSocket connection errors preventing access to Pieces Core Services on Windows.  The issues may stem from software bugs, version incompatibility, or local configuration problems. Check for updates, reinstall affected components, and verify network connectivity.

**Related Issues:**
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux
- [#786](https://github.com/pieces-app/support/issues/786): Unable to open Pieces Core Services

### 3. Pieces Core Services/Copilot 404 WebSocket Connection Failure
Users across macOS and Windows experience 404 errors when Pieces Copilot or Core Services attempt a WebSocket connection to 'http://127.0.0.1:39300/user/last_checked_in/stream#'.  The issue may stem from server-side problems, firewall restrictions, or incorrect port configurations. Verify Pieces OS is running and the port is accessible. Check firewall settings and ensure the WebSocket URL is correct in the client application.

**Related Issues:**
- [#787](https://github.com/pieces-app/support/issues/787): Unable to open Pieces Copilot Service
- [#786](https://github.com/pieces-app/support/issues/786): Unable to open Pieces Core Services
- [#785](https://github.com/pieces-app/support/issues/785): Unable to open Pieces Core Services

### 4. Pieces Core Services Fails to Open Due to WebSocket Error
Users across different operating systems (Windows, macOS) are unable to open Pieces Core Services.  A WebSocketException occurs with a 404 error when attempting to connect to 'http://127.0.0.1:39300/user/last_checked_in/stream#'. The PiecesOS version is unknown, but installations appear successful.  Check PiecesOS installation and local port configuration.

**Related Issues:**
- [#786](https://github.com/pieces-app/support/issues/786): Unable to open Pieces Core Services
- [#785](https://github.com/pieces-app/support/issues/785): Unable to open Pieces Core Services
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services

### 5. Pieces Core Services Fails to Open Due to WebSocket Error
Users across different operating systems (Windows, macOS) are unable to open Pieces Core Services.  A WebSocketException occurs with a 404 error when attempting to connect to 'http://127.0.0.1:39300/user/last_checked_in/stream#'. The PiecesOS version is unknown, but the minimum and maximum supported versions are consistent across reports.  Further investigation into the backend service and network connectivity is needed.

**Related Issues:**
- [#786](https://github.com/pieces-app/support/issues/786): Unable to open Pieces Core Services
- [#785](https://github.com/pieces-app/support/issues/785): Unable to open Pieces Core Services
- [#782](https://github.com/pieces-app/support/issues/782): Unable to open Pieces Core Services


## Recommendations
- Prioritize resolving the "Unable to open Pieces Core Services" issue, given its high frequency and activity level across multiple operating systems. Investigate potential root causes such as server-side problems, firewall restrictions, or incorrect port configurations.
- Address the performance issues with the Pieces desktop application, particularly the update failures on macOS, slow response times on Windows, and crashes when scrolling or moving the window. This will improve user experience and reduce support tickets related to performance.
- Investigate and resolve the Ollama installation failures on Linux and the unavailability of the Long-Term Memory feature on Linux, as these affect the functionality and user experience on that platform.
- Provide clearer documentation or troubleshooting steps for common issues, such as WebSocket connection errors and installation problems, to empower users to resolve these issues independently and reduce the support load.
- Consider implementing error logging and monitoring to proactively identify and address issues before they are reported by users. This can help reduce the number of reactive support tickets.

## Daily Reports
Here are the daily reports for this week:

- [report_050918](daily/2025-07-02/report_050918.md)
- [report_131641](daily/2025-07-02/report_131641.md)
- [report_210653](daily/2025-07-02/report_210653.md)
- [report_210649](daily/2025-07-03/report_210649.md)
- [report_131520](daily/2025-07-03/report_131520.md)
- [report_051018](daily/2025-07-03/report_051018.md)
- [report_210624](daily/2025-07-04/report_210624.md)
- [report_131532](daily/2025-07-04/report_131532.md)
- [report_210715](daily/2025-07-05/report_210715.md)
- [report_050721](daily/2025-07-05/report_050721.md)
- [report_131241](daily/2025-07-05/report_131241.md)
- [report_210626](daily/2025-07-06/report_210626.md)
