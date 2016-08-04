(function (angular) {
    "use strict";

    angular.module('testApp', ['workersMod','workersServiceModule','ngRoute'])
      .config(
      function ($routeProvider, $locationProvider) {
          // $locationProvider.html5Mode(true);
          $routeProvider
            .when('/welcome', {
                template: '<welcome></welcome>',
            })
            .when('/countries', {
                template: '<country-list></country-list>'
            })
            .when('/country/:countryCode', {
                template: '<country-detail></country-detail>'
            })
            .when('/sample', {
                template: '<h1>Sample<h1>'
            })
            .otherwise({
                redirectTo: '/welcome'
            });
      })
      .constant('BASEAPIURL', "http://mysite.com")
      .value('closeToPi', 3.14159)
      .filter('addText', function () {
        return function (input) {
            if (input && angular.isString(input)) {
                return input + ' is filtered!';
            }
            return input;
        };
      }) //end filter
    ;//end ang

})(window.angular);