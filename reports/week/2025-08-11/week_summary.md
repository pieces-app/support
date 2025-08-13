# Support Ticket Report
- Generated: 2025-08-13 13:21:12
- Period: 2025-08-11 to 2025-08-13

## Summary
- **Total Tickets:** 25
- **Resolved:** 11
- **Open:** 14

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#831](https://github.com/pieces-app/support/issues/831) | Unable to open Pieces Copilot Service | 9.15 |
| [#829](https://github.com/pieces-app/support/issues/829) | Unable to open Pieces Settings Service | 8.83 |
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 8.79 |
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 7.14 |
| [#830](https://github.com/pieces-app/support/issues/830) | Unable to open Pieces Settings Service | 5.36 |

## Common Issues
### 1. LTM and Workstream Issues on macOS
Users on macOS are experiencing issues with LTM and Workstream functionality, including queries not returning results, slow performance, and failure to record new activities.  Some users report that clearing LTM data temporarily resolves the issue.  Additionally, Pro users are encountering errors suggesting they need to upgrade despite having a Pro subscription.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 2. PiecesOS services failing to open on MacOS
Multiple users are unable to open Pieces Settings Service or Pieces Core Services on MacOS.  The Settings Service issue involves a type registration error within GetIt, while the Core Services issue points to a WebSocket connection failure with a 404 error.  Suggested solutions include checking PiecesOS installation, verifying port availability, and ensuring network connectivity.

**Related Issues:**
- [#830](https://github.com/pieces-app/support/issues/830): Unable to open Pieces Settings Service
- [#829](https://github.com/pieces-app/support/issues/829): Unable to open Pieces Settings Service
- [#773](https://github.com/pieces-app/support/issues/773): Unable to open Pieces Core Services

### 3. Pieces Copilot Service fails to open on MacOS
Users are unable to open the Pieces Copilot Service on MacOS.  Two distinct errors are observed: "Instance of 'fp'" and "HttpException: Connection reset by peer." Affected users are running MacOS versions 15.5 and 15.6 on Apple M3 processors. Pieces OS versions range from 11.0.4 to 12.1.1.  Further investigation into the 'fp' instance error and connection reset issues is needed. Ensure Pieces OS version compatibility and check network connectivity.

**Related Issues:**
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service
- [#831](https://github.com/pieces-app/support/issues/831): Unable to open Pieces Copilot Service
- [#824](https://github.com/pieces-app/support/issues/824): Unable to open Pieces Copilot Service

### 4. Pieces OS Desktop Application Malfunctioning
Users are experiencing various issues with the Pieces OS desktop application, including unresponsive hotkeys on macOS, LTM recording failures after approximately 20 minutes, and workstream summary generation errors on Windows.  The hotkey issue involves all key combinations producing the macOS error sound without triggering any application function. The LTM and workstream issues may involve application or system conflicts.  Recommended troubleshooting includes checking system compatibility, reinstalling the application, and verifying software updates.

**Related Issues:**
- [#793](https://github.com/pieces-app/support/issues/793): No hotkeys work
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#804](https://github.com/pieces-app/support/issues/804): Unable to generate Workstream Summary

### 5. Pieces Desktop Application Bugs
Users are experiencing various bugs in the Pieces desktop application, including issues with dragging files into conversation context, unresponsive hotkeys, and automatic redirection to support upon launch.  These issues span different operating systems (Windows and macOS) and Pieces OS versions (12.1.0, 12.1.1, 12.2.0).  Further investigation is needed to identify the root causes and implement fixes.

**Related Issues:**
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT
- [#793](https://github.com/pieces-app/support/issues/793): No hotkeys work
- [#826](https://github.com/pieces-app/support/issues/826): Pieces os


## Recommendations
- Prioritize resolving issues related to Pieces Copilot and Settings Services on MacOS, given their high activity levels and impact on core functionality.
- Investigate LTM and Workstream issues on MacOS, focusing on performance, data limits, and subscription validation.
- Address Pieces OS desktop application malfunctions, including hotkey responsiveness, LTM recording failures, and workstream summary generation errors, across both MacOS and Windows.
- Improve error handling and messaging within the Pieces OS application, providing clearer guidance to users experiencing issues such as the "Instance of 'fp'" error.
- Review and update documentation regarding Pieces OS installation, port availability, and network connectivity requirements to preemptively address common user issues.

## Daily Reports
Here are the daily reports for this week:

- [report_210706](daily/2025-08-12/report_210706.md)
