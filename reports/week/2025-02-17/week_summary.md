# Support Ticket Report
- Generated: 2025-02-19 13:11:31
- Period: 2025-02-17 to 2025-02-19

## Summary
- **Total Tickets:** 9
- **Resolved:** 8
- **Open:** 1

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 16.27 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 9.78 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 7.66 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 7.11 |
| [#619](https://github.com/pieces-app/support/issues/619) | Facing error on Ubuntu while opening Pieces "DatabaseException" | 4.59 |

## Common Issues
### 1. PiecesOS Startup Failure and Slow Boot Issues
Users report PiecesOS failing to launch or experiencing slow boot times, often getting stuck on "ensure core dependency." This affects both macOS and Windows. Proposed solutions include updating to the latest version, reinstalling, resolving software conflicts (like OneDrive), and waiting for patches addressing server-side issues and hardware requirements.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS 11.1.1 launch failure due to AVX2 requirement
Users reported PiecesOS 11.1.1 crashing or failing to launch. The issue stemmed from a new dependency requiring AVX2 CPU instruction set, absent in older CPUs.  Pieces confirmed the issue and released version 11.1.2 with a workaround, resolving the problem for affected users.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS fails to launch due to database error
Multiple users reported PiecesOS failing to launch on Ubuntu, Windows, and macOS due to a database error. The error message varied but often mentioned "DatabaseException" or problems with the CouchbaseLiteVectorSearch extension. The issue was linked to PiecesOS version 11.1.1 and a fix was released in version 11.1.2. Users were advised to upgrade to the latest version to resolve the issue.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#630](https://github.com/pieces-app/support/issues/630): core services

### 4. PiecesOS Launch Issues
Users are experiencing problems launching PiecesOS after updating to version 11.1.0 or 11.1.1. This is likely due to stricter hardware requirements or accidentally installing the incorrect architecture version (Intel instead of ARM on macOS). Solutions include reinstalling the correct version, updating to the latest version (11.1.2 or higher), or providing logs for further assistance.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 5. PiecesOS Connectivity and Launch Issues
Users are experiencing problems with PiecesOS connecting to cloud services and local LLMs, as well as issues with the application launching. The errors often mention network connectivity or problems with local models. Proposed solutions include checking network configurations, firewall settings, upgrading to the latest PiecesOS version (11.1.2), and providing logs for further analysis.

**Related Issues:**
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all


## Recommendations
- **Prioritize resolution of PiecesOS launch failures:** Focus on addressing the root causes of launch issues, including hardware compatibility (AVX2 requirement), database errors, and potential software conflicts. This will directly impact a large number of users and improve the overall user experience.
- **Improve communication about hardware and software requirements:** Clearly communicate the minimum system requirements for PiecesOS, especially regarding CPU instruction sets (AVX2) and operating system versions. This will help prevent installation issues and user frustration.
- **Investigate and resolve connectivity issues:** Address the problems users are facing with PiecesOS connecting to cloud services and local LLMs. This includes examining potential firewall conflicts, network configuration issues, and ensuring stable communication with Pieces' cloud infrastructure.
- **Enhance error messaging and logging:** Provide more informative error messages to users, clearly indicating the nature of the problem and potential solutions. Improve logging mechanisms to gather more detailed information about crashes and errors, aiding in faster diagnosis and resolution.
- **Develop a comprehensive troubleshooting guide:** Create a detailed troubleshooting guide addressing common issues, such as launch failures, connectivity problems, and database errors. This guide should include step-by-step instructions, potential solutions, and links to relevant resources.
- **Consider a dedicated support forum or knowledge base:** Implement a dedicated support forum or knowledge base where users can search for solutions, ask questions, and share their experiences. This will foster a sense of community and potentially reduce the number of support tickets.
- **Monitor user feedback and iterate:** Continuously monitor user feedback from support tickets, GitHub issues, and other channels to identify recurring problems and areas for improvement. Use this feedback to prioritize bug fixes, feature enhancements, and documentation updates.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
