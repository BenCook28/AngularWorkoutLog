(function() {

	var app = angular.module('workoutlog', [
		'ui.router',
		'workoutlog.auth.signup',
		'workoutlog.auth.signin',
		'workoutlog.define',
		'workoutlog.logs'
	]);

	function config($urlRouterProvider) {
		$urlRouterProvider.otherwise('/signin');
	}
	config.$inject = [ '$urlRouterProvider' ];
	app.config(config);
	app.constant('API_BASE', '//localhost:3000/api/');
})();