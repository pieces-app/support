# Support Ticket Report
- Generated: 2025-01-15 13:10:47
- Period: 2025-01-13 to 2025-01-15

## Summary
- **Total Tickets:** 6
- **Resolved:** 2
- **Open:** 4

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 8.40 |
| [#586](https://github.com/pieces-app/support/issues/586) | Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script | 5.50 |
| [#561](https://github.com/pieces-app/support/issues/561) | Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response | 4.48 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.48 |
| [#585](https://github.com/pieces-app/support/issues/585) | Failed to load resource: net::ERR_CONNECTION_REFUSED     http://127.0.0.1:1000/.well-known/health | 3.88 |

## Common Issues
### 1. Pieces OS connection and performance issues
Users report connection issues with Pieces OS from remote environments like Docker, often due to server listening interface changes. Workarounds include custom URLs and configuration. High RAM and CPU usage is another concern, potentially linked to Live Context. Mitigation involves disabling the feature or restarting Pieces OS while optimizations are underway.

**Related Issues:**
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#585](https://github.com/pieces-app/support/issues/585): Failed to load resource: net::ERR_CONNECTION_REFUSED     http://127.0.0.1:1000/.well-known/health
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU

### 2. Pieces performance issues and errors
Users report Pieces being unresponsive, using excessive RAM, and displaying errors. This occurs when analyzing large codebases or using features like Copilot. Proposed solutions include restarting Pieces, disabling Live Context, and waiting for updates addressing memory leaks and performance optimization.

**Related Issues:**
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU

### 3. Pieces Copilot response errors and UI issues
Users report Copilot not responding, showing error messages, or experiencing lag. Issues include invalid API keys, problems with specific models, and UI glitches in code view. Solutions involve updating Pieces, removing or registering OpenAI API keys, switching models, and waiting for upcoming releases with fixes.

**Related Issues:**
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script


## Recommendations
- **Prioritize resolution of Pieces OS connection issues:** The most active ticket (#550) highlights persistent problems with Pieces OS connecting from remote environments like Docker. Focus on resolving this issue to improve user experience, especially for developers working in containerized setups.
- **Investigate and address Pieces performance issues:** Tickets #150, #586, and others indicate concerns about high RAM usage, CPU spikes, and unresponsiveness. Allocate resources to identify memory leaks, optimize performance, and ensure Pieces can handle large codebases efficiently.
- **Improve Copilot stability and responsiveness:** Several tickets (#561, #584, #586) report Copilot errors, unresponsiveness, and UI glitches. Focus on enhancing Copilot's error handling, API key management, and overall stability to provide a seamless AI assistance experience.
- **Review and update documentation:** Ticket #550 reveals outdated documentation regarding Pieces OS default port. Conduct a thorough review and update of all documentation to ensure accuracy and clarity, reducing user confusion and support requests.
- **Enhance communication about upcoming releases:** Keep users informed about bug fixes and improvements in upcoming releases. This can be done through release notes, blog posts, or in-app notifications. Transparency about upcoming fixes can manage user expectations and reduce support inquiries.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-01-14/report_210608.md)
- [report_130931](daily/2025-01-15/report_130931.md)
