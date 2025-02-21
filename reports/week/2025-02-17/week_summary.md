# Support Ticket Report
- Generated: 2025-02-21 13:12:05
- Period: 2025-02-17 to 2025-02-21

## Summary
- **Total Tickets:** 11
- **Resolved:** 8
- **Open:** 3

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 15.18 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 8.96 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 6.62 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 6.17 |
| [#634](https://github.com/pieces-app/support/issues/634) | Unable to sign in! We aren't sure what happened. | 4.42 |

## Common Issues
### 1. PiecesOS launch failure due to AVX2 incompatibility
Multiple users reported PiecesOS failing to launch after upgrading to version 11.1.1. The issue stemmed from a dependency on AVX2 instructions, not supported by some older CPUs. The Pieces team acknowledged the problem, released a fix in version 11.1.2, and users confirmed the resolution.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS Boot-up Failure: Stuck on Core Dependencies
Multiple users report PiecesOS failing to launch, stuck on "ensure core dependency" step. This occurs across macOS and Windows, particularly after updates. Proposed solutions include updating to the latest version, reinstalling the application, clearing the data directory, and ensuring compatibility with OneDrive.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch

### 3. PiecesOS fails to launch due to database error
Multiple users reported PiecesOS failing to launch on Ubuntu and Windows, encountering a "DatabaseException" related to the 'CouchbaseLiteVectorSearch' extension. This was linked to stricter hardware requirements in version 11.1.1. The Pieces team released a patch (version 11.1.2) to address this, advising users to update to the latest version.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. Pieces for Developers Connectivity and Launch Issues
Users report Pieces for Developers app failing to connect to cloud services or utilize local LLMs. This might be due to firewall, network configuration, or stricter hardware requirements in recent versions. Solutions include checking network settings, providing logs for analysis, and updating to the latest patch releases.

**Related Issues:**
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 5. Pieces for Developers Connectivity and Launch Issues
Users are experiencing difficulties connecting to Pieces cloud services and local LLMs, as well as launching PiecesOS. This could be due to network configuration, firewall settings, or software bugs. Proposed solutions include checking internet connection, switching networks, verifying firewall settings, and examining log files. The Pieces team is actively investigating these issues and providing support to affected users.

**Related Issues:**
- [#634](https://github.com/pieces-app/support/issues/634): Unable to sign in! We aren't sure what happened.
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch


## Recommendations
- **Prioritize resolving PiecesOS launch failures:** The most frequent and active tickets revolve around PiecesOS failing to launch due to various reasons like AVX2 incompatibility, core dependency issues, and database errors. Focus on addressing these root causes to quickly reduce ticket volume.
- **Improve communication about hardware requirements:** The AVX2 incompatibility issue caused significant disruption. Clearly communicate any hardware or software dependencies for new versions to prevent similar situations.
- **Investigate and address Pieces for Developers connectivity issues:**  Multiple reports indicate problems connecting to cloud services and utilizing local LLMs. Identify the root cause (firewall, network configuration, bugs) and provide clear solutions or workarounds.
- **Review and enhance upgrade processes:** Issues arising from updates, particularly the "ensure core dependency" problem, suggest potential improvements in the upgrade process. Thoroughly test updates and provide clear instructions to minimize user disruption.
- **Consider a dedicated support channel for Pieces for Developers:** Given the specific connectivity and launch issues reported, a dedicated support channel could offer more targeted assistance and faster resolution times.
- **Proactively monitor for emerging issues:**  Track ticket trends and user feedback to identify and address emerging issues before they escalate. Utilize monitoring tools to detect potential problems in real-time.
- **Develop a comprehensive knowledge base:** Create detailed documentation and FAQs addressing common issues, troubleshooting steps, and hardware/software requirements. This empowers users to resolve problems independently and reduces support load.
- **Gather more detailed user feedback:** Encourage users to provide comprehensive information when reporting issues, including logs, screenshots, and system details. This facilitates faster diagnosis and resolution by the support team.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-02-18/report_210608.md)
- [report_130954](daily/2025-02-18/report_130954.md)
- [report_210558](daily/2025-02-20/report_210558.md)
- [report_131056](daily/2025-02-20/report_131056.md)
- [report_131009](daily/2025-02-21/report_131009.md)
