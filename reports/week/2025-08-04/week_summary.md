# Support Ticket Report
- Generated: 2025-08-08 21:08:38
- Period: 2025-08-04 to 2025-08-08

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
### 1. Pieces OS Connectivity Issues Across Multiple Clients
Users are experiencing difficulty connecting various clients (VS Code, Desktop app, Chrome/Edge extensions) to Pieces OS.  Common symptoms include connection hangs, leaks, and inability to register tools.  Suggested solutions include checking Pieces OS and client configurations, restarting Pieces OS or the client, verifying network connectivity (especially VPN for browser extensions), and monitoring connections for leaks.  The Pieces Desktop app may be a source of connection leaks.

**Related Issues:**
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 2. Pieces OS and related software connectivity and sharing issues
Users are experiencing difficulties with Pieces OS and related software (Desktop App, browser extensions) across Windows. Issues include personal domain names reverting to null.pieces.cloud, browser extensions failing to connect to Pieces OS, and inability to share snippets via links or GitHub gists.  The Pieces OS version is 12.1.1 and Desktop App version 4.3.1 in reported cases. Connectivity problems may be related to VPN usage.

**Related Issues:**
- [#817](https://github.com/pieces-app/support/issues/817): Filling out Personal Domain in Pieces OS leads to null.pieces.cloud
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.

### 3. Pieces OS connection issues across Desktop and Web extensions
Users are experiencing connection issues with Pieces OS across different platforms, including Desktop and Web extensions.  The Desktop app exhibits a connection leak, creating excessive connections to the OS server. Web extensions, specifically Chrome and Edge, are unable to connect to Pieces OS even with VPN configurations.  Potential solutions include closing the Desktop app to resolve leaks, monitoring connections, restarting the OS server, and checking VPN and proxy settings for web extensions.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 4. Pieces Pro Features Unavailable Despite Upgrade
Users report being unable to access Pieces Pro features after upgrading, encountering errors about needing Pro despite being subscribed. Issues appear across desktop app, VS Code, Sublime plugins, and web extensions.  Problems include LLM not upgrading to latest version (stuck on older versions like Sonnet 3.5) and inability to connect to Pieces OS, especially for users in regions requiring VPNs.  Suggested solutions include checking configuration files, restarting, re-login, and verifying VPN/proxy settings.

**Related Issues:**
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.

### 5. Pieces OS Connectivity Issues Across Desktop and Web Extensions
Users are experiencing difficulty connecting to Pieces OS from both desktop and web extensions.  Sharing snippets via links or GitHub gists is failing.  The web extensions, even with VPN configurations, cannot connect.  This affects Windows users and may be related to VPN usage or network configurations.

**Related Issues:**
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.
- [#812](https://github.com/pieces-app/support/issues/812): Unable to generate Workstream Summary
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and its various clients (Desktop app, VS Code, browser extensions). Investigate connection leaks and ensure compatibility with different network configurations, including VPNs.
- Address the problem of Pieces Pro features being unavailable despite users upgrading. Verify proper propagation of Pro status and LLM version updates.
- Improve communication regarding personal domain setup in Pieces OS to prevent users from encountering the "null.pieces.cloud" issue.
- Investigate and resolve issues with sharing snippets via links and GitHub gists.
- Review and update documentation and support resources to address common connectivity problems and Pro upgrade issues.

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
