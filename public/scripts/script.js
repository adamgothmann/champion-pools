var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function($scope, $http){
  $scope.apiHit = function(){
    $http({
      method: 'GET',
      url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key='
    }).then(function(response){
      $scope.champions = response.data.data;
      console.log($scope.champions);
      console.log($scope.champions.length);
    });
  };
  $scope.apiHit();
}]);
