var minutesAgo = 5;

var members = [];

var getLoggedInUsers = new GlideRecord('sys_user_grmember');
getLoggedInUsers.addQuery('user.last_login_time','>=',gs.minutesAgo(minutesAgo));
getLoggedInUsers.addQuery('user.active', true);
getLoggedInUsers.query();


while (getLoggedInUsers.next()) {

var gpMember = gp.user.toString();

if (members.toString().indexOf(gpMember) == -1) {
members.push(gpMember);
}
}


var minutesAgo = 5;
var members = [];

var userRec = new GlideRecord('sys_user');
userRec.addQuery('last_login_time','>=',gs.minutesAgo(minutesAgo));
userRec.addQuery('active', true);
userRec.query();

while (userRec.next()){
members.push(userRec.getUniqueValue())
}

var gp = new GlideRecord('sys_user_grmember');
gp.addQuery('user','IN' , members);
gp.query();

var resultUsers = [];
while (gp.next()){
if (resultUsers.toString().indexOf(gp.getValue('user'))==-1){
resultUsers.push(gp.getValue('user'));
}
}
