var inputs = {};
inputs['current'] = current; // GlideRecord of the record you want to to use:  
inputs['table_name'] = 'incident';// Name of the table the record belongs to

sn_fd.FlowAPI.startFlow('global.call_from_script', inputs);          
