var KBKnowledge = Class.create();

KBKnowledge.prototype = Object.extendsObject(KBKnowledgeSNC, {

	getKnowledgeRecord: function(articleNumber){
		
			var gr = new GlideRecord('kb_knowledge');
			gr.addQuery('number', 'KB0011056');
			gr.query();
			if (gr.next())
				return gr;
			else
				return false;
		
	},
	
	type: "KBKnowledge"
});
