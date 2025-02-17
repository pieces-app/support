# Support Ticket Report
- Generated: 2025-02-17 21:09:11
- Period: 2025-02-17 to 2025-02-17

## Summary
- **Total Tickets:** 8
- **Resolved:** 7
- **Open:** 1

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 16.00 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 11.75 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 8.36 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 7.68 |
| [#619](https://github.com/pieces-app/support/issues/619) | Facing error on Ubuntu while opening Pieces "DatabaseException" | 4.91 |

## Common Issues
### 1. PiecesOS Fails to Launch on Windows and macOS
Users reported PiecesOS failing to launch on Windows and macOS, often getting stuck during startup. The issue was linked to processor incompatibility (AVX2 support), OneDrive conflicts, and other factors. Solutions included updating to versions 11.1.1, 11.1.2, or higher, contacting support for OneDrive issues, or temporarily closing and reopening the app on macOS.

**Related Issues:**
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)

### 2. PiecesOS fails to launch due to core dependency issues
Users report PiecesOS failing to launch, stuck on "ensure core dependency" step during startup. This issue appears across macOS and Windows platforms, often after an update. Solutions include updating to the latest PiecesOS version (11.1.2 or higher), checking for OneDrive conflicts on Windows, and trying a simple app restart on macOS.

**Related Issues:**
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS launch failure due to AVX2 incompatibility
Users reported PiecesOS crashing or failing to launch after upgrading to version 11.1.1. The issue stemmed from a new dependency requiring AVX2 instruction set support, which some older CPUs lack. The Pieces team resolved this in version 11.1.2, advising affected users to update.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. PiecesOS Boot-up and Launching Issues
Users reported PiecesOS failing to boot or launch, often getting stuck on "core dependency" checks. This primarily affected macOS and Windows users after updates to versions 11.1.0 and 11.1.1. Solutions included updating to the latest version (11.1.2 resolved most issues), reinstalling the app, and on Windows, addressing potential OneDrive conflicts. 

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 5. PiecesOS launch and download failures
Users reported PiecesOS launch failures and download errors for local LLMs on various operating systems. The errors often involved database exceptions, connection issues, or stricter hardware requirements. Solutions included upgrading to the latest PiecesOS version (11.1.2), which contained fixes for these issues. Users were advised to update and reopen tickets if problems persisted.

**Related Issues:**
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.


## Recommendations
- **Prioritize resolution of PiecesOS launch failures:** The most frequent and active support tickets revolve around PiecesOS failing to launch, particularly due to core dependency issues and AVX2 incompatibility. Focus development efforts on addressing these root causes to reduce ticket volume.
- **Improve communication around updates:** Clearly communicate hardware and software requirements for new PiecesOS versions to manage user expectations and prevent compatibility issues. Provide detailed release notes outlining bug fixes and known issues.
- **Enhance onboarding and troubleshooting documentation:** Create comprehensive guides for common issues like core dependency errors and OneDrive conflicts. Include step-by-step instructions with screenshots for easier user comprehension.
- **Investigate platform-specific issues:** Analyze support tickets for patterns related to specific operating systems (macOS, Windows, Linux) to identify and address any underlying platform-specific bugs.
- **Consider a dedicated support portal:** Implement a dedicated support portal with a knowledge base, FAQs, and community forums to empower users to self-serve and reduce reliance on direct support channels.
- **Gather user feedback on update experiences:** Include in-app prompts or surveys after updates to gather feedback on the update process and identify any persisting issues.
- **Proactively monitor system stability:** Implement monitoring and alerting systems to detect and address potential issues before they impact a large number of users, particularly after new releases.
- **Analyze support ticket trends:** Regularly analyze support ticket data for trends and patterns to identify areas for improvement in the product, documentation, or support processes.
- **Automate ticket routing and responses:** Explore automation options for ticket routing and initial responses to common queries, freeing up support agents to focus on more complex issues.
- **Invest in support team training:** Provide ongoing training for support agents on new features, troubleshooting techniques, and communication best practices to enhance their effectiveness and efficiency.

## Daily Reports
Here are the daily reports for this week:

- [report_210605](daily/2025-02-17/report_210605.md)
- [report_131112](daily/2025-02-17/report_131112.md)
