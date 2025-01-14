# Support Ticket Report
- Generated: 2025-01-14 21:07:42
- Period: 2025-01-13 to 2025-01-14

## Summary
- **Total Tickets:** 6
- **Resolved:** 2
- **Open:** 4

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 8.40 |
| [#561](https://github.com/pieces-app/support/issues/561) | Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response | 4.55 |
| [#586](https://github.com/pieces-app/support/issues/586) | Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script | 4.50 |
| [#585](https://github.com/pieces-app/support/issues/585) | Failed to load resource: net::ERR_CONNECTION_REFUSED     http://127.0.0.1:1000/.well-known/health | 4.50 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.48 |

## Common Issues
### 1. Connection issues with Pieces OS from remote environments
Users are experiencing connection issues with Pieces OS from remote environments, such as Docker containers and VS Code remote instances. This is due to changes in the default listening interface of Pieces Server. Solutions include patching the VS Code plugin, creating custom DNS entries, and setting custom URLs in the plugin settings.

**Related Issues:**
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#585](https://github.com/pieces-app/support/issues/585): Failed to load resource: net::ERR_CONNECTION_REFUSED     http://127.0.0.1:1000/.well-known/health
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response

### 2. PiecesOS High Resource Usage
Users report PiecesOS causing high RAM/CPU usage, sometimes reaching 100%, leading to system slowdowns and unresponsiveness. This issue might be related to internet connectivity or specific features like Live Context. Temporary solutions include restarting PiecesOS or disabling resource-intensive features. The Pieces team is actively investigating and optimizing the software to resolve these performance issues.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script
- [#585](https://github.com/pieces-app/support/issues/585): Failed to load resource: net::ERR_CONNECTION_REFUSED     http://127.0.0.1:1000/.well-known/health

### 3. Copilot Errors and Unresponsiveness
Users report Copilot errors, unresponsiveness, and context issues across platforms. Suggested solutions include updating Pieces OS, removing OpenAI keys, switching to GPT4o model, and waiting for upcoming patches addressing specific bugs like line number wrapping and context integration.

**Related Issues:**
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script


## Recommendations
- Investigate and address the root cause of connection issues with Pieces OS from remote environments, such as Docker containers and VS Code remote instances.
- Optimize PiecesOS to reduce its RAM/CPU usage and address system slowdowns and unresponsiveness reported by users.
- Investigate and resolve Copilot errors, unresponsiveness, and context issues across platforms, including those related to OpenAI keys, GPT models, and specific bugs like line number wrapping.
- Prioritize resolution of high-activity tickets, particularly #550, #561, #586, and #585, to address user concerns and improve satisfaction.
- Consider creating dedicated documentation or FAQs addressing common issues like remote connections and high resource usage to provide self-service support options for users.
- Monitor the effectiveness of implemented solutions and communicate updates to users on bug fixes and upcoming releases to manage expectations and improve transparency.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-01-14/report_210608.md)
