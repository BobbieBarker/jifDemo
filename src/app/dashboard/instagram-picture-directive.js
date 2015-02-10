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

    $scope.pagination = [];
    self = this;
    var itemsPerPage = 20;

    $scope.$watch('picList', function(){
      console.log('cheese')
      self.pageCount();
    })

    this.pageCount = function(){
      if(!_.isUndefined($scope.picList)){
        var divisor = Math.ceil($scope.picList.data.length/itemsPerPage);
        for(var i = 0; i < divisor; i++){
          $scope.pagination.push({currentPage: i});
        }
        $scope.picList.data =  _.chunk($scope.picList.data, 20);
      }
    };
  })
