# Support Ticket Report
- Generated: 2025-08-11 13:21:26
- Period: 2025-08-11 to 2025-08-11

## Summary
- **Total Tickets:** 11
- **Resolved:** 4
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#822](https://github.com/pieces-app/support/issues/822) | CANNOT drag a file into CONVERSATION CONTEXT | 5.38 |
| [#825](https://github.com/pieces-app/support/issues/825) | Pieces Pro: checkout is not opening | 5.25 |
| [#823](https://github.com/pieces-app/support/issues/823) | Unable to open Pieces Copilot Service | 4.52 |
| [#827](https://github.com/pieces-app/support/issues/827) | piece | 4.42 |
| [#826](https://github.com/pieces-app/support/issues/826) | Pieces os | 4.42 |

## Common Issues
### 1. Pieces OS and plugin issues with file dragging, launching, and LLM upgrading
Users are experiencing issues with Pieces OS and its plugins on Windows. These include inability to drag files into conversation context, file choosing window appearing in the background, filtering rules not applying to all files, Pieces OS launching directly into support, and difficulty upgrading the LLM to the latest version despite selecting it in settings.  Further investigation is needed to identify the root causes and solutions.

**Related Issues:**
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT
- [#826](https://github.com/pieces-app/support/issues/826): Pieces os
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to

### 2. Pieces Pro checkout not opening, connection issues
Users are experiencing issues with Pieces Pro checkout not opening, getting stuck on "Awaiting checkout...". Also reported are connection problems between Pieces OS and browser extensions, even with VPN configurations.  This affects Windows users on Pieces OS versions 12.1.1 and 12.2.0. Check Pieces OS logs for errors and ensure network connectivity is not blocked by firewalls or antivirus software.  Further investigation needed for checkout modal failure.

**Related Issues:**
- [#825](https://github.com/pieces-app/support/issues/825): Pieces Pro: checkout is not opening
- [#826](https://github.com/pieces-app/support/issues/826): Pieces os
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 3. Pieces OS 12.1.1 Bugs and Feature Requests
Users report issues with copying code blocks, dragging files into conversation context, and LLM not upgrading to the latest version (Sonnet 4) despite Pro subscription.  Copying inline code blocks often results in extra characters.  Dragging files into the conversation context is not functioning.  The LLM upgrade issue persists across different IDE plugins and the desktop app, even after restarts and configuration checks. Users request partial copying for inline code blocks.

**Related Issues:**
- [#821](https://github.com/pieces-app/support/issues/821): Copy python code block = copy message ? what a big mistake !!
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to

### 4. Pieces Copilot Service fails to open due to version incompatibility
Users are unable to open the Pieces Copilot Service.  The first two tickets show an instance of 'fp' error on MacOS where the Pieces OS version (11.0.4) is older than the minimum supported version (11.2.2). The third ticket describes automatic redirection to Pieces support upon launching the application on Windows using Pieces OS version 12.2.0 (Early Access Program).  Updating Pieces OS to the latest stable version is recommended.

**Related Issues:**
- [#824](https://github.com/pieces-app/support/issues/824): Unable to open Pieces Copilot Service
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service
- [#826](https://github.com/pieces-app/support/issues/826): Pieces os

### 5. Pieces OS launch and data recovery issues
Users are experiencing problems launching Pieces OS, with some instances redirecting to support or encountering errors related to data recovery and the Pieces Copilot Service.  Issues appear on Windows and MacOS, potentially related to Early Access Program features. Further investigation is needed to pinpoint the root cause and provide solutions.

**Related Issues:**
- [#827](https://github.com/pieces-app/support/issues/827): piece
- [#826](https://github.com/pieces-app/support/issues/826): Pieces os
- [#824](https://github.com/pieces-app/support/issues/824): Unable to open Pieces Copilot Service


## Recommendations
- Investigate Pieces OS and plugin issues on Windows related to file dragging, launching, and LLM upgrading (especially version 12.1.1).  Prioritize issue #822.
- Address Pieces Pro checkout process failure, particularly the "Awaiting checkout..." issue. Check logs and network configurations.  Prioritize issue #825.
- Troubleshoot Pieces OS and browser extension connection problems, including VPN configurations. Prioritize issue #819.
- Fix code block copying issues in Pieces OS 12.1.1, specifically extra characters when copying inline code. Prioritize issue #821.
- Investigate LLM upgrade failures to Sonnet 4 for Pro users across IDE plugins and desktop app. Prioritize issue #818.
- Address Pieces Copilot Service launch failures on MacOS (version 11.0.4) and Windows (version 12.2.0).  Advise users to update Pieces OS. Prioritize issues #824 and #826.
- Investigate data recovery issues reported on Windows with Pieces OS 12.2.0. Prioritize issue #827.

## Daily Reports
Here are the daily reports for this week:

- [report_131908](daily/2025-08-11/report_131908.md)
