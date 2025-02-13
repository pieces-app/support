# Support Ticket Report
- Generated: 2025-02-13 05:09:46
- Period: 2025-02-10 to 2025-02-13

## Summary
- **Total Tickets:** 16
- **Resolved:** 4
- **Open:** 12

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 15.35 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 11.04 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 8.75 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 8.61 |
| [#621](https://github.com/pieces-app/support/issues/621) | Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip | 5.38 |

## Common Issues
### 1. PiecesOS Desktop App Launch Failures
Users report PiecesOS Desktop App failing to launch, often after updates, on macOS and Windows. Issues include Apple Silicon compatibility, stricter hardware requirements, and core dependency loading problems. Solutions involve reinstalling correct versions, waiting for data migration, troubleshooting conflicting software, and updating to the latest patch release (11.1.1).

**Related Issues:**
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 2. Pieces OS fails to launch after update
Users report Pieces OS failing to launch after updating to version 11.1.1. The issue seems to stem from stricter hardware requirements, particularly impacting systems without AVX2 instruction set support. The Pieces team is aware of the problem and is actively working on a patch. As a temporary workaround, users can try providing their system specs to the support team.

**Related Issues:**
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch

### 3. Pieces Desktop App Performance Issues
Users reported various performance issues with the Pieces desktop app, including slow boot-up, freezing, and premature saving of edits. These issues were observed across different operating systems (macOS, Windows, Linux). Solutions included bug fixes, software updates, and configuration changes (e.g., disabling on-screen keyboard).

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#618](https://github.com/pieces-app/support/issues/618): [Linux Mint] Pieces app goes unresponsive on opening and every 5sec. Can't use it at all in any way

### 4. Pieces OS launch failure due to hardware incompatibility
Multiple users reported Pieces OS failing to launch after updating to version 11.1.1. The issue stems from stricter hardware requirements, particularly processors lacking AVX2 support. The Pieces team acknowledged the issue and is working on a patch. As a temporary solution, users can share their system specs for potential workarounds.

**Related Issues:**
- [#608](https://github.com/pieces-app/support/issues/608): Models Download Fail
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all

### 5. PiecesOS fails to launch
Users are reporting that the PiecesOS desktop application is failing to launch on their Windows machines. This issue appears to be related to stricter hardware requirements in recent versions, particularly for processors that do not support AVX2 instruction sets. The Pieces team is aware of the issue and is actively working on a patch to address it. In the meantime, users are encouraged to check for updates and ensure their hardware meets the minimum requirements.

**Related Issues:**
- [#617](https://github.com/pieces-app/support/issues/617): i got this error when opening localhost
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.


## Recommendations
- **Prioritize resolving launch failures:** The most frequent and active support tickets revolve around PiecesOS and Desktop App launch failures, particularly after the 11.1.1 update. Focus on resolving these issues urgently to reduce ticket influx.
- **Address hardware incompatibility:** Investigate and patch the AVX2 instruction set incompatibility causing launch failures for users on older hardware. Consider providing clear system requirements documentation.
- **Improve communication about known issues:**  The hardware incompatibility issue seems to have caught many users off guard. Proactively communicate known issues and workarounds, potentially through in-app notifications or a dedicated status page.
- **Investigate and address performance issues:** Several tickets report performance issues like slow boot-up and freezing. Allocate resources to diagnose and address these issues to improve the user experience.
- **Review PiecesOS update process:** The update to version 11.1.1 introduced significant issues. Review the update process to ensure smoother transitions and minimize breaking changes for users in the future.
- **Gather more detailed system information:** Encourage users to provide detailed system specs when reporting issues to aid in faster diagnosis and resolution. Consider automating this process through log collection or system profiling tools.
- **Consider a dedicated bug bounty program:** Given the recurrence of bugs like the conversation title saving issue, explore implementing a bug bounty program to incentivize users to report bugs and security vulnerabilities.

## Daily Reports
Here are the daily reports for this week:

- [report_131039](daily/2025-02-11/report_131039.md)
- [report_050643](daily/2025-02-11/report_050643.md)
- [report_210559](daily/2025-02-11/report_210559.md)
- [report_210558](daily/2025-02-12/report_210558.md)
- [report_131007](daily/2025-02-12/report_131007.md)
- [report_050654](daily/2025-02-13/report_050654.md)
