# Support Ticket Report
- Generated: 2025-08-12 21:11:20
- Period: 2025-08-11 to 2025-08-12

## Summary
- **Total Tickets:** 24
- **Resolved:** 11
- **Open:** 13

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#831](https://github.com/pieces-app/support/issues/831) | Unable to open Pieces Copilot Service | 9.15 |
| [#829](https://github.com/pieces-app/support/issues/829) | Unable to open Pieces Settings Service | 8.83 |
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 8.79 |
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 7.20 |
| [#822](https://github.com/pieces-app/support/issues/822) | CANNOT drag a file into CONVERSATION CONTEXT | 5.61 |

## Common Issues
### 1. Pieces OS macOS App LTM and Workstream Issues
Users are experiencing problems with the Pieces OS macOS app, specifically with the LTM and Workstream functionalities. Issues include LTM queries taking too long or returning nothing, Workstream not updating, and inability to open Pieces Core Services.  Some users report success after clearing Pieces data, but the issue reoccurs.  A potential cause is the LTM becoming too large.  The "Clear LTM Data" button is also reported as not functioning.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#773](https://github.com/pieces-app/support/issues/773): Unable to open Pieces Core Services

### 2. PiecesOS services failing to open on MacOS
Multiple users reported Pieces Settings and Core Services failing to open on MacOS.  Errors include "Type ZJb already registered" and websocket connection failures with 404 status code. Issues appear on MacOS 15.5 and 15.7 with Pieces OS versions 12.1.1 and Unknown. Check Pieces OS installation and port configuration. Ensure no conflicting applications are using port 39300.

**Related Issues:**
- [#830](https://github.com/pieces-app/support/issues/830): Unable to open Pieces Settings Service
- [#829](https://github.com/pieces-app/support/issues/829): Unable to open Pieces Settings Service
- [#773](https://github.com/pieces-app/support/issues/773): Unable to open Pieces Core Services

### 3. Pieces Copilot Service fails to open on MacOS
Users are unable to open the Pieces Copilot Service on MacOS.  Two distinct errors are observed: "Instance of 'fp'" and "HttpException: Connection reset by peer." Affected users are running MacOS versions 15.5 and 15.6 with Pieces OS versions 11.0.4 and 12.1.1. The issue might be related to Pieces OS version incompatibility or network connectivity problems. Check if Pieces OS is updated to the latest version and ensure a stable network connection. Further investigation is needed to pinpoint the root cause of the 'fp' instance error.

**Related Issues:**
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service
- [#831](https://github.com/pieces-app/support/issues/831): Unable to open Pieces Copilot Service
- [#824](https://github.com/pieces-app/support/issues/824): Unable to open Pieces Copilot Service

### 4. Pieces Pro Upgrade and Connectivity Issues
Users are experiencing difficulty upgrading to Pieces Pro, encountering unresponsive upgrade buttons and failure to open payment modals.  Additionally, some users report connectivity problems between Pieces OS and browser extensions, even with VPN configurations.  Further investigation into payment gateway integration and network connectivity is needed.

**Related Issues:**
- [#825](https://github.com/pieces-app/support/issues/825): Pieces Pro: checkout is not opening
- [#826](https://github.com/pieces-app/support/issues/826): Pieces os
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 5. Pieces Desktop Application Bugs
Users are experiencing various bugs in the Pieces desktop application, including dragging files into conversation context, hotkeys not working, and automatic redirection to support on launch.  These issues span different operating systems (Windows and macOS) and Pieces OS versions (12.1.0, 12.1.1, 12.2.0).  Further investigation is needed to identify the root causes and solutions.

**Related Issues:**
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT
- [#793](https://github.com/pieces-app/support/issues/793): No hotkeys work
- [#826](https://github.com/pieces-app/support/issues/826): Pieces os


## Recommendations
- Prioritize resolving issues related to Pieces OS macOS app's LTM and Workstream functionalities, focusing on improving query performance, ensuring Workstream updates, and fixing the "Clear LTM Data" button.
- Investigate and address the problems preventing users from opening Pieces Core Services, Settings Service, and Copilot Service on MacOS, focusing on resolving websocket connection failures, port conflicts, and the "Type ZJb already registered" error.
- Troubleshoot and fix the issues users are facing when upgrading to Pieces Pro, specifically the unresponsive upgrade button and payment modal failures.
- Address the bugs reported in the Pieces desktop application, including file dragging into conversation context, non-functional hotkeys, and automatic redirection to support on launch.
- Improve communication with users experiencing connectivity issues between Pieces OS and browser extensions, especially those using VPN configurations.

## Daily Reports
Here are the daily reports for this week:

- [report_210706](daily/2025-08-12/report_210706.md)
