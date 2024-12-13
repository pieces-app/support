# Support Ticket Report
- Generated: 2024-12-13 13:16:52
- Period: 2024-12-09 to 2024-12-13

## Summary
- **Total Tickets:** 21
- **Resolved:** 6
- **Open:** 15

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#509](https://github.com/pieces-app/support/issues/509) | [Obsidian] | 5.50 |
| [#474](https://github.com/pieces-app/support/issues/474) | Pieces OS apparently stuck - VS extension not working | 5.32 |
| [#499](https://github.com/pieces-app/support/issues/499) | Demo Chat are stuck loading | 4.42 |
| [#258](https://github.com/pieces-app/support/issues/258) | White screen on Windows 11 | 3.79 |
| [#504](https://github.com/pieces-app/support/issues/504) | Personalizing during installation broken on macOS 12.7.6 | 3.67 |

## Common Issues
### 1. Pieces OS and Plugin Integration Issues
Users report Pieces OS toolbar launch failures from plugins and system tray. This might involve webview communication errors, plugin version conflicts, or OS-level issues. Solutions include upgrading plugins, Pieces OS updates, and debugging OS-specific configurations.

**Related Issues:**
- [#509](https://github.com/pieces-app/support/issues/509): [Obsidian]
- [#505](https://github.com/pieces-app/support/issues/505): PFD Onboarding: Context exceeded" error on first short message
- [#474](https://github.com/pieces-app/support/issues/474): Pieces OS apparently stuck - VS extension not working

### 2. Pieces OS Onboarding and Demo Chat Issues
Users are experiencing issues with Pieces OS onboarding, particularly after resetting the application or skipping the onboarding process. This includes demo chats failing to load, pieces not being generated, and onboarding prompts not reflecting user choices. Solutions involve ensuring correct folder deletion during reset and addressing potential cloud service permission errors.

**Related Issues:**
- [#499](https://github.com/pieces-app/support/issues/499): Demo Chat are stuck loading
- [#501](https://github.com/pieces-app/support/issues/501): Onboarding doesn't generate pieces nor demo chats
- [#505](https://github.com/pieces-app/support/issues/505): PFD Onboarding: Context exceeded" error on first short message

### 3. Pieces Onboarding Issues on macOS
Users are experiencing various issues with the Pieces onboarding process on macOS, including blank onboarding screens, unresponsive windows on smaller screens, and failures to generate demo content. These issues may be related to local database errors, permission issues, or problems with specific macOS versions. Solutions include deleting specific folders to reset the onboarding process or waiting for a future release with bug fixes.

**Related Issues:**
- [#504](https://github.com/pieces-app/support/issues/504): Personalizing during installation broken on macOS 12.7.6
- [#501](https://github.com/pieces-app/support/issues/501): Onboarding doesn't generate pieces nor demo chats
- [#505](https://github.com/pieces-app/support/issues/505): PFD Onboarding: Context exceeded" error on first short message

### 4. Claude LLM Context Exceeded Error in Pieces App
Users are experiencing "Context exceeded" errors when using the Claude LLM in the Pieces app, particularly on macOS and Linux. This issue occurs even with short messages and during onboarding. The problem is linked to a known issue and is expected to be resolved in an upcoming Pieces app release.

**Related Issues:**
- [#508](https://github.com/pieces-app/support/issues/508): Message exceeded the context limit for claude LLM Issue
- [#505](https://github.com/pieces-app/support/issues/505): PFD Onboarding: Context exceeded" error on first short message
- [#502](https://github.com/pieces-app/support/issues/502): Not generating the response

### 5. Pieces Desktop App Issues
Users are experiencing issues with the Pieces Desktop app on Windows, including blank white screens and crashes when uploading files. Reinstallation hasn't resolved the white screen issue. Developers are actively investigating and requesting user logs and problematic files for debugging.

**Related Issues:**
- [#258](https://github.com/pieces-app/support/issues/258): White screen on Windows 11
- [#507](https://github.com/pieces-app/support/issues/507): Pieces for Developers app keeps crashing continuously on attempts to upload files and folder and needs restart on my windows 11 laptop
- [#456](https://github.com/pieces-app/support/issues/456): Not Working


## Recommendations
- **Prioritize resolving onboarding issues:** Many tickets relate to onboarding problems across macOS and Windows. Focus on resolving these to ensure a smooth first-time user experience.
- **Investigate and address Pieces OS and plugin integration errors:** Issues with Pieces OS toolbar launch failures, particularly from plugins, are recurring. Allocate resources to debug and resolve these integration problems.
- **Improve Claude LLM context handling:** The "Context exceeded" error with Claude LLM, even for short messages, needs immediate attention. Investigate the root cause and implement a fix to ensure reliable LLM usage.
- **Address Pieces Desktop app stability on Windows:**  The app crashing on Windows when uploading files is a critical issue. Prioritize debugging and resolving this to prevent user frustration and data loss.
- **Gather more information on white screen issue:** While a temporary workaround exists for the blank white screen issue on Windows, further investigation is needed. Request detailed logs and system information from affected users to identify the root cause.
- **Review onboarding documentation and user guidance:**  Given the prevalence of onboarding issues, review the documentation and in-app guidance for clarity and completeness. Ensure users have clear instructions on resetting the app and navigating potential issues.
- **Consider enhancing error messages and logging:**  Vague error messages like "Something went wrong" make troubleshooting difficult. Improve error messages with specific details and enhance logging to capture relevant information for faster debugging.

## Daily Reports
Here are the daily reports for this week:

- [report_210301](daily/2024-12-12/report_210301.md)
- [report_180049](daily/2024-12-12/report_180049.md)
- [report_175555](daily/2024-12-12/report_175555.md)
- [report_130930](daily/2024-12-13/report_130930.md)
