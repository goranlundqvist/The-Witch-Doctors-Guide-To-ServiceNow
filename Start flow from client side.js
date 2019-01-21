function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
       return;
    }
         var inputs = {};
 
     inputs['current'] = { // GlideRecord 
         table : 'incident', 
         sys_id :  g_form.getUniqueValue()
     };
     inputs['table_name'] = 'incident';
 
     GlideFlow.startFlow('global.call_from_script', inputs);
}
