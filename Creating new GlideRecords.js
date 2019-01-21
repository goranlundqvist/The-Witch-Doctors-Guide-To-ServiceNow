var record = new GlideRecord("incident");
gs.debug("\n****** Without any function ******");
gs.debug("record Active is: " + record.active);
gs.debug("record Number is: " + record.number);
gs.debug("record Opened at: " + record.opened_at);
gs.debug("record Sys ID is: " + record.sys_id);
 
var recordInit = new GlideRecord("incident");
recordInit.initialize();
gs.debug("\n****** with Initialize() function ******");
gs.debug("recordInit Active is: " + recordInit.active);
gs.debug("recordInit Number is: " + recordInit.number);
gs.debug("recordInit Opened at: " + recordInit.opened_at);
gs.debug("recordInit Sys ID is: " + recordInit.sys_id);
 
var recordNew = new GlideRecord("incident");
recordNew.newRecord();
gs.debug("\n****** with newRecord() function ******");
gs.debug("recordNew Active is: " + recordNew.active);
gs.debug("recordNew Number is: " + recordNew.number);
gs.debug("recordNew Opened at: " + recordNew.opened_at);
gs.debug("recordNew Sys ID is: " + recordNew.sys_id);
