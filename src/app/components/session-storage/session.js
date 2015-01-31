'use strict';
angular.module('chadJiffDemo.session', [])
  .service('Session', function ($window) {
  var PREFIX = 'chaddemo-auth-';
  var self = this;

  this.props = {};

  this.set = function(key, value) {
    this.props[key] = value;
    $window.sessionStorage.setItem(PREFIX + key, value);
  };

  this.get = function(key) {
    return this.props[key] || $window.sessionStorage.getItem(PREFIX + key);
  };

  this.create = function (id, instagramToken) {
    this.set('id', id);
    this.set('instagramToken', instagramToken);
  };

  this.remove = function(key) {
    delete this.props[key];
    $window.sessionStorage.removeItem(key);
  };

  this.destroy = function () {
    this.remove('id');
    this.remove('token');
  };

  this.logout = function(){
    angular.forEach(_.keys($window.sessionStorage), function(key) {
      if(key.lastIndexOf(PREFIX, 0) === 0) {
        self.remove(key);
      }
    });
    this.destroy();
  };

  Object.defineProperties(this, {
    id: { get: function() { return self.get('id'); } },
    instagramToken: { get: function() { return self.get('instagramToken'); } },
  });

  return this;
});
