var gr = new GlideRecord(“$0”);
gr.addQuery(“name”, ”value”);
gr.query();

if (gr.next()){
}
