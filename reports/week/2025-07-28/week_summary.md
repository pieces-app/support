# Support Ticket Report
- Generated: 2025-07-31 21:09:17
- Period: 2025-07-28 to 2025-07-31

## Summary
- **Total Tickets:** 8
- **Resolved:** 0
- **Open:** 8

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#808](https://github.com/pieces-app/support/issues/808) | Unable to upgrade subscription | 6.94 |
| [#803](https://github.com/pieces-app/support/issues/803) | it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked | 6.32 |
| [#807](https://github.com/pieces-app/support/issues/807) | Authentication via Web Extension | 5.68 |
| [#809](https://github.com/pieces-app/support/issues/809) | Ensure core dependencies; Retry Step | 5.68 |
| [#781](https://github.com/pieces-app/support/issues/781) | Raycast Extension Incompatible with Current Version of Raycast | 4.59 |

## Common Issues
### 1. Pieces OS: Issues with selection, dependencies, and authentication
Users report persistent selection issues, including unintended selection with arrow keys and mouse clicks, preventing copy-pasting.  Additionally, the "Ensure core dependencies" step fails during installation on Linux.  Authentication problems also arise, with users unable to access Pro features despite purchasing a membership.  Troubleshooting steps include checking system dependencies, reinstalling the application, and verifying account status.

**Related Issues:**
- [#803](https://github.com/pieces-app/support/issues/803): it doesnt stop selecting, it seems like "shift" or "mouse 1" is locked
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension

### 2. Pieces software incompatibility issues across platforms
Users are experiencing incompatibility issues with Pieces software components, including the Raycast extension on macOS (v1.100.3), core dependencies on Linux (Pieces OS 4.3.1), and authentication problems on Windows (Pieces OS 12.1.1).  The Raycast extension triggers update errors, the Linux setup fails during dependency checks, and Windows users struggle with Pro account authentication.  Suggested solutions include updating the Raycast extension, verifying core dependencies on Linux, and checking authentication procedures on Windows.

**Related Issues:**
- [#781](https://github.com/pieces-app/support/issues/781): Raycast Extension Incompatible with Current Version of Raycast
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension

### 3. Authentication Errors in Pieces OS Desktop App
Users are experiencing authentication errors when attempting to sign in to the Pieces OS desktop app across different operating systems (Windows, Linux).  Issues range from new user sign-in failures to problems with existing pro accounts.  Suggested troubleshooting includes checking firewall settings, trying different browsers, and ensuring core dependencies are met during installation.

**Related Issues:**
- [#769](https://github.com/pieces-app/support/issues/769): An error occurred in the authentication flow.
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 4. Subscription and Authentication Issues
Users are experiencing difficulty upgrading subscriptions and authenticating their Pro accounts.  The upgrade process leads to a blank checkout page with zero values, eventually failing.  Authentication attempts are unsuccessful, preventing Pro users from accessing features.  This affects both macOS and Windows users on Pieces OS 12.1.1.

**Related Issues:**
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription
- [#807](https://github.com/pieces-app/support/issues/807): Authentication via Web Extension
- [#804](https://github.com/pieces-app/support/issues/804): Unable to generate Workstream Summary

### 5. LTM performance degrades over time, becomes unusable
Users report LTM queries becoming unresponsive after weeks of use, across macOS and potentially other platforms. Clearing LTM data via the UI fails.  Reinstalling or removing Pieces data temporarily resolves the issue.  Potential causes include LTM size exceeding limits or internal data corruption.  Needs investigation into LTM performance and data clearing functionality.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#804](https://github.com/pieces-app/support/issues/804): Unable to generate Workstream Summary


## Recommendations
- Investigate and resolve the authentication issues across Windows, Linux, and macOS, including new user sign-in, Pro account access, and web extension authentication.
- Address the subscription upgrade process failure, focusing on the blank checkout page issue.
- Fix the Pieces OS incompatibility problems with Raycast extension on macOS and core dependencies on Linux.
- Investigate and resolve the LTM performance degradation and data clearing functionality on macOS and other affected platforms.
- Address the selection bug in Pieces OS where the application behaves as if "shift" or "mouse 1" is locked.
- Look into the "Ensure core dependencies" step failure during Pieces OS installation on Linux.
- Investigate the issue preventing Workstream Summary generation and the associated ApiException 500 error.

## Daily Reports
Here are the daily reports for this week:

- [report_210715](daily/2025-07-29/report_210715.md)
- [report_132019](daily/2025-07-29/report_132019.md)
- [report_210730](daily/2025-07-30/report_210730.md)
- [report_210744](daily/2025-07-31/report_210744.md)
- [report_131918](daily/2025-07-31/report_131918.md)
