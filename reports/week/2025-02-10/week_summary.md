# Support Ticket Report
- Generated: 2025-02-15 13:11:02
- Period: 2025-02-10 to 2025-02-15

## Summary
- **Total Tickets:** 20
- **Resolved:** 6
- **Open:** 14

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 14.73 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 13.35 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 8.50 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 8.01 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 5.78 |

## Common Issues
### 1. Pieces OS launch failure due to AVX2 requirement
Users reported Pieces OS failing to launch on Windows and macOS after upgrading to version 11.1.1. The issue stemmed from stricter hardware requirements, specifically the need for AVX2 support. This affected users with older CPUs. The Pieces team addressed the issue by releasing version 11.1.2 with AVX2 adjustments, resolving the launch problem for most users.

**Related Issues:**
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch

### 2. PiecesOS Startup and Installation Issues
Users reported various issues with PiecesOS, including slow startup times, installation failures, and the application not launching. These problems were often linked to specific macOS versions and Apple Silicon chips. Solutions included updating to the latest PiecesOS version, ensuring compatibility with the user's hardware, and contacting support for further assistance.

**Related Issues:**
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 3. PiecesOS Startup Failure
Users report PiecesOS failing to launch or experiencing slow boot times after updates, particularly 11.1.0 and 11.1.1. This is potentially linked to data migration issues or conflicts with OneDrive. Solutions include updating to 11.1.2, reinstallation, or removing conflicting OneDrive folders.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#627](https://github.com/pieces-app/support/issues/627): PiecesOS was unable to launch.
- [#630](https://github.com/pieces-app/support/issues/630): core services

### 4. PiecesOS Desktop Application Issues
Users are experiencing issues with the PiecesOS Desktop application, including slow boot-up times, errors during startup, and problems with the Copilot service.  Solutions include updating to the latest version, checking for conflicts with other applications, and contacting support for further assistance.

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#609](https://github.com/pieces-app/support/issues/609): Unable to open Pieces Copilot Service

### 5. PiecesOS High Resource Consumption
Users report high RAM/CPU usage by PiecesOS, impacting system performance. This might be linked to internet connectivity, background processes, or specific features like LTM-1. Proposed solutions include restarting the application, disabling LTM-1, switching to cloud-only processing, and installing the latest updates which address memory leaks and optimize performance.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#626](https://github.com/pieces-app/support/issues/626): [Linux Mint 22.1] Pieces OS high CPU usage
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.


## Recommendations
- **Address PiecesOS Startup Issues:** Prioritize resolving issues related to PiecesOS startup failures and slow boot times, especially those linked to specific macOS versions, Apple Silicon chips, and recent updates (11.1.0 and 11.1.1).  This could involve investigating data migration processes and potential conflicts with OneDrive.
- **Improve AVX2 Compatibility Communication:** Clearly communicate AVX2 hardware requirements for PiecesOS to prevent launch failures for users with older CPUs.  This could involve pre-installation checks or more prominent documentation.
- **Optimize PiecesOS Resource Consumption:** Address concerns about high RAM and CPU usage by PiecesOS. Investigate potential memory leaks, optimize background processes, and explore options for users to manage resource consumption, such as disabling specific features or switching to cloud-only processing.
- **Gather More Information on Intermittent Issues:** For issues like slow startup times and high resource usage that are often linked to internet connectivity or specific user configurations, gather more detailed user logs and system information to help pinpoint the root cause and develop targeted solutions.
- **Review and Update Support Documentation:** Ensure support documentation, FAQs, and troubleshooting guides are up-to-date with information on common issues, including those related to AVX2 compatibility, startup problems, and high resource usage. Provide clear instructions and workarounds for users experiencing these problems.
- **Consider a PiecesOS Lite Mode:** Explore the feasibility of a "lite" mode for PiecesOS that offers reduced functionality with lower resource consumption. This could cater to users with less powerful hardware or those who only require basic features.

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
- [report_210547](daily/2025-02-14/report_210547.md)
- [report_130931](daily/2025-02-14/report_130931.md)
- [report_130744](daily/2025-02-15/report_130744.md)
- [report_050623](daily/2025-02-15/report_050623.md)
