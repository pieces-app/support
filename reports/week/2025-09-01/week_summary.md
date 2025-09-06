# Support Ticket Report
- Generated: 2025-09-06 13:10:42
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
Users are experiencing various issues with the Pieces OS and Desktop Application, including LTM query failures on macOS after prolonged use, sidebar display problems and pro subscription recognition failures on Windows, and "Ensure core dependencies" step failing on Linux.  Suggested solutions include clearing LTM data (although the button is reported as not working), checking login status and subscription details, and retrying or reinstalling the application.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Pieces OS/Desktop Startup Failure After Update
Users are unable to start Pieces OS and Desktop after updates, stuck at "Ensure Core Dependencies" screen.  Issue affects Windows 11 and potentially other OS. Reinstallation doesn't resolve the problem. Logs indicate potential OS service failure.  Possible solutions include clearing all local Pieces data or investigating conflicting software/services.

**Related Issues:**
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 3. Pieces OS and Desktop App Failing to Start on Windows
Users are reporting Pieces OS and Desktop App failing to start after updates on Windows.  Logs show "MissingPlatformDirectoryException(Unable to get application documents directory)" error.  Suggested solutions include checking data directory permissions, reinstalling, and as a last resort, deleting local Pieces data.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 4. Pieces OS 12.2.1: Issues with Integrations and Display
Users report problems with Pieces OS 12.2.1 across desktop, VS Code, and web extensions. Issues include large markdown blocks in Copilot hindering scrolling, errors saving logs, Pro version access despite login, and VS Code extension installation failures.  Check logs, reinstall extensions, and ensure Pieces OS and extension versions are compatible. Contact support if issues persist.

**Related Issues:**
- [#846](https://github.com/pieces-app/support/issues/846): Showing very big markdown in copilot
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension

### 5. Pieces plugin/extension installation and initialization issues
Users are experiencing difficulties installing or initializing Pieces plugins/extensions across various platforms (macOS, Windows, Linux) and IDEs (JetBrains, VS Code). Issues include plugin unavailability, continuous installation requests, and failure to load or initialize.  Potential solutions involve verifying plugin availability, checking dependencies, and ensuring proper installation steps are followed. Further investigation is needed to pinpoint the root causes and provide targeted solutions.

**Related Issues:**
- [#849](https://github.com/pieces-app/support/issues/849): pieces Jetbrains plugin
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step


## Recommendations
- Prioritize resolving the "Pieces OS and Desktop Application Issues" as it has the highest frequency and significant impact on users across different operating systems.
- Investigate the root cause of the "Pieces OS/Desktop Startup Failure After Update" issue, focusing on Windows 11 initially, and provide clear steps for users to resolve it without data loss.
- Address the "Pieces OS and Desktop App Failing to Start on Windows" error by checking data directory permissions and providing solutions beyond reinstallation.
- Improve the Pieces OS 12.2.1 integrations with Copilot, VS Code, and web extensions, focusing on display issues and Pro version access.
- Provide support documentation and troubleshooting steps for plugin/extension installation issues across different IDEs and platforms.
- Investigate and fix the LTM query failures on macOS after prolonged use.
- Address the sidebar display problems and pro subscription recognition failures on Windows.
- Fix the "Ensure core dependencies" step failure on Linux.
- Resolve the issue with large markdown blocks in Copilot hindering scrolling.
- Ensure the VS Code extension installs and initializes correctly.
- Develop a JetBrains plugin if there is sufficient demand.

## Daily Reports
Here are the daily reports for this week:

- [report_210630](daily/2025-09-02/report_210630.md)
- [report_210634](daily/2025-09-04/report_210634.md)
- [report_131239](daily/2025-09-04/report_131239.md)
- [report_210608](daily/2025-09-05/report_210608.md)
