var sourceTable = 'sc_request';
var sourceSysID = 'ac21d17edb4aab002288dc50cf9619fc';//Example REQ0010012

var getSource = new GlideRecord(sourceTable);
getSource.get(sourceSysID);

var fileName = 'testone'; //without file-extension
var getAttach = new GlideSysAttachment();
var attachContent = getAttach.get(getSource, fileName);

var targetTable = 'sc_request';
var targetSysID = '03725c7ddb8ae7002288dc50cf9619ce';// Example REQ0010011
var getTarget = new GlideRecord(targetTable);
getTarget.get(targetSysID);

var copyAtt = new GlideSysAttachment();

copyAtt.write(getTarget, fileName, "text/plain", attachContent);
