# Support Ticket Report
- Generated: 2024-12-12 17:32:24
- Period: 2024-12-09 to 2024-12-12

## Summary
- **Total Tickets:** 19
- **Resolved:** 6
- **Open:** 13

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#509](https://github.com/pieces-app/support/issues/509) | [Obsidian] | 5.50 |
| [#474](https://github.com/pieces-app/support/issues/474) | Pieces OS apparently stuck - VS extension not working | 5.32 |
| [#508](https://github.com/pieces-app/support/issues/508) | Message exceeded the context limit for claude LLM Issue | 4.50 |
| [#499](https://github.com/pieces-app/support/issues/499) | Demo Chat are stuck loading | 4.42 |
| [#504](https://github.com/pieces-app/support/issues/504) | Personalizing during installation broken on macOS 12.7.6 | 3.92 |

## Common Issues
### 1. Pieces UI/UX Issues on macOS
Users reported various UI/UX issues with the Pieces desktop app on macOS, including unresponsive demo chats after installation, mysterious icons appearing when resizing the Pieces tray in Obsidian, and inability to proceed past the personalization screen due to the "Next" button being off-screen. Solutions involved bug fixes, UI adjustments for smaller screens, and explanations of expected behavior.

**Related Issues:**
- [#509](https://github.com/pieces-app/support/issues/509): [Obsidian]
- [#499](https://github.com/pieces-app/support/issues/499): Demo Chat are stuck loading
- [#504](https://github.com/pieces-app/support/issues/504): Personalizing during installation broken on macOS 12.7.6

### 2. PiecesOS Onboarding and Loading Errors
Users report PiecesOS getting stuck on loading screens during onboarding or when accessing demo chats. Issues involve database errors, permission errors with cloud services, and problems with specific files/folders. Solutions include deleting local database files, ensuring proper permissions, and providing detailed logs and system information for troubleshooting.

**Related Issues:**
- [#501](https://github.com/pieces-app/support/issues/501): Onboarding doesn't generate pieces nor demo chats
- [#499](https://github.com/pieces-app/support/issues/499): Demo Chat are stuck loading
- [#507](https://github.com/pieces-app/support/issues/507): Pieces for Developers app keeps crashing continuously on attempts to upload files and folder and needs restart on my windows 11 laptop

### 3. Pieces OS Conflicts on Windows
Users report conflicts between Pieces OS and applications like Firefox and Visual Studio on Windows 11. Issues include Firefox not launching correctly and Pieces OS getting stuck. Proposed solutions involve investigating process spawning, webview ports, and potential conflicts with Windows Insider Preview builds.

**Related Issues:**
- [#267](https://github.com/pieces-app/support/issues/267): FireFox not functioning properly under WorkStream Pattern Engine
- [#474](https://github.com/pieces-app/support/issues/474): Pieces OS apparently stuck - VS extension not working
- [#507](https://github.com/pieces-app/support/issues/507): Pieces for Developers app keeps crashing continuously on attempts to upload files and folder and needs restart on my windows 11 laptop

### 4. Claude LLM and PFD Onboarding Context Errors
Users are encountering "Context exceeded" errors when using Claude LLM or during PFD onboarding. This issue appears to be related to message length and is being addressed in an upcoming release. Users experiencing this problem are advised to wait for the update.

**Related Issues:**
- [#508](https://github.com/pieces-app/support/issues/508): Message exceeded the context limit for claude LLM Issue
- [#505](https://github.com/pieces-app/support/issues/505): PFD Onboarding: Context exceeded" error on first short message
- [#502](https://github.com/pieces-app/support/issues/502): Not generating the response

### 5. Pieces OS and VS Code Extension Integration Issues
Users report conflicts between Pieces OS and its VS Code extension, including slow pasting, line-wrapping discrepancies, and OS launch failures. Proposed solutions involve disabling conflicting keybinds, adjusting line-wrapping settings, and upgrading to the latest Pieces OS and extension versions. Further debugging and investigation may be needed to address persistent issues.

**Related Issues:**
- [#271](https://github.com/pieces-app/support/issues/271): Pasting in VS Code causes delay
- [#428](https://github.com/pieces-app/support/issues/428): VSCODE Extension, Pieces Copilot line wrapping setting location or settings.json options??
- [#474](https://github.com/pieces-app/support/issues/474): Pieces OS apparently stuck - VS extension not working


## Recommendations
- **Address macOS UI/UX Issues:** Prioritize resolving UI/UX issues on macOS, such as unresponsive demo chats, mysterious icons in Obsidian, and personalization screen problems, to improve user experience.
- **Investigate PiecesOS Onboarding and Loading Errors:** Troubleshoot and resolve issues related to PiecesOS getting stuck on loading screens, database errors, and permission errors to ensure smooth onboarding.
- **Improve Pieces OS and Windows Compatibility:** Investigate and address conflicts between Pieces OS and applications like Firefox and Visual Studio on Windows 11 to enhance compatibility.
- **Resolve Claude LLM and PFD Onboarding Context Errors:** Address the "Context exceeded" errors in Claude LLM and PFD onboarding, potentially by handling message length limits, to prevent user frustration.
- **Enhance Pieces OS and VS Code Extension Integration:** Investigate and fix issues related to slow pasting, line-wrapping discrepancies, and OS launch failures between Pieces OS and its VS Code extension to create a seamless integration.

## Daily Reports
Here are the daily reports for this week:

- [report_172848](daily/2024-12-12/report_172848.md)
