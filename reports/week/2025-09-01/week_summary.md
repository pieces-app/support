# Support Ticket Report
- Generated: 2025-09-04 21:08:31
- Period: 2025-09-01 to 2025-09-04

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
Users are unable to start Pieces OS and Desktop after updates, stuck at "Ensure Core Dependencies" screen.  Issue persists across Windows and potentially Linux.  Reinstallation doesn't resolve the problem.  Logs indicate potential OS service failure.  Workarounds include clearing all local data (with data loss risk).

**Related Issues:**
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 2. Pieces OS and Integrations Issues
Users report issues with Pieces OS and its integrations with VS Code and web browsers. Problems include large markdown responses in Copilot, errors saving logs, login issues despite pro upgrades, and continuous VS Code extension installation requests.  Users have attempted reinstalling dependencies and logging in through different platforms. Further investigation is needed to identify the root causes and provide solutions.

**Related Issues:**
- [#846](https://github.com/pieces-app/support/issues/846): Showing very big markdown in copilot
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension

### 3. Pieces OS and Desktop App Failing to Start on Windows
Users are reporting Pieces OS and Desktop App failing to start after updates on Windows.  Logs show "MissingPlatformDirectoryException(Unable to get application documents directory)" error.  Reinstalling doesn't resolve the issue.  Suspect data directory corruption.  Advise users to contact support@pieces.app for assistance and data recovery options before attempting data deletion.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 4. Pieces plugin/extension installation and initialization issues
Users are experiencing difficulties installing or initializing Pieces plugins/extensions across various platforms (JetBrains, VS Code, Desktop App). Issues include plugin not found in marketplace, continuous installation requests, and failure to load.  Suggested solutions involve verifying installation steps, checking dependencies, and ensuring compatibility between Pieces OS version and the plugin/extension.

**Related Issues:**
- [#849](https://github.com/pieces-app/support/issues/849): pieces Jetbrains plugin
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step


## Recommendations
- Prioritize resolving the "Pieces OS/Desktop Startup Failure After Update" issue as it blocks core functionality and has the highest frequency.
- Investigate the root cause of the "MissingPlatformDirectoryException" error related to startup failures on Windows.
- Improve the Pieces OS and integrations stability, addressing issues with VS Code, web browsers, Copilot responses, and logging errors.
- Simplify plugin/extension installation and initialization processes, providing clearer instructions and troubleshooting steps.
- Provide support and data recovery options for users affected by data directory corruption, potentially through a dedicated support channel (support@pieces.app).
- Review logs and user reports for the "Pieces OS and Integrations Issues" to identify common factors and potential solutions.
- Address the markdown size issue in Copilot responses to improve readability.
- Investigate the JetBrains plugin installation issue and ensure its availability in the marketplace.

## Daily Reports
Here are the daily reports for this week:

- [report_210630](daily/2025-09-02/report_210630.md)
- [report_210634](daily/2025-09-04/report_210634.md)
- [report_131239](daily/2025-09-04/report_131239.md)
