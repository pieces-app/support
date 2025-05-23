# Support Ticket Report
- Generated: 2025-05-23 05:08:31
- Period: 2025-05-19 to 2025-05-23

## Summary
- **Total Tickets:** 8
- **Resolved:** 0
- **Open:** 8

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#716](https://github.com/pieces-app/support/issues/716) | llms won't provide me the full code i need | 23.25 |
| [#718](https://github.com/pieces-app/support/issues/718) | Pieces crash when on Chrome tab with a lot of content | 10.73 |
| [#710](https://github.com/pieces-app/support/issues/710) | Long Term Memory 2 stills slow down my macbook pro with intel chipset. | 8.43 |
| [#713](https://github.com/pieces-app/support/issues/713) | LTM not working in Pieces CLI | 4.52 |
| [#720](https://github.com/pieces-app/support/issues/720) | Problems with calendar days | 4.42 |

## Common Issues
### 1. Pieces Desktop Application Bugs
Users reported issues with the Pieces desktop application, including incorrect calendar days in chat summaries on macOS, incomplete code generation from LLMs on Windows, and inverted arrow key scrolling in Copilot conversations on macOS.  Further investigation is needed to identify the root causes and implement fixes for these diverse issues across different operating systems and features.

**Related Issues:**
- [#720](https://github.com/pieces-app/support/issues/720): Problems with calendar days
- [#716](https://github.com/pieces-app/support/issues/716): llms won't provide me the full code i need
- [#714](https://github.com/pieces-app/support/issues/714): Arrow keys inverted when scrolling through Copilot conversation

### 2. Pieces Desktop Freezes and High Resource Usage
Users report Pieces Desktop freezing after inactivity, especially after using chat, requiring a restart.  High CPU and GPU usage are also observed, sometimes freezing the entire system. Issues occur across Windows and macOS, with varying Pieces OS and Desktop versions.  Users with lower system resources seem more affected. Further investigation into resource management and chat interaction is needed.

**Related Issues:**
- [#719](https://github.com/pieces-app/support/issues/719): Pieces Desktop freezes after inactivity
- [#718](https://github.com/pieces-app/support/issues/718): Pieces crash when on Chrome tab with a lot of content
- [#710](https://github.com/pieces-app/support/issues/710): Long Term Memory 2 stills slow down my macbook pro with intel chipset.

### 3. Pieces for Windows Freezes/Crashes with LTM
Multiple reports on Windows show Pieces freezing or crashing, often related to LTM usage or large content. Issues appear in CLI and Desktop app, across versions 11.3.6-11.4.1.  CLI shows LTM connection errors. Desktop freezes after inactivity, especially following chat interactions with LTM enabled.  Memory usage may be a factor, as crashes correlate with large content in Chrome tabs. Further investigation needed to isolate LTM's role and potential memory leaks.

**Related Issues:**
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#718](https://github.com/pieces-app/support/issues/718): Pieces crash when on Chrome tab with a lot of content
- [#719](https://github.com/pieces-app/support/issues/719): Pieces Desktop freezes after inactivity

### 4. Pieces Freezes and Crashes on Windows
Multiple users report Pieces freezing or crashing on Windows. Issues include infinite loading of the copy button in VS Code extension, crashes when viewing large content in Chrome tabs, and freezes after inactivity, especially after chat interactions.  Users report this across Pieces OS versions 11.3.6.0, 11.4.0, and 11.4.1.  Further investigation is needed to determine the root cause and potential solutions.

**Related Issues:**
- [#712](https://github.com/pieces-app/support/issues/712): copy button in pieces vs code extension keeps loading indefinitely.
- [#718](https://github.com/pieces-app/support/issues/718): Pieces crash when on Chrome tab with a lot of content
- [#719](https://github.com/pieces-app/support/issues/719): Pieces Desktop freezes after inactivity


## Recommendations
- Investigate and fix the issue with Pieces Desktop application bugs across different operating systems (macOS and Windows), including incorrect calendar days in chat summaries, incomplete code generation from LLMs, and inverted arrow key scrolling in Copilot conversations.
- Address the freezing and high resource usage issues reported for Pieces Desktop on both Windows and macOS. Focus on resource management and chat interaction as potential causes, especially after periods of inactivity and with LTM enabled.
- Resolve the LTM-related issues on Windows, including connection errors in the CLI and freezing/crashing in the Desktop app, particularly after chat interactions. Investigate potential memory leaks and LTM's role in these issues.
- Fix the copy button functionality in the Pieces VS Code extension on Windows, which currently loads indefinitely.
- Prioritize resolving the most active tickets, starting with #716 (LLM code generation), #718 (Pieces crashing with large content), and #710 (LTM performance on macOS).

## Daily Reports
Here are the daily reports for this week:

- [report_210647](daily/2025-05-20/report_210647.md)
- [report_210648](daily/2025-05-21/report_210648.md)
- [report_131547](daily/2025-05-21/report_131547.md)
- [report_131548](daily/2025-05-22/report_131548.md)
- [report_210647](daily/2025-05-22/report_210647.md)
