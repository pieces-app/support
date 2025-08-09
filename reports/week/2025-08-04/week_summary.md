# Support Ticket Report
- Generated: 2025-08-09 05:09:00
- Period: 2025-08-04 to 2025-08-09

## Summary
- **Total Tickets:** 11
- **Resolved:** 0
- **Open:** 11

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 7.57 |
| [#815](https://github.com/pieces-app/support/issues/815) | Failed sharing my snippets using a link or GitHub gist. | 4.50 |
| [#819](https://github.com/pieces-app/support/issues/819) | Pieces extension for Chrome & edge cannot connect to pieces OS | 4.42 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 4.42 |
| [#816](https://github.com/pieces-app/support/issues/816) | Pieces Desktop Connection Leak | 4.25 |

## Common Issues
### 1. Pieces OS Connectivity Issues Across Multiple Applications
Users are experiencing difficulty connecting various applications (VS Code, Chrome/Edge extensions, Desktop app) to Pieces OS. Common symptoms include SSE connection hangs, connection leaks attributed to the Pieces Desktop app, and general connectivity failures.  Solutions involve verifying MCP configuration, restarting Pieces OS, closing Pieces Desktop app to mitigate leaks, and checking VPN/network settings for browser extensions. Further investigation into Pieces OS and Desktop app stability is needed.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 2. Pieces OS and related software connectivity and sharing issues
Users are experiencing problems with Pieces OS and related software (Desktop App, browser extensions) across Windows. Issues include personal domain names reverting to null.pieces.cloud, browser extensions failing to connect to Pieces OS, and inability to share snippets via links or GitHub gists.  The Pieces OS version is 12.1.1 and Desktop App version 4.3.1.  Further investigation into networking, sharing mechanisms, and potential conflicts with VPNs is needed.

**Related Issues:**
- [#817](https://github.com/pieces-app/support/issues/817): Filling out Personal Domain in Pieces OS leads to null.pieces.cloud
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.

### 3. Pieces OS connection issues across Desktop and Web extensions
Users are experiencing connection issues between Pieces OS and its Desktop/Web extensions. Desktop app shows excessive connections to OS server, causing leaks. Web extensions (Chrome, Edge) fail to connect even with VPN configurations. Issues involve Pieces OS versions 12.1.1 and Pieces for Developers 4.3.1 on Windows.  Potential solutions include closing/restarting Pieces Desktop, monitoring connections, and checking VPN/proxy settings for web extensions.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 4. Pieces Pro Features Unavailable Despite Upgrade
Users are reporting inability to access Pieces Pro features after upgrading. Issues include LLM not upgrading to the latest version, browser extensions failing to connect to Pieces OS, and "Pro required" errors for Pro users.  Common factors include recent Pro upgrade, VPN use (especially in China), and using Pieces OS 12.1.1.  Suggested solutions include checking account status, network connectivity, and Pieces configuration files.

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 5. Pieces LLM and LTM Issues
Users report issues with Pieces LTM and LLM functionality, including slow or non-responsive queries, "Pro" access errors despite subscriptions, and incorrect LLM version reporting.  Troubleshooting includes clearing LTM data (though the button is reported as non-functional), verifying Pro subscriptions, and checking LLM configurations. Some issues may be related to specific platforms (macOS, Windows) or plugins (VS Code, Sublime).

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and its Desktop/Web extensions, focusing on connection leaks and VPN/proxy compatibility.
- Investigate and address the root cause of LTM performance degradation over time and ensure the "Clear LTM Data" button functions correctly.
- Verify the proper functioning of Pieces Pro features after upgrades, addressing LLM version discrepancies and "Pro required" errors for subscribed users.
- Improve communication regarding personal domain setup to prevent users from encountering the "null.pieces.cloud" issue.
- Investigate and fix the reported issues with sharing snippets via links or GitHub gists.

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
