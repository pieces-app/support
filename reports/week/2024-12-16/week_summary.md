# Support Ticket Report
- Generated: 2024-12-20 05:11:11
- Period: 2024-12-16 to 2024-12-20

## Summary
- **Total Tickets:** 24
- **Resolved:** 10
- **Open:** 14

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#471](https://github.com/pieces-app/support/issues/471) | I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app | 17.70 |
| [#539](https://github.com/pieces-app/support/issues/539) | Pieces Desktop App - Lost Connection to PiecesOS | 14.25 |
| [#531](https://github.com/pieces-app/support/issues/531) | Pieces Desktop App - Lost Connection to PiecesOS | 10.98 |
| [#543](https://github.com/pieces-app/support/issues/543) | OSX/Nukesped.ext reported by VirusBarrier | 9.46 |
| [#536](https://github.com/pieces-app/support/issues/536) | Bug: Adding Folder as context (typescript repo) appears to crash PiecesOS within the Copilot | 8.50 |

## Common Issues
### 1. PiecesOS Connection Loss on Windows
Users are experiencing connection issues with PiecesOS on Windows, particularly when adding folders to context. This issue appears to be related to specific Windows builds. The Pieces team is actively investigating and consolidating these reports. Users are encouraged to check for duplicate issues and provide log files for further assistance.

**Related Issues:**
- [#539](https://github.com/pieces-app/support/issues/539): Pieces Desktop App - Lost Connection to PiecesOS
- [#542](https://github.com/pieces-app/support/issues/542): Pieces Desktop App - Lost Connection to PiecesOS
- [#541](https://github.com/pieces-app/support/issues/541): Pieces Desktop App - Lost Connection to PiecesOS

### 2. LLM Copilot Errors and Rate Limiting
Users reported errors when using the PiecesOS Copilot, including empty responses and "Something went wrong" messages. These errors were often related to rate limiting. Solutions included switching LLM models, signing into Pieces, and updating to the latest PiecesOS version with increased rate limits and improved error messages.

**Related Issues:**
- [#487](https://github.com/pieces-app/support/issues/487): "This message exceeded the context limit for this LLM. Please select a different LLM and try again, or shorten your prompt." issue
- [#535](https://github.com/pieces-app/support/issues/535): Bug: Claude 3.5 Sonnet Copilot response issues "I'm Sorry something went wrong with the processing..."
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app

### 3. Copilot Processing Error in Pieces OS
Users are experiencing "Something went wrong with processing" errors in the Copilot module, primarily with Claude 3.5. This is often due to rate limiting. Solutions include authenticating with Pieces Ecosystem for higher rate limits, using alternative models like OpenAI or Gemini, or updating to the latest Pieces OS version.

**Related Issues:**
- [#535](https://github.com/pieces-app/support/issues/535): Bug: Claude 3.5 Sonnet Copilot response issues "I'm Sorry something went wrong with the processing..."
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app

### 4. PiecesOS Connection Loss on Windows
Users on Windows (Build 26100) experience "Lost Connection to PiecesOS" errors, particularly when adding folders. This might be due to corrupted files in the user's Documents folder. Solutions include reinstalling the app after deleting the 'com.pieces.os' and 'com.pieces.pfd' folders or contacting support for database repair.

**Related Issues:**
- [#531](https://github.com/pieces-app/support/issues/531): Pieces Desktop App - Lost Connection to PiecesOS
- [#542](https://github.com/pieces-app/support/issues/542): Pieces Desktop App - Lost Connection to PiecesOS
- [#541](https://github.com/pieces-app/support/issues/541): Pieces Desktop App - Lost Connection to PiecesOS

### 5. PiecesOS crashes on Windows when adding context
Users on Windows experience crashes with PiecesOS (versions 10.1.15 and 11.0.0) when adding files or folders as context. The issue seems to affect multiple Windows versions. The Pieces team is actively investigating these crashes and gathering information to debug and resolve the problem.

**Related Issues:**
- [#536](https://github.com/pieces-app/support/issues/536): Bug: Adding Folder as context (typescript repo) appears to crash PiecesOS within the Copilot
- [#507](https://github.com/pieces-app/support/issues/507): Pieces for Developers app keeps crashing continuously on attempts to upload files and folder and needs restart on my windows 11 laptop
- [#541](https://github.com/pieces-app/support/issues/541): Pieces Desktop App - Lost Connection to PiecesOS


## Recommendations
- **Prioritize 'PiecesOS Connection Loss on Windows' Issue:** This issue is highly frequent and affects a specific Windows build. Focus on identifying the root cause and providing a permanent fix.  Consider reaching out to users on the affected build for more information.
- **Improve Error Messaging for Copilot Issues:**  The frequent 'Something went wrong with processing' error in Copilot is often due to rate limiting. Implement clearer error messages that guide users towards solutions like authentication or model switching.
- **Investigate and Address PiecesOS Crashes:** Crashes when adding context are critical and require immediate attention. Gather detailed logs from affected users to expedite debugging and resolution.
- **Monitor Specific Windows Build (26100):**  A significant number of issues originate from this build.  Devote resources to testing and ensuring compatibility with this specific version.
- **Proactive Communication for Known Issues:** For issues like rate limiting, proactively communicate workarounds and solutions through in-app notifications, FAQs, or release notes.
- **Enhance Documentation for LTM and Ollama:** Issues related to Long-Term Memory and Ollama installation suggest a need for clearer documentation. Provide step-by-step guides and troubleshooting tips.
- **Gather User Feedback on OSX/Nukesped.ext:** Ticket #543 suggests a potential false positive with VirusBarrier. Investigate this thoroughly and communicate findings to users to maintain trust.

## Daily Reports
Here are the daily reports for this week:

- [report_210616](daily/2024-12-17/report_210616.md)
- [report_131026](daily/2024-12-17/report_131026.md)
- [report_131144](daily/2024-12-18/report_131144.md)
- [report_210617](daily/2024-12-18/report_210617.md)
- [report_131158](daily/2024-12-19/report_131158.md)
- [report_210611](daily/2024-12-19/report_210611.md)
- [report_050715](daily/2024-12-19/report_050715.md)
- [report_050700](daily/2024-12-20/report_050700.md)
