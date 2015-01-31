describe('main controller', function(){
  var mockToast, mockService
  beforeEach(function(){

    module('chadJiffDemo.sign-in.controller', function($provide){
      $provide.value('$mdToast', mockToast);
      mockService = {connectInstagram: jasmine.createSpy()};
      $provide.value('instagramService', mockService);
      $provide.value('instagramService', mockService);
    })

    inject(function($controller, _$rootScope_){
      $scope = {};
      $rootscope = _$rootScope_;
      $controller('MainCtrl', {$scope: $scope})
    })

  })

  it('should define getLoggedIn on scope as a function', function(){
    expect($scope.getLoggedIn).toBeDefined();
    expect($scope.getLoggedIn).toEqual(jasmine.any(Function));
  })
});
