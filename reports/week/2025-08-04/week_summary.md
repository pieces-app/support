# Support Ticket Report
- Generated: 2025-08-09 13:16:21
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
### 1. Pieces OS Connectivity Issues Across Multiple Applications
Users are experiencing difficulty connecting various applications (VS Code, Chrome/Edge extensions, Desktop app) to Pieces OS.  Common symptoms include connection hangs, leaks, and inability to register MCP tools.  Suggested solutions include checking Pieces OS and app versions, verifying network configurations (VPN, proxy), monitoring connections, restarting Pieces OS or the affected application, and ensuring the Pieces Desktop app is closed if causing connection leaks.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 2. Bugs in Pieces OS 12.1.1 on Windows Desktop
Multiple users report issues with Pieces OS 12.1.1 on Windows. These include problems copying code blocks (inline and inter-line), sharing snippets via links or GitHub gists, and dragging files into the conversation context.  Additional issues involve file choosing window behavior and file filtering limitations. 

**Related Issues:**
- [#821](https://github.com/pieces-app/support/issues/821): Copy python code block = copy message ? what a big mistake !!
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#822](https://github.com/pieces-app/support/issues/822): CANNOT drag a file into CONVERSATION CONTEXT

### 3. Pieces OS and related software connectivity and sharing issues
Users are experiencing issues with Pieces OS and related software (Desktop App, browser extensions) including: Personal domain displaying as null.pieces.cloud, browser extensions failing to connect to Pieces OS, and inability to share snippets via link or GitHub gist.  Issues appear across Windows and may be related to VPN usage or recent upgrades. Further investigation is needed to identify the root cause and solutions.

**Related Issues:**
- [#817](https://github.com/pieces-app/support/issues/817): Filling out Personal Domain in Pieces OS leads to null.pieces.cloud
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.

### 4. Pieces OS connection issues across multiple platforms
Users are experiencing connection issues with Pieces OS on Windows, including the desktop app, VS Code extension, and browser extensions.  A connection leak was identified with the desktop app creating excessive connections to the OS server.  Browser extensions are also failing to connect, potentially due to VPN conflicts.  Suggested solutions include closing the desktop app, monitoring connections, restarting the OS server, and investigating VPN settings for browser extensions.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 5. Pieces Copilot Service and Workstream Summary Errors
Users are experiencing issues with the Pieces Copilot Service and Workstream Summary generation.  Copilot Service shows 'Instance of 'fp'' error. Workstream Summary shows 'ApiException 511' related to an application in local mode. Potential solutions include updating Pieces OS to the supported version (11.2.2-12.0.0 or 12.1.0-13.0.0 respectively) and ensuring applications are not in local mode for Workstream Summary.

**Related Issues:**
- [#823](https://github.com/pieces-app/support/issues/823): Unable to open Pieces Copilot Service
- [#824](https://github.com/pieces-app/support/issues/824): Unable to open Pieces Copilot Service
- [#812](https://github.com/pieces-app/support/issues/812): Unable to generate Workstream Summary


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS, Desktop App, and browser extensions, especially focusing on connection leaks and VPN conflicts.
- Address bugs in Pieces OS 12.1.1 on Windows, particularly those related to code copying, sharing snippets, and file handling.
- Investigate and resolve issues with Pieces Copilot Service ('Instance of 'fp'' error) and Workstream Summary generation ('ApiException 511' error).
- Update documentation or user interface to clarify supported Pieces OS versions for Copilot Service and Workstream Summary and instructions for resolving local mode conflicts.
- Improve communication with users experiencing connectivity and sharing issues, providing temporary workarounds and updates on progress towards solutions.

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
