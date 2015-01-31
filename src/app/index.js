'use strict';

angular.module('chadJiffDemo', [
'ngAnimate',
'ngCookies',
'ngTouch',
'ngSanitize',
'restangular',
'ui.router',
'ngMaterial',
'chadTools.toasters',
'chadJiffDemo.instagram',
'chadJiffDemo.sign-in',
'chadJiffDemo.session',
'chadJiffDemo.dashboard',
'chadJiffDemo.navbar',
'ngFx'
]).controller('chadDemoCtrl', function($scope, $state, $mdToast, Session, instagramService){
  instagramService.initialize();
  $scope.$on('auth-login-success', function(data){
    if(!_.isUndefined(Session.instagramToken) && !_.isUndefined(Session.id)){
      $state.go('dashboard')
      $mdToast.show({
        templateUrl: 'app/components/toasters/positive-feedback.html',
        controller: 'toasterCtrl',
        hideDelay: 6000,
        posistion: 'left right',
        resolve: {
          message: function(){
            return 'Congratz, you\'re now logged in!';
          }
        }
      })
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

  $scope.$on('$stateChangeError', function($event, toState, toParams, fromState, fromParams, error){

    var message = 'Awe snap, something went wrong, try reloading the page';
    if(!instagramService.isReady()){
      message = 'You are not logged in!';
      $scope.isResolvesPending = false;
    }
    $mdToast.show({
      templateUrl: 'app/components/toasters/bad-login-toast.html',
      controller: 'toasterCtrl',
      hideDelay: 6000,
      posistion: 'left right',
      resolve: {
        message: function(){
          return message;
        }
      }
    })
  })
})
