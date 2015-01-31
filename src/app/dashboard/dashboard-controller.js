angular.module('chadJiffDemo.dashboard.controller', [])
  .controller('dashboardCtrl', function($scope, $state, $timeout, currentUser, myPics){
    $scope.user = currentUser;
    $timeout(function(){
      $scope.myPicsList = myPics;
    }, 100);
  });
