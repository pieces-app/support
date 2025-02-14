# Support Ticket Report
- Generated: 2025-02-14 05:09:37
- Period: 2025-02-10 to 2025-02-14

## Summary
- **Total Tickets:** 17
- **Resolved:** 5
- **Open:** 12

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 14.16 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 9.75 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 8.18 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 7.74 |
| [#626](https://github.com/pieces-app/support/issues/626) | [Linux Mint 22.1] Pieces OS high CPU usage | 6.94 |

## Common Issues
### 1. PiecesOS Launch Failure Across Platforms
Users report PiecesOS failing to launch on macOS and Windows after recent updates. Issues include dependency errors, long boot times, and stricter hardware requirements. Solutions involve using specific OS builds (Apple Silicon for M1 Macs), waiting for new releases addressing hardware compatibility, and providing logs to the support team for diagnosis.

**Related Issues:**
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS Startup Failure and Model Download Issues
Users report PiecesOS failing to launch, getting stuck during startup, or being unable to download models. This seems to affect various OS versions and might be related to hardware requirements, data migration issues, or certificate errors. Proposed solutions include updating to the latest version, providing logs for diagnosis, and waiting for a new release with bug fixes.

**Related Issues:**
- [#608](https://github.com/pieces-app/support/issues/608): Models Download Fail
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 3. PiecesOS launch crash due to AVX2 incompatibility
Users are reporting PiecesOS crashing immediately after launch on macOS and Windows, particularly after upgrading to version 11.1.1. The issue stems from an AVX2 incompatibility in the new vector library. A fix was identified and a new release was planned to address this problem. Users experiencing this issue are advised to update to the latest version.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. Pieces Desktop App Performance and Stability Issues
Users report various issues with the Pieces desktop app, including slow startup times, freezing, and unexpected behavior. These problems are often related to specific operating systems, software versions, or conflicts with other applications. Solutions include updating to the latest version, disabling certain features, or waiting for a patch from the Pieces team.

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#618](https://github.com/pieces-app/support/issues/618): [Linux Mint] Pieces app goes unresponsive on opening and every 5sec. Can't use it at all in any way

### 5. PiecesOS Startup Failure on MacOS
Users are experiencing issues with PiecesOS failing to launch or getting stuck during startup on MacOS, especially after updating to recent versions. This is often linked to installing the incorrect build (Intel vs. Apple Silicon) or issues with core dependencies. Solutions include reinstalling the correct version from the official link, ensuring a stable internet connection, and checking for conflicting applications.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)


## Recommendations
- **Prioritize resolving launch failures:** Focus on addressing the common issue of PiecesOS launch failures across platforms, particularly related to AVX2 incompatibility, incorrect builds for MacOS architectures, and core dependency issues.
- **Improve communication about hardware requirements:** Clearly communicate the minimum hardware requirements for running PiecesOS, especially with the release of version 11.1.1, to prevent users from encountering launch issues.
- **Investigate and address model download failures:** Investigate the root cause of model download failures and provide solutions, as this issue impacts the user experience, particularly for those utilizing Ollama.
- **Monitor and improve startup performance:** Continue to monitor and optimize the startup time of PiecesOS, particularly on MacOS, as slow startup times can be frustrating for users.
- **Gather more detailed logs and diagnostics:** Implement more robust logging and diagnostic tools to help identify the root cause of issues like freezing and unresponsiveness on certain operating systems and configurations.
- **Consider a dedicated support channel for Linux users:** Given the specific issues encountered by Linux users, particularly on Linux Mint, consider creating a dedicated support channel or knowledge base to address their unique needs.
- **Proactively communicate known issues and workarounds:** Maintain a publicly accessible list of known issues and workarounds, such as the virtual keyboard issue on Linux Mint, to keep users informed and minimize frustration.
- **Review and update documentation:** Ensure that all documentation, including installation guides and troubleshooting steps, is up-to-date and reflects the latest software versions and known issues.
- **Gather user feedback on specific features:** Encourage users to provide feedback on specific features, such as the conversation title saving behavior, to identify areas for improvement in future releases.
- **Continue monitoring and addressing top active tickets:** Regularly review and prioritize the most active support tickets to ensure that critical issues are addressed promptly and effectively.

## Daily Reports
Here are the daily reports for this week:

- [report_131039](daily/2025-02-11/report_131039.md)
- [report_050643](daily/2025-02-11/report_050643.md)
- [report_210559](daily/2025-02-11/report_210559.md)
- [report_210558](daily/2025-02-12/report_210558.md)
- [report_131007](daily/2025-02-12/report_131007.md)
- [report_210607](daily/2025-02-13/report_210607.md)
- [report_131018](daily/2025-02-13/report_131018.md)
- [report_050654](daily/2025-02-13/report_050654.md)
