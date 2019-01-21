(function executeRule(current, previous /*null when async*/) {

    var currentUser = gs.getUser(); 
    g_scratchpad.email = currentUser.getEmail();
    
    })(current, previous);

    function onChange(control, oldValue, newValue, isLoading, isTemplate) {
        if (isLoading || newValue === '') {
           return;
        }
     g_form.setValue('short_description', g_scratchpad.email);   
     }

     
     var allScratchpadValues = '';

 Object.getOwnPropertyNames(g_scratchpad).forEach(function(val,idx, array){

    allScratchpadValues += val + " : " + g_scratchpad[val] + '<br><br>';
 });

 g_form.addInfoMessage(allScratchpadValues);
