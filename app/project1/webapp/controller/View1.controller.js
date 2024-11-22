sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v4/ODataModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel"
], function (Controller, Filter, FilterOperator,JSONModel) {
    "use strict";
 
    return Controller.extend("project1.controller.View1", {
       
        onInit: function () {
        },
 
        oncreate:function()
        {
            this.byId("createDialog").open();
 
        },
        onDialogClose: function () {
            this.byId("createDialog").close();
        },
        onPost: function () {
            this.byId("createDialog").close();  
            let oModel = this.getOwnerComponent().getModel();
            oModel.setUseBatch(true);
            var personID = this.byId("createPersonID").getValue();
            var timeSheetDate = this.byId("createDate").getDateValue();
            var timeSheetDate=new Date("2024-11-18");
            var recordedHours = this.byId("createHours").getValue();
            var taskType = this.byId("createTaskType").getValue();
            var recordedQuantity = this.byId("createQuantity").getValue();
       
            var payloads = [
    {
 
        "TimeSheetDate": "2024-09-02T00:40:00",
        "TimeSheetRecord": "",
        "TimeSheetIsReleasedOnSave": false,
        "TimeSheetDataFields":[
         {
            "TimeSheetTaskComponent": "WORK",
            "WBSElement": "",
            "ReceiverCostCenter": "",
            "SenderCostCenter": "",
            "WorkItem": "",
            "ReceiverPubSecBudgetPeriod": "",
            "BillingControlCategory": "",
            "TimeSheetNote": "",
            "SenderPubSecBudgetPeriod": "",
            "ReceiverPubSecGrant": "",
            "ReceiverPubSecFuncnlArea": "YB40",
            "HoursUnitOfMeasure": "H",
            "SenderPubSecGrant": "",
            "ActivityType": "",
            "TimeSheetWrkLocCode": "",
            "SenderPubSecFund": "",
            "ReceiverPubSecFund": "",
            "InternalOrder": "",
            "RejectionReason": "",
            "PurchaseOrderItem": "0",
            "TimeSheetTaskType": "1900",
            "RecordedQuantity": "4.000",
            "TimeSheetOvertimeCategory": "",
            "SendingPubSecFunctionalArea": "",
            "TimeSheetTaskLevel": "NONE",
            "RecordedHours": "4.00",
            "PurchaseOrder": "",
            "ControllingArea": ""
    }],
        "PersonWorkAgreementExternalID": "ATFUNCT009",
        "TimeSheetPredecessorRecord": "",
        "TimeSheetStatus": "",
        "TimeSheetIsExecutedInTestRun": false,
        "TimeSheetOperation": "C",
        "YY1_ReasonforOther_TIM": "01",
        "YY1_TOT_ID_TIM": "1234",
        "CompanyCode": "1710",
        "PersonWorkAgreement": ""
},
{
 
    "TimeSheetDate": "2024-09-03T00:40:00",
    "TimeSheetRecord": "",
    "TimeSheetIsReleasedOnSave": false,
    "TimeSheetDataFields":[
     {
        "TimeSheetTaskComponent": "WORK",
        "WBSElement": "",
        "ReceiverCostCenter": "",
        "SenderCostCenter": "",
        "WorkItem": "",
        "ReceiverPubSecBudgetPeriod": "",
        "BillingControlCategory": "",
        "TimeSheetNote": "",
        "SenderPubSecBudgetPeriod": "",
        "ReceiverPubSecGrant": "",
        "ReceiverPubSecFuncnlArea": "YB40",
        "HoursUnitOfMeasure": "H",
        "SenderPubSecGrant": "",
        "ActivityType": "",
        "TimeSheetWrkLocCode": "",
        "SenderPubSecFund": "",
        "ReceiverPubSecFund": "",
        "InternalOrder": "",
        "RejectionReason": "",
        "PurchaseOrderItem": "0",
        "TimeSheetTaskType": "2000",
        "RecordedQuantity": "4.000",
        "TimeSheetOvertimeCategory": "",
        "SendingPubSecFunctionalArea": "",
        "TimeSheetTaskLevel": "NONE",
        "RecordedHours": "4.00",
        "PurchaseOrder": "",
        "ControllingArea": ""
}],
    "PersonWorkAgreementExternalID": "ATFUNCT009",
    "TimeSheetPredecessorRecord": "",
    "TimeSheetStatus": "",
    "TimeSheetIsExecutedInTestRun": false,
    "TimeSheetOperation": "C",
    "YY1_ReasonforOther_TIM": "01",
    "YY1_TOT_ID_TIM": "1234",
    "CompanyCode": "1710",
    "PersonWorkAgreement": ""
},
{
 
    "TimeSheetDate": "2024-09-04T00:40:00",
    "TimeSheetRecord": "",
    "TimeSheetIsReleasedOnSave": false,
    "TimeSheetDataFields":[
     {
        "TimeSheetTaskComponent": "WORK",
        "WBSElement": "",
        "ReceiverCostCenter": "",
        "SenderCostCenter": "",
        "WorkItem": "",
        "ReceiverPubSecBudgetPeriod": "",
        "BillingControlCategory": "",
        "TimeSheetNote": "",
        "SenderPubSecBudgetPeriod": "",
        "ReceiverPubSecGrant": "",
        "ReceiverPubSecFuncnlArea": "YB40",
        "HoursUnitOfMeasure": "H",
        "SenderPubSecGrant": "",
        "ActivityType": "",
        "TimeSheetWrkLocCode": "",
        "SenderPubSecFund": "",
        "ReceiverPubSecFund": "",
        "InternalOrder": "",
        "RejectionReason": "",
        "PurchaseOrderItem": "0",
        "TimeSheetTaskType": "2000",
        "RecordedQuantity": "4.000",
        "TimeSheetOvertimeCategory": "",
        "SendingPubSecFunctionalArea": "",
        "TimeSheetTaskLevel": "NONE",
        "RecordedHours": "4.00",
        "PurchaseOrder": "",
        "ControllingArea": ""
}],
    "PersonWorkAgreementExternalID": "ATFUNCT009",
    "TimeSheetPredecessorRecord": "",
    "TimeSheetStatus": "",
    "TimeSheetIsExecutedInTestRun": false,
    "TimeSheetOperation": "C",
    "YY1_ReasonforOther_TIM": "01",
    "YY1_TOT_ID_TIM": "1234",
    "CompanyCode": "1710",
    "PersonWorkAgreement": ""
},
{
 
    "TimeSheetDate": "2024-09-05T00:40:00",
    "TimeSheetRecord": "",
    "TimeSheetIsReleasedOnSave": false,
    "TimeSheetDataFields":[
     {
        "TimeSheetTaskComponent": "WORK",
        "WBSElement": "",
        "ReceiverCostCenter": "",
        "SenderCostCenter": "",
        "WorkItem": "",
        "ReceiverPubSecBudgetPeriod": "",
        "BillingControlCategory": "",
        "TimeSheetNote": "",
        "SenderPubSecBudgetPeriod": "",
        "ReceiverPubSecGrant": "",
        "ReceiverPubSecFuncnlArea": "YB40",
        "HoursUnitOfMeasure": "H",
        "SenderPubSecGrant": "",
        "ActivityType": "",
        "TimeSheetWrkLocCode": "",
        "SenderPubSecFund": "",
        "ReceiverPubSecFund": "",
        "InternalOrder": "",
        "RejectionReason": "",
        "PurchaseOrderItem": "0",
        "TimeSheetTaskType": "2000",
        "RecordedQuantity": "4.000",
        "TimeSheetOvertimeCategory": "",
        "SendingPubSecFunctionalArea": "",
        "TimeSheetTaskLevel": "NONE",
        "RecordedHours": "4.00",
        "PurchaseOrder": "",
        "ControllingArea": ""
}],
    "PersonWorkAgreementExternalID": "ATFUNCT009",
    "TimeSheetPredecessorRecord": "",
    "TimeSheetStatus": "",
    "TimeSheetIsExecutedInTestRun": false,
    "TimeSheetOperation": "C",
    "YY1_ReasonforOther_TIM": "01",
    "YY1_TOT_ID_TIM": "1234",
    "CompanyCode": "1710",
    "PersonWorkAgreement": ""
},
{"TimeSheetDate": "2024-09-06T00:40:00",
    "TimeSheetRecord": "",
    "TimeSheetIsReleasedOnSave": false,
    "TimeSheetDataFields":[
     {
        "TimeSheetTaskComponent": "WORK",
        "WBSElement": "",
        "ReceiverCostCenter": "",
        "SenderCostCenter": "",
        "WorkItem": "",
        "ReceiverPubSecBudgetPeriod": "",
        "BillingControlCategory": "",
        "TimeSheetNote": "",
        "SenderPubSecBudgetPeriod": "",
        "ReceiverPubSecGrant": "",
        "ReceiverPubSecFuncnlArea": "YB40",
        "HoursUnitOfMeasure": "H",
        "SenderPubSecGrant": "",
        "ActivityType": "",
        "TimeSheetWrkLocCode": "",
        "SenderPubSecFund": "",
        "ReceiverPubSecFund": "",
        "InternalOrder": "",
        "RejectionReason": "",
        "PurchaseOrderItem": "0",
        "TimeSheetTaskType": "2000",
        "RecordedQuantity": "4.000",
        "TimeSheetOvertimeCategory": "",
        "SendingPubSecFunctionalArea": "",
        "TimeSheetTaskLevel": "NONE",
        "RecordedHours": "4.00",
        "PurchaseOrder": "",
        "ControllingArea": ""
}],
    "PersonWorkAgreementExternalID": "ATFUNCT009",
    "TimeSheetPredecessorRecord": "",
    "TimeSheetStatus": "",
    "TimeSheetIsExecutedInTestRun": false,
    "TimeSheetOperation": "C",
    "YY1_ReasonforOther_TIM": "01",
    "YY1_TOT_ID_TIM": "1234",
    "CompanyCode": "1710",
    "PersonWorkAgreement": ""
}, {
 
    "TimeSheetDate": "2024-09-07T00:40:00",
    "TimeSheetRecord": "",
    "TimeSheetIsReleasedOnSave": false,
    "TimeSheetDataFields":[
     {
        "TimeSheetTaskComponent": "WORK",
        "WBSElement": "",
        "ReceiverCostCenter": "",
        "SenderCostCenter": "",
        "WorkItem": "",
        "ReceiverPubSecBudgetPeriod": "",
        "BillingControlCategory": "",
        "TimeSheetNote": "",
        "SenderPubSecBudgetPeriod": "",
        "ReceiverPubSecGrant": "",
        "ReceiverPubSecFuncnlArea": "YB40",
        "HoursUnitOfMeasure": "H",
        "SenderPubSecGrant": "",
        "ActivityType": "",
        "TimeSheetWrkLocCode": "",
        "SenderPubSecFund": "",
        "ReceiverPubSecFund": "",
        "InternalOrder": "",
        "RejectionReason": "",
        "PurchaseOrderItem": "0",
        "TimeSheetTaskType": "1900",
        "RecordedQuantity": "4.000",
        "TimeSheetOvertimeCategory": "",
        "SendingPubSecFunctionalArea": "",
        "TimeSheetTaskLevel": "NONE",
        "RecordedHours": "4.00",
        "PurchaseOrder": "",
        "ControllingArea": ""
}],
    "PersonWorkAgreementExternalID": "ATFUNCT009",
    "TimeSheetPredecessorRecord": "",
    "TimeSheetStatus": "",
    "TimeSheetIsExecutedInTestRun": false,
    "TimeSheetOperation": "C",
    "YY1_ReasonforOther_TIM": "01",
    "YY1_TOT_ID_TIM": "1234",
    "CompanyCode": "1710",
    "PersonWorkAgreement": ""
}];

   function send(payloads, i = 0) {
    if (i >= payloads.length) {
        
        return;
    }
    const payload = payloads[i];
    oModel.create("/TimeSheetEntries", payload, {
        success: function (response) {
            sap.m.MessageToast.show(`Data for payload ${i + 1} created successfully!`);
            
            send(payloads, i + 1);
        },
        error: function (error) {
            sap.m.MessageToast.show(`Error creating data for payload ${i + 1}.`);
            send(payloads, i + 1);
        }
    });
}

send(payloads);

 
        },
 
        onSearch: function () {
            var employeeId = this.byId("employeeIdInput").getValue();
            var dateRange = this.byId("dateRange").getDateValue();
            var endDate = this.byId("dateRange").getSecondDateValue();
            var filter = [];
            if (employeeId)
            {
                filter.push(new sap.ui.model.Filter("PersonWorkAgreementExternalID", sap.ui.model.FilterOperator.EQ, employeeId));
            }
            if (dateRange) {
                filter.push(new sap.ui.model.Filter("TimeSheetDate", sap.ui.model.FilterOperator.GE, dateRange));
            }
            if (endDate) {
                filter.push(new sap.ui.model.Filter("TimeSheetDate", sap.ui.model.FilterOperator.LE, endDate));
            }
            var oTable = this.byId("dataTable");
            oTable.bindItems({
                path: "/TimeSheetEntries",
                filters: filter,
                template: oTable.getBindingInfo("items").template
            });
        }
        })
});