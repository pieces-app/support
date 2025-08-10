# Support Ticket Report
- Generated: 2025-08-10 21:08:11
- Period: 2025-08-04 to 2025-08-10

## Summary
- **Total Tickets:** 16
- **Resolved:** 0
- **Open:** 16

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.36 |
| [#825](https://github.com/pieces-app/support/issues/825) | Pieces Pro: checkout is not opening | 4.42 |
| [#815](https://github.com/pieces-app/support/issues/815) | Failed sharing my snippets using a link or GitHub gist. | 4.26 |
| [#813](https://github.com/pieces-app/support/issues/813) | Ensure Core Dependencies | 3.61 |
| [#823](https://github.com/pieces-app/support/issues/823) | Unable to open Pieces Copilot Service | 3.50 |

## Common Issues
### 1. Pieces OS Connectivity Issues Across Multiple Applications
Users are experiencing difficulty connecting various applications (VS Code, Desktop app, Chrome/Edge extensions) to Pieces OS.  Common symptoms include connection hangs, leaks, and inability to register MCP tools.  Suggested solutions include checking Pieces OS and app versions, verifying network configurations (VPN, proxy), monitoring connections, restarting Pieces OS or the affected application, and ensuring correct MCP server configuration in affected applications.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 2. Issues with Copying, Sharing, and Dragging Files in Pieces OS 12.1.1
Users are experiencing problems with copying code blocks (inline vs. inter-line discrepancies), sharing snippets via links or GitHub gists, and dragging files into the conversation context.  Additional issues include file choosing window behavior and file filtering limitations.  Further investigation is needed to identify the root causes and implement appropriate fixes.

**Related Issues:**
- [#821](https://github.com/pieces-app/support/issues/821): Copy python code block = copy message ? what a big mistake !!
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT

### 3. Pieces Desktop and OS: Missing Platform Directory and Connection Leaks
Users report issues with Pieces Desktop and OS on Windows.  OS logs show "MissingPlatformDirectoryException(Unable to get application documents directory)" errors, preventing application startup.  Additionally, Pieces Desktop exhibits a connection leak, creating excessive connections to the OS server.  Suggested workarounds include restarting the machine, monitoring connections, and closing Pieces Desktop. Contact support if issues persist.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#825](https://github.com/pieces-app/support/issues/825): Pieces Pro: checkout is not opening
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak

### 4. Users unable to upgrade to Pieces Pro
Multiple users on Windows and macOS are reporting issues upgrading to Pieces Pro. The checkout process fails, with the upgrade button displaying "Awaiting checkout..." or a blank checkout page with zero values.  This has been ongoing for several weeks for some users.  The Pieces extension for Chrome and Edge also has connectivity issues with Pieces OS, potentially related.

**Related Issues:**
- [#825](https://github.com/pieces-app/support/issues/825): Pieces Pro: checkout is not opening
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription

### 5. LTM performance degrades over time and becomes unusable
Users report that the LTM functionality degrades over time, eventually becoming unresponsive to queries.  This occurs on macOS after several weeks of use. Clearing LTM data through the provided button does not resolve the issue.  Reinstalling the application temporarily restores LTM functionality.  Users experience this issue repeatedly.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service


## Recommendations
- Prioritize resolving the 'MCP Server SSE Connection Hangs' issue (ticket #810) due to its high activity level and impact on Claude Code integration.
- Investigate and address the recurring 'Pieces Pro: checkout is not opening' problem (ticket #825) affecting upgrades and potentially impacting revenue.
- Troubleshoot issues with copying, sharing, and dragging files (tickets #821, #815, #822) to improve core user experience.
- Address the 'MissingPlatformDirectoryException' error on Windows (ticket #813) hindering application startup.
- Develop a comprehensive troubleshooting guide for connectivity issues between Pieces OS, Desktop, and extensions (tickets #819, #816).
- Investigate and fix the LTM performance degradation issue (ticket #805) impacting long-term users.
- Monitor and address the recurring inability to upgrade to Pieces Pro (ticket #808) to ensure smooth subscription upgrades.

## Daily Reports
Here are the daily reports for this week:

- [report_210738](daily/2025-08-05/report_210738.md)
- [report_132038](daily/2025-08-05/report_132038.md)
- [report_132048](daily/2025-08-06/report_132048.md)
- [report_051516](daily/2025-08-06/report_051516.md)
- [report_210726](daily/2025-08-06/report_210726.md)
- [report_132017](daily/2025-08-07/report_132017.md)
- [report_210614](daily/2025-08-07/report_210614.md)
- [report_210654](daily/2025-08-08/report_210654.md)
- [report_131916](daily/2025-08-08/report_131916.md)
- [report_131438](daily/2025-08-09/report_131438.md)
- [report_210629](daily/2025-08-09/report_210629.md)
- [report_131445](daily/2025-08-10/report_131445.md)
- [report_210636](daily/2025-08-10/report_210636.md)
