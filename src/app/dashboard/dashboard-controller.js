'use strict';
angular.module('chadJiffDemo.dashboard.controller', [])
  .controller('dashboardCtrl', function($scope, $state, currentUser, myPics){
    $scope.user = currentUser;
    $scope.myPicsList = myPics;
  });
