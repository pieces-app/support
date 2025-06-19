# Support Ticket Report
- Generated: 2025-06-19 13:18:06
- Period: 2025-06-16 to 2025-06-19

## Summary
- **Total Tickets:** 10
- **Resolved:** 0
- **Open:** 10

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#754](https://github.com/pieces-app/support/issues/754) | LTM-2.5 causes Chrome to freeze on large dynamic pages | 7.93 |
| [#751](https://github.com/pieces-app/support/issues/751) | Unable to generate Workstream Summary | 5.61 |
| [#755](https://github.com/pieces-app/support/issues/755) | Pieces has become increasingly slow and is now unresponsive | 5.03 |
| [#759](https://github.com/pieces-app/support/issues/759) | Can't login/authentication message won't arrive | 4.42 |
| [#758](https://github.com/pieces-app/support/issues/758) | Error Activating LTM-2.5 During Onboarding | 4.42 |

## Common Issues
### 1. Pieces Fails to Access LTM Data via MCP
The `ask_pieces_ltm` MCP tool consistently returns "Failed to extract context" error, despite functional LTM within the Pieces application.  This affects various clients (Warp, Claude, curl) and persists across restarts and parameter variations.  Other MCP tools like `create_pieces_memory` work correctly. The issue likely lies in the MCP server's interaction with the LTM data access layer, possibly due to authentication, permissions, or initialization problems. 

**Related Issues:**
- [#747](https://github.com/pieces-app/support/issues/747): MCP `ask_pieces_ltm` tool consistently returns "Failed to extract context" despite functional LTM
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#754](https://github.com/pieces-app/support/issues/754): LTM-2.5 causes Chrome to freeze on large dynamic pages

### 2. Pieces Desktop App Issues on macOS and Linux
Users are experiencing various issues with the Pieces desktop app, including login failures due to missing verification codes on macOS, slow performance and unresponsiveness on macOS, and failure to initialize past the initial screen on Linux after the latest update.  Suggested solutions include checking online authentication services, optimizing app performance, and investigating compatibility issues with the latest update on Linux. Further investigation is needed to pinpoint the root causes and provide specific fixes.

**Related Issues:**
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#752](https://github.com/pieces-app/support/issues/752): Doesn't move past Initialising Desktop screen

### 3. LTM Activation and Workstream Summary Generation Errors
Users are experiencing issues with LTM-2.5 activation during onboarding, encountering TimeoutExceptions. Additionally, generating workstream summaries is failing with HTTP connection errors.  The PiecesOS version is 12.0.0. Further investigation into the LTM activation process and API endpoints for workstream summaries is needed. Download cancellation for LLLMs is also reported as non-functional.

**Related Issues:**
- [#758](https://github.com/pieces-app/support/issues/758): Error Activating LTM-2.5 During Onboarding
- [#751](https://github.com/pieces-app/support/issues/751): Unable to generate Workstream Summary
- [#459](https://github.com/pieces-app/support/issues/459): Bug: unable to cancel the download of an LLLM

### 4. Pieces Cloud Service Interruption Affecting Multiple Features
Users are experiencing slow performance or unresponsiveness with cloud-connected features like Copilot, Workstream summaries, snippet transforms, and snippet discovery.  Pieces is investigating cloud service issues and a potential cyber-related incident.  Data security is not impacted.  The engineering team is working to restore full functionality.

**Related Issues:**
- [#756](https://github.com/pieces-app/support/issues/756): 🚨 Ongoing Service Interruption Impacting Pieces Products and Cloud-Connected Features
- [#755](https://github.com/pieces-app/support/issues/755): Pieces has become increasingly slow and is now unresponsive
- [#759](https://github.com/pieces-app/support/issues/759): Can't login/authentication message won't arrive

### 5. Workstream activities tab sync issues and download cancellation problems
Users are experiencing issues with the Workstream activities tab not syncing correctly after updates, showing outdated activity times. Additionally, there are reports of being unable to cancel LLLM downloads, with the cancel button not functioning as expected.  Further investigation is needed to determine the root cause and potential solutions for both issues. This may involve checking server-side logs, network connectivity, and download management processes.

**Related Issues:**
- [#753](https://github.com/pieces-app/support/issues/753): Workstream activities tab is not working
- [#751](https://github.com/pieces-app/support/issues/751): Unable to generate Workstream Summary
- [#459](https://github.com/pieces-app/support/issues/459): Bug: unable to cancel the download of an LLLM


## Recommendations
- Investigate and resolve the "Failed to extract context" error in the `ask_pieces_ltm` MCP tool. This appears to be a recurring issue affecting multiple users.
- Address the performance issues in the Pieces desktop app on macOS. Users are reporting slowdowns and unresponsiveness, which hinders their workflow.
- Investigate and fix the login issues on macOS where users are not receiving verification codes. This prevents users from accessing the app.
- Address the issue on Linux where the desktop app fails to initialize after the latest update. This completely blocks users on Linux from using Pieces.
- Investigate and resolve the LTM-2.5 activation failures during onboarding. TimeoutExceptions are preventing users from enabling LTM.
- Fix the issue with generating workstream summaries, which is failing due to HTTP connection errors. This impacts users' ability to review their activity.
- Address the problem with the Workstream activities tab not syncing correctly after updates. This leads to inaccurate activity information.
- Fix the bug preventing users from canceling LLLM downloads. The non-functional cancel button creates a frustrating user experience.
- Monitor and address the ongoing cloud service interruption affecting Copilot, Workstream summaries, snippet transforms, and snippet discovery. Keep users informed about the progress of the investigation and restoration efforts.
- Prioritize these issues based on their frequency, activity level, and potential impact on users. Allocate resources accordingly to ensure timely resolution and improve user satisfaction.
- Improve communication with users regarding ongoing issues and their resolution status. Provide regular updates and transparent information to manage expectations and maintain trust.
- Enhance error logging and reporting mechanisms to gather more detailed information about issues, facilitating faster debugging and resolution.
- Implement automated testing and monitoring to catch issues early and prevent regressions. This will improve the overall stability and reliability of the Pieces platform.
- Collect user feedback on specific issues and pain points to better understand their impact and prioritize development efforts.
- Consider providing temporary workarounds or alternative solutions for affected users while permanent fixes are being developed.
- Review and optimize the onboarding process, particularly the LTM activation steps, to ensure a smooth and error-free experience for new users.
- Investigate potential resource conflicts or bottlenecks that may be contributing to performance issues, especially on macOS and with LTM-2.5 enabled.
- Analyze the download management process for LLLMs to identify the root cause of the cancellation bug and implement a robust solution.
- Review and update the documentation and support resources to address common issues and provide clear guidance to users.
- Proactively monitor system performance and user activity to identify potential issues before they escalate and impact a larger user base.
- Establish a clear escalation path for critical issues to ensure rapid response and resolution by the appropriate teams.
- Conduct thorough root cause analysis for recurring issues to prevent them from reoccurring in the future.
- Implement a system for tracking and prioritizing bug fixes and feature requests based on user impact and business needs.
- Regularly review and update support processes and tools to improve efficiency and effectiveness.
- Provide training and resources to support staff to equip them with the knowledge and skills to handle user inquiries effectively.
- Foster a culture of continuous improvement in support operations by encouraging feedback, innovation, and collaboration.
- Measure and track key support metrics, such as resolution time, customer satisfaction, and ticket volume, to identify areas for improvement and monitor progress.
- Communicate support performance and key learnings to stakeholders to ensure alignment and transparency.
- Collaborate with other teams, such as development and product management, to address systemic issues and improve the overall user experience.
- Stay informed about industry best practices and emerging trends in support operations to identify opportunities for innovation and improvement.
- Encourage users to report issues and provide feedback through multiple channels, such as in-app feedback forms, community forums, and social media.
- Analyze user feedback and support data to identify common themes and trends, which can inform product development and support strategies.
- Develop a knowledge base or FAQ section to address frequently asked questions and provide self-service support options to users.
- Consider implementing a chatbot or virtual assistant to handle basic inquiries and triage support requests.
- Personalize support interactions to create a positive user experience and build rapport with customers.
- Empower support staff to make decisions and resolve issues independently, reducing resolution time and improving customer satisfaction.
- Regularly review and update support documentation and training materials to ensure they are accurate and up-to-date.
- Conduct regular surveys or feedback sessions to gather input from users on their support experience and identify areas for improvement.
- Recognize and reward support staff for their contributions to create a positive and motivating work environment.
- Promote a culture of customer-centricity within the support team to ensure that user needs are always prioritized.
- Continuously evaluate and refine support processes and tools to optimize efficiency and effectiveness.
- Leverage automation and AI-powered tools to streamline support workflows and improve response times.
- Invest in training and development programs to enhance the skills and knowledge of support staff.
- Foster a collaborative environment within the support team to encourage knowledge sharing and problem-solving.
- Establish clear service level agreements (SLAs) for different types of support requests to manage user expectations and ensure timely resolution.
- Track and analyze support metrics to identify trends, measure performance, and drive continuous improvement.
- Communicate regularly with stakeholders about support performance, key challenges, and improvement initiatives.
- Stay up-to-date on industry best practices and emerging technologies in customer support to identify opportunities for innovation.
- Encourage users to provide feedback on their support experience to identify areas for improvement and enhance customer satisfaction.
- Develop a comprehensive support strategy that aligns with business goals and user needs.
- Build a strong support team with the right skills, knowledge, and attitude to provide excellent customer service.
- Create a positive and supportive work environment for the support team to foster motivation and engagement.
- Continuously evaluate and improve support processes and tools to optimize efficiency and effectiveness.
- Leverage technology and automation to streamline support workflows and enhance productivity.
- Measure and track key support metrics to monitor performance and identify areas for improvement.
- Communicate effectively with users and stakeholders to keep them informed and manage expectations.
- Stay informed about industry trends and best practices to ensure the support team is providing the best possible service.
- Foster a culture of customer-centricity within the support team to prioritize user needs and satisfaction.
- Empower support staff to make decisions and resolve issues independently, promoting efficiency and ownership.
- Provide regular training and development opportunities to enhance the skills and knowledge of support staff.
- Encourage feedback and collaboration within the support team to foster continuous improvement and innovation.
- Build strong relationships with other teams, such as development and product management, to address systemic issues and improve the overall user experience.
- Proactively identify and address potential support challenges before they escalate and impact users.
- Develop a knowledge base and self-service resources to empower users to find solutions to common issues independently.
- Implement a robust ticketing system to track and manage support requests efficiently.
- Utilize customer relationship management (CRM) tools to manage user interactions and personalize support experiences.
- Leverage analytics and reporting tools to gain insights into support performance and identify areas for improvement.
- Communicate support performance and key learnings to stakeholders to ensure transparency and alignment.
- Stay informed about industry best practices and emerging technologies to continuously improve support operations.
- Encourage user feedback and actively solicit suggestions for improvement to enhance the overall support experience.
- Prioritize user needs and satisfaction in all support interactions to build strong customer relationships and loyalty.
- Continuously evaluate and refine support processes and tools to optimize efficiency and effectiveness.
- Invest in the development and training of support staff to ensure they have the skills and knowledge to provide excellent service.
- Foster a culture of collaboration and innovation within the support team to drive continuous improvement.
- Measure and track key support metrics to monitor performance and identify areas for optimization.
- Communicate effectively with users and stakeholders to manage expectations and build trust.
- Stay informed about industry trends and best practices to ensure the support team is providing the best possible service.
- Empower support staff to make decisions and resolve issues independently, promoting efficiency and ownership.
- Develop a comprehensive support strategy that aligns with business goals and user needs.
- Build a strong support team with the right skills, knowledge, and attitude to provide exceptional customer service.
- Create a positive and supportive work environment for the support team to foster motivation and engagement.
- Continuously evaluate and improve support processes and tools to optimize efficiency and effectiveness.
- Leverage technology and automation to streamline support workflows and enhance productivity.
- Measure and track key support metrics to monitor performance and identify areas for improvement.
- Communicate effectively with users and stakeholders to keep them informed and manage expectations.
- Stay informed about industry trends and best practices to ensure the support team is providing the best possible service.
- Foster a culture of customer-centricity within the support team to prioritize user needs and satisfaction.
- Empower support staff to make decisions and resolve issues independently, promoting efficiency and ownership.
- Provide regular training and development opportunities to enhance the skills and knowledge of support staff.
- Encourage feedback and collaboration within the support team to foster continuous improvement and innovation.
- Build strong relationships with other teams, such as development and product management, to address systemic issues and improve the overall user experience.
- Proactively identify and address potential support challenges before they escalate and impact users.
- Develop a knowledge base and self-service resources to empower users to find solutions to common issues independently.
- Implement a robust ticketing system to track and manage support requests efficiently.
- Utilize customer relationship management (CRM) tools to manage user interactions and personalize support experiences.
- Leverage analytics and reporting tools to gain insights into support performance and identify areas for improvement.
- Communicate support performance and key learnings to stakeholders to ensure transparency and alignment.
- Stay informed about industry best practices and emerging technologies to continuously improve support operations.
- Encourage user feedback and actively solicit suggestions for improvement to enhance the overall support experience.
- Prioritize user needs and satisfaction in all support interactions to build strong customer relationships and loyalty.
- Continuously evaluate and refine support processes and tools to optimize efficiency and effectiveness.
- Invest in the development and training of support staff to ensure they have the skills and knowledge to provide excellent service.
- Foster a culture of collaboration and innovation within the support team to drive continuous improvement.
- Measure and track key support metrics to monitor performance and identify areas for optimization.
- Communicate effectively with users and stakeholders to manage expectations and build trust.
- Stay informed about industry trends and best practices to ensure the support team is providing the best possible service.
- Empower support staff to make decisions and resolve issues independently, promoting efficiency and ownership.
- Resolve cloud service interruption and ensure data security is not impacted by the cyber-related incident being investigated.

## Daily Reports
Here are the daily reports for this week:

- [report_131646](daily/2025-06-17/report_131646.md)
- [report_210659](daily/2025-06-17/report_210659.md)
- [report_210648](daily/2025-06-18/report_210648.md)
- [report_131708](daily/2025-06-18/report_131708.md)
- [report_050754](daily/2025-06-19/report_050754.md)
- [report_131600](daily/2025-06-19/report_131600.md)
