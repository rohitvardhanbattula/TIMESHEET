//using { API_MANAGE_WORKFORCE_TIMESHEET as external } from './external/API_MANAGE_WORKFORCE_TIMESHEET';
using {my as m} from '../db/schema';
service MyService @(impl: '/srv/service.js')
{
    entity TimeSheetEntries as select from m.TimeSheetEntryCollection    
}