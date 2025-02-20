# Support Ticket Report
- Generated: 2025-02-20 13:12:52
- Period: 2025-02-17 to 2025-02-20

## Summary
- **Total Tickets:** 10
- **Resolved:** 8
- **Open:** 2

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 15.47 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 9.33 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 6.83 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 6.35 |
| [#633](https://github.com/pieces-app/support/issues/633) | PiecesOS was unable to launch | 4.42 |

## Common Issues
### 1. PiecesOS Launch Failure
Users reported PiecesOS failing to launch, often stuck at "Ensuring Core Dependencies." This primarily affected Windows users after version 11.1.1 due to stricter hardware requirements. Issue resolved in version 11.1.2.  MacOS users experienced similar issues, resolved in later updates. Providing logs aided diagnosis.

**Related Issues:**
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 2. PiecesOS launch failure due to AVX2 requirement
Multiple users reported PiecesOS failing to launch after upgrading to version 11.1.1. The issue stemmed from a new dependency on AVX2 instruction set support in CPUs. The Pieces team addressed the issue by releasing a patch (version 11.1.2) that removed the AVX2 requirement, resolving the launch problem for affected users.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS launch failure due to database errors
Multiple users reported PiecesOS failing to launch on Ubuntu and Windows, encountering 'DatabaseException' or issues with core dependencies. The errors were linked to AVX2 hardware requirements for the database service. Solutions included updating to the latest PiecesOS version (11.1.2) which contained a patch addressing the AVX2 dependency.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch

### 4. PiecesOS Boot/Launch Issues
Users reported PiecesOS failing to boot or launch on macOS and Windows. On macOS, this was often due to installing the Intel version on ARM Macs. Reinstalling from the correct link resolved it. On Windows, stricter hardware requirements in version 11.1.1 caused launch failures, addressed in the 11.1.2 patch.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 5. PiecesOS Network Connectivity and Download Issues
Users are experiencing issues with PiecesOS connecting to cloud services and downloading local LLMs. This could be due to network configurations, firewall blocking requests, or issues with specific PiecesOS versions. Proposed solutions include checking network settings, providing logs for debugging, and upgrading to the latest PiecesOS version.

**Related Issues:**
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch


## Recommendations
- **Prioritize resolving PiecesOS launch failures:** The most frequent and active support tickets revolve around PiecesOS failing to launch, particularly after the 11.1.1 update. Focus on addressing the root causes, such as AVX2 dependency and database errors, to prevent similar issues in future releases.
- **Improve communication about hardware/software requirements:** Clearly communicate any changes in hardware or software requirements to users before they upgrade to avoid compatibility issues. Provide detailed system requirements documentation and highlight potential compatibility issues with older hardware.
- **Develop a comprehensive troubleshooting guide for launch failures:** Create a dedicated section in the support documentation that specifically addresses PiecesOS launch failures. Include step-by-step instructions for common solutions, such as checking system requirements, updating to the latest version, and providing logs for debugging.
- **Enhance error messaging and logging:** Improve error messages to provide more specific information about the cause of the launch failure. Encourage users to submit detailed logs when reporting issues to aid in faster diagnosis and resolution.
- **Consider a more robust beta testing program:** Implement a more comprehensive beta testing program to identify and address potential issues before releasing new versions to the public. This will help minimize the impact of bugs and compatibility problems on users.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
- [report_131056](daily/2025-02-20/report_131056.md)
