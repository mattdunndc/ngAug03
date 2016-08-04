(function (angular) {

    angular.module('countryItem', ['apiServices'])
        .component('countryItem', {
            templateUrl: 'app/country/countryItem.component.html',
            bindings: {
                country: '=countryData'
            },
            controllerAs: 'cic'
        })
})(window.angular);