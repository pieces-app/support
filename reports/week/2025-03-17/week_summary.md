# Support Ticket Report
- Generated: 2025-03-20 21:09:24
- Period: 2025-03-17 to 2025-03-20

## Summary
- **Total Tickets:** 15
- **Resolved:** 4
- **Open:** 11

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#650](https://github.com/pieces-app/support/issues/650) | Long Term Memory still slows down my PC, even after updating to LTM-2 | 12.36 |
| [#652](https://github.com/pieces-app/support/issues/652) | "Secret Message" Example doesn't work properly | 11.03 |
| [#648](https://github.com/pieces-app/support/issues/648) | Pieces Desktop not Launching on my Windows PC | 6.59 |
| [#537](https://github.com/pieces-app/support/issues/537) | Ollama Fails to Install on Linux | 5.71 |
| [#672](https://github.com/pieces-app/support/issues/672) | Invalid Port (at character 18) http://127.0.0.1:null/connect | 5.03 |

## Common Issues
### 1. Copilot Response Issues and Performance Degradation
Users report Pieces Copilot providing vague responses, claiming it's working on a solution. This often occurs after multiple requests in a session. Performance issues like slow response times and lagging are also frequent, particularly after updates. Solutions include switching LLMs, hard resetting runtime, and updating to the latest Pieces OS and Desktop versions.

**Related Issues:**
- [#666](https://github.com/pieces-app/support/issues/666): Response "I'll get back to you with my findings as soon as possible"
- [#315](https://github.com/pieces-app/support/issues/315): Pieces desktop application is very slow/laggy, not generating any response in copilot chat.
- [#652](https://github.com/pieces-app/support/issues/652): "Secret Message" Example doesn't work properly

### 2. Pieces OS High CPU Usage and Performance Issues
Users report slow performance, especially with Long Term Memory (LTM) enabled.  Issues persist across Windows versions and hardware.  Workarounds include disabling LTM, updating software, and moving data folders.  The Pieces team is actively investigating and releasing patches.

**Related Issues:**
- [#650](https://github.com/pieces-app/support/issues/650): Long Term Memory still slows down my PC, even after updating to LTM-2
- [#668](https://github.com/pieces-app/support/issues/668): Pieces stuck on 70% CPU on one processor interfering with other keyboard chain handlers. System became unresponsive
- [#315](https://github.com/pieces-app/support/issues/315): Pieces desktop application is very slow/laggy, not generating any response in copilot chat.

### 3. PiecesOS LTM Engine Activation and Performance Issues
Users reported difficulties enabling the Long Term Memory (LTM) engine in PiecesOS, often due to permission issues or system conflicts. This resulted in LTM functionality being unavailable or performing poorly. Solutions involved verifying and granting necessary permissions, ensuring system compatibility, and in some cases, reinstalling or updating PiecesOS.

**Related Issues:**
- [#669](https://github.com/pieces-app/support/issues/669): Pieces OS unable to enable LTM
- [#652](https://github.com/pieces-app/support/issues/652): "Secret Message" Example doesn't work properly
- [#668](https://github.com/pieces-app/support/issues/668): Pieces stuck on 70% CPU on one processor interfering with other keyboard chain handlers. System became unresponsive

### 4. Pieces OS and Pieces Desktop Connection Issues
Users report Pieces Desktop app failing to connect to Pieces OS after update. Issues include Ollama installation failure due to missing dependencies, Pieces for Developers not launching or connecting, and Pieces Desktop getting stuck during launch. Proposed solutions involve adding missing dependencies, fixing bugs in setup files, and database repair. Some issues require further troubleshooting and may involve live support.

**Related Issues:**
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#667](https://github.com/pieces-app/support/issues/667): Unable to open Pieces for Developers
- [#648](https://github.com/pieces-app/support/issues/648): Pieces Desktop not Launching on my Windows PC

### 5. Pieces Desktop App Failing to Launch
Users are reporting that the Pieces Desktop App is failing to launch on Windows. The issue seems to occur after an update, with the app getting stuck during initialization.  Troubleshooting steps like restarting, reinstalling, and checking antivirus have not resolved the problem.  Log files and system details are being gathered to identify the root cause. 

**Related Issues:**
- [#672](https://github.com/pieces-app/support/issues/672): Invalid Port (at character 18) http://127.0.0.1:null/connect
- [#671](https://github.com/pieces-app/support/issues/671): Invalid Port (at character 18) http://127.0.0.1:null/connect
- [#648](https://github.com/pieces-app/support/issues/648): Pieces Desktop not Launching on my Windows PC


## Recommendations
- **Prioritize resolving high-frequency issues:** Focus on addressing the top three common issues: Copilot response and performance, Pieces OS high CPU usage, and LTM engine activation problems. These recurring issues indicate potential systemic problems requiring immediate attention.
- **Improve communication around known issues:**  The high activity levels on certain tickets suggest users are encountering difficulties finding information or workarounds. Proactively communicate known issues, their impact, and potential workarounds through release notes, FAQs, and support articles.
- **Investigate and address connection issues:** The cluster of issues related to Pieces OS and Desktop connection, Ollama installation, and Pieces for Developers suggests potential integration problems. Investigate the root causes and prioritize fixes to ensure seamless user experience.
- **Enhance Desktop App stability and launch process:**  The reports of the Desktop App failing to launch, particularly after updates, point to potential issues with the update mechanism or app initialization.  Implement robust error handling, improve update stability, and provide clear instructions for troubleshooting launch issues.
- **Gather detailed system information:**  Request detailed system information, logs, and steps to reproduce the issue upfront to expedite troubleshooting. This will help in identifying patterns and potential system-specific conflicts.
- **Consider a bug bounty program:** Encourage users to report bugs and potential vulnerabilities by implementing a bug bounty program. This can help identify and address issues faster and improve overall product quality.
- **Proactive monitoring and performance optimization:** Implement proactive monitoring of Pieces OS and Desktop App performance to identify and address potential issues before they escalate. Optimize resource utilization, particularly for CPU-intensive features like LTM, to ensure smooth user experience.
- **Review and update documentation:** Ensure all support documentation, including FAQs, troubleshooting guides, and installation instructions, are up-to-date and comprehensive. Use clear language and step-by-step instructions to make it easy for users to find solutions.
- **Improve ticket triage and routing:**  Implement a more efficient ticket triage system to ensure that issues are routed to the appropriate team members quickly. This will help reduce resolution times and improve overall support efficiency.
- **Collect user feedback and act on it:**  Regularly collect user feedback on their support experiences and identify areas for improvement. Use this feedback to make informed decisions about support processes, documentation, and product development.

## Daily Reports
Here are the daily reports for this week:

- [report_210619](daily/2025-03-18/report_210619.md)
- [report_210632](daily/2025-03-19/report_210632.md)
- [report_131216](daily/2025-03-19/report_131216.md)
- [report_131126](daily/2025-03-20/report_131126.md)
- [report_210633](daily/2025-03-20/report_210633.md)
