# Support Ticket Report
- Generated: 2025-07-16 05:12:31
- Period: 2025-07-14 to 2025-07-16

## Summary
- **Total Tickets:** 5
- **Resolved:** 1
- **Open:** 4

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#799](https://github.com/pieces-app/support/issues/799) | LTM not recording any new activities/Workstream Activity not updating | 13.14 |
| [#798](https://github.com/pieces-app/support/issues/798) | [Bug] Workstream summaries broken >1 week & Ollama not detected on Linux Mint | 4.52 |
| [#797](https://github.com/pieces-app/support/issues/797) | Pieces in VS code | 4.06 |
| [#790](https://github.com/pieces-app/support/issues/790) | com.pieces.os does not exist | 3.91 |
| [#795](https://github.com/pieces-app/support/issues/795) | Unable to open Pieces Copilot Service | 3.31 |

## Common Issues
### 1. Workstream/LTM Activity recording and Pieces OS integration issues
Users are experiencing issues with Workstream/LTM activity not recording or updating, along with Pieces OS integration problems like Ollama detection failures on Linux and application not found errors on macOS.  The issues involve various Pieces OS versions and Desktop application versions. Troubleshooting steps include restarting the application, verifying installation paths, and checking system compatibility.

**Related Issues:**
- [#799](https://github.com/pieces-app/support/issues/799): LTM not recording any new activities/Workstream Activity not updating
- [#795](https://github.com/pieces-app/support/issues/795): Unable to open Pieces Copilot Service
- [#798](https://github.com/pieces-app/support/issues/798): [Bug] Workstream summaries broken >1 week & Ollama not detected on Linux Mint

### 2. Pieces OS integration failures across multiple platforms
Users on Linux, Windows, and within VS Code report Pieces OS integration issues. Problems include broken workstream summaries, failure to detect Ollama on Linux, missing configuration files on Windows preventing UltraEdit integration, and VS Code extension sign-in errors.  Reinstallation and manual configuration attempts have been unsuccessful.  The common thread is Pieces OS failing to communicate or be detected by other applications.

**Related Issues:**
- [#798](https://github.com/pieces-app/support/issues/798): [Bug] Workstream summaries broken >1 week & Ollama not detected on Linux Mint
- [#790](https://github.com/pieces-app/support/issues/790): com.pieces.os does not exist
- [#797](https://github.com/pieces-app/support/issues/797): Pieces in VS code

### 3. Pieces OS integration issues across multiple applications
Users are experiencing difficulties integrating Pieces OS with other applications like UltraEdit and VS Code.  Problems include missing com.pieces.os directory, connection errors, and sign-in issues.  Reinstallation of Pieces OS and associated applications has not resolved the problems.  Further investigation into Pieces OS functionality and integration processes is needed.

**Related Issues:**
- [#790](https://github.com/pieces-app/support/issues/790): com.pieces.os does not exist
- [#797](https://github.com/pieces-app/support/issues/797): Pieces in VS code
- [#795](https://github.com/pieces-app/support/issues/795): Unable to open Pieces Copilot Service


## Recommendations
- Investigate and fix the root cause of Pieces OS integration failures across different platforms (Windows, Linux, macOS, VS Code, UltraEdit). Prioritize the missing com.pieces.os directory issue on Windows and Ollama detection failure on Linux.
- Address the issue of Workstream/LTM activity not recording or updating. This appears to be affecting multiple users across different operating systems.
- Improve error messaging and logging related to Pieces OS integration to aid in troubleshooting. The "Application not found" error on macOS and the lack of error messages in dependency logs on Linux are examples where better logging would be helpful.
- Investigate the VS Code extension sign-in error. Determine if it is related to account types or other authentication issues.
- Provide clearer documentation or troubleshooting steps for users experiencing integration problems. This could include verifying installation paths, checking system compatibility, or restarting applications.

## Daily Reports
Here are the daily reports for this week:

- [report_210607](daily/2025-07-15/report_210607.md)
