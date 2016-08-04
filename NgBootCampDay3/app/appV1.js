(function (angular) {
    "use strict";

    angular.module('testApp', ['countryMod'])
      .constant('BASEAPIURL', "http://mysite.com")
      .value('closeToPi', 3.14159);

})(window.angular);