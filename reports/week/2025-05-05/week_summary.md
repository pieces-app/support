# Support Ticket Report
- Generated: 2025-05-11 05:08:29
- Period: 2025-05-05 to 2025-05-11

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
| [#672](https://github.com/pieces-app/support/issues/672) | Invalid Port (at character 18) http://127.0.0.1:null/connect | 4.29 |

## Common Issues
### 1. Pieces OS and Desktop App Crashes and Errors
Multiple users reported crashes and errors across Pieces OS and Desktop app. Issues include Asana handshake failures, login failures with HTTP 500 errors on `/os/sign_in`, and crashes related to `native_extensions_plugin.dll`.  Troubleshooting steps like reinstallation, antivirus/firewall checks, and driver updates have been attempted. Further investigation into logs and plugin functionality is needed.

**Related Issues:**
- [#702](https://github.com/pieces-app/support/issues/702): I'm unable to do Handshake with asana
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#693](https://github.com/pieces-app/support/issues/693): Crash due to native_extensions_plugin.dll

### 2. Pieces OS/PFD Issues on Linux
Users on Ubuntu are experiencing various issues with Pieces OS and Pieces for Developers. These include an upside-down GUI, login failures with HTTP 500 errors, and local LLM downloads getting stuck on initializing.  Check OS compatibility, reinstall/update Pieces, examine OS and Pieces logs for errors, and ensure sufficient system resources for LLMs.  If issues persist, contact Pieces support.

**Related Issues:**
- [#705](https://github.com/pieces-app/support/issues/705): Pieces for developers GUI is upside down on Ubuntu 24.04
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#113](https://github.com/pieces-app/support/issues/113): Download of local LLM's initializes, but never proceeds 

### 3. Pieces OS crashes or freezes during login or LLM download
Users experience crashes during login or when downloading LLMs. Login attempts result in HTTP 500 errors, infinite spinners, or authentication error pages. LLM downloads get stuck on initializing. Issues appear across different OS versions (8.0.1, 11.3.3) and platforms (Linux, Windows).  Potential solutions include checking logs, reinstalling the app, disabling antivirus/firewall, updating graphics drivers, or seeking support for plugin issues (native_extensions_plugin.dll).

**Related Issues:**
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#113](https://github.com/pieces-app/support/issues/113): Download of local LLM's initializes, but never proceeds 
- [#693](https://github.com/pieces-app/support/issues/693): Crash due to native_extensions_plugin.dll

### 4. Pieces Desktop App and OS Issues
Users are experiencing various issues with the Pieces desktop app and OS, including connection problems ("Invalid Port"), file type restrictions (.vue files not supported), and local LLM download failures.  Troubleshooting steps include checking antivirus software, restarting/reinstalling the app, and verifying internet connectivity.  The issue with .vue files appears to be a known limitation.

**Related Issues:**
- [#672](https://github.com/pieces-app/support/issues/672): Invalid Port (at character 18) http://127.0.0.1:null/connect
- [#706](https://github.com/pieces-app/support/issues/706): Pieces for Developers doesn't support .vue files
- [#113](https://github.com/pieces-app/support/issues/113): Download of local LLM's initializes, but never proceeds 

### 5. Pieces OS conflicts with other software and antivirus
Kaspersky flags Pieces OS as a virus. The Pieces VS extension interferes with the diagnostic tool output.  A "Invalid Port" error occurs during initialization, possibly due to antivirus software or firewall conflicts.  Check antivirus settings and add Pieces OS to exceptions. Ensure Pieces OS and other software are compatible.

**Related Issues:**
- [#663](https://github.com/pieces-app/support/issues/663): Kaspersky Internet Security flags Pieces OS as a virus
- [#697](https://github.com/pieces-app/support/issues/697): Visual Studio 2022 extension interfering with Diagnostic tool output
- [#672](https://github.com/pieces-app/support/issues/672): Invalid Port (at character 18) http://127.0.0.1:null/connect


## Recommendations
- Prioritize resolving login issues impacting Linux and Windows users (HTTP 500 errors, infinite spinners). Investigate logs for '/os/sign_in' errors and authentication failures.
- Address Pieces OS crashes on Windows related to 'native_extensions_plugin.dll'. Investigate the stack trace and determine if the plugin can be updated or temporarily disabled.
- Investigate and resolve the issue preventing local LLM downloads on Linux (stuck on initializing). Check for conflicts with system resources or network connectivity.
- Improve Pieces OS compatibility with Ubuntu 24.04 to fix the upside-down GUI issue. Test different display servers (Xorg, Wayland) and graphics drivers.
- Address Kaspersky's flagging of Pieces OS as a virus. Contact Kaspersky to resolve the false positive and update documentation with antivirus exclusion steps.
- Investigate the conflict between the Pieces VS Code extension and Visual Studio's diagnostic tool output. Ensure compatibility and fix any interference.
- Review and update documentation regarding supported file types in Pieces for Developers. Address the lack of support for .vue files or provide a workaround.
- Investigate Asana handshake failures reported by users. Check integration stability and provide troubleshooting steps in documentation.
- Monitor and address the "Invalid Port" error during Pieces initialization. Determine if it's related to antivirus/firewall conflicts or internal port management issues.
- Review and improve error messaging for login and LLM download issues to provide more specific guidance to users during troubleshooting.
- Consider adding more robust logging to Pieces OS and the desktop app to capture more detailed information during crashes and errors.
- Proactively monitor system resource usage during LLM downloads to identify potential bottlenecks and improve performance on resource-constrained machines.
- Implement automated tests to cover login flows, LLM downloads, and integration with third-party services like Asana to catch regressions early.
- Collect user feedback on Pieces OS and desktop app stability to identify recurring issues and prioritize fixes.
- Provide a clear channel for users to report bugs and issues, such as a dedicated support email or online forum.
- Regularly update Pieces OS and desktop app to address reported issues and improve overall stability and performance.
- Develop a knowledge base or FAQ section to address common user questions and issues, reducing support ticket volume.
- Train support staff on common issues and troubleshooting steps to improve response times and resolution rates.
- Prioritize bug fixes and feature requests based on user impact and frequency of reported issues.
- Track support ticket metrics, such as resolution time and customer satisfaction, to measure support effectiveness and identify areas for improvement.
- Implement a system for escalating complex issues to the development team for faster resolution.
- Consider offering different support tiers based on user needs, such as priority support for paid users.
- Regularly communicate with users about known issues, planned maintenance, and upcoming releases to manage expectations and reduce support inquiries.
- Encourage users to check for existing issues on GitHub or other support channels before submitting new tickets to avoid duplicates.
- Automate support tasks, such as ticket routing and initial responses, to improve efficiency.
- Provide users with self-service resources, such as tutorials and documentation, to empower them to resolve issues independently.
- Gather user feedback on the support experience to identify areas for improvement and enhance customer satisfaction.
- Foster a strong community forum or online platform where users can help each other and share solutions to common problems.
- Regularly review and update support processes and documentation to ensure they are aligned with best practices and user needs.
- Invest in support tools and technologies to streamline workflows and improve efficiency.
- Analyze support data to identify trends and patterns, which can inform product development and improve overall user experience.
- Continuously evaluate and improve support operations based on user feedback and performance metrics to ensure high-quality support for all users.

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
