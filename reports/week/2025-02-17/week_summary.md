# Support Ticket Report
- Generated: 2025-02-18 21:08:11
- Period: 2025-02-17 to 2025-02-18

## Summary
- **Total Tickets:** 9
- **Resolved:** 8
- **Open:** 1

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 16.62 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 11.00 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 7.98 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 7.37 |
| [#619](https://github.com/pieces-app/support/issues/619) | Facing error on Ubuntu while opening Pieces "DatabaseException" | 4.74 |

## Common Issues
### 1. PiecesOS fails to launch or boots slowly
Users reported PiecesOS failing to launch or experiencing slow boot times, particularly after updating to version 11.1.0 or 11.1.1. This issue was attributed to data migration problems, hardware compatibility, and self-signed certificate errors. Solutions included updating to version 11.1.2, providing logs for debugging, and reinstalling the application.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#630](https://github.com/pieces-app/support/issues/630): core services

### 2. PiecesOS Launch Failure
Users reported PiecesOS failing to launch on Ubuntu, macOS, and Windows, encountering a "DatabaseException" or immediate crash. The issue stemmed from an incompatibility with systems lacking AVX2 support, particularly affecting older CPUs. Updating to PiecesOS version 11.1.2, which included a fix for the AVX2 dependency, resolved the problem for most users.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all

### 3. PiecesOS Connectivity and Launch Issues
Users report PiecesOS failing to connect to cloud services and local LLMs, displaying a 'trouble reaching our cloud services' error. This might be related to firewall, network configuration, or local model issues. Proposed solutions include checking network settings, ensuring firewall access, verifying local model compatibility, and updating to the latest PiecesOS version (11.1.2).

**Related Issues:**
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. PiecesOS fails to launch after update
Users reported PiecesOS failing to launch after updating to version 11.1.0 or 11.1.1. The issue seems to stem from compatibility issues and stricter hardware requirements. Solutions included providing logs for debugging, reinstalling the application, and a patch released in version 11.1.2.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#630](https://github.com/pieces-app/support/issues/630): core services


## Recommendations
- **Prioritize resolving PiecesOS launch failures:** The most frequent and active tickets relate to PiecesOS failing to launch, particularly after updates. Focus on addressing the root causes, such as hardware compatibility (AVX2 support), data migration issues, and self-signed certificate errors.
- **Improve communication about updates and compatibility:** Clearly communicate hardware and software requirements for PiecesOS updates to prevent users from encountering issues after updating. Provide clear instructions for troubleshooting common update problems.
- **Enhance error messaging and troubleshooting documentation:** Provide more informative error messages to users, enabling them to self-diagnose and resolve issues. Improve troubleshooting documentation, particularly for launch failures, connectivity problems, and local LLM integration.
- **Investigate and address cloud service connectivity issues:** Several users reported difficulties connecting to Pieces cloud services and local LLMs. Investigate the root causes, such as firewall configurations, network settings, and local model compatibility, and provide solutions or workarounds.
- **Monitor user feedback for emerging issues:** Continuously monitor support tickets and community forums for emerging trends or new issues. Proactively address these issues to prevent them from becoming widespread problems.
- **Consider implementing a system for early testing and feedback on updates:** Before releasing major updates, consider implementing a beta testing program or other mechanisms to gather early feedback from users. This can help identify and address potential issues before they impact a wider user base.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
