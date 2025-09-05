# Support Ticket Report
- Generated: 2025-09-05 13:14:07
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
| [#813](https://github.com/pieces-app/support/issues/813) | Ensure Core Dependencies | 6.00 |
| [#842](https://github.com/pieces-app/support/issues/842) | VScode extension continuously requesting installation, never installs unable to load extension | 5.95 |

## Common Issues
### 1. Pieces OS/Desktop Startup Failure After Update
Users are unable to launch Pieces Desktop after updating Pieces OS. The app gets stuck on "Ensure Core Dependencies" screen.  Reinstalling doesn't resolve the problem.  Issue affects Windows 11 and potentially other OS. Logs indicate potential OS service failure. Further investigation needed to pinpoint root cause and provide a fix. This also impacts new users attempting to sign in.

**Related Issues:**
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 2. Pieces OS 12.2.1: Issues with Integrations and Display
Users report problems with Pieces OS 12.2.1 across desktop, VS Code, and web extensions. Issues include large markdown blocks in Copilot hindering scrolling, errors saving logs, Pro version access despite login, and VS Code extension installation failures.  Check logs, reinstall extensions, and ensure Pieces OS and extension versions are compatible. Contact support if issues persist.

**Related Issues:**
- [#846](https://github.com/pieces-app/support/issues/846): Showing very big markdown in copilot
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension

### 3. Pieces OS and Desktop App Failing to Start on Windows
Users are reporting Pieces OS and Desktop App failing to start after updates on Windows.  Logs show "MissingPlatformDirectoryException(Unable to get application documents directory)" error.  Suggested solutions include checking data directory permissions, reinstalling, and as a last resort, deleting local Pieces data/configuration files (with the caveat of potential data loss).

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 4. Pieces plugin/extension installation and initialization issues
Users are experiencing difficulty installing or initializing Pieces plugins/extensions across various IDEs (JetBrains, VS Code) and platforms (macOS, Windows, Linux). Issues include plugin not found in marketplace, continuous installation requests, and failure to load or initialize.  Potential solutions involve verifying plugin compatibility, ensuring dependencies are met, and checking network connectivity.

**Related Issues:**
- [#849](https://github.com/pieces-app/support/issues/849): pieces Jetbrains plugin
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step


## Recommendations
- Prioritize resolving the "Pieces OS/Desktop Startup Failure After Update" issue as it blocks core functionality and affects new users. Investigate logs and OS service failures to identify the root cause and deploy a fix.
- Address the "Pieces OS 12.2.1: Issues with Integrations and Display" problems affecting Copilot, logging, Pro access, and VS Code extension. Review logs, ensure version compatibility, and guide users through reinstallation steps.
- Investigate the "Pieces OS and Desktop App Failing to Start on Windows" error related to data directory permissions. Provide clear instructions for checking permissions and offer reinstallation or data deletion (with data loss warning) as last resorts.
- Improve plugin/extension installation and initialization experience by addressing issues in the marketplace, dependency management, and network handling. Provide troubleshooting steps for IDEs (JetBrains, VS Code) and platforms (macOS, Windows, Linux).
- Proactively monitor and address issues related to Pieces OS and Desktop App startup failures, especially after updates. Enhance logging and error reporting to facilitate faster diagnosis and resolution.
- Improve communication with users experiencing authentication flow errors. Provide more specific error messages and troubleshooting steps for different browsers and platforms.
- Address the Copilot issue with large markdown blocks affecting scrolling. Optimize markdown rendering and provide alternative display options.
- Ensure the Pieces JetBrains plugin is available in the marketplace and provide clear installation instructions.

## Daily Reports
Here are the daily reports for this week:

- [report_210630](daily/2025-09-02/report_210630.md)
- [report_210634](daily/2025-09-04/report_210634.md)
- [report_131239](daily/2025-09-04/report_131239.md)
