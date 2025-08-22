# Support Ticket Report
- Generated: 2025-08-22 05:09:35
- Period: 2025-08-18 to 2025-08-22

## Summary
- **Total Tickets:** 9
- **Resolved:** 2
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 8.19 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.73 |
| [#838](https://github.com/pieces-app/support/issues/838) | All files greyed out in the file picker | 6.50 |
| [#837](https://github.com/pieces-app/support/issues/837) | backup restoration fails | 5.50 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 4.62 |

## Common Issues
### 1. Pieces Desktop App Encounters Various Issues
Users report issues with the Pieces desktop app across different operating systems (macOS, Linux, Windows). Problems include files appearing greyed out in the file picker, failure to "Ensure core dependencies" during setup, and backup restoration failures.  Further investigation is needed to determine root causes and solutions. Logs and screenshots have been provided by some users.

**Related Issues:**
- [#838](https://github.com/pieces-app/support/issues/838): All files greyed out in the file picker
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#837](https://github.com/pieces-app/support/issues/837): backup restoration fails

### 2. Pieces installation and startup failures across platforms
Users are experiencing issues with Pieces installation and startup on Linux and Windows. On Linux, the desktop application crashes at startup with XCB errors, potentially related to missing dependencies or GTK version conflicts. On Windows, installation fails due to an authentication error, possibly caused by network restrictions or security software conflicts.  Suggested solutions include verifying dependencies, checking GTK versions, and reviewing network/firewall settings.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#834](https://github.com/pieces-app/support/issues/834): Cannot connect to Authentication site during install of Pieces

### 3. Pieces OS MCP Integration Failures and LLM Upgrade Issues
Users report Pieces OS MCP tools, specifically `ask_pieces_ltm`, failing with "Failed to extract context" errors despite functional LTM.  Other MCP tools like `create_pieces_memory` work correctly.  Additionally, users experience difficulty upgrading their LLMs to the latest version after upgrading to Pieces Pro, with IDE plugins and desktop apps reporting older LLM versions.  Suggested solutions include verifying MCP server configuration, checking Pieces OS permissions, and ensuring proper LTM initialization for MCP tools.  Further investigation into LLM version synchronization is needed.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM

### 4. Pieces Pro LLM Upgrade and Dependency Issues
Users are experiencing difficulties upgrading or utilizing their Pieces Pro LLM subscriptions. Issues include outdated LLM versions despite upgrades, "Retry Step" errors during dependency checks, and Pro features being unavailable despite active subscriptions.  Suggested solutions include verifying Pro status, checking configuration files, restarting the application or computer, and ensuring network connectivity.

**Related Issues:**
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step


## Recommendations
- Investigate XCB errors and GTK version conflicts on Linux to resolve Pieces desktop app crashes at startup.
- Address authentication errors during Pieces installation on Windows, potentially caused by network restrictions or security software.
- Troubleshoot MCP 'ask_pieces_ltm' tool failures, focusing on data access layer or authentication issues.
- Verify LLM version synchronization after Pieces Pro upgrades, ensuring users have access to the latest LLM.
- Investigate and resolve issues with Pieces desktop app file picker, including greyed-out files.
- Address backup restoration failures in the Pieces desktop app on Windows.
- Ensure Pieces Pro features are accessible to subscribed users and resolve any 'Retry Step' errors during dependency checks.

## Daily Reports
Here are the daily reports for this week:

- [report_131455](daily/2025-08-19/report_131455.md)
- [report_210655](daily/2025-08-19/report_210655.md)
- [report_131533](daily/2025-08-20/report_131533.md)
- [report_050747](daily/2025-08-20/report_050747.md)
- [report_210652](daily/2025-08-20/report_210652.md)
- [report_210649](daily/2025-08-21/report_210649.md)
- [report_131501](daily/2025-08-21/report_131501.md)
