# Support Ticket Report
- Generated: 2025-02-22 13:09:46
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
| [#631](https://github.com/pieces-app/support/issues/631) | Pieces for Developers Not Working – Cloud Service & Local LLM Issues | 4.73 |

## Common Issues
### 1. PiecesOS Startup Issues and Launch Failures
Users reported slow startup times, inability to launch PiecesOS, or getting stuck during the boot process. This issue was observed across macOS and Windows platforms. The Pieces team released updates (v11.1.2, desktop app patch 3.3.8) to address these issues. Users are recommended to update to the latest version and follow troubleshooting steps provided by the Pieces team if the problem persists.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS launch crash due to missing AVX2 support
PiecesOS version 11.1.1 introduced a dependency on the AVX2 instruction set for its vector library, causing launch crashes on unsupported CPUs. This affected users on macOS and Windows. The issue was acknowledged by the Pieces team and a fix was released in version 11.1.2, removing the AVX2 requirement.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS Launch Failure
Users reported PiecesOS failing to launch on Windows and macOS after update 11.1.1 due to stricter hardware requirements. The issue was resolved in version 11.1.2. Users experiencing this issue are advised to update to the latest version. Providing log files is recommended for further assistance.

**Related Issues:**
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#630](https://github.com/pieces-app/support/issues/630): core services

### 4. Pieces OS boot up failure
Users are experiencing issues with Pieces OS failing to boot up on Ubuntu, Windows, and macOS. The errors often mention "DatabaseException" and problems loading the "CouchbaseLiteVectorSearch" extension.  A common solution is to update to the latest Pieces OS version (11.1.2).

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#630](https://github.com/pieces-app/support/issues/630): core services

### 5. Pieces for Developers Connectivity and Sign-in Issues
Users are experiencing difficulties connecting to Pieces cloud services and local LLMs, as well as signing into the Pieces app.  Suggested solutions include checking network configurations, firewall settings, and clearing browser cache.  Contact Pieces support for persistent issues.

**Related Issues:**
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#634](https://github.com/pieces-app/support/issues/634): Unable to sign in! We aren't sure what happened.


## Recommendations
- **Prioritize resolution of PiecesOS launch issues:** The majority of reported issues revolve around PiecesOS failing to launch, particularly after update 11.1.1. Focus engineering efforts on resolving these launch problems and ensuring smooth startup across platforms.
- **Improve communication about hardware requirements:** The launch issues stemming from stricter hardware requirements in version 11.1.1 highlight the need for clearer communication about system requirements before and during updates.
- **Investigate and address connectivity problems:**  Users are experiencing difficulties connecting to Pieces cloud services and local LLMs. Investigate potential root causes, such as firewall conflicts or network configuration issues, and provide clear troubleshooting steps.
- **Enhance sign-in process and error handling:**  The reported sign-in issues indicate potential areas for improvement in the authentication process. Implement robust error handling to provide users with more informative messages and guidance when sign-in problems occur.
- **Proactively monitor for emerging issues:** Continuously monitor support tickets and community forums for patterns or spikes in specific issues. This will enable quicker identification and response to emerging problems, minimizing user impact.
- **Develop comprehensive troubleshooting resources:** Create detailed troubleshooting guides and FAQs addressing common issues like launch failures, connectivity problems, and sign-in errors.  Make these resources easily accessible within the application and on the Pieces website.
- **Consider a more robust testing process:** The issues arising from update 11.1.1 suggest potential improvements in the testing process. Implement rigorous testing across various hardware and software configurations to identify and address potential problems before release.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
- [report_210558](daily/2025-02-20/report_210558.md)
- [report_131056](daily/2025-02-20/report_131056.md)
- [report_210558](daily/2025-02-21/report_210558.md)
- [report_131009](daily/2025-02-21/report_131009.md)
