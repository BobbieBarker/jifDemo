'use strict';
angular.module('chadJiffDemo.dashboard.instagram', [])
  .directive('instaGramPics', function(){
    return {
      restrict: 'E',
      scope: {
        picList: '='
      },
      templateUrl: 'app/dashboard/html/instagram-pics.html',
      controller: 'myPicCtrl',
      controllerAs: 'mypics',
      bindToController: true,
    }
  }).controller('myPicCtrl', function($scope){
    var mypics = this;
    mypics.pagination = [];
    var itemsPerPage = 20;

    $scope.$watch(angular.bind(this, function(){
      return this.picList;
    }), function(newVal, oldVal){
      mypics.pageCount();
    })

    mypics.pageCount = function(){
      if(!_.isUndefined(mypics.picList)){
        var divisor = Math.ceil(mypics.picList.data.length/itemsPerPage);
        for(var i = 0; i < divisor; i++){
          mypics.pagination.push({currentPage: i});
        }
        mypics.picList.data =  _.chunk(mypics.picList.data, itemsPerPage);
      }
    };
  });
