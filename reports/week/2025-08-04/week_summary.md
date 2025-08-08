# Support Ticket Report
- Generated: 2025-08-08 13:20:51
- Period: 2025-08-04 to 2025-08-08

## Summary
- **Total Tickets:** 11
- **Resolved:** 0
- **Open:** 11

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#810](https://github.com/pieces-app/support/issues/810) | MCP Server SSE Connection Hangs - No Tools Available in Claude Code | 5.68 |
| [#816](https://github.com/pieces-app/support/issues/816) | Pieces Desktop Connection Leak | 5.36 |
| [#819](https://github.com/pieces-app/support/issues/819) | Pieces extension for Chrome & edge cannot connect to pieces OS | 4.42 |
| [#818](https://github.com/pieces-app/support/issues/818) | Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to | 4.42 |
| [#817](https://github.com/pieces-app/support/issues/817) | Filling out Personal Domain in Pieces OS leads to null.pieces.cloud | 4.42 |

## Common Issues
### 1. Pieces OS Connectivity Issues Across Multiple Platforms
Users are experiencing connectivity problems with Pieces OS across desktop, browser extensions, and VS Code integration. Issues include connection leaks with the Pieces desktop app, SSE connection hangs with Claude Code integration, and browser extension connection failures.  Suggested solutions include closing the Pieces desktop app, monitoring connections, restarting Pieces OS, and verifying VPN and proxy settings.

**Related Issues:**
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#810](https://github.com/pieces-app/support/issues/810): MCP Server SSE Connection Hangs - No Tools Available in Claude Code
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 2. Pieces OS connection issues across multiple platforms
Users are experiencing connection issues with Pieces OS on Windows, including the desktop app, VS Code extension, and browser extensions.  A connection leak was identified with the Pieces Desktop app creating excessive connections to the OS server.  Browser extensions are also failing to connect, potentially due to VPN conflicts.  Suggested solutions include closing the Pieces Desktop app, monitoring connections, restarting Pieces OS, and investigating VPN settings for browser extensions.

**Related Issues:**
- [#813](https://github.com/pieces-app/support/issues/813): Ensure Core Dependencies
- [#816](https://github.com/pieces-app/support/issues/816): Pieces Desktop Connection Leak
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS

### 3. Pieces OS and extensions connectivity and LLM upgrade issues
Users in mainland China experience connectivity problems between Pieces OS and its browser extensions, even with VPN.  Also, Pro users report difficulties upgrading to the latest LLM (Sonnet 4) despite configuration changes. Sharing snippets via link/GitHub gist is also failing.  Check VPN settings, Pieces OS version compatibility, and ensure correct LLM selection in settings. Reinstalling Pieces OS and extensions might help.

**Related Issues:**
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.

### 4. Pieces OS and related software connectivity and sharing issues
Users are experiencing difficulties with Pieces OS and related software (Desktop App, browser extensions) across Windows. Issues include personal domain resetting to null.pieces.cloud, browser extensions failing to connect to Pieces OS despite VPN configurations, and inability to share snippets via links or GitHub gists.  The Pieces OS version is 12.1.1 and Desktop App version 4.3.1 in reported cases. Further investigation into network configurations, sharing mechanisms, and potential conflicts with VPNs is required.

**Related Issues:**
- [#817](https://github.com/pieces-app/support/issues/817): Filling out Personal Domain in Pieces OS leads to null.pieces.cloud
- [#819](https://github.com/pieces-app/support/issues/819): Pieces extension for Chrome & edge cannot connect to pieces OS
- [#815](https://github.com/pieces-app/support/issues/815): Failed sharing my snippets using a link or GitHub gist.

### 5. Pieces LLM and LTM Issues
Users report issues with Pieces LTM and LLM functionality, including slow LTM queries, LTM clearing failures, incorrect LLM version reporting, and "Pro" access errors.  Problems persist across macOS and Windows 11, affecting desktop application, Pieces OS, and IDE plugins. Reinstalling Pieces and clearing LTM data sometimes temporarily resolves LTM issues.  Users suggest potential bugs related to LTM size and LLM version synchronization.

**Related Issues:**
- [#805](https://github.com/pieces-app/support/issues/805): LTM gets gunged up over time
- [#811](https://github.com/pieces-app/support/issues/811): I'm sorry. This feature requires Pieces Pro. Please upgrade your plan or change your LLM to continue.
- [#818](https://github.com/pieces-app/support/issues/818): Pro user's LLM cannot be upgraded to the latest version, even if they are chosen to


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and its extensions, especially for users in mainland China. Investigate VPN conflicts and ensure compatibility between Pieces OS and extension versions.
- Address the connection leak issue with the Pieces Desktop app to prevent excessive connections to the OS server.
- Investigate and resolve the problem with Pro users not being able to upgrade to the latest LLM (Sonnet 4) despite configuration changes.
- Look into the reported issues with LTM functionality, such as slow queries, clearing failures, and potential size limitations.
- Address the problem of personal domains resetting to null.pieces.cloud and the inability to share snippets via links or GitHub gists.
- Improve error messaging for Pro users encountering access issues despite having a valid subscription.
- Monitor and address the issue of MCP Server SSE connection hangs affecting Claude Code integration.

## Daily Reports
Here are the daily reports for this week:

- [report_132038](daily/2025-08-05/report_132038.md)
- [report_210738](daily/2025-08-05/report_210738.md)
- [report_210726](daily/2025-08-06/report_210726.md)
- [report_051516](daily/2025-08-06/report_051516.md)
- [report_132048](daily/2025-08-06/report_132048.md)
- [report_210614](daily/2025-08-07/report_210614.md)
- [report_132017](daily/2025-08-07/report_132017.md)
- [report_131916](daily/2025-08-08/report_131916.md)
