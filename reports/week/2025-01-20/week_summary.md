# Support Ticket Report
- Generated: 2025-01-26 13:09:36
- Period: 2025-01-20 to 2025-01-26

## Summary
- **Total Tickets:** 14
- **Resolved:** 2
- **Open:** 12

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 6.25 |
| [#561](https://github.com/pieces-app/support/issues/561) | Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response | 4.76 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.69 |
| [#598](https://github.com/pieces-app/support/issues/598) | Ensure core dependencies need help asap | 4.42 |
| [#597](https://github.com/pieces-app/support/issues/597) | Getting an error of Route not found error | 4.42 |

## Common Issues
### 1. Pieces OS Connection Issues
Users are experiencing "Route not found" or "Connection refused" errors when trying to connect to Pieces OS on ports 39300 or 1000. This might be due to incorrect port configuration or firewall restrictions. Ensure Pieces OS is running, the correct port is used in the application, and check firewall settings to allow connections.

**Related Issues:**
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response

### 2. Pieces Desktop Application Errors and Bugs
Users are reporting various errors with the Pieces desktop app, including update issues, non-dismissable overlays, and Copilot processing errors.  Suggested solutions include restarting the application, checking for updates, switching language models, removing OpenAI API keys, and reinstalling the application.

**Related Issues:**
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response

### 3. Pieces OS installation and access issues
Users report failures installing Ollama on Linux due to Pieces OS's sandbox environment, requiring manual installation. Others experience repeated reloads during updates or encounter "Route not found" errors when accessing Pieces OS endpoints. Solutions involve fixing sandbox permissions, addressing update issues, and resolving endpoint access problems.

**Related Issues:**
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error

### 4. PiecesOS Performance and Usability Issues
Users report high RAM/CPU usage, errors with specific language models, and UI/UX problems like large font size. Solutions include switching language models, optimizing memory, and troubleshooting with developers. Some issues persist despite updates and workarounds.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#307](https://github.com/pieces-app/support/issues/307): The interface's font is too large.

### 5. Pieces OS on Windows: Connectivity and Installation Issues
Users report issues with Pieces OS on Windows, including connectivity problems with Qdrant server and unclear installation instructions. Solutions involve allowing Qdrant access or waiting for its deprecation in future releases. Connectivity issues persist with the new port (39300) in version 11.0.0, requiring further investigation.

**Related Issues:**
- [#92](https://github.com/pieces-app/support/issues/92): ANNOUNCEMENT: Pieces Qdrant Server pop up in Pieces OS 8.0.0 Windows
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000


## Recommendations
- **Prioritize connectivity issues:** Focus on resolving "Route not found" and "Connection refused" errors related to Pieces OS, as they represent a significant portion of user complaints.
- **Improve Pieces Desktop Application stability:** Address errors with updates, non-dismissable overlays, and Copilot processing errors to enhance the user experience.
- **Provide clearer Pieces OS installation instructions:** Offer detailed guidance for installing Pieces OS, particularly on Windows, addressing issues with Qdrant server and the new port (39300).
- **Investigate and optimize PiecesOS resource usage:** Address concerns about high RAM/CPU usage, potentially by optimizing memory management and troubleshooting issues with specific language models.
- **Consider sandbox permissions for Pieces OS on Linux:** Review the sandbox environment to allow for smoother installation of third-party tools like Ollama, or provide clear instructions for manual installation.

## Daily Reports
Here are the daily reports for this week:

- [report_210557](daily/2025-01-21/report_210557.md)
- [report_210551](daily/2025-01-22/report_210551.md)
- [report_131004](daily/2025-01-22/report_131004.md)
- [report_210614](daily/2025-01-23/report_210614.md)
- [report_130954](daily/2025-01-23/report_130954.md)
- [report_050647](daily/2025-01-23/report_050647.md)
- [report_130917](daily/2025-01-24/report_130917.md)
- [report_210607](daily/2025-01-24/report_210607.md)
- [report_050611](daily/2025-01-25/report_050611.md)
- [report_130736](daily/2025-01-25/report_130736.md)
- [report_210553](daily/2025-01-25/report_210553.md)
- [report_130728](daily/2025-01-26/report_130728.md)
