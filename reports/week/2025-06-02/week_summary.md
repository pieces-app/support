# Support Ticket Report
- Generated: 2025-06-07 13:15:45
- Period: 2025-06-02 to 2025-06-07

## Summary
- **Total Tickets:** 15
- **Resolved:** 6
- **Open:** 9

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#739](https://github.com/pieces-app/support/issues/739) | Failed to connect to PiecesOS | 9.62 |
| [#719](https://github.com/pieces-app/support/issues/719) | Pieces Desktop freezes after inactivity | 6.47 |
| [#733](https://github.com/pieces-app/support/issues/733) | Chat responses are slow/dont happen | 6.32 |
| [#730](https://github.com/pieces-app/support/issues/730) | WSL cannot connect to Pieces OS in VS Code | 6.14 |
| [#732](https://github.com/pieces-app/support/issues/732) | Performance Issues in VSCode with Pieces OS Active | 4.63 |

## Common Issues
### 1. Pieces OS connectivity issues across VS Code and Chrome extensions
Users report various connectivity problems with Pieces OS 11.4.2 on Windows.  VS Code extension fails to connect, showing errors in developer tools and Pieces OS logs. Chrome extension malfunctions, reporting outdated version despite being the latest.  Common symptoms include empty settings windows, unresponsive VS Code, and inability to use extension features.  Suggested solutions include checking custom URL settings for remote environments and verifying Pieces OS installation.

**Related Issues:**
- [#730](https://github.com/pieces-app/support/issues/730): WSL cannot connect to Pieces OS in VS Code
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS

### 2. Pieces OS and plugin compatibility issues
Users report plugin malfunctions, connection failures, and performance degradation, especially with the Chrome extension and VSCode integration.  Updating to the latest Pieces OS (v11.0.0 or higher) and corresponding plugins (v4.0.0 for Chrome, v2.0.0 for VSCode) is crucial. Incompatibility between Pieces OS and outdated plugins is the primary cause.

**Related Issues:**
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active

### 3. Pieces Desktop Issues with LTM and Freezing
Users report Pieces Desktop experiencing issues related to LTM and application freezing. LTM information is sometimes inaccurate or unavailable, leading to incorrect context in Copilot chats.  Additionally, the application freezes after periods of inactivity, especially after interacting with chat features.  These issues occur across different operating systems (macOS, Windows) and Pieces versions. Further investigation is needed to pinpoint the root cause and implement a solution.

**Related Issues:**
- [#731](https://github.com/pieces-app/support/issues/731): Pieces Copilot doesn't get the LTM info and shows a wrong date
- [#734](https://github.com/pieces-app/support/issues/734): bug: LTM continues to turn off, requiring me to turn LTM back on periodically
- [#719](https://github.com/pieces-app/support/issues/719): Pieces Desktop freezes after inactivity

### 4. Pieces Desktop App and Plugin Issues
Users are experiencing various issues with the Pieces desktop application and plugins, including keyboard shortcuts not working on macOS, Chrome plugin connection problems on Windows, and the desktop app periodically jumping to the main monitor on macOS.  Troubleshooting steps include checking for plugin updates and reinstalling the desktop application.

**Related Issues:**
- [#742](https://github.com/pieces-app/support/issues/742): Mac OS Keyboard Shortcuts do not work
- [#739](https://github.com/pieces-app/support/issues/739): Failed to connect to PiecesOS
- [#727](https://github.com/pieces-app/support/issues/727): MacOS Desktop periodically jumps to main monitor & grabs focus off of current window

### 5. Pieces OS 11.4.2 performance issues and Gemini connection failures
Users are experiencing performance issues with Pieces OS 11.4.2, including VS Code slowdowns, dropped connections, and delayed or absent chat responses.  A "create memory" bug via MCP is resolved in the upcoming 11.4.3 release.  Issues with Gemini connections are also reported, resulting in error messages. Further investigation is needed to determine the root cause of the performance issues and Gemini errors.

**Related Issues:**
- [#737](https://github.com/pieces-app/support/issues/737): bug: create memory via mcp(resolved in next release 11.4.3)
- [#732](https://github.com/pieces-app/support/issues/732): Performance Issues in VSCode with Pieces OS Active
- [#733](https://github.com/pieces-app/support/issues/733): Chat responses are slow/dont happen


## Recommendations
- Prioritize resolving connectivity issues between Pieces OS and plugins, especially for VS Code and Chrome extensions, given their high frequency and impact on user workflows.
- Investigate and address the root cause of Pieces Desktop freezing after inactivity, focusing on interactions with chat features and LTM usage.
- Improve LTM accuracy and availability within Pieces Copilot to ensure correct context in chats and prevent user frustration.
- Address performance issues with Pieces OS 11.4.2, particularly VS Code slowdowns and Gemini connection failures, to enhance user experience.
- Ensure keyboard shortcuts functionality on macOS and prevent the desktop app from unexpectedly jumping to the main monitor.
- Monitor and address issues related to chat responses being slow or absent, as this impacts core functionality.
- Proactively communicate plugin updates and compatibility requirements to users to mitigate issues arising from outdated plugins.
- Based on user feedback, review and update documentation regarding keyboard shortcuts and connectivity troubleshooting steps for different operating systems and plugins.
- Investigate the "create memory" bug via MCP and ensure its resolution in the 11.4.3 release.
- Gather more data on Gemini connection failures to identify specific error patterns and implement targeted solutions.
- Analyze user-reported issues with pasting images and clearing Long Term Memory data to determine the underlying causes and prioritize fixes.
- Consider implementing performance monitoring and logging to proactively detect and address performance issues in Pieces OS and related components.
- Develop a communication strategy to keep users informed about ongoing investigations, planned fixes, and release updates for affected features and plugins.
- Prioritize bug fixes and performance improvements based on the frequency and activity level of reported issues to maximize impact on user experience.
- Encourage users to provide detailed bug reports with steps to reproduce issues, including relevant logs and screenshots, to facilitate faster troubleshooting and resolution.
- Implement automated testing for key functionalities, including connectivity, performance, and LTM accuracy, to prevent regressions and ensure software quality.
- Establish a process for tracking and prioritizing user feedback to identify recurring issues and areas for improvement in the product.
- Provide support staff with comprehensive documentation and resources to effectively troubleshoot and resolve user-reported issues.
- Explore options for improving error messaging and guidance within the application to help users self-diagnose and resolve common problems.
- Consider implementing a user forum or community platform to facilitate peer-to-peer support and knowledge sharing among users.
- Regularly analyze support ticket data to identify trends, prioritize areas for improvement, and measure the effectiveness of implemented solutions.
- Collect user feedback on the effectiveness of support interactions and identify areas for improvement in the support process.
- Investigate and address the issue of the Pieces Desktop app grabbing focus off of the current window on macOS to minimize disruption to user workflows.
- Provide users with clear instructions on how to update plugins and ensure compatibility with different Pieces OS versions.
- Consider implementing a notification system within the application to inform users about available updates for Pieces OS and related plugins.
- Develop a system for tracking and managing known issues, including their status, priority, and planned resolution timelines.
- Encourage users to report any issues they encounter through a dedicated channel, such as a bug reporting form or support email address.
- Prioritize accessibility improvements to ensure that the Pieces platform is usable by individuals with disabilities.
- Conduct regular user research to understand user needs and pain points, and inform product development decisions.
- Implement analytics tracking to monitor user behavior and identify areas for improvement in the user experience.
- Continuously monitor and evaluate the performance and effectiveness of support operations to identify areas for optimization and improvement.

## Daily Reports
Here are the daily reports for this week:

- [report_210657](daily/2025-06-03/report_210657.md)
- [report_050809](daily/2025-06-03/report_050809.md)
- [report_131650](daily/2025-06-03/report_131650.md)
- [report_210610](daily/2025-06-04/report_210610.md)
- [report_131714](daily/2025-06-04/report_131714.md)
- [report_131611](daily/2025-06-05/report_131611.md)
- [report_210653](daily/2025-06-05/report_210653.md)
- [report_050818](daily/2025-06-05/report_050818.md)
- [report_210639](daily/2025-06-06/report_210639.md)
- [report_131512](daily/2025-06-06/report_131512.md)
- [report_050717](daily/2025-06-07/report_050717.md)
- [report_131212](daily/2025-06-07/report_131212.md)
