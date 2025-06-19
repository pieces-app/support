# Support Ticket Report
- Generated: 2025-06-19 21:09:01
- Period: 2025-06-16 to 2025-06-19

## Summary
- **Total Tickets:** 11
- **Resolved:** 0
- **Open:** 11

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#754](https://github.com/pieces-app/support/issues/754) | LTM-2.5 causes Chrome to freeze on large dynamic pages | 7.16 |
| [#713](https://github.com/pieces-app/support/issues/713) | LTM not working in Pieces CLI | 6.64 |
| [#759](https://github.com/pieces-app/support/issues/759) | Can't login/authentication message won't arrive | 5.68 |
| [#751](https://github.com/pieces-app/support/issues/751) | Unable to generate Workstream Summary | 5.61 |
| [#755](https://github.com/pieces-app/support/issues/755) | Pieces has become increasingly slow and is now unresponsive | 5.03 |

## Common Issues
### 1. Pieces OS Performance Issues and LTM Integration Failures
Multiple reports indicate performance problems with Pieces OS, including Chrome freezes with LTM 2.5 enabled on large webpages, LTM functionality not working in the Pieces CLI, and overall application slowness/unresponsiveness.  Common factors include various Pieces OS versions, Windows and macOS platforms, and different LLM models.  Disabling LTM 2.5 seems to resolve the Chrome freezing issue. Further investigation needed for CLI and general slowness.

**Related Issues:**
- [#754](https://github.com/pieces-app/support/issues/754): LTM-2.5 causes Chrome to freeze on large dynamic pages
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 2. LTM connection failures and slow performance
Users report LTM connectivity issues across Pieces CLI and Desktop, including 404 errors for the Gemini-Pro model and timeouts.  Slow performance and unresponsiveness are also observed, even with different LLM models.  Suggested solutions include verifying LTM settings, checking network connectivity, and ensuring sufficient resources.

**Related Issues:**
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#758](https://github.com/pieces-app/support/issues/758): Error Activating LTM-2.5 During Onboarding
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 3. LTM and model integration issues causing failures and slowdowns
Users report LTM context extraction failures in MCP and CLI despite functional LTM in the desktop app.  This manifests as "Failed to extract context" errors or slow/unresponsive behavior. Potential solutions include verifying MCP server LTM access, checking data access layers, and ensuring proper authentication and permissions. Additionally, general slowdowns and unresponsiveness have been reported, possibly related to LTM or model integration issues.

**Related Issues:**
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM
- [#713](https://github.com/pieces-app/support/issues/713): LTM not working in Pieces CLI
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive

### 4. Pieces Desktop App Issues on macOS and Linux
Users are experiencing various issues with the Pieces desktop app, including login failures due to missing verification codes on macOS, slow performance and unresponsiveness on macOS, and failure to initialize past the initial screen on Linux.  The issues appear to be related to recent updates and affect different Pieces OS versions. Further investigation is needed to identify the root cause and provide solutions.

**Related Issues:**
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#752](https://github.com/pieces-app/support/issues/752): Doesn't move past Initialising Desktop screen

### 5. Pieces Cloud Service Interruption Affecting Multiple Features
Users are experiencing slow performance or unresponsiveness with cloud-connected features like Copilot, Workstream summaries, snippet transforms, and snippet discovery.  Pieces is investigating cloud service issues and a potential cyber-related incident.  Data security is not impacted.  The Pieces team is working to restore full functionality.

**Related Issues:**
- [#756](https://github.com/pieces-app/support/issues/756): 🚨 Ongoing Service Interruption Impacting Pieces Products and Cloud-Connected Features
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive


## Recommendations
- Prioritize resolving LTM integration issues across Pieces OS, CLI, and Desktop applications, focusing on connectivity failures, slow performance, and context extraction errors.
- Investigate and address the Pieces Desktop application issues on macOS and Linux, including login failures, slow performance, and initialization problems.
- Address the ongoing cloud service interruption affecting Copilot, Workstream summaries, and other cloud-connected features, providing regular updates to users.
- Improve communication with users regarding ongoing issues and their resolution status, especially for high-impact problems like the cloud service interruption.
- Analyze the root causes of common issues like Chrome freezes with LTM enabled and application slowness, optimizing performance and resource usage.
- Develop more robust error handling and reporting mechanisms to better diagnose and resolve issues, particularly for LTM and model integration failures.
- Enhance documentation and troubleshooting guides for users experiencing common issues, including clear steps for verifying LTM settings, network connectivity, and resource availability.
- Consider implementing a more streamlined login process for macOS users, addressing the missing verification code issue.
- Prioritize bug fixes for critical issues like the inability to cancel LLLM downloads and the non-functional Workstream activities tab.
- Monitor and proactively address performance issues to prevent slowdowns and unresponsiveness, especially for resource-intensive features like LTM and cloud-connected functionalities.
- Implement a system for tracking and prioritizing user-reported issues based on frequency, activity level, and impact, ensuring timely resolution of critical problems.
- Improve the onboarding process for new users, addressing issues like LTM activation errors during onboarding.
- Investigate and address the MCP `ask_pieces_ltm` tool's failure to extract context, ensuring proper authentication, data access, and permissions.
- Enhance testing and quality assurance processes to identify and resolve issues before they impact users, particularly for new features and updates.
- Gather more detailed user feedback on specific issues to better understand their impact and identify potential solutions.
- Consider implementing a system for automatically detecting and reporting performance issues, enabling proactive monitoring and faster resolution.
- Develop a more comprehensive monitoring system for cloud services to quickly identify and address interruptions and potential cyber-related incidents.
- Improve internal communication and collaboration between engineering, security, and support teams to facilitate faster issue resolution.
- Develop a more robust incident management process to effectively handle service interruptions and other critical incidents.
- Regularly review and update support documentation and resources based on user feedback and common issues.
- Provide training to support staff on common issues, troubleshooting steps, and best practices for handling user inquiries.
- Implement a system for tracking and analyzing support ticket data to identify trends, prioritize areas for improvement, and measure the effectiveness of support operations.
- Consider implementing a user forum or community platform to facilitate peer-to-peer support and knowledge sharing.
- Proactively communicate known issues and workarounds to users through various channels, such as in-app notifications, blog posts, and social media updates.
- Encourage users to submit detailed bug reports and feedback to help improve product quality and support operations.
- Regularly review and update security protocols and procedures to protect user data and prevent cyber-related incidents.
- Develop a more comprehensive disaster recovery plan to minimize the impact of service interruptions and other unforeseen events.
- Continuously evaluate and improve support operations based on user feedback, performance metrics, and industry best practices.
- Explore and implement new tools and technologies to enhance support efficiency and effectiveness, such as chatbots, automated responses, and knowledge base systems.
- Foster a culture of continuous improvement within the support team, encouraging feedback, innovation, and collaboration.
- Regularly assess and address the needs and challenges of the support team, providing adequate resources, training, and support to ensure their success.
- Develop clear escalation paths and procedures for handling complex or critical issues, ensuring timely resolution and effective communication.
- Establish service level agreements (SLAs) for support response times and resolution times, ensuring accountability and meeting user expectations.
- Regularly review and update support policies and procedures to reflect best practices and evolving user needs.
- Conduct regular user surveys to gather feedback on support quality and identify areas for improvement.
- Analyze user feedback and support ticket data to identify opportunities for product improvements and bug fixes.
- Collaborate with product and engineering teams to address underlying product issues that contribute to support tickets.
- Develop a knowledge base of common issues and solutions, making it easily accessible to both users and support staff.
- Implement a system for tracking and managing customer satisfaction with support services, using metrics such as customer satisfaction scores (CSAT) and net promoter scores (NPS).
- Provide regular training to support staff on new product features, updates, and troubleshooting techniques.
- Encourage users to provide feedback on support interactions, using feedback forms or surveys.
- Develop a system for recognizing and rewarding outstanding support performance, motivating staff and promoting a culture of excellence.
- Foster a positive and supportive work environment for the support team, promoting teamwork, collaboration, and professional development.
- Regularly review and update support metrics and reporting dashboards, ensuring they provide accurate and actionable insights into support performance.
- Develop a system for proactively identifying and addressing potential support issues before they escalate, using data analysis and trend monitoring.
- Continuously monitor and adapt support operations to meet changing user needs and expectations, ensuring high-quality support and customer satisfaction.
- Establish clear communication channels between support and other departments, facilitating efficient collaboration and issue resolution.
- Develop a system for tracking and managing support costs, identifying opportunities for cost optimization and resource allocation.
- Regularly review and update support tools and technologies, ensuring they are up-to-date and meet the needs of the support team and users.
- Develop a comprehensive onboarding program for new support staff, ensuring they are adequately trained and equipped to handle user inquiries effectively.
- Foster a culture of customer-centricity within the support team, emphasizing the importance of empathy, active listening, and providing personalized support.
- Continuously seek feedback from users and the support team to identify areas for improvement and enhance support operations, ensuring high-quality support and customer satisfaction.

## Daily Reports
Here are the daily reports for this week:

- [report_131646](daily/2025-06-17/report_131646.md)
- [report_210659](daily/2025-06-17/report_210659.md)
- [report_210648](daily/2025-06-18/report_210648.md)
- [report_131708](daily/2025-06-18/report_131708.md)
- [report_050754](daily/2025-06-19/report_050754.md)
- [report_210641](daily/2025-06-19/report_210641.md)
- [report_131600](daily/2025-06-19/report_131600.md)
