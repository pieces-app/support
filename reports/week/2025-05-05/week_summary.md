# Support Ticket Report
- Generated: 2025-05-07 13:17:09
- Period: 2025-05-05 to 2025-05-07

## Summary
- **Total Tickets:** 4
- **Resolved:** 1
- **Open:** 3

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#693](https://github.com/pieces-app/support/issues/693) | Crash due to native_extensions_plugin.dll | 7.65 |
| [#663](https://github.com/pieces-app/support/issues/663) | Kaspersky Internet Security flags Pieces OS as a virus | 3.93 |
| [#697](https://github.com/pieces-app/support/issues/697) | Visual Studio 2022 extension interfering with Diagnostic tool output | 3.61 |
| [#113](https://github.com/pieces-app/support/issues/113) | Download of local LLM's initializes, but never proceeds  | 2.74 |

## Common Issues
### 1. Pieces OS conflicts and crashes on Windows
Multiple users report conflicts between Pieces OS and other software on Windows. Kaspersky flags Pieces OS as a virus. The Pieces VS extension blanks the Diagnostic Tools pane.  The native_extensions_plugin.dll causes crashes.  Reinstalling, disabling antivirus/firewall, and updating drivers haven't resolved the crashes.  Disabling the VS extension restores Diagnostics output. Further investigation into native_extensions_plugin.dll is needed.

**Related Issues:**
- [#663](https://github.com/pieces-app/support/issues/663): Kaspersky Internet Security flags Pieces OS as a virus
- [#697](https://github.com/pieces-app/support/issues/697): Visual Studio 2022 extension interfering with Diagnostic tool output
- [#693](https://github.com/pieces-app/support/issues/693): Crash due to native_extensions_plugin.dll

### 2. Software Conflicts and Download Issues
Users report software conflicts (Kaspersky, VS Code, Pieces OS) and download issues with local LLMs.  Conflicts manifest as blank diagnostic panes or false virus flags. Download issues involve LLMs getting stuck on initializing, potentially due to network or compatibility problems.  Check network connectivity, software versions, and OS compatibility for potential solutions.

**Related Issues:**
- [#113](https://github.com/pieces-app/support/issues/113): Download of local LLM's initializes, but never proceeds 
- [#697](https://github.com/pieces-app/support/issues/697): Visual Studio 2022 extension interfering with Diagnostic tool output
- [#663](https://github.com/pieces-app/support/issues/663): Kaspersky Internet Security flags Pieces OS as a virus


## Recommendations
- Investigate and fix the 'native_extensions_plugin.dll' crash on Windows. This is the most frequent and impactful issue.
- Address Kaspersky flagging Pieces OS as a virus. This is a recurring problem affecting Windows users.
- Resolve the Visual Studio 2022 extension conflict causing blank Diagnostic tool output.
- Troubleshoot and fix the local LLM download issue, especially for Linux users where it gets stuck on initializing.
- Improve communication with users awaiting responses, given the pending tickets in the 'status:waiting_on_user_responses' category.
- Consider adding more specific documentation or troubleshooting steps for software conflicts and download issues on different operating systems (Windows, macOS, Linux).

## Daily Reports
Here are the daily reports for this week:

- [report_131607](daily/2025-05-06/report_131607.md)
- [report_050749](daily/2025-05-06/report_050749.md)
- [report_210652](daily/2025-05-06/report_210652.md)
