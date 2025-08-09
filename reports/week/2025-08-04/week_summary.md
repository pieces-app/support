# Support Ticket Report
- Generated: 2025-08-09 21:08:37
- Period: 2025-08-04 to 2025-08-09

## Summary
- **Total Tickets:** 15
- **Resolved:** 0
- **Open:** 15

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 7.22 |
| [#815](https://github.com/pieces-app/support/issues/815) | Failed sharing my snippets using a link or GitHub gist. | 4.74 |
| [#823](https://github.com/pieces-app/support/issues/823) | Unable to open Pieces Copilot Service | 4.42 |
| [#824](https://github.com/pieces-app/support/issues/824) | Unable to open Pieces Copilot Service | 4.42 |
| [#821](https://github.com/pieces-app/support/issues/821) | Copy python code block = copy message ? what a big mistake !! | 4.42 |

## Common Issues
### 1. Bugs related to copying, sharing, and dragging files in Pieces OS 12.1.1
Users are experiencing issues with copying code blocks (inline vs. inter-line discrepancies), sharing snippets via links or GitHub gists, and dragging files into the conversation context.  Additional problems include file picker window behavior and file filtering limitations.  The issues appear specific to the Windows desktop application version 12.1.1.

**Related Issues:**
- [#821](https://github.com/pieces-app/support/issues/821): Copy python code block = copy message ? what a big mistake !!
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT

### 2. Pieces OS Connectivity Issues Across Multiple Applications
Users are experiencing difficulty connecting various applications (VS Code, Desktop app, Chrome/Edge extensions) to Pieces OS.  Common symptoms include connection hangs, leaks, and inability to register MCP tools.  Suggested solutions include checking Pieces OS and app versions, verifying network configurations (VPN, proxy), monitoring connections, restarting Pieces OS or the affected application, and ensuring correct configuration within the application (e.g., .claude.json).

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 3. Pieces Copilot Service and Workstream Summary Errors
Users are experiencing issues with the Pieces Copilot Service and Workstream Summary generation.  Copilot Service shows "Instance of 'fp'" error. Workstream Summary shows API Exception 511 related to an application in local mode. Potential solutions include updating application capabilities and ensuring Pieces OS version compatibility (min 11.2.2 for Copilot, 12.1.0 for Workstream).

**Related Issues:**
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service
- [#824](https://github.com/pieces-app/support/issues/824): Unable to open Pieces Copilot Service
- [#812](https://github.com/pieces-app/support/issues/812): Unable to generate Workstream Summary

### 4. LTM performance degrades over time, becomes unresponsive
Users report that the Long Term Memory (LTM) feature in Pieces for macOS becomes slow and unresponsive after several weeks of use.  Queries take a long time and return nothing. Clearing LTM data sometimes fails.  Reinstalling Pieces temporarily resolves the issue.  This affects both the desktop application and the MCP.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service

### 5. Pieces OS and related software connectivity and sharing issues
Users are experiencing problems with Pieces OS and related software (Desktop App, browser extensions) across Windows. Issues include personal domain names reverting to null.pieces.cloud, browser extensions failing to connect to Pieces OS despite VPN configurations, and inability to share snippets via links or GitHub gists.  The Pieces OS version is 12.1.1 and Desktop App version 4.3.1 in reported cases. Further investigation into network configurations, sharing mechanisms, and potential conflicts with VPNs is required.

**Related Issues:**
- [#817](https://github.com/pieces-app/support/issues/817): Filling out Personal Domain in Pieces OS leads to null.pieces.cloud
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and applications (VS Code, Desktop app, Chrome/Edge extensions).  Focus on Windows OS given the higher number of reported issues.
- Investigate and address the connection leak associated with the Pieces Desktop application on Windows.
- Troubleshoot issues related to sharing snippets via links or GitHub gists, specifically on Windows.
- Address the bugs related to copying, dragging, and sharing files within Pieces OS 12.1.1, particularly on Windows.
- Investigate and fix the "Instance of 'fp'" error appearing in the Pieces Copilot Service.
- Address the API Exception 511 error encountered when generating Workstream Summaries.
- Investigate and resolve the performance degradation of Long Term Memory (LTM) on macOS over time.
- Ensure personal domain name functionality is working correctly and doesn't revert to null.pieces.cloud.
- Verify Pieces OS version compatibility with Copilot (min 11.2.2) and Workstream (min 12.1.0) and communicate upgrade requirements clearly to users.

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
