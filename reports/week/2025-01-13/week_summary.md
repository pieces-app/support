# Support Ticket Report
- Generated: 2025-01-15 21:07:32
- Period: 2025-01-13 to 2025-01-15

## Summary
- **Total Tickets:** 8
- **Resolved:** 2
- **Open:** 6

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#550](https://github.com/pieces-app/support/issues/550) | Seems like you are running VS Code in a remote environment (VS Code running remote docker container) | 8.30 |
| [#586](https://github.com/pieces-app/support/issues/586) | Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script | 6.46 |
| [#561](https://github.com/pieces-app/support/issues/561) | Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response | 4.48 |
| [#150](https://github.com/pieces-app/support/issues/150) | PiecesOS using too much RAM/spike in CPU | 4.48 |
| [#588](https://github.com/pieces-app/support/issues/588) | Neural Code Search returns no results | 4.42 |

## Common Issues
### 1. Pieces connectivity and functionality issues
Users report Pieces failing to connect remotely, especially within Docker containers. This is due to Pieces defaulting to the loopback interface. Solutions include upgrading to version 2.0.2, setting a blank custom URL, or using the workaround with DNS entries. Other issues involve OpenAI API key issues and Neural Code Search failing to return results, with ongoing investigations and workarounds suggested.

**Related Issues:**
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#588](https://github.com/pieces-app/support/issues/588): Neural Code Search returns no results

### 2. Pieces connection issues across platforms
Users report Pieces connection errors in web, desktop, and VS Code extensions. Problems include API key issues, remote connection failures, and general service outages. Solutions involve updating Pieces, checking API keys, configuring remote connections, and waiting for service restoration or bug fixes.

**Related Issues:**
- [#585](https://github.com/pieces-app/support/issues/585): Failed to load resource: net::ERR_CONNECTION_REFUSED     http://127.0.0.1:1000/.well-known/health
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#550](https://github.com/pieces-app/support/issues/550): Seems like you are running VS Code in a remote environment (VS Code running remote docker container)

### 3. PiecesOS Performance and API Issues
Users report high RAM/CPU usage with PiecesOS, potentially due to internet connectivity or background processes.  Short-term solutions include restarting PiecesOS or limiting large file interactions.  Additionally, users experience unresponsive behavior or errors, likely linked to OpenAI API, Claude, or Gemini issues.  Suggested fixes include removing API keys, switching to GPT4o, or ensuring the latest PiecesOS version.

**Related Issues:**
- [#150](https://github.com/pieces-app/support/issues/150): PiecesOS using too much RAM/spike in CPU
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response

### 4. Pieces Copilot Unresponsive or Erroneous
Users report Pieces Copilot being unresponsive, returning errors, or generating irrelevant responses. Issues are often related to specific file types or language models used. Solutions include updating Pieces, switching language models (e.g., to GPT4o), ensuring OpenAI API key validity, and signing into Pieces.

**Related Issues:**
- [#586](https://github.com/pieces-app/support/issues/586): Pieces plugin for UltraEdit is unresponsive after asking copilot to describe ~3000 line .py script
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback

### 5. Pieces Copilot and Neural Code Search Issues
Users are experiencing issues with Pieces Copilot and Neural Code Search not generating responses or returning results. This appears to be related to API keys, specific language models (Claude, Gemini), and potential software bugs. Solutions include removing OpenAI API keys, switching to different language models, ensuring software is updated, and waiting for upcoming releases with fixes.

**Related Issues:**
- [#588](https://github.com/pieces-app/support/issues/588): Neural Code Search returns no results
- [#561](https://github.com/pieces-app/support/issues/561): Copilot Bug: 'I'm sorry. Something went wrong with processing. Please...' copilot response
- [#584](https://github.com/pieces-app/support/issues/584): Copilot is not giving any feedback


## Recommendations
- **Prioritize resolution of connectivity issues:** Focus on addressing the root causes of connection errors across different Pieces platforms (web, desktop, VS Code) and within Docker containers. This will likely involve investigating API key handling, remote connection protocols, and potential service stability improvements.
- **Investigate and address PiecesOS performance issues:** Look into reports of high RAM/CPU usage, potentially caused by internet connectivity problems or inefficient background processes. Optimize PiecesOS for better resource management and investigate potential memory leaks.
- **Improve Pieces Copilot and Neural Code Search reliability:** Address issues with Copilot unresponsiveness, errors, and irrelevant responses, particularly with specific file types or language models. Enhance Neural Code Search to ensure consistent and accurate results. This might involve reviewing language model integrations, API interactions, and software logic.
- **Proactively communicate known issues and workarounds:** Keep users informed about ongoing problems, such as those related to specific language models (Claude, Gemini) or OpenAI API keys. Provide clear workarounds, such as switching to alternative language models or removing API keys, to minimize user disruption.
- **Enhance support documentation and resources:** Expand documentation to include detailed troubleshooting steps for common issues like connectivity problems, API key management, and language model selection. Create or update help articles and tutorials addressing these specific areas.
- **Gather more detailed user feedback:** Encourage users to provide comprehensive bug reports, including steps to reproduce the issue, relevant screenshots, and system information. This will help in identifying patterns and root causes more effectively.
- **Consider implementing a status page:** Create a public status page to communicate service uptime and any ongoing outages or maintenance activities. This will keep users informed and manage expectations during service disruptions.
- **Review and optimize large file handling:** Investigate how Pieces handles large files, as this appears to be a potential contributor to performance issues. Explore optimizations or limitations to improve user experience with larger codebases or datasets.
- **Analyze and address trends in user-reported issues:** Regularly analyze support tickets to identify recurring problems and prioritize development efforts accordingly. This data-driven approach will help allocate resources effectively and address the most impactful issues first.

## Daily Reports
Here are the daily reports for this week:

- [report_210608](daily/2025-01-14/report_210608.md)
- [report_210557](daily/2025-01-15/report_210557.md)
- [report_130931](daily/2025-01-15/report_130931.md)
