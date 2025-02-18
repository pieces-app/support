# Support Ticket Report
- Generated: 2025-02-18 13:11:55
- Period: 2025-02-17 to 2025-02-18

## Summary
- **Total Tickets:** 8
- **Resolved:** 8
- **Open:** 0

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#613](https://github.com/pieces-app/support/issues/613) | PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application) | 16.62 |
| [#625](https://github.com/pieces-app/support/issues/625) | PiecesOS crash immediately after launch | 11.00 |
| [#624](https://github.com/pieces-app/support/issues/624) | PiecesOS was unable to launch. | 7.98 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 7.37 |
| [#619](https://github.com/pieces-app/support/issues/619) | Facing error on Ubuntu while opening Pieces "DatabaseException" | 4.74 |

## Common Issues
### 1. PiecesOS Startup Failure
Users reported PiecesOS failing to launch or getting stuck during startup, particularly after updates. The issue affected macOS and Windows, often manifesting as frozen "core dependencies" loading. Solutions included patches addressing data migration, conflicting software, and installer issues.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 2. PiecesOS launch failure due to AVX2 incompatibility
Multiple users reported PiecesOS crashing or failing to launch after upgrading to version 11.1.1. The issue stemmed from a new dependency requiring AVX2 instruction set support, which some older CPUs lack. The Pieces team addressed this by releasing a patched version 11.1.2 with a workaround, resolving the launch issue for affected users.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS fails to launch due to database error
Multiple users reported PiecesOS failing to launch on Ubuntu and Windows, encountering a "DatabaseException" or a blank error screen. The issue was linked to missing AVX2 hardware support and stricter hardware requirements in version 11.1.1. The Pieces team released version 11.1.2 to address this problem, urging users to update to the latest version.

**Related Issues:**
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 4. PiecesOS Launching Issues
Users reported PiecesOS failing to launch on macOS and Windows after updating to version 11.1.0 or 11.1.1. The issues involved slow boot-up or complete failure to launch. A potential solution was identified as accidentally installing the Intel version on ARM Macs. The Pieces team released version 11.1.2 to address these issues, urging users to update and confirm resolution.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 5. PiecesOS Boot-up and Download Issues
Users reported issues with PiecesOS, including slow boot-up times and failures to download local LLMs. These issues seem to stem from problems with specific PiecesOS versions and potential hardware compatibility issues. The Pieces team has released updates (versions 11.1.2 and later) to address these problems. Users experiencing these issues are recommended to update to the latest version and check for compatibility.

**Related Issues:**
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all


## Recommendations
- **Prioritize resolution of PiecesOS launch failures:** The majority of reported issues relate to PiecesOS failing to launch, particularly after updates. Focus on addressing root causes such as data migration issues, conflicting software, and installer problems.
- **Improve communication about hardware requirements:** Several users encountered issues due to stricter hardware requirements, specifically AVX2 support. Clearly communicate these requirements on the download page, installation instructions, and release notes.
- **Investigate and address slow boot-up times:** Multiple users reported slow boot-up times, impacting their workflow. Investigate the root cause and explore optimization strategies to improve startup performance.
- **Enhance error messaging and troubleshooting documentation:** Provide more informative error messages to help users self-diagnose issues. Enhance troubleshooting documentation with step-by-step guides for common launch problems.
- **Monitor platform and version-specific issues:** Track issue trends across different operating systems and PiecesOS versions to identify potential patterns and prioritize fixes for widespread problems.
- **Consider a dedicated channel for reporting PiecesOS issues:** Given the volume of PiecesOS-related tickets, create a dedicated channel or form for users to report these issues, streamlining the support process.
- **Gather user feedback on recent updates:** Collect feedback from users who experienced launch issues after recent updates to understand the impact of changes and identify areas for improvement in future releases.
- **Proactively communicate known issues and workarounds:** Maintain a public-facing list of known issues and workarounds to keep users informed and minimize support requests for already identified problems.
- **Invest in automated testing to catch compatibility issues:** Implement rigorous automated testing to identify potential compatibility issues with different hardware and software configurations before releasing updates.
- **Analyze support ticket data regularly to identify trends and areas for improvement:** Establish a process for regularly analyzing support ticket data to identify recurring issues, emerging trends, and opportunities for proactive support and product improvements.

## Daily Reports
Here are the daily reports for this week:

- [report_130954](daily/2025-02-18/report_130954.md)
