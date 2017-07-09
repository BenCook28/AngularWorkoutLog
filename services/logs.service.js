(function(){
	angular.module('workoutlog')
		.service('LogsService', LogsService);

	LogsService.$inject = ['$http', 'API_BASE'];
	function LogsService($http, API_BASE, DefineService) {
		var logsService = this;
		logsService.workouts = [];
		logsService.individualLog = {};
		//Saves the log
		logsService.save = function(log) {
			return $http.post(API_BASE + 'log', {
				log: log
			}).then(function(response){
				logsService.workouts.push(response);
			});
		};

		logsService.fetch = function(log) {
			return $http.get(API_BASE + 'log')
				.then(function(response){
					logsService.workouts = response.data;
				});
		};

		logsService.getLogs = function() {
			return logsService.workouts;
		};

		logsService.deleteLogs = function(log) {
			var logIndex = logsService.workouts.indexOf(log);
			logsService.workouts.splice(logIndex, 1);
			var deleteData = {log: log};
			return $http({
				method: 'DELETE',
				url: API_BASE + "log",
				data: JSON.stringify(deleteData),
				headers: {"Content-Type": "application/json"}
			});
		};

		logsService.fetchOne = function(log) {
			//console.log(log);
			return $http.get(API_BASE + 'log/' + log)
				.then(function(response) {
					logsService.individualLog = response.data;
				});
		};

		logsService.getLog = function() {
			return logsService.individualLog;
		};

		logsService.updateLog = function(logToUpdate) {
			return $http.put(API_BASE + 'log', { log: logToUpdate });
		}
	}
})();