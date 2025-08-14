# Support Ticket Report
- Generated: 2025-08-14 05:11:17
- Period: 2025-08-11 to 2025-08-14

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
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 6.68 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 6.17 |

## Common Issues
### 1. LTM and Workstream Issues on macOS
Users on macOS are experiencing issues with LTM and Workstream functionality, including queries not returning results, slow performance, and failure to record new activities.  Some users report that clearing LTM data temporarily resolves the issue.  Additionally, Pro users are encountering errors related to subscription status despite having active subscriptions.

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
Users are unable to open the Pieces Copilot Service on MacOS.  Two distinct errors are observed: "Instance of 'fp'" and "HttpException: Connection reset by peer." Affected users are running MacOS versions 15.5 and 15.6 on Apple M3 processors.  Pieces OS versions range from 11.0.4 to 12.1.1.  Check Pieces OS version compatibility and ensure network connectivity.

**Related Issues:**
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service
- [#831](https://github.com/pieces-app/support/issues/831): Unable to open Pieces Copilot Service
- [#824](https://github.com/pieces-app/support/issues/824): Unable to open Pieces Copilot Service

### 5. Pieces OS 12.1.1 Bugs and Feature Requests
Users report issues with copying inline and inter-line code blocks, dragging files into conversation context, and upgrading to the latest LLM version (Sonnet 4).  Suggested solutions include fixing copy/paste functionality, enabling file drag-and-drop, and ensuring LLM upgrades are applied correctly across all plugins and applications.

**Related Issues:**
- [#821](https://github.com/pieces-app/support/issues/821): Copy python code block = copy message ? what a big mistake !!
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to


## Recommendations
- Prioritize resolving issues related to LTM and Workstream functionality on macOS, focusing on data handling and subscription status errors.
- Investigate and address the root cause of PiecesOS services failing to open on MacOS, including "Type ZJb already registered" and websocket connection failures.
- Fix the issue with Auto-Generated Context reverting to "Medium" in the Pieces desktop app on macOS.
- Troubleshoot and resolve the problems preventing users from opening the Pieces Copilot Service on MacOS, addressing both "Instance of 'fp'" and "Connection reset by peer" errors.
- Address bugs related to copying code blocks and dragging files into conversation context within Pieces OS 12.1.1.
- Ensure consistent LLM upgrades across all plugins and applications, specifically addressing the issue where Pro users cannot upgrade to the latest Sonnet version.

## Daily Reports
Here are the daily reports for this week:

- [report_210706](daily/2025-08-12/report_210706.md)
- [report_210659](daily/2025-08-13/report_210659.md)
