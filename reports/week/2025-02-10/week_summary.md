# Support Ticket Report
- Generated: 2025-02-15 21:09:38
- Period: 2025-02-10 to 2025-02-15

## Summary
- **Total Tickets:** 20
- **Resolved:** 6
- **Open:** 14

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 14.73 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 14.21 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 8.50 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 8.01 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 5.78 |

## Common Issues
### 1. PiecesOS launch failures due to CPU incompatibility
Multiple users reported PiecesOS crashing or failing to launch after upgrading to version 11.1.1. The issue stemmed from a new dependency requiring AVX2 support, which is absent in older CPUs (pre-2016) and some ARM-based Macs. The Pieces team addressed the problem by releasing version 11.1.2 with a fix for the AVX2 dependency. Users confirmed that updating to the latest version resolved the launch issues.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip

### 2. PiecesOS Fails to Launch After Update
Users report PiecesOS failing to launch, often getting stuck on "core dependencies" after an update. This issue appears across macOS and Windows OS, particularly after updating to versions 11.1.1 or 3.3.5. Proposed solutions include updating to the latest version, reinstalling the app, or waiting for a hotfix from the Pieces team.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#627](https://github.com/pieces-app/support/issues/627): PiecesOS was unable to launch.

### 3. PiecesOS Launch Failure Due to Hardware Incompatibility
Multiple users reported PiecesOS failing to launch on Ubuntu and Windows, encountering a "DatabaseException" related to "CouchbaseLiteVectorSearch" extension. This was caused by stricter hardware requirements in version 11.1.1, particularly the lack of AVX2 support. The issue was resolved in version 11.1.2, released on February 13th, 2025. Users experiencing this problem are advised to update to the latest version.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. PiecesOS High Resource Usage
Users report high CPU and RAM usage, sometimes reaching 100%, especially with PiecesOS 11.1.1. This is potentially linked to the "Live Context" and Long Term Memory (LTM-1) features. Suggested workarounds include restarting PiecesOS, disabling LTM-1, and using "Optimize Memory." The PiecesOS team is actively working on optimizations and cloud processing to address these issues.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#626](https://github.com/pieces-app/support/issues/626): [Linux Mint 22.1] Pieces OS high CPU usage
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 5. PiecesOS Launch and Model Download Failures
Users report PiecesOS failing to launch after update 11.1.1 due to stricter hardware requirements. A patch (11.1.2) is in progress. Separately, model downloads for Ollama are failing for some users.  Providing support logs is recommended for both issues to help diagnose and resolve them.

**Related Issues:**
- [#608](https://github.com/pieces-app/support/issues/608): Models Download Fail
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#627](https://github.com/pieces-app/support/issues/627): PiecesOS was unable to launch.


## Recommendations
- **Prioritize resolving PiecesOS launch failures:** The most frequent and active support tickets revolve around PiecesOS failing to launch after the 11.1.1 update, particularly due to hardware incompatibility and core dependency issues. Focus on resolving these issues swiftly to reduce ticket volume.
- **Investigate and address high resource usage:**  Tickets indicate ongoing concerns about PiecesOS consuming high CPU and RAM, potentially linked to Live Context and LTM-1. Prioritize optimizing these features and explore cloud processing to alleviate the load on user devices.
- **Improve model download reliability:**  Address the issue of failing model downloads for Ollama, as it hinders user experience. Investigate the root cause and provide clear solutions or workarounds.
- **Proactively communicate known issues and solutions:**  Maintain a publicly accessible list of known issues, their status, and workarounds. This can reduce support requests and frustration by empowering users to self-serve.
- **Gather detailed system information:**  When users report launch failures or performance issues, ensure the support process includes gathering detailed system information (OS, CPU, RAM, PiecesOS version) to expedite diagnosis and resolution.
- **Consider hardware requirement checks:** Implement a system within PiecesOS that checks for minimum hardware requirements during installation or launch. This can prevent installations on incompatible systems and provide users with clear guidance.

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
