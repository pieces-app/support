# Support Ticket Report
- Generated: 2024-12-22 13:12:24
- Period: 2024-12-16 to 2024-12-22

## Summary
- **Total Tickets:** 28
- **Resolved:** 13
- **Open:** 15

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#471](https://github.com/pieces-app/support/issues/471) | I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app | 17.36 |
| [#536](https://github.com/pieces-app/support/issues/536) | Bug: Adding Folder as context (on Windows) crashes PiecesOS within the Copilot | 10.83 |
| [#539](https://github.com/pieces-app/support/issues/539) | Pieces Desktop App - Lost Connection to PiecesOS | 10.25 |
| [#531](https://github.com/pieces-app/support/issues/531) | Pieces Desktop App - Lost Connection to PiecesOS | 9.80 |
| [#546](https://github.com/pieces-app/support/issues/546) | Unable to open Pieces Core Services | 8.20 |

## Common Issues
### 1. PiecesOS Connection Issues and High Resource Usage
Users report PiecesOS disconnecting, restarting, and causing high RAM/CPU usage. Suggested solutions include deleting specific folders, reinstalling, and using the 'Optimize Memory' feature. The Pieces team is actively investigating and patching these issues.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#531](https://github.com/pieces-app/support/issues/531): Pieces Desktop App - Lost Connection to PiecesOS
- [#539](https://github.com/pieces-app/support/issues/539): Pieces Desktop App - Lost Connection to PiecesOS

### 2. Copilot Processing Errors Due to Rate Limiting
Users are experiencing "Something went wrong with processing" errors, primarily due to rate limiting issues with certain Copilot models. Solutions include updating to Pieces OS 11.0.0, authenticating to increase rate limits, using alternative models like GPT-4o Mini, or contacting support for manual rate limit adjustments.

**Related Issues:**
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'
- [#535](https://github.com/pieces-app/support/issues/535): Bug: Claude 3.5 Sonnet Copilot response issues "I'm Sorry something went wrong with the processing..."

### 3. Pieces Desktop App Loses Connection to PiecesOS
Multiple users report the Pieces Desktop App losing connection, often when adding folders. This issue appears linked to deleting the 'com.pieces.os' folder and specific Windows builds. A patch was released, but some users still face the problem. The Pieces team is actively investigating and suggests checking GitHub issue #536 for updates.

**Related Issues:**
- [#531](https://github.com/pieces-app/support/issues/531): Pieces Desktop App - Lost Connection to PiecesOS
- [#539](https://github.com/pieces-app/support/issues/539): Pieces Desktop App - Lost Connection to PiecesOS
- [#542](https://github.com/pieces-app/support/issues/542): Pieces Desktop App - Lost Connection to PiecesOS

### 4. PiecesOS crashes on Windows when adding folders
Users on Windows experience crashes with PiecesOS (versions 10.1.15, 11.0.0) when adding folders as context. This issue seems to be related to specific OS builds and the app installer distribution.  A fix was implemented in version 11.0.2. Users facing this issue are advised to upgrade to the latest version.

**Related Issues:**
- [#536](https://github.com/pieces-app/support/issues/536): Bug: Adding Folder as context (on Windows) crashes PiecesOS within the Copilot
- [#507](https://github.com/pieces-app/support/issues/507): Pieces for Developers app keeps crashing continuously on attempts to upload files and folder and needs restart on my windows 11 laptop
- [#541](https://github.com/pieces-app/support/issues/541): Pieces Desktop App - Lost Connection to PiecesOS

### 5. Pieces OS Update Causes Plugin Issues and False Positives
Users report Pieces OS updates causing plugin malfunctions in VS Code and PHPStorm, displaying errors like port occupancy. Additionally, antivirus software, particularly Intego VirusBarrier, flags Pieces OS files as potential malware. Proposed solutions include updating virus definitions, reporting false positives, reinstalling Pieces OS, and awaiting plugin updates.

**Related Issues:**
- [#543](https://github.com/pieces-app/support/issues/543): OSX/Nukesped.ext reported by VirusBarrier
- [#530](https://github.com/pieces-app/support/issues/530): Vscode and PHPStorm plugins stopped working after Pieces OS update
- [#546](https://github.com/pieces-app/support/issues/546): Unable to open Pieces Core Services


## Recommendations
- **Address PiecesOS Stability and Performance:** Investigate and address the root causes of PiecesOS disconnections, restarts, and high resource usage reported in tickets #150, #531, #539. This may involve optimizing memory management, improving connection stability, and resolving potential memory leaks.
- **Mitigate Copilot Rate Limiting Issues:** Implement robust solutions to minimize the impact of rate limiting on Copilot functionality. This could include exploring alternative models, optimizing API usage, or providing clearer communication and options to users regarding rate limits (as discussed in tickets #471, #528, #535).
- **Improve Plugin Compatibility and Resolve Conflicts:** Investigate and address plugin malfunctions and conflicts arising from Pieces OS updates, particularly in VS Code and PHPStorm (tickets #530, #546). Ensure seamless integration and compatibility between Pieces OS, plugins, and popular IDEs.
- **Proactively Address Antivirus False Positives:** Collaborate with antivirus vendors like Intego to resolve false positive detections of Pieces OS files (ticket #543). This may involve submitting software for whitelisting and keeping virus definitions up-to-date.
- **Enhance Communication Around Known Issues:** Provide clear and timely communication to users regarding known issues, such as the Windows folder crash (tickets #536, #507, #541). Offer workarounds, updates on fixes, and maintain a dedicated space (e.g., forum, status page) for transparency and updates.

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
- [report_210548](daily/2024-12-21/report_210548.md)
- [report_130818](daily/2024-12-21/report_130818.md)
- [report_130815](daily/2024-12-22/report_130815.md)
