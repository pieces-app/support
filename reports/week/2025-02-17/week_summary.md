# Support Ticket Report
- Generated: 2025-02-19 21:07:40
- Period: 2025-02-17 to 2025-02-19

## Summary
- **Total Tickets:** 9
- **Resolved:** 8
- **Open:** 1

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 16.27 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 9.78 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 7.08 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 6.56 |
| [#619](https://github.com/pieces-app/support/issues/619) | Facing error on Ubuntu while opening Pieces "DatabaseException" | 4.05 |

## Common Issues
### 1. PiecesOS Boot-up and Launch Issues
Users reported PiecesOS getting stuck during boot-up at "ensure core dependency" or failing to launch after update 11.1.1. This affected both macOS and Windows users.  The issue seems to be related to stricter hardware requirements and core dependencies. Updating to the latest PiecesOS version (11.1.2) and desktop app (3.3.8) resolved the issue for most users.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS launch crashes due to hardware incompatibility
Users reported PiecesOS crashing on launch after updating to version 11.1.1. The issue stemmed from a new dependency requiring AVX2 support, missing in older CPUs. This affected macOS and Windows users. The Pieces team resolved the issue in version 11.1.2 by patching the dependency to support a wider range of CPUs.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS Boot Failure
Users reported PiecesOS failing to boot up on Ubuntu, Windows, and macOS due to a "DatabaseException" related to the "CouchbaseLiteVectorSearch" extension. The issue stemmed from hardware incompatibility with the extension's AVX2 requirement. Upgrading to PiecesOS version 11.1.2, which includes a patch addressing the hardware dependency, resolved the issue for most users.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#630](https://github.com/pieces-app/support/issues/630): core services

### 4. PiecesOS connectivity and local LLM issues
Users report Pieces for Developers failing to connect to cloud services and utilize local LLMs. This might be due to firewall restrictions, network issues, or problems with specific PiecesOS versions. Solutions include checking network connectivity, firewall settings, updating PiecesOS, and providing logs to support for further assistance.

**Related Issues:**
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 5. PiecesOS Launch Issues After Update
Users reported PiecesOS failing to launch after updating to version 11.1.0 or 11.1.1. The issue was attributed to accidental installation of the Intel version on ARM Macs and stricter hardware requirements. Solutions included reinstalling the correct version from the official website and a patch release (11.1.2) to address hardware compatibility.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#630](https://github.com/pieces-app/support/issues/630): core services


## Recommendations
- **Prioritize hardware compatibility testing:** The influx of issues related to CPU incompatibility highlights the need for rigorous hardware compatibility testing before major releases.
- **Improve communication about hardware requirements:** Clearly communicate any changes to system requirements in release notes and on the PiecesOS download page to prevent users from installing incompatible versions.
- **Develop a robust solution for older hardware:** Explore alternative dependencies or solutions to ensure PiecesOS remains accessible to users with older CPUs.
- **Enhance error messaging:** Provide more informative error messages that clearly indicate the source of the problem (e.g., specific hardware incompatibility) to help users troubleshoot issues more effectively.
- **Create a dedicated troubleshooting guide for connectivity issues:** Develop a comprehensive guide for resolving cloud service and local LLM connectivity problems, covering common causes like firewall settings and network configuration.
- **Investigate Pieces for Developers connectivity issues:** The reported problems with Pieces for Developers require further investigation to identify the root cause and implement a permanent fix.
- **Monitor user feedback for new PiecesOS versions:** Closely monitor user feedback following the release of PiecesOS 11.1.2 to ensure the patch effectively addresses the reported issues and identify any new problems that may arise.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
