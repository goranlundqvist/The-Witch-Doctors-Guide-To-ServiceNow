var acmeClientScriptUtil = Class.create();
acmeClientScriptUtil.prototype = Object.extendsObject(AbstractAjaxProcessor, {
/**
 * Gets the sys_id from the GlideAjax call and gets the support group.
 *
 * @param {string} sys_id - sys_id of the record that is sent through the GlideAjax call.
 * @return {JSON} a object containing both the value and displayValue of the support group. 
 */ 
    getSupportGrp: function(ci_sysid) {
    
        var ci = this.getParameter('syspam_ci_sysid')? this.getParameter('syspam_ci_sysid') : ci_sysid;
        var returnGrp = {};
        var getCI = new GlideRecord('cmdb_ci');
        getCI.get(ci);
        
        if(getCI.support_group){
            returnGrp.value = getCI.getValue('support_group');
            returnGrp.displayValue = getCI.getDisplayValue('support_group');
            
            return JSON.stringify(returnGrp);
        }
        else
            return;
        
        
    },

    type: 'acmeClientScriptUtil'
});



/**
 * An example of GlideAjax to get the support group of the CI and return it as a JSON with both the value and DisplayValue.
 *  Then it's uses that data to set the assignment group.
 *  onChange Client Script which runs on the Incident Table on the field Configuration Item (cmdb_ci). 

 */

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
       return;
    }
 
     var ga = new GlideAjax('acmeClientScriptUtil');
     ga.addParam('sysparm_name', 'getSupportGrp');
     ga.addParam('syspam_ci_sysid', newValue);
     
     ga.getXML(assignGrp);
     
     function assignGrp(response){
         var answer = JSON.parse(response.responseXML.documentElement.getAttribute("answer"));
         if(answer){
             g_form.setValue('assignment_group', answer.value, answer.displayValue);
         }  
     }
 }
