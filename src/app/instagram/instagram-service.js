'use strict';
angular.module('chadJiffDemo.instagram.service', [])
  .config(function(){
    /*OAuthProvider.setPublicKey('-L6Xe4mX7v5UwNLrt5ghrS4NldA');
    OAuthProvider.setHandler('instagram', function(OAuthData, Session){
      console.log(OAuthData)
      Session.create(OAuthData.result.user.id, OAuthData.result.access_token);
    })*/
  })
  .factory('instagramService', function($q, Session){
    var authorizationResult = false;

    return {
      initialize: function(){
        OAuth.initialize('-L6Xe4mX7v5UwNLrt5ghrS4NldA', {cache: true})
        authorizationResult = OAuth.create('instagram');
      },
      isReady: function(){
        return (authorizationResult)
      },
      connectInstagram: function(){
        var deferred = $q.defer();
        OAuth.popup('instagram', {cache: true}, function(error, result){
          if(!error){
            authorizationResult = result;
            Session.create(result.user.id, result.access_token);
            deferred.resolve();
          }else{
            //do some failed login stuff
          }
        })
        return deferred.promise;
      },
      clearCache: function(){
        OAuth.clearCache('instagram');
        authorizationResult = false;
      },
      getUser: function(){
        var deferred = $q.defer();
        var promise = authorizationResult.get('/v1/users/' + Session.id).done(function(data){
          deferred.resolve(data.data)
        }).fail(function(error){
          console.log(error)
        })
        return deferred.promise;
      }
    }
  })
