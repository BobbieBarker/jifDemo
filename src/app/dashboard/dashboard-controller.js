angular.module('chadJiffDemo.dashboard.controller', [])
  .controller('dashboardCtrl', function($scope, $state, currentUser, myPics, instagramService){
    $scope.user = currentUser;
    $scope.myPicsList = myPics;
    $scope.logout = function(){
      instagramService.clearCache();
      $state.go('sign-in');
    }
  })
