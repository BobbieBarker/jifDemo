describe('main controller', function(){
  var mockService, q, deferred;
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
    })

    inject(function($controller, _$rootScope_, $q){
      $scope = {};
      q = $q;
      $rootScope = _$rootScope_;
      spyOn($rootScope, '$broadcast').and.callThrough();
      spyOn(mockService, 'connectInstagram').and.callThrough();
      $rootscope = _$rootScope_;
      $controller('MainCtrl', {$scope: $scope})
    })

  })

  it('should define getLoggedIn on scope as a function', function(){
    expect($scope.getLoggedIn).toBeDefined();
    expect($scope.getLoggedIn).toEqual(jasmine.any(Function));
  });

  describe('$scope.getLoggedIn with isReady true', function(){
    beforeEach(function(){
      $scope.getLoggedIn();
      spyOn(mockService, 'isReady').and.returnValue(true)
      deferred.resolve();
      $rootScope.$digest();
    });
      it('should call instagramService.contectInstagram', function(){
        expect(mockService.connectInstagram).toHaveBeenCalled();
      });

      it('should call instagramService.isReady', function(){
        expect(mockService.isReady).toHaveBeenCalled();
      });

      it('should call rootScope.broadcast', function(){
        expect($rootScope.$broadcast).toHaveBeenCalled();
      })
  });

  describe('$scope.getLoggedIn with isReady false', function(){
    beforeEach(function(){
      $scope.getLoggedIn();
      spyOn(mockService, 'isReady').and.returnValue(false)
      deferred.resolve();
      $rootScope.$digest();
    })
    it('should call isReady and not call $rootScope.$broadcast', function(){
      expect(mockService.isReady).toHaveBeenCalled();
      expect($rootScope.$broadcast).not.toHaveBeenCalled();
    })
  })
});
