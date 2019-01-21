var getInc = new GlideRecord('incident');
getInc.addActiveQuery();
getInc.addQuery('priority', '1');

gs.debug(getInc.getEncodedQuery());
