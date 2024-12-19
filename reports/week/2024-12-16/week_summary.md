# Support Ticket Report
- Generated: 2024-12-19 05:10:02
- Period: 2024-12-16 to 2024-12-19

## Summary
- **Total Tickets:** 17
- **Resolved:** 5
- **Open:** 12

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#471](https://github.com/pieces-app/support/issues/471) | I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app | 18.31 |
| [#526](https://github.com/pieces-app/support/issues/526) | Can't turn on long term memory engine | 7.89 |
| [#530](https://github.com/pieces-app/support/issues/530) | Vscode and PHPStorm plugins stopped working after Pieces OS update | 7.75 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 6.62 |
| [#527](https://github.com/pieces-app/support/issues/527) | Manually downloading a LLM | 6.38 |

## Common Issues
### 1. Copilot Processing Error in Pieces OS
Users are experiencing a "Something went wrong with processing" error when using the Copilot feature in Pieces OS. This is likely due to rate limiting. Solutions include authenticating with Pieces for a higher rate limit, waiting and trying again later, or contacting Pieces support. The issue has been addressed in PieceOS version 11.0.0 with increased rate limits and improved error messages.

**Related Issues:**
- [#535](https://github.com/pieces-app/support/issues/535): Bug: Claude 3.5 Sonnet Copilot response issues "I'm Sorry something went wrong with the processing..."
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app

### 2. Claude 3.5 Sonnet Copilot Errors
Users are experiencing errors and empty responses when using the Claude 3.5 Sonnet model within the Copilot module. This is likely due to rate limiting or issues on the model provider's side.  Solutions include switching to OpenAI or Gemini models, signing into Pieces for a higher rate limit, or waiting for a fix from the Pieces team.

**Related Issues:**
- [#487](https://github.com/pieces-app/support/issues/487): "This message exceeded the context limit for this LLM. Please select a different LLM and try again, or shorten your prompt." issue
- [#535](https://github.com/pieces-app/support/issues/535): Bug: Claude 3.5 Sonnet Copilot response issues "I'm Sorry something went wrong with the processing..."
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app

### 3. Ollama installation and LLM download failures
Users on Linux experience difficulties installing Ollama and downloading LLMs, particularly on unstable networks. Manual LLM downloads require a "download_success.txt" workaround. A Pieces update (v11.0.0) claims to address these issues with improved Ollama infrastructure and download functionality. Users are advised to update all plugins.

**Related Issues:**
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#527](https://github.com/pieces-app/support/issues/527): Manually downloading a LLM
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins

### 4. Pieces OS 11.0.0 breaks plugins
Pieces OS 11.0.0 update causes plugin incompatibility issues with VS Code, PHPStorm, and potentially others. Users experience port conflicts or are prompted to update plugins to incompatible versions. The solution involves updating all Pieces plugins to versions compatible with Pieces OS 11.0.0.

**Related Issues:**
- [#530](https://github.com/pieces-app/support/issues/530): Vscode and PHPStorm plugins stopped working after Pieces OS update
- [#534](https://github.com/pieces-app/support/issues/534): Pieces os says: port already in use if i start phpstorm with pieces plugin
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins

### 5. Long-Term Memory Engine activation issues on Pieces OS
Users reported problems enabling the Long-Term Memory Engine on Pieces OS across different operating systems. The issue manifested as the engine failing to activate despite toggling the option. Solutions included updating Pieces OS to version 11.0.0 or higher, which addressed the bug for most users. Some users required further troubleshooting for specific configurations or encountered related issues with other features.

**Related Issues:**
- [#442](https://github.com/pieces-app/support/issues/442): Can't turn on Long-Term Memory Engine
- [#526](https://github.com/pieces-app/support/issues/526): Can't turn on long term memory engine
- [#458](https://github.com/pieces-app/support/issues/458): Subject: Live Context Feature Not Working


## Recommendations
- **Prioritize resolution of Ollama installation and LLM download issues:** This recurring problem on Linux, particularly on unstable networks, requires immediate attention. Focus on simplifying the installation process and improving download stability. Consider implementing resumable downloads to address interruptions.
- **Investigate and address Claude 3.5 Sonnet Copilot errors:** The frequent errors and empty responses with this model are impacting users. Determine the root cause, whether it's rate limiting or issues on the model provider's side, and implement appropriate solutions.
- **Ensure seamless plugin compatibility with Pieces OS updates:** The recent update to Pieces OS 11.0.0 caused plugin issues, highlighting the need for robust backward compatibility testing. Implement a comprehensive testing process for all plugins with each OS update to prevent similar issues in the future.
- **Improve communication about breaking changes:**  Clearly announce breaking changes like the Pieces OS 11.0.0 update and provide users with timely and detailed information about required plugin updates. This will minimize disruption and user frustration.
- **Continue monitoring and addressing Long-Term Memory Engine activation issues:** While the issue seems resolved for most users after the 11.0.0 update, remain vigilant for any recurring problems or specific configurations that might still be affected. 

## Daily Reports
Here are the daily reports for this week:

- [report_210616](daily/2024-12-17/report_210616.md)
- [report_131026](daily/2024-12-17/report_131026.md)
- [report_131144](daily/2024-12-18/report_131144.md)
- [report_210617](daily/2024-12-18/report_210617.md)
- [report_050715](daily/2024-12-19/report_050715.md)
