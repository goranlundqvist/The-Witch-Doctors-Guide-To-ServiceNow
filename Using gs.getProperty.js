var getGrp = gs.getProperty(“custom.incidentP1.group”);
var gr = new GlideRecord(“incident”);
gr.addQuery(“assignment_group”, getGrp);//only wants incidents that is assigned to this group
gr.addActiveQuery();//Just want to have active incidents
gr.query();

if (gr.next()){
//Do something fun.
}
