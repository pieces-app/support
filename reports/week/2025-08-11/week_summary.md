# Support Ticket Report
- Generated: 2025-08-13 21:11:06
- Period: 2025-08-11 to 2025-08-13

## Summary
- **Total Tickets:** 25
- **Resolved:** 11
- **Open:** 14

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 8.20 |
| [#829](https://github.com/pieces-app/support/issues/829) | Unable to open Pieces Settings Service | 8.00 |
| [#831](https://github.com/pieces-app/support/issues/831) | Unable to open Pieces Copilot Service | 7.25 |
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 6.74 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 6.17 |

## Common Issues
### 1. LTM and Workstream Issues on macOS
Users on macOS are experiencing issues with LTM and Workstream functionality, including queries not returning results, slow performance, and failure to record new activities.  Some users report that clearing LTM data temporarily resolves the issue.  Additionally, Pro users are encountering errors suggesting they need to upgrade despite having a Pro subscription.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 2. PiecesOS services failing to open on MacOS
Multiple users reported Pieces Settings and Core Services failing to open on MacOS.  Errors include "Type ZJb already registered" and websocket connection failures with 404 status code. Issues observed across different MacOS versions (15.5, 15.7) and PiecesOS versions (12.1.1, Unknown). Potential solutions include reinstalling PiecesOS, checking firewall settings, and ensuring correct port configuration.

**Related Issues:**
- [#830](https://github.com/pieces-app/support/issues/830): Unable to open Pieces Settings Service
- [#829](https://github.com/pieces-app/support/issues/829): Unable to open Pieces Settings Service
- [#773](https://github.com/pieces-app/support/issues/773): Unable to open Pieces Core Services

### 3. Auto-Generated Context Resets to Medium, Settings Service Issues
Users report the Auto-Generated Context in the Pieces desktop app (macOS) reverting to "Medium" despite selecting "High".  Additionally, errors like "Invalid argument(s): Type ZJb is already registered inside GetIt" occur when opening the Pieces Settings Service.  Further investigation is needed to determine the relationship between these issues and potential solutions.

**Related Issues:**
- [#801](https://github.com/pieces-app/support/issues/801): Auto Generated Context Always returns to Medium
- [#829](https://github.com/pieces-app/support/issues/829): Unable to open Pieces Settings Service
- [#830](https://github.com/pieces-app/support/issues/830): Unable to open Pieces Settings Service

### 4. Pieces Copilot Service fails to open on MacOS
Users are unable to open the Pieces Copilot Service on MacOS.  Two distinct errors are observed: 'Instance of 'fp'' and 'HttpException: Connection reset by peer'. Affected users are running MacOS versions 15.5 and 15.6 with Pieces OS versions 11.0.4 and 12.1.1. The issue might be related to Pieces OS version compatibility or network connectivity problems. Check for Pieces OS updates or firewall issues.

**Related Issues:**
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service
- [#831](https://github.com/pieces-app/support/issues/831): Unable to open Pieces Copilot Service
- [#824](https://github.com/pieces-app/support/issues/824): Unable to open Pieces Copilot Service

### 5. Pieces OS 12.1.1 Bugs and Feature Requests
Users report issues with copying code blocks, dragging files into conversation context, and upgrading to the latest LLM version (Sonnet 4). Copying inline code blocks behaves unexpectedly, and dragging files into the conversation context is not functioning.  Additionally, despite upgrading to Pieces Pro and selecting Sonnet 4, the LLM remains on Sonnet 3.5 in Pieces for Developers and VS Code plugin. A feature request has been made to allow partial copying of inline code blocks.

**Related Issues:**
- [#821](https://github.com/pieces-app/support/issues/821): Copy python code block = copy message ? what a big mistake !!
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to


## Recommendations
- Prioritize resolving issues related to LTM and Workstream functionality on macOS, focusing on data handling and subscription recognition.
- Investigate and address the recurring problems with PiecesOS services failing to open on MacOS, specifically the "Type ZJb already registered" and websocket connection errors.
- Fix the issue with Auto-Generated Context reverting to "Medium" in the Pieces desktop app on macOS.
- Troubleshoot and resolve the problems preventing users from opening the Pieces Copilot Service on MacOS, addressing both the 'Instance of 'fp'' and 'Connection reset by peer' errors.
- Address the bugs in Pieces OS 12.1.1 related to code block copying, file dragging into conversation context, and LLM version upgrades.
- Improve communication with Pro users regarding LLM upgrades and ensure the selected LLM version is applied consistently across all platforms.

## Daily Reports
Here are the daily reports for this week:

- [report_210706](daily/2025-08-12/report_210706.md)
- [report_210659](daily/2025-08-13/report_210659.md)
