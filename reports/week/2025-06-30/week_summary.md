# Support Ticket Report
- Generated: 2025-07-03 05:11:34
- Period: 2025-06-30 to 2025-07-03

## Summary
- **Total Tickets:** 8
- **Resolved:** 0
- **Open:** 8

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#315](https://github.com/pieces-app/support/issues/315) | Pieces desktop application is very slow/laggy, not generating any response in copilot chat. | 6.68 |
| [#773](https://github.com/pieces-app/support/issues/773) | Unable to open Pieces Core Services | 6.62 |
| [#775](https://github.com/pieces-app/support/issues/775) | Unable to open Pieces Core Services | 5.36 |
| [#774](https://github.com/pieces-app/support/issues/774) | Unable to open Pieces Core Services | 5.36 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 4.65 |

## Common Issues
### 1. Pieces Core Services fails to open due to WebSocket connection failure
Users on Windows and MacOS are unable to open Pieces Core Services.  A WebSocketException occurs with a 404 error when attempting to connect to 'http://127.0.0.1:39300/user/last_checked_in/stream#'. The PiecesOS version is unknown, but the minimum and maximum supported versions are 12.1.0 and 13.0.0, respectively. Further investigation is needed to determine the root cause and solution.

**Related Issues:**
- [#776](https://github.com/pieces-app/support/issues/776): Unable to open Pieces Core Services
- [#773](https://github.com/pieces-app/support/issues/773): Unable to open Pieces Core Services
- [#775](https://github.com/pieces-app/support/issues/775): Unable to open Pieces Core Services

### 2. Pieces Core Services Fails to Open
Users on Windows and MacOS are unable to open Pieces Core Services due to a WebSocketException with a 404 error. The connection to 'http://127.0.0.1:39300/user/last_checked_in/stream#' fails to upgrade to a websocket.  The PiecesOS version is unknown but compatible versions are between 12.1.0 and 13.0.0. Further investigation into the 404 error and the websocket connection is needed.

**Related Issues:**
- [#776](https://github.com/pieces-app/support/issues/776): Unable to open Pieces Core Services
- [#773](https://github.com/pieces-app/support/issues/773): Unable to open Pieces Core Services
- [#775](https://github.com/pieces-app/support/issues/775): Unable to open Pieces Core Services

### 3. Pieces Desktop App Performance Issues and Crashes
Users are experiencing slow performance, unresponsiveness, and crashes in the Pieces desktop application on Windows. Issues include lagging, Copilot chat failures, crashes when moving the app window or scrolling, and "Unable to open Pieces Core Services" errors. Some users report these problems started after a recent update. Troubleshooting steps like hard reset haven't resolved the issues. Further investigation is needed to identify the root cause and provide solutions.

**Related Issues:**
- [#315](https://github.com/pieces-app/support/issues/315): Pieces desktop application is very slow/laggy, not generating any response in copilot chat.
- [#771](https://github.com/pieces-app/support/issues/771): Crash when scrolling or moving a window to another screen
- [#776](https://github.com/pieces-app/support/issues/776): Unable to open Pieces Core Services

### 4. Software bugs and installation issues across platforms
Users report issues with Long-Term Memory feature not working on Linux, Ollama installation failures on Linux, and application crashes on Windows when moving or scrolling. The Linux issues may stem from platform compatibility problems, while the Windows crashes could be related to graphics rendering or UI bugs.  Further investigation and platform-specific debugging are needed.

**Related Issues:**
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#771](https://github.com/pieces-app/support/issues/771): Crash when scrolling or moving a window to another screen


## Recommendations
- Prioritize resolving the "Unable to open Pieces Core Services" issue, as it has the highest frequency and impacts both Windows and MacOS users. Investigate the WebSocket connection failure and 404 error.
- Address the performance issues and crashes in the Pieces desktop application on Windows, including slow performance, Copilot chat failures, and crashes when moving or scrolling.  Gather more data from affected users to pinpoint the root cause.
- Investigate the reported installation issues on Linux, specifically the Ollama installation failure and the Long-Term Memory feature not working. Ensure platform compatibility and address any platform-specific bugs.
- Improve communication with users regarding known issues and expected resolution timelines. Provide temporary workarounds where possible.
- Consider adding more detailed logging and error reporting to the desktop application to facilitate faster debugging and issue resolution.

## Daily Reports
Here are the daily reports for this week:

- [report_050918](daily/2025-07-02/report_050918.md)
- [report_131641](daily/2025-07-02/report_131641.md)
- [report_210653](daily/2025-07-02/report_210653.md)
- [report_051018](daily/2025-07-03/report_051018.md)
