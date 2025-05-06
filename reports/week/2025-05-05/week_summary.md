# Support Ticket Report
- Generated: 2025-05-06 13:16:50
- Period: 2025-05-05 to 2025-05-06

## Summary
- **Total Tickets:** 4
- **Resolved:** 1
- **Open:** 3

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#693](https://github.com/pieces-app/support/issues/693) | Crash due to native_extensions_plugin.dll | 7.79 |
| [#663](https://github.com/pieces-app/support/issues/663) | Kaspersky Internet Security flags Pieces OS as a virus | 3.94 |
| [#697](https://github.com/pieces-app/support/issues/697) | Visual Studio 2022 extension interfering with Diagnostic tool output | 3.76 |
| [#113](https://github.com/pieces-app/support/issues/113) | Download of local LLM's initializes, but never proceeds  | 2.74 |

## Common Issues
### 1. Pieces OS: Conflicts and Crashes
Multiple users report conflicts between Pieces OS and other software (Kaspersky, Visual Studio). Issues include Kaspersky flagging Pieces OS as a virus, Visual Studio's diagnostic tools malfunctioning, and crashes linked to native_extensions_plugin.dll.  Suggested solutions include disabling the Pieces plugin, reinstalling Pieces OS, and checking antivirus/firewall settings. Further investigation into native_extensions_plugin.dll is needed.

**Related Issues:**
- [#663](https://github.com/pieces-app/support/issues/663): Kaspersky Internet Security flags Pieces OS as a virus
- [#697](https://github.com/pieces-app/support/issues/697): Visual Studio 2022 extension interfering with Diagnostic tool output
- [#693](https://github.com/pieces-app/support/issues/693): Crash due to native_extensions_plugin.dll

### 2. Software Conflicts and Download Issues
Users report software conflicts (Kaspersky, VS Code, Pieces OS) and download issues with local LLMs.  Conflicts manifest as blank diagnostic panes or false virus flags. Download issues cause LLMs to get stuck initializing or at 0% complete.  Suggested solutions include disabling conflicting plugins, updating Pieces OS, and checking internet connectivity.

**Related Issues:**
- [#113](https://github.com/pieces-app/support/issues/113): Download of local LLM's initializes, but never proceeds 
- [#697](https://github.com/pieces-app/support/issues/697): Visual Studio 2022 extension interfering with Diagnostic tool output
- [#663](https://github.com/pieces-app/support/issues/663): Kaspersky Internet Security flags Pieces OS as a virus


## Recommendations
- Investigate and address the 'native_extensions_plugin.dll' crash issue (high frequency and activity).
- Develop a troubleshooting guide for software conflicts (Kaspersky, Visual Studio, VS Code) with Pieces OS.
- Improve LLM download stability and provide clearer error messages/progress updates.
- Review and update antivirus/firewall documentation regarding Pieces OS interaction.
- Monitor and address issues related to Pieces OS and Windows compatibility, especially diagnostic tools in Visual Studio 2022.
- Investigate the root cause of the local LLM download issue on Linux (stuck initializing) and VS Code (stuck at 0%).

## Daily Reports
Here are the daily reports for this week:

- [report_050749](daily/2025-05-06/report_050749.md)
- [report_131607](daily/2025-05-06/report_131607.md)
