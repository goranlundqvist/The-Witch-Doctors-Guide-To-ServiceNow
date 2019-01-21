var sys = '8be0dc7ddb8ae7002288dc50cf96199f';
var getRITM = new GlideRecord('sc_req_item');
getRITM.get(sys);
 
getRITM.setForceUpdate(true);
getRITM.update();


var sys = '8be0dc7ddb8ae7002288dc50cf96199f';
var getRITM = new GlideRecord('sc_req_item');
getRITM.get(sys);
 
getRITM.setForceUpdate(true);
getRITM.autoSysFields(false);
getRITM.update();
