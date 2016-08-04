(function (angular) {
    'use strict';

    function countryService( $http ) {
        //Get the list of countries
        this.getCountries = function() {
            //This calls our service, and then when it returns
            //  it will take that response, and pull the data off of it.
            //  The other thing happening here is the promise from the $http
            //  is returned from the service call so that other things can
            //  call then on it to get the data out when the call returns.
            return $http.get('../demo-data/countries.json')
                .then( function( response ) {
                   return response.data; 
                });
        }
    };

    function workersService($http) {
        var url = 'app/demo-data/workers.json';
        var workersService = this;
       
        workersService.getList = function () {
            return $http.get(url);
        }

        workersService.getList4 = function () {
            return $http.get(url)
              .then(function (response) {
                  return response.data;
              }, function (err) {
                  console.error("Got an error, using default data", err);
                  return defaultData
              });
        }
    }

    angular.module('workersServiceModule', [])
        .service('workersService', workersService); // Note the case for each
    
})(window.angular);