(function executeRule(current, previous /*null when async*/) {

	var findAction = new GlideRecord('x_8294_aws_dash_action');
	findAction.addActiveQuery();
	findAction.query();

	while(findAction.next()){
		var match = GlideFilter.checkRecord(current, findAction.condition, true);

		if(match){
			//Do what you to do when you have a match
			if (findAction.script){
				var evaluator = new GlideScopedEvaluator();
				evaluator.evaluateScript(findAction, 'script');
			}	
		}
	}
})(current, previous);
