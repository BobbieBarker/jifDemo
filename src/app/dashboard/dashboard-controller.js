'use strict';
angular.module('chadJiffDemo.dashboard.controller', [])
  .controller('dashboardCtrl', function($state, currentUser, myPics){
    var dashboard = this;
    dashboard.user = currentUser;
    dashboard.myPicsList = myPics;
  });
