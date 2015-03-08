'use strict';
angular.module('chadJiffDemo.sign-in.controller', [])
  .controller('MainCtrl', function ($rootScope, instagramService) {
    var main = this;
    main.getLoggedIn = function(){
      instagramService.connectInstagram().then(function(){
        if(instagramService.isReady()){
          $rootScope.$broadcast('auth-login-success')
        }
      }).catch(function(error){
        console.log(error, 'should do something about this')

      })
    };
  });
