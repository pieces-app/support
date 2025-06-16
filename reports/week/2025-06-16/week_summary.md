# Support Ticket Report
- Generated: 2025-06-16 21:08:53
- Period: 2025-06-16 to 2025-06-16

## Summary
- **Total Tickets:** 6
- **Resolved:** 0
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#754](https://github.com/pieces-app/support/issues/754) | LTM-2.5 causes Chrome to freeze on large dynamic pages | 11.67 |
| [#751](https://github.com/pieces-app/support/issues/751) | Unable to generate Workstream Summary | 10.41 |
| [#753](https://github.com/pieces-app/support/issues/753) | Workstream activities tab is not working | 5.68 |
| [#755](https://github.com/pieces-app/support/issues/755) | Pieces has become increasingly slow and is now unresponsive | 5.68 |
| [#752](https://github.com/pieces-app/support/issues/752) | Doesn't move past Initialising Desktop screen | 5.68 |

## Common Issues
### 1. Pieces OS 12.0.0 Performance and Stability Issues
Users report performance degradation and instability with Pieces OS 12.0.0 across different operating systems (Windows, macOS, Linux).  Symptoms include Chrome freezing on large webpages with LTM 2.5 enabled, slow or unresponsive "New chats" feature, and application freezing during initialization.  Potential solutions include disabling LTM 2.5, checking LLM model compatibility, and reverting to a previous Pieces OS version.

**Related Issues:**
- [#754](https://github.com/pieces-app/support/issues/754): LTM-2.5 causes Chrome to freeze on large dynamic pages
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#752](https://github.com/pieces-app/support/issues/752): Doesn't move past Initialising Desktop screen

### 2. Workstream Summary and Activities Tab Issues
Users are experiencing problems with Workstream features, including failure to generate summaries and update activities.  Error messages indicate potential connection issues with the server and a 404 error related to the Gemini-pro model.  Affected platforms include macOS and Linux.  Suggested solutions include checking server connection, verifying model access, and ensuring the Pieces OS version is compatible.

**Related Issues:**
- [#751](https://github.com/pieces-app/support/issues/751): Unable to generate Workstream Summary
- [#753](https://github.com/pieces-app/support/issues/753): Workstream activities tab is not working
- [#752](https://github.com/pieces-app/support/issues/752): Doesn't move past Initialising Desktop screen

### 3. PiecesOS Cloud Service Interruption and Performance Degradation
Users are experiencing slow performance and unresponsiveness in PiecesOS, Desktop App, and plugins, especially with cloud-connected features like Copilot, Workstream summaries, snippet transforms, and snippet discovery.  A service interruption is being investigated, potentially related to cloud services or a cyber incident. Data security is not believed to be impacted.  The Pieces team is working on restoring full functionality.

**Related Issues:**
- [#756](https://github.com/pieces-app/support/issues/756): 🚨 Ongoing Service Interruption Impacting Pieces Products and Cloud-Connected Features
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#752](https://github.com/pieces-app/support/issues/752): Doesn't move past Initialising Desktop screen


## Recommendations
- Prioritize resolving the ongoing service interruption impacting cloud-connected features (Copilot, Workstream summaries, snippet transforms, and snippet discovery).  This appears to be affecting multiple users across different operating systems.
- Investigate the root cause of the Pieces OS 12.0.0 performance and stability issues, particularly the Chrome freezing issue with LTM 2.5 enabled and the application freezing during initialization.
- Address the Workstream summary and activities tab issues, focusing on the reported connection problems and 404 error related to the Gemini-pro model.
- Provide regular status updates to users on the progress of resolving these issues, especially ticket 756 which tracks the service interruption.
- Consider adding more detailed logging or diagnostics to Pieces OS to help identify and resolve issues more quickly in the future.
- Review the LTM 2.5 implementation for potential performance bottlenecks, especially when handling large dynamic web pages.
- Ensure the Pieces OS installation process is robust and provide clear instructions for users experiencing installation problems, particularly on Linux.
- Investigate compatibility issues between Pieces OS 12.0.0 and different LLM models, as reported in ticket 755.
- Check server infrastructure and capacity to handle the load, especially for cloud-connected features.
- Review and update support documentation and FAQs with solutions to common issues related to LTM, Workstream, and installation problems.
- Develop a process for faster triage and resolution of critical bugs impacting core functionality.
- Consider implementing automated testing to catch compatibility and performance issues before release.

## Daily Reports
Here are the daily reports for this week:

- [report_131720](daily/2025-06-16/report_131720.md)
- [report_050929](daily/2025-06-16/report_050929.md)
- [report_210711](daily/2025-06-16/report_210711.md)
