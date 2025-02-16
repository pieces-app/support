# Support Ticket Report
- Generated: 2025-02-16 05:09:06
- Period: 2025-02-10 to 2025-02-16

## Summary
- **Total Tickets:** 20
- **Resolved:** 6
- **Open:** 14

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 14.73 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 12.77 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 8.50 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 8.01 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 5.78 |

## Common Issues
### 1. PiecesOS launch failure due to AVX2 incompatibility
Multiple users reported PiecesOS failing to launch after updating to version 11.1.1. The issue stemmed from hardware incompatibility with the AVX2 instruction set. The Pieces team acknowledged the problem and released a fix in version 11.1.2, resolving the launch issue for affected users.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS boot-up failure due to core dependencies
Users are experiencing issues with PiecesOS getting stuck during startup, particularly on the "dependencies scenario" tab. This problem appears to be related to recent updates and stricter hardware requirements. Solutions include upgrading to the latest version (11.1.2), reinstalling PiecesOS, and waiting for a patch to address hardware compatibility.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS launch failures on macOS
Users reported PiecesOS failing to launch on macOS after updating to version 11.1.1. The issue was attributed to hardware incompatibility, particularly on M1 chips and systems lacking AVX2 support. The Pieces team addressed the problem by releasing version 11.1.2, which includes fixes for these issues. Users experiencing launch problems are advised to upgrade to the latest version.

**Related Issues:**
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch

### 4. PiecesOS fails to launch after update
Users report PiecesOS failing to launch after updating to version 11.1.1. This is due to stricter hardware requirements, specifically AVX2 support. The issue was acknowledged by the Pieces team and a hotfix was released in version 11.1.2. Users experiencing this issue are advised to update to the latest version.

**Related Issues:**
- [#627](https://github.com/pieces-app/support/issues/627): PiecesOS was unable to launch.
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all

### 5. PiecesOS Crashing on macOS after Update
Users reported PiecesOS crashing on macOS after updating to version 11.1.0 or 11.1.1. The issue was primarily observed on machines with Apple Silicon (M1, M2, etc.) and Intel CPUs lacking AVX2 support. The solution involved reinstalling from the correct download link for Apple Silicon or upgrading to version 11.1.2, which addressed the AVX2 compatibility issue.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#630](https://github.com/pieces-app/support/issues/630): core services


## Recommendations
- **Prioritize resolving PiecesOS launch failures:** The most frequent and active support tickets revolve around PiecesOS failing to launch after the 11.1.1 update, particularly due to AVX2 incompatibility and issues on macOS. Focus on providing clear guidance for affected users, such as upgrading to 11.1.2 or reinstalling with the correct version for their architecture.
- **Improve communication about hardware requirements:** The launch failures highlight the need for clearer communication about PiecesOS's hardware requirements. Update the documentation and installation instructions to prominently feature these requirements, potentially including a system check tool.
- **Investigate and address PiecesOS boot-up issues:**  Users are experiencing issues with PiecesOS getting stuck during boot-up, specifically on the "dependencies scenario" tab. Investigate the root cause of this problem and provide a timely resolution.
- **Address high resource usage:** Some users report high RAM and CPU usage by PiecesOS. Investigate these reports, optimize resource utilization, and provide guidance on configuration options that could alleviate these issues.
- **Review and improve macOS compatibility:** A significant number of issues originate from macOS users, particularly those with M1 chips. Dedicate resources to thoroughly test and ensure compatibility with various macOS versions and architectures.

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
- [report_210600](daily/2025-02-15/report_210600.md)
- [report_050623](daily/2025-02-15/report_050623.md)
