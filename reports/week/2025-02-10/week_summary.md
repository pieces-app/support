# Support Ticket Report
- Generated: 2025-02-12 21:08:11
- Period: 2025-02-10 to 2025-02-12

## Summary
- **Total Tickets:** 15
- **Resolved:** 3
- **Open:** 12

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 15.35 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 7.11 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 5.50 |
| [#618](https://github.com/pieces-app/support/issues/618) | Pieces app goes unresponsive on opening and every 5sec. Can't use it at all in any way | 4.84 |
| [#622](https://github.com/pieces-app/support/issues/622) | Visual Studio Extension: Home and End keys should move the text cursor to the beginning and end of the input text box | 4.74 |

## Common Issues
### 1. Pieces Desktop App Performance Issues
Users reported various performance issues with the Pieces Desktop App, including slow boot times, unresponsiveness, and freezing. These issues were observed across different operating systems (macOS, Windows, Linux) and Pieces OS versions. Solutions included bug fixes, data migration improvements, and workarounds for specific operating system configurations.

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#618](https://github.com/pieces-app/support/issues/618): Pieces app goes unresponsive on opening and every 5sec. Can't use it at all in any way

### 2. PiecesOS Startup Failure After Update
Users reported PiecesOS failing to boot or launch after updating, particularly on macOS with M1 chips and on Windows. This was due to a data migration issue during the 11.1.0 update. The issue was largely resolved in version 11.1.1.  Ensuring the correct build for the architecture (Apple Silicon vs Intel) and reinstalling are recommended solutions.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 3. Pieces OS launch failure due to database error
Multiple users reported Pieces OS failing to launch on Windows and Linux, encountering a 'DatabaseException' related to 'CouchbaseLiteVectorSearch' extension and AVX2 processor support. The issue stems from stricter hardware requirements in version 11.1.1. The Pieces team is working on a patch, expected within 24-48 hours.

**Related Issues:**
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. Pieces OS Installation and Launch Issues
Users reported Pieces OS installation and launch failures across Windows and MacOS, particularly after upgrading to version 11.1.1.  Issues involved model download failures and app launch errors. Proposed solutions included updating to the latest version, clean reinstallation, providing logs, and using the correct build for the device (Apple Silicon vs. Intel).

**Related Issues:**
- [#608](https://github.com/pieces-app/support/issues/608): Models Download Fail
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip

### 5. PiecesOS Launch Failure
Users are reporting PiecesOS failing to launch on Windows, encountering an error related to AVX2 support. This issue appears linked to stricter hardware requirements in recent versions. The Pieces team is working on a patch, advising users to provide support logs in the meantime.

**Related Issues:**
- [#617](https://github.com/pieces-app/support/issues/617): i got this error when opening localhost
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all


## Recommendations
- **Address PiecesOS Launch Failures:** Prioritize resolving the PiecesOS launch failures related to AVX2 support and database errors, as they prevent users from accessing the platform.
- **Improve Update Process:** Investigate and address the issues arising from the 11.1.0 and 11.1.1 updates, focusing on data migration, hardware compatibility, and clear communication about potential issues.
- **Enhance Performance Monitoring:** Implement better monitoring and logging for Pieces Desktop App performance, allowing for quicker identification and resolution of issues like slow boot times and unresponsiveness.
- **Provide Clearer Hardware Requirements:** Clearly communicate the updated hardware requirements for PiecesOS, especially regarding AVX2 support, to prevent installation and launch issues.
- **Improve Model Download Reliability:** Investigate and fix the Ollama model download failures to ensure users can easily access and utilize available models.
- **Gather Detailed Support Logs:** Encourage users to provide detailed support logs when reporting issues to aid in faster diagnosis and resolution.
- **Consider Architecture-Specific Builds:** Continue providing separate builds for different architectures (Apple Silicon vs. Intel) to avoid installation and launch problems for users on specific devices.
- **Review Conversation Title Saving:** Address the issue of conversation titles saving too eagerly in the Desktop App to improve the user experience.
- **Investigate Linux-Specific Issues:** Address the reported freezing issue on Linux Mint and investigate any other Linux-specific problems to ensure a consistent experience across platforms.

## Daily Reports
Here are the daily reports for this week:

- [report_131039](daily/2025-02-11/report_131039.md)
- [report_050643](daily/2025-02-11/report_050643.md)
- [report_210559](daily/2025-02-11/report_210559.md)
- [report_210558](daily/2025-02-12/report_210558.md)
- [report_131007](daily/2025-02-12/report_131007.md)
