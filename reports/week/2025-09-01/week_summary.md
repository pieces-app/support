# Support Ticket Report
- Generated: 2025-09-07 13:10:35
- Period: 2025-09-01 to 2025-09-07

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
### 1. Pieces application issues across platforms
Users are experiencing various issues with the Pieces application on macOS, Windows, and Linux. These include LTM query failures after prolonged use on macOS, sidebar display issues and pro subscription problems on Windows, and dependency issues during installation on Linux.  Further investigation is needed to identify the root causes and solutions for each platform.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Pieces OS/Desktop Startup Failure After Update
Users are unable to start Pieces OS and Desktop after updating, encountering "Ensure Core Dependencies" error.  The issue appears across Windows and potentially Linux, impacting various Pieces OS versions.  Reinstallation doesn't resolve the problem.  Logs indicate potential service failures and authentication issues. Further investigation into core dependencies and data integrity is needed.  A potential workaround involves deleting local data, but data loss is a concern.

**Related Issues:**
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 3. Pieces OS and Desktop App Failing to Start on Windows
Users are experiencing issues with Pieces OS and Desktop App failing to start after updates on Windows. The Desktop app displays an "Ensure Core Dependencies" message, while logs indicate problems with data directory determination.  Reinstalling doesn't resolve the issue.  This may be related to missing or corrupted application data directories.  A potential solution involves completely removing all Pieces data/configuration files and reinstalling, though this may result in data loss.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 4. Pieces OS and Integrations Issues
Users report issues with Pieces OS and its integrations with VS Code and web browsers. Problems include large markdown responses in Copilot, errors saving logs, login issues despite pro upgrades, and continuous VS Code extension installation requests.  Reinstalling extensions and checking login credentials are suggested solutions.

**Related Issues:**
- [#846](https://github.com/pieces-app/support/issues/846): Showing very big markdown in copilot
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension

### 5. Pieces plugin/extension installation and dependency issues
Users are experiencing difficulty installing Pieces plugins/extensions for JetBrains, VS Code, and the Pieces desktop app itself. Issues include a missing JetBrains plugin, a VS Code extension that continuously requests installation but never loads, and the "Ensure core dependencies" step failing during Pieces desktop app initialization on Linux.  Further investigation into dependency resolution and installation processes is needed.

**Related Issues:**
- [#849](https://github.com/pieces-app/support/issues/849): pieces Jetbrains plugin
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step


## Recommendations
- Investigate and address the root cause of the "Ensure Core Dependencies" error impacting Pieces OS and Desktop startup, prioritizing Windows and Linux platforms.
- Develop a solution for LTM query failures after prolonged use on macOS, potentially optimizing LTM performance or data management.
- Address sidebar display issues and pro subscription recognition problems on Windows.
- Investigate dependency issues during Pieces installation on Linux and provide clearer installation instructions or automated dependency resolution.
- Improve the Pieces Copilot module to handle large markdown responses more effectively, possibly by implementing pagination or summarization.
- Develop a JetBrains plugin to address the missing integration.
- Resolve the VS Code extension installation and loading issue, ensuring seamless integration with Pieces.
- Review and improve the authentication flow to minimize errors and provide more helpful error messages.
- Provide support documentation and FAQs addressing common issues with Pieces application, OS, and integrations.

## Daily Reports
Here are the daily reports for this week:

- [report_210630](daily/2025-09-02/report_210630.md)
- [report_210634](daily/2025-09-04/report_210634.md)
- [report_131239](daily/2025-09-04/report_131239.md)
- [report_210608](daily/2025-09-05/report_210608.md)
- [report_210632](daily/2025-09-06/report_210632.md)
