# Support Ticket Report
- Generated: 2025-09-18 21:07:49
- Period: 2025-09-15 to 2025-09-18

## Summary
- **Total Tickets:** 4
- **Resolved:** 0
- **Open:** 4

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#852](https://github.com/pieces-app/support/issues/852) | Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading | 9.91 |
| [#857](https://github.com/pieces-app/support/issues/857) | pieces personal cloud - never been able to connect. always a json page saying "unauthorized request" | 5.68 |
| [#855](https://github.com/pieces-app/support/issues/855) | Unable to open Pieces Core Services | 3.66 |
| [#834](https://github.com/pieces-app/support/issues/834) | Cannot connect to Authentication site during install of Pieces | 3.26 |

## Common Issues
### 1. Pieces OS and Desktop App Fail to Start After Update
Users are unable to launch Pieces Desktop after updating Pieces OS. The app gets stuck on "Ensure Core Dependencies" screen.  Reinstalling doesn't resolve the issue.  Problem may stem from Pieces OS service failing to start, potentially due to update conflicts or corrupted data.  Logs indicate authentication issues.  Workarounds include checking firewall/antivirus settings and ensuring network connectivity.  As a last resort, clearing all local Pieces data might help, but data loss is possible.

**Related Issues:**
- [#852](https://github.com/pieces-app/support/issues/852): Pieces OS & Pieces Desktop fail to start after last update.  stucks at loading
- [#855](https://github.com/pieces-app/support/issues/855): Unable to open Pieces Core Services
- [#834](https://github.com/pieces-app/support/issues/834): Cannot connect to Authentication site during install of Pieces

### 2. Users unable to connect to Pieces Cloud due to unauthorized requests
Multiple users report "unauthorized request" errors when accessing Pieces Cloud across different platforms (macOS, Windows). Issues range from initial connection failures during installation to persistent cloud access problems for paid users.  Browser extensions are also affected. Potential causes include network security software (e.g., Cortex XDR) and authentication issues with Pieces Core Services.

**Related Issues:**
- [#857](https://github.com/pieces-app/support/issues/857): pieces personal cloud - never been able to connect. always a json page saying "unauthorized request"
- [#855](https://github.com/pieces-app/support/issues/855): Unable to open Pieces Core Services
- [#834](https://github.com/pieces-app/support/issues/834): Cannot connect to Authentication site during install of Pieces


## Recommendations
- Prioritize resolving the 'Pieces OS and Desktop App Fail to Start After Update' issue, given its high frequency and activity level.
- Investigate the root cause of the 'unauthorized request' errors preventing users from accessing Pieces Cloud, focusing on potential conflicts with network security software and authentication issues.
- Improve the installation process to address the authentication site connection failures, particularly for users on secure networks (e.g., VDIs with Cortex XDR).
- Provide clear and accessible documentation or troubleshooting guides for users experiencing cloud connectivity and application startup issues.
- Consider implementing more robust error handling and logging within Pieces OS and Desktop to facilitate faster diagnosis and resolution of issues.

## Daily Reports
Here are the daily reports for this week:

- [report_210640](daily/2025-09-16/report_210640.md)
- [report_131351](daily/2025-09-16/report_131351.md)
- [report_210632](daily/2025-09-17/report_210632.md)
- [report_131332](daily/2025-09-17/report_131332.md)
- [report_131332](daily/2025-09-18/report_131332.md)
- [report_210656](daily/2025-09-18/report_210656.md)
