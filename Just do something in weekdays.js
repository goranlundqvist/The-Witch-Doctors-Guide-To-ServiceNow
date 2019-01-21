var getDay= new GlideDate();

var day = getDay.getByFormat('EEEE');
if(day == 'Sunday' || day == 'Wednesday' || day == 'Friday'){
//Do some magic
}
else {
//Do something else or nothing
}
