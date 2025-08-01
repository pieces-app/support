# Support Ticket Report
- Generated: 2025-08-01 05:16:57
- Period: 2025-07-28 to 2025-08-01

## Summary
- **Total Tickets:** 8
- **Resolved:** 0
- **Open:** 8

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#803](https://github.com/pieces-app/support/issues/803) | it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked | 7.53 |
| [#808](https://github.com/pieces-app/support/issues/808) | Unable to upgrade subscription | 6.94 |
| [#807](https://github.com/pieces-app/support/issues/807) | Authentication via Web Extension | 5.68 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 5.68 |
| [#781](https://github.com/pieces-app/support/issues/781) | Raycast Extension Incompatible with Current Version of Raycast | 4.54 |

## Common Issues
### 1. Pieces OS: Issues with selection, dependencies, and authentication
Users report persistent selection issues, including unintended selection with arrow keys and mouse clicks, preventing copy-pasting.  Additionally, the "Ensure core dependencies" step fails during installation on Linux.  Authentication problems also arise, with users unable to access Pro features despite purchasing memberships. Troubleshooting steps include checking system dependencies and re-authenticating accounts.

**Related Issues:**
- [#803](https://github.com/pieces-app/support/issues/803): it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension

### 2. Pieces software incompatibility issues across platforms
Users are experiencing incompatibility issues with Pieces software components, including the Raycast extension on macOS (v1.100.3), core dependencies on Linux (Pieces OS 4.3.1), and authentication problems on Windows (Pieces OS 12.1.1).  The Raycast extension triggers update errors, the Linux setup encounters a "Retry Step" message during dependency checks, and Windows users face authentication failures impacting Pro membership access.  Suggested solutions include updating the Raycast extension, troubleshooting dependency issues on Linux, and verifying login credentials/connectivity on Windows.

**Related Issues:**
- [#781](https://github.com/pieces-app/support/issues/781): Raycast Extension Incompatible with Current Version of Raycast
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension

### 3. Authentication Errors in Pieces OS Desktop App
Users are experiencing authentication errors when attempting to sign in to the Pieces OS desktop app across different operating systems (Windows, Linux).  Issues range from new user sign-in failures to problems with existing accounts, including Pro users.  Some users report success after reinstallation or changing browsers, while others are blocked entirely.  Error messages vary, and logs may not provide clear solutions.

**Related Issues:**
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 4. Users unable to upgrade or authenticate Pro subscriptions
Multiple users report issues with Pro subscriptions.  Upgrading results in a blank checkout page with zero values, eventually failing.  Authentication attempts also fail, preventing Pro access.  This affects macOS and Windows users on Pieces OS 12.1.1. Further investigation into backend services and authentication flows is needed.

**Related Issues:**
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension
- [#804](https://github.com/pieces-app/support/issues/804): Unable to generate Workstream Summary

### 5. LTM performance degrades over time, becomes unresponsive
Users report LTM queries becoming slow and eventually failing after weeks of use.  Issue occurs on macOS and potentially other platforms. Clearing LTM data via the UI is unsuccessful.  Workaround involves removing all Pieces data, but the problem reoccurs. Potential solutions include LTM optimization or data management strategies.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#804](https://github.com/pieces-app/support/issues/804): Unable to generate Workstream Summary


## Recommendations
- Prioritize resolving authentication issues across different operating systems (Windows, Linux, macOS) and Pieces components (Desktop App, Web Extension).
- Investigate and address the recurring LTM performance degradation issue on macOS and potentially other platforms. Explore LTM optimization or data management strategies.
- Fix the "Ensure core dependencies" step failure during Pieces OS installation on Linux.
- Address the selection bug in Pieces OS where the application behaves as if "shift" or "mouse 1" is locked.
- Resolve the Raycast extension incompatibility issue with Raycast version 1.100.3 on macOS.
- Troubleshoot the blank checkout page issue when users attempt to upgrade to Pro subscriptions.
- Investigate and fix the issue preventing users from generating Workstream Summaries.

## Daily Reports
Here are the daily reports for this week:

- [report_210715](daily/2025-07-29/report_210715.md)
- [report_132019](daily/2025-07-29/report_132019.md)
- [report_210730](daily/2025-07-30/report_210730.md)
- [report_210744](daily/2025-07-31/report_210744.md)
- [report_131918](daily/2025-07-31/report_131918.md)
