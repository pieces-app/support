# Support Ticket Report
- Generated: 2025-08-10 13:16:20
- Period: 2025-08-04 to 2025-08-10

## Summary
- **Total Tickets:** 16
- **Resolved:** 0
- **Open:** 16

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.94 |
| [#825](https://github.com/pieces-app/support/issues/825) | Pieces Pro: checkout is not opening | 4.42 |
| [#815](https://github.com/pieces-app/support/issues/815) | Failed sharing my snippets using a link or GitHub gist. | 4.26 |
| [#813](https://github.com/pieces-app/support/issues/813) | Ensure Core Dependencies | 3.61 |
| [#805](https://github.com/pieces-app/support/issues/805) | LTM gets gunged up over time | 3.55 |

## Common Issues
### 1. Pieces OS Connectivity Issues Across Multiple Applications
Users are experiencing difficulty connecting various applications (VS Code, Chrome/Edge extensions, Desktop app) to Pieces OS.  Common symptoms include SSE connection hangs, connection leaks attributed to the Pieces Desktop app, and general connectivity failures.  Suggested solutions include checking Pieces OS and app status, restarting Pieces OS, closing Pieces Desktop app, and verifying network configurations, especially VPN settings for browser extensions.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 2. Pieces OS 12.1.1 Desktop App Bugs
Users report issues with Pieces OS 12.1.1 on Windows. These include problems copying code blocks (inline and inter-line), sharing snippets via links or GitHub gists, and dragging files into conversation contexts. Additional issues involve file choosing window behavior and file filtering limitations. 

**Related Issues:**
- [#821](https://github.com/pieces-app/support/issues/821): Copy python code block = copy message ? what a big mistake !!
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT

### 3. Pieces Desktop and OS App Fail to Launch or Upgrade Due to Missing Directory
Multiple users report Pieces Desktop and OS apps failing to launch or upgrade to Pro. Logs reveal "MissingPlatformDirectoryException(Unable to get application documents directory)" error.  The application cannot locate the necessary data directory.  Suggested solutions include restarting the machine and contacting support if the issue persists.  One user also reported issues with the Pro upgrade checkout modal not appearing.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#825](https://github.com/pieces-app/support/issues/825): Pieces Pro: checkout is not opening
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak

### 4. Users unable to upgrade to Pieces Pro
Multiple users on Windows and macOS are reporting issues upgrading to Pieces Pro.  The checkout process fails, resulting in blank checkout pages, infinite loading states ("Awaiting checkout..."), or connection errors. This affects the desktop app, Pieces OS app, and browser extensions.  Users have tried various troubleshooting steps, including checking VPN settings and reinstalling Pieces, without success.

**Related Issues:**
- [#825](https://github.com/pieces-app/support/issues/825): Pieces Pro: checkout is not opening
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription

### 5. LTM performance degrades over time, becomes unresponsive
Users report that the Long Term Memory (LTM) functionality in Pieces for macOS becomes slow and eventually unresponsive after several weeks of use.  Queries take a long time and return nothing. Clearing LTM data via the provided button does not work.  Reinstalling Pieces temporarily resolves the issue.  This affects both the desktop application and the MCP.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and applications (VS Code, extensions, Desktop app). Investigate SSE connection hangs, connection leaks, and general connectivity failures.  Consider VPN configurations and network dependencies.
- Address Pieces OS 12.1.1 bugs on Windows, focusing on code copying, snippet sharing, and file dragging.  Improve file choosing window behavior and file filtering.
- Investigate and resolve the "MissingPlatformDirectoryException" error preventing app launch/upgrade on Windows.  Ensure data directory accessibility and address Pro upgrade checkout modal issues.
- Fix Pieces Pro upgrade process. Troubleshoot blank checkout pages, infinite loading, and connection errors across platforms (desktop, OS app, extensions). Test with various browsers and VPN setups.
- Address LTM performance degradation on macOS. Investigate slow queries, unresponsiveness, and ineffective clearing of LTM data.  Optimize LTM functionality for large datasets.

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
