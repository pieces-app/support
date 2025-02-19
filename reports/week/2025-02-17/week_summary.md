# Support Ticket Report
- Generated: 2025-02-19 05:08:36
- Period: 2025-02-17 to 2025-02-19

## Summary
- **Total Tickets:** 9
- **Resolved:** 8
- **Open:** 1

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 16.62 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 10.41 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 7.98 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 7.37 |
| [#619](https://github.com/pieces-app/support/issues/619) | Facing error on Ubuntu while opening Pieces "DatabaseException" | 4.74 |

## Common Issues
### 1. PiecesOS Boot-up and Launch Issues
Users reported PiecesOS getting stuck during boot-up or failing to launch, particularly on macOS and older Windows systems. This was often linked to core dependencies, data migration, or hardware requirements. Proposed solutions included reinstalling Windows, updating to the latest PiecesOS version, closing and reopening the app, and providing logs for debugging. The issue was largely resolved in subsequent updates.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS launch failure due to missing AVX2 support
Multiple users reported PiecesOS failing to launch on Ubuntu, macOS, and Windows after upgrading to version 11.1.1. The issue stemmed from a dependency on AVX2 instructions not supported by some older CPUs. The Pieces team promptly released version 11.1.2, removing the AVX2 requirement and resolving the launch issue for affected users.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all

### 3. PiecesOS Crashing or Not Launching on macOS
Users reported PiecesOS crashing on launch or taking a long time to boot, particularly after updating to version 11.1.1. The issue was linked to CPU architecture incompatibility and a fix was released in version 11.1.2. Users experiencing this issue are advised to update to the latest version.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch

### 4. PiecesOS Connectivity and Launch Issues
Users report PiecesOS failing to connect to cloud services or utilize local LLMs. This might be due to firewall/network configurations, hardware requirements, or software bugs. Solutions include checking network settings, updating PiecesOS, and providing logs for debugging.

**Related Issues:**
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.


## Recommendations
- **Prioritize resolution of PiecesOS launch issues:** Focus on addressing the root causes of boot-up failures and crashes, particularly those related to hardware requirements, CPU compatibility (AVX2 support), and core dependencies. 
- **Improve communication around hardware requirements:** Clearly communicate minimum and recommended hardware specifications for PiecesOS, ensuring users are aware of potential compatibility issues before upgrading. 
- **Enhance error messaging and logging:** Provide more informative error messages to users when launch failures occur, including specific details about the issue and potential solutions. Improve logging mechanisms to capture more detailed information for faster debugging. 
- **Develop a comprehensive troubleshooting guide:** Create a dedicated section in the PiecesOS documentation for troubleshooting launch and connectivity issues, covering common problems, solutions, and FAQs. 
- **Consider a dedicated support channel for developers:** Given the specific issues reported with "Pieces for Developers," explore creating a dedicated support channel or forum to address the unique needs of this user group. 

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
