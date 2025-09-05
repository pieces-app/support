# Support Ticket Report
- Generated: 2025-09-05 21:07:59
- Period: 2025-09-01 to 2025-09-05

## Summary
- **Total Tickets:** 9
- **Resolved:** 2
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 9.52 |
| [#843](https://github.com/pieces-app/support/issues/843) | Pieces Side Bar issues | 8.01 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 6.81 |
| [#769](https://github.com/pieces-app/support/issues/769) | An error occurred in the authentication flow. | 6.50 |
| [#852](https://github.com/pieces-app/support/issues/852) | Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading | 6.50 |

## Common Issues
### 1. Pieces OS and Desktop Application Issues
Users are experiencing various issues with the Pieces OS and Desktop Application, including LTM query failures on macOS after prolonged use, sidebar display problems and pro subscription recognition failures on Windows, and "Ensure core dependencies" step issues during installation on Linux.  Further investigation is needed to identify the root causes and solutions for each platform-specific problem.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Pieces fails to start or authenticate on Windows and Linux
Users are experiencing issues with Pieces OS and Desktop failing to start or authenticate after updates on Windows and Linux.  Symptoms include authentication errors, "Ensure Core Dependencies" message, and application hangs.  Troubleshooting steps include reinstalling, checking firewall, and reviewing logs.  Potential solutions involve clearing local data/configuration files or further investigation of Pieces OS service and dependencies.

**Related Issues:**
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 3. Pieces OS and Desktop App Failing to Start on Windows
Users are reporting Pieces OS and Desktop App failing to start after updates on Windows.  Logs show "MissingPlatformDirectoryException(Unable to get application documents directory)" error.  Suggested solutions include checking data directory permissions, reinstalling, and as a last resort, deleting local Pieces data.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 4. Pieces OS and Integrations Issues
Users report issues with Pieces OS and its integrations with VS Code and web browsers. Problems include large markdown in Copilot responses, errors saving logs, login issues despite pro upgrade, and continuous VS Code extension installation requests.  Users have attempted reinstalling dependencies and logging in/out without success. Further investigation is needed to identify the root causes and solutions.

**Related Issues:**
- [#846](https://github.com/pieces-app/support/issues/846): Showing very big markdown in copilot
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension

### 5. Pieces plugin and extension installation issues
Users are experiencing difficulty installing Pieces plugins and extensions across various IDEs (JetBrains, VS Code) and operating systems (macOS, Windows, Linux). Issues include plugin unavailability, continuous installation requests, and dependency errors.  Check plugin marketplace compatibility, ensure dependencies are met, and retry installation steps. Verify Pieces desktop app is initialized.

**Related Issues:**
- [#849](https://github.com/pieces-app/support/issues/849): pieces Jetbrains plugin
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step


## Recommendations
- Prioritize resolving the "Pieces OS and Desktop Application Issues" as they impact core functionality across multiple operating systems.
- Investigate the root cause of Pieces OS and Desktop App failing to start on Windows, focusing on the "MissingPlatformDirectoryException" error.
- Address the authentication flow issues on Windows to ensure new users can access the platform.
- Improve plugin and extension installation experience by addressing compatibility and dependency issues across different IDEs.
- Optimize Copilot responses to handle large markdown outputs effectively.

## Daily Reports
Here are the daily reports for this week:

- [report_210630](daily/2025-09-02/report_210630.md)
- [report_210634](daily/2025-09-04/report_210634.md)
- [report_131239](daily/2025-09-04/report_131239.md)
- [report_210608](daily/2025-09-05/report_210608.md)
