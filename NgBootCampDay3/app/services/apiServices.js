(function (angular) {
    'use strict';

    function myFactory( /* DI */) {
        // factory returns an object
        // you can run some code before
        function sayHello(name) {
            return "Hi " + name + "!";
        }
        function fullGreeting(n) {
            return "Greetings;" + sayHello(n);
        }
        function getEntity(entity) {
            return "how to $http";
        }
        return {
            sayHello: sayHello,
            fullGreeting: fullGreeting,
            getEntity: getEntity
        }; //factory returns javascript object
    }
   
    function myService( /* DI */ ) {
        // service is just a constructor function
        // that will be called with 'new'
        var mys = this;
        mys.sayHello = function (name) {
            return "Hi " + name + "!";
        };
        mys.fullGreeting = function (n) {
            return "Greetings " + mys.sayHello(n);
        };
        mys.workers = function() {
            return;
        };
    }

    function countryService($http) {
        var url = 'app/demo-data/countries.json';
        var countryService = this;
        var defaultData = [{
            "countryName": "Andorra",
            "population": 84000
        }];

        countryService.getList = function () {
            return $http.get(url);
        }

        countryService.getList4 = function () {
            return $http.get(url)
              .then(function (response) {
                  return response.data;
              }, function (err) {
                  console.error("Got an error, using default data", err);
                  return defaultData
              });
        }
    }

    
    angular.module('apiServices', [])
    .factory('myFactory', myFactory)
    .service('countryService', countryService) // Note the case for each
    .service('myService', myService);

})(window.angular);