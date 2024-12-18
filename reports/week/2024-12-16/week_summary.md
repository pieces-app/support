# Support Ticket Report
- Generated: 2024-12-18 21:10:02
- Period: 2024-12-16 to 2024-12-18

## Summary
- **Total Tickets:** 16
- **Resolved:** 5
- **Open:** 11

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#471](https://github.com/pieces-app/support/issues/471) | I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app | 18.51 |
| [#526](https://github.com/pieces-app/support/issues/526) | Can't turn on long term memory engine | 7.89 |
| [#528](https://github.com/pieces-app/support/issues/528) | I can't use any GPT models other than 'GPT-4o Mini' | 7.25 |
| [#530](https://github.com/pieces-app/support/issues/530) | Vscode and PHPStorm plugins stopped working after Pieces OS update | 7.00 |
| [#527](https://github.com/pieces-app/support/issues/527) | Manually downloading a LLM | 6.38 |

## Common Issues
### 1. LLM Context Limit and Rate Limiting Errors
Users encounter errors related to context limits being exceeded or rate limiting when using various LLM models. This can manifest as misleading error messages or failed requests. Solutions include shortening prompts, updating Pieces OS, authenticating accounts, and contacting support for rate limit increases.

**Related Issues:**
- [#487](https://github.com/pieces-app/support/issues/487): "This message exceeded the context limit for this LLM. Please select a different LLM and try again, or shorten your prompt." issue
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'

### 2. Copilot Model Processing Errors
Users are experiencing "Something went wrong with processing..." errors when using Copilot models, particularly Claude and GPT. This is often due to rate limiting. Solutions include updating to the latest Pieces OS, authenticating, and contacting support for rate limit increases.

**Related Issues:**
- [#535](https://github.com/pieces-app/support/issues/535): Bug: Claude 3.5 Sonnet Copilot response issues "I'm Sorry something went wrong with the processing..."
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'
- [#471](https://github.com/pieces-app/support/issues/471): I´m sorry. Something went wrong with processing. Please wait a few seconds and try again, or contact support@pieces.app

### 3. Pieces OS 11.0.0 Plugin Compatibility Issues
Users are experiencing compatibility issues with various plugins after updating to Pieces OS 11.0.0.  This includes plugins for VS Code, JetBrains IDEs, and potentially others. The issue seems to stem from the update requiring newer plugin versions that are not yet available or accessible. Users are advised to wait for plugin updates or contact Pieces OS support for assistance.

**Related Issues:**
- [#538](https://github.com/pieces-app/support/issues/538): Announcement: 11.0.0 POS Breaking Change - TLDR: please update all plugins
- [#530](https://github.com/pieces-app/support/issues/530): Vscode and PHPStorm plugins stopped working after Pieces OS update
- [#528](https://github.com/pieces-app/support/issues/528): I can't use any GPT models other than 'GPT-4o Mini'

### 4. Pieces OS Plugin Connectivity Issues After Update
Users are experiencing connectivity problems with Pieces OS plugins (VSCode, PHPStorm) after the latest update.  Issues include port conflicts and plugin incompatibility.  Suggested solutions involve ensuring Pieces OS is running on the correct port, reinstalling/updating plugins, and waiting for official updates from the Pieces team.

**Related Issues:**
- [#534](https://github.com/pieces-app/support/issues/534): Pieces os says: port already in use if i start phpstorm with pieces plugin
- [#530](https://github.com/pieces-app/support/issues/530): Vscode and PHPStorm plugins stopped working after Pieces OS update
- [#531](https://github.com/pieces-app/support/issues/531): Pieces Desktop App - Lost Connection to PiecesOS

### 5. Ollama and LLM Download and Installation Issues
Users are experiencing difficulties downloading, installing, and enabling LLMs, particularly with Ollama integration on Linux. Issues include failed installations, interrupted downloads, and problems recognizing manually downloaded models. Solutions involve improved download resumption, clearer instructions for manual imports, and bug fixes for Ollama installation.

**Related Issues:**
- [#537](https://github.com/pieces-app/support/issues/537): Ollama Fails to Install on Linux
- [#527](https://github.com/pieces-app/support/issues/527): Manually downloading a LLM
- [#442](https://github.com/pieces-app/support/issues/442): Can't turn on Long-Term Memory Engine


## Recommendations
- **Prioritize LLM and Copilot Issues:** Focus on resolving issues related to "LLM Context Limit and Rate Limiting Errors" and "Copilot Model Processing Errors" as they are the most frequent and impactful.
- **Improve Plugin Compatibility and Communication:** Address the "Pieces OS 11.0.0 Plugin Compatibility Issues" urgently and provide clear communication and instructions to users on updating plugins.
- **Enhance Ollama Installation Experience:** Investigate and resolve the "Ollama and LLM Download and Installation Issues" to ensure a smoother onboarding process for users wanting to utilize local LLMs.
- **Review and Improve Error Messages:** Analyze the common issues and active tickets to identify unclear or unhelpful error messages, and work on improving them to aid user troubleshooting.
- **Provide Clearer Documentation for Manual Operations:** Create or update documentation for manually downloading and importing LLMs, as well as resolving port conflicts, to empower users facing these challenges.
- **Monitor Plugin Update Rollouts:** Implement a system to closely monitor plugin updates after major Pieces OS releases to quickly identify and address compatibility issues.
- **Consider a Staged Plugin Update Approach:** Explore a staged rollout of plugin updates, potentially with beta testing, to catch compatibility issues before they impact a wider user base.
- **Gather User Feedback on Rate Limiting:** Collect feedback from users experiencing rate limiting to understand their use cases and adjust the system accordingly to minimize disruption for legitimate users.
- **Investigate Antivirus False Positives:** Work with antivirus vendors to address the reported false positive detection of Pieces OS 11.0.0 to prevent unnecessary user concern and update barriers.
- **Proactively Communicate Known Issues:** Maintain a public-facing list of known issues and workarounds, such as the plugin compatibility issues, to keep users informed and manage expectations during updates or outages.
- **Analyze Ticket Trends for Proactive Support:** Regularly analyze support ticket trends and activity levels to identify recurring issues, predict potential problem areas, and proactively address them before they escalate.
- **Develop Automated Troubleshooting Tools:** Explore developing automated troubleshooting tools or diagnostic scripts that users can run to identify common problems, such as port conflicts or plugin version mismatches, to reduce the support burden and resolution time.
- **Create a Dedicated Plugin Support Channel:** Consider establishing a dedicated support channel or forum specifically for plugin-related issues to streamline troubleshooting and provide a centralized resource for users facing these challenges.
- **Implement User-Facing Rate Limit Information:** Provide users with clear information about their rate limit status, usage, and options for increasing it, if applicable, to improve transparency and reduce frustration related to rate limiting errors.
- **Enhance In-App Guidance and Support Resources:** Improve in-app guidance and integrate support resources, such as FAQs, troubleshooting tips, and links to relevant documentation, directly within the Pieces OS interface to empower users to self-serve and find solutions quickly.

## Daily Reports
Here are the daily reports for this week:

- [report_210616](daily/2024-12-17/report_210616.md)
- [report_131026](daily/2024-12-17/report_131026.md)
- [report_131144](daily/2024-12-18/report_131144.md)
- [report_210617](daily/2024-12-18/report_210617.md)
