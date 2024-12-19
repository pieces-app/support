# Support Ticket Report
- Generated: 2024-12-19 21:12:06
- Period: 2024-12-16 to 2024-12-19

## Summary
- **Total Tickets:** 22
- **Resolved:** 10
- **Open:** 12

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#471](https://github.com/pieces-app/support/issues/471) | I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app | 18.31 |
| [#539](https://github.com/pieces-app/support/issues/539) | Pieces Desktop App - Lost Connection to PiecesOS | 17.98 |
| [#536](https://github.com/pieces-app/support/issues/536) | Bug: Adding Folder as context (typescript repo) appears to crash PiecesOS within the Copilot | 8.50 |
| [#526](https://github.com/pieces-app/support/issues/526) | Can't turn on long term memory engine | 7.98 |
| [#540](https://github.com/pieces-app/support/issues/540) | LTM doesn't work; the copilot model by defaults not saved | 7.89 |

## Common Issues
### 1. PiecesOS Connection Loss on Windows
Users on Windows (Build 26100) experience "Lost Connection to PiecesOS" errors, particularly when adding folders. This seems to affect various Windows versions (Home, Pro). Proposed solutions include gathering user logs, real-time debugging, and potential patches. The issue is under active investigation.

**Related Issues:**
- [#542](https://github.com/pieces-app/support/issues/542): Pieces Desktop App - Lost Connection to PiecesOS
- [#539](https://github.com/pieces-app/support/issues/539): Pieces Desktop App - Lost Connection to PiecesOS
- [#531](https://github.com/pieces-app/support/issues/531): Pieces Desktop App - Lost Connection to PiecesOS

### 2. LLM Processing Error in Pieces
Users are experiencing an error during LLM processing in the Pieces application. The error message, "This message exceeded the context limit..." or "I'm sorry. Something went wrong with processing...", is often misleading.  Potential causes include rate limiting or issues with the conversation flow. Solutions include upgrading to the latest Pieces OS version, authenticating for cloud processing, and contacting support for rate limit increases.

**Related Issues:**
- [#487](https://github.com/pieces-app/support/issues/487): "This message exceeded the context limit for this LLM. Please select a different LLM and try again, or shorten your prompt." issue
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app

### 3. PiecesOS Crashes When Uploading Files/Folders
Users are experiencing crashes in the Pieces for Developers app, specifically on Windows, when attempting to upload files or folders, particularly when using them as context in Pieces Copilot. The issue seems to be related to specific file/folder configurations and OS builds.  The Pieces team is actively investigating these crashes and requesting users to share affected files/folders or repository links to help with reproduction and resolution.

**Related Issues:**
- [#507](https://github.com/pieces-app/support/issues/507): Pieces for Developers app keeps crashing continuously on attempts to upload files and folder and needs restart on my windows 11 laptop
- [#536](https://github.com/pieces-app/support/issues/536): Bug: Adding Folder as context (typescript repo) appears to crash PiecesOS within the Copilot
- [#541](https://github.com/pieces-app/support/issues/541): Pieces Desktop App - Lost Connection to PiecesOS

### 4. LTM Engine Activation Issues in Pieces OS
Users are experiencing difficulties enabling the Long Term Memory (LTM) engine within the Pieces OS application. This issue appears across different Pieces OS versions and operating systems. Proposed solutions include updating Pieces OS and related components, checking for conflicts with WSL environments, and verifying model runtime settings.

**Related Issues:**
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved
- [#526](https://github.com/pieces-app/support/issues/526): Can't turn on long term memory engine
- [#535](https://github.com/pieces-app/support/issues/535): Bug: Claude 3.5 Sonnet Copilot response issues "I'm Sorry something went wrong with the processing..."

### 5. Pieces OS: Issues with Local LLM Installation
Users are experiencing difficulties installing and utilizing local LLMs, particularly Mistral-7B and Ollama, within the Pieces OS environment. Problems include failed downloads due to unstable network connections, inability to import manually downloaded models, and crashes or lack of GPU usage with locally installed models. Proposed solutions involve manual downloads, configuration adjustments, and potential bug fixes by the Pieces team.

**Related Issues:**
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#527](https://github.com/pieces-app/support/issues/527): Manually downloading a LLM


## Recommendations
- **Prioritize resolution of "PiecesOS Connection Loss on Windows"**: This issue has the highest frequency and is linked to the most active tickets. Focus on gathering user logs, real-time debugging, and developing a patch to address the root cause.
- **Improve error messaging for LLM processing errors**: The current error messages are misleading. Provide more specific messages indicating potential causes like rate limiting or conversation flow issues, and suggest solutions like upgrading Pieces OS or authenticating for cloud processing.
- **Investigate and address issues with local LLM installation**: Focus on resolving problems with failed downloads, manual model imports, and crashes or lack of GPU usage with locally installed LLMs like Mistral-7B and Ollama.
- **Provide clear guidance on LTM engine activation**:  Address the difficulties users face when enabling the LTM engine. Offer step-by-step instructions, troubleshooting tips, and potential workarounds for different Pieces OS versions and operating systems.
- **Consider increasing rate limits for authenticated users**: This can help alleviate frustration caused by rate limiting and encourage users to authenticate their accounts.
- **Continue monitoring and addressing issues related to PiecesOS crashes when uploading files/folders**: Gather more information from users experiencing these crashes, including affected files/folders or repository links, to aid in reproduction and resolution.
- **Proactively communicate known issues and workarounds to users**: Utilize channels like the Pieces support website, blog, or in-app notifications to keep users informed about ongoing issues and available solutions. This can help reduce support ticket volume and improve user experience.

## Daily Reports
Here are the daily reports for this week:

- [report_210616](daily/2024-12-17/report_210616.md)
- [report_131026](daily/2024-12-17/report_131026.md)
- [report_131144](daily/2024-12-18/report_131144.md)
- [report_210617](daily/2024-12-18/report_210617.md)
- [report_131158](daily/2024-12-19/report_131158.md)
- [report_210611](daily/2024-12-19/report_210611.md)
- [report_050715](daily/2024-12-19/report_050715.md)
