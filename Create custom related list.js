(function refineQuery(current, parent) {
	
	//Get all incidents that are connected to a parent
	var getAllParentInc = new GlideRecord('incident');
	getAllParentInc.addQuery('problem_id', parent.getUniqueValue());
	getAllParentInc.addActiveQuery();
	getAllParentInc.query();
	
	var allParentInc = [];//Prepare an array to save the sys_ids
	
	while (getAllParentInc.next()){
		//Push in all sys_ids of incidents that are connected to a parent
		allParentInc.push(getAllParentInc.getUniqueValue());
	}
	//Add to the query that either the incident has parent problem or connected to a parent incident which has a problem connected
	current.addQuery('problem_id', parent.getUniqueValue()).addOrCondition('parent_incident', 'IN', allParentInc);
	
})(current, parent);
