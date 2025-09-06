# Support Ticket Report
- Generated: 2025-09-06 21:08:08
- Period: 2025-09-01 to 2025-09-06

## Summary
- **Total Tickets:** 9
- **Resolved:** 3
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 10.56 |
| [#852](https://github.com/pieces-app/support/issues/852) | Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading | 8.18 |
| [#843](https://github.com/pieces-app/support/issues/843) | Pieces Side Bar issues | 7.81 |
| [#769](https://github.com/pieces-app/support/issues/769) | An error occurred in the authentication flow. | 6.48 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 6.39 |

## Common Issues
### 1. Pieces OS and Desktop Application Issues
Users are experiencing various issues with the Pieces OS and Desktop Application, including LTM query failures on macOS after prolonged use, sidebar display problems and pro subscription recognition failures on Windows, and "Ensure core dependencies" step failing on Linux.  Suggested solutions include clearing LTM data (although the button is reported as not working), checking login status and subscription details, and retrying or reinstalling the application.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Pieces OS/Desktop Startup Failure After Update
Users are unable to start Pieces OS and Desktop after updates, stuck at "Ensure Core Dependencies" screen.  Issue persists across Windows and potentially Linux.  Reinstallation doesn't resolve the problem.  Logs indicate potential service failures and authentication issues.  Workarounds include clearing local data (with data loss risk) or further troubleshooting with support logs.

**Related Issues:**
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 3. Pieces OS and Desktop App Failing to Start on Windows
Users are reporting Pieces OS and Desktop App failing to start after updates on Windows.  Logs show "MissingPlatformDirectoryException(Unable to get application documents directory)" error.  Suggested solutions include checking data directory permissions, reinstalling the app, and as a last resort, deleting local Pieces data/config files (with the caveat of potential data loss).

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 4. Pieces OS and Integrations Issues
Users report issues with Pieces OS and its integrations with VS Code and web browsers. Problems include large markdown responses in Copilot, errors saving logs, login issues despite pro upgrades, and continuous VS Code extension installation requests.  Reinstalling extensions and checking login credentials are suggested solutions. Further investigation is needed for Copilot markdown and log saving errors.

**Related Issues:**
- [#846](https://github.com/pieces-app/support/issues/846): Showing very big markdown in copilot
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension

### 5. Pieces plugin/extension installation and initialization issues
Users are experiencing difficulties installing or initializing Pieces plugins/extensions across various IDEs (JetBrains, VS Code) and platforms (macOS, Windows, Linux). Issues include plugin not found in marketplace, continuous installation requests, and failure to load or initialize.  Potential solutions involve verifying plugin availability, checking dependencies, and ensuring compatibility between Pieces OS version and IDE/platform.

**Related Issues:**
- [#849](https://github.com/pieces-app/support/issues/849): pieces Jetbrains plugin
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step


## Recommendations
- Prioritize resolving the "Ensure Core Dependencies" issue affecting Pieces OS and Desktop App startup, especially on Windows, as it blocks basic functionality. Investigate data directory permissions, service failures, and authentication issues as potential root causes.
- Address the LTM query failures on macOS after prolonged use.  Investigate the reported issue with the "Clear LTM Data" button not working and explore performance optimizations for large LTM databases.
- Investigate and resolve the Pieces OS and integrations issues, including the large markdown responses in Copilot, errors saving logs, and VS Code extension installation problems.  Ensure seamless integration across different IDEs and platforms.
- Improve communication with users regarding Pro subscription recognition failures and guide them through troubleshooting steps to verify login status and subscription details.
- Look into the sidebar display problems on Windows and ensure consistent UI/UX across all supported operating systems.

## Daily Reports
Here are the daily reports for this week:

- [report_210630](daily/2025-09-02/report_210630.md)
- [report_210634](daily/2025-09-04/report_210634.md)
- [report_131239](daily/2025-09-04/report_131239.md)
- [report_210608](daily/2025-09-05/report_210608.md)
- [report_210632](daily/2025-09-06/report_210632.md)
