# Support Ticket Report
- Generated: 2025-02-01 13:09:06
- Period: 2025-01-27 to 2025-02-01

## Summary
- **Total Tickets:** 12
- **Resolved:** 6
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 5.57 |
| [#606](https://github.com/pieces-app/support/issues/606) | LTM cannot see code inside a sandbox in the browser | 5.50 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 5.04 |
| [#605](https://github.com/pieces-app/support/issues/605) | Ollama failed to install in pieces | 4.74 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.68 |

## Common Issues
### 1. Ollama Installation Failures in Pieces
Users are experiencing issues installing and using Ollama within the Pieces desktop application across Linux and Windows.  Problems include installation failures, model loading errors, and dependency conflicts.  Solutions involve ensuring curl is available in sandboxed environments and addressing potential issues with Pieces OS installation or configuration.

**Related Issues:**
- [#605](https://github.com/pieces-app/support/issues/605): Ollama failed to install in pieces
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 2. Pieces OS Connectivity Issues on Port 39300
Multiple users report "Connection refused" or "Route not found" errors when accessing Pieces OS on port 39300.  This is often due to Pieces OS using a dynamic port range. Solutions include verifying the actual port in use (check `.port.txt` file) or contacting Pieces support for assistance.

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 3. PiecesOS High Resource Usage and Update Issues
Users report high RAM/CPU usage by PiecesOS, potentially linked to internet connectivity or database operations. Version 11.1.0 aims to mitigate this. Additionally, users experience repeated update prompts, particularly with the Microsoft Store version. Workarounds include restarting PiecesOS or updating through the store.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap

### 4. Pieces Startup and Update Issues on Windows
Users are experiencing issues with Pieces Desktop and PiecesOS launching and updating on Windows. These issues include non-dismissable overlay messages, repeated update prompts, and failures to launch. Suggested solutions involve checking startup configurations, updating through the Microsoft Store, and reinstalling the applications.

**Related Issues:**
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#598](https://github.com/pieces-app/support/issues/598): Ensure core dependencies need help asap
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug

### 5. PiecesOS installation and functionality errors
Users report issues with PiecesOS installation, launching, and Copilot integration. Problems include failure to launch, Copilot inaccessibility, and sandbox content visibility. Solutions involve reinstalling, waiting for stability updates, and seeking support for troubleshooting. Users also provide feedback on response time and accuracy compared to other AI tools.

**Related Issues:**
- [#606](https://github.com/pieces-app/support/issues/606): LTM cannot see code inside a sandbox in the browser
- [#604](https://github.com/pieces-app/support/issues/604): Unable to open Pieces Copilot Service
- [#602](https://github.com/pieces-app/support/issues/602): Ensure core dependencies  Retry Step , I need help #bug


## Recommendations
- **Prioritize Ollama Integration Issues:** Allocate resources to address the Ollama installation and functionality problems on both Windows and Linux. This includes investigating sandbox environments, dependency conflicts, and model loading errors.
- **Investigate and Resolve Pieces OS Connectivity Issues:** Address the root cause of the "Connection refused" errors on port 39300.  Explore solutions like consistent port usage or providing clear instructions for users to find the dynamic port.
- **Improve Pieces OS Resource Management:** Continue optimizing Pieces OS to reduce RAM/CPU usage, particularly in relation to internet connectivity and database operations. Monitor the effectiveness of version 11.1.0 in addressing this issue.
- **Address Windows Startup and Update Issues:** Focus on resolving the problems with Pieces Desktop and PiecesOS launching and updating on Windows, including the non-dismissable overlay messages and repeated update prompts. Review startup configurations and update mechanisms.
- **Enhance Communication on Dynamic Port Usage:** Clearly document and communicate that Pieces OS uses a dynamic port range. Provide instructions for users on how to identify the currently used port, such as checking the `.port.txt` file.
- **Improve Error Messages and Troubleshooting:** Provide more informative error messages to users, particularly for issues like Ollama installation failures and Pieces OS connectivity problems. This will help users self-diagnose and potentially resolve issues without needing to contact support.
- **Gather More Detailed User Data:** Collect additional information about user environments, Pieces OS versions, and specific error logs. This data will aid in faster identification and resolution of recurring issues.
- **Consider a Dedicated Support Portal:** Explore creating a dedicated support portal with FAQs, troubleshooting guides, and a knowledge base. This can help users find solutions to common problems independently.

## Daily Reports
Here are the daily reports for this week:

- [report_050642](daily/2025-01-28/report_050642.md)
- [report_130931](daily/2025-01-28/report_130931.md)
- [report_210619](daily/2025-01-28/report_210619.md)
- [report_210606](daily/2025-01-29/report_210606.md)
- [report_050716](daily/2025-01-30/report_050716.md)
- [report_210553](daily/2025-01-30/report_210553.md)
- [report_130914](daily/2025-01-30/report_130914.md)
- [report_210606](daily/2025-01-31/report_210606.md)
- [report_130902](daily/2025-01-31/report_130902.md)
