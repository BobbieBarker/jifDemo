describe('nav bar', function(){
  var mockService, mockState, mockToast, navbar;

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
      navbar  = $controller('navbarCtrl')
    })
  })

  it('should define logout on scope as a function', function(){
    expect(navbar.logout).toBeDefined();
    expect(navbar.logout).toEqual(jasmine.any(Function))
  })

  it('should call the spies when logout is called', function(){
    navbar.logout();
    expect(mockService.clearCache).toHaveBeenCalled();
    expect(mockState.go).toHaveBeenCalled();
    expect(mockToast.show).toHaveBeenCalled();
  })
})
