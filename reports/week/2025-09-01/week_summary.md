# Support Ticket Report
- Generated: 2025-09-07 21:08:12
- Period: 2025-09-01 to 2025-09-07

## Summary
- **Total Tickets:** 9
- **Resolved:** 3
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 10.50 |
| [#852](https://github.com/pieces-app/support/issues/852) | Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading | 8.90 |
| [#843](https://github.com/pieces-app/support/issues/843) | Pieces Side Bar issues | 7.62 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 6.35 |
| [#769](https://github.com/pieces-app/support/issues/769) | An error occurred in the authentication flow. | 6.14 |

## Common Issues
### 1. Pieces OS and Desktop Application Issues
Users are experiencing various issues with Pieces OS and the Desktop Application, including LTM query failures on macOS after prolonged use, sidebar display problems and pro subscription recognition failures on Windows, and "Ensure core dependencies" step failing on Linux.  Further investigation is needed to identify the root causes and solutions for each platform.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Pieces OS/Desktop Startup Failure After Update
Users are unable to start Pieces OS and Desktop after updating, encountering "Ensure Core Dependencies" error.  The issue appears across Windows and potentially Linux, impacting various Pieces OS versions.  Reinstallation doesn't resolve the problem.  Logs indicate potential service failures and authentication issues. Further investigation into update processes and dependency management is needed.  A potential workaround involves deleting all local Pieces data, but this results in data loss.

**Related Issues:**
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 3. Pieces OS and Desktop App Failing to Start on Windows
Users are experiencing issues with Pieces OS and Desktop App failing to start after updates on Windows.  The app gets stuck at "Ensure Core Dependencies" or shows authentication errors. Logs indicate problems with data directory determination. Reinstalling does not resolve the issue.  Suggested solutions include checking data directory permissions and verifying Pieces OS service status.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 4. Pieces OS 12.2.1: Issues with Integrations and Display
Users report problems with Pieces OS 12.2.1 across desktop, VS Code, and web extensions. Issues include large markdown blocks in Copilot hindering scrolling, errors saving logs, login problems despite pro upgrade, and continuous VS Code extension installation requests.  Check Pieces logs, reinstall extensions, and ensure Pieces OS and desktop app are updated.

**Related Issues:**
- [#846](https://github.com/pieces-app/support/issues/846): Showing very big markdown in copilot
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension

### 5. Pieces plugin/extension installation and dependency issues
Users are experiencing difficulties installing Pieces plugins/extensions for JetBrains, VS Code, and the Pieces desktop app itself. Issues include a missing JetBrains plugin, a VS Code extension that continuously requests installation but never loads, and the "Ensure core dependencies" step failing during Pieces desktop app setup on Linux.  Further investigation is needed into dependency conflicts, installation processes, and compatibility across different IDEs and operating systems.

**Related Issues:**
- [#849](https://github.com/pieces-app/support/issues/849): pieces Jetbrains plugin
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step


## Recommendations
- Prioritize resolving the "Pieces OS and Desktop Startup Failure After Update" issue as it blocks basic functionality and has the highest activity level.
- Investigate the root cause of the "Pieces OS and Desktop Application Issues" affecting macOS, Windows, and Linux, focusing on LTM query failures, sidebar display problems, and subscription recognition.
- Address the "Pieces OS and Desktop App Failing to Start on Windows" issue, checking data directory permissions and Pieces OS service status as potential solutions.
- Improve the Pieces OS 12.2.1 release by fixing Copilot markdown display, error logging, pro upgrade recognition, and VS Code extension installation issues.
- Develop more robust installation processes for plugins/extensions, addressing the missing JetBrains plugin and the persistent installation requests of the VS Code extension.
- Provide clearer documentation or troubleshooting steps for "Ensure core dependencies" errors during installation on Linux and other platforms.

## Daily Reports
Here are the daily reports for this week:

- [report_210630](daily/2025-09-02/report_210630.md)
- [report_210634](daily/2025-09-04/report_210634.md)
- [report_131239](daily/2025-09-04/report_131239.md)
- [report_210608](daily/2025-09-05/report_210608.md)
- [report_210632](daily/2025-09-06/report_210632.md)
- [report_210640](daily/2025-09-07/report_210640.md)
