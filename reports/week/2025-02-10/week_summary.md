# Support Ticket Report
- Generated: 2025-02-14 13:12:24
- Period: 2025-02-10 to 2025-02-14

## Summary
- **Total Tickets:** 18
- **Resolved:** 5
- **Open:** 13

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 13.67 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 9.75 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 7.93 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 7.12 |
| [#626](https://github.com/pieces-app/support/issues/626) | [Linux Mint 22.1] Pieces OS high CPU usage | 5.50 |

## Common Issues
### 1. PiecesOS Fails to Launch After Update
Users report PiecesOS failing to launch, often getting stuck on "Ensure Core Dependency" after an update. This issue appears primarily on Windows and might be related to hardware requirements. Proposed solutions include reinstalling, trying the AppInstaller build, or waiting for the patch (v11.1.1 aimed to address this but some users still face issues).

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#627](https://github.com/pieces-app/support/issues/627): PiecesOS was unable to launch.

### 2. Pieces OS experiencing performance issues and crashes
Users are reporting high CPU usage, unresponsiveness, and crashes with the Pieces OS desktop app on Linux and macOS.  The issues seem to stem from LTM-1 algorithm, Flutter bugs on certain Linux Mint versions, and problems with the vector library on macOS. Proposed solutions include disabling LTM-1, disabling the virtual keyboard in accessibility settings on Linux Mint, and waiting for an upcoming patch from the Pieces team.

**Related Issues:**
- [#626](https://github.com/pieces-app/support/issues/626): [Linux Mint 22.1] Pieces OS high CPU usage
- [#618](https://github.com/pieces-app/support/issues/618): [Linux Mint] Pieces app goes unresponsive on opening and every 5sec. Can't use it at all in any way
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch

### 3. PiecesOS failing to launch after update
Users report PiecesOS failing to launch after a recent update, specifically version 11.1.1. The issue seems to stem from stricter hardware requirements, particularly the need for AVX2 support. A patch is expected to be released to address this, with temporary solutions involving providing system specs to support or waiting for the upcoming fix.

**Related Issues:**
- [#627](https://github.com/pieces-app/support/issues/627): PiecesOS was unable to launch.
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all

### 4. Pieces OS launch failure on Windows and Ubuntu
Users report Pieces OS failing to launch on Windows and Ubuntu after updating to version 11.1.1. The issue seems to stem from stricter hardware requirements, particularly AVX2 support. A patch is expected to be released on February 14th, 2025. Users facing this issue are encouraged to contact Pieces support and provide their system logs.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all

### 5. PiecesOS Failing to Launch After Update
Users report PiecesOS failing to launch, particularly after updating to version 11.1.1. This issue appears across macOS and Windows. Proposed solutions include ensuring compatibility with M1 chips on macOS and waiting for a patch addressing stricter hardware requirements on Windows.

**Related Issues:**
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#627](https://github.com/pieces-app/support/issues/627): PiecesOS was unable to launch.


## Recommendations
- **Prioritize resolving launch failures:** The most frequent and active tickets relate to PiecesOS failing to launch after the 11.1.1 update, particularly on Windows due to stricter hardware requirements. Focus on resolving this urgently.
- **Investigate and address performance issues:** Several users report high CPU usage, unresponsiveness, and crashes, especially on Linux and macOS. Allocate resources to identify the root causes and implement fixes.
- **Improve communication about hardware requirements:** The launch failures highlight the need for clearer communication about updated hardware requirements, particularly AVX2 support. Update system requirements documentation and announcements.
- **Review and optimize LTM-1 algorithm:**  High resource consumption related to LTM-1 is a recurring issue. Investigate optimizing the algorithm or provide clearer guidance on disabling it.
- **Monitor Flutter-related issues on Linux Mint:**  Address the freezing issue on specific Linux Mint versions stemming from Flutter bugs. Explore workarounds or prioritize a permanent fix in collaboration with the Flutter community.
- **Ensure M1 chip compatibility on macOS:** Investigate and address issues related to PiecesOS launch failures on macOS devices with M1 chips.
- **Consider a dedicated support channel for launch issues:** Given the high volume of launch-related tickets, create a dedicated support channel or knowledge base section to streamline troubleshooting.

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
- [report_130931](daily/2025-02-14/report_130931.md)
