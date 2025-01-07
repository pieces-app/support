# Support Ticket Report
- Generated: 2024-12-15 21:05:51
- Period: 2024-12-09 to 2024-12-15

## Summary
- **Total Tickets:** 22
- **Resolved:** 6
- **Open:** 16

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#474](https://github.com/pieces-app/support/issues/474) | Pieces OS apparently stuck - VS extension not working | 4.97 |
| [#499](https://github.com/pieces-app/support/issues/499) | Demo Chat are stuck loading | 3.91 |
| [#258](https://github.com/pieces-app/support/issues/258) | White screen on Windows 11 | 3.51 |
| [#504](https://github.com/pieces-app/support/issues/504) | Personalizing during installation broken on macOS 12.7.6 | 3.31 |
| [#509](https://github.com/pieces-app/support/issues/509) | [Obsidian] | 3.21 |

## Common Issues
### 1. Pieces OS stuck, extensions not working
Users report Pieces OS getting stuck, failing to launch, or extensions (especially Visual Studio) not connecting. This seems linked to OS errors during applet hosting. Workarounds include restarting Pieces OS or updating to the latest version. Root cause still under investigation.

**Related Issues:**
- [#474](https://github.com/pieces-app/support/issues/474): Pieces OS apparently stuck - VS extension not working
- [#526](https://github.com/pieces-app/support/issues/526): Can't turn on long term memory engine
- [#503](https://github.com/pieces-app/support/issues/503): Something went wrong with processing

### 2. Pieces macOS App Onboarding and UI Issues
Users are experiencing issues with the Pieces desktop app on macOS, particularly during onboarding and with UI elements. Problems include inaccessible buttons due to window size, infinite loading screens, and chat history disappearing. Solutions involve UI fixes, ensuring compatibility with various screen sizes, and addressing data persistence issues.

**Related Issues:**
- [#504](https://github.com/pieces-app/support/issues/504): Personalizing during installation broken on macOS 12.7.6
- [#499](https://github.com/pieces-app/support/issues/499): Demo Chat are stuck loading
- [#505](https://github.com/pieces-app/support/issues/505): PFD Onboarding: Context exceeded" error on first short message

### 3. Onboarding Failures and Demo Chat Issues
Users reported onboarding issues with Pieces failing to generate snippets and demo chats, particularly after resetting the application. This was often linked to permission errors with cloud services.  The recommended solution involved deleting both 'com.pieces.os' and 'com.pieces.pfd' folders before restarting. Additionally, some users experienced persistent loading issues with demo chats, even after successful piece loading.

**Related Issues:**
- [#501](https://github.com/pieces-app/support/issues/501): Onboarding doesn't generate pieces nor demo chats
- [#499](https://github.com/pieces-app/support/issues/499): Demo Chat are stuck loading
- [#505](https://github.com/pieces-app/support/issues/505): PFD Onboarding: Context exceeded" error on first short message

### 4. Local LLM download and integration issues
Users experience difficulties downloading large LLM models due to unstable network connections. Manual downloads are not recognized by Pieces, and restarting the process truncates existing files. Workarounds include ensuring stable connections or using smaller models.

**Related Issues:**
- [#527](https://github.com/pieces-app/support/issues/527): Manually downloading a LLM
- [#502](https://github.com/pieces-app/support/issues/502): Not generating the response
- [#526](https://github.com/pieces-app/support/issues/526): Can't turn on long term memory engine

### 5. Pieces Desktop Scrolling and Loading Issues
Users report difficulties with scrolling in Pieces Desktop, particularly when answers are streaming in. Some experience stuck loading screens, especially with demo chats. Proposed solutions include improving scroll behavior to allow upward scrolling during streaming and ensuring automatic scrolling down unless manually overridden. Additionally, investigating and resolving loading issues, potentially related to VM setups, is crucial.

**Related Issues:**
- [#226](https://github.com/pieces-app/support/issues/226): Pieces Desktop does not scroll when answering
- [#456](https://github.com/pieces-app/support/issues/456): Not Working
- [#499](https://github.com/pieces-app/support/issues/499): Demo Chat are stuck loading


## Recommendations
- **Prioritize Pieces OS Stability:** Investigate and address the root cause of Pieces OS getting stuck and extensions failing to connect. This appears to be a recurring and high-impact issue.
- **Improve macOS Onboarding:** Resolve UI issues with the macOS desktop app onboarding process, ensuring accessibility on various screen sizes and addressing infinite loading problems.
- **Enhance LLM Download Experience:** Provide more robust handling of large LLM model downloads, allowing for resumable downloads and recognizing manually downloaded files.
- **Address Scrolling Issues:** Improve scrolling behavior in Pieces Desktop, allowing for upward scrolling during streaming answers and ensuring automatic scrolling down unless manually overridden.
- **Investigate Demo Chat Loading:** Determine the cause of persistent loading issues with demo chats, particularly in VM setups, and implement necessary fixes.
- **Review and Update Documentation:** Ensure that support documentation and FAQs address common issues like LLM download problems, onboarding failures, and Pieces OS troubleshooting.
- **Gather More Detailed Error Information:**  Improve error logging and reporting to capture specific OS error codes and other relevant details for faster diagnosis.
- **Consider Network Stability:** Provide guidance or workarounds for users with unstable network connections, especially during LLM downloads or cloud service interactions.

## Daily Reports
Here are the daily reports for this week:

- [report_210301](daily/2024-12-12/report_210301.md)
- [report_180049](daily/2024-12-12/report_180049.md)
- [report_175555](daily/2024-12-12/report_175555.md)
- [report_130930](daily/2024-12-13/report_130930.md)
- [report_210251](daily/2024-12-13/report_210251.md)
- [report_210259](daily/2024-12-15/report_210259.md)
