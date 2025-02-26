namespace my;
entity TimeSheetEntryCollection 
{
    key PersonWorkAgreementExternalID: String(20);
    key CompanyCode                  : String(4);
    key TimeSheetRecord              : String(12);
    TimeSheetDataFields: many {
                ControllingArea          : String(4);
                SenderCostCenter         : String(10);
                ReceiverCostCenter       : String(10);
                InternalOrder            : String(12);
                ActivityType             : String(6);
                WBSElement              : String(24);
                WorkItem                 : String(10);
                BillingControlCategory   : String(8);
                PurchaseOrder            : String(10);
                PurchaseOrderItem        : String(5);
                TimeSheetTaskType        : String(4);
                TimeSheetTaskLevel       : String(8);
                TimeSheetTaskComponent   : String(8);
                TimeSheetNote            : String;
                RecordedHours            : Decimal(4,2);
                RecordedQuantity         : Decimal(15,3);
                HoursUnitOfMeasure       : String(3);
                RejectionReason          : String(4);
                TimeSheetWrkLocCode      : String(4);
                TimeSheetOvertimeCategory: String(4);
                SenderPubSecFund         : String(10);
                SendingPubSecFunctionalArea : String(16);
                SenderPubSecGrant        : String(20);
                SenderPubSecBudgetPeriod : String(10);
                ReceiverPubSecFund       : String(10);
                ReceiverPubSecFuncnlArea : String(16);
                ReceiverPubSecGrant      : String(20);
                ReceiverPubSecBudgetPeriod : String(10);

    };
    PersonWorkAgreement           : String(8);
    TimeSheetDate                 : DateTime;
    TimeSheetIsReleasedOnSave     : Boolean;
    TimeSheetPredecessorRecord    : String(12);
    TimeSheetStatus               : String(2);
    TimeSheetIsExecutedInTestRun  : Boolean;
    TimeSheetOperation            : String(1);
    YY1_ReasonforOther_TIM        : String(2);
    YY1_ReasonforOther_TIMF       : Integer;
    YY1_ReasonforOther_TIMT       : String(60);
    YY1_TOT_ID_TIM                : String(20);
    YY1_TOT_ID_TIMF               : Integer;
};