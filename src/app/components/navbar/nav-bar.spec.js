describe('nav bar', function(){
  var mockService, mockState, mockToast;

  mockToast = {show: jasmine.createSpy()};
  beforeEach(function(){
    module('chadJiffDemo.navbar', function($provide){
      mockToast = {show: jasmine.createSpy()}
      $provide.value('$mdToast', mockToast);

      mockState = {go: jasmine.createSpy()};
      $provide.value('$state', mockState);

      mockService = {clearCache: jasmine.createSpy()};
      $provide.value('instagramService', mockService);
    })

    inject(function($controller){
      $scope = {}
      $controller('navbarCtrl', {$scope: $scope})
    })
  })

  it('should define logout on scope as a function', function(){
    expect($scope.logout).toBeDefined();
    expect($scope.logout).toEqual(jasmine.any(Function))
  })

  it('should call the spies when logout is called', function(){
    $scope.logout();
    expect(mockService.clearCache).toHaveBeenCalled();
    expect(mockState.go).toHaveBeenCalled();
    expect(mockToast.show).toHaveBeenCalled();
  })
})
