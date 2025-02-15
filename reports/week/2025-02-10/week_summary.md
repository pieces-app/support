# Support Ticket Report
- Generated: 2025-02-15 05:09:13
- Period: 2025-02-10 to 2025-02-15

## Summary
- **Total Tickets:** 19
- **Resolved:** 6
- **Open:** 13

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 15.20 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 13.35 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 8.70 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 8.37 |
| [#630](https://github.com/pieces-app/support/issues/630) | core services | 5.68 |

## Common Issues
### 1. PiecesOS launch crash due to AVX2 dependency
PiecesOS versions 11.1.0 and 11.1.1 encounter launch crashes on certain hardware configurations, particularly those lacking AVX2 support. This issue affects macOS and Windows users. The Pieces team has addressed this in version 11.1.2, urging users to upgrade for resolution.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS boot-up and launch issues
Users are experiencing slow boot-up times, launch failures, and errors related to core dependencies in PiecesOS. This is primarily affecting macOS and Windows users. The issue seems to stem from recent updates, particularly versions 11.1.1 and later. Proposed solutions include updating to the latest version (11.1.2), providing support logs, and reinstalling PiecesOS.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS fails to launch after update
Users report PiecesOS failing to launch, often after an update, on Windows and macOS.  The issue seems related to stricter hardware requirements in version 11.1.1 and data migration issues.  Updating to version 11.1.2, which includes a fix, is recommended.  Uninstalling and reinstalling PiecesOS is also suggested as a potential solution.

**Related Issues:**
- [#627](https://github.com/pieces-app/support/issues/627): PiecesOS was unable to launch.
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 4. Pieces OS launch failures
Users report Pieces OS failing to launch, often after updates, on macOS and Windows.  Issues involve core dependencies, hardware requirements, and data migration. Solutions include reinstalling with correct architecture, updating to the latest version (11.1.1 or 11.1.2), and providing logs for support.

**Related Issues:**
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 5. Pieces Desktop App Unresponsive and Freezing
Users report the Pieces Desktop app becoming unresponsive or freezing on macOS and Linux. Issues include premature saving of conversation titles, failure to boot up after updates, and frequent freezing. Solutions involve software updates, disabling on-screen keyboards (Linux), and reinstallation.

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#618](https://github.com/pieces-app/support/issues/618): [Linux Mint] Pieces app goes unresponsive on opening and every 5sec. Can't use it at all in any way


## Recommendations
- Prioritize resolving PiecesOS launch issues affecting macOS and Windows users, particularly those related to AVX2 dependency and core dependencies.
- Investigate and address the slow boot-up times and freezing issues reported with the Pieces Desktop app on macOS and Linux.
- Improve communication about hardware requirements for PiecesOS, especially with new releases, to prevent user confusion and frustration.
- Consider adding a system check or warning during the update process to alert users about potential incompatibility issues.
- Monitor the effectiveness of the 11.1.2 update in resolving the reported launch and boot-up problems and communicate proactively with users about its status.
- Gather more detailed logs and diagnostics from users experiencing issues to help identify the root causes and develop targeted solutions.
- Provide clear and concise instructions on how to provide support logs and report issues effectively.
- Explore ways to improve the stability and performance of the Pieces Desktop app on Linux, potentially in collaboration with the Flutter community.
- Review and update the PiecesOS installation process to ensure users are installing the correct architecture (Apple Silicon vs. Intel) for their macOS devices.
- Continue monitoring user feedback and support tickets for emerging trends and potential new issues to address proactively.

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
- [report_050623](daily/2025-02-15/report_050623.md)
