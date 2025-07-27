# Support Ticket Report
- Generated: 2025-07-27 13:16:25
- Period: 2025-07-21 to 2025-07-27

## Summary
- **Total Tickets:** 6
- **Resolved:** 0
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#803](https://github.com/pieces-app/support/issues/803) | it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked | 7.32 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 6.46 |
| [#805](https://github.com/pieces-app/support/issues/805) | LTM gets gunged up over time | 4.42 |
| [#804](https://github.com/pieces-app/support/issues/804) | Unable to generate Workstream Summary | 3.50 |
| [#781](https://github.com/pieces-app/support/issues/781) | Raycast Extension Incompatible with Current Version of Raycast | 3.08 |

## Common Issues
### 1. Pieces OS Bugs: Selection, Resource Usage, Context Reset
Users report persistent selection issues on Windows, high RAM/CPU usage potentially linked to internet connectivity, and auto-generated context resetting to "Medium" on macOS.  Workarounds include restarting Pieces OS for resource issues. Further investigation needed for selection and context bugs.

**Related Issues:**
- [#803](https://github.com/pieces-app/support/issues/803): it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#801](https://github.com/pieces-app/support/issues/801): Auto Generated Context Always returns to Medium

### 2. PiecesOS Errors and Performance Degradation
Users report issues with PiecesOS, including high RAM/CPU usage, LTM query failures after prolonged use, and "Workstream Summary" generation errors.  A common error message points to a missing Publisher Model in Google Vertex AI.  Short-term solutions include restarting PiecesOS.  The LTM "Clear Data" button is also reported as non-functional.

**Related Issues:**
- [#804](https://github.com/pieces-app/support/issues/804): Unable to generate Workstream Summary
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time

### 3. PiecesOS macOS App Performance Issues
Users are experiencing performance issues with the Pieces macOS app, including slow LTM queries, failure to clear LTM data, and auto-generated context settings reverting to default.  One user reported LTM issues after several weeks of use, resolving temporarily after clearing all Pieces data. Another user noted auto-generated context settings consistently reverting to "Medium." High RAM and CPU usage have also been reported, with restarting PiecesOS as a temporary workaround.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#801](https://github.com/pieces-app/support/issues/801): Auto Generated Context Always returns to Medium
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU

### 4. Pieces OS and extensions have compatibility issues
Users report various compatibility issues between Pieces OS, its extensions (like Raycast), and the OS itself (macOS, Windows). Problems include Raycast extension incompatibility, auto-generated context settings reverting, and workstream summary generation failures.  Check for updates for Pieces, the extension, and the OS. Ensure sufficient resources for workstream summaries. Review Pieces documentation or contact support if issues persist.

**Related Issues:**
- [#781](https://github.com/pieces-app/support/issues/781): Raycast Extension Incompatible with Current Version of Raycast
- [#801](https://github.com/pieces-app/support/issues/801): Auto Generated Context Always returns to Medium
- [#804](https://github.com/pieces-app/support/issues/804): Unable to generate Workstream Summary


## Recommendations
- Investigate and address the "Publisher Model not found" error impacting Workstream Summary generation and error summaries.
- Prioritize resolving the Pieces OS performance issues related to high RAM/CPU usage, especially on Windows.
- Fix the persistent selection bug on Windows where users experience unintended selection behavior.
- Address the LTM performance degradation and data clearing issues on macOS.
- Investigate and resolve the issue with auto-generated context settings reverting to "Medium" on macOS.
- Update the Raycast extension for compatibility with the latest Raycast version.
- Review and improve the functionality of the "Clear LTM Data" button.
- Consider adding more detailed logging to Pieces OS to aid in debugging performance and stability issues.

## Daily Reports
Here are the daily reports for this week:

- [report_210740](daily/2025-07-23/report_210740.md)
- [report_210743](daily/2025-07-24/report_210743.md)
- [report_210702](daily/2025-07-25/report_210702.md)
- [report_210630](daily/2025-07-26/report_210630.md)
- [report_131450](daily/2025-07-26/report_131450.md)
