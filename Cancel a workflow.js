//These three lines are just for an example and needed since I didn't have a current object
var currentSys = '8ecd7552db252200a6a2b31be0b8f581';
var current = new GlideRecord('change_request');
current.get(currentSys);

var getWorkflowContext = new GlideRecord("wf_context");

getWorkflowContext.addQuery("id", current.getUniqueValue());
//Remember to go in and change this to the correct workflow_version of the flow you wan to cancel
getWorkflowContext.addQuery("workflow_version", "2633b949cb020200d71cb9c0c24c9c1d");
getWorkflowContext.query();

    //If we find the context, cancel it.
if (getWorkflowContext.next()) {
    
    var workflow = new Workflow();
    workflow.cancelContext(getWorkflowContext);
}
