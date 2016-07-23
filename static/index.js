"use strict";

/* globals $, Vue, hljs */

$(document).on('ready', function(){

	 $('pre code').each(function(i, block) {
	 	$(block).text(block.innerHTML.trim());
	 	
    	hljs.highlightBlock(block);
  	});

	new Vue({
		mixins: [window.myDropdown.mixin],
		el: 'body',
		data:{
			position1: 'right',
			position2: 'top',
			position3: 'right',
			position4: 'top',
			animation1: 'my-any-scale'
		},
	});
});