(function (angular) {
    'use strict';

    function CountryController(BASEAPIURL, myService, countryService) {
        var cc = this;
        this.url = BASEAPIURL;          /// default without controller as $ctrl
       
        countryService.getList().then(function(response) {
            cc.countries = response.data;  //when using this instead of cc!!! 
                                           //TypeError: Cannot set property 'countries' of undefined
            });
    }
    
    angular.module('countryMod', ['apiServices'])
        .component('countryMod',
        {
            templateUrl: 'countryMod.template.html',
            controller: CountryController,
            controllerAs: 'vm'
        });

})(window.angular);
