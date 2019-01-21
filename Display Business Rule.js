(function executeRule(current, previous /*null when async*/) {
	g_scratchpad.activeTasks = 0;
	var countActiveTasks = new GlideAggregate('incident_task');
	countActiveTasks.addEncodedQuery('active=true');
	countActiveTasks.addAggregate('COUNT');
	countActiveTasks.query();
	
	if (countActiveTasks.next()){
		g_scratchpad.activeTasks =countActiveTasks.getAggregate('COUNT');
	}
})(current, previous);
 
And then the onLoad client script:

function onLoad() {
   //Type appropriate comment here, and begin script below
   if (g_scratchpad.activeTasks > 0){
	   g_form.addInfoMessage("There is " + g_scratchpad.activeTasks + " incident tasks active on this incident");
	   
   }
}
