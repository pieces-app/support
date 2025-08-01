# Support Ticket Report
- Generated: 2025-08-01 21:08:43
- Period: 2025-07-28 to 2025-08-01

## Summary
- **Total Tickets:** 8
- **Resolved:** 1
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#803](https://github.com/pieces-app/support/issues/803) | it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked | 7.23 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 6.50 |
| [#808](https://github.com/pieces-app/support/issues/808) | Unable to upgrade subscription | 5.50 |
| [#781](https://github.com/pieces-app/support/issues/781) | Raycast Extension Incompatible with Current Version of Raycast | 4.95 |
| [#807](https://github.com/pieces-app/support/issues/807) | Authentication via Web Extension | 4.50 |

## Common Issues
### 1. Pieces OS: Issues with selection, dependencies, and authentication
Users are experiencing issues with Pieces OS across different operating systems. These include unintended selection behavior (potentially stuck shift/mouse click), failure of the "Ensure core dependencies" step during installation on Linux, and authentication problems preventing Pro membership utilization on Windows.  Further investigation is needed to identify the root causes and solutions for each issue.

**Related Issues:**
- [#803](https://github.com/pieces-app/support/issues/803): it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension

### 2. Pieces software incompatibility issues across platforms
Users are experiencing incompatibility issues with Pieces software components, including the Raycast extension on macOS (v1.100.3), core dependencies on Linux (Pieces OS 4.3.1), and authentication problems on Windows (Pieces OS 12.1.1).  The Raycast extension triggers update errors, Linux setup stalls during dependency checks, and Windows users face pro account authentication failures.  Suggested solutions include updating the Raycast extension, verifying core dependencies, and checking login credentials/connectivity.

**Related Issues:**
- [#781](https://github.com/pieces-app/support/issues/781): Raycast Extension Incompatible with Current Version of Raycast
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension

### 3. Authentication Errors in Pieces OS Desktop App
Users are experiencing authentication errors when attempting to sign in to the Pieces OS desktop app across different operating systems (Windows, Linux).  Issues range from new user sign-in failures to existing pro users unable to authenticate.  Suggested troubleshooting includes checking firewall settings, trying different browsers, and ensuring core dependencies are met during installation.

**Related Issues:**
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 4. Users unable to upgrade to Pro or utilize Pro features
Multiple users report issues with upgrading to Pieces Pro.  Symptoms include blank checkout pages, authentication failures, and workstream summary generation errors.  The issues appear across macOS and Windows on Pieces OS 12.1.1. Further investigation into the upgrade process and Pro authentication is needed.

**Related Issues:**
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension
- [#804](https://github.com/pieces-app/support/issues/804): Unable to generate Workstream Summary

### 5. LTM performance degrades over time and becomes unusable
Users report that the Long Term Memory (LTM) functionality in Pieces OS degrades over time.  After a few weeks of use, LTM queries become extremely slow and eventually return no results, both in the desktop application and via MCP.  Clearing LTM data sometimes resolves the issue temporarily. The "Clear LTM Data" button is also reported as non-functional. This issue occurs across different operating systems (macOS, Linux, Windows).

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#804](https://github.com/pieces-app/support/issues/804): Unable to generate Workstream Summary


## Recommendations
- Investigate and resolve the root cause of the "shift" or "mouse 1" lock issue on Windows.
- Prioritize resolving the "Ensure core dependencies" failure during Pieces OS installation on Linux.
- Address the authentication problems preventing Pro membership utilization on Windows.
- Update the Raycast extension to resolve incompatibility issues with Raycast 1.100.3 on macOS.
- Investigate and fix the blank checkout page issue when upgrading to Pieces Pro.
- Troubleshoot and resolve the authentication errors in the Pieces OS desktop app on Windows and Linux.
- Investigate and address the performance degradation of Long Term Memory (LTM) functionality over time.
- Fix the non-functional "Clear LTM Data" button in Pieces OS.
- Improve error messaging and logging for authentication and upgrade issues to aid in troubleshooting.

## Daily Reports
Here are the daily reports for this week:

- [report_210715](daily/2025-07-29/report_210715.md)
- [report_132019](daily/2025-07-29/report_132019.md)
- [report_210730](daily/2025-07-30/report_210730.md)
- [report_210744](daily/2025-07-31/report_210744.md)
- [report_131918](daily/2025-07-31/report_131918.md)
- [report_210727](daily/2025-08-01/report_210727.md)
