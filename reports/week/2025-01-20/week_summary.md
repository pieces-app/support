# Support Ticket Report
- Generated: 2025-01-25 21:08:01
- Period: 2025-01-20 to 2025-01-25

## Summary
- **Total Tickets:** 12
- **Resolved:** 2
- **Open:** 10

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 6.25 |
| [#561](https://github.com/pieces-app/support/issues/561) | Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response | 4.80 |
| [#584](https://github.com/pieces-app/support/issues/584) | Copilot is not giving any feedback | 4.44 |
| [#597](https://github.com/pieces-app/support/issues/597) | Getting an error of Route not found error | 4.42 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 3.45 |

## Common Issues
### 1. Pieces OS Connection Issues
Users are experiencing difficulties connecting to Pieces OS after upgrading to version 11.0.4.  Problems include "Route not found" errors and "Connection refused" messages when accessing the Pieces OS endpoint.  Troubleshooting steps include verifying the correct port (39300) and providing detailed information about the user's project and environment.

**Related Issues:**
- [#597](https://github.com/pieces-app/support/issues/597): Getting an error of Route not found error
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.

### 2. Copilot Not Responding or Showing Errors
Users report Copilot not generating code, getting stuck loading, or displaying errors like "Something went wrong with processing.". This might be related to OpenAI API keys, local SSL certificates, or specific LLM models. Suggested workarounds include removing API keys, trying different LLMs (like GPT4o), updating Pieces OS, or signing in for higher rate limits. The Pieces team is actively investigating the root cause.

**Related Issues:**
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.

### 3. Pieces OS Installation and Connection Issues
Users report difficulties installing Pieces OS on Windows and Linux, encountering errors related to app installers, Windows Defender blocks, and missing dependencies. Solutions include adding Pieces OS to Defender exclusions, troubleshooting installer issues, and addressing dependency conflicts. Connection problems to Pieces OS from external projects are also frequent, requiring further investigation and potential port configuration.

**Related Issues:**
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#160](https://github.com/pieces-app/support/issues/160): suite installer always fails for me. (windows 11)
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000

### 4. Copilot UI and Response Errors
Users report large font sizes in the Pieces Copilot interface, particularly on Linux. Additionally, some users experience unresponsive Copilot behavior with a 'Something went wrong with processing' error. Suggested solutions include adjusting zoom settings, updating Pieces OS, and verifying OpenAI API keys. The development team is actively investigating these issues.

**Related Issues:**
- [#307](https://github.com/pieces-app/support/issues/307): The interface's font is too large.
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response

### 5. Pieces Suite Installation and Connection Issues
Users report difficulties installing Pieces Suite on Windows, encountering errors with App Installer and Windows Defender blocking the application. Solutions include updating App Installer, adding Pieces to Defender exclusions, and troubleshooting network connectivity issues with Pieces OS, potentially related to port changes in recent updates.

**Related Issues:**
- [#160](https://github.com/pieces-app/support/issues/160): suite installer always fails for me. (windows 11)
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000


## Recommendations
- **Prioritize connection issues:** Allocate more resources to investigate and resolve the root causes of 'Pieces OS Connection Issues' and 'Pieces OS Installation and Connection Issues', especially focusing on port configurations and compatibility with different operating systems and project setups.
- **Address Copilot errors:** Dedicate a team to tackle the recurring 'Copilot Not Responding or Showing Errors' and 'Copilot UI and Response Errors'. Investigate OpenAI API key issues, local SSL certificate conflicts, and explore alternative LLM options for improved stability.
- **Improve installation experience:** Review and refine the installation processes for both Pieces OS and Pieces Suite, addressing issues with App Installer, Windows Defender conflicts, and missing dependencies. Provide clear and updated documentation for a smoother user experience.
- **Gather more data on UI issues:** While 'Copilot UI and Response Errors' are acknowledged, actively collect more user feedback on specific UI problems, particularly large font sizes on Linux. This will help prioritize and address UI/UX improvements effectively.
- **Proactive communication:** Keep users informed about the status of known issues, especially those with ongoing investigations like Copilot errors and connection problems. Provide clear timelines for fixes and workarounds to manage expectations and reduce support ticket volume.

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
