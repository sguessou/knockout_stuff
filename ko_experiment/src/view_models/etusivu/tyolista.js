define(['listManager'], function (listManager) {
	function TyolistaViewModel(lista) {
		this.title = 'Työlista';
		this.tyolista = lista;

		this.getNextPortion = function() {
			listManager.getNextPortion();
		};
	}

	return TyolistaViewModel;
});