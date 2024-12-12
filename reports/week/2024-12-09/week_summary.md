# Support Ticket Report
- Generated: 2024-12-12 17:59:31
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
### 1. Pieces for Developers UI Bugs
Users report UI glitches and loading errors within the Pieces for Developers application, particularly with the Copilot and Demo Chat features. Issues involve mysterious icons, unresponsive loading screens, and context errors. Proposed solutions involve bug investigation, replication attempts, and fixes planned for upcoming PiecesOS releases.

**Related Issues:**
- [#509](https://github.com/pieces-app/support/issues/509): [Obsidian]
- [#499](https://github.com/pieces-app/support/issues/499): Demo Chat are stuck loading
- [#505](https://github.com/pieces-app/support/issues/505): PFD Onboarding: Context exceeded" error on first short message

### 2. Pieces Onboarding Issues on macOS
Users are experiencing issues with the Pieces onboarding process on macOS, including blank onboarding screens, errors generating demo data, and "Context Exceeded" errors. These issues appear to be related to database and configuration errors. Solutions include waiting for the next Pieces release, manually deleting problematic folders, and providing detailed system information for troubleshooting.

**Related Issues:**
- [#504](https://github.com/pieces-app/support/issues/504): Personalizing during installation broken on macOS 12.7.6
- [#501](https://github.com/pieces-app/support/issues/501): Onboarding doesn't generate pieces nor demo chats
- [#505](https://github.com/pieces-app/support/issues/505): PFD Onboarding: Context exceeded" error on first short message

### 3. Claude LLM Context Exceeded Error
Users are experiencing "Context exceeded" errors when using the Claude LLM, particularly during onboarding and with short messages. This issue is known and linked to issue #487. A fix is expected in the next Pieces OS release.

**Related Issues:**
- [#508](https://github.com/pieces-app/support/issues/508): Message exceeded the context limit for claude LLM Issue
- [#505](https://github.com/pieces-app/support/issues/505): PFD Onboarding: Context exceeded" error on first short message
- [#502](https://github.com/pieces-app/support/issues/502): Not generating the response

### 4. Pieces OS and VS Code Extension Issues
Users report various issues with Pieces OS and its VS Code extension, including slow performance, UI freezes, and failure to launch. These issues may stem from plugin conflicts, version incompatibility, or network configuration problems. Solutions involve updating to the latest versions, checking network settings, and collaborating with Pieces support for debugging.

**Related Issues:**
- [#271](https://github.com/pieces-app/support/issues/271): Pasting in VS Code causes delay
- [#428](https://github.com/pieces-app/support/issues/428): VSCODE Extension, Pieces Copilot line wrapping setting location or settings.json options??
- [#474](https://github.com/pieces-app/support/issues/474): Pieces OS apparently stuck - VS extension not working

### 5. Pieces OS Conflicts with Firefox and Visual Studio
Users report conflicts between Pieces OS and Firefox, with Firefox instances getting stuck under the Pieces OS process. Additionally, there are reported issues with the Pieces OS Visual Studio extension, causing it to malfunction or fail to launch. Proposed solutions include disabling the WorkStream Pattern Engine in Pieces OS and updating to the latest Pieces OS and Visual Studio extension versions.

**Related Issues:**
- [#267](https://github.com/pieces-app/support/issues/267): FireFox not functioning properly under WorkStream Pattern Engine
- [#474](https://github.com/pieces-app/support/issues/474): Pieces OS apparently stuck - VS extension not working
- [#503](https://github.com/pieces-app/support/issues/503): Something went wrong with processing


## Recommendations
- **Prioritize UI/UX Improvements for Pieces for Developers:** The high frequency of "Pieces for Developers UI Bugs" suggests a need to prioritize UI/UX improvements in upcoming releases. Focus on resolving glitches, loading errors, and confusing UI elements related to Copilot and Demo Chat.
- **Investigate and Resolve macOS Onboarding Issues:** Address the recurring "Pieces Onboarding Issues on macOS."  This includes blank screens, demo data errors, and "Context Exceeded" errors. Ensure onboarding is smooth to avoid frustrating new users.
- **Provide Clearer Communication and Workarounds for Claude LLM Context Errors:** The "Claude LLM Context Exceeded Error" is a known issue. Improve support documentation and messaging to acknowledge the issue, explain its cause, and offer potential workarounds while waiting for the fix in the next release.
- **Address Pieces OS and VS Code Extension Conflicts:** Investigate and resolve the reported conflicts between Pieces OS and Firefox and Visual Studio. This includes Firefox instances getting stuck and the VS Code extension malfunctioning. Compatibility issues can be detrimental to user experience.
- **Analyze and Improve Performance Bottlenecks:** Several reports mention slow performance, UI freezes, and crashes. Conduct thorough performance testing and optimization, particularly for resource-intensive operations like pasting code and handling large files.
- **Review and Update Support Documentation:** Ensure support documentation and FAQs are up-to-date with information on common issues, workarounds, and troubleshooting steps. This will empower users to self-resolve problems and reduce support ticket volume.
- **Gather Detailed System Information:** When users encounter errors, especially related to specific software or OS versions, ensure the support system gathers detailed system information (OS version, Pieces OS version, browser version, etc.) to aid in faster diagnosis and resolution.
- **Consider a Bug Bounty Program:** To incentivize community involvement in identifying and reporting bugs, consider implementing a bug bounty program. This can help uncover and address issues more quickly.

## Daily Reports
Here are the daily reports for this week:

- [report_175555](daily/2024-12-12/report_175555.md)
