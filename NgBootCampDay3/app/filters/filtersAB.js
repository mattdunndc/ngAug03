(function(angular, reverseString) {
  'use strict';

  angular.module('someFilters', [])

    .filter('addOne', addOne)
    .filter('initials', initials)
    .filter('oxfordComma', oxfordComma)
    .filter('add', add)

    .filter('trillionDollar', function($filter) {
      return function trillionDollar(input) {
        return $filter('currency')(input / 1000000000000) + ' trillion';
      };
    })

    .filter('reverse', function() {
      return reverseString;
    });

  function addOne() {
    return function(input) {
      if (angular.isNumber(input)) {
        return input + 1;
      }
      return NaN;
    };
  }

  function initials() {
    return function(input) {
      // What happens if we don't check for input?
      if (input && input.split && angular.isString(input)) {
        // New York City
        var words = input.split(' ');
        // ['New', 'York', 'City']
        angular.forEach(words, function(word, index) {
          words[index] = word.slice(0, 1);
        });
        // ['N', 'Y', 'C']
        return words.join('');
        // NYC
      }
      return input;
    };
  }

  function oxfordComma() {
    // This one takes an array of strings and returns a string
    return function(input) {
      if (angular.isArray(input)) {
        var arr = angular.copy(input);
        var last = arr.splice(-1);
        return arr.join(', ') + ', and ' + last;
      }
      return input;
    };
  }

  function add(addOneFilter) {
    return function(a, b) {
      if (angular.isNumber(a) && angular.isNumber(b)) {
        var result = a;
        for (var x = 0; x < b; x++) {
          result = addOneFilter(result);
        }
        return result;
      }
      return NaN;
    };
  }
})(window.angular, window.reverseString);
