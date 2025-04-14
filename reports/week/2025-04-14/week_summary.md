# Support Ticket Report
- Generated: 2025-04-14 13:14:59
- Period: 2025-04-14 to 2025-04-14

## Summary
- **Total Tickets:** 2
- **Resolved:** 0
- **Open:** 2

## 5 Most Active Tickets
| Issue # | Title | Activity Level |
|---------|-------|----------------|
| [#685](https://github.com/pieces-app/support/issues/685) | Stuck at https://authentication.pieces.services/ | 12.49 |
| [#686](https://github.com/pieces-app/support/issues/686) | Pieces OS doesn't start because it's unable to open database due to corruption: LateInitializationError: Field 'database' has not been initialized. | 8.25 |

## Common Issues
### 1. Pieces OS 11.3.0 Update Issues
Users report issues after updating to Pieces OS 11.3.0, including infinite loading during login and database corruption preventing startup.  Workarounds involve logging in through the Pieces toolbar and avoiding refreshing the login page. The Pieces team is actively investigating and fixing these issues.

**Related Issues:**
- [#685](https://github.com/pieces-app/support/issues/685): Stuck at https://authentication.pieces.services/
- [#686](https://github.com/pieces-app/support/issues/686): Pieces OS doesn't start because it's unable to open database due to corruption: LateInitializationError: Field 'database' has not been initialized.


## Recommendations
- Investigate and fix the authentication pipeline issue causing infinite loading on login after updating to Pieces OS 11.3.0 (https://authentication.pieces.services/).
- Investigate and fix the database corruption issue preventing Pieces OS 11.3.0 from starting up.
- Provide clear instructions and documentation on how to locate and delete the Pieces OS database for troubleshooting purposes.
- Consider implementing a database recovery or repair mechanism to address corruption issues without requiring complete deletion.
- Monitor and address any potential performance issues related to database operations, especially during startup and login.

## Daily Reports
Here are the daily reports for this week:

- [report_131417](daily/2025-04-14/report_131417.md)
- [report_050748](daily/2025-04-14/report_050748.md)
