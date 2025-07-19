# Support Ticket Report
- Generated: 2025-07-19 13:15:41
- Period: 2025-07-14 to 2025-07-19

## Summary
- **Total Tickets:** 8
- **Resolved:** 3
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 9.50 |
| [#801](https://github.com/pieces-app/support/issues/801) | Auto Generated Context Always returns to Medium | 4.50 |
| [#798](https://github.com/pieces-app/support/issues/798) | [Bug] Workstream summaries broken >1 week & Ollama not detected on Linux Mint | 4.42 |
| [#794](https://github.com/pieces-app/support/issues/794) | CLI: 1 validation error for Model | 4.18 |
| [#797](https://github.com/pieces-app/support/issues/797) | Pieces in VS code | 3.76 |

## Common Issues
### 1. LTM/Workstream Activity not updating or Pieces Copilot Service not opening
Multiple users report issues with LTM/Workstream Activity failing to record new activities or update.  One user experienced complete stoppage after 20 minutes. Another user encountered an error opening the Pieces Copilot Service with an 'Application not found' message on macOS.  Issues involve both Desktop Application and CLI. Further investigation needed to determine root cause and potential solutions.

**Related Issues:**
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#794](https://github.com/pieces-app/support/issues/794): CLI: 1 validation error for Model
- [#795](https://github.com/pieces-app/support/issues/795): Unable to open Pieces Copilot Service

### 2. PiecesOS integration failures across platforms
Users on Linux, macOS, and Windows report PiecesOS integration issues with desktop apps and CLI. Problems include broken workstream summaries, failure to detect Ollama on Linux, CLI model validation errors on macOS, and missing PiecesOS directories on Windows.  Reinstallation and manual configuration attempts have been unsuccessful.  Further investigation into platform-specific installation and dependency management is needed.

**Related Issues:**
- [#798](https://github.com/pieces-app/support/issues/798): [Bug] Workstream summaries broken >1 week & Ollama not detected on Linux Mint
- [#794](https://github.com/pieces-app/support/issues/794): CLI: 1 validation error for Model
- [#790](https://github.com/pieces-app/support/issues/790): com.pieces.os does not exist

### 3. Auto-Generated Context Resets to Medium
Users report that the Auto-Generated Context setting in the Pieces desktop app repeatedly reverts to "Medium" even after being manually set to "High". This occurs across multiple macOS versions and Pieces builds.  The issue persists after app and OS updates. Users are unsure if the "High" setting ever takes effect.

**Related Issues:**
- [#801](https://github.com/pieces-app/support/issues/801): Auto Generated Context Always returns to Medium
- [#794](https://github.com/pieces-app/support/issues/794): CLI: 1 validation error for Model
- [#795](https://github.com/pieces-app/support/issues/795): Unable to open Pieces Copilot Service

### 4. Users unable to sign in across multiple Pieces platforms
Users are reporting issues signing in on Windows and macOS, affecting the Pieces desktop app, VS Code extension, and CLI.  A common error message "sign in to continue" appears without successful authentication.  Potential solutions include checking Pieces OS version compatibility, network connectivity, and account credentials. Further investigation needed to pinpoint the root cause and provide targeted fixes.

**Related Issues:**
- [#792](https://github.com/pieces-app/support/issues/792): authentification
- [#797](https://github.com/pieces-app/support/issues/797): Pieces in VS code
- [#794](https://github.com/pieces-app/support/issues/794): CLI: 1 validation error for Model

### 5. Pieces OS and Integrations: Errors and Access Issues
Users are experiencing various errors across different Pieces integrations (CLI, VS Code) and with the Pieces OS itself.  These include model validation errors in the CLI, application not found errors on macOS, and sign-in issues with the VS Code extension.  Check Pieces OS version compatibility, ensure the application is installed correctly, and verify account credentials.

**Related Issues:**
- [#794](https://github.com/pieces-app/support/issues/794): CLI: 1 validation error for Model
- [#795](https://github.com/pieces-app/support/issues/795): Unable to open Pieces Copilot Service
- [#797](https://github.com/pieces-app/support/issues/797): Pieces in VS code


## Recommendations
- Prioritize investigation and resolution of LTM/Workstream Activity issues impacting macOS and CLI users.
- Investigate PiecesOS integration failures across all platforms (Linux, macOS, Windows), focusing on workstream summaries, Ollama detection, CLI model validation, and missing directories.
- Address the Auto-Generated Context setting repeatedly reverting to "Medium" in the desktop app across macOS versions.
- Troubleshoot and resolve sign-in issues affecting Windows and macOS users on the desktop app, VS Code extension, and CLI.
- Improve error messaging and guidance for users experiencing "sign in to continue" errors and application not found errors.
- Review and update documentation regarding PiecesOS installation, dependency management, and version compatibility across platforms.
- Consider implementing automated tests to catch regression bugs related to settings persistence and platform-specific integrations.

## Daily Reports
Here are the daily reports for this week:

- [report_210607](daily/2025-07-15/report_210607.md)
- [report_131844](daily/2025-07-16/report_131844.md)
- [report_210709](daily/2025-07-16/report_210709.md)
- [report_210702](daily/2025-07-17/report_210702.md)
- [report_210704](daily/2025-07-18/report_210704.md)
- [report_131832](daily/2025-07-18/report_131832.md)
- [report_131440](daily/2025-07-19/report_131440.md)
