'use strict';
angular.module('chadJiffDemo.dashboard.instagram', [])
  .directive('instaGramPics', function(){
    return {
      restrict: 'E',
      scope: {
        picList: '='
      },
      templateUrl: 'app/dashboard/html/instagram-pics.html',
      controller: 'myPicCtrl'
    }
  }).controller('myPicCtrl', function($scope){

  })
