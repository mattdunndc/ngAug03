(function (angular) {
    "use strict";

    angular.module('testApp', ['countryList','apiServices'])
      .constant('BASEAPIURL', "http://mysite.com")
      .value('closeToPi', 3.14159);

})(window.angular);