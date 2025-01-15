# Support Ticket Report
- Generated: 2025-01-15 05:07:25
- Period: 2025-01-13 to 2025-01-15

## Summary
- **Total Tickets:** 6
- **Resolved:** 2
- **Open:** 4

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 8.40 |
| [#586](https://github.com/pieces-app/support/issues/586) | Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script | 4.50 |
| [#585](https://github.com/pieces-app/support/issues/585) | Failed to load resource: net::ERR_CONNECTION_REFUSED     http://127.0.0.1:1000/.well-known/health | 4.50 |
| [#561](https://github.com/pieces-app/support/issues/561) | Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response | 4.48 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.48 |

## Common Issues
### 1. Connection Issues with Pieces OS
Users are experiencing difficulties connecting to Pieces OS from various platforms, including VS Code remote environments and web extensions. This is often due to changes in Pieces OS network configurations or issues with API calls. Solutions include updating to the latest Pieces OS and extension versions, configuring network settings, and using alternative connection methods.

**Related Issues:**
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#585](https://github.com/pieces-app/support/issues/585): Failed to load resource: net::ERR_CONNECTION_REFUSED     http://127.0.0.1:1000/.well-known/health
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response

### 2. Copilot and plugin unresponsiveness, errors
Users report Copilot unresponsiveness, errors, and processing issues across platforms. Solutions include using specific PiecesOS versions (11.0.3, 11.0.4), signing into Pieces, avoiding OpenAI API keys, and waiting for bug fixes. Issues with context, line numbers, and scrolling are being investigated.

**Related Issues:**
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script

### 3. PiecesOS Performance Issues
Users report high RAM/CPU usage, especially with Live Context. Short-term fix: restart PiecesOS. Long-term: devs optimizing resource consumption, suggest turning off Live Context.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback


## Recommendations
- **Prioritize Connection Issues:** Allocate additional resources to diagnose and resolve connection issues with Pieces OS, particularly from VS Code remote environments and web extensions. Update documentation with clear troubleshooting steps.
- **Address Copilot Unresponsiveness:** Investigate and address the root causes of Copilot unresponsiveness and errors across platforms. Provide temporary workarounds to users while a permanent fix is being developed.
- **Optimize PiecesOS Resource Consumption:** Continue optimizing PiecesOS to reduce RAM/CPU usage, especially for Live Context. Explore options for user-configurable performance settings.
- **Improve Communication on Known Issues:** Proactively communicate known issues and workarounds to users through release notes, blog posts, and social media updates.
- **Enhance Ticket Triaging:** Implement a more robust ticket triaging system to automatically categorize and prioritize issues based on severity and impact. 

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-01-14/report_210608.md)
