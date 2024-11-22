const { log } = require('@sap/cds');
const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    const { TimeSheetEntries } = this.entities;
    

    this.on('READ', TimeSheetEntries, async (request) => {
        console.log(request.query);
        const external = await cds.connect.to('API_MANAGE_WORKFORCE_TIMESHEET');
        let data = await external.run(request.query);
        data = data.map(item => {
            if (item.TimeSheetDate) {
                const date = new Date(item.TimeSheetDate);
                const formattedDate = date.toISOString().split('T')[0].replace(/-/g,  '/'); 
                item.TimeSheetDate = formattedDate;
            }
            return item;
        });
        return data;
    });


    this.on('CREATE', TimeSheetEntries, async (req) => {
        const payloads = Array.isArray(req.data) ? req.data : [req.data]; 
        const remoteService = await cds.connect.to('API_MANAGE_WORKFORCE_TIMESHEET');
        const results = [];
    
        for (const payload of payloads) {
            try {
                payload.TimeSheetDataFields = payload.TimeSheetDataFields[0];
                payload.TimeSheetDate = payload.TimeSheetDate.replace('Z', '');
                 
                console.log("Creating record with data:", payload);   
                const response = await remoteService.send({
                    method: 'POST',
                    path: '/TimeSheetEntryCollection',
                    data: payload
                });
                
               
                console.log("results:", response);
            } catch (error) {
                console.log("Error during request:", error.message || error);
                
            }
        }
    
        
    });
    
});
