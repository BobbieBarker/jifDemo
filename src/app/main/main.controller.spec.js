describe('main controller', function(){
  var mockService, q, deferred, main;
  beforeEach(function(){

    module('chadJiffDemo.sign-in.controller', function($provide){
      mockService = {
        isReady: function(){
          return jasmine.createSpy();
        },
        connectInstagram: function(){
        deferred  = q.defer();
        return deferred.promise;
        }
      };
      $provide.value('instagramService', mockService);
    });

    inject(function($controller, _$rootScope_, $q){
      q = $q;
      $rootScope = _$rootScope_;
      spyOn($rootScope, '$broadcast').and.callThrough();
      spyOn(mockService, 'connectInstagram').and.callThrough();
      main = $controller('MainCtrl');
    });
  });

  it('should define getLoggedIn on scope as a function', function(){
    expect(main.getLoggedIn).toBeDefined();
    expect(main.getLoggedIn).toEqual(jasmine.any(Function));
  });

  describe('getLoggedIn with isReady true', function(){
    beforeEach(function(){
      main.getLoggedIn();
    });

    describe('isReady set to true', function(){
      beforeEach(function(){
        spyOn(mockService, 'isReady').and.returnValue(true);
        deferred.resolve();
        $rootScope.$digest();
      })
      it('should call instagramService.contectInstagram', function(){
        expect(mockService.connectInstagram).toHaveBeenCalled();
      });

      it('should call instagramService.isReady', function(){
        expect(mockService.isReady).toHaveBeenCalled();
      });

      it('should call rootScope.broadcast', function(){
        expect($rootScope.$broadcast).toHaveBeenCalled();
      });
    });

    describe(' isReady false', function(){
      beforeEach(function(){
        spyOn(mockService, 'isReady').and.returnValue(false)
        deferred.resolve();
        $rootScope.$digest();
      });
      it('should call isReady and not call $rootScope.$broadcast', function(){
        expect(mockService.isReady).toHaveBeenCalled();
        expect($rootScope.$broadcast).not.toHaveBeenCalled();
      });
    });
  });
});
