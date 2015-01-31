'use strict';
angular.module('chadJiffDemo.dashboard.instagram', [])
  .directive('instaGramPics', function(){
    return {
      restrict: 'E',
      scope: {
        picList: '='
      },
      templateUrl: 'app/dashboard/html/instagram-pics.html',
      controller: 'myPicCtrl'
    }
  }).controller('myPicCtrl', function($scope){
    self = this;
    $scope.itemsPerPage = 20;
    $scope.currentPage = 0;

    $scope.prevPage = function() {
      if ($scope.currentPage > 0) {
        $scope.currentPage--;
      }
    };

    $scope.prevPageDisabled = function() {
      return $scope.currentPage === 0 ? true : "";
    };


    this.pageCount = function(){
      return Math.ceil($scope.picList.data.length/$scope.itemsPerPage)-1;
    }


    $scope.nextPage = function() {
      if ($scope.currentPage < self.pageCount()) {
        $scope.currentPage++;
      }
    };

    $scope.nextPageDisabled = function() {
      return $scope.currentPage === self.pageCount() ? true : "";
    };
  })
