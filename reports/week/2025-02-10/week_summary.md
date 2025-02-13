# Support Ticket Report
- Generated: 2025-02-13 21:09:36
- Period: 2025-02-10 to 2025-02-13

## Summary
- **Total Tickets:** 17
- **Resolved:** 5
- **Open:** 12

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 14.16 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 12.30 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 8.18 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 7.74 |
| [#626](https://github.com/pieces-app/support/issues/626) | [Linux Mint 22.1] Pieces OS high CPU usage | 6.94 |

## Common Issues
### 1. PiecesOS launch failure due to AVX2 incompatibility
Users are experiencing crashes or inability to launch PiecesOS after a recent update. The issue stems from a new dependency requiring AVX2 support, which is not available on all processors. The Pieces team is aware of the problem and is actively working on a patch to address the compatibility issue. A fix is expected to be released shortly.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS fails to launch after update
Users reported PiecesOS failing to launch, often stuck at "ensure core dependencies" step, particularly on MacOS. This was linked to incompatible hardware, MacOS versions, and conflicts with OneDrive. Solutions included reinstalling using specific builds, updating to the latest version (11.1.1), resolving OneDrive conflicts, and providing logs to support for further assistance.

**Related Issues:**
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS Launch and Update Issues
Users reported various issues with PiecesOS, including failure to launch, download models, or complete updates. These problems often manifested as the app getting stuck during startup, particularly on MacOS. Solutions involved updating to the latest version (11.1.1), providing logs to support, reinstalling the app, or resolving conflicts with OneDrive.

**Related Issues:**
- [#608](https://github.com/pieces-app/support/issues/608): Models Download Fail
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 4. PiecesOS Launch and Update Issues
Users reported PiecesOS failing to launch or update, often getting stuck on "ensure core dependencies." This primarily affected macOS Monterey and systems with potential conflicts like Atlas OS or OneDrive. Solutions included restarting the app, reinstalling, updating to version 11.1.1, resolving OneDrive conflicts, and providing logs to support.

**Related Issues:**
- [#607](https://github.com/pieces-app/support/issues/607): Feat: Localization(french) for the Desktop Application
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 5. Pieces OS performance and freezing issues
Users are experiencing high CPU usage, unresponsiveness, and freezing with the Pieces OS desktop app, particularly on Linux Mint. This is likely due to the LTM-1 algorithm and a known Flutter issue. Solutions include disabling LTM-1, using cloud processing, and disabling the on-screen keyboard as a workaround.

**Related Issues:**
- [#626](https://github.com/pieces-app/support/issues/626): [Linux Mint 22.1] Pieces OS high CPU usage
- [#618](https://github.com/pieces-app/support/issues/618): [Linux Mint] Pieces app goes unresponsive on opening and every 5sec. Can't use it at all in any way
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.


## Recommendations
- **Prioritize resolving PiecesOS launch failures:** The most frequent and active issues revolve around PiecesOS failing to launch after the recent update, particularly due to AVX2 incompatibility. Focus on resolving this quickly to reduce user frustration and support ticket volume.
- **Investigate and address MacOS-specific launch issues:** A significant number of launch problems occur on MacOS, potentially related to hardware incompatibility, MacOS versions, and conflicts with OneDrive.  Investigate these issues further and provide clear solutions or workarounds.
- **Optimize PiecesOS performance on Linux Mint:** Users are experiencing high CPU usage and freezing on Linux Mint. Address the LTM-1 algorithm's impact on resources and investigate the known Flutter issue causing unresponsiveness.
- **Improve communication about hardware requirements:** The recent update introduced stricter hardware requirements, catching some users off guard. Clearly communicate these requirements on the download page, release notes, and during the update process to manage user expectations.
- **Review and update support bot responses:** Some users found the support bot's responses unhelpful. Review and update its knowledge base to ensure it provides accurate and relevant information, reducing the need for human intervention.

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
