# Support Ticket Report
- Generated: 2025-02-20 05:08:46
- Period: 2025-02-17 to 2025-02-20

## Summary
- **Total Tickets:** 9
- **Resolved:** 8
- **Open:** 1

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 16.27 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 9.33 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 7.08 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 6.56 |
| [#619](https://github.com/pieces-app/support/issues/619) | Facing error on Ubuntu while opening Pieces "DatabaseException" | 4.05 |

## Common Issues
### 1. PiecesOS startup failure and slow boot
Users reported PiecesOS failing to launch or experiencing slow boot times, particularly after updates. The issues seem to stem from core dependency errors, potential conflicts with older OS versions or specific setups, and stricter hardware requirements in newer releases. Proposed solutions included reinstalling, updating to the latest version (11.1.2), and providing logs for analysis. 

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS launch failure due to missing AVX2 support
Multiple users reported PiecesOS failing to launch on Ubuntu, Windows, and macOS after upgrading to version 11.1.1. The issue was linked to a database extension requiring AVX2 CPU instruction set support. The Pieces team resolved the issue by releasing version 11.1.2, which included a fix for the AVX2 requirement. Users experiencing this issue are advised to upgrade to the latest PiecesOS version.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch

### 3. PiecesOS Connectivity and Launch Issues
Users report PiecesOS failing to connect to cloud services or download local LLMs, and encountering launch issues. This is often due to network configuration, firewall restrictions, or stricter hardware requirements in recent versions. Solutions include verifying network settings, checking firewall rules, providing logs for analysis, and updating to the latest PiecesOS version.

**Related Issues:**
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. PiecesOS Boot and Launch Issues
Users reported PiecesOS failing to boot or launch, particularly after updating to versions 11.1.0 and 11.1.1. This was attributed to potential incompatibility with Apple Silicon Macs and stricter hardware requirements. Solutions included reinstalling the correct version, providing logs for analysis, and updating to version 11.1.2, which addressed the hardware requirement issue.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#630](https://github.com/pieces-app/support/issues/630): core services


## Recommendations
- **Prioritize resolving PiecesOS boot and launch issues:** These issues are the most frequent and impactful, affecting users across different operating systems. Focus on addressing root causes, such as hardware incompatibility and dependency errors.
- **Improve communication about hardware and software requirements:** Clearly communicate minimum system requirements for PiecesOS, especially CPU instruction set support (AVX2), to prevent installation and launch issues.
- **Enhance error messaging and troubleshooting documentation:** Provide more informative error messages to users, guiding them towards relevant solutions. Update documentation with detailed troubleshooting steps for common issues.
- **Investigate and address network connectivity problems:**  Diagnose the root causes of cloud service and local LLM connection issues. Provide clear instructions for users to verify network settings and firewall configurations.
- **Consider a more robust testing and release process:** Implement rigorous testing for new PiecesOS versions across different hardware and software configurations to identify potential issues before release.
- **Proactively monitor user feedback and support channels:** Regularly analyze support tickets, community forums, and other feedback channels to identify emerging issues and trends.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
