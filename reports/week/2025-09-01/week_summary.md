# Support Ticket Report
- Generated: 2025-09-05 05:08:26
- Period: 2025-09-01 to 2025-09-05

## Summary
- **Total Tickets:** 8
- **Resolved:** 2
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#843](https://github.com/pieces-app/support/issues/843) | Pieces Side Bar issues | 8.24 |
| [#852](https://github.com/pieces-app/support/issues/852) | Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading | 6.94 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 6.86 |
| [#813](https://github.com/pieces-app/support/issues/813) | Ensure Core Dependencies | 6.04 |
| [#842](https://github.com/pieces-app/support/issues/842) | VScode extension continuously requesting installation, never installs unable to load extension | 5.95 |

## Common Issues
### 1. Pieces OS/Desktop Startup Failure After Update
Users are unable to start Pieces OS and Desktop after updates, stuck at "Ensure Core Dependencies" screen.  Issue affects Windows 11 and potentially other OS. Reinstallation doesn't resolve the problem. Logs indicate potential service failure.  Consider clearing local data as last resort.  Authentication flow errors also reported.

**Related Issues:**
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 2. Pieces OS and Integrations Issues
Users report issues with Pieces OS and its integrations with VS Code and web browsers. Problems include large markdown responses in Copilot, errors saving logs, login issues despite pro upgrades, and continuous installation requests for the VS Code extension.  Further investigation is needed to identify the root causes and solutions.

**Related Issues:**
- [#846](https://github.com/pieces-app/support/issues/846): Showing very big markdown in copilot
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension

### 3. Pieces OS and Desktop App Failing to Start on Windows
Users are reporting Pieces OS and Desktop App failing to start on Windows after updates.  Logs show "MissingPlatformDirectoryException(Unable to get application documents directory)" error.  Suggested solutions include checking data directory permissions, reinstalling, and as a last resort, deleting local Pieces data/configuration files (with the caveat of potential data loss).

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 4. Pieces plugin and extension installation issues
Users are experiencing difficulty installing Pieces plugins and extensions across various IDEs (JetBrains, VS Code) and operating systems (macOS, Windows, Linux). Problems include plugin unavailability, continuous installation requests, and dependency errors.  Suggested solutions involve verifying plugin existence in marketplaces, checking dependencies, and ensuring compatibility between Pieces OS version and IDE/OS.

**Related Issues:**
- [#849](https://github.com/pieces-app/support/issues/849): pieces Jetbrains plugin
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step


## Recommendations
- Prioritize resolving the "Pieces OS/Desktop Startup Failure After Update" issue as it has the highest frequency and blocks core functionality.
- Investigate the root cause of the "MissingPlatformDirectoryException" error affecting Windows users and provide clear resolution steps.
- Improve the Pieces OS and integrations stability, addressing issues with VS Code and web browser extensions, including markdown responses, logging errors, and login problems.
- Simplify the plugin and extension installation process, ensuring availability across IDEs and operating systems, and providing troubleshooting steps for dependency errors.
- Review user permissions for data directories on Windows to mitigate potential access issues.
- Provide a central knowledge base or FAQ section with solutions to common issues like startup failures, authentication errors, and plugin installations.
- Improve communication with users regarding ongoing issues and expected resolution timelines.

## Daily Reports
Here are the daily reports for this week:

- [report_210630](daily/2025-09-02/report_210630.md)
- [report_210634](daily/2025-09-04/report_210634.md)
- [report_131239](daily/2025-09-04/report_131239.md)
