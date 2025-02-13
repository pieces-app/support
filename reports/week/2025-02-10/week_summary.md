# Support Ticket Report
- Generated: 2025-02-13 13:13:58
- Period: 2025-02-10 to 2025-02-13

## Summary
- **Total Tickets:** 17
- **Resolved:** 4
- **Open:** 13

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 14.16 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 11.04 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 8.18 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 7.74 |
| [#626](https://github.com/pieces-app/support/issues/626) | [Linux Mint 22.1] Pieces OS high CPU usage | 6.94 |

## Common Issues
### 1. PiecesOS fails to launch after update
Users report PiecesOS failing to launch after updating to version 11.1.1. The issue seems to stem from stricter hardware requirements, particularly related to AVX2 support. The Pieces team is aware of the problem and is actively working on a patch. A fix is expected to be released soon.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS launch failures after version 11.1.1 update
Users report PiecesOS failing to launch after updating to version 11.1.1, across macOS and Windows. Issues seem related to hardware compatibility, particularly AVX2 support and architecture-specific builds (ARM/Intel). The Pieces team is actively working on patches and encouraging users to provide logs for analysis.

**Related Issues:**
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch

### 3. Pieces OS and Desktop App Bugs and Fixes
Users reported various bugs including slow boot-up, unresponsive app, and eager saving. These issues were often related to specific OS versions or updates. Solutions included patches, new builds, and workarounds like disabling on-screen keyboards. The Pieces team actively addressed these issues, releasing fixes and updates to improve user experience.

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#618](https://github.com/pieces-app/support/issues/618): [Linux Mint] Pieces app goes unresponsive on opening and every 5sec. Can't use it at all in any way

### 4. Pieces OS fails to launch on version 11.1.1
Users are reporting that Pieces OS version 11.1.1 is failing to launch on both Windows and Linux operating systems. The issue seems to stem from stricter hardware requirements, particularly related to AVX2 processor support. The Pieces team is aware of the problem and is actively working on a patch. A new release addressing this issue is expected to be available soon.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 5. PiecesOS Launch Issues on MacOS
Users are experiencing issues launching PiecesOS on MacOS after updating to recent versions, particularly on M1/M2 Macs and systems without AVX2 support. The problems often stem from installing the incorrect architecture version (Intel vs. ARM) or incompatibilities with the new vector library. Solutions include reinstalling the correct version, ensuring AVX2 support, and waiting for upcoming bug fixes from the Pieces team.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch


## Recommendations
- "**Prioritize resolving PiecesOS launch failures:** The most frequent and active support tickets revolve around PiecesOS failing to launch after the 11.1.1 update, particularly due to AVX2 support and architecture-specific issues. Focus on resolving these issues urgently to reduce ticket volume."
- "**Improve communication about hardware requirements:** Clearly communicate the updated hardware requirements for PiecesOS 11.1.1, especially AVX2 support, on the download page, installation instructions, and release notes. This will help users avoid installation issues."
- "**Provide troubleshooting steps for launch issues:** Create a comprehensive troubleshooting guide for PiecesOS launch failures, covering common problems like AVX2 incompatibility, incorrect architecture versions, and potential workarounds. This will empower users to self-resolve issues."
- "**Investigate and address Linux Mint freezing:**  Address the issue of the Pieces app freezing on Linux Mint, which is a recurring problem. While a workaround exists, a permanent fix is crucial for a better user experience."
- "**Monitor and address high CPU usage on Linux Mint:** Investigate reports of high CPU usage by Pieces OS on Linux Mint 22.1. Identify the root cause and implement optimizations to improve performance and resource utilization."

## Daily Reports
Here are the daily reports for this week:

- [report_131039](daily/2025-02-11/report_131039.md)
- [report_050643](daily/2025-02-11/report_050643.md)
- [report_210559](daily/2025-02-11/report_210559.md)
- [report_210558](daily/2025-02-12/report_210558.md)
- [report_131007](daily/2025-02-12/report_131007.md)
- [report_131018](daily/2025-02-13/report_131018.md)
- [report_050654](daily/2025-02-13/report_050654.md)
