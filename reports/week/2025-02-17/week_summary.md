# Support Ticket Report
- Generated: 2025-02-21 21:08:04
- Period: 2025-02-17 to 2025-02-21

## Summary
- **Total Tickets:** 11
- **Resolved:** 8
- **Open:** 3

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 15.18 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 8.96 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 6.62 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 6.17 |
| [#631](https://github.com/pieces-app/support/issues/631) | Pieces for Developers Not Working – Cloud Service & Local LLM Issues | 5.00 |

## Common Issues
### 1. PiecesOS Startup Failure: Stuck on Core Dependencies
Users report PiecesOS desktop app failing to launch, stuck at "ensure core dependencies" stage. This affects Windows and macOS, across versions. Proposed solutions include updating to the latest version (11.1.2+), removing conflicting 'com.pieces.os' folder from OneDrive, and restarting the app.  Issue potentially tied to hardware requirements and migration processes.

**Related Issues:**
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 2. PiecesOS launch failure due to AVX2 requirement
Users reported PiecesOS failing to launch after upgrading to version 11.1.1. The issue stemmed from a new dependency on the AVX2 instruction set, which some older CPUs lack. This caused immediate crashes on launch. The Pieces team addressed the issue by releasing version 11.1.2, removing the AVX2 requirement and resolving the launch failures for affected users.

**Related Issues:**
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS Connectivity and Launch Issues
Users report PiecesOS failing to connect to cloud services or local LLMs, often due to network configuration or hardware requirements. Solutions include checking network settings, firewall rules, updating to the latest version (11.1.2 or later), and providing logs for diagnosis.

**Related Issues:**
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. Pieces for Developers sign-in and connectivity issues
Users are experiencing issues with Pieces for Developers, including problems signing in, connecting to cloud services, and utilizing local LLMs.  Suggested solutions include checking internet connection, switching networks, clearing browser cache, and providing logs for further analysis by the Pieces team.

**Related Issues:**
- [#634](https://github.com/pieces-app/support/issues/634): Unable to sign in! We aren't sure what happened.
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"

### 5. PiecesOS Boot and Launch Issues
Users reported PiecesOS failing to boot or launch on macOS and Windows after updating to version 11.1.0 or 11.1.1. This is likely due to stricter hardware requirements. The issue appears to be resolved in version 11.1.2. Users experiencing problems should update to the latest version and provide logs if the issue persists.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.


## Recommendations
- **Prioritize resolution of PiecesOS boot and launch issues:** Focus on addressing the root causes of boot failures, including hardware compatibility checks and dependency issues. This will directly impact a significant number of users.
- **Improve communication around hardware requirements:** Clearly communicate the minimum and recommended hardware requirements for PiecesOS, especially after introducing new dependencies or features. This will help prevent users from encountering compatibility issues.
- **Enhance error messaging and troubleshooting documentation:** Provide more informative error messages to users when PiecesOS fails to launch or connect to services. Improve troubleshooting documentation with step-by-step guides for common issues, including network configuration and log retrieval.
- **Investigate and address Pieces for Developers connectivity problems:**  Further investigate the root causes of sign-in, cloud service, and local LLM connectivity issues within Pieces for Developers. This may involve analyzing logs, network configurations, and potential conflicts with firewalls or security software.
- **Monitor user feedback and proactively identify emerging issues:**  Continuously monitor user feedback channels, including GitHub issues and community forums, to proactively identify and address emerging issues. This will help maintain a positive user experience and prevent widespread problems.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
- [report_210558](daily/2025-02-20/report_210558.md)
- [report_131056](daily/2025-02-20/report_131056.md)
- [report_210558](daily/2025-02-21/report_210558.md)
- [report_131009](daily/2025-02-21/report_131009.md)
