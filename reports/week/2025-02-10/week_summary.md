# Support Ticket Report
- Generated: 2025-02-16 21:09:37
- Period: 2025-02-10 to 2025-02-16

## Summary
- **Total Tickets:** 21
- **Resolved:** 6
- **Open:** 15

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 14.84 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 12.77 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 8.04 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 7.50 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 5.78 |

## Common Issues
### 1. PiecesOS Crash: AVX2 Requirement
PiecesOS version 11.1.1 crashes on launch for users with CPUs lacking AVX2 support, preventing application use. This issue affected macOS and Windows users. The Pieces team resolved this in version 11.1.2 by removing the AVX2 requirement. Users experiencing this issue are advised to upgrade to the latest version.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS Launch Failure due to Missing AVX2 Support
Multiple users reported PiecesOS failing to launch on Ubuntu, Windows, and macOS after upgrading to version 11.1.1. The issue stemmed from the CouchbaseLiteVectorSearch extension requiring AVX2 support, which was absent in older CPUs. The Pieces team promptly addressed this by releasing version 11.1.2, which resolved the launch issue for most users. Users experiencing this problem are advised to upgrade to the latest version.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch

### 3. Pieces Desktop App Issues
Users reported various issues with the Pieces desktop app, including slow boot-up, unresponsiveness, and data migration problems. These issues were often related to specific operating systems or software versions. Solutions included bug fixes, patches, and workarounds like disabling certain features. The Pieces team actively addressed these issues, providing updates and assistance to affected users.

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#618](https://github.com/pieces-app/support/issues/618): [Linux Mint] Pieces app goes unresponsive on opening and every 5sec. Can't use it at all in any way

### 4. PiecesOS boot-up and launch issues
Users reported PiecesOS taking a long time to boot up or failing to launch, particularly after updating to version 11.1.0 or 11.1.1. This is likely due to data migration issues, potentially conflicting with OneDrive. Updating to version 11.1.2, which includes a patch for the OneDrive conflict, is recommended. If the issue persists, contacting PiecesOS support is advised.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#627](https://github.com/pieces-app/support/issues/627): PiecesOS was unable to launch.

### 5. PiecesOS High CPU and RAM Usage
Users report high CPU and RAM usage with PiecesOS, sometimes making it unusable. This is potentially linked to Live Context and specific database technologies. Disabling Live Context, optimizing memory, and upgrading to version 11.1.0 or later with improved resource management are potential solutions. The Pieces team is actively addressing these issues.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#626](https://github.com/pieces-app/support/issues/626): [Linux Mint 22.1] Pieces OS high CPU usage
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.


## Recommendations
- **Prioritize resolving PiecesOS launch issues:** The most frequent and active tickets revolve around PiecesOS failing to launch, particularly after updates. Focus on identifying and addressing the root causes, including potential conflicts with OneDrive and hardware requirements.
- **Investigate and optimize PiecesOS resource consumption:** Address reports of high CPU and RAM usage, potentially linked to Live Context and database technologies. Explore options for optimizing performance and resource management.
- **Improve communication around updates:** Provide clear and detailed information about updates, including potential impacts and necessary actions for users. This can help mitigate issues arising from data migration or software conflicts.
- **Consider a dedicated support channel for PiecesOS:** Given the volume of issues related to PiecesOS, a dedicated support channel could help streamline troubleshooting and resolution.
- **Gather more detailed user data:** Encourage users to provide system information, logs, and steps to reproduce issues. This will aid in faster diagnosis and resolution of problems.
- **Proactively monitor for known issues:** Stay informed about known issues, such as the Flutter bug affecting Linux Mint, and communicate workarounds or solutions to users promptly.
- **Review and update support documentation:** Ensure support documentation is up-to-date and comprehensive, covering common issues, troubleshooting steps, and FAQs. This can empower users to resolve issues independently.
- **Implement a system for tracking common issues:** Develop a system for tracking and categorizing common issues to identify trends and prioritize development efforts towards long-term solutions.
- **Consider a bug bounty program:** Incentivize users to report bugs and security vulnerabilities to proactively identify and address potential issues.

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
- [report_130830](daily/2025-02-16/report_130830.md)
- [report_210605](daily/2025-02-16/report_210605.md)
