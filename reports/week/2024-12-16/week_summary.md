# Support Ticket Report
- Generated: 2024-12-21 21:10:20
- Period: 2024-12-16 to 2024-12-21

## Summary
- **Total Tickets:** 27
- **Resolved:** 12
- **Open:** 15

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#471](https://github.com/pieces-app/support/issues/471) | I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app | 17.53 |
| [#539](https://github.com/pieces-app/support/issues/539) | Pieces Desktop App - Lost Connection to PiecesOS | 11.41 |
| [#536](https://github.com/pieces-app/support/issues/536) | Bug: Adding Folder as context (on Windows) crashes PiecesOS within the Copilot | 10.83 |
| [#531](https://github.com/pieces-app/support/issues/531) | Pieces Desktop App - Lost Connection to PiecesOS | 9.80 |
| [#546](https://github.com/pieces-app/support/issues/546) | Unable to open Pieces Core Services | 8.20 |

## Common Issues
### 1. Claude 3.5 Sonnet Copilot Response Errors
Users encounter errors or empty responses when using the Claude 3.5 Sonnet LLM in the Copilot module. This could be due to message length limits, content filtering, or issues with Vertex AI AOT. Solutions include switching to a different LLM, signing into Pieces for higher rate limits, or waiting for a fix in a newer version.

**Related Issues:**
- [#487](https://github.com/pieces-app/support/issues/487): "This message exceeded the context limit for this LLM. Please select a different LLM and try again, or shorten your prompt." issue
- [#535](https://github.com/pieces-app/support/issues/535): Bug: Claude 3.5 Sonnet Copilot response issues "I'm Sorry something went wrong with the processing..."
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app

### 2. Copilot Processing Error in Pieces OS
Users across Pieces OS versions encounter "Something went wrong with processing" error, primarily with Claude 3.5 Sonnet Copilot.  Issue linked to rate limiting, resolved by authentication or upgrading to Pieces OS 11.0.0.  Users advised to contact support if the problem persists.

**Related Issues:**
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app
- [#535](https://github.com/pieces-app/support/issues/535): Bug: Claude 3.5 Sonnet Copilot response issues "I'm Sorry something went wrong with the processing..."

### 3. PiecesOS Crashes on Windows - File/Folder Context
Users on Windows experience PiecesOS crashes when adding folders as context, particularly with Typescript projects. This issue was linked to specific OS builds and app installer distribution. Solutions included patches (v11.0.2) and reinstallation using different methods.

**Related Issues:**
- [#536](https://github.com/pieces-app/support/issues/536): Bug: Adding Folder as context (on Windows) crashes PiecesOS within the Copilot
- [#507](https://github.com/pieces-app/support/issues/507): Pieces for Developers app keeps crashing continuously on attempts to upload files and folder and needs restart on my windows 11 laptop
- [#546](https://github.com/pieces-app/support/issues/546): Unable to open Pieces Core Services

### 4. Pieces OS Update and Compatibility Issues
Users reported various issues after updating Pieces OS, including false positive malware detection by Intego VirusBarrier, plugin incompatibility with VS Code and PHPStorm, and general malfunctioning. Solutions involved updating virus definitions, reinstalling Pieces OS, and addressing plugin compatibility. The Pieces team is actively investigating and resolving these issues.

**Related Issues:**
- [#543](https://github.com/pieces-app/support/issues/543): OSX/Nukesped.ext reported by VirusBarrier
- [#530](https://github.com/pieces-app/support/issues/530): Vscode and PHPStorm plugins stopped working after Pieces OS update
- [#546](https://github.com/pieces-app/support/issues/546): Unable to open Pieces Core Services

### 5. Pieces OS Update Causes Disconnections and Errors
Users report issues after updating Pieces OS to version 11.0.0, including blinking browser extensions, LTM engine failures, and disconnections. Solutions involve updating all plugins and desktop apps, restarting Pieces OS, switching between local and cloud modes, and reinstalling Pieces OS after deleting specific folders.

**Related Issues:**
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#526](https://github.com/pieces-app/support/issues/526): Can't turn on long term memory engine
- [#531](https://github.com/pieces-app/support/issues/531): Pieces Desktop App - Lost Connection to PiecesOS


## Recommendations
- **Address Claude 3.5 Sonnet Copilot Errors:** Investigate and resolve the root causes of errors and empty responses when using Claude 3.5 Sonnet in the Copilot module.  This may involve working with Vertex AI AOT, adjusting message length limits, or refining content filtering.
- **Improve "Something went wrong with processing" Error Messaging:** Provide more specific error messages for Copilot processing failures, particularly those related to rate limiting. Guide users towards authentication or upgrading to Pieces OS 11.0.0.
- **Mitigate PiecesOS Crashes on Windows:** Continue monitoring and addressing crashes on Windows, especially those triggered by adding folders as context. Ensure patches like v11.0.2 are effectively disseminated and consider providing alternative installation methods.
- **Enhance Pieces OS Update Process:**  Investigate and address issues stemming from Pieces OS updates, such as false positive malware detections, plugin incompatibilities, and unexpected disconnections. Improve communication about breaking changes and the need to update plugins.
- **Provide Clearer Guidance on LTM Engine Issues:** Offer more detailed troubleshooting steps for users experiencing issues with the Long-Term Memory (LTM) engine, including instructions for restarting, switching modes, and updating to the latest Pieces OS version.
- **Proactively Monitor and Address Top Active Tickets:**  Dedicate resources to promptly investigate and resolve the most active support tickets, such as those related to lost connections, installation problems, and plugin malfunctions. 

## Daily Reports
Here are the daily reports for this week:

- [report_210616](daily/2024-12-17/report_210616.md)
- [report_131026](daily/2024-12-17/report_131026.md)
- [report_131144](daily/2024-12-18/report_131144.md)
- [report_210617](daily/2024-12-18/report_210617.md)
- [report_131158](daily/2024-12-19/report_131158.md)
- [report_210611](daily/2024-12-19/report_210611.md)
- [report_050715](daily/2024-12-19/report_050715.md)
- [report_210551](daily/2024-12-20/report_210551.md)
- [report_050700](daily/2024-12-20/report_050700.md)
- [report_130954](daily/2024-12-20/report_130954.md)
- [report_210548](daily/2024-12-21/report_210548.md)
- [report_130818](daily/2024-12-21/report_130818.md)
