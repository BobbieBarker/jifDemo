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
  }).controller('navbarCtrl', function($scope, $state, $mdToast, instagramService){
    $scope.logout = function(){
      instagramService.clearCache();
      $state.go('sign-in');
      $mdToast.show({
        templateUrl: 'app/components/toasters/informmative-toaster.html',
        controller: 'toasterCtrl',
        hideDelay: 3000,
        position: 'bottom left',
        resolve: {
          message: function(){
            return 'You have been successfully logged out!';
          }
        }
      });
    }
  })
