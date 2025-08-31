# Support Ticket Report
- Generated: 2025-08-31 05:09:33
- Period: 2025-08-25 to 2025-08-31

## Summary
- **Total Tickets:** 22
- **Resolved:** 1
- **Open:** 21

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#843](https://github.com/pieces-app/support/issues/843) | Pieces Side Bar issues | 9.50 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 6.61 |
| [#842](https://github.com/pieces-app/support/issues/842) | VScode extension continuously requesting installation, never installs unable to load extension | 6.17 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.71 |
| [#769](https://github.com/pieces-app/support/issues/769) | An error occurred in the authentication flow. | 5.65 |

## Common Issues
### 1. Pieces OS and Desktop App Issues
Users are experiencing problems with backup restoration, dependency installation, and sidebar functionality in the Pieces OS desktop and web applications. Backup restoration fails midway, the "Ensure core dependencies" step gets stuck, and the sidebar has display issues.  Additionally, Pro account features are not accessible despite being logged in.  Further investigation is needed to identify the root causes and solutions.

**Related Issues:**
- [#837](https://github.com/pieces-app/support/issues/837): backup restoration fails
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues

### 2. Pieces connectivity and login issues across platforms
Users are experiencing difficulty connecting Pieces extensions and plugins (VS Code, Chrome, Edge) to the Pieces OS.  Issues include continuous installation requests for the VS Code extension, inability to log in, and failure to connect even with VPN configurations.  Additionally, some users report Pro features not activating despite being logged in.  Troubleshooting steps include reinstalling dependencies, checking VPN settings, and verifying login status.

**Related Issues:**
- [#842](https://github.com/pieces-app/support/issues/842): VScode extension continuously requesting installation, never installs unable to load extension
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues

### 3. Pieces Desktop Application Bugs
Users report issues with the Pieces desktop application, including unintended selection behavior (potentially related to stuck shift/mouse click), inability to collapse code blocks, and sidebar issues such as error logs not saving and pro settings not applying despite being logged in.  These issues span different Pieces OS versions (12.2.1, 12.2.2) and Desktop versions (4.3.1, 4.3.4).

**Related Issues:**
- [#803](https://github.com/pieces-app/support/issues/803): it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues

### 4. Pieces Desktop App Display Issues
Users report difficulties viewing large markdown responses in the Pieces Copilot on the Windows desktop application.  This includes issues with scrolling and collapsing code blocks.  The reported Pieces OS versions range from 12.2.1 to 12.2.2.  Users have provided screenshots illustrating the problem.

**Related Issues:**
- [#846](https://github.com/pieces-app/support/issues/846): Showing very big markdown in copilot
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues

### 5. Pieces OS and extension connection issues
Users are reporting difficulties connecting Pieces extensions (Obsidian, Chrome, Edge) to Pieces OS. Problems include Obsidian extension not detecting the Pieces port, browser extensions failing to connect even with VPN configurations, and sidebar login/pro features not working.  Check Pieces OS version, port settings (default changed to 39300), firewall/VPN settings, and ensure Pieces OS and extensions are on the same network and logged into the same account.

**Related Issues:**
- [#841](https://github.com/pieces-app/support/issues/841): Pieces extension for Obsidian using port 1000 but Pieces OS now listening port 39300
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#843](https://github.com/pieces-app/support/issues/843): Pieces Side Bar issues


## Recommendations
- Prioritize resolving sidebar issues across platforms (Desktop, Web, Obsidian) as they impact core functionality and Pro features.
- Investigate and address Pieces OS and Desktop application connectivity problems, including backup restoration failures, dependency installation issues, and login difficulties.
- Improve the Pieces desktop application experience by fixing unintended selection behavior, code block collapsing, and display issues with large markdown responses.
- Ensure consistent communication regarding default port changes (e.g., from 1000 to 39300) to avoid confusion with extensions.
- Address issues with Pro account features not being accessible despite users being logged in.

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
