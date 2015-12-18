define(['exports', 'lodash'], function (exports, _) {
	'use strict';

	var listArr = JSON.parse(localStorage.getItem('listArr'));
		

		function getNextPortion() {
			var offset = +localStorage.getItem('offset'),
				limit = +localStorage.getItem('limit');
			offset += limit;

			let portion = _.take(listArr, offset);

			portion = _.takeRight(portion, limit);

			localStorage.setItem('offset', offset);

			console.log(offset, JSON.stringify(portion));
		}

		exports.getNextPortion = getNextPortion;
});