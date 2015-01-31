'use strict';
angular.module('chadJiffDemo.dashboard.config', [])
.config(function ($stateProvider){
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard/html/dashboard.html',
      controller: 'dashboardCtrl',
      resolve: {
        currentUser: function(instagramService){
          return instagramService.getUser()
        }
      }
    })

})
