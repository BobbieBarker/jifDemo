angular.module('chadJiffDemo.dashboard.controller', [])
  .controller('dashboardCtrl', function($scope, currentUser, myPics){
    console.log(myPics)
    $scope.user = currentUser;
    $scope.myPicsList = myPics;
  })
