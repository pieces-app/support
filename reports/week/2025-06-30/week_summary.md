# Support Ticket Report
- Generated: 2025-07-02 21:08:09
- Period: 2025-06-30 to 2025-07-02

## Summary
- **Total Tickets:** 7
- **Resolved:** 0
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#315](https://github.com/pieces-app/support/issues/315) | Pieces desktop application is very slow/laggy, not generating any response in copilot chat. | 6.68 |
| [#773](https://github.com/pieces-app/support/issues/773) | Unable to open Pieces Core Services | 5.68 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 4.65 |
| [#775](https://github.com/pieces-app/support/issues/775) | Unable to open Pieces Core Services | 4.42 |
| [#774](https://github.com/pieces-app/support/issues/774) | Unable to open Pieces Core Services | 4.42 |

## Common Issues
### 1. Pieces desktop app performance issues and crashes
Users report slow performance, unresponsiveness, and crashes in the Pieces desktop app on Windows and macOS. Issues include lagging, Copilot chat failing, crashes when moving or scrolling the app window, and WebSocket connection failures.  Further investigation is needed to pinpoint the root cause and potential solutions across different operating systems and app versions.

**Related Issues:**
- [#315](https://github.com/pieces-app/support/issues/315): Pieces desktop application is very slow/laggy, not generating any response in copilot chat.
- [#771](https://github.com/pieces-app/support/issues/771): Crash when scrolling or moving a window to another screen
- [#773](https://github.com/pieces-app/support/issues/773): Unable to open Pieces Core Services

### 2. Pieces Core Services fails to open due to WebSocket connection failure
Multiple users reported Pieces Core Services failing to open with a "WebSocketException: Connection to 'http://127.0.0.1:39300/user/last_checked_in/stream#' was not upgraded to websocket, HTTP status code: 404" error.  This indicates an issue with the local Pieces Core Services server.  Users are on MacOS 15.5 with an Apple M2 processor. Suggested solutions include restarting Pieces OS, checking firewall settings, and ensuring Pieces Core Services is running.

**Related Issues:**
- [#773](https://github.com/pieces-app/support/issues/773): Unable to open Pieces Core Services
- [#775](https://github.com/pieces-app/support/issues/775): Unable to open Pieces Core Services
- [#774](https://github.com/pieces-app/support/issues/774): Unable to open Pieces Core Services

### 3. Software Bugs and Feature Availability on Linux and Windows
Users are experiencing issues with Pieces OS and the Pieces for Developers desktop application on both Linux and Windows.  On Linux, the Long-Term Memory feature is unavailable despite Discord confirmation of its release.  Additionally, Ollama installation fails on Linux.  On Windows, the application crashes when moving between screens or scrolling.  Troubleshooting steps may include checking for OS updates, reinstalling the application, and verifying compatibility.

**Related Issues:**
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#771](https://github.com/pieces-app/support/issues/771): Crash when scrolling or moving a window to another screen


## Recommendations
- Investigate and address the performance issues and crashes in the Pieces desktop app on Windows and macOS, including lag, Copilot chat failures, and WebSocket connection issues.
- Troubleshoot and resolve the "WebSocketException" error preventing Pieces Core Services from opening on MacOS.
- Investigate the Long-Term Memory feature availability on Linux and ensure it aligns with the Discord communication.
- Address the Ollama installation failure on Linux.
- Prioritize resolving the crash on Windows when moving the app window between screens or scrolling.

## Daily Reports
Here are the daily reports for this week:

- [report_050918](daily/2025-07-02/report_050918.md)
- [report_131641](daily/2025-07-02/report_131641.md)
- [report_210653](daily/2025-07-02/report_210653.md)
