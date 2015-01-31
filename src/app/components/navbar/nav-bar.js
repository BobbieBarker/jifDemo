'use strict';
angular.module('chadJiffDemo.navbar', [])
  .directive('navbar', function(){
    return {
      restrict: 'E',
      scope: {
        user: '='
      },
      templateUrl: 'app/components/navbar/navbar.html',
      controller: 'navbarCtrl'
    }
  }).controller('navbarCtrl', function($scope, instagramService){
    $scope.logout = function(){
      instagramService.clearCache();
      $state.go('sign-in');
    }
  })
