# Support Ticket Report
- Generated: 2025-05-17 05:08:19
- Period: 2025-05-12 to 2025-05-17

## Summary
- **Total Tickets:** 6
- **Resolved:** 1
- **Open:** 5

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#711](https://github.com/pieces-app/support/issues/711) | Unable to Connect to Pieces Servers | 5.68 |
| [#315](https://github.com/pieces-app/support/issues/315) | Pieces desktop application is very slow/laggy, not generating any response in copilot chat. | 4.48 |
| [#712](https://github.com/pieces-app/support/issues/712) | copy button in pieces vs code extension keeps loading indefinitely. | 4.42 |
| [#691](https://github.com/pieces-app/support/issues/691) | OS: login does not work ( /os/sign_in HTTP 500) | 4.30 |
| [#710](https://github.com/pieces-app/support/issues/710) | Long Term Memory 2 stills slow down my macbook pro with intel chipset. | 3.50 |

## Common Issues
### 1. Pieces Desktop App Performance and Connectivity Issues
Users are experiencing slow performance, infinite loading of the copy button in the VS Code extension, and inability to connect to Pieces servers.  Issues appear across different Pieces OS versions (10.0.1, 11.3.6) on Windows.  Suggested troubleshooting includes checking internet connection, switching networks, and restarting Pieces OS. 

**Related Issues:**
- [#712](https://github.com/pieces-app/support/issues/712): copy button in pieces vs code extension keeps loading indefinitely.
- [#315](https://github.com/pieces-app/support/issues/315): Pieces desktop application is very slow/laggy, not generating any response in copilot chat.
- [#711](https://github.com/pieces-app/support/issues/711): Unable to Connect to Pieces Servers

### 2. Pieces OS login and connectivity issues
Users are experiencing login failures, HTTP 500 errors on /os/sign_in, and "unable to reach cloud services" messages.  Issues appear across Windows and Linux on various OS versions. Check local network connectivity, Pieces OS logs, and ensure Pieces servers are accessible. Consider updating to the latest OS version.

**Related Issues:**
- [#691](https://github.com/pieces-app/support/issues/691): OS: login does not work ( /os/sign_in HTTP 500)
- [#711](https://github.com/pieces-app/support/issues/711): Unable to Connect to Pieces Servers
- [#315](https://github.com/pieces-app/support/issues/315): Pieces desktop application is very slow/laggy, not generating any response in copilot chat.

### 3. Performance Issues and Slow Response in Pieces Desktop App
Users are experiencing slowdowns and lagging in the Pieces desktop application, especially on macOS and Windows systems.  High CPU and GPU usage have been reported. Additionally, some users have encountered issues with LTM 2 not clearing properly, leading to decreased performance over time.  Troubleshooting steps include checking system resources, clearing LTM, and ensuring the app is up-to-date.

**Related Issues:**
- [#710](https://github.com/pieces-app/support/issues/710): Long Term Memory 2 stills slow down my macbook pro with intel chipset.
- [#315](https://github.com/pieces-app/support/issues/315): Pieces desktop application is very slow/laggy, not generating any response in copilot chat.
- [#709](https://github.com/pieces-app/support/issues/709): LTM does not clear


## Recommendations
- Investigate and resolve the "Unable to Connect to Pieces Servers" issue (Ticket 711) as it has the highest activity level and impacts multiple users.
- Address the performance issues in the Pieces desktop application (Tickets 315, 712, 710) affecting Windows and macOS users, including slow response times and high resource usage.
- Look into the reported issue with LTM 2 not clearing properly (Ticket 709) as it contributes to performance degradation.
- Investigate the OS login issue with HTTP 500 errors on /os/sign_in (Ticket 691) reported on Linux.
- Improve communication to users regarding ongoing issues and troubleshooting steps, especially for connectivity problems and performance issues.
- Monitor Pieces OS logs and server status to proactively identify and address potential issues.
- Consider adding more specific error messages and logging to aid in debugging and troubleshooting connectivity issues.
- Prioritize bug fixes related to core functionalities like copying in VS Code extension and cloud service connectivity.
- Gather more data on user environments and OS versions to identify patterns and potential compatibility issues.
- Review and update documentation regarding LTM clearing and troubleshooting performance issues in the desktop application and VS Code extension.
- Implement performance monitoring and alerting to proactively detect and address performance regressions in the future.
- Consider implementing a system for tracking and prioritizing common issues based on frequency and activity level to streamline support operations.
- Investigate the root cause of the 404 error related to the Gemini Pro model mentioned in several ticket descriptions.
- Provide users with clear instructions on how to report bugs and provide helpful information for troubleshooting, such as OS version, Pieces OS version, and steps to reproduce the issue.
- Improve error handling within the Pieces desktop application and VS Code extension to provide more informative error messages to users and facilitate faster resolution times.
- Develop a more robust testing strategy to catch performance and connectivity issues before they reach production.
- Consider implementing a system for automatically collecting user feedback and bug reports to improve the efficiency of issue identification and prioritization.
- Explore potential improvements to the LTM 2 clearing process to ensure it functions as expected and provide feedback to users upon completion.
- Investigate the possibility of optimizing the Pieces desktop application and VS Code extension to reduce resource consumption and improve performance, especially on macOS and Windows systems with lower specifications.
- Provide users with a dedicated channel for reporting performance issues and sharing system information to aid in diagnosing and resolving performance-related problems more effectively.
- Consider implementing a system for automatically detecting and suggesting solutions to common issues based on user-reported data and existing knowledge base articles.
- Develop a more comprehensive troubleshooting guide for common issues, including connectivity problems, performance issues, and login failures, to empower users to resolve issues independently and reduce the burden on support staff.
- Regularly review and update the list of allowed apps for providing context to LTM 2 to ensure optimal performance and relevance.
- Investigate the possibility of implementing a feature to allow users to manually control the amount of data stored in LTM 2 to manage performance impact on their systems.
- Consider adding a progress indicator or confirmation message to the LTM clearing process in the Pieces desktop application to provide feedback to users and avoid confusion.
- Explore the possibility of implementing a system for automatically clearing LTM 2 after a certain period or based on user-defined criteria to prevent performance degradation over time.
- Provide training to support staff on common issues, troubleshooting steps, and internal tools to improve their efficiency and ability to resolve user problems quickly.
- Establish clear service level agreements (SLAs) for responding to and resolving support tickets to manage user expectations and ensure timely resolution of issues.
- Regularly analyze support ticket data to identify trends, common issues, and areas for improvement in the product and support processes.
- Implement a system for tracking customer satisfaction with support interactions to measure the effectiveness of support operations and identify areas for improvement.
- Foster a culture of continuous improvement within the support team by encouraging feedback, sharing best practices, and regularly reviewing support processes and performance metrics.
- Consider implementing a system for automatically escalating complex or high-priority issues to specialized support staff or development teams to ensure timely resolution.
- Explore the possibility of integrating the support system with other internal tools, such as bug tracking software and product development platforms, to streamline workflows and improve collaboration between support and engineering teams.
- Develop a knowledge base of common issues, troubleshooting steps, and FAQs to empower users to self-serve and reduce the volume of incoming support tickets.
- Consider implementing a community forum or other platform for users to connect with each other, share tips, and troubleshoot issues collaboratively.
- Proactively communicate known issues and planned maintenance activities to users through various channels, such as in-app notifications, email updates, and social media announcements.
- Regularly review and update support documentation and training materials to ensure they are accurate, up-to-date, and aligned with current product features and support processes.
- Consider implementing a system for automatically suggesting relevant knowledge base articles or community forum threads to users based on their support queries to facilitate self-service and reduce resolution times.
- Explore the possibility of integrating the support system with a chatbot or other automated support tools to handle simple queries and free up support staff to focus on more complex issues.
- Develop a system for tracking and analyzing user feedback on product features and support experiences to inform product development and improve the overall user experience.
- Continuously monitor industry best practices and emerging technologies in customer support to identify opportunities for innovation and improvement within the support organization.
- Foster a strong partnership between support and product development teams to ensure that user feedback and support insights are incorporated into the product roadmap and development process.
- Promote a customer-centric culture within the entire organization by emphasizing the importance of customer satisfaction and empowering all employees to contribute to a positive user experience.
- Regularly assess the effectiveness of support channels and tools to ensure they are meeting user needs and providing a seamless support experience.
- Consider implementing a system for proactively reaching out to users who are experiencing known issues or who may benefit from additional support resources.
- Develop a comprehensive onboarding program for new support staff to ensure they are equipped with the knowledge, skills, and tools necessary to provide effective support to users.
- Establish clear performance metrics and goals for the support team to track progress, identify areas for improvement, and recognize and reward outstanding performance.
- Regularly solicit feedback from support staff on their experiences, challenges, and suggestions for improvement to create a supportive and empowering work environment.
- Invest in ongoing training and development opportunities for support staff to enhance their skills, knowledge, and ability to provide exceptional customer service.
- Foster a culture of collaboration and knowledge sharing within the support team by encouraging peer-to-peer learning, mentoring, and cross-training initiatives.
- Develop a career development path for support staff to provide opportunities for growth and advancement within the organization.
- Regularly review and update support policies and procedures to ensure they are aligned with best practices and evolving customer expectations.
- Conduct regular customer satisfaction surveys to gather feedback on the overall support experience and identify areas for improvement.
- Analyze customer feedback data to identify trends, common pain points, and opportunities to improve the product and support processes.
- Implement a system for closing the loop with customers who have provided feedback to demonstrate that their input is valued and that action is being taken to address their concerns.
- Continuously monitor and analyze support metrics, such as resolution time, customer satisfaction scores, and ticket volume, to identify trends and areas for improvement.
- Use data-driven insights to inform decision-making and prioritize initiatives that will have the greatest impact on customer satisfaction and support efficiency.
- Regularly communicate support performance metrics and key insights to stakeholders across the organization to ensure alignment and transparency.
- Celebrate successes and recognize the contributions of the support team to foster a positive and motivating work environment.
- Continuously strive to improve the support experience by embracing innovation, adopting best practices, and putting the customer at the center of everything we do.

## Daily Reports
Here are the daily reports for this week:

- [report_131611](daily/2025-05-13/report_131611.md)
- [report_210647](daily/2025-05-13/report_210647.md)
- [report_210603](daily/2025-05-14/report_210603.md)
- [report_131422](daily/2025-05-15/report_131422.md)
- [report_210655](daily/2025-05-15/report_210655.md)
- [report_131506](daily/2025-05-16/report_131506.md)
- [report_210630](daily/2025-05-16/report_210630.md)
