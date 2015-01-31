angular.module('chadJiffDemo.sign-in.config', [])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('sign-in', {
    url: '/',
    templateUrl: 'app/main/main.html',
    controller: 'MainCtrl'
  });

  $urlRouterProvider.otherwise('/');
});
