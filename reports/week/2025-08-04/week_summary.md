# Support Ticket Report
- Generated: 2025-08-10 05:11:30
- Period: 2025-08-04 to 2025-08-10

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
### 1. Bugs in Pieces OS 12.1.1 on Windows Desktop
Multiple users report issues with Pieces OS 12.1.1 on Windows. These include problems copying code blocks (inline and inter-line), sharing snippets via links or GitHub gists, and dragging files into the conversation context.  Additional issues involve file choosing window behavior and file filtering limitations. 

**Related Issues:**
- [#821](https://github.com/pieces-app/support/issues/821): Copy python code block = copy message ? what a big mistake !!
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT

### 2. Pieces OS Connectivity Issues Across Multiple Applications
Users are experiencing difficulty connecting various applications (VS Code, Chrome/Edge extensions, Desktop app) to Pieces OS.  Common symptoms include connection hangs, leaks, and inability to register MCP tools.  Suggested solutions include checking Pieces OS and app versions, verifying network configurations (VPN, proxy), monitoring connections, restarting Pieces OS or the affected application, and ensuring the Pieces Desktop app is closed if causing connection leaks.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 3. Pieces Copilot Service and Workstream Summary Errors
Users are experiencing issues with the Pieces Copilot Service and Workstream Summary generation.  Copilot Service shows "Instance of 'fp'" error on macOS. Workstream Summary generation fails on Windows with ApiException 511, indicating a local mode application conflict.  Check Pieces OS version compatibility and ensure applications are not in local mode. Update applications/capabilities if necessary.

**Related Issues:**
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service
- [#824](https://github.com/pieces-app/support/issues/824): Unable to open Pieces Copilot Service
- [#812](https://github.com/pieces-app/support/issues/812): Unable to generate Workstream Summary

### 4. LTM performance degrades over time, becomes unresponsive
Users report LTM queries becoming slow and eventually failing after weeks of use.  Clearing LTM data is attempted but unsuccessful.  Reinstalling or removing Pieces data temporarily resolves the issue.  Issue occurs on macOS.  Potential solutions include optimizing LTM data handling, improving data clearing functionality, and investigating resource limitations.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service

### 5. Pieces OS and related software connectivity and sharing issues
Users are experiencing difficulties with Pieces OS and related software (Desktop App, browser extensions) across Windows. Issues include personal domain names reverting to null.pieces.cloud, browser extensions failing to connect to Pieces OS, and inability to share snippets via links or GitHub gists.  Users report using VPNs and being located in regions with internet restrictions. Further investigation into network connectivity, software compatibility, and sharing functionality is needed.

**Related Issues:**
- [#817](https://github.com/pieces-app/support/issues/817): Filling out Personal Domain in Pieces OS leads to null.pieces.cloud
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and various applications (VS Code, Chrome/Edge extensions, Desktop app).  Focus on connection hangs, leaks, and MCP tool registration failures.
- Investigate and address the "Instance of 'fp'" error affecting the Pieces Copilot Service on macOS.
- Troubleshoot the Workstream Summary generation failure on Windows (ApiException 511) and its relation to local mode application conflicts.
- Address the performance degradation and unresponsiveness of LTM queries over time, including improving the LTM data clearing functionality.
- Investigate and resolve issues with sharing snippets via links or GitHub gists, particularly on Windows.
- Examine the problem of personal domain names reverting to null.pieces.cloud on the Desktop App.
- Improve handling of bugs related to Pieces OS 12.1.1 on Windows, especially problems with copying code blocks, sharing snippets, and file handling.
- Ensure consistent functionality of Pieces Pro features for subscribed users.

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
