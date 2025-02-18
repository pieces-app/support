# Support Ticket Report
- Generated: 2025-02-18 05:08:16
- Period: 2025-02-17 to 2025-02-18

## Summary
- **Total Tickets:** 8
- **Resolved:** 8
- **Open:** 0

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 16.51 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 11.00 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 8.36 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 7.68 |
| [#619](https://github.com/pieces-app/support/issues/619) | Facing error on Ubuntu while opening Pieces "DatabaseException" | 4.91 |

## Common Issues
### 1. PiecesOS boot-up failure due to core dependency issues
Users are experiencing difficulties launching PiecesOS Desktop Application, encountering errors during the core dependency check on both macOS and Windows. The issue appears linked to version 11.1.1 and stricter hardware requirements. Proposed solutions include updating to version 11.1.2, providing logs for diagnosis, and reinstalling the application.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS launch crash due to AVX2 CPU incompatibility
PiecesOS version 11.1.1 crashes on launch for users with CPUs lacking AVX2 support, particularly on macOS and Windows. This issue stems from a dependency on the AVX2 instruction set. The Pieces team resolved this in version 11.1.2, urging users to update to the latest version.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS Boot-up Issues
Users are experiencing problems with PiecesOS booting up, including slow boot times and getting stuck on "ensuring core dependencies." Suggested solutions include updating to the latest version of PiecesOS, reinstalling the application, and verifying installation files.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 4. Pieces OS 11.1.1 launch failure due to missing AVX2 support
Users reported Pieces OS 11.1.1 failing to launch on systems lacking AVX2 instruction set support. The issue stemmed from a dependency on the 'CouchbaseLiteVectorSearch' extension. The Pieces team quickly addressed the problem by releasing version 11.1.2, which resolved the dependency issue and enabled users to launch the application successfully.

**Related Issues:**
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 5. PiecesOS launch and download issues
Users report PiecesOS launch failures and difficulties downloading local LLMs. Issues often involve database errors or incomplete downloads. Solutions include updating to the latest PiecesOS version (11.1.2) and providing logs for further analysis.

**Related Issues:**
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.


## Recommendations
- **Prioritize resolution of PiecesOS launch failures:** The most frequent issues revolve around boot-up failures and crashes, particularly in version 11.1.1. Focus on addressing the root causes, such as core dependency issues and AVX2 incompatibility.
- **Improve communication about hardware requirements:** The launch issues related to AVX2 incompatibility highlight the need for clearer communication about minimum hardware requirements for PiecesOS. Update documentation and communication channels to prevent similar issues in the future.
- **Investigate and address slow boot times:** While not as frequent as launch failures, slow boot times are a recurring concern. Investigate the reasons behind these slowdowns and explore optimization strategies to improve the user experience.
- **Monitor the effectiveness of version 11.1.2:** Many reported issues seem resolved in version 11.1.2. Continuously monitor user feedback and support tickets to ensure the update effectively addresses the problems and no new issues arise.
- **Develop a more robust download and installation process:** Issues related to incomplete downloads and potential installation errors suggest room for improvement in the download and installation process. Explore ways to make it more resilient and user-friendly.
- **Proactively communicate known issues and solutions:** Maintain a dedicated space (e.g., a status page or forum thread) to proactively communicate known issues, workarounds, and planned resolutions. This can help reduce support ticket volume and user frustration.
- **Gather more detailed logs and system information:** Encourage users to provide comprehensive logs and system information when reporting issues. This will help the support team diagnose problems more efficiently and provide targeted solutions.
- **Consider automated troubleshooting tools:** Explore the possibility of developing automated troubleshooting tools or scripts that users can run to identify common problems and potentially resolve them without needing to contact support.

## Daily Reports
Here are the daily reports for this week:

