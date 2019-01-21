checkFieldUsage("table_to_check", "fileName_without_extension", true, false);

function checkFieldUsage(table, filename, usePercentage, includeOOB) {

    if (!table || !filename) {
        return;
    }
    var rec = new GlideRecord("sys_user");
    rec.setLimit(1);
    rec.addQuery("sys_id", gs.getUserID());
    rec.query();
    if (rec.next()) {
        var gr = new GlideRecord(table);
        gr.setLimit(1);
        gr.query();
        gr.next();
        var f = gr.getFields();
        var fieldLabels = [];

        var dataObj = {};

        for (var i = 0; i < f.size(); i++) {
            var fieldName = f.get(i).getName() + "";
            if (fieldName.indexOf("u_") != 0) {
                if (includeOOB) {
                    fieldLabels.push(fieldName);
                }
            } else {
                fieldLabels.push(fieldName);
            }

        }

        csv = "Class," + fieldLabels.join(",") + "\n";



        var limit = fieldLabels.length;

        var ga = new GlideAggregate(table);
        ga.addAggregate("COUNT", "sys_class_name");
        ga.query();
        while (ga.next()) {
            var klass = ga.sys_class_name + "";
            dataObj[klass] = {};
            dataObj[klass]["total"] = ga.getAggregate("COUNT", "sys_class_name");
        }


        var checkGr = new GlideRecord(table);
        checkGr.intialize();
        for (var x = 0; x < limit; x++) {
            var field = fieldLabels[x] + "";
            for (kl in dataObj) {
                dataObj[kl][field] = 0;

            }
            var ga = new GlideAggregate(table);
            ga.addAggregate("COUNT", "sys_class_name");

            //For  boolean fields check how many are marked as true
            if (checkGr[field].sys_meta.type == -7) {
                ga.addQuery(field, true);


            } 
            //for integer fields, check how many have a value more than 0
            else if (checkGr[field].sys_meta.type == 4) {
            	ga.addQuery(field, "!=", 0)

            } else {

                ga.addNotNullQuery(field);

            }
            ga.query();
            while (ga.next()) {

                var klass = ga.sys_class_name + "";

                if (!dataObj[klass]) {
                    dataObj[klass] = {};
                }
                if (usePercentage) {
                    var usage = ga.getAggregate("COUNT", "sys_class_name");
                    var percent = (usage / dataObj[klass].total) * 100;
                    dataObj[klass][field] = percent;
                } else {
                    dataObj[klass][field] = ga.getAggregate("COUNT", "sys_class_name");
                }

            }

        }
        var csv = "Class,Total," + fieldLabels.join(",") + "\n";

        for (k in dataObj) {

            csv += k + "," + dataObj[k].total;
            var fieldValues = [];
            for (var x = 0; x < limit; x++) {
                var field = fieldLabels[x] + "";
                fieldValues.push(dataObj[k][field]);
            }

            csv += "," + fieldValues.join(",") + "\n";

        }

        GlideSysAttachment().write(rec, filename + ".csv", "text/csv", csv);
    }
}
