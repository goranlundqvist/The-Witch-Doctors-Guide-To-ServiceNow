// these are the conditions under which the change request approvals need to be cancelled and reset
// steps to activate
// 1. enable this business rule
// 2. add some comments so the reset will be noted in the approval history
// 3. uncomment the code for restart or reset based on your requirements
// 4. define the reset condition in checkResetConditions function below
// 5. you must set doReset once you capture the change(s) you are interested in


var comment = '';  //written to the approval_history
if (checkResetConditions()) {

   // create a global variable lock on the current record
   // this will prevent triggering a second reset while the first reset is still in progress
   // lock will be release in a late running business rule called 'Workflow Release Lock'
   chg_wf_lock = new GlideRecordLock(current);
   chg_wf_lock.setSpinWait(50);  //wait for lock
   if (chg_wf_lock.get()) {
      gs.print('SNC Approval conditions business rule is locking the ' + current.getDisplayValue() + ' during the workflow reset');

      // The following options are available for resetting the approvals:
      // 
      // 1. Mark all existing approvals for the change as 'cancelled' and restart the workflow to create new approvals
      //       new WorkflowApprovalUtils().cancelAll(current, comment);
      //       new Workflow().restartWorkflow(current);
      //
      // 2. Delete all of the existing approvals for the change and restart the workflow to create new approvals
      //       new WorkflowApprovalUtils().reset(current, comment);
      //       gs.addInfoMessage('Workflow has been reset since key fields have been modified');
      //
      // 3. Leave the approvals for the change in their current state and restart the workflow.
      //    (so that any new approvals that are required will be created)
      //       if (comment)
      //          current.setDisplayValue('approval_history', comment);
      //       new Workflow().restartWorkflow(current, true);
      //

   }
}

function checkResetConditions() {

   var doReset = false;  //default to no reset
   //add reset conditions here such as:
   //if (current.assigned_to.changes())
      //doReset = true;  //enable the reset
   //
   return doReset;
}
