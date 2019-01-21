var  getUsers = new GlideRecord(‘sys_user’);
getUsers.addActiveQuery();
getUsers.query();
while (getUsers.next()) {
var getIncidents = new GlideRecord(‘incident’);
getIncidents.addQuery(‘caller_id’, getUsers.getUniqueValue());
//the rest of the code.
}

var getAllUsers = [];
var getUsers = new GlideRecord(‘sys_user’);
getUsers.addActiveQuery();
getUsers.query();
while (getUsers.next()) {
getAllUsers.push(getUsers.getUniqueValue());
}
//So now we got all the users sys_id from the first query
var getIncidents = new GlideRecord(‘incident’);
getIncidents.addQuery(‘caller_id’,’IN’,getAllUsers);//This line says that caller_id should be any of the sys_ids in the array.
//The rest of your code.


var getUsers = new GlideRecord(‘sys_user’);
getUsers.addActiveQuery();
getUsers.query();
while (getUsers.next()) {
var city = getUsers.location.getDisplayValue(‘city’);
//the rest of the code.}
