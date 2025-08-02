# Support Ticket Report
- Generated: 2025-08-02 05:10:39
- Period: 2025-07-28 to 2025-08-02

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
| [#781](https://github.com/pieces-app/support/issues/781) | Raycast Extension Incompatible with Current Version of Raycast | 4.90 |
| [#807](https://github.com/pieces-app/support/issues/807) | Authentication via Web Extension | 4.50 |

## Common Issues
### 1. Pieces OS: Issues with selection, dependencies, and authentication
Users report persistent selection issues, including unintended selection with arrow keys and mouse clicks, preventing copy-pasting.  Dependency issues arise during installation, with the "Ensure core dependencies" step requiring retries. Authentication problems prevent Pro users from accessing their memberships, despite log-in attempts.  Solutions are pending investigation.

**Related Issues:**
- [#803](https://github.com/pieces-app/support/issues/803): it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension

### 2. Pieces software incompatibility issues across platforms
Users are experiencing incompatibility issues with Pieces software components, including the Raycast extension on macOS (v1.100.3), core dependencies on Linux (Pieces OS 4.3.1), and authentication problems on Windows (Pieces OS 12.1.1).  The Raycast extension triggers update errors, the Linux setup stalls during dependency checks, and Windows users face authentication failures impacting Pro membership access.  Suggested solutions include updating the Raycast extension, verifying core dependencies on Linux, and troubleshooting authentication issues on Windows, potentially involving account verification or reauthentication.

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

### 4. Users unable to upgrade or authenticate Pro subscriptions
Multiple users report issues with Pro subscriptions.  Upgrading results in a blank checkout page with zero values, eventually failing.  Authentication attempts also fail, preventing Pro access.  This affects macOS and Windows users on Pieces OS 12.1.1. Further investigation into backend systems and payment gateways is needed.

**Related Issues:**
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension
- [#804](https://github.com/pieces-app/support/issues/804): Unable to generate Workstream Summary

### 5. LTM performance degrades over time and becomes unusable
Users report that the Long Term Memory (LTM) functionality in Pieces OS degrades over time, eventually becoming unresponsive to queries.  This occurs on various operating systems (macOS, Linux, Windows) and Pieces versions.  The issue seems related to the LTM accumulating data, as clearing the data (when possible) temporarily resolves the problem.  The "Clear LTM Data" button is also reported as non-functional.  Users experience slow query times and null results, impacting their workflow. Further investigation is needed into LTM data management and clearing mechanisms.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#804](https://github.com/pieces-app/support/issues/804): Unable to generate Workstream Summary


## Recommendations
- Investigate and resolve the persistent selection issue in Pieces OS, focusing on unintended selections with arrow keys and mouse clicks.
- Address the dependency issues during Pieces OS installation, specifically the "Ensure core dependencies" step requiring retries.
- Troubleshoot the authentication problems preventing Pro users from accessing their memberships.
- Update the Raycast extension to ensure compatibility with the latest Raycast version.
- Investigate and resolve the authentication errors in the Pieces OS desktop app across different operating systems.
- Address the issues with Pro subscriptions, including the blank checkout page and failed authentication attempts.
- Investigate and resolve the performance degradation of the Long Term Memory (LTM) functionality, focusing on slow query times and null results.
- Fix the non-functional "Clear LTM Data" button.

## Daily Reports
Here are the daily reports for this week:

- [report_210715](daily/2025-07-29/report_210715.md)
- [report_132019](daily/2025-07-29/report_132019.md)
- [report_210730](daily/2025-07-30/report_210730.md)
- [report_210744](daily/2025-07-31/report_210744.md)
- [report_131918](daily/2025-07-31/report_131918.md)
- [report_210727](daily/2025-08-01/report_210727.md)
