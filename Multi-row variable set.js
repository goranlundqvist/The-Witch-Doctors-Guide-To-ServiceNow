var returnedSet; 
var ritmID = '3c0381a0db0627002288dc50cf9619d6';//sys_id of the RITM being created 
var getRITM= new GlideRecord('sc_req_item'); 
if (getRITM.get(ritmID)) { 
   returnedSet = getRITM.variables.gorans_multi_cool_set; 
} 
gs.debug(returnedSet);


var returnedSet; 
var ritmID = '3c0381a0db0627002288dc50cf9619d6';//sys_id of the RITM being created 
var getRITM= new GlideRecord('sc_req_item'); 
if (getRITM.get(ritmID)) { 
   returnedSet = getRITM.variables.gorans_multi_cool_set; 
} 

var newRow = returnedSet.addRow();
newRow.setCellValue('who_to_curse', '5137153cc611227c000bbd1bd8cd2005');//sys_id of a user
newRow.which_curse = 1;

gs.debug(returnedSet);
GetRITM.update();
