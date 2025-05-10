# Support Ticket Report
- Generated: 2025-05-10 21:07:49
- Period: 2025-05-05 to 2025-05-10

## Summary
- **Total Tickets:** 10
- **Resolved:** 4
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#705](https://github.com/pieces-app/support/issues/705) | Pieces for developers GUI is upside down on Ubuntu 24.04 | 7.32 |
| [#693](https://github.com/pieces-app/support/issues/693) | Crash due to native_extensions_plugin.dll | 6.74 |
| [#706](https://github.com/pieces-app/support/issues/706) | Pieces for Developers doesn't support .vue files | 6.50 |
| [#691](https://github.com/pieces-app/support/issues/691) | OS: login does not work ( /os/sign_in HTTP 500) | 4.57 |
| [#702](https://github.com/pieces-app/support/issues/702) | I'm unable to do Handshake with asana | 4.34 |

## Common Issues
### 1. Pieces OS and Desktop App Crashes and Errors
Multiple users report crashes and errors across Pieces OS and Desktop App. Issues include Asana handshake failures, login failures with HTTP 500 errors on `/os/sign_in`, and crashes related to `native_extensions_plugin.dll`.  Troubleshooting steps like reinstallation, antivirus/firewall checks, and driver updates have been attempted. Further investigation into logs and plugin functionality is needed.

**Related Issues:**
- [#702](https://github.com/pieces-app/support/issues/702): I'm unable to do Handshake with asana
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#693](https://github.com/pieces-app/support/issues/693): Crash due to native_extensions_plugin.dll

### 2. Pieces OS/PFD Issues on Linux
Users on Ubuntu Linux are experiencing various issues with Pieces OS and Pieces for Developers. These include an upside-down GUI, login failures with HTTP 500 errors, and local LLM downloads getting stuck during initialization.  Troubleshooting steps include reinstalling/updating software, checking logs, and verifying internet connectivity.  One user reported a similar LLM download issue on Windows that was resolved by updating to Pieces OS 8.0.0.

**Related Issues:**
- [#705](https://github.com/pieces-app/support/issues/705): Pieces for developers GUI is upside down on Ubuntu 24.04
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#113](https://github.com/pieces-app/support/issues/113): Download of local LLM's initializes, but never proceeds 

### 3. Pieces OS crashes or freezes during login or LLM download
Users experience crashes during login or when downloading LLMs. Login attempts result in HTTP 500 errors, infinite spinners, or authentication error pages. LLM downloads get stuck on initializing. Issues appear across different OS versions (8.0.1, 11.3.3) and platforms (Linux, Windows).  Suggested solutions include checking logs, reinstalling the app, disabling antivirus/firewall, updating graphics drivers, or checking internet connection. A related issue on Windows was resolved by updating to 8.0.0.

**Related Issues:**
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#113](https://github.com/pieces-app/support/issues/113): Download of local LLM's initializes, but never proceeds 
- [#693](https://github.com/pieces-app/support/issues/693): Crash due to native_extensions_plugin.dll

### 4. Pieces Desktop App and OS Issues
Users are experiencing various issues with the Pieces desktop app, including connection problems ("Invalid Port"), file type restrictions (.vue files not supported), and local LLM download failures.  Troubleshooting steps include checking antivirus software, restarting/reinstalling the app, and verifying internet connectivity.  Further investigation is needed for the LLM download issue on Linux systems, despite a similar Windows issue being resolved with an update.

**Related Issues:**
- [#672](https://github.com/pieces-app/support/issues/672): Invalid Port (at character 18) http://127.0.0.1:null/connect
- [#706](https://github.com/pieces-app/support/issues/706): Pieces for Developers doesn't support .vue files
- [#113](https://github.com/pieces-app/support/issues/113): Download of local LLM's initializes, but never proceeds 

### 5. Pieces OS conflicts and errors
Users report conflicts with Kaspersky, Visual Studio, and connection issues. Kaspersky flags Pieces OS as a virus. The Visual Studio extension interferes with diagnostic tools. Connection errors arise with invalid port configurations.  Troubleshooting includes antivirus exclusions, disabling extensions, and verifying port settings.

**Related Issues:**
- [#663](https://github.com/pieces-app/support/issues/663): Kaspersky Internet Security flags Pieces OS as a virus
- [#697](https://github.com/pieces-app/support/issues/697): Visual Studio 2022 extension interfering with Diagnostic tool output
- [#672](https://github.com/pieces-app/support/issues/672): Invalid Port (at character 18) http://127.0.0.1:null/connect


## Recommendations
- Prioritize resolving login issues on Linux (HTTP 500 errors) impacting Pieces OS and PFD.
- Investigate and address crashes related to `native_extensions_plugin.dll` on Windows.
- Troubleshoot LLM download issues on Linux (stuck on initializing) and ensure compatibility with Pieces OS 8.0.1 and later.
- Address Asana handshake failures and ensure proper integration with Pieces OS.
- Investigate and resolve the upside-down GUI issue affecting Pieces for Developers on Ubuntu 24.04.
- Add support for .vue files in Pieces for Developers.
- Resolve the "Invalid Port" connection error in the Pieces desktop app.
- Address Kaspersky Internet Security flagging Pieces OS as a virus.
- Fix the conflict between the Pieces Visual Studio 2022 extension and the Diagnostic tools pane.
- Improve communication with users experiencing issues and provide clear troubleshooting steps or workarounds. Provide updates on timelines and progress of fixes for reported bugs and issues

## Daily Reports
Here are the daily reports for this week:

- [report_131607](daily/2025-05-06/report_131607.md)
- [report_050749](daily/2025-05-06/report_050749.md)
- [report_210652](daily/2025-05-06/report_210652.md)
- [report_131508](daily/2025-05-08/report_131508.md)
- [report_210653](daily/2025-05-08/report_210653.md)
- [report_210629](daily/2025-05-09/report_210629.md)
- [report_131411](daily/2025-05-09/report_131411.md)
- [report_131059](daily/2025-05-10/report_131059.md)
- [report_050712](daily/2025-05-10/report_050712.md)
- [report_210605](daily/2025-05-10/report_210605.md)
