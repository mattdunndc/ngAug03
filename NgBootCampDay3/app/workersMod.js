(function (angular) {
    'use strict';

    function WorkersController(BASEAPIURL, workersService) {
        var cc = this;
        this.url = BASEAPIURL;          /// default without controller as $ctrl
       
        workersService.getList().then(function(response) {
            cc.workers = response.data;  //when using this instead of cc!!! 
                                         //TypeError: Cannot set property 'countries' of undefined
            });
    }
    
    angular.module('workersMod', ['workersServiceModule'])
        .component('workersMod',
        {
            templateUrl: 'workersMod.component.html',
            controller: WorkersController,
            controllerAs: 'vm'
        });

})(window.angular);
