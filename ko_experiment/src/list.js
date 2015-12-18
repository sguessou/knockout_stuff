define(['moment'], function (moment) {
	'use strict';

	function List(list) {
		this.tuleva_pvm = moment(list.tuleva_pvm, 'YYYY-MM-DD HH:mm:ss').format('DD.MM.YYYY');
		this.korva = list.korva;
		this.tunnus = list.tunnus;
		this.tyo = list.tapahtuma;
	}
	List.prototype = {};
	List.prototype.constructor = List;

	return List;
});