# Support Ticket Report
- Generated: 2025-08-31 21:08:39
- Period: 2025-08-25 to 2025-08-31

## Summary
- **Total Tickets:** 22
- **Resolved:** 1
- **Open:** 21

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#843](https://github.com/pieces-app/support/issues/843) | Pieces Side Bar issues | 8.99 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 6.61 |
| [#842](https://github.com/pieces-app/support/issues/842) | VScode extension continuously requesting installation, never installs unable to load extension | 5.84 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.64 |
| [#769](https://github.com/pieces-app/support/issues/769) | An error occurred in the authentication flow. | 5.63 |

## Common Issues
### 1. Pieces connectivity and installation issues across platforms
Users are experiencing difficulty installing and connecting Pieces extensions and applications, primarily on Windows. Issues include the VS Code extension failing to install or load, browser extensions (Chrome, Edge) unable to connect to Pieces OS, and the Pieces sidebar not saving error logs or reflecting Pro account upgrades.  Connectivity problems may be related to VPN usage. Further investigation into installation processes and network configurations is needed.

**Related Issues:**
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues

### 2. Pieces OS and Desktop App Issues
Users are experiencing problems with backup restoration, dependency installation, and sidebar functionality. Backup restoration fails to complete, getting stuck in a loop.  Dependency installation encounters a "Retry Step" error.  Sidebar issues include logging errors and Pro account features not working despite being logged in.  Check logs for specific error messages and ensure Pieces OS and Desktop App versions are up-to-date.

**Related Issues:**
- [#837](https://github.com/pieces-app/support/issues/837): backup restoration fails
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues

### 3. Pieces Desktop Application Bugs and UI Issues
Users report issues with the Pieces desktop application on Windows, including unintended selection behavior (potentially related to shift/mouse click lock), inability to collapse code blocks, and sidebar issues such as error logs not saving and pro settings not applying despite being logged in.  The reported Pieces OS versions range from 12.2.1 to 12.2.2 and Desktop app version 4.3.1 and 4.3.4.  Further investigation is needed to determine the root causes and solutions.

**Related Issues:**
- [#803](https://github.com/pieces-app/support/issues/803): it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues

### 4. Pieces Desktop App Issues
Users report issues with the Pieces desktop app, primarily on Windows, including large markdown blocks in Copilot responses making scrolling difficult, inability to collapse code blocks, and problems with the Pieces sidebar.  Versions 12.2.1 and 12.2.2 are mentioned.  Additional issues include problems saving error logs and Pro account features not working despite being logged in.

**Related Issues:**
- [#846](https://github.com/pieces-app/support/issues/846): Showing very big markdown in copilot
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues

### 5. Pieces OS connection issues across multiple platforms
Users are experiencing difficulty connecting Pieces extensions and plugins (Obsidian, Chrome, Edge) to Pieces OS.  Problems include undetected ports, failed logins, and pro features not activating. This affects Windows users, some using VPNs.  Check Pieces OS version, port settings (default changed to 39300), ensure VPN/firewall isn't blocking connections, and verify login credentials.

**Related Issues:**
- [#841](https://github.com/pieces-app/support/issues/841): Pieces extension for Obsidian using port 1000 but Pieces OS now listening port 39300
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues


## Recommendations
- Prioritize resolving sidebar issues: Address the recurring problems with the Pieces sidebar, including error logging, Pro account features, and general functionality. This will improve user experience and reduce support tickets related to these issues.
- Investigate and fix connectivity problems: Focus on resolving the installation and connection issues across different platforms (Windows, macOS, browser extensions, VS Code, Obsidian). This includes checking VPN/firewall configurations and ensuring consistent communication between Pieces OS and its extensions.
- Improve backup/restore functionality: Address the reported backup restoration failures to ensure users can reliably back up and restore their data.
- Address Copilot markdown formatting: Fix the issue with large markdown blocks in Copilot responses to improve readability and user experience.
- Review dependency installation process: Investigate and resolve the "Retry Step" error during dependency installation on Linux and other platforms to ensure smooth installation experience.
- Investigate selection behavior in Desktop App: Look into the unintended selection behavior in the desktop application, possibly related to shift/mouse click lock, to improve usability.
- Ensure code block collapsing works consistently: Fix the issue where code blocks cannot be collapsed in the Pieces Desktop application.
- Verify Pro account upgrade process: Ensure that users who upgrade to Pro accounts have their Pro features activated correctly across all platforms and extensions.
- Check Pieces OS resource usage: Investigate reports of high RAM/CPU usage by Pieces OS to optimize performance and resource management.
- Address authentication issues: Investigate and resolve authentication errors and loops to ensure users can reliably log in and access their data.

## Daily Reports
Here are the daily reports for this week:

- [report_131622](daily/2025-08-26/report_131622.md)
- [report_050751](daily/2025-08-26/report_050751.md)
- [report_210631](daily/2025-08-26/report_210631.md)
- [report_210637](daily/2025-08-27/report_210637.md)
- [report_210641](daily/2025-08-28/report_210641.md)
- [report_131430](daily/2025-08-28/report_131430.md)
- [report_210633](daily/2025-08-29/report_210633.md)
- [report_131307](daily/2025-08-29/report_131307.md)
