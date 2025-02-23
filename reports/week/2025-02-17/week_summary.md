# Support Ticket Report
- Generated: 2025-02-23 21:08:48
- Period: 2025-02-17 to 2025-02-23

## Summary
- **Total Tickets:** 13
- **Resolved:** 8
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 14.68 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 8.38 |
| [#610](https://github.com/pieces-app/support/issues/610) | Pieces Desktop app, account linking never acheived for several years? | 7.74 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 6.27 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 5.88 |

## Common Issues
### 1. PiecesOS Fails to Boot Past Core Dependencies
Users report PiecesOS desktop app on macOS and Windows gets stuck on "Ensure Core Dependencies" during startup. This occurred after recent updates, potentially due to data migration or conflicts. Solutions include updating to the latest version, restarting the app or computer, reinstalling, and waiting for a patch from the Pieces team.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch

### 2. PiecesOS fails to launch due to hardware requirements
Multiple users reported PiecesOS failing to launch after updating to version 11.1.1. The issue stemmed from stricter hardware requirements, particularly the database extension needing AVX2 support. The Pieces team acknowledged the problem and released a patch (version 11.1.2) within a few days to address this, resolving the launch issue for affected users.

**Related Issues:**
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all

### 3. Pieces User Account Linking and Connectivity Issues
Users report problems linking Google and GitHub accounts, with only one connectable at a time. Others experience difficulties accessing cloud services and local LLMs, requiring log analysis and direct support for troubleshooting. Solutions involve awaiting system updates or scheduling calls with support.

**Related Issues:**
- [#610](https://github.com/pieces-app/support/issues/610): Pieces Desktop app, account linking never acheived for several years?
- [#634](https://github.com/pieces-app/support/issues/634): Unable to sign in! We aren't sure what happened.
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues

### 4. PiecesOS launch failure due to database errors
Multiple users reported PiecesOS failing to launch on Ubuntu and Windows, encountering "DatabaseException" related to the 'CouchbaseLiteVectorSearch' extension. The issue stemmed from incompatibility with processors lacking AVX2 support. The Pieces team addressed it by releasing version 11.1.2. Users are recommended to update to the latest version to resolve the problem.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch

### 5. Pieces OS Conflicts and Errors
Users report Pieces OS conflicts with externally installed Ollama, cloud service connection errors, and startup failures. Solutions include reinstalling Ollama, verifying internet connection, checking Pieces OS and Developer versions, and updating to the latest Pieces OS version.

**Related Issues:**
- [#570](https://github.com/pieces-app/support/issues/570): Pieces OS conflicting with Installed Ollama Server?
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all


## Recommendations
- **Prioritize resolving PiecesOS launch failures:** The most frequent and active tickets revolve around PiecesOS failing to launch, particularly after updates (versions 11.1.0 and 11.1.1). Focus on addressing the root causes, such as database errors, hardware incompatibility (AVX2 support), and conflicts with external installations (Ollama).
- **Improve account linking process:** Users report persistent issues with linking Google and GitHub accounts. Investigate and simplify the account linking flow to ensure a smoother user experience.
- **Enhance communication about hardware requirements:** The introduction of stricter hardware requirements in version 11.1.1 caused launch issues for many users. Clearly communicate any changes in system requirements in release notes and update documentation to avoid similar situations in the future.
- **Develop a more robust database extension:** Issues related to the 'CouchbaseLiteVectorSearch' extension and database errors are prevalent. Investigate and address the underlying causes to improve the extension's stability and compatibility.
- **Provide clear guidance on resolving cloud service connection errors:** Users encounter difficulties connecting to cloud services and local LLMs. Improve troubleshooting documentation and provide clear steps for users to diagnose and resolve connectivity problems.
- **Investigate and address Ollama integration issues:** Conflicts between Pieces OS and externally installed Ollama instances are reported. Explore options for better integration, such as automatic detection and configuration of external Ollama installations.
- **Proactively monitor system stability and performance:** Implement monitoring tools and processes to identify potential issues early on and prevent widespread outages or disruptions.
- **Gather detailed user feedback on specific error messages:**  Vague error messages like "Unable to sign in! We aren't sure what happened." are not helpful for users or support staff.  Capture more context-specific information to aid in troubleshooting and resolution.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
- [report_210558](daily/2025-02-20/report_210558.md)
- [report_131056](daily/2025-02-20/report_131056.md)
- [report_210558](daily/2025-02-21/report_210558.md)
- [report_131009](daily/2025-02-21/report_131009.md)
- [report_210632](daily/2025-02-22/report_210632.md)
- [report_130812](daily/2025-02-23/report_130812.md)
- [report_210603](daily/2025-02-23/report_210603.md)
- [report_050626](daily/2025-02-23/report_050626.md)
