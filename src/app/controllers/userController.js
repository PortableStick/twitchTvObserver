(function(){

	'use strict';

	angular.module('twitchTvsite')
		.controller('UserController', ['$routeParams', '$scope', 'twitchConnect', '$log', function($routeParams, $scope, twitchConnect, $log){
			var currentUser = $routeParams.username,
				clientId	= 'akii9u8wn89o3psqjxxogne0nodprrs';
				
				twitchConnect(clientId, currentUser).then(function(d){
					$scope.currentUserData = d;
				});
		}]);

})();