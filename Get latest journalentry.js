var journal = new GlideRecord("sys_journal_field");
journal.addQuery("name", current.getTableName());
journal.addQuery("element", "comments");
journal.addQuery("element_id", current.getUniqueValue());
journal.orderByDesc("sys_created_on");
journal.setLimit(1);//can be changes if you want more that the latest comment
journal.query();

if (journal.next())
template.print(journal.getValue("value"));
