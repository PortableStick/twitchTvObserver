(function(){

	'use strict';

	angular.module('twitchTvsite')
		.controller('ListController', ['$scope','$log','twitchConnect', '$http', function($scope,$log,twitchConnect, $http){

			$scope.users = [];

			var initialUsers 	= ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "brunofin", "comster404", "taniauncensored"],
			 		clientId	= 'akii9u8wn89o3psqjxxogne0nodprrs';
			 		
			 initialUsers.map(function(x){
			 	twitchConnect(clientId, x).
			 		then(function(d){
			 			$scope.users.push(d);
			 		});
			 });

		}]);

})();
