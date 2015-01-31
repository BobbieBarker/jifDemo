'use strict';

angular.module('chadJiffDemo', [
'ngAnimate',
'ngCookies',
'ngTouch',
'ngSanitize',
'restangular',
'ui.router',
'ngMaterial',
'chadJiffDemo.instagram',
'chadJiffDemo.sign-in',
'chadJiffDemo.session',
'chadJiffDemo.dashboard'
]).controller('chadDemoCtrl', function($scope, $state, Session, instagramService){
  instagramService.initialize();

  $scope.$on('auth-login-success', function(data){
    if(!_.isUndefined(Session.instagramToken) && !_.isUndefined(Session.id)){
      $state.go('dashboard')
    }
  })


})
