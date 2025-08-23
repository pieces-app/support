# Support Ticket Report
- Generated: 2025-08-23 13:12:47
- Period: 2025-08-18 to 2025-08-23

## Summary
- **Total Tickets:** 12
- **Resolved:** 2
- **Open:** 10

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 8.36 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.54 |
| [#839](https://github.com/pieces-app/support/issues/839) | Cannot collapse all code block in Pieces Desktop | 5.68 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 5.40 |
| [#838](https://github.com/pieces-app/support/issues/838) | All files greyed out in the file picker | 4.74 |

## Common Issues
### 1. Pieces for Developers startup crashes or dependency issues
Users report Pieces for Developers crashing on startup on Ubuntu 24.04 LTS, often with an XCB error.  A core dump is generated. Other issues include failure to collapse code blocks on Windows and "Ensure core dependencies" step failing on Linux.  Suggested solutions include checking system dependencies, reinstalling the application, and verifying Pieces OS version compatibility.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 2. Users unable to access Pro features despite subscription
Multiple Pro users report being unable to access features like specific LLMs or activity summaries, receiving messages prompting them to upgrade. Issues span different operating systems (Windows, macOS) and involve various Pieces components (desktop app, VS Code plugin, Sublime plugin).  Users confirm Pro subscriptions and attempt troubleshooting steps like restarts and configuration checks. Some instances suggest incorrect LLM version detection or outdated Pieces OS installations.

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 3. Pieces OS MCP Integration Failures and LLM Version Discrepancies
Users report Pieces OS MCP tools failing to integrate with Claude Code and other IDEs.  The `ask_pieces_ltm` tool frequently returns "Failed to extract context" despite functional LTM.  Additionally, users experience LLM version discrepancies between Pieces for Developers, VS Code plugin, and Sublime plugin, even after upgrading to Pieces Pro and selecting a newer LLM version.  Suggested solutions include verifying server connections, checking configuration files, and ensuring proper authentication and permissions for MCP server processes.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM

### 4. MacOS Desktop App Issues
Multiple users on MacOS are experiencing issues with the Pieces desktop app, including pixelated tray icons (v12.2.1), failed subscription upgrades resulting in blank checkout pages (v12.1.1), and all files appearing greyed out in the file picker (v12.2.1) despite having necessary permissions.  Reinstallation did not resolve the file picker issue.

**Related Issues:**
- [#840](https://github.com/pieces-app/support/issues/840): Mac icon is pixelated
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription
- [#838](https://github.com/pieces-app/support/issues/838): All files greyed out in the file picker

### 5. Pieces Desktop App and OS Issues
Users are experiencing issues with the Pieces Desktop App and OS across different operating systems (Windows, Linux). Problems include backup restoration failures, issues with the "Ensure core dependencies" step during installation, and inability to collapse code blocks.  Further investigation is needed to determine the root cause and potential solutions across these seemingly disparate issues.

**Related Issues:**
- [#837](https://github.com/pieces-app/support/issues/837): backup restoration fails
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop


## Recommendations
- Prioritize resolution of the 'pieces-for-developers crashes at startup on ubuntu 24.04 LTS' issue (ID 835) due to its high activity level and impact on Ubuntu users.
- Investigate and address the MCP server issues, particularly the SSE connection hangs (ID 810) and the consistent failure of the `ask_pieces_ltm` tool (ID 747), as these impact core functionality and integration with other tools.
- Address the recurring issue of Pro users being unable to access Pro features (ID 818, 811) to ensure paying customers have a smooth experience.
- Focus on resolving MacOS-specific issues, including pixelated tray icons (ID 840), subscription upgrade failures (ID 808), and file picker issues (ID 838), to improve the MacOS user experience.
- Investigate and fix the 'Cannot collapse all code block in Pieces Desktop' issue (ID 839) affecting Windows users, as it hinders code organization and readability.
- Develop more robust error handling and messaging for backup restoration failures (ID 837) and the 'Ensure core dependencies' step (ID 809) to provide clearer guidance to users during installation and troubleshooting.

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
