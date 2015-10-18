(function() {
  'use strict';

  angular
    .module('twitchTvsite')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/partials/userList.html',
        controller: 'ListController',
        controllerAs: 'ListCntl'
      })
      .when('/:username',{
        templateUrl: 'app/partials/users.html',
        controller: 'UserController',
        controllerAs: 'UserCntl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
