# Support Ticket Report
- Generated: 2024-12-24 21:07:07
- Period: 2024-12-23 to 2024-12-24

## Summary
- **Total Tickets:** 6
- **Resolved:** 1
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#540](https://github.com/pieces-app/support/issues/540) | LTM doesn't work; the copilot model by defaults not saved | 7.33 |
| [#549](https://github.com/pieces-app/support/issues/549) | It's laggy and heavier, sometimes not responding in VSCode extension since major update to OS v11.0.0 | 4.50 |
| [#553](https://github.com/pieces-app/support/issues/553) | Can't turn on Long-Term Memory | 4.42 |
| [#269](https://github.com/pieces-app/support/issues/269) | Can't connect from dev container | 4.05 |
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 3.50 |

## Common Issues
### 1. Long-Term Memory (LTM) Engine Activation Issues
Users are experiencing difficulties enabling the Long-Term Memory (LTM) Engine.  The issue manifests as either an inability to activate the engine or the LTM feature not functioning as expected despite appearing to be enabled.  Proposed solutions include checking for software updates, ensuring user authentication, and providing detailed logs to the support team for further analysis.

**Related Issues:**
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved
- [#535](https://github.com/pieces-app/support/issues/535): Bug: Claude 3.5 Sonnet Copilot response issues "I'm Sorry something went wrong with the processing..."

### 2. VS Code Extension Connection Issues
Users are experiencing difficulties connecting the VS Code extension to Pieces OS, particularly within remote environments like Docker containers. This is often resolved by manually setting the `pieces.customUrl` to the appropriate address, such as `http://host.docker.internal:1000`. The Pieces team is actively working on improving automatic detection and support for remote environments in future releases.

**Related Issues:**
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#269](https://github.com/pieces-app/support/issues/269): Can't connect from dev container
- [#549](https://github.com/pieces-app/support/issues/549): It's laggy and heavier, sometimes not responding in VSCode extension since major update to OS v11.0.0


## Recommendations
- **Prioritize LTM Engine Issues:** Allocate additional resources to investigate and resolve the recurring issue of users struggling to enable or utilize the Long-Term Memory (LTM) Engine. This issue has a high frequency and directly impacts a key feature of the Pieces platform.
- **Improve VS Code Extension Connectivity:** Address the challenges users face when connecting the VS Code extension, especially within remote environments like Docker containers. Enhance automatic detection mechanisms and provide clearer guidance on manual configuration options. 
- **Proactive Communication:**  For known issues like the LTM Engine and VS Code connectivity, proactively communicate workarounds or temporary solutions to users through in-app notifications, release notes, or support articles. This can help mitigate user frustration while waiting for permanent fixes.
- **Gather Detailed User Feedback:**  For issues with lower activity levels but potential impact, like performance concerns, reach out to affected users to gather more detailed feedback and logs. This will aid in replicating and diagnosing the root cause.
- **Enhance Documentation:** Ensure that the documentation, particularly regarding remote environments and troubleshooting connection issues, is up-to-date, comprehensive, and easily accessible within the application and on the Pieces website. 

## Daily Reports
Here are the daily reports for this week:

- [report_210555](daily/2024-12-24/report_210555.md)
