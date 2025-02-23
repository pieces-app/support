# Support Ticket Report
- Generated: 2025-02-23 05:09:06
- Period: 2025-02-17 to 2025-02-23

## Summary
- **Total Tickets:** 13
- **Resolved:** 8
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 14.92 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 8.38 |
| [#610](https://github.com/pieces-app/support/issues/610) | Pieces Desktop app, account linking never acheived for several years? | 7.74 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 6.43 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 6.02 |

## Common Issues
### 1. PiecesOS fails to launch during startup
Users reported PiecesOS failing to launch, often stuck at "ensure core dependency" stage. This issue appears across Windows and macOS, potentially due to stricter hardware requirements in newer versions or OneDrive conflicts. Updating to the latest version (11.1.2 as of the last report) is recommended, and providing log files can help diagnose the issue.

**Related Issues:**
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 2. PiecesOS launch failure due to missing AVX2 support
Multiple users reported PiecesOS failing to launch after upgrading to version 11.1.1. The issue stemmed from a missing AVX2 instruction set support on older CPUs. The Pieces team addressed this by releasing version 11.1.2, which includes a fix for the AVX2 dependency issue.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. Pieces OS login and account linking issues
Users report problems logging in, linking accounts (Google, GitHub), and launching Pieces OS. Issues involve stricter hardware requirements in version 11.1.1, account linking flow problems, and potential email capitalization conflicts. Solutions include updating to the latest version (11.1.2), providing log files, and waiting for a new account linking system.

**Related Issues:**
- [#610](https://github.com/pieces-app/support/issues/610): Pieces Desktop app, account linking never acheived for several years?
- [#634](https://github.com/pieces-app/support/issues/634): Unable to sign in! We aren't sure what happened.
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. Pieces OS Startup and Network Connectivity Issues
Users report Pieces OS failing to start, often due to dependency errors or conflicts with local installations like Ollama. Network connectivity issues also arise, hindering cloud service and local LLM access. Solutions include reinstalling, verifying dependencies, checking network configurations, and using updated Pieces OS versions.

**Related Issues:**
- [#570](https://github.com/pieces-app/support/issues/570): Pieces OS conflicting with Installed Ollama Server?
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all

### 5. Pieces for Developers Connectivity and Local LLM Issues
Users are experiencing difficulties connecting to Pieces cloud services and utilizing local LLMs.  This issue presents as error messages related to cloud service connectivity and local LLM functionality. Proposed solutions include checking network connectivity, switching networks, and verifying PiecesOS and application versions.  The Pieces team is actively investigating these issues and providing support to affected users.

**Related Issues:**
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"


## Recommendations
- Prioritize addressing the "PiecesOS fails to launch" issue, focusing on startup dependency conflicts and OneDrive interactions.
- Investigate and resolve the AVX2 dependency issue to ensure compatibility with older CPUs.
- Improve the account linking process, addressing potential conflicts and usability issues.
- Provide clearer guidance on resolving network connectivity issues affecting cloud services and local LLM access.
- Consider implementing a system to detect and manage conflicts with local installations like Ollama.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
- [report_210558](daily/2025-02-20/report_210558.md)
- [report_131056](daily/2025-02-20/report_131056.md)
- [report_210558](daily/2025-02-21/report_210558.md)
- [report_131009](daily/2025-02-21/report_131009.md)
- [report_210632](daily/2025-02-22/report_210632.md)
- [report_050626](daily/2025-02-23/report_050626.md)
