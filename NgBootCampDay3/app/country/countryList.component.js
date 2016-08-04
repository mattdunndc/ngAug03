(function (angular) {
    "use strict";

    function CountryListController(countryService) {
        var clc = this;
        clc.countrySearch = {};

        //So we only search when the user clicks the search button.
        clc.submitSearch = function () {
            console.log('submitSearch called', clc.nameInput);
            clc.countrySearch.countryName = clc.nameInput;
        }

        //As soon as our component is on the screen, get our country data.
        countryService.getList().then(function (countryData) {
            clc.countryList = countryData;
        });
    }

    angular.module('countryList', [
        'apiServices',
        'countryItem'
    ])
        .component('countryList', {
            templateUrl: 'app/country/countryList.component.html',
            controller: CountryListController
        });
})(window.angular);