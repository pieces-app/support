# Support Ticket Report
- Generated: 2024-12-12 17:16:34
- Period: 2024-12-09 to 2024-12-12

## Summary
- **Total Tickets:** 11
- **Resolved:** 6
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#509](https://github.com/pieces-app/support/issues/509) | [Obsidian] | 5.50 |
| [#474](https://github.com/pieces-app/support/issues/474) | Pieces OS apparently stuck - VS extension not working | 5.32 |
| [#508](https://github.com/pieces-app/support/issues/508) | Message exceeded the context limit for claude LLM Issue | 4.50 |
| [#499](https://github.com/pieces-app/support/issues/499) | Demo Chat are stuck loading | 4.42 |
| [#504](https://github.com/pieces-app/support/issues/504) | Personalizing during installation broken on macOS 12.7.6 | 3.92 |

## Common Issues
### 1. Onboarding Issues in Pieces for Developers
Users are experiencing issues with the onboarding process in Pieces for Developers, including blank demo chats, failure to generate onboarding pieces, and 'Context Exceeded' errors. These issues may stem from problems with VM setups, local database errors, or conflicts with specific Pieces versions. Proposed solutions involve resetting Pieces, deleting specific folders, and restarting the application. Some issues are under investigation or planned for resolution in future releases.

**Related Issues:**
- [#499](https://github.com/pieces-app/support/issues/499): Demo Chat are stuck loading
- [#501](https://github.com/pieces-app/support/issues/501): Onboarding doesn't generate pieces nor demo chats
- [#505](https://github.com/pieces-app/support/issues/505): PFD Onboarding: Context exceeded" error on first short message

### 2. Pieces OS and Desktop App Crashes and Errors
Users report Pieces OS getting stuck, VS extension errors, and app crashes when uploading files. Issues involve Sentry errors, route not found messages, and unhandled exceptions. Proposed solutions include plugin updates, port changes, and OS error analysis. Some issues remain unresolved, requiring further investigation and user collaboration.

**Related Issues:**
- [#474](https://github.com/pieces-app/support/issues/474): Pieces OS apparently stuck - VS extension not working
- [#503](https://github.com/pieces-app/support/issues/503): Something went wrong with processing
- [#507](https://github.com/pieces-app/support/issues/507): Pieces for Developers app keeps crashing continuously on attempts to upload files and folder and needs restart on my windows 11 laptop

### 3. Copilot malfunction and UI glitches in Pieces OS
Users report Copilot not responding, showing errors, or failing to load videos. Some experience UI glitches like unexpected icons when resizing the Pieces tray. Issues are linked to Pieces OS versions and specific actions, with some marked as duplicates. Solutions involve bug fixes in upcoming releases.

**Related Issues:**
- [#509](https://github.com/pieces-app/support/issues/509): [Obsidian]
- [#502](https://github.com/pieces-app/support/issues/502): Not generating the response
- [#505](https://github.com/pieces-app/support/issues/505): PFD Onboarding: Context exceeded" error on first short message

### 4. Pieces Onboarding Issues on macOS
Users are experiencing various issues during the Pieces onboarding process on macOS, including interface bugs on smaller screens, failure to generate snippets and demo chats, and "Context exceeded" errors with Copilot. Proposed solutions involve resizing the onboarding window, addressing database and folder deletion conflicts, and bug fixes in upcoming releases.

**Related Issues:**
- [#504](https://github.com/pieces-app/support/issues/504): Personalizing during installation broken on macOS 12.7.6
- [#501](https://github.com/pieces-app/support/issues/501): Onboarding doesn't generate pieces nor demo chats
- [#505](https://github.com/pieces-app/support/issues/505): PFD Onboarding: Context exceeded" error on first short message

### 5. Claude LLM Context Exceeded Error
Users are experiencing "Context exceeded" errors when using the Claude LLM, particularly during PFD onboarding. This issue is likely due to a bug in Pieces OS 10.1.15. The Pieces team is aware of the problem and has developed a fix that will be included in the next Pieces OS update.

**Related Issues:**
- [#508](https://github.com/pieces-app/support/issues/508): Message exceeded the context limit for claude LLM Issue
- [#505](https://github.com/pieces-app/support/issues/505): PFD Onboarding: Context exceeded" error on first short message
- [#502](https://github.com/pieces-app/support/issues/502): Not generating the response


## Recommendations
- **Prioritize onboarding improvements:** The high frequency of onboarding-related issues suggests a need to focus on improving the onboarding experience, particularly for macOS users. This could involve redesigning the onboarding flow, providing clearer instructions, or implementing automated checks for common issues.
- **Investigate and resolve Claude LLM context errors:** The "Context exceeded" error with the Claude LLM is a recurring problem, especially during onboarding. Prioritize identifying the root cause and implementing a permanent fix.
- **Address Pieces OS and Desktop App crashes:** Investigate and address the crashes and errors reported by users, such as those related to Sentry, route not found messages, and unhandled exceptions. This may involve improving error logging and analysis to identify root causes.
- **Improve Copilot stability and responsiveness:** Investigate and resolve issues related to Copilot malfunctioning, not responding, or failing to load videos. This may involve code optimization, dependency updates, or server-side adjustments.
- **Gather more information on file upload crashes:**  The issue with Pieces for Developers crashing during file uploads needs further investigation. Encourage users to provide specific details about the files and folders they are attempting to upload to help reproduce and resolve the issue.
- **Review and update support resources:** Ensure that support documentation and resources are up-to-date and address the common issues identified in the support tickets. This includes providing clear instructions for troubleshooting onboarding problems, Claude LLM errors, and app crashes.
- **Consider a bug bash focused on onboarding:**  Given the concentration of issues during onboarding, organize a bug bash with the development team to specifically target and resolve these problems. 

## Daily Reports
Here are the daily reports for this week:

- [report_171454](daily/2024-12-12/report_171454.md)
