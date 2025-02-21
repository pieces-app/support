# Support Ticket Report
- Generated: 2025-02-21 05:08:31
- Period: 2025-02-17 to 2025-02-21

## Summary
- **Total Tickets:** 11
- **Resolved:** 8
- **Open:** 3

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 15.47 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 8.96 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 6.83 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 6.35 |
| [#634](https://github.com/pieces-app/support/issues/634) | Unable to sign in! We aren't sure what happened. | 4.42 |

## Common Issues
### 1. PiecesOS fails to launch on startup
Users report PiecesOS getting stuck on "ensure core dependencies" screen. This affected both MacOS and Windows users. Updating to the latest version (11.1.1 or 11.1.2) often resolved the issue. Providing user logs aided in diagnosis. In some cases, the issue stemmed from stricter hardware requirements in version 11.1.1, addressed in the 11.1.2 patch.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS launch crash due to missing AVX2 support
PiecesOS versions 11.1.1 had a bug causing crashes on launch for systems lacking AVX2 support. This affected macOS and Windows users. The issue stemmed from a new vector library with stricter hardware requirements. Pieces released version 11.1.2 with a fix, resolving the issue for users with compatible CPUs.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS launch failure due to database error
Multiple users reported PiecesOS failing to launch on Windows and Ubuntu due to a database error related to missing AVX2 hardware support. This issue primarily affected version 11.1.1. The Pieces team released a patch in version 11.1.2 to resolve this issue. Users experiencing this problem are advised to upgrade to the latest version.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. PiecesOS 11.1.1 fails to launch on some systems
Users reported PiecesOS 11.1.1 failing to launch, particularly on Mac with Apple Silicon and some Windows machines. This was attributed to stricter hardware requirements in the 11.1.1 update. The issue was addressed in version 11.1.2, encouraging users to update to the latest version.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#630](https://github.com/pieces-app/support/issues/630): core services

### 5. PiecesOS Connectivity and Launch Issues
Users are experiencing problems with PiecesOS connecting to cloud services and launching properly. This is possibly due to network configuration, firewall settings, or software dependencies. Suggested solutions include checking internet connection, verifying firewall settings, ensuring PiecesOS dependencies are met, and reviewing logs for detailed error messages.

**Related Issues:**
- [#634](https://github.com/pieces-app/support/issues/634): Unable to sign in! We aren't sure what happened.
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch


## Recommendations
- **Prioritize resolution of launch issues:** The most frequent and active tickets revolve around PiecesOS launch failures. Focus on identifying the root causes and implementing permanent fixes.
- **Improve communication about hardware requirements:** Clearly communicate the minimum hardware requirements for PiecesOS, especially AVX2 support, to prevent installation and launch issues.
- **Enhance error messaging and logging:** Provide more informative error messages to users and ensure detailed logs are generated to aid in faster diagnosis and resolution.
- **Develop a troubleshooting guide for connectivity problems:** Create a comprehensive guide for users experiencing connectivity issues with cloud services, covering network configuration, firewall settings, and dependency checks.
- **Investigate and address issues with Pieces for Developers:** Several tickets indicate problems with Pieces for Developers, including cloud service access and local LLM usage. Investigate these issues thoroughly and provide timely solutions.
- **Consider a more robust hardware check during installation:** Implement a system check during installation to detect incompatible hardware and alert users before installation to prevent subsequent launch problems.
- **Proactively monitor for similar issues:** Develop a system to monitor support tickets for recurring issues and prioritize addressing them to prevent widespread user impact.
- **Improve discoverability of existing resources:** Ensure users can easily find relevant documentation, FAQs, and troubleshooting guides to encourage self-service resolution for common problems.
- **Gather user feedback on error messages and support experience:** Collect feedback from users on the clarity of error messages and their overall support experience to identify areas for improvement.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
- [report_210558](daily/2025-02-20/report_210558.md)
- [report_131056](daily/2025-02-20/report_131056.md)
