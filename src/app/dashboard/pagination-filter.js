'use strict';
angular.module('chadJiffDemo.dashboard.pagination', [])
  .filter('pagination', function(){
    return function(input, start) {
      start = parseInt(start, 10);
      if(!_.isUndefined(input)){
        return input.slice(start);
      }
    };
  });
