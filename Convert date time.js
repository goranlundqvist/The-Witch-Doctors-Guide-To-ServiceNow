var date = '2018/12/02 21:23:45';
var simpleDateFormat = 'yyyy/MM/dd HH:mm:ss';//Just define how the date is setup

var gdt = new GlideDateTime();
gdt.setDisplayValue(date,simpleDateFormat);

gs.debug("Date: " + gdt.getDisplayValue());
