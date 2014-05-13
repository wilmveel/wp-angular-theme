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
			content = content.replace(/\t/g, '');
			

			content = escapeHTML(content);

			content = content.replace(/=""/g, '');

			content = content.replace(/\{/g, '&#123;');
			content = content.replace(/\}/g, '&#125;');

			$log.debug("content", content);
			exampleElement.attr("ng-non-bindable", "");
			exampleElement.html(content);

	    }	
	}
});

var escapeEl = document.createElement('textarea');

function escapeHTML(html) {
	escapeEl.textContent = html;
	return escapeEl.innerHTML;
};

function unescapeHTML(html) {
	escapeEl.innerHTML = html;
	return escapeEl.textContent;
};