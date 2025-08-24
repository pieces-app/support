# Support Ticket Report
- Generated: 2025-08-24 21:08:09
- Period: 2025-08-18 to 2025-08-24

## Summary
- **Total Tickets:** 13
- **Resolved:** 3
- **Open:** 10

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#805](https://github.com/pieces-app/support/issues/805) | Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan) | 8.00 |
| [#835](https://github.com/pieces-app/support/issues/835) | pieces-for-developers crashes at startup on ubuntu 24.04 LTS | 7.38 |
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 6.46 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 6.24 |
| [#808](https://github.com/pieces-app/support/issues/808) | Unable to upgrade subscription | 4.00 |

## Common Issues
### 1. Subscription and Upgrade Issues on macOS
Users on macOS 12.1.1 are experiencing issues with subscriptions not showing up after cancellation and resubscription, LTM queries failing after a few weeks of use, and Pro upgrade attempts leading to a blank checkout page.  Clearing LTM data and checking Pro status are potential workarounds. Further investigation into subscription management and LTM functionality is needed.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): Bug: Subscription is not showing up within the Application(cancelation + resubscription w/ a new plan)
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#808](https://github.com/pieces-app/support/issues/808): Unable to upgrade subscription

### 2. Pieces OS MCP Integration Failures and LLM Version Discrepancies
Users report Pieces OS MCP tools failing to integrate with Claude Code and other IDEs. The `ask_pieces_ltm` tool frequently returns "Failed to extract context" despite functional LTM.  Additionally, LLM versions reported by Pieces for Developers and VS Code plugin don't reflect user's Pro upgrade to Sonnet 4.  Suggested solutions include verifying server connections, checking Pieces OS and app versions, and ensuring correct LLM configuration in IDE settings and `~/.claude.json`.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM

### 3. Pieces for Developers startup crashes or dependency issues
Users report Pieces for Developers crashing on startup on Ubuntu 24.04 LTS, often with a blank window briefly appearing.  Dependency issues are also noted, including potential conflicts with GTK versions and missing configuration folders.  Additionally, some users experience issues with the "Ensure core dependencies" step during installation.  Suggested solutions include checking system dependencies, reinstalling the application, and verifying Pieces OS version compatibility.

**Related Issues:**
- [#835](https://github.com/pieces-app/support/issues/835): pieces-for-developers crashes at startup on ubuntu 24.04 LTS
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step

### 4. Users unable to access Pieces Pro features despite upgrade
Multiple users report being unable to use Pro features after upgrading. Issues include LLM not upgrading to latest version, code block collapse failures, and "Pro required" errors even with active subscriptions.  Troubleshooting steps like restarts, re-logins, and VPN changes haven't resolved the problems. Further investigation needed into account sync and feature activation processes.

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 5. Pieces Desktop App and OS Issues
Users are experiencing problems with the Pieces desktop app and OS across different operating systems (Windows, Linux). Issues include backup restoration failures, core dependency errors during setup, and inability to collapse code blocks.  Further investigation is needed to determine root causes and solutions. Logs and screenshots have been provided by users.

**Related Issues:**
- [#837](https://github.com/pieces-app/support/issues/837): backup restoration fails
- [#809](https://github.com/pieces-app/support/issues/809): Ensure core dependencies; Retry Step
- [#839](https://github.com/pieces-app/support/issues/839): Cannot collapse all code block in Pieces Desktop


## Recommendations
- Prioritize resolving subscription and upgrade issues on macOS to address user frustration and potential revenue loss.
- Investigate and fix the MCP integration failures, particularly the `ask_pieces_ltm` tool, to ensure proper functionality of Pieces OS with IDEs.
- Address the Pieces for Developers startup crashes on Ubuntu 24.04 LTS to improve user experience on Linux.
- Investigate and resolve the issue of users being unable to access Pro features despite upgrading, focusing on account sync and feature activation.
- Look into the reported Pieces Desktop App and OS issues, including backup restoration failures and code block collapse problems, across different operating systems.

## Daily Reports
Here are the daily reports for this week:

- [report_131455](daily/2025-08-19/report_131455.md)
- [report_210655](daily/2025-08-19/report_210655.md)
- [report_131533](daily/2025-08-20/report_131533.md)
- [report_050747](daily/2025-08-20/report_050747.md)
- [report_210652](daily/2025-08-20/report_210652.md)
- [report_210649](daily/2025-08-21/report_210649.md)
- [report_131501](daily/2025-08-21/report_131501.md)
- [report_131419](daily/2025-08-22/report_131419.md)
- [report_210630](daily/2025-08-22/report_210630.md)
- [report_210632](daily/2025-08-23/report_210632.md)
- [report_131150](daily/2025-08-24/report_131150.md)
- [report_210626](daily/2025-08-24/report_210626.md)
