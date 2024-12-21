# Support Ticket Report
- Generated: 2024-12-21 13:12:24
- Period: 2024-12-16 to 2024-12-21

## Summary
- **Total Tickets:** 26
- **Resolved:** 11
- **Open:** 15

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#471](https://github.com/pieces-app/support/issues/471) | I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app | 17.53 |
| [#539](https://github.com/pieces-app/support/issues/539) | Pieces Desktop App - Lost Connection to PiecesOS | 12.27 |
| [#536](https://github.com/pieces-app/support/issues/536) | Bug: Adding Folder as context (on Windows) crashes PiecesOS within the Copilot | 11.20 |
| [#531](https://github.com/pieces-app/support/issues/531) | Pieces Desktop App - Lost Connection to PiecesOS | 10.64 |
| [#543](https://github.com/pieces-app/support/issues/543) | OSX/Nukesped.ext reported by VirusBarrier | 7.50 |

## Common Issues
### 1. Pieces OS Processing Error with LLM Models
Users are experiencing a processing error with various LLM models in Pieces OS, particularly when using Claude, Gemini, and GPT models (excluding GPT-4o Mini). This issue is often caused by rate limiting or context length exceeding model limits. Solutions include upgrading to the latest Pieces OS version (11.0.0 or higher), authenticating your account, shortening the input context, or switching to a different LLM model.

**Related Issues:**
- [#487](https://github.com/pieces-app/support/issues/487): "This message exceeded the context limit for this LLM. Please select a different LLM and try again, or shorten your prompt." issue
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'

### 2. Copilot Error: Processing Issue with GPT Models
Users encounter a "Something went wrong with processing" error when using various GPT models in Copilot, except for GPT-4o Mini. This is often due to rate limiting. Solutions include upgrading to PiecesOS 11.0.0, authenticating, or contacting support for manual rate limit adjustments.

**Related Issues:**
- [#535](https://github.com/pieces-app/support/issues/535): Bug: Claude 3.5 Sonnet Copilot response issues "I'm Sorry something went wrong with the processing..."
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'

### 3. PiecesOS Crash When Adding Folder
Users are experiencing PiecesOS crashes when attempting to add a folder to the context. This issue appears to be specific to Windows 10 Build 26100 and is being actively investigated by the Pieces team. A potential fix is under investigation. Users are encouraged to follow updates on issue #536 for the latest information.

**Related Issues:**
- [#539](https://github.com/pieces-app/support/issues/539): Pieces Desktop App - Lost Connection to PiecesOS
- [#542](https://github.com/pieces-app/support/issues/542): Pieces Desktop App - Lost Connection to PiecesOS
- [#541](https://github.com/pieces-app/support/issues/541): Pieces Desktop App - Lost Connection to PiecesOS

### 4. Pieces for Developers Crashing on Windows
Users on Windows are experiencing crashes with Pieces for Developers, particularly when uploading files/folders or using Copilot. The issue seems linked to specific Windows builds and the app installer. A patch (11.0.2) was released to address this, but the issue is being monitored for further debugging.

**Related Issues:**
- [#536](https://github.com/pieces-app/support/issues/536): Bug: Adding Folder as context (on Windows) crashes PiecesOS within the Copilot
- [#507](https://github.com/pieces-app/support/issues/507): Pieces for Developers app keeps crashing continuously on attempts to upload files and folder and needs restart on my windows 11 laptop
- [#541](https://github.com/pieces-app/support/issues/541): Pieces Desktop App - Lost Connection to PiecesOS

### 5. Pieces OS 11.0.0 Update Causes Plugin Issues
Users report various issues after updating to Pieces OS 11.0.0, including plugin incompatibility, browser extension glitches, and antivirus conflicts. Solutions involve updating plugins, reinstalling Pieces OS and deleting specific folders, or waiting for patches. Issues persist for some users, requiring further investigation and support.

**Related Issues:**
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#530](https://github.com/pieces-app/support/issues/530): Vscode and PHPStorm plugins stopped working after Pieces OS update
- [#531](https://github.com/pieces-app/support/issues/531): Pieces Desktop App - Lost Connection to PiecesOS


## Recommendations
- **Prioritize rate limiting issues:** Focus on resolving the root causes of rate limiting problems with LLM models, as they are a recurring and high-impact issue affecting multiple users. This may involve adjusting rate limits, optimizing model usage, or implementing more transparent error handling.
- **Improve Pieces OS 11.0.0 update stability:** Address the issues arising from the 11.0.0 update, such as plugin incompatibility, browser extension glitches, and antivirus conflicts. This may require releasing patches, updating documentation, or providing clear instructions for users experiencing problems.
- **Investigate Windows-specific crashes:** Dedicate resources to identifying and fixing the crashes occurring on Windows, particularly those related to adding folders to context and using Pieces for Developers. This may involve collaborating with Microsoft or releasing targeted bug fixes.
- **Enhance communication about known issues:** Proactively communicate known issues and their solutions to users through release notes, FAQs, or in-app notifications. This will help manage user expectations and reduce support tickets for common problems.
- **Monitor and analyze ticket activity:** Regularly review and analyze ticket data to identify trends, common issues, and areas for improvement in the product or support processes. This data-driven approach will help prioritize development efforts and enhance the overall user experience.
- **Improve error messages and troubleshooting:** Provide more informative error messages to users, guiding them towards potential solutions or workarounds. Consider creating dedicated troubleshooting documentation or tools for common issues.
- **Encourage user authentication:** Highlight the benefits of user authentication, such as increased rate limits and a more personalized experience, to encourage wider adoption and potentially mitigate rate limiting problems.
- **Gather user feedback on specific updates:** Implement mechanisms to collect user feedback on major updates, such as the 11.0.0 release, to identify and address issues early on and improve future updates.
- **Review and update plugin compatibility:** Establish a clear process for ensuring plugin compatibility with new Pieces OS releases. This may involve providing guidelines to plugin developers or implementing a more robust testing framework.
- **Investigate antivirus false positives:** Collaborate with antivirus vendors to address false positive detections of Pieces OS updates. This will help ensure a smooth update experience for all users.

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
- [report_130818](daily/2024-12-21/report_130818.md)
