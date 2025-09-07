# Support Ticket Report
- Generated: 2025-09-07 05:08:20
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
### 1. Pieces OS and Desktop Application Issues
Users are experiencing various issues with the Pieces OS and Desktop Application, including LTM query failures on macOS after prolonged use, sidebar display problems and pro subscription recognition failures on Windows, and "Ensure core dependencies" step issues during installation on Linux.  Further investigation is needed to identify the root causes and solutions for each platform-specific problem.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Pieces OS/Desktop Startup Failure After Update
Users are unable to start Pieces OS and Desktop after updates, stuck at "Ensure Core Dependencies" screen.  Issue affects Windows 11 and potentially other OS. Reinstallation doesn't resolve the problem.  Logs indicate potential OS service failure.  Workaround may involve deleting local data but risks data loss.  Root cause possibly related to core dependencies or OS service interaction.

**Related Issues:**
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 3. Pieces OS and Desktop App Failing to Start on Windows
Users are reporting Pieces OS and Desktop App failing to start after updates on Windows.  Logs show "MissingPlatformDirectoryException(Unable to get application documents directory)" error.  This suggests an issue with accessing or creating the necessary directories. Reinstalling does not resolve the problem.  Possible solutions include checking file permissions, ensuring the application has access to the user's AppData directory, and investigating potential conflicts with antivirus or security software.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.

### 4. Pieces OS and Integrations Issues
Users report issues with Pieces OS and its integrations with VS Code and web browsers. Problems include large markdown responses in Copilot hindering scrolling, errors saving logs, login issues despite pro upgrades, and continuous VS Code extension installation requests despite dependencies being installed.  Users confirm desktop app and web extensions are installed and initialized. Further investigation is needed to identify the root causes and solutions.

**Related Issues:**
- [#846](https://github.com/pieces-app/support/issues/846): Showing very big markdown in copilot
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension

### 5. Pieces plugin/extension installation and dependency issues
Users are experiencing difficulties installing Pieces plugins/extensions for JetBrains, VS Code, and the Pieces desktop app itself. Issues include a missing JetBrains plugin, a VS Code extension that continuously requests installation but never loads, and the "Ensure core dependencies" step failing during Pieces desktop app setup on Linux.  Further investigation is needed to identify the root causes and provide solutions for each platform.

**Related Issues:**
- [#849](https://github.com/pieces-app/support/issues/849): pieces Jetbrains plugin
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step


## Recommendations
- Prioritize resolving the "Pieces OS and Desktop Application Issues" as they impact core functionality across multiple operating systems and affect a large number of users.
- Investigate the root cause of the "Pieces OS/Desktop Startup Failure After Update" issue, focusing on the "Ensure Core Dependencies" step and potential OS service failures. Provide clear instructions or a hotfix to affected users.
- Address the "Pieces OS and Desktop App Failing to Start on Windows" error, specifically the "MissingPlatformDirectoryException."  Verify file permissions and application access to the AppData directory.
- Examine the Pieces OS and integrations issues, particularly the VS Code extension installation problems and the large markdown responses in Copilot. Ensure seamless integration and functionality across platforms.
- Improve communication with users experiencing plugin/extension installation issues. Provide clear guidance for troubleshooting and alternative installation methods.
- Consider adding a progress indicator or more detailed messaging during the "Ensure Core Dependencies" step to improve user experience and reduce confusion.
- Review logs and error messages for common patterns to identify underlying issues and improve error handling.
- Proactively monitor and address issues related to subscriptions and logins to ensure a smooth user experience.
- Develop automated tests to catch issues like the markdown display problem in Copilot and the sidebar issues before they reach users.

## Daily Reports
Here are the daily reports for this week:

- [report_210630](daily/2025-09-02/report_210630.md)
- [report_210634](daily/2025-09-04/report_210634.md)
- [report_131239](daily/2025-09-04/report_131239.md)
- [report_210608](daily/2025-09-05/report_210608.md)
- [report_210632](daily/2025-09-06/report_210632.md)
