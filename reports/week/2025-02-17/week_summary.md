# Support Ticket Report
- Generated: 2025-02-20 21:08:04
- Period: 2025-02-17 to 2025-02-20

## Summary
- **Total Tickets:** 11
- **Resolved:** 8
- **Open:** 3

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 15.47 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 9.33 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 6.83 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 6.35 |
| [#634](https://github.com/pieces-app/support/issues/634) | Unable to sign in! We aren't sure what happened. | 4.42 |

## Common Issues
### 1. PiecesOS Boot-up and Launch Issues
Users reported PiecesOS taking a long time to boot up or failing to launch, particularly after updates (11.1.0, 11.1.1). Issues were linked to data migration problems, stricter hardware requirements, and potential conflicts with OneDrive. Patches (11.1.1, 11.1.2, 3.3.8) were released to address these issues, resolving the problems for most users. Providing logs and system information aided in troubleshooting.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. Pieces OS launch failure due to database error
Multiple users reported Pieces OS failing to launch on Ubuntu, Windows, and macOS due to a "DatabaseException" related to the "CouchbaseLiteVectorSearch" extension. The issue stemmed from older CPUs lacking AVX2 support. The Pieces team resolved the issue by releasing version 11.1.2, which included a patch to address the AVX2 requirement. Users experiencing this issue are advised to update to the latest version.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch

### 3. PiecesOS Boot and Launch Issues
Users reported issues with PiecesOS booting and launching after updating to version 11.1.0 and 11.1.1. The issues seem to stem from compatibility problems and stricter hardware requirements. Solutions included reinstalling the correct version for the architecture, waiting for a patch release (11.1.2), and providing logs for further troubleshooting.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#630](https://github.com/pieces-app/support/issues/630): core services

### 4. PiecesOS Connectivity and Launch Issues
Users report PiecesOS failing to connect to cloud services or launch, often encountering "Unable to sign in" errors. This might stem from network configuration, firewall restrictions, or software bugs. Suggested solutions include checking internet connection, verifying firewall settings, ensuring PiecesOS is updated, and consulting Pieces support.

**Related Issues:**
- [#634](https://github.com/pieces-app/support/issues/634): Unable to sign in! We aren't sure what happened.
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch

### 5. PiecesOS Connectivity and Service Issues
Users are experiencing issues with PiecesOS connecting to cloud services and utilizing local LLMs.  This is likely due to network configuration or firewall issues.  Solutions include checking network settings, firewall rules, and upgrading to the latest PiecesOS version (11.1.2).

**Related Issues:**
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#630](https://github.com/pieces-app/support/issues/630): core services


## Recommendations
- **Prioritize resolution of PiecesOS boot and launch issues:** These issues are the most frequent and impactful, causing frustration for users upgrading to newer versions. Focus on addressing the root causes, such as data migration problems, hardware compatibility, and conflicts with other software like OneDrive.
- **Improve communication and troubleshooting for MacOS users:** Ensure dedicated support and resources are available for MacOS users to avoid overlooking platform-specific issues.
- **Investigate and address connectivity and cloud service issues:** Identify the root causes of connection failures, including network configuration, firewall restrictions, and potential software bugs. Provide clear troubleshooting steps for users experiencing these issues.
- **Enhance error messaging and logging:** Provide more informative error messages to users, clearly explaining the problem and potential solutions. Improve logging mechanisms to aid in faster and more efficient troubleshooting.
- **Proactively monitor for emerging issues:** Implement systems to track common issues and user reports, allowing for quicker identification and resolution of widespread problems. Consider setting up monitoring for error logs and user feedback channels.
- **Create a comprehensive knowledge base:** Develop a detailed knowledge base with articles, FAQs, and troubleshooting guides covering common issues, installation instructions, and feature explanations. This will empower users to self-serve and reduce the support load.
- **Consider hardware requirements in future updates:** Clearly communicate any changes in hardware requirements to users before releasing updates. Provide compatibility information and alternative solutions for users with older hardware.
- **Gather user feedback on updates:** Implement a system for gathering user feedback on new releases and updates. This will help identify potential issues early on and improve the overall user experience.
- **Improve support bot's effectiveness:** Enhance the support bot's ability to understand and respond to user queries. Provide it with more comprehensive information and train it on past support interactions to improve its accuracy and helpfulness.
- **Explore real-time debugging options:** Offer real-time debugging sessions for complex issues that require direct interaction with support agents. This can expedite the troubleshooting process and improve user satisfaction.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
- [report_210558](daily/2025-02-20/report_210558.md)
- [report_131056](daily/2025-02-20/report_131056.md)
