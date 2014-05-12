angular.module('wpAngularTemplate').directive("wpExample", function($log){
	return {
		priority: 2000,
		compile: function($element, $attr){
			
			$log.debug("compile wpExample");
			var codeElement = $('.code', $element);
			var exampleElement = $('.example', $element);
			$log.debug("codeElement", codeElement.html());	

			var content = codeElement;
			content = content.html();
			content = content.toString();
			content = content.replace(/\t/g, '');
			content = content.replace(/\{\{/g, '&#123;&#123;');
			content = content.replace(/\}\}/g, '&#125;&#125;');

			
			//content = content.replace(/(\r\n|\n|\r)/gm, "");
			$log.debug("content", content);
			exampleElement.text(content);

      			
      	

			
	    }	
	}
});