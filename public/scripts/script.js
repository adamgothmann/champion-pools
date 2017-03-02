var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function($scope, $http){
  var key;
  $scope.getKey = function(){
    $http({
      method: 'GET',
      url: '/key'
    }).then(function(response){
      key = response.data;
      console.log(key);
      $http({
        method: 'GET',
        // url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key=' + key + ''
        url: 'https://ddragon.leagueoflegends.com/cdn/5.14.1/img/champion/Teemo.png'
      }).then(function(response){
        console.log(response.data);
        $scope.champions = response.data;
        console.log($scope.champions);
      });
    });
  };
  $scope.getKey();
}]);
