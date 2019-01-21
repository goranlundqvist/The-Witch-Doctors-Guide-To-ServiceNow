var gr = new GlideRecord(‘incident’);
gr.addActiveQuery();
gr.query();

gs.debug(gr.getRowCount());

var countInc = new GlideAggregate(‘incident’);
countInc.addActiveQuery();
countInc.addAggregate(‘COUNT’);
countInc.query();
countInc.next();

gs.debug(countInc.getAggregate(‘COUNT’));


var checkUser = new GlideRecord("sys_user");

    checkUser.addActiveQuery();
    checkUser.setLimit(1);
    checkUser.query();

    if(checkUser.hasNext()){
     gs.debug("Found one!");
    }
