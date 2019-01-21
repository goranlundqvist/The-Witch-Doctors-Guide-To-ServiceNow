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
