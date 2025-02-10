# Support Ticket Report
- Generated: 2025-02-10 21:08:56
- Period: 2025-02-10 to 2025-02-10

## Summary
- **Total Tickets:** 12
- **Resolved:** 2
- **Open:** 10

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#621](https://github.com/pieces-app/support/issues/621) | Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip | 8.20 |
| [#620](https://github.com/pieces-app/support/issues/620) | Pieces os doesn't launch at all for past week. Can't use pieces at all | 6.94 |
| [#622](https://github.com/pieces-app/support/issues/622) | Visual Studio Extension: Home and End keys should move the text cursor to the beginning and end of the input text box | 5.68 |
| [#618](https://github.com/pieces-app/support/issues/618) | Pieces app goes unresponsive on opening and every 5sec. Can't use it at all in any way | 5.25 |
| [#619](https://github.com/pieces-app/support/issues/619) | Facing error on Ubuntu while opening Pieces "DatabaseException" | 4.50 |

## Common Issues
### 1. Pieces OS Installation and Launch Issues
Users reported various issues with Pieces OS installation, launching, and model downloads, particularly on Windows and MacOS. Problems included installation failures, application crashes, and inability to download models. Solutions involved upgrading Pieces OS, reinstalling with correct builds (Apple Silicon vs Intel), killing conflicting processes, and providing support logs for further analysis.

**Related Issues:**
- [#608](https://github.com/pieces-app/support/issues/608): Models Download Fail
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip

### 2. PiecesOS launch failure on Apple Silicon Macs
Users on Apple Silicon Macs (M1, M2, etc.) reported PiecesOS failing to launch after updating to version 11.1.0 or later. The issue stemmed from accidentally installing the Intel build instead of the Apple Silicon build. The solution involved uninstalling the incorrect build and reinstalling using the correct build for Apple Silicon Macs from the official website.

**Related Issues:**
- [#615](https://github.com/pieces-app/support/issues/615): Unable to Boot PiecesOS on Macos(Arm architecture) After updating to 11.1.0
- [#621](https://github.com/pieces-app/support/issues/621): Cannot launch pieces-for-developers after new installation on MacOS Sequoia 15.2 M1 chip
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all

### 3. Pieces App Launching and Freezing Issues
Multiple users report Pieces app freezing or failing to launch on Linux and Windows. Issues involve unresponsiveness, database errors, and boot-up failures. Proposed solutions include disabling on-screen keyboards, reinstalling, and Pieces team hotfixes. Support actively investigates and assists with troubleshooting.

**Related Issues:**
- [#618](https://github.com/pieces-app/support/issues/618): Pieces app goes unresponsive on opening and every 5sec. Can't use it at all in any way
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#619](https://github.com/pieces-app/support/issues/619): Facing error on Ubuntu while opening Pieces "DatabaseException"

### 4. PiecesOS/Desktop Application Launching Issues
Users report inability to launch PiecesOS or the desktop application. Problems include errors related to PiecesWebSocketCreator, failure to boot up, and issues accessing localhost. Proposed solutions involve checking installation, providing logs, and live troubleshooting with support.

**Related Issues:**
- [#609](https://github.com/pieces-app/support/issues/609): Unable to open Pieces Copilot Service
- [#620](https://github.com/pieces-app/support/issues/620): Pieces os doesn't launch at all for past week. Can't use pieces at all
- [#617](https://github.com/pieces-app/support/issues/617): i got this error when opening localhost

### 5. Visual Studio Extension: Unexpected Hotkey Behavior
Users experience unexpected behavior with Home/End keys in the Pieces Visual Studio Extension. Instead of navigating the text cursor, these keys switch between docked tabs. This issue appears related to WebView2 hotkey functionality within WPF TabControl containers. A temporary workaround involves using the Pieces Copilot as a floating window instead of docking or tabbing it.

**Related Issues:**
- [#622](https://github.com/pieces-app/support/issues/622): Visual Studio Extension: Home and End keys should move the text cursor to the beginning and end of the input text box
- [#606](https://github.com/pieces-app/support/issues/606): LTM cannot see code inside a sandbox in the browser
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing


## Recommendations
- **Prioritize resolution of Pieces OS launch failures:** The most frequent and active tickets relate to Pieces OS failing to launch, particularly on Apple Silicon Macs and Windows. Focus on identifying the root causes and implementing fixes to improve user experience.
- **Address Pieces App freezing issues:** Investigate and address the reports of the Pieces app freezing on Linux and Windows, specifically focusing on database errors and boot-up failures. This will improve the app's stability and usability.
- **Improve Visual Studio Extension compatibility:** Investigate the unexpected hotkey behavior in the Visual Studio Extension and find a solution that ensures consistent functionality across different IDE setups. This will enhance the extension's usability for developers.
- **Provide clear guidance on Apple Silicon vs. Intel builds:**  Given the recurring issue of users installing the incorrect build for their Mac architecture, prominently highlight the difference between Apple Silicon and Intel builds during the installation process. Consider adding in-app checks or prompts to prevent accidental mismatches.
- **Enhance communication and documentation:** Proactively communicate known issues and workarounds to users through release notes, FAQs, and in-app notifications. Ensure that documentation clearly outlines troubleshooting steps for common problems, including installation and launch issues.
- **Gather more detailed diagnostics:** Encourage users to provide detailed logs and system information when reporting issues to aid in faster diagnosis and resolution. This can be facilitated through in-app bug reporting tools or clear instructions on how to access and share relevant logs.
- **Consider automated triage and routing:** Implement a more robust system for automatically triaging incoming tickets and routing them to the appropriate support team members based on keywords, categories, and issue descriptions. This can help streamline the support process and reduce response times.

## Daily Reports
Here are the daily reports for this week:

- [report_210609](daily/2025-02-10/report_210609.md)
- [report_131019](daily/2025-02-10/report_131019.md)
