# Support Ticket Report
- Generated: 2025-01-24 21:08:34
- Period: 2025-01-20 to 2025-01-24

## Summary
- **Total Tickets:** 11
- **Resolved:** 2
- **Open:** 9

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#596](https://github.com/pieces-app/support/issues/596) | Getting Error: connect ECONNREFUSED 127.0.0.1:1000 | 6.94 |
| [#561](https://github.com/pieces-app/support/issues/561) | Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response | 5.25 |
| [#584](https://github.com/pieces-app/support/issues/584) | Copilot is not giving any feedback | 4.53 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 3.85 |
| [#594](https://github.com/pieces-app/support/issues/594) | Adding a script language to the supported languages | 3.29 |

## Common Issues
### 1. Pieces Copilot Processing Errors and UI Issues
Users report Pieces Copilot encountering processing errors, displaying 'Something went wrong' messages.  This might be related to OpenAI API keys, SSL certificates, or specific LLMs. Suggested solutions include removing API keys, switching to GPT4o, reinstalling software, or updating to the latest version. Additionally, users experience UI issues like oversized fonts and zoom functionalities not working properly, with the Pieces team actively working on solutions.

**Related Issues:**
- [#307](https://github.com/pieces-app/support/issues/307): The interface's font is too large.
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response

### 2. Pieces Copilot Processing Errors
Users report Pieces Copilot failing to process requests, displaying error messages. This issue appears across operating systems and Pieces versions. Suggested solutions include checking OpenAI API keys, switching to GPT4o model, ensuring Pieces isn't blocked by firewalls, and reinstalling Pieces software.

**Related Issues:**
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.

### 3. Pieces OS Connection Issues
Users report connection errors with Pieces OS after updating to version 11.0.4.  These errors manifest as 'Connection refused' messages when attempting to connect to the Pieces OS endpoint (127.0.0.1:1000 or 127.0.0.1:39300) and difficulties downloading local LLMs.  Suggested solutions include verifying the Pieces OS is running and the correct port is being used.  Further investigation and support logs may be required for diagnosis.

**Related Issues:**
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#591](https://github.com/pieces-app/support/issues/591): Unable to open Pieces Copilot Service

### 4. Pieces OS and App Installation and Processing Errors
Users report installation failures of Pieces OS and app on Linux and Windows due to missing dependencies, sandbox restrictions, and Windows Defender blocks. Processing errors with messages like 'Something went wrong with processing' are also prevalent, potentially linked to OpenAI API keys and SSL certificates. Proposed solutions include dependency installation, software updates, Windows Defender configuration, and switching to alternative language models.

**Related Issues:**
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#160](https://github.com/pieces-app/support/issues/160): suite installer always fails for me. (windows 11)
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response

### 5. Pieces OS Windows App Errors
Users report errors with the Pieces OS Windows app, including a non-dismissable overlay message, connection refused errors, and issues after upgrading to version 11.0.0. Suggested solutions include allowing access to Pieces Qdrant Server, checking Pieces OS and Desktop App installation, and ensuring the correct port (39300) is being used.

**Related Issues:**
- [#92](https://github.com/pieces-app/support/issues/92): ANNOUNCEMENT: Pieces Qdrant Server pop up in Pieces OS 8.0.0 Windows
- [#590](https://github.com/pieces-app/support/issues/590): Non-dismissable overlay message.
- [#596](https://github.com/pieces-app/support/issues/596): Getting Error: connect ECONNREFUSED 127.0.0.1:1000


## Recommendations
- "Investigate and address the root cause of Pieces Copilot processing errors, including OpenAI API key issues, SSL certificate problems, and potential conflicts with firewalls or antivirus software."
- "Prioritize resolving connection issues with Pieces OS after updating to version 11.0.4, specifically the 'Connection refused' errors and difficulties downloading local LLMs."
- "Provide clear and updated documentation on Pieces OS and app installation, addressing common issues such as missing dependencies, sandbox restrictions, and Windows Defender blocks."
- "Improve the user experience for Pieces OS on Windows by addressing the non-dismissable overlay message and ensuring compatibility with different Windows versions."
- "Consider implementing a more robust error handling and reporting mechanism for Pieces Copilot and Pieces OS to better diagnose and resolve issues."

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
