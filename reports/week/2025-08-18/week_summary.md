# Support Ticket Report
- Generated: 2025-08-23 05:08:21
- Period: 2025-08-18 to 2025-08-23

## Summary
- **Total Tickets:** 12
- **Resolved:** 2
- **Open:** 10

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 8.83 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.63 |
| [#839](https://github.com/pieces-app/support/issues/839) | Cannot collapse all code block in Pieces Desktop | 5.68 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.50 |
| [#838](https://github.com/pieces-app/support/issues/838) | All files greyed out in the file picker | 4.74 |

## Common Issues
### 1. Pieces for Developers startup crashes or dependency issues
Users report Pieces for Developers crashing on startup on Ubuntu 24.04 LTS, often with an XCB error.  A core dump is generated. Other users experience "Ensure core dependencies" step failing.  One user reports an inability to collapse code blocks on Windows.  Suggested solutions include checking system dependencies, reinstalling the application, and verifying Pieces OS version compatibility.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Users unable to upgrade or access Pro LLM features
Multiple users report issues with upgrading or accessing Pieces Pro LLM features, such as Sonnet 4 and activity summaries. Problems include incorrect LLM versions displayed, Pro features unavailable despite subscription, and errors related to Pieces OS version compatibility.  Troubleshooting steps like restarting, re-logging, and VPN adjustments haven't resolved the issues. Further investigation into LLM integration and Pro access mechanisms is needed.

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 3. Pieces MCP Integration Issues and LLM Upgrade Failures
Users report problems with Pieces MCP tools, primarily `ask_pieces_ltm` failing to extract context despite functional LTM.  SSE connections hang, preventing tool registration in Claude Code.  Additionally, Pro users experience difficulty upgrading their LLMs to the latest version, with IDE plugins reporting older versions despite account upgrades. Troubleshooting steps include verifying server connections, restarting services, and checking configurations, but issues persist across various platforms (macOS, Windows 11).

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM

### 4. MacOS Desktop App Issues
Users are experiencing issues with the MacOS desktop application, including pixelated tray icons, subscription upgrade failures leading to blank checkout pages, and files appearing greyed out in the file picker despite Pieces having necessary permissions.  These issues persist across different MacOS versions (12.1.1 and 12.2.1) and may require investigation into rendering processes, payment gateway integration, and file system access handling within the app.

**Related Issues:**
- [#840](https://github.com/pieces-app/support/issues/840): Mac icon is pixelated
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription
- [#838](https://github.com/pieces-app/support/issues/838): All files greyed out in the file picker

### 5. Pieces Desktop App and OS Issues
Users are experiencing issues with the Pieces Desktop application and OS across different operating systems (Windows and Linux). Problems include backup restoration failures, issues with the "Ensure core dependencies" step during installation, and inability to collapse code blocks.  Further investigation is needed to identify the root causes and solutions.

**Related Issues:**
- [#837](https://github.com/pieces-app/support/issues/837): backup restoration fails
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop


## Recommendations
- Prioritize resolution of the 'pieces-for-developers crashes at startup on ubuntu 24.04 LTS' issue (835) due to its high activity level and impact on Ubuntu users.
- Investigate and address the MCP integration issues, particularly the SSE connection hangs (810) and the `ask_pieces_ltm` tool failures (747), to ensure proper functionality of the Model Context Protocol.
- Address the LLM upgrade failures for Pro users (818) to ensure they can access the latest features they have subscribed to.
- Resolve the MacOS desktop application issues, including pixelated tray icons (840), subscription upgrade failures (808), and file picker access problems (838), to improve user experience on MacOS.
- Investigate and fix the reported issues with backup restoration (837), 'Ensure core dependencies' step (809), and code block collapsing (839) in the Pieces Desktop application across different operating systems.
- Improve communication with users regarding Pieces OS version compatibility issues and provide clear guidance on upgrading or troubleshooting related problems.

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
- [report_210630](daily/2025-08-22/report_210630.md)
