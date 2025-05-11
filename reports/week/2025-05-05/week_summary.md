# Support Ticket Report
- Generated: 2025-05-11 13:12:26
- Period: 2025-05-05 to 2025-05-11

## Summary
- **Total Tickets:** 10
- **Resolved:** 4
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#693](https://github.com/pieces-app/support/issues/693) | Crash due to native_extensions_plugin.dll | 6.74 |
| [#706](https://github.com/pieces-app/support/issues/706) | Pieces for Developers doesn't support .vue files | 6.50 |
| [#705](https://github.com/pieces-app/support/issues/705) | Pieces for developers GUI is upside down on Ubuntu 24.04 | 5.80 |
| [#691](https://github.com/pieces-app/support/issues/691) | OS: login does not work ( /os/sign_in HTTP 500) | 4.57 |
| [#672](https://github.com/pieces-app/support/issues/672) | Invalid Port (at character 18) http://127.0.0.1:null/connect | 4.29 |

## Common Issues
### 1. Pieces OS and Desktop App Crashes and Errors
Multiple users reported crashes and errors across Pieces OS and Desktop App. Issues include Asana handshake failures, login failures with HTTP 500 errors on `/os/sign_in`, and crashes related to `native_extensions_plugin.dll`.  Troubleshooting steps like reinstallation, antivirus/firewall checks, and driver updates have been attempted. Further investigation is needed to identify the root causes and provide solutions.

**Related Issues:**
- [#702](https://github.com/pieces-app/support/issues/702): I'm unable to do Handshake with asana
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#693](https://github.com/pieces-app/support/issues/693): Crash due to native_extensions_plugin.dll

### 2. Pieces OS crashes or freezes during login or LLM download
Users experience crashes during login or when downloading LLMs. Login attempts result in HTTP 500 errors on Linux. LLM downloads freeze at initialization on Linux and 0% on Windows.  Issues potentially related to native_extensions_plugin.dll on Windows and network communication problems on Linux.  Reinstalling, disabling antivirus/firewall, updating graphics drivers, and updating Pieces OS have been attempted with no success so far.

**Related Issues:**
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#113](https://github.com/pieces-app/support/issues/113): Download of local LLM's initializes, but never proceeds 
- [#693](https://github.com/pieces-app/support/issues/693): Crash due to native_extensions_plugin.dll

### 3. Pieces Desktop App and OS Issues
Users are experiencing various issues with the Pieces desktop app and OS, including connection problems ("Invalid Port"), file type restrictions (.vue files not supported), and local LLM download failures.  Troubleshooting steps include checking antivirus software, restarting/reinstalling the app, and verifying internet connectivity.  Further investigation is needed for the LLM download issue on Linux.

**Related Issues:**
- [#672](https://github.com/pieces-app/support/issues/672): Invalid Port (at character 18) http://127.0.0.1:null/connect
- [#706](https://github.com/pieces-app/support/issues/706): Pieces for Developers doesn't support .vue files
- [#113](https://github.com/pieces-app/support/issues/113): Download of local LLM's initializes, but never proceeds 

### 4. Pieces OS/PFD Issues on Linux
Users on Ubuntu are experiencing various issues with Pieces OS and Pieces for Developers (PFD). These include an upside-down GUI, login failures with HTTP 500 errors, and local LLM downloads getting stuck on initializing.  Solutions tried include reinstalling, updating, and trying different login methods (xorg, wayland). Further investigation is needed to identify the root cause and provide a fix.

**Related Issues:**
- [#705](https://github.com/pieces-app/support/issues/705): Pieces for developers GUI is upside down on Ubuntu 24.04
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#113](https://github.com/pieces-app/support/issues/113): Download of local LLM's initializes, but never proceeds 

### 5. Pieces OS conflicts with other software and antivirus
Kaspersky flags Pieces OS as a virus. The Pieces VS extension interferes with the diagnostic tool output.  A "Invalid Port" error occurs during initialization, possibly due to antivirus software.  Check antivirus settings and add Pieces OS to exceptions. Disable the Pieces VS extension as a workaround. Ensure Pieces OS and dependent services are running and accessible.

**Related Issues:**
- [#663](https://github.com/pieces-app/support/issues/663): Kaspersky Internet Security flags Pieces OS as a virus
- [#697](https://github.com/pieces-app/support/issues/697): Visual Studio 2022 extension interfering with Diagnostic tool output
- [#672](https://github.com/pieces-app/support/issues/672): Invalid Port (at character 18) http://127.0.0.1:null/connect


## Recommendations
- Prioritize resolving the 'native_extensions_plugin.dll' crash on Windows as it impacts multiple users and functionalities. Investigate the root cause and provide a fix or temporary workaround.
- Address the login issues on Linux (HTTP 500 errors on '/os/sign_in') as it prevents users from accessing Pieces OS. Check server logs and authentication flow for potential problems.
- Investigate and resolve the local LLM download issues on both Windows and Linux. Check network configurations, download processes, and compatibility with different operating systems.
- Improve support for .vue files in Pieces for Developers to enhance user experience with Vue.js projects.
- Address the 'Invalid Port' error during initialization, possibly related to antivirus software or firewall conflicts. Provide clear instructions to users on configuring their security software or suggest alternative solutions.
- Investigate the upside-down GUI issue on Ubuntu 24.04. Test on different hardware/VM configurations and explore potential display driver or graphics library conflicts.
- Review Kaspersky's flagging of Pieces OS as a virus and work towards resolving this false positive detection to avoid unnecessary user concerns.
- Address the conflict between the Pieces VS Code extension and the diagnostic tool output in Visual Studio 2022. Ensure compatibility with common developer tools.
- Analyze Asana handshake failures and provide troubleshooting steps or solutions to users experiencing this integration issue.
- Monitor and address the remaining issues based on their frequency and impact on users. Gather more data and user feedback to identify recurring problems and prioritize fixes accordingly.
- Consider improving error messages and logging to provide more detailed information for troubleshooting and faster resolution times.
- Document known issues and workarounds in a central knowledge base to empower users with self-service support options and reduce support ticket volume.
- Implement a system for tracking and prioritizing bug fixes and feature requests based on user feedback and support ticket data.
- Proactively communicate known issues and planned fixes to users through regular updates or announcements to manage expectations and improve transparency.
- Collect user feedback on support operations and identify areas for improvement in the support process, communication, and documentation.

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
