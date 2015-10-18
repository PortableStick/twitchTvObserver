(function() {
  'use strict';

  angular
    .module('twitchTvsite')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
