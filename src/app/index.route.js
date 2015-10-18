(function() {
  'use strict';

  angular
    .module('twitchTvsite')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/initialList.html',
        controller: 'ListController',
        controllerAs: 'ListCntl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
