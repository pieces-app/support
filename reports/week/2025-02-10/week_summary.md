# Support Ticket Report
- Generated: 2025-02-16 13:12:17
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
### 1. PiecesOS launch crash due to AVX2 requirement
PiecesOS version 11.1.1 introduced a new vector library requiring AVX2 support, causing launch crashes for users with older CPUs lacking this feature. The issue affected Windows and macOS users. The Pieces team acknowledged the problem and released a patch in version 11.1.2 to address the dependency, resolving the issue for affected users.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS launch failure and slow startup
Users reported PiecesOS failing to launch or experiencing slow startups, often encountering errors related to core dependencies. This issue affected various operating systems and PiecesOS versions. Proposed solutions included updating to the latest version (11.1.2), reinstalling the application, and addressing potential conflicts with OneDrive.

**Related Issues:**
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS fails to launch due to core dependency errors
Users are reporting PiecesOS failing to launch, getting stuck on "Ensuring Core Dependencies" during startup. This issue appears across macOS and Windows platforms. Proposed solutions include updating to the latest version (11.1.2 or higher), reinstalling the app, and removing the 'com.pieces.os' folder from OneDrive if applicable.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. PiecesOS Fails to Launch After Update
Users report PiecesOS failing to launch after updating, often getting stuck on "ensuring core dependencies." This issue appears across operating systems and versions, potentially due to installer bugs, OneDrive conflicts, or hardware limitations. Proposed solutions include updating to the latest version (11.1.2), reinstalling the app, manually installing using the appInstaller build, and removing the 'com.pieces.os' folder from OneDrive.

**Related Issues:**
- [#627](https://github.com/pieces-app/support/issues/627): PiecesOS was unable to launch.
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 5. PiecesOS fails to launch due to extension error
Multiple users reported PiecesOS failing to launch on versions 11.1.1. The error message pointed to a "DatabaseException" related to the "CouchbaseLiteVectorSearch" extension. This was caused by a dependency on AVX2 instruction sets not supported on all CPUs. The Pieces team released a patch in version 11.1.2 to address this issue.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.


## Recommendations
- "Prioritize resolving PiecesOS launch issues affecting versions 11.1.1 and earlier, specifically addressing AVX2 dependency and core dependency errors during startup."
- "Investigate and address the root cause of slow startup times and high resource usage reported in PiecesOS, particularly in versions prior to 11.1.2."
- "Review and improve the PiecesOS installer to prevent issues related to OneDrive conflicts and ensure smooth updates."
- "Consider providing clearer communication and documentation regarding PiecesOS hardware and software requirements to manage user expectations and minimize compatibility issues."

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
