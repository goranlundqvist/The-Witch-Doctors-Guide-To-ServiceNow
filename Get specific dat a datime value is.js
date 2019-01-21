var getTodaysDate = new GlideDateTime().getDate();
gs.debug("Todays day: " + getTodaysDate.getByFormat('EEEE'));

var getInc = new GlideRecord('incident');
getInc.get('e8caedcbc0a80164017df472f39eaed1');//just get an incident.

var getDay = new GlideDateTime(getInc.getDisplayValue('resolved_at')).getDate();
gs.debug("Resolved day: " + getDay.getByFormat('EEEE'));
