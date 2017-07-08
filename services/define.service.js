(function(){
	angular.module('workoutlog')
		.service('DefineService', DefineService);

		DefineService.$inject = ['$http', 'API_BASE'];
		function DefineService($http, API_BASE) {
			var defineService = this;
			defineService.userDefinitions = [];

			defineService.save = function(definition) {
				return $http.post(API_BASE + 'definition', {
					definition: definition

				}).then(function(response){
					defineService.userDefinitions.unshift(response.data);
				});
			};

			defineService.getDefinitions = function() {
				return defineService.userDefinitions;
			};
		}
})();