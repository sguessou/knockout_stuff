require.config({
	baseUrl: "/js/ko_experiment",
	
	deps: ['src/main'],
	
	enforceDefine: true,
	
	paths: {
		'knockout': 'libs/knockout',
		'text': 'libs/text',
		'jquery': 'libs/jquery.min',
		'lodash': 'libs/lodash.min',
		'moment': 'libs/moment.min',

		'renderer': 'src/renderer',
		'list': 'src/list',
		'listManager': 'src/list_manager',

		'TyolistaViewModel': 'src/view_models/etusivu/tyolista'
	}

});

define();