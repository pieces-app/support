# Support Ticket Report
- Generated: 2025-09-06 05:08:12
- Period: 2025-09-01 to 2025-09-06

## Summary
- **Total Tickets:** 9
- **Resolved:** 3
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 10.62 |
| [#852](https://github.com/pieces-app/support/issues/852) | Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading | 8.50 |
| [#843](https://github.com/pieces-app/support/issues/843) | Pieces Side Bar issues | 8.01 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 6.81 |
| [#769](https://github.com/pieces-app/support/issues/769) | An error occurred in the authentication flow. | 6.50 |

## Common Issues
### 1. Pieces OS and Desktop Application Issues
Users are experiencing various issues with the Pieces OS and Desktop Application, including LTM query failures on macOS after prolonged use, sidebar display problems and pro subscription recognition failures on Windows, and "Ensure core dependencies" step issues during installation on Linux.  Further investigation is needed to identify the root causes and solutions for each platform-specific problem.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Pieces OS/Desktop Startup Failure After Update
Users are unable to start Pieces OS or Desktop after updating, encountering an "Ensure Core Dependencies" error.  The application hangs at the loading screen.  Reinstallation does not resolve the problem.  This issue affects Windows 11 and potentially other operating systems.  Logs indicate potential conflicts with OS services or dependencies.  A potential solution involves deleting all local Pieces data, but this results in data loss.

**Related Issues:**
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 3. Pieces OS and Desktop App Failing to Start on Windows
Users are reporting Pieces OS and Desktop App failing to start after updates on Windows.  Logs show "MissingPlatformDirectoryException(Unable to get application documents directory)" error.  Suggested solutions include checking data directory permissions, reinstalling, and as a last resort, deleting local Pieces data (with the caveat of potential data loss).

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 4. Pieces OS 12.2.1: Issues with Integrations and Display
Users report problems with Pieces OS 12.2.1 across desktop, VS Code, and web extensions. Issues include large markdown blocks in Copilot hindering scrolling, errors saving logs, Pro version access despite login, and continuous VS Code extension installation requests.  Check logs, reinstall extensions, and ensure Pieces OS and desktop app are running to troubleshoot.

**Related Issues:**
- [#846](https://github.com/pieces-app/support/issues/846): Showing very big markdown in copilot
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension

### 5. Pieces plugin/extension installation and initialization issues
Users are experiencing difficulty installing or initializing Pieces plugins/extensions across various IDEs (JetBrains, VS Code) and platforms (macOS, Windows, Linux).  Issues include plugin not found in marketplace, continuous installation requests, and failure to load.  Potential solutions involve verifying plugin availability, checking dependencies, and ensuring compatibility between Pieces OS version and IDE/platform.

**Related Issues:**
- [#849](https://github.com/pieces-app/support/issues/849): pieces Jetbrains plugin
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step


## Recommendations
- Prioritize resolving the "Ensure Core Dependencies" error impacting Pieces OS and Desktop App startup, especially on Windows, as this blocks basic functionality.  Investigate data directory permissions, OS service conflicts, and potential solutions beyond data-deleting reinstalls.
- Address the LTM query failures on macOS after prolonged use. Investigate potential performance bottlenecks or data limits within the LTM.
- Investigate and resolve the issues related to Pieces integrations with VS Code and JetBrains IDEs, focusing on installation, initialization, and continuous installation requests.
- Address the sidebar display problems and Pro subscription recognition failures on Windows to ensure a consistent user experience.
- Look into the large markdown blocks issue in Copilot affecting scrolling and the problem of saving error logs to enhance usability.

## Daily Reports
Here are the daily reports for this week:

- [report_210630](daily/2025-09-02/report_210630.md)
- [report_210634](daily/2025-09-04/report_210634.md)
- [report_131239](daily/2025-09-04/report_131239.md)
- [report_210608](daily/2025-09-05/report_210608.md)
