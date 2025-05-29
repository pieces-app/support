# Support Ticket Report
- Generated: 2025-05-29 21:10:58
- Period: 2025-05-26 to 2025-05-29

## Summary
- **Total Tickets:** 10
- **Resolved:** 2
- **Open:** 8

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#723](https://github.com/pieces-app/support/issues/723) | Discord link provided is invalid on the website | 10.67 |
| [#710](https://github.com/pieces-app/support/issues/710) | Long Term Memory 2 stills slow down my macbook pro with intel chipset. | 7.34 |
| [#719](https://github.com/pieces-app/support/issues/719) | Pieces Desktop freezes after inactivity | 6.17 |
| [#718](https://github.com/pieces-app/support/issues/718) | Pieces crash when on Chrome tab with a lot of content | 5.72 |
| [#724](https://github.com/pieces-app/support/issues/724) | Discord link provided is invalid in Pieces OS | 4.83 |

## Common Issues
### 1. Invalid Discord Invite Links Across Pieces Platforms
Multiple reports indicate broken Discord invite links on the Pieces website, documentation, and Pieces OS.  The links provided are either expired or incorrect. A permanent, non-expiring link should be created and updated across all platforms to resolve this.

**Related Issues:**
- [#723](https://github.com/pieces-app/support/issues/723): Discord link provided is invalid on the website
- [#724](https://github.com/pieces-app/support/issues/724): Discord link provided is invalid in Pieces OS
- [#718](https://github.com/pieces-app/support/issues/718): Pieces crash when on Chrome tab with a lot of content

### 2. Pieces Desktop Freezes and High Resource Usage
Users report Pieces Desktop freezing after inactivity, especially after using chat functionality.  High CPU and GPU usage are also observed, particularly on older hardware. Issues occur across Windows and macOS, potentially related to Long Term Memory and large content in browser tabs.  Restarting Pieces Desktop is a temporary workaround. Further investigation into resource management and memory leaks is needed.

**Related Issues:**
- [#719](https://github.com/pieces-app/support/issues/719): Pieces Desktop freezes after inactivity
- [#718](https://github.com/pieces-app/support/issues/718): Pieces crash when on Chrome tab with a lot of content
- [#710](https://github.com/pieces-app/support/issues/710): Long Term Memory 2 stills slow down my macbook pro with intel chipset.

### 3. Pieces Desktop App Performance Issues on macOS and Windows
Users report performance issues with the Pieces Desktop app on macOS and Windows. On macOS, the app periodically jumps to the main monitor and grabs focus, along with high CPU/GPU usage and system slowdown. On Windows, the app freezes after a period of inactivity, especially after interacting with a chat. Reinstalling the app and checking for extra processes may resolve focus issues.  Further investigation is needed for freezing and performance issues, potentially related to LTM and specific hardware configurations.

**Related Issues:**
- [#727](https://github.com/pieces-app/support/issues/727): MacOS Desktop periodically jumps to main monitor & grabs focus off of current window
- [#719](https://github.com/pieces-app/support/issues/719): Pieces Desktop freezes after inactivity
- [#710](https://github.com/pieces-app/support/issues/710): Long Term Memory 2 stills slow down my macbook pro with intel chipset.

### 4. Pieces Desktop and VS Code extension freezing/loading issues
Users report freezing or infinite loading in Pieces Desktop and VS Code extension.  Desktop freezes after inactivity, especially after chat interaction. VS Code extension's copy button also exhibits infinite loading. Issues occur across different Pieces OS versions (11.3.6, 11.4.1, 11.42) and Windows OS.  Suggested solutions include restarting Pieces Desktop, checking LTM settings, and ensuring stable internet connection.

**Related Issues:**
- [#729](https://github.com/pieces-app/support/issues/729): No response to chat. It just keeps loading .
- [#719](https://github.com/pieces-app/support/issues/719): Pieces Desktop freezes after inactivity
- [#712](https://github.com/pieces-app/support/issues/712): copy button in pieces vs code extension keeps loading indefinitely.

### 5. Pieces OS and VS Code Integration Issues on Windows
Users are experiencing difficulties connecting Pieces OS with VS Code on Windows, especially within WSL.  Problems include empty settings windows in VS Code, inability to install Pieces extensions,  indefinite loading of the copy button, and invalid Discord invite links.  Suggested solutions include verifying network connectivity between WSL and Pieces OS, checking Pieces OS logs for errors, and ensuring the Pieces VS Code extension is properly installed and configured.

**Related Issues:**
- [#730](https://github.com/pieces-app/support/issues/730): WSL cannot connect to Pieces OS in VS Code
- [#712](https://github.com/pieces-app/support/issues/712): copy button in pieces vs code extension keeps loading indefinitely.
- [#724](https://github.com/pieces-app/support/issues/724): Discord link provided is invalid in Pieces OS


## Recommendations
- Prioritize resolving the Discord invite link issue across all platforms (website, documentation, Pieces OS).  This is a recurring problem affecting multiple users.
- Investigate and address the performance issues (freezing, high resource usage) reported for Pieces Desktop on both Windows and macOS. Focus on resource management and potential memory leaks, especially after chat usage and with LTM enabled.
- Improve VS Code extension stability and resolve the infinite loading issue with the copy button.  Also, investigate WSL connectivity problems on Windows.
- Address the reported Pieces Desktop crashes when Chrome tabs contain large amounts of content. This may indicate memory or resource management issues within the Pieces Desktop application itself.
- Review and update the support documentation with troubleshooting steps for common issues like WSL connectivity, VS Code integration, and performance problems.  This will empower users to self-resolve and reduce support ticket volume.
- Consider adding more robust error logging and reporting within Pieces Desktop and its integrations to facilitate faster debugging and resolution of issues.
- Monitor user feedback closely for emerging trends and prioritize addressing the most frequent and impactful issues to improve overall user experience and satisfaction.
- Proactively communicate known issues and planned fixes to the user community through a dedicated channel (e.g., status page, forum) to manage expectations and reduce support inquiries.
- Analyze the relationship between Pieces OS versions and reported issues to identify potential regressions and prioritize fixes for affected versions.
- Implement automated testing to catch common issues like broken links and basic functionality before they reach users, reducing the need for reactive support interventions. 

## Daily Reports
Here are the daily reports for this week:

- [report_210655](daily/2025-05-27/report_210655.md)
- [report_050803](daily/2025-05-27/report_050803.md)
- [report_131621](daily/2025-05-27/report_131621.md)
- [report_131522](daily/2025-05-29/report_131522.md)
- [report_050751](daily/2025-05-29/report_050751.md)
- [report_210743](daily/2025-05-29/report_210743.md)
