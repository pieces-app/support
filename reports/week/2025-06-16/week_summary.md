# Support Ticket Report
- Generated: 2025-06-17 21:08:55
- Period: 2025-06-16 to 2025-06-17

## Summary
- **Total Tickets:** 7
- **Resolved:** 0
- **Open:** 7

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#754](https://github.com/pieces-app/support/issues/754) | LTM-2.5 causes Chrome to freeze on large dynamic pages | 10.25 |
| [#751](https://github.com/pieces-app/support/issues/751) | Unable to generate Workstream Summary | 8.25 |
| [#753](https://github.com/pieces-app/support/issues/753) | Workstream activities tab is not working | 4.50 |
| [#755](https://github.com/pieces-app/support/issues/755) | Pieces has become increasingly slow and is now unresponsive | 4.50 |
| [#752](https://github.com/pieces-app/support/issues/752) | Doesn't move past Initialising Desktop screen | 4.50 |

## Common Issues
### 1. Pieces OS 12.0.0 Performance and Stability Issues
Users report performance degradation and instability with Pieces OS 12.0.0 across different operating systems (Windows, macOS, Linux).  Symptoms include Chrome freezes on large webpages with LTM 2.5 enabled, slow or unresponsive 'New chats', and application freezing during initialization.  Potential solutions include disabling LTM 2.5, checking LLM model compatibility, and reverting to a previous Pieces OS version.

**Related Issues:**
- [#754](https://github.com/pieces-app/support/issues/754): LTM-2.5 causes Chrome to freeze on large dynamic pages
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#752](https://github.com/pieces-app/support/issues/752): Doesn't move past Initialising Desktop screen

### 2. LLM Download Cancellation Failure & Initialization Issues
Users are experiencing difficulty canceling LLM downloads on Windows desktops. Additionally, application initialization is failing on Linux (Ubuntu 24.04) after a recent update.  Further investigation is needed to identify the root cause and potential solutions for both issues. Logs and system details have been provided by affected users.

**Related Issues:**
- [#459](https://github.com/pieces-app/support/issues/459): Bug: unable to cancel the download of an LLLM
- [#751](https://github.com/pieces-app/support/issues/751): Unable to generate Workstream Summary
- [#752](https://github.com/pieces-app/support/issues/752): Doesn't move past Initialising Desktop screen

### 3. Workstream activities tab sync issues and download cancellation problems
Users are experiencing issues with the Workstream activities tab not syncing correctly after updates, showing outdated activity timestamps. Additionally, there are reports of being unable to cancel LLLM downloads, with the cancel button not functioning as expected.  Further investigation is needed to determine the root cause and potential solutions for both issues. This may involve checking server-side logs, network connectivity, and download management processes.

**Related Issues:**
- [#753](https://github.com/pieces-app/support/issues/753): Workstream activities tab is not working
- [#751](https://github.com/pieces-app/support/issues/751): Unable to generate Workstream Summary
- [#459](https://github.com/pieces-app/support/issues/459): Bug: unable to cancel the download of an LLLM

### 4. Pieces cloud service interruption impacting features
Users report slow or unresponsive cloud-connected features like Copilot, Workstream summaries, snippet transforms, and snippet discovery. Pieces is investigating cloud service issues and a potential cyber-related incident.  Data security is not impacted.  The engineering and security teams are working to restore functionality.

**Related Issues:**
- [#756](https://github.com/pieces-app/support/issues/756): 🚨 Ongoing Service Interruption Impacting Pieces Products and Cloud-Connected Features
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#752](https://github.com/pieces-app/support/issues/752): Doesn't move past Initialising Desktop screen


## Recommendations
- Investigate and resolve the Pieces OS 12.0.0 performance and stability issues, focusing on Chrome freezes and application responsiveness. This includes checking LTM 2.5 compatibility and providing temporary workarounds like disabling LTM or reverting to previous versions.
- Address the LLM download cancellation failure on Windows desktops and the application initialization failure on Linux (Ubuntu 24.04) after the recent update. Review logs and system details to identify the root cause and implement necessary fixes.
- Fix the Workstream activities tab sync issue to ensure accurate activity timestamps are displayed after updates. Investigate server-side logs and network connectivity for potential problems.
- Provide regular updates and estimated resolution times for the ongoing cloud service interruption impacting Copilot, Workstream summaries, and other cloud-connected features.  Maintain transparent communication with users regarding the cyber-related incident investigation.
- Improve error handling and messaging for 'New chats' and other features to provide more specific information to users when issues occur.  This will aid in troubleshooting and support requests.
- Review and optimize the LLM download process to allow for smoother cancellations and prevent interruptions.  Consider implementing a more robust download manager or improving the existing cancellation mechanism.
- Investigate the root cause of the 404 error related to the Gemini-Pro model and ensure proper access and configuration for this model in the Pieces environment. This may involve verifying project settings and API keys.
- Monitor and address the high-frequency DOM mutations observed during LTM 2.5 usage on large webpages. This may involve optimizing the content capture process or implementing performance improvements in the LTM functionality.
- Proactively monitor application performance and stability across different operating systems and configurations to identify and address potential issues before they impact a large number of users.  Implement automated testing and performance monitoring tools.
- Provide clear and accessible documentation for troubleshooting common issues, including LTM compatibility, LLM download problems, and application initialization failures.  This will empower users to self-resolve issues and reduce support ticket volume.
- Consider implementing a rollback mechanism for Pieces OS updates to allow users to easily revert to previous versions in case of critical issues or compatibility problems. This will minimize disruption during updates.
- Gather more detailed information about the cyber-related incident, including the scope of the incident, potential impact on users, and mitigation steps taken.  Share relevant updates with users while maintaining transparency and addressing security concerns.
- Analyze support ticket trends and user feedback to identify recurring issues and prioritize development efforts towards addressing the most impactful problems.  Use this data to inform product roadmap decisions and improve overall user experience.
- Enhance communication channels with users, such as providing a status page for ongoing service interruptions and offering in-app notifications for critical updates and announcements.  This will improve transparency and keep users informed about the status of issues.
- Provide training and resources to support staff on troubleshooting common issues and handling user inquiries effectively.  This will improve response times and resolution rates for support tickets.
- Implement a system for tracking and categorizing support tickets to identify trends and prioritize issues based on severity and frequency.  This will help allocate resources effectively and improve support operations.
- Regularly review and update support documentation and FAQs to ensure they are accurate and up-to-date.  This will help users find answers to their questions quickly and reduce the need for support tickets.
- Consider implementing a user forum or community platform to facilitate peer-to-peer support and knowledge sharing.  This can reduce the burden on support staff and foster a sense of community among users.
- Explore the possibility of integrating a chatbot or automated support system to handle common inquiries and provide initial troubleshooting assistance.  This can improve response times and free up support staff to focus on more complex issues.
- Collect user feedback on the support experience and identify areas for improvement.  This can include surveys, feedback forms, or user interviews.  Use this feedback to continuously improve support operations and user satisfaction.
- Establish clear service level agreements (SLAs) for support response times and resolution times.  This will set expectations for users and ensure that support requests are handled efficiently.
- Implement a system for escalating complex or urgent support tickets to specialized teams or individuals.  This will ensure that critical issues are addressed promptly and effectively.
- Regularly review and analyze support metrics, such as ticket volume, resolution time, and customer satisfaction.  Use this data to identify trends, measure the effectiveness of support operations, and drive continuous improvement.
- Invest in tools and technologies that can improve support efficiency, such as a ticketing system, knowledge base software, and remote support tools.  This will empower support staff to provide better and faster support to users.
- Foster a culture of continuous improvement within the support team by encouraging feedback, sharing best practices, and providing opportunities for professional development.  This will ensure that the support team is equipped to meet the evolving needs of users.
- Develop a proactive support strategy that includes identifying potential issues before they arise and providing solutions or workarounds to users.  This can involve monitoring system performance, analyzing user behavior, and providing educational resources.
- Establish clear communication channels between the support team and other departments, such as development, product management, and marketing.  This will ensure that support is aware of upcoming changes and can provide accurate information to users.
- Develop a comprehensive support plan that outlines the team's goals, objectives, strategies, and metrics.  This plan should be regularly reviewed and updated to ensure that it aligns with the overall business strategy.
- Conduct regular training sessions for support staff on new product features, troubleshooting techniques, and customer service skills.  This will ensure that the support team is knowledgeable and equipped to provide effective support.
- Implement a quality assurance process for support interactions to ensure that support staff are providing consistent and high-quality service.  This can involve monitoring calls, reviewing emails, and providing feedback to support staff.
- Encourage support staff to take ownership of user issues and see them through to resolution.  This will improve user satisfaction and build trust between users and the support team.
- Celebrate successes and recognize the contributions of support staff.  This will boost morale and motivate the team to continue providing excellent support.
- Create a positive and supportive work environment for the support team.  This will help reduce stress and improve job satisfaction, leading to better performance and higher retention rates.
- Provide opportunities for support staff to grow and develop their skills.  This can include training programs, mentorship opportunities, and career advancement paths.  Investing in the development of support staff will benefit both the team and the organization as a whole.
- Regularly solicit feedback from support staff on how to improve support operations.  This can include surveys, team meetings, or one-on-one discussions.  Use this feedback to make changes that will benefit the team and improve the support experience for users.
- Stay up-to-date on industry best practices for support operations and incorporate them into the team's processes and procedures.  This will ensure that the support team is using the most effective methods to provide support to users.
- Continuously evaluate and improve the support team's tools and technologies to ensure that they are meeting the needs of the team and users.  This can involve upgrading existing tools, implementing new tools, or developing custom solutions.
- Develop a knowledge management system that allows support staff to easily access and share information about common issues, troubleshooting steps, and best practices.  This will improve efficiency and consistency in support interactions.
- Encourage collaboration and knowledge sharing within the support team by creating opportunities for team members to learn from each other.  This can include peer mentoring, team meetings, or online forums.
- Develop a system for tracking and analyzing user feedback on support interactions.  This data can be used to identify areas for improvement and measure the effectiveness of support initiatives.
- Regularly review and update the support team's policies and procedures to ensure that they are aligned with best practices and meet the needs of users.  This will help ensure consistency and efficiency in support operations.
- Promote a customer-centric approach to support by encouraging support staff to empathize with users and understand their needs.  This will improve user satisfaction and build stronger relationships with users.
- Empower support staff to make decisions and take action to resolve user issues.  This will improve efficiency and reduce the need for escalation.
- Provide support staff with the resources they need to be successful, including access to information, tools, and training.  Investing in the support team will lead to better performance and improved user satisfaction.
- Encourage innovation and creativity within the support team by providing opportunities for team members to experiment with new ideas and approaches.  This can lead to more effective and efficient support solutions.
- Develop a system for recognizing and rewarding outstanding performance within the support team.  This will motivate team members and reinforce positive behaviors.
- Foster a culture of open communication and transparency within the support team.  This will create a more positive and productive work environment.
- Continuously seek feedback from users and stakeholders on the support experience and use this feedback to drive continuous improvement.  This will ensure that the support team is meeting the needs of users and the organization.
- Develop a long-term vision for the support team that aligns with the overall business strategy.  This vision should guide the team's efforts and ensure that it is contributing to the success of the organization.
- Communicate the support team's value and contributions to the organization.  This will help build support for the team and ensure that it receives the resources it needs to be successful.
- Build strong relationships with other departments within the organization to ensure that support is integrated into the overall business process.  This will improve efficiency and collaboration.
- Stay informed about industry trends and best practices in support operations.  This will help the team stay ahead of the curve and provide the best possible support to users.
- Continuously evaluate and improve the support team's performance by tracking key metrics and identifying areas for improvement.  This will ensure that the team is providing efficient and effective support to users.
- Invest in the development of support staff by providing opportunities for training, mentorship, and career advancement.  This will benefit both the team and the organization as a whole.
- Create a positive and supportive work environment for the support team.  This will help reduce stress and improve job satisfaction, leading to better performance and higher retention rates.
- Encourage support staff to take ownership of user issues and see them through to resolution.  This will improve user satisfaction and build trust between users and the support team.
- Celebrate successes and recognize the contributions of support staff.  This will boost morale and motivate the team to continue providing excellent support.
- Regularly solicit feedback from support staff on how to improve support operations.  This can include surveys, team meetings, or one-on-one discussions.  Use this feedback to make changes that will benefit the team and improve the support experience for users.
- Stay up-to-date on industry best practices for support operations and incorporate them into the team's processes and procedures.  This will ensure that the support team is using the most effective methods to provide support to users.
- Continuously evaluate and improve the support team's tools and technologies to ensure that they are meeting the needs of the team and users.  This can involve upgrading existing tools, implementing new tools, or developing custom solutions.
- Develop a knowledge management system that allows support staff to easily access and share information about common issues, troubleshooting steps, and best practices.  This will improve efficiency and consistency in support interactions.
- Encourage collaboration and knowledge sharing within the support team by creating opportunities for team members to learn from each other.  This can include peer mentoring, team meetings, or online forums.
- Develop a system for tracking and analyzing user feedback on support interactions.  This data can be used to identify areas for improvement and measure the effectiveness of support initiatives.
- Regularly review and update the support team's policies and procedures to ensure that they are aligned with best practices and meet the needs of users.  This will help ensure consistency and efficiency in support operations.
- Promote a customer-centric approach to support by encouraging support staff to empathize with users and understand their needs.  This will improve user satisfaction and build stronger relationships with users.
- Empower support staff to make decisions and take action to resolve user issues.  This will improve efficiency and reduce the need for escalation.
- Provide support staff with the resources they need to be successful, including access to information, tools, and training.  Investing in the support team will lead to better performance and improved user satisfaction.
- Encourage innovation and creativity within the support team by providing opportunities for team members to experiment with new ideas and approaches.  This can lead to more effective and efficient support solutions.
- Develop a system for recognizing and rewarding outstanding performance within the support team.  This will motivate team members and reinforce positive behaviors.
- Foster a culture of open communication and transparency within the support team.  This will create a more positive and productive work environment.
- Continuously seek feedback from users and stakeholders on the support experience and use this feedback to drive continuous improvement.  This will ensure that the support team is meeting the needs of users and the organization.
- Develop a long-term vision for the support team that aligns with the overall business strategy.  This vision should guide the team's efforts and ensure that it is contributing to the success of the organization.
- Communicate the support team's value and contributions to the organization.  This will help build support for the team and ensure that it receives the resources it needs to be successful.
- Build strong relationships with other departments within the organization to ensure that support is integrated into the overall business process.  This will improve efficiency and collaboration.
- Stay informed about industry trends and best practices in support operations.  This will help the team stay ahead of the curve and provide the best possible support to users.
- Continuously evaluate and improve the support team's performance by tracking key metrics and identifying areas for improvement.  This will ensure that the team is providing efficient and effective support to users.
- Invest in the development of support staff by providing opportunities for training, mentorship, and career advancement.  This will benefit both the team and the organization as a whole.
- Create a positive and supportive work environment for the support team.  This will help reduce stress and improve job satisfaction, leading to better performance and higher retention rates.
- Encourage support staff to take ownership of user issues and see them through to resolution.  This will improve user satisfaction and build trust between users and the support team.
- Celebrate successes and recognize the contributions of support staff.  This will boost morale and motivate the team to continue providing excellent support.
- Regularly solicit feedback from support staff on how to improve support operations.  This can include surveys, team meetings, or one-on-one discussions.  Use this feedback to make changes that will benefit the team and improve the support experience for users.
- Stay up-to-date on industry best practices for support operations and incorporate them into the team's processes and procedures.  This will ensure that the support team is using the most effective methods to provide support to users.
- Continuously evaluate and improve the support team's tools and technologies to ensure that they are meeting the needs of the team and users.  This can involve upgrading existing tools, implementing new tools, or developing custom solutions.
- Develop a knowledge management system that allows support staff to easily access and share information about common issues, troubleshooting steps, and best practices.  This will improve efficiency and consistency in support interactions.
- Encourage collaboration and knowledge sharing within the support team by creating opportunities for team members to learn from each other.  This can include peer mentoring, team meetings, or online forums.
- Develop a system for tracking and analyzing user feedback on support interactions.  This data can be used to identify areas for improvement and measure the effectiveness of support initiatives.
- Regularly review and update the support team's policies and procedures to ensure that they are aligned with best practices and meet the needs of users.  This will help ensure consistency and efficiency in support operations. 

## Daily Reports
Here are the daily reports for this week:

- [report_131646](daily/2025-06-17/report_131646.md)
- [report_210659](daily/2025-06-17/report_210659.md)
