# Support Ticket Report
- Generated: 2025-01-09 19:45:38
- Period: 2025-01-06 to 2025-01-09

## Summary
- **Total Tickets:** 19
- **Resolved:** 5
- **Open:** 14

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 8.71 |
| [#540](https://github.com/pieces-app/support/issues/540) | LTM doesn't work; the copilot model by defaults not saved | 6.98 |
| [#572](https://github.com/pieces-app/support/issues/572) | Pieces OS Does not recognize folders or files | 6.92 |
| [#568](https://github.com/pieces-app/support/issues/568) | Long-Term Memory Feature Not Working on Linux | 5.68 |
| [#538](https://github.com/pieces-app/support/issues/538) | Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins | 4.91 |

## Common Issues
### 1. Pieces OS Connectivity Issues
Users reported difficulties connecting to Pieces OS from various platforms, including Docker containers and VS Code extensions. The issues stemmed from networking changes in Pieces OS 11.0.0+, requiring workarounds like manual IP configuration or specific DNS entries. Updates to the VS Code extension and Pieces OS aimed to resolve these connectivity problems.

**Related Issues:**
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#562](https://github.com/pieces-app/support/issues/562): Chrome Extension Fills Developer Console with Errors
- [#566](https://github.com/pieces-app/support/issues/566): Pieces Copilot not working on Windsurf

### 2. Long-Term Memory (LTM) Engine Activation Issues
Users are experiencing difficulties enabling the Long-Term Memory (LTM) Engine across different operating systems (Windows, macOS, Linux). This is primarily due to issues with LLM state overriding saved data, Qdrant boot failures, and dependency conflicts. The Pieces team is actively working on resolving these issues through patches, database infrastructure updates, and dependency deprecation.

**Related Issues:**
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux

### 3. Long-Term Memory Engine Activation Issues
Multiple users reported issues with enabling the Long-Term Memory Engine. Problems included downloaded LLM state overriding saved data, Qdrant boot failures, and general activation errors. Solutions involved LLM state patches, database infrastructure updates, and ongoing investigation into Qdrant issues.

**Related Issues:**
- [#582](https://github.com/pieces-app/support/issues/582): Saved Snippets Welcome Screen
- [#540](https://github.com/pieces-app/support/issues/540): LTM doesn't work; the copilot model by defaults not saved
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory

### 4. Long-Term Memory (LTM) Issues on Pieces OS
Users are experiencing issues with the Long-Term Memory (LTM) feature on Pieces OS, particularly on Linux.  Problems include difficulty enabling LTM, inconsistent functionality, and error messages.  The Pieces team is aware of these issues and is actively working on solutions, including infrastructure improvements and dependency updates. 

**Related Issues:**
- [#556](https://github.com/pieces-app/support/issues/556): Live context seems not to work on linux
- [#568](https://github.com/pieces-app/support/issues/568): Long-Term Memory Feature Not Working on Linux
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory

### 5. Pieces OS Copilot and Long-Term Memory Bugs
Users report Pieces OS Copilot malfunctions, including issues with Long-Term Memory activation and file content reading. Proposed solutions involve infrastructure upgrades, database migration, and switching to alternative models like GPT-4o. The Pieces team is actively investigating and working on resolving these issues.

**Related Issues:**
- [#572](https://github.com/pieces-app/support/issues/572): Pieces OS Does not recognize folders or files
- [#553](https://github.com/pieces-app/support/issues/553): Can't turn on Long-Term Memory
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response


## Recommendations
- **Prioritize resolving Pieces OS connectivity issues:** This recurring problem causes significant user frustration and impacts various platforms. Focus on stabilizing networking in Pieces OS 11.0.0+ and ensure seamless integration with Docker and VS Code.
- **Address Long-Term Memory (LTM) engine activation problems:** This feature is crucial, but users face difficulties across multiple operating systems. Investigate LLM state conflicts, Qdrant boot failures, and dependency issues. Provide clear communication and updates to users regarding LTM stability.
- **Improve communication about LTM functionality on Linux:** While LTM is available on Linux, users encounter inconsistencies and error messages. Provide clear documentation and support resources to address Linux-specific LTM challenges.
- **Investigate and resolve file content reading limitations:** The Copilot's inability to read large files hinders its functionality. Prioritize resolving this issue to improve code analysis and suggestion capabilities.
- **Monitor and address issues related to specific LLM models:** Users report problems with Claude and Gemini models. Investigate these issues, communicate workarounds, and consider promoting more stable models like GPT-4o.
- **Proactively monitor forum and Discord for emerging issues:** Identify and address trending issues promptly to prevent widespread impact and improve user experience.
- **Consider creating a dedicated troubleshooting guide for common issues:** This resource can empower users to resolve problems independently and reduce support ticket volume.
- **Gather detailed logs and system information from users experiencing issues:** This will help developers reproduce and diagnose problems more effectively, leading to faster resolutions.
- **Improve error messages and guidance within the Pieces OS interface:** Provide users with clear and actionable information when encountering errors, facilitating self-troubleshooting and reducing confusion.

## Daily Reports
Here are the daily reports for this week:

- [report_194217](daily/2025-01-09/report_194217.md)
