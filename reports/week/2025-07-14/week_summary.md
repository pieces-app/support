# Support Ticket Report
- Generated: 2025-07-18 13:19:29
- Period: 2025-07-14 to 2025-07-18

## Summary
- **Total Tickets:** 7
- **Resolved:** 2
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 10.15 |
| [#798](https://github.com/pieces-app/support/issues/798) | [Bug] Workstream summaries broken >1 week & Ollama not detected on Linux Mint | 5.33 |
| [#801](https://github.com/pieces-app/support/issues/801) | Auto Generated Context Always returns to Medium | 4.42 |
| [#792](https://github.com/pieces-app/support/issues/792) | authentification | 3.07 |
| [#790](https://github.com/pieces-app/support/issues/790) | com.pieces.os does not exist | 3.07 |

## Common Issues
### 1. Pieces Desktop App on macOS: Functionality and Stability Issues
Users are experiencing various issues with the Pieces desktop app on macOS, including LTM not recording, Copilot service failing to open, and auto-generated context settings reverting to default.  These issues may involve application crashes, error messages, and unexpected behavior.  Troubleshooting steps may include restarting the app, checking for updates, and verifying system compatibility.

**Related Issues:**
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#795](https://github.com/pieces-app/support/issues/795): Unable to open Pieces Copilot Service
- [#801](https://github.com/pieces-app/support/issues/801): Auto Generated Context Always returns to Medium

### 2. Pieces OS integration failures across multiple platforms
Users on Linux, Windows, and within VS Code report Pieces OS integration issues. Problems include broken workstream summaries, failure to detect Ollama on Linux, missing configuration files on Windows preventing UltraEdit integration, and VS Code extension sign-in errors.  Reinstallation and manual configuration attempts have been unsuccessful.  The common thread is Pieces OS failing to communicate or be detected by other applications.

**Related Issues:**
- [#798](https://github.com/pieces-app/support/issues/798): [Bug] Workstream summaries broken >1 week & Ollama not detected on Linux Mint
- [#790](https://github.com/pieces-app/support/issues/790): com.pieces.os does not exist
- [#797](https://github.com/pieces-app/support/issues/797): Pieces in VS code

### 3. Pieces Integrations and Settings Issues
Users are experiencing issues with Pieces integrations (VS Code) and persistent settings.  Integrations fail to connect, often prompting repeated login attempts despite the Pieces OS running.  The auto-generated context setting in the desktop app reverts to "Medium" even after being changed.  Troubleshooting steps include verifying Pieces OS is running and checking network connectivity for integrations. For the context setting, ensure the app and OS are updated to the latest versions.

**Related Issues:**
- [#801](https://github.com/pieces-app/support/issues/801): Auto Generated Context Always returns to Medium
- [#795](https://github.com/pieces-app/support/issues/795): Unable to open Pieces Copilot Service
- [#797](https://github.com/pieces-app/support/issues/797): Pieces in VS code

### 4. Users unable to sign in across Pieces OS and VS Code extension
Multiple users report being unable to sign in to Pieces OS on desktop and the VS Code extension, encountering errors or "sign in to continue" prompts despite Pieces OS running.  Issue affects Windows and macOS, across Pieces OS versions 4.3.1, 12.1.0, and potentially others.  Suggested troubleshooting includes verifying Pieces OS is running and checking account status. Further investigation needed into potential authentication issues between Pieces OS and its integrations.

**Related Issues:**
- [#792](https://github.com/pieces-app/support/issues/792): authentification
- [#797](https://github.com/pieces-app/support/issues/797): Pieces in VS code
- [#795](https://github.com/pieces-app/support/issues/795): Unable to open Pieces Copilot Service


## Recommendations
- Prioritize resolving the 'Pieces Desktop App on macOS: Functionality and Stability Issues' as it has the highest frequency and significant user impact. Investigate LTM recording failures, Copilot service launch problems, and context settings reverting to default.
- Address the 'Pieces OS integration failures across multiple platforms' impacting Linux, Windows, and VS Code users. Focus on workstream summary generation, Ollama detection on Linux, missing configuration files on Windows, and VS Code extension sign-in errors.
- Investigate the root cause of the 'Users unable to sign in across Pieces OS and VS Code extension' issue affecting both Windows and macOS. This appears to be a critical authentication problem hindering user access.
- Improve the auto-generated context setting persistence in the desktop app to prevent it from reverting to 'Medium'. This recurring issue affects macOS users and requires a code fix.
- Monitor the Pieces OS and desktop application logs for errors and patterns related to the reported issues. This will help identify the underlying causes and potential solutions.
- Consider creating dedicated troubleshooting guides or FAQs for common issues like macOS app instability, Pieces OS integration failures, and sign-in problems. This will empower users to self-resolve and reduce support ticket volume.
- Implement better error handling and reporting within the Pieces OS and desktop app to provide more informative error messages to users and developers. This will aid in faster diagnosis and resolution of issues.

## Daily Reports
Here are the daily reports for this week:

- [report_210607](daily/2025-07-15/report_210607.md)
- [report_131844](daily/2025-07-16/report_131844.md)
- [report_210709](daily/2025-07-16/report_210709.md)
- [report_210702](daily/2025-07-17/report_210702.md)
- [report_131832](daily/2025-07-18/report_131832.md)
