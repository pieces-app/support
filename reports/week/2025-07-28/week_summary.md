# Support Ticket Report
- Generated: 2025-08-03 13:18:25
- Period: 2025-07-28 to 2025-08-03

## Summary
- **Total Tickets:** 12
- **Resolved:** 1
- **Open:** 11

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#803](https://github.com/pieces-app/support/issues/803) | it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked | 6.42 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 5.60 |
| [#781](https://github.com/pieces-app/support/issues/781) | Raycast Extension Incompatible with Current Version of Raycast | 4.86 |
| [#813](https://github.com/pieces-app/support/issues/813) | Ensure Core Dependencies | 4.42 |
| [#812](https://github.com/pieces-app/support/issues/812) | Unable to generate Workstream Summary | 4.42 |

## Common Issues
### 1. Pieces OS: Issues with Selection, Dependencies, and Authentication
Users report issues with Pieces OS including persistent selection mode, failure to ensure core dependencies during installation, and unsuccessful authentication despite purchasing Pro. The selection bug involves unintended selection behavior, possibly related to stuck Shift/Mouse 1. The dependency issue occurs after successful initialization of the desktop app. The authentication issue prevents Pro users from accessing their membership benefits.  Further investigation is needed to identify the root causes and solutions.

**Related Issues:**
- [#803](https://github.com/pieces-app/support/issues/803): it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension

### 2. Pieces OS fails to initialize due to missing platform directory
Across Windows and Linux, Pieces OS fails to start due to an inability to determine the application data directory.  Logs show "MissingPlatformDirectoryException(Unable to get application documents directory)".  Suggested workarounds include restarting the machine and checking data directory permissions.  If the issue persists, contact support.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 3. Pieces software incompatibility issues across platforms
Users are experiencing incompatibility issues with Pieces software components, including the Raycast extension on macOS (v1.100.3), core dependencies on Linux (Pieces OS 4.3.1), and authentication problems on Windows (Pieces OS 12.1.1).  The Raycast extension triggers update errors, the Linux setup encounters a "Retry Step" message during dependency checks, and Windows users face authentication failures impacting Pro membership access.  Suggested solutions include updating the Raycast extension, troubleshooting dependency issues on Linux, and verifying login credentials/connectivity on Windows.

**Related Issues:**
- [#781](https://github.com/pieces-app/support/issues/781): Raycast Extension Incompatible with Current Version of Raycast
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension

### 4. Pieces OS and Desktop App Integration Issues
Users report problems with Pieces OS integration with other applications, primarily Claude Code and the desktop app. Issues include SSE connection hangs, LTM performance degradation over time, and "Ensure core dependencies" step failures.  Suggested solutions include checking MCP server configuration, clearing LTM data (if possible), and reinstalling or updating Pieces OS and related applications. Further investigation is needed to pinpoint the root causes and provide targeted fixes.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 5. Workstream Summary Generation Failures & Dependency Issues
Users are experiencing issues generating Workstream Summaries due to API exceptions (500, 511) and model access errors (404).  A common error message points to a missing or inaccessible Gemini-Pro model.  Additionally, some users encounter "Ensure core dependencies; Retry Step" errors during application initialization, particularly on Linux.  Check model access permissions and verify core dependencies are installed.

**Related Issues:**
- [#812](https://github.com/pieces-app/support/issues/812): Unable to generate Workstream Summary
- [#804](https://github.com/pieces-app/support/issues/804): Unable to generate Workstream Summary
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step


## Recommendations
- Investigate and resolve the root cause of the "MissingPlatformDirectoryException" error affecting Pieces OS initialization on Windows and Linux.
- Address the persistent selection bug in Pieces OS, possibly related to stuck Shift/Mouse 1 keys.
- Fix the "Ensure core dependencies; Retry Step" error during Pieces OS setup on Linux.
- Resolve the authentication issues preventing Pro users from accessing their membership benefits on Windows.
- Update the Raycast extension to ensure compatibility with Raycast v1.100.3 and later.
- Investigate and fix the SSE connection hangs affecting MCP server integration with Claude Code in VS Code.
- Address the LTM performance degradation issue and the non-functional "Clear LTM Data" button.
- Troubleshoot and resolve the API exceptions (500, 511) and model access errors (404) affecting Workstream Summary generation.
- Verify Gemini-Pro model access permissions and ensure core dependencies are installed correctly.

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
- [report_131643](daily/2025-08-03/report_131643.md)
- [report_051343](daily/2025-08-03/report_051343.md)
