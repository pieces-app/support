# Support Ticket Report
- Generated: 2025-08-13 05:11:35
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
| [#822](https://github.com/pieces-app/support/issues/822) | CANNOT drag a file into CONVERSATION CONTEXT | 5.61 |

## Common Issues
### 1. LTM and Workstream Issues on macOS
Users on macOS are experiencing issues with LTM and Workstream functionality, including queries not returning results, slow performance, and failure to record new activities.  Some users report that clearing LTM data temporarily resolves the issue.  Additionally, Pro users are encountering errors suggesting they need to upgrade despite having a Pro subscription.  Further investigation is needed to determine the root cause and potential solutions.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 2. PiecesOS services failing to open on MacOS
Multiple users reported Pieces Settings and Core Services failing to open on MacOS.  Errors include "Type ZJb already registered" and websocket connection failures with 404 status code. Issues appear on MacOS 15.5 and 15.7 with Pieces OS versions 12.1.1 and "Unknown". Potential solutions include reinstalling Pieces OS, checking firewall settings, and ensuring the correct local port is being used.

**Related Issues:**
- [#830](https://github.com/pieces-app/support/issues/830): Unable to open Pieces Settings Service
- [#829](https://github.com/pieces-app/support/issues/829): Unable to open Pieces Settings Service
- [#773](https://github.com/pieces-app/support/issues/773): Unable to open Pieces Core Services

### 3. Pieces Copilot Service fails to open on MacOS
Users are unable to open the Pieces Copilot Service on MacOS.  Two distinct errors are observed: "Instance of 'fp'" and "HttpException: Connection reset by peer."  The issue appears across different MacOS versions (15.5, 15.6) and Pieces OS versions (11.0.4, 12.1.1), with installations succeeding in all cases.  Potential solutions include checking network connectivity, ensuring the Pieces Copilot Service is running, and verifying compatibility between the Pieces OS and MacOS versions.

**Related Issues:**
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service
- [#831](https://github.com/pieces-app/support/issues/831): Unable to open Pieces Copilot Service
- [#824](https://github.com/pieces-app/support/issues/824): Unable to open Pieces Copilot Service

### 4. Pieces Pro Upgrade and Connectivity Issues
Users are experiencing difficulty upgrading to Pieces Pro, with the checkout process failing to complete.  Additionally, some users report connectivity problems between Pieces OS and browser extensions, even with VPNs configured.  Further investigation is needed to determine the root cause and potential solutions.

**Related Issues:**
- [#825](https://github.com/pieces-app/support/issues/825): Pieces Pro: checkout is not opening
- [#826](https://github.com/pieces-app/support/issues/826): Pieces os
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 5. Pieces Desktop Application Bugs
Users are experiencing various bugs in the Pieces desktop application, including issues with dragging files into conversation context, non-functional hotkeys, and automatic redirection to support upon launch.  These problems span different operating systems (Windows and macOS) and Pieces OS versions (12.1.0, 12.1.1, 12.2.0). Further investigation is needed to identify the root causes and implement fixes.

**Related Issues:**
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT
- [#793](https://github.com/pieces-app/support/issues/793): No hotkeys work
- [#826](https://github.com/pieces-app/support/issues/826): Pieces os


## Recommendations
- Prioritize resolving MacOS LTM and Workstream issues by investigating the root causes of query failures, slow performance, and Pro upgrade errors.
- Address Pieces OS service failures on MacOS, focusing on "Type ZJb already registered" and websocket connection errors. Explore solutions like reinstallation, firewall checks, and port verification.
- Investigate and resolve Pieces Copilot Service startup failures on MacOS, addressing "Instance of 'fp'" and "Connection reset by peer" errors. Check network connectivity and service status.
- Troubleshoot Pieces Pro upgrade process failures and connectivity issues between Pieces OS and browser extensions, especially for users with VPNs.
- Fix Pieces desktop application bugs related to file dragging, hotkeys, and automatic redirection to support on launch across Windows and MacOS.
- Improve error handling and messaging within the Pieces application to provide more specific guidance to users experiencing issues.

## Daily Reports
Here are the daily reports for this week:

- [report_210706](daily/2025-08-12/report_210706.md)
