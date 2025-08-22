# Support Ticket Report
- Generated: 2025-08-22 13:15:49
- Period: 2025-08-18 to 2025-08-22

## Summary
- **Total Tickets:** 10
- **Resolved:** 2
- **Open:** 8

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 8.33 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.63 |
| [#838](https://github.com/pieces-app/support/issues/838) | All files greyed out in the file picker | 6.50 |
| [#837](https://github.com/pieces-app/support/issues/837) | backup restoration fails | 5.50 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 4.53 |

## Common Issues
### 1. Pieces Desktop App Issues
Users are experiencing various issues with the Pieces desktop app, including files appearing greyed out in the file picker on macOS, "Retry Step" message during the "Ensure core dependencies" step on Linux, and backup restoration failures on Windows.  Further investigation is needed to determine the root cause and potential solutions for each platform-specific issue. Reinstallation did not resolve the file picker issue on macOS.

**Related Issues:**
- [#838](https://github.com/pieces-app/support/issues/838): All files greyed out in the file picker
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#837](https://github.com/pieces-app/support/issues/837): backup restoration fails

### 2. Pieces installation and startup failures across platforms
Users are experiencing issues with Pieces installation and startup on Linux and Windows.  On Linux, the desktop application crashes at startup with XCB errors. On Windows, users are encountering authentication errors during installation, possibly due to security software conflicts.  Further investigation is needed to determine the root cause and provide solutions for each platform.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#834](https://github.com/pieces-app/support/issues/834): Cannot connect to Authentication site during install of Pieces

### 3. Pieces MCP Integration Issues and LLM Upgrade Failures
Users report Pieces MCP tools failing to connect or retrieve LTM data, specifically `ask_pieces_ltm` returning errors despite functional LTM.  LLM upgrades to Sonnet 4 are not reflected in Pieces for Developers or VS Code plugin. Issues persist across macOS and Windows 11, affecting various IDE plugins and the desktop app. Troubleshooting includes verifying server connections, restarting services, and checking configurations, but the root cause remains unclear. Some users experience SSE connection hangs, while others see incorrect LLM versions reported.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM

### 4. Users unable to upgrade to Pieces Pro
macOS users on Pieces OS 12.1.1 are encountering issues upgrading to Pieces Pro.  Clicking "Upgrade" leads to a blank checkout page with zero values, eventually returning an error.  Additionally, users report being prompted to upgrade despite already having a Pro subscription.

**Related Issues:**
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step


## Recommendations
- Prioritize resolving the Pieces Desktop App issues affecting macOS, Linux, and Windows users, focusing on file picker functionality, installation steps, and backup restoration.
- Investigate and address the Pieces installation and startup failures on Linux (XCB errors) and Windows (authentication errors), potentially related to security software conflicts.
- Troubleshoot the MCP integration issues, specifically the SSE connection hangs and LLM upgrade failures reported across macOS and Windows 11, affecting various IDE plugins and the desktop app.
- Address the issues preventing macOS users from upgrading to Pieces Pro, focusing on the blank checkout page and erroneous upgrade prompts for existing Pro subscribers.

## Daily Reports
Here are the daily reports for this week:

- [report_131455](daily/2025-08-19/report_131455.md)
- [report_210655](daily/2025-08-19/report_210655.md)
- [report_131533](daily/2025-08-20/report_131533.md)
- [report_050747](daily/2025-08-20/report_050747.md)
- [report_210652](daily/2025-08-20/report_210652.md)
- [report_210649](daily/2025-08-21/report_210649.md)
- [report_131501](daily/2025-08-21/report_131501.md)
- [report_131419](daily/2025-08-22/report_131419.md)
