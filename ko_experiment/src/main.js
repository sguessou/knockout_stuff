define(['jquery', 'lodash', 'list', 'TyolistaViewModel', 'renderer', 'text!views/etusivu/tyolista.html'], 
	function ($, _, List, TyolistaViewModel, renderer, tyolistaView) {
	
	'use strict';

	var container = document.body,
		TyolistaVM,
		moment = require('moment'),
		listArr = []; 

	
	$.ajax({
	    type: "GET",
	    url: "/AnimalsKO/getWorkListData"
	})
	.done(function(response) {
		//console.log(JSON.parse(response));
		var data = JSON.parse(response);
		_.forEach(data, function(list) {
			listArr.push(new List(list.ElaimetTapahtumatKO));
		});


		TyolistaVM = new TyolistaViewModel(_.take(listArr, 10));
		renderer.render(container, tyolistaView, TyolistaVM);

		localStorage.removeItem('offset');
		localStorage.removeItem('limit');
		localStorage.removeItem('listArr');

		localStorage.setItem('offset', 10);
		localStorage.setItem('limit', 10);
		localStorage.setItem('listArr', JSON.stringify(listArr));
		//console.log(JSON.stringify(_.take(listArr, 10)));
	})
	.fail(function() {
		console.log('Ajax error!');   
	});
      
});