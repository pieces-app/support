# Support Ticket Report
- Generated: 2024-12-19 13:15:28
- Period: 2024-12-16 to 2024-12-19

## Summary
- **Total Tickets:** 18
- **Resolved:** 5
- **Open:** 13

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#471](https://github.com/pieces-app/support/issues/471) | I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app | 18.31 |
| [#526](https://github.com/pieces-app/support/issues/526) | Can't turn on long term memory engine | 8.36 |
| [#530](https://github.com/pieces-app/support/issues/530) | Vscode and PHPStorm plugins stopped working after Pieces OS update | 7.75 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 6.62 |
| [#527](https://github.com/pieces-app/support/issues/527) | Manually downloading a LLM | 6.38 |

## Common Issues
### 1. Pieces Copilot Error: Processing Failure
Users are experiencing an error message "I'm sorry. Something went wrong with processing." when using Pieces Copilot. This is likely due to rate limiting or conversation flow issues. Solutions include authenticating, upgrading to the latest Pieces OS version, and contacting support if the issue persists.

**Related Issues:**
- [#487](https://github.com/pieces-app/support/issues/487): "This message exceeded the context limit for this LLM. Please select a different LLM and try again, or shorten your prompt." issue
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'

### 2. PiecesOS Connection Issues and Rate Limiting
Users report frequent connection issues between the Pieces Desktop App and PiecesOS, especially after updates. This disrupts workflows and prevents access to features. Solutions include upgrading to the latest PiecesOS version, contacting support, and providing system snapshots for diagnosis. Rate limiting errors were also common but addressed through authentication and increased limits for logged-in users.

**Related Issues:**
- [#539](https://github.com/pieces-app/support/issues/539): Pieces Desktop App - Lost Connection to PiecesOS
- [#531](https://github.com/pieces-app/support/issues/531): Pieces Desktop App - Lost Connection to PiecesOS
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app

### 3. Copilot Processing Error and GPT Model Limitations
Users are experiencing a "Something went wrong with processing" error message within the Copilot module, particularly with Claude 3.5 Sonnet and GPT models other than GPT-4o Mini. Suggested workarounds include switching to OpenAI or Gemini models, signing into the Pieces Ecosystem for higher rate limits, and upgrading to PiecesOS 11.0.0. The Pieces team is actively addressing the issue and recommends contacting support for persistent problems.

**Related Issues:**
- [#535](https://github.com/pieces-app/support/issues/535): Bug: Claude 3.5 Sonnet Copilot response issues "I'm Sorry something went wrong with the processing..."
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app

### 4. Pieces OS 11.0.0 breaks plugins connection
After updating to Pieces OS 11.0.0, users report that plugins for VS Code and JetBrains IDEs (like PHPStorm) stop working. The issue seems to be related to port conflicts or incompatibility with the updated Pieces OS.  Proposed solutions include waiting for plugin updates, ensuring Pieces OS is running on the correct port, and checking for conflicts with other applications.

**Related Issues:**
- [#530](https://github.com/pieces-app/support/issues/530): Vscode and PHPStorm plugins stopped working after Pieces OS update
- [#534](https://github.com/pieces-app/support/issues/534): Pieces os says: port already in use if i start phpstorm with pieces plugin
- [#531](https://github.com/pieces-app/support/issues/531): Pieces Desktop App - Lost Connection to PiecesOS

### 5. Ollama installation and model import failures
Users report failures installing Ollama on Linux and importing manually downloaded models. Proposed solutions include installing 'curl' as a dependency for Ollama and addressing partial download interruptions. The Pieces team is investigating and working on improved LLM infrastructure.

**Related Issues:**
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#527](https://github.com/pieces-app/support/issues/527): Manually downloading a LLM
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins


## Recommendations
- **Prioritize resolving 'Pieces Copilot Error: Processing Failure'**: This issue has the highest frequency and is linked to rate limiting, authentication issues, and potential bugs. Resolving this will significantly impact user experience.
- **Improve communication around PiecesOS updates**: Issues related to connection problems, plugin compatibility, and Ollama installation spiked after the 11.0.0 update. Clear communication about breaking changes and required actions can mitigate user frustration.
- **Enhance error messaging and troubleshooting**: Vague error messages like 'Something went wrong with processing' create confusion. Provide specific error codes, explanations, and troubleshooting steps.
- **Develop a comprehensive guide for local LLM installation**: Guide users through manually downloading, verifying, and configuring local LLMs, addressing potential issues like partial downloads and database updates.
- **Investigate and address plugin compatibility issues**: Ensure plugins for VS Code, JetBrains IDEs, and others are thoroughly tested and compatible with new PiecesOS versions. Provide clear guidance on plugin updates and compatibility.

## Daily Reports
Here are the daily reports for this week:

- [report_210616](daily/2024-12-17/report_210616.md)
- [report_131026](daily/2024-12-17/report_131026.md)
- [report_131144](daily/2024-12-18/report_131144.md)
- [report_210617](daily/2024-12-18/report_210617.md)
- [report_131158](daily/2024-12-19/report_131158.md)
- [report_050715](daily/2024-12-19/report_050715.md)
