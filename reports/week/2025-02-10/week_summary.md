# Support Ticket Report
- Generated: 2025-02-14 21:08:43
- Period: 2025-02-10 to 2025-02-14

## Summary
- **Total Tickets:** 19
- **Resolved:** 6
- **Open:** 13

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 14.09 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 11.50 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 7.93 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 7.12 |
| [#627](https://github.com/pieces-app/support/issues/627) | PiecesOS was unable to launch. | 5.68 |

## Common Issues
### 1. PiecesOS fails to launch after update
Users report PiecesOS failing to launch after updating, often getting stuck on "ensure core dependencies." This issue primarily affects Windows users and is linked to a buggy migration process, potentially conflicting with OneDrive. Reinstalling with the latest build (11.1.1) or using an alternative installer often resolves the issue.

**Related Issues:**
- [#627](https://github.com/pieces-app/support/issues/627): PiecesOS was unable to launch.
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 2. PiecesOS v11.1.1 launch failure due to AVX2
Users are reporting PiecesOS v11.1.1 fails to launch on systems without AVX2 support. This impacts both Windows and MacOS users. The issue stems from a new dependency on AVX2 in the CouchbaseLiteVectorSearch extension. The Pieces team is working on a patch to address this and expects to release a fix shortly.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS Boot-up Failure and Desktop App Launch Issues
Users reported PiecesOS failing to boot, getting stuck on "ensure core dependencies" or failing to launch the Desktop App. This was often due to outdated builds, conflicting processes, or incorrect architecture downloads. Solutions included updating to the latest build, killing conflicting processes, and reinstalling using the correct architecture-specific download.

**Related Issues:**
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip

### 4. PiecesOS Desktop App Performance Issues
Users reported various performance issues with the PiecesOS Desktop app, including slow boot-up, freezing, and unresponsiveness. These issues were observed across different operating systems (macOS, Windows, Linux) and were often related to software updates, core dependencies, and conflicts with other applications like OneDrive. Solutions included updating to the latest PiecesOS build, reinstalling the app, disabling conflicting software features, and waiting for bug fixes from the Pieces team.

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#618](https://github.com/pieces-app/support/issues/618): [Linux Mint] Pieces app goes unresponsive on opening and every 5sec. Can't use it at all in any way

### 5. Pieces OS Performance and Stability Issues
Users reported high CPU usage, unresponsiveness, and launch failures in Pieces OS 11.1.1 on Linux and Windows. Proposed solutions include disabling LTM-1, waiting for Flutter updates, and a patch for launch failures. The Pieces team is actively investigating and addressing these issues.

**Related Issues:**
- [#626](https://github.com/pieces-app/support/issues/626): [Linux Mint 22.1] Pieces OS high CPU usage
- [#618](https://github.com/pieces-app/support/issues/618): [Linux Mint] Pieces app goes unresponsive on opening and every 5sec. Can't use it at all in any way
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.


## Recommendations
- **Prioritize addressing launch failures:** The most frequent and active tickets revolve around PiecesOS launch failures, particularly after the 11.1.1 update. Focus on resolving these issues urgently to minimize user disruption.
- **Improve communication about AVX2 requirement:** Clearly communicate the new AVX2 requirement for PiecesOS v11.1.1 on both download pages and release notes. Provide guidance for users with unsupported systems.
- **Investigate and address performance issues:** Several reports mention high CPU usage, unresponsiveness, and slow boot-up. Investigate these issues systematically, potentially focusing on LTM-1 and interactions with specific operating systems and applications.
- **Review OneDrive interaction:** Issues related to OneDrive conflicts during PiecesOS installation and migration persist. Review and optimize this interaction to prevent future occurrences.
- **Enhance documentation for common issues:** Create or update support articles addressing the common issues identified, such as launch failures, AVX2 incompatibility, and OneDrive conflicts. Provide clear troubleshooting steps for users.

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
