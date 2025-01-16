# Support Ticket Report
- Generated: 2025-01-16 13:11:11
- Period: 2025-01-13 to 2025-01-16

## Summary
- **Total Tickets:** 12
- **Resolved:** 4
- **Open:** 8

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 8.30 |
| [#586](https://github.com/pieces-app/support/issues/586) | Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script | 6.46 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.48 |
| [#588](https://github.com/pieces-app/support/issues/588) | Neural Code Search returns no results | 4.42 |
| [#561](https://github.com/pieces-app/support/issues/561) | Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response | 4.42 |

## Common Issues
### 1. Pieces Copilot Unresponsive or Returning Errors
Users report Pieces Copilot being unresponsive, returning errors, or experiencing lag. Issues are often related to specific LLMs like Gemini and Claude or interactions with the OpenAI API.  Suggested workarounds include updating Pieces, switching LLMs, removing OpenAI keys, and waiting for the next PiecesOS update.

**Related Issues:**
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback

### 2. PiecesOS Performance Issues
Users are experiencing high RAM/CPU usage with PiecesOS, potentially linked to internet connectivity. Short-term solutions include restarting the application and disabling Live Context. The Pieces team is actively working on optimizing performance and resolving these issues in future updates.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#456](https://github.com/pieces-app/support/issues/456): Not Working
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script

### 3. Pieces OS and VS Code Extension Connection Issues
Users are experiencing difficulties connecting the VS Code extension to Pieces OS, particularly within remote environments like WSL2 and DevContainers. This is often due to network configurations and Pieces Server's listening interface. Solutions include configuring custom URLs, enabling specific WSL2 features, and upgrading to the latest extension version that offers automatic detection and improved compatibility.

**Related Issues:**
- [#489](https://github.com/pieces-app/support/issues/489): VSCode extension issue rendering Copilot when installed via snap in WSL2
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#585](https://github.com/pieces-app/support/issues/585): Failed to load resource: net::ERR_CONNECTION_REFUSED     http://127.0.0.1:1000/.well-known/health

### 4. Neural Code Search Not Working
Users report Pieces Neural Code Search failing to return results or getting stuck connecting. Solutions involve checking for Pieces OS updates, providing logs to support, and waiting for upcoming releases addressing the issue.

**Related Issues:**
- [#588](https://github.com/pieces-app/support/issues/588): Neural Code Search returns no results
- [#456](https://github.com/pieces-app/support/issues/456): Not Working
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback

### 5. Pieces Desktop App Launch and Functionality Issues
Users are reporting various issues with the Pieces Desktop App, including failure to launch, crashes, and unresponsive features.  These issues appear across different operating systems and Pieces OS versions. Proposed solutions include checking for updates, reviewing log files, and providing system information for troubleshooting. Some issues are under investigation by the Pieces team.

**Related Issues:**
- [#582](https://github.com/pieces-app/support/issues/582): Saved Snippets Welcome Screen
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#131](https://github.com/pieces-app/support/issues/131): Unable to Launch Pieces Windows Desktop Version


## Recommendations
- **Prioritize Pieces Copilot Issues:** Allocate additional resources to investigate and resolve issues related to Pieces Copilot unresponsiveness, errors, and lag. Focus on specific LLMs like Gemini and Claude, and interactions with the OpenAI API.
- **Address PiecesOS Performance:** Investigate and optimize PiecesOS to reduce RAM/CPU usage. Explore potential links to internet connectivity and prioritize solutions for both short-term mitigation (e.g., improved guidance on disabling Live Context) and long-term resolution.
- **Improve VS Code Extension Connectivity:** Provide clearer documentation and solutions for connecting the VS Code extension to Pieces OS in remote environments (WSL2, DevContainers). Highlight the latest extension version with automatic detection and improved compatibility.
- **Investigate Neural Code Search Failures:** Allocate resources to diagnose and resolve issues with Neural Code Search not returning results or getting stuck connecting. Update documentation with potential workarounds and known issues.
- **Review Desktop App Launch Issues:** Investigate and address issues with the Pieces Desktop App failing to launch, crashing, and experiencing unresponsive features. Prioritize solutions based on operating system and Pieces OS version.
- **Gather More Data on Unclear Issues:** For issues like ticket #456 ("Not Working"), encourage users to provide more detailed descriptions, screenshots, and logs to aid in troubleshooting.
- **Proactive Communication:** Provide regular updates on known issues and expected resolution timelines through release notes, blog posts, or a dedicated status page. This will help manage user expectations and reduce support ticket volume for known problems.
- **Enhance Issue Triaging:** Improve the automatic triaging system to ensure tickets are routed to the appropriate team members more efficiently. This may involve refining the keywords and categories used for categorization.
- **Knowledge Base Expansion:** Expand the knowledge base with articles and FAQs addressing common issues and their solutions. This will empower users to self-serve and potentially reduce the number of support tickets submitted.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-01-14/report_210608.md)
- [report_210557](daily/2025-01-15/report_210557.md)
- [report_130931](daily/2025-01-15/report_130931.md)
- [report_050643](daily/2025-01-16/report_050643.md)
- [report_130918](daily/2025-01-16/report_130918.md)
