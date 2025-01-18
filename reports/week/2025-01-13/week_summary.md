# Support Ticket Report
- Generated: 2025-01-18 05:08:22
- Period: 2025-01-13 to 2025-01-18

## Summary
- **Total Tickets:** 15
- **Resolved:** 5
- **Open:** 10

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 7.70 |
| [#590](https://github.com/pieces-app/support/issues/590) | Non-dismissable overlay message. | 5.68 |
| [#586](https://github.com/pieces-app/support/issues/586) | Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script | 4.63 |
| [#589](https://github.com/pieces-app/support/issues/589) | Conversation titles save too eagerly while editing | 4.50 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.23 |

## Common Issues
### 1. Pieces OS Connectivity Issues in Remote Environments
Users are experiencing difficulties connecting Pieces OS to IDE extensions (VSCode, JetBrains) within remote environments like WSL2 and Docker.  This seems related to network configurations and Pieces OS's security features.  Proposed solutions involve custom URL settings, DNS configurations, and potential server-side modifications.  Pieces team is actively investigating and providing workarounds.

**Related Issues:**
- [#489](https://github.com/pieces-app/support/issues/489): VSCode extension issue rendering Copilot when installed via snap in WSL2
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#421](https://github.com/pieces-app/support/issues/421): Pieces OS does not connect to Jetbrains plugin

### 2. Pieces Copilot Unresponsive or Returning Errors
Users report Pieces Copilot becoming unresponsive or returning errors like "I'm sorry. Something went wrong..."  Issues are often linked to specific Pieces OS versions, large files, or problems with OpenAI API keys. Solutions include updating Pieces OS, removing OpenAI keys, or switching to a different LLM model like GPT4o.

**Related Issues:**
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback

### 3. Pieces Desktop App Launch and Connection Issues
Users report Pieces Desktop App failing to launch, remaining stuck on connecting, or displaying a non-dismissable overlay.  This occurs across Windows versions and Pieces OS versions. Proposed solutions include checking for updates, reinstalling the app, and contacting support with log files from Documents > com.pieces.os.

**Related Issues:**
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#131](https://github.com/pieces-app/support/issues/131): Unable to Launch Pieces Windows Desktop Version
- [#456](https://github.com/pieces-app/support/issues/456): Not Working

### 4. Pieces Desktop App Bugs and Fixes
Multiple bug reports describe issues with the Pieces Desktop App on macOS, including eager saving of conversation titles, repetitive welcome messages, and unresponsive Copilot. Solutions involve patches and updates in upcoming releases (PiecesOS 11.0.4, next Desktop App release). Users are advised to update to the latest versions for fixes.

**Related Issues:**
- [#589](https://github.com/pieces-app/support/issues/589): Conversation titles save too eagerly while editing
- [#582](https://github.com/pieces-app/support/issues/582): Saved Snippets Welcome Screen
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback

### 5. PiecesOS Performance Issues
Users report high RAM/CPU usage, and launch failures with PiecesOS.  Suggested solutions include restarting PiecesOS, using the "Optimize Memory" feature, and contacting support with log files for further assistance.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#131](https://github.com/pieces-app/support/issues/131): Unable to Launch Pieces Windows Desktop Version
- [#456](https://github.com/pieces-app/support/issues/456): Not Working


## Recommendations
- **Prioritize Connectivity Issues:** Allocate additional resources to investigate and resolve the recurring issue of "Pieces OS Connectivity Issues in Remote Environments." This will directly impact users facing challenges with IDE extensions in WSL2 and Docker environments.
- **Improve Copilot Stability:** Address the root causes behind "Pieces Copilot Unresponsive or Returning Errors." Focus on enhancing error handling, optimizing performance for large files, and providing clear guidance on OpenAI API key management.
- **Enhance Desktop App Stability:** Investigate and resolve the issues related to "Pieces Desktop App Launch and Connection Issues" and "Pieces Desktop App Bugs and Fixes." This includes addressing launch failures, non-dismissable overlays, and other reported bugs on both Windows and macOS.
- **Monitor PiecesOS Performance:** Continue monitoring and optimizing "PiecesOS Performance Issues," such as high RAM/CPU usage. Encourage users to utilize the "Optimize Memory" feature and provide support for persistent cases.
- **Proactive Communication:**  For known issues like the Copilot and Desktop App bugs, proactively communicate the expected resolution timelines (e.g., PiecesOS 11.0.4, next Desktop App release) through release notes, in-app notifications, and support channels to keep users informed.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-01-14/report_210608.md)
- [report_210557](daily/2025-01-15/report_210557.md)
- [report_130931](daily/2025-01-15/report_130931.md)
- [report_210557](daily/2025-01-16/report_210557.md)
- [report_050643](daily/2025-01-16/report_050643.md)
- [report_130918](daily/2025-01-16/report_130918.md)
- [report_130901](daily/2025-01-17/report_130901.md)
- [report_210610](daily/2025-01-17/report_210610.md)
- [report_050629](daily/2025-01-17/report_050629.md)
