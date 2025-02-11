# Support Ticket Report
- Generated: 2025-02-11 21:09:12
- Period: 2025-02-10 to 2025-02-11

## Summary
- **Total Tickets:** 15
- **Resolved:** 4
- **Open:** 11

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 16.09 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 8.25 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 6.94 |
| [#621](https://github.com/pieces-app/support/issues/621) | Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip | 6.50 |
| [#622](https://github.com/pieces-app/support/issues/622) | Visual Studio Extension: Home and End keys should move the text cursor to the beginning and end of the input text box | 5.50 |

## Common Issues
### 1. Pieces OS Fails to Launch on Startup
Users report Pieces OS failing to launch, often encountering error messages or getting stuck during startup. This issue appears linked to hardware requirements, specifically older CPUs lacking AVX2 support, and large data migrations. Proposed solutions include upgrading to the latest Pieces OS version, providing system logs for diagnosis, and ensuring compatibility with system hardware.

**Related Issues:**
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 2. Pieces Desktop App Freezes and Startup Issues
Users reported the Pieces desktop app freezing or being unable to start. Issues included conversation titles saving prematurely, app unresponsiveness on Linux, and startup failures due to core dependency issues. Solutions involved bug fixes, app updates, disabling virtual keyboards (Linux), and addressing data migration challenges.

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#618](https://github.com/pieces-app/support/issues/618): Pieces app goes unresponsive on opening and every 5sec. Can't use it at all in any way
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 3. PiecesOS fails to launch due to hardware requirements
Multiple users report PiecesOS failing to launch after a recent update. The issue seems to stem from stricter hardware requirements, particularly related to the database service needing AVX2 support. The Pieces team is working on a patch to address this, and in the meantime, users are encouraged to provide their logs for analysis.

**Related Issues:**
- [#617](https://github.com/pieces-app/support/issues/617): i got this error when opening localhost
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. Pieces OS Launch and Download Failures
Users report Pieces OS failing to launch or download models, particularly on Windows and MacOS with versions 11.1.0 and 11.1.1. Issues involve stricter hardware requirements and potential incompatibility with M1 chips. Solutions include updating to the latest version, providing logs for analysis, and using specific download links for Apple Silicon.

**Related Issues:**
- [#608](https://github.com/pieces-app/support/issues/608): Models Download Fail
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip

### 5. PiecesOS Launch Failure
Users are reporting failures to launch PiecesOS after a recent update. The issue seems to stem from stricter hardware requirements, particularly related to AVX2 processor support. The Pieces team is working on a patch to address this and encourages affected users to share their logs for further diagnosis.

**Related Issues:**
- [#609](https://github.com/pieces-app/support/issues/609): Unable to open Pieces Copilot Service
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.


## Recommendations
- **Address Pieces OS Launch Failures:** Prioritize resolving the hardware requirement issues and M1 chip incompatibility causing Pieces OS launch failures. This is the most frequent and impactful problem reported.
- **Improve Data Migration Process:** Investigate and optimize the data migration process, as it contributes to startup delays and failures, especially on older hardware.
- **Review Virtual Keyboard Functionality (Linux):** Investigate the root cause of the Pieces desktop app freezing on Linux Mint due to virtual keyboard issues and implement a permanent fix beyond the current workaround.
- **Provide Clear Hardware Requirements Communication:** Clearly communicate Pieces OS hardware requirements to users, potentially including a system check during installation, to prevent future compatibility issues.
- **Enhance Model Download Stability:** Investigate and address the root causes of model download failures, particularly for Ollama, ensuring a smooth user experience.
- **Monitor and Address Linux-Specific Issues:** Allocate resources to proactively monitor and address Linux-specific issues, as they represent a significant portion of recent problems.
- **Continue Gathering User Logs:** Encourage users experiencing issues to provide logs for faster diagnosis and resolution, particularly for less frequent but persistent problems like Neural Code Search failures and LTM sandbox issues.

## Daily Reports
Here are the daily reports for this week:

- [report_131039](daily/2025-02-11/report_131039.md)
- [report_050643](daily/2025-02-11/report_050643.md)
- [report_210559](daily/2025-02-11/report_210559.md)
