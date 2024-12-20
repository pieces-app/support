# Support Ticket Report
- Generated: 2024-12-20 13:13:47
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
### 1. Pieces Desktop App loses connection to PiecesOS
Users report frequent disconnections between the Pieces Desktop App and PiecesOS on Windows 10.  This issue appears linked to recent updates and alternative installation locations.  Proposed solutions include reinstalling after deleting specific folders and a potential patch from the Pieces team to address installation location conflicts.

**Related Issues:**
- [#531](https://github.com/pieces-app/support/issues/531): Pieces Desktop App - Lost Connection to PiecesOS
- [#539](https://github.com/pieces-app/support/issues/539): Pieces Desktop App - Lost Connection to PiecesOS
- [#541](https://github.com/pieces-app/support/issues/541): Pieces Desktop App - Lost Connection to PiecesOS

### 2. Pieces App Onboarding and Window Resizing Issues
Users reported issues with the Pieces app onboarding process, particularly on macOS, where a fixed window size on smaller screens made it impossible to proceed. Additionally, some users experienced an inability to resize the app window. These issues stemmed from a lack of responsive window sizing and were addressed in version 3.3.1 by implementing automatic window size adjustment and allowing manual resizing during onboarding.

**Related Issues:**
- [#504](https://github.com/pieces-app/support/issues/504): Personalizing during installation broken on macOS 12.7.6
- [#470](https://github.com/pieces-app/support/issues/470): Unable to resize my pieces app
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app

### 3. Pieces OS Update Causes Plugin Issues and False Positives
Users report plugin malfunctions and antivirus software flagging Pieces OS after updating. Solutions include updating antivirus software, reporting false positives, reinstalling Pieces OS and plugins, and awaiting patches from the Pieces team to address compatibility and false positive triggers.

**Related Issues:**
- [#543](https://github.com/pieces-app/support/issues/543): OSX/Nukesped.ext reported by VirusBarrier
- [#530](https://github.com/pieces-app/support/issues/530): Vscode and PHPStorm plugins stopped working after Pieces OS update
- [#531](https://github.com/pieces-app/support/issues/531): Pieces Desktop App - Lost Connection to PiecesOS

### 4. PiecesOS Crashes When Adding Folders
Users are reporting that the Pieces desktop app crashes or loses connection to PiecesOS when attempting to add folders to their context. This issue appears to be related to specific Windows builds and is currently under investigation by the Pieces team. A potential fix is being worked on, and users are encouraged to check for updates and refer to related GitHub issues for the latest information.

**Related Issues:**
- [#533](https://github.com/pieces-app/support/issues/533): Taskbar is not able to be  used while accessing pieces
- [#542](https://github.com/pieces-app/support/issues/542): Pieces Desktop App - Lost Connection to PiecesOS
- [#539](https://github.com/pieces-app/support/issues/539): Pieces Desktop App - Lost Connection to PiecesOS

### 5. PiecesOS crashes when uploading folders
Users are experiencing crashes in the PiecesOS desktop app on Windows 10 and 11 when attempting to upload folders as context. Uploading individual files appears to work. The issue seems to be related to specific Windows builds and the Pieces team is actively investigating and requesting affected users to provide more information.

**Related Issues:**
- [#507](https://github.com/pieces-app/support/issues/507): Pieces for Developers app keeps crashing continuously on attempts to upload files and folder and needs restart on my windows 11 laptop
- [#536](https://github.com/pieces-app/support/issues/536): Bug: Adding Folder as context (typescript repo) appears to crash PiecesOS within the Copilot
- [#542](https://github.com/pieces-app/support/issues/542): Pieces Desktop App - Lost Connection to PiecesOS


## Recommendations
- **Prioritize resolution of PiecesOS crashes:** The most frequent and active tickets relate to PiecesOS crashing, especially on Windows, when adding folders or after updates. Focus development resources on identifying and fixing these crashes to improve user experience and reduce support volume.
- **Investigate and address plugin compatibility issues:** Several tickets report plugin malfunctions after PiecesOS updates. Implement stricter compatibility checks during updates and provide clearer guidance to users on plugin management.
- **Improve error messaging and troubleshooting:** Vague error messages like "Lost connection to PiecesOS" frustrate users. Enhance error reporting to provide specific details, enabling users to self-troubleshoot or providing support teams with better information.
- **Review onboarding process for various screen sizes:** Issues were reported with onboarding on smaller screens. Ensure the onboarding process is thoroughly tested on different screen sizes and resolutions to avoid similar problems in the future.
- **Proactively communicate known issues and workarounds:**  Maintain a visible and up-to-date knowledge base with information on known issues, workarounds, and expected resolution timelines. This can reduce support requests and user frustration.
- **Gather more detailed diagnostics:**  When crashes occur, gather more comprehensive logs and system information to help developers identify the root cause more efficiently. This may involve prompting users for permission to collect additional data during crash reporting.
- **Consider a dedicated bug bounty program:**  Incentivize users to report bugs and security vulnerabilities by establishing a bug bounty program. This can help identify and address issues more quickly. 

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
- [report_130954](daily/2024-12-20/report_130954.md)
