# Support Ticket Report
- Generated: 2025-02-22 05:08:00
- Period: 2025-02-17 to 2025-02-22

## Summary
- **Total Tickets:** 11
- **Resolved:** 8
- **Open:** 3

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 15.18 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 8.65 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 6.62 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 6.17 |
| [#631](https://github.com/pieces-app/support/issues/631) | Pieces for Developers Not Working – Cloud Service & Local LLM Issues | 5.00 |

## Common Issues
### 1. PiecesOS Boot-up Failure
Users reported PiecesOS failing to launch or getting stuck during startup, particularly on versions 11.1.0 and 11.1.1. This was attributed to data migration issues, conflicting software, and stricter hardware requirements. Solutions included reinstalling the app, updating to the latest version (11.1.2), and removing conflicting software data.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS launch failure due to AVX2
Multiple users reported PiecesOS failing to launch after upgrading to version 11.1.1. The issue stemmed from a hardware incompatibility related to missing AVX2 support in older CPUs. The Pieces team acknowledged the problem and released version 11.1.2, which includes a fix to address the AVX2 dependency and ensure broader compatibility.

**Related Issues:**
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS Connectivity and Launch Issues
Users report PiecesOS failing to connect to cloud services or utilize local LLMs. This might be due to firewall restrictions, network configuration, or stricter hardware requirements in recent versions. Solutions include checking network settings, providing logs for diagnosis, and updating to the latest version (11.1.2).

**Related Issues:**
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. PiecesOS fails to launch
Users reported PiecesOS failing to launch on Windows and macOS, often stuck at "ensure core dependency" stage. The issue seems to be related to stricter hardware requirements in version 11.1.1.  Updating to version 11.1.2, which relaxed hardware requirements, resolved the issue for most users. Providing logs to support can help diagnose persistent issues.

**Related Issues:**
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#630](https://github.com/pieces-app/support/issues/630): core services

### 5. PiecesOS Connectivity and Functionality Issues
Users report PiecesOS failing to connect to cloud services or utilize local LLMs. This might be due to firewall restrictions, network configuration issues, or problems with specific PiecesOS versions. Solutions include checking network settings, updating PiecesOS, and providing logs for further analysis by the support team.

**Related Issues:**
- [#634](https://github.com/pieces-app/support/issues/634): Unable to sign in! We aren't sure what happened.
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"


## Recommendations
- **Prioritize resolution of PiecesOS launch failures:** Focus on addressing the root causes of boot-up failures and AVX2 incompatibility to ensure a smoother user experience, especially after updates.
- **Improve communication about hardware requirements:** Clearly communicate minimum hardware requirements for PiecesOS, particularly AVX2 support, to prevent installation issues and frustration for users with older CPUs.
- **Investigate and address connectivity issues:** Analyze logs and diagnose the root causes of cloud service and local LLM connection problems to ensure stable and reliable functionality.
- **Enhance support resources for network configuration:** Provide clear and detailed instructions on firewall settings and network configurations to help users resolve connectivity issues independently.
- **Proactively monitor error trends:** Implement a system to track and analyze error messages and crash reports to identify recurring issues and prioritize fixes in future releases.
- **Improve sign-in process:** Investigate and resolve issues with Google and GitHub account connections to ensure a seamless sign-in experience for users.
- **Gather detailed logs for persistent issues:** Encourage users to provide comprehensive logs and system information for unresolved issues to facilitate faster diagnosis and resolution by the support team.
- **Consider a dedicated support channel for PiecesOS:**  Given the technical nature of PiecesOS issues, a dedicated support channel or forum could help streamline troubleshooting and knowledge sharing.
- **Develop a system for early detection of hardware incompatibility:** Implement checks during installation or update processes to identify potential hardware incompatibilities and alert users before proceeding.
- **Improve documentation and FAQs:** Update support documentation and FAQs to include common troubleshooting steps for launch failures, connectivity issues, and sign-in problems. 

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
- [report_210558](daily/2025-02-20/report_210558.md)
- [report_131056](daily/2025-02-20/report_131056.md)
- [report_210558](daily/2025-02-21/report_210558.md)
- [report_131009](daily/2025-02-21/report_131009.md)
