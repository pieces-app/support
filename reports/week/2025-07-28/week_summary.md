# Support Ticket Report
- Generated: 2025-08-03 05:15:22
- Period: 2025-07-28 to 2025-08-03

## Summary
- **Total Tickets:** 11
- **Resolved:** 1
- **Open:** 10

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#803](https://github.com/pieces-app/support/issues/803) | it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked | 6.42 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 5.60 |
| [#781](https://github.com/pieces-app/support/issues/781) | Raycast Extension Incompatible with Current Version of Raycast | 4.86 |
| [#812](https://github.com/pieces-app/support/issues/812) | Unable to generate Workstream Summary | 4.42 |
| [#811](https://github.com/pieces-app/support/issues/811) | I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue. | 4.42 |

## Common Issues
### 1. Pieces OS: Issues with selection, dependencies, and authentication
Users report persistent selection issues, including unintended selection with arrow keys and mouse clicks, preventing copy-pasting.  Additionally, the "Ensure core dependencies" step fails during installation on Linux.  Authentication problems also arise, with users unable to access Pro features despite purchasing memberships.  Suggested solutions include checking system settings, reinstalling dependencies, and verifying account status.

**Related Issues:**
- [#803](https://github.com/pieces-app/support/issues/803): it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension

### 2. Pieces software incompatibility issues across platforms
Users are experiencing incompatibility issues with Pieces software components, including the Raycast extension on macOS (v1.100.3), core dependencies on Linux (Pieces OS 4.3.1), and authentication problems on Windows (Pieces OS 12.1.1).  The Raycast extension triggers update errors, Linux setup stalls during dependency checks, and Windows users face pro account authentication failures.  Suggested solutions include updating the Raycast extension, verifying core dependencies on Linux, and troubleshooting login issues on Windows.

**Related Issues:**
- [#781](https://github.com/pieces-app/support/issues/781): Raycast Extension Incompatible with Current Version of Raycast
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension

### 3. Authentication Errors in Pieces OS Desktop App
Users are experiencing authentication errors when attempting to sign in to the Pieces OS desktop app across different operating systems (Windows, Linux).  Issues range from new user sign-in failures to existing pro users unable to authenticate.  Suggested troubleshooting includes checking firewall settings, trying different browsers, and ensuring core dependencies are met. Further investigation into authentication flow and dependency issues is needed.

**Related Issues:**
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 4. Pieces OS and App Integration Issues
Users report problems with Pieces OS and app integration, including MCP server SSE connection hangs in Claude Code, LTM performance degradation over time, and "Ensure core dependencies" step failing during setup.  Suggested solutions include checking MCP server configuration, clearing LTM data (if possible), and reinstalling or updating Pieces OS and app.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 5. Workstream Summary Generation Failures & Dependency Issues
Users are experiencing issues generating workstream summaries due to API exceptions (500, 511) and model access errors (404).  A common error message points to a missing or inaccessible Gemini-Pro model.  Additionally, on Linux, "Ensure core dependencies" step fails during application initialization, requiring retry. Check model access permissions and verify core dependencies are installed.

**Related Issues:**
- [#812](https://github.com/pieces-app/support/issues/812): Unable to generate Workstream Summary
- [#804](https://github.com/pieces-app/support/issues/804): Unable to generate Workstream Summary
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step


## Recommendations
- Prioritize resolving the 'Pieces OS: Issues with selection, dependencies, and authentication' common issue, focusing on selection bugs, Linux dependency failures, and authentication problems.
- Address the Raycast extension incompatibility issue on macOS by updating the extension to support the latest Raycast version.
- Investigate and resolve the authentication errors in the Pieces OS desktop app across Windows and Linux, focusing on new user sign-in and existing pro user authentication failures.
- Improve the 'Ensure core dependencies' step during Pieces OS and app setup on Linux to prevent failures and retries.
- Address the MCP server SSE connection hangs affecting Claude Code integration in VS Code and CLI by investigating potential buffering issues.
- Investigate and fix the LTM performance degradation over time, possibly by optimizing data handling or providing a functional 'Clear LTM Data' option.
- Resolve the workstream summary generation failures by addressing API exceptions (500, 511) and model access errors (404), particularly the Gemini-Pro model accessibility issue.
- Improve the upgrade subscription process to address reported failures.

## Daily Reports
Here are the daily reports for this week:

- [report_210715](daily/2025-07-29/report_210715.md)
- [report_132019](daily/2025-07-29/report_132019.md)
- [report_210730](daily/2025-07-30/report_210730.md)
- [report_210744](daily/2025-07-31/report_210744.md)
- [report_131918](daily/2025-07-31/report_131918.md)
- [report_210727](daily/2025-08-01/report_210727.md)
- [report_210633](daily/2025-08-02/report_210633.md)
- [report_131531](daily/2025-08-02/report_131531.md)
- [report_051343](daily/2025-08-03/report_051343.md)
