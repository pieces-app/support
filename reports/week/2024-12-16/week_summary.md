# Support Ticket Report
- Generated: 2024-12-18 13:13:27
- Period: 2024-12-16 to 2024-12-18

## Summary
- **Total Tickets:** 9
- **Resolved:** 2
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#471](https://github.com/pieces-app/support/issues/471) | I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app | 18.51 |
| [#530](https://github.com/pieces-app/support/issues/530) | Vscode and PHPStorm plugins stopped working after Pieces OS update | 8.83 |
| [#526](https://github.com/pieces-app/support/issues/526) | Can't turn on long term memory engine | 7.67 |
| [#531](https://github.com/pieces-app/support/issues/531) | Pieces Desktop App - Lost Connection to PiecesOS | 6.94 |
| [#528](https://github.com/pieces-app/support/issues/528) | I can't use any GPT models other than 'GPT-4o Mini' | 6.50 |

## Common Issues
### 1. PiecesOS Copilot Rate Limiting Errors
Users are experiencing "Something went wrong with processing" errors due to rate limiting in PiecesOS versions prior to 11.0.0. This primarily affects Copilot features and GPT models other than GPT-4o Mini. Upgrading to PiecesOS 11.0.0, authenticating, and contacting support are recommended solutions.

**Related Issues:**
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'
- [#507](https://github.com/pieces-app/support/issues/507): Pieces for Developers app keeps crashing continuously on attempts to upload files and folder and needs restart on my windows 11 laptop

### 2. Pieces OS Plugin Connectivity Issues
Users are experiencing connectivity problems between Pieces OS and IDE plugins (VS Code, PHPStorm) after updating to version 11.0.0.  This is likely due to port conflicts or plugin incompatibility.  Suggested solutions include ensuring Pieces OS is running on the correct port, reinstalling or updating plugins, and checking for antivirus interference.

**Related Issues:**
- [#534](https://github.com/pieces-app/support/issues/534): Pieces os says: port already in use if i start phpstorm with pieces plugin
- [#530](https://github.com/pieces-app/support/issues/530): Vscode and PHPStorm plugins stopped working after Pieces OS update
- [#531](https://github.com/pieces-app/support/issues/531): Pieces Desktop App - Lost Connection to PiecesOS

### 3. Pieces OS LLM Download and Integration Issues
Users report difficulties downloading large LLMs due to unstable network connections. Failed downloads require restarting, and manually downloaded models aren't recognized. Workarounds include adding empty files to force recognition. Additionally, users experience issues enabling the LTM engine, often persisting across restarts and updates. Solutions involve upgrading to the latest Pieces OS version or troubleshooting WSL access for VSCode extensions.

**Related Issues:**
- [#527](https://github.com/pieces-app/support/issues/527): Manually downloading a LLM
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'
- [#526](https://github.com/pieces-app/support/issues/526): Can't turn on long term memory engine

### 4. PiecesOS and Desktop App Connection Issues
Users are experiencing connection issues between the PiecesOS and Desktop App after updating to the latest version. This can manifest as crashes, plugin failures, or the app reporting a lost connection. Proposed solutions include checking for updates, ensuring PiecesOS is running on the correct port, and providing logs or system information to the Pieces team for further analysis.

**Related Issues:**
- [#531](https://github.com/pieces-app/support/issues/531): Pieces Desktop App - Lost Connection to PiecesOS
- [#507](https://github.com/pieces-app/support/issues/507): Pieces for Developers app keeps crashing continuously on attempts to upload files and folder and needs restart on my windows 11 laptop
- [#530](https://github.com/pieces-app/support/issues/530): Vscode and PHPStorm plugins stopped working after Pieces OS update

### 5. Pieces OS crashes and LTM engine fails
Users report Pieces OS crashing when uploading files or starting the LTM engine.  Suggested solutions include restarting the app, updating to the latest version, checking for specific file-related issues, and contacting support. Issues persist across different Pieces OS versions and operating systems.

**Related Issues:**
- [#526](https://github.com/pieces-app/support/issues/526): Can't turn on long term memory engine
- [#507](https://github.com/pieces-app/support/issues/507): Pieces for Developers app keeps crashing continuously on attempts to upload files and folder and needs restart on my windows 11 laptop
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'


## Recommendations
- **Address PiecesOS and Desktop App Connection Issues:** Prioritize resolving connection issues between PiecesOS and the Desktop App, as they are a recurring problem with high frequency and activity levels. This includes crashes, plugin failures, and lost connections.
- **Improve LLM Download Stability and Integration:** Address issues related to LLM downloads, such as unstable connections, failed downloads requiring restarts, and manual download recognition problems. Improve the download process and provide clearer instructions for local LLM integration.
- **Investigate and Resolve PiecesOS Plugin Connectivity Issues:** Investigate the root cause of connectivity problems between Pieces OS and IDE plugins (VS Code, PHPStorm) after the 11.0.0 update.  Focus on potential port conflicts, plugin incompatibility, and antivirus interference.
- **Provide Clearer Communication and Solutions for Rate Limiting:** Implement better communication around rate limiting, including clearer error messages and guidance on authentication.  Consider offering alternative solutions or options for users experiencing rate limiting issues.
- **Gather More Data on LTM Engine Failures:** Investigate the LTM engine failures, including the inability to turn it on and crashes associated with it. Gather more data on the specific conditions and user steps leading to these issues to identify solutions.
- **Proactively Monitor and Address High-Activity Tickets:** Continue monitoring high-activity tickets, such as ticket #471, #530, #526, and others, to ensure timely resolution and identify any underlying patterns or systemic issues.
- **Improve PiecesOS Stability and Crash Reporting:** Investigate and address the root causes of PiecesOS crashes, including those occurring during file uploads and LTM engine startup. Implement better crash reporting to gather more detailed information for debugging.

## Daily Reports
Here are the daily reports for this week:

- [report_210616](daily/2024-12-17/report_210616.md)
- [report_131026](daily/2024-12-17/report_131026.md)
- [report_131144](daily/2024-12-18/report_131144.md)
