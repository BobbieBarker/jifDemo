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
'chadJiffDemo.dashboard',
'chadJiffDemo.navbar',
'ngFx'
]).controller('chadDemoCtrl', function($scope, $state, Session, instagramService){
  instagramService.initialize();
  $scope.$on('auth-login-success', function(data){
    if(!_.isUndefined(Session.instagramToken) && !_.isUndefined(Session.id)){
      $state.go('dashboard')
    }
  })

  $scope.$on('$stateChangeStart', function($event, toState){
    if(toState.resolve){
      $scope.isResolvesPending = true;
    }
  })

  $scope.$on('$stateChangeSuccess', function($event, toState, toParams, fromState, fromParams){
    if (toState.resolve) {
      $scope.isResolvesPending = false;
    }
  })


})
