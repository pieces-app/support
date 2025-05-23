# Support Ticket Report
- Generated: 2025-05-23 21:08:05
- Period: 2025-05-19 to 2025-05-23

## Summary
- **Total Tickets:** 9
- **Resolved:** 0
- **Open:** 9

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#716](https://github.com/pieces-app/support/issues/716) | llms won't provide me the full code i need | 22.61 |
| [#718](https://github.com/pieces-app/support/issues/718) | Pieces crash when on Chrome tab with a lot of content | 8.50 |
| [#710](https://github.com/pieces-app/support/issues/710) | Long Term Memory 2 stills slow down my macbook pro with intel chipset. | 8.09 |
| [#719](https://github.com/pieces-app/support/issues/719) | Pieces Desktop freezes after inactivity | 7.50 |
| [#720](https://github.com/pieces-app/support/issues/720) | Problems with calendar days | 5.25 |

## Common Issues
### 1. Pieces Desktop Application Bugs
Users reported various issues with the Pieces desktop application, including incorrect calendar days in chat summaries on macOS, incomplete code generation from LLMs on Windows, and inverted arrow key scrolling in Copilot conversations on macOS.  Further investigation is needed to identify the root causes and implement fixes for these issues across different operating systems and features.

**Related Issues:**
- [#720](https://github.com/pieces-app/support/issues/720): Problems with calendar days
- [#716](https://github.com/pieces-app/support/issues/716): llms won't provide me the full code i need
- [#714](https://github.com/pieces-app/support/issues/714): Arrow keys inverted when scrolling through Copilot conversation

### 2. Pieces Software Bugs and Feature Requests
Users are encountering issues with Pieces software, including the Pieces CLI not utilizing LTM context, the VS Code extension's copy button endlessly loading, and LLMs not providing complete or accurate code.  Further investigation and bug fixes are needed to address these issues and improve the user experience. Additional information is needed to determine if the LLM issue is related to Pieces or the LLMs themselves.

**Related Issues:**
- [#716](https://github.com/pieces-app/support/issues/716): llms won't provide me the full code i need
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#712](https://github.com/pieces-app/support/issues/712): copy button in pieces vs code extension keeps loading indefinitely.

### 3. Pieces Desktop Freezes and High Resource Usage
Users report Pieces Desktop freezing after inactivity, especially after using chat functionality.  High CPU and GPU usage are also observed, sometimes crashing the application or even the entire system. Issues occur across Windows and macOS, with varying Pieces OS and Desktop versions.  Users with lower system resources seem more susceptible. Further investigation into resource management and chat interaction is needed.

**Related Issues:**
- [#719](https://github.com/pieces-app/support/issues/719): Pieces Desktop freezes after inactivity
- [#718](https://github.com/pieces-app/support/issues/718): Pieces crash when on Chrome tab with a lot of content
- [#710](https://github.com/pieces-app/support/issues/710): Long Term Memory 2 stills slow down my macbook pro with intel chipset.

### 4. LTM Issues and Unexpected Behavior in Pieces OS
Users report problems with Long Term Memory (LTM) in Pieces OS, including failure to clear LTM, inconsistent behavior between Pieces CLI and Desktop, and freezing after inactivity when LTM is enabled.  Further investigation is needed to identify the root cause and potential solutions across different Pieces components and versions.

**Related Issues:**
- [#709](https://github.com/pieces-app/support/issues/709): LTM does not clear
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#719](https://github.com/pieces-app/support/issues/719): Pieces Desktop freezes after inactivity


## Recommendations
- Investigate and fix the issue with LLMs not providing complete code, as reported in multiple tickets (716, 714).
- Address the Pieces Desktop freezing issue after inactivity, especially after chat usage (719, 718, 710).  This appears to affect both Windows and macOS users and may be related to resource management or LTM.
- Investigate and resolve the LTM issues, including clearing problems (709), inconsistencies between CLI and Desktop (713), and potential contribution to freezing (719).
- Fix the reported bugs in the Pieces Desktop application related to calendar days in chat summaries (720), inverted arrow key scrolling in Copilot conversations (714), and the endlessly loading copy button in the VS Code extension (712).
- Look into the Pieces CLI not utilizing LTM context (713) to ensure consistent functionality across all Pieces components.
- Prioritize the most active tickets (716, 718, 710, 719) due to their higher impact on users.
- Consider adding more detailed logging to Pieces OS and Desktop to better diagnose crashes and freezes (718).
- Gather more information about the LLM code generation issues to determine if the problem lies with Pieces or the LLMs themselves (716).
- Investigate the high CPU and GPU usage reported by some users (718, 710) and optimize resource management within Pieces Desktop.
- Communicate the status of these issues and planned fixes to affected users to manage expectations and improve transparency.
- Analyze the relationship between LTM usage and application performance, particularly freezing and high resource usage.
- Implement better error handling and user feedback mechanisms within the Pieces Desktop application, especially for operations like clearing LTM (709) and copying code (712).

## Daily Reports
Here are the daily reports for this week:

- [report_210647](daily/2025-05-20/report_210647.md)
- [report_210648](daily/2025-05-21/report_210648.md)
- [report_131547](daily/2025-05-21/report_131547.md)
- [report_131548](daily/2025-05-22/report_131548.md)
- [report_210647](daily/2025-05-22/report_210647.md)
- [report_131439](daily/2025-05-23/report_131439.md)
- [report_210621](daily/2025-05-23/report_210621.md)
