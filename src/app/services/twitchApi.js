(function(){

	'use strict';

	angular.module('twitchTvsite')
		.factory('twitchConnect', ['$log', '$http', '$q', function($log, $http, $q){
			return function(clientID, userName){	

				return $http.jsonp('https://api.twitch.tv/kraken?client_id=' + clientID + '&callback=JSON_CALLBACK')
					.then(function(data){
						var userDataString		= data.data._links.user + 's/' + userName + "?callback=JSON_CALLBACK",
							userStreamString	= data.data._links.streams + "/" + userName + "?callback=JSON_CALLBACK",

							functionArray 		= [$http.jsonp(userDataString), $http.jsonp(userStreamString)];

							 return $q.all(functionArray)
										.then(function(d){
											var userData 	= d[0].data,
												streamData 	= d[1].data;
												if(userData.name === "brunofin"){
													$log.log(userData);
													$log.log(streamData);
												}


											if(!streamData.error){

												return 	{
												name: userData.name,
												logo: userData.logo ||"http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png",
												bio:  userData.bio || "user has not written a bio",
												url:  "https://twitch.tv/" + userData.name,
												isStreaming: streamData.stream ? true : false,
												game:  streamData.stream ? streamData.stream.game : "null",
												preview: streamData.stream ? streamData.stream.preview : "null"
													};

											} else {
												$log.log(streamData.error);
												return {
													error: userName + ": " + streamData.error
												};
											}



											}, function(e){
												return{
													error: e.status === 404 ? "user " + userName + " does not exist" : "Unknown error"
												};
											});

				});

			}
		}]);
})();