# Support Ticket Report
- Generated: 2025-02-23 13:10:34
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
### 1. PiecesOS slow boot-up and launch issues
Users reported slow boot-up times and launch failures with PiecesOS, particularly after updates. The issue seems to affect both macOS and Windows. Suggested solutions include updating to the latest version, giving the app time to migrate data, and providing log files to support for diagnosis.

**Related Issues:**
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services
- [#633](https://github.com/pieces-app/support/issues/633): PiecesOS was unable to launch

### 2. PiecesOS launch crash due to AVX2 incompatibility
Multiple users reported PiecesOS crashing on launch after upgrading to version 11.1.1. The issue stemmed from a new dependency on AVX2 instructions, which older CPUs lack. The Pieces team acknowledged the problem and released version 11.1.2 to address this incompatibility, resolving the launch crash for affected users.

**Related Issues:**
- [#625](https://github.com/pieces-app/support/issues/625): PiecesOS crash immediately after launch
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#624](https://github.com/pieces-app/support/issues/624): PiecesOS was unable to launch.

### 3. PiecesOS Slow Boot-up and Startup Errors
Users reported PiecesOS taking a long time to boot up or getting stuck on "Ensuring Core Dependencies" screen, especially after updating to version 11.1.0 or 11.1.1. This is likely due to data migration issues. Suggested solutions include updating to the latest version, waiting for a few minutes, or reinstalling the app.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#613](https://github.com/pieces-app/support/issues/613): PiecesOS takes a while to boot-up(cannot run): (Unable to make it past ensure core dependency in the Desktop application)
- [#630](https://github.com/pieces-app/support/issues/630): core services

### 4. Pieces for Developers: Account Linking and Connectivity Issues
Users report problems linking Google and GitHub accounts, with only one connecting at a time. This might stem from account linking flow issues.  Additionally, users experience difficulties connecting to Pieces cloud services and using local LLMs, possibly due to firewall or network configuration problems. Solutions involve investigating account settings, network configurations, and reviewing log files with support.

**Related Issues:**
- [#610](https://github.com/pieces-app/support/issues/610): Pieces Desktop app, account linking never acheived for several years?
- [#634](https://github.com/pieces-app/support/issues/634): Unable to sign in! We aren't sure what happened.
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues

### 5. Pieces OS Startup and Connectivity Issues
Users report Pieces OS failing to launch, encountering cloud service connection errors, or experiencing conflicts with locally installed Ollama instances. Solutions include verifying internet connection, checking firewall settings, reinstalling Pieces OS and associated components, and ensuring compatibility with system hardware requirements like AVX2 support.

**Related Issues:**
- [#570](https://github.com/pieces-app/support/issues/570): Pieces OS conflicting with Installed Ollama Server?
- [#631](https://github.com/pieces-app/support/issues/631): Pieces for Developers Not Working – Cloud Service & Local LLM Issues
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all


## Recommendations
- **Prioritize resolution of PiecesOS boot-up and launch issues:** This is the most frequent and impactful problem reported by users. Focus on identifying the root causes of slow boot-up times, launch failures, and "Ensuring Core Dependencies" errors, particularly in versions 11.1.0 and 11.1.1.  Investigate data migration processes and potential conflicts with system configurations.
- **Improve communication around AVX2 incompatibility:** Clearly communicate the minimum hardware requirements, including AVX2 support, on the PiecesOS download page and release notes. Provide clear instructions for users with older CPUs who encounter launch crashes.
- **Investigate and resolve account linking issues:** Address the problem of users being unable to link both Google and GitHub accounts simultaneously. Review and improve the account linking flow to ensure a seamless user experience.
- **Provide troubleshooting steps for cloud service and local LLM connectivity:** Create comprehensive documentation for resolving cloud service connection errors and issues with local LLM integration. This should include verifying internet connection, checking firewall settings, and ensuring compatibility between Pieces OS and locally installed LLM instances.
- **Consider implementing automatic detection of external Ollama instances:** Explore the feasibility of Pieces OS automatically detecting and utilizing externally installed Ollama servers to avoid conflicts and improve user experience.
- **Proactively monitor for emerging issues:** Regularly analyze support tickets and community forums to identify and address emerging trends or recurring problems. This will help to stay ahead of potential support escalations and improve overall product quality.

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
- [report_050626](daily/2025-02-23/report_050626.md)
