# Support Ticket Report
- Generated: 2025-02-22 21:08:34
- Period: 2025-02-17 to 2025-02-22

## Summary
- **Total Tickets:** 11
- **Resolved:** 8
- **Open:** 3

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 14.92 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 8.65 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 6.43 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 6.02 |
| [#631](https://github.com/pieces-app/support/issues/631) | Pieces for Developers Not Working – Cloud Service & Local LLM Issues | 5.36 |

## Common Issues
### 1. PiecesOS Boot-up Failure: Stuck on Core Dependencies
Users report PiecesOS Desktop application failing to boot up, getting stuck on "ensure core dependencies" step. This occurs across macOS and Windows, potentially due to database migration issues or conflicts with OneDrive. Solutions include updating to the latest version, removing conflicting databases, and waiting for a patch to address the issue.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch

### 2. PiecesOS launch failures after update
Users reported PiecesOS failing to launch after updating, particularly to version 11.1.1. This issue primarily affected macOS and was linked to stricter hardware requirements, specifically CPUs lacking AVX2 support. The Pieces team addressed the problem by releasing a patch in version 11.1.2, resolving the issue for most users.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch

### 3. PiecesOS launch failure due to database error
Multiple users on Ubuntu and Windows reported PiecesOS failing to launch after version 11.1.1, encountering a 'DatabaseException' related to 'CouchbaseLiteVectorSearch' extension and AVX2 CPU support. The issue stemmed from stricter hardware requirements. Pieces team released a patch in version 11.1.2 within days, resolving the issue for most users. Providing system logs aided in diagnosis.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. PiecesOS Connectivity and Launch Issues
Users are experiencing difficulties connecting to cloud services and local LLMs, as well as launching the PiecesOS desktop application.  Suggested solutions include checking internet connection, switching networks, clearing browser cache, and examining firewall settings.  Support engineers are requesting log files for further diagnosis and debugging.

**Related Issues:**
- [#634](https://github.com/pieces-app/support/issues/634): Unable to sign in! We aren't sure what happened.
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch

### 5. PiecesOS launch failure due to core dependencies
Multiple users reported PiecesOS failing to launch on Windows and macOS, stuck on "Ensure core dependencies" step. The issue affected versions 11.1.1 and 11.1.2.  Support engineers requested log files for diagnosis. A patch, version 11.1.2, was released to address hardware requirement issues. Users were advised to update and provide feedback.

**Related Issues:**
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#630](https://github.com/pieces-app/support/issues/630): core services


## Recommendations
- **Prioritize addressing PiecesOS launch failures:** The most frequent and active tickets revolve around PiecesOS failing to launch, particularly after updates (versions 11.1.1 and 11.1.2). Focus on identifying the root causes of these launch issues and implementing permanent fixes.
- **Improve communication about hardware requirements:** Several launch failures stem from stricter hardware requirements, especially AVX2 CPU support. Clearly communicate these requirements on the download page, installation instructions, and release notes to prevent user frustration.
- **Develop more robust update mechanisms:** Issues arising from updates suggest potential improvements in the update process. Implement rigorous testing for new versions across different operating systems and hardware configurations before release.
- **Enhance error messaging and logging:** Provide users with more informative error messages that pinpoint the cause of the issue and suggest potential solutions. Improve logging mechanisms to help support engineers quickly diagnose and debug problems.
- **Create a comprehensive troubleshooting guide:** Develop a detailed troubleshooting guide addressing common issues like launch failures, connectivity problems, and database errors. This guide should be easily accessible within the application and on the Pieces website.
- **Consider a dedicated support forum:** A dedicated support forum can provide a centralized platform for users to seek help, share solutions, and discuss issues. This can foster a sense of community and reduce the load on the support team.
- **Proactively monitor system health and performance:** Implement monitoring tools to track system health, performance, and user feedback. This allows for early detection of potential issues and proactive communication with users about ongoing problems or planned maintenance.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
- [report_210558](daily/2025-02-20/report_210558.md)
- [report_131056](daily/2025-02-20/report_131056.md)
- [report_210558](daily/2025-02-21/report_210558.md)
- [report_131009](daily/2025-02-21/report_131009.md)
- [report_210632](daily/2025-02-22/report_210632.md)
