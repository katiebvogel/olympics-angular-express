var app = angular.module('olympicApp', []);

app.controller('OlympicController', function($scope, $http){


  $scope.getFive = function(){


      $http.get('/olympics/lifters').then(function(response){
      console.log(response);
      $scope.lift = ('Our weightlifter is ' + response.data.name + ' from ' + response.data.location);
      return $scope.lift;
      })

      $http.get('/olympics/wrestlers').then(function(response){
      console.log(response);
      $scope.wrest = ('Our wrestler is ' + response.data.name + ' from ' + response.data.location);
      return $scope.wrest;
      })

      $http.get('/olympics/boxers').then(function(response){
      console.log(response);
      $scope.box = ('Our boxer is ' + response.data.name + ' from ' + response.data.location);
      return $scope.box;
      })

      $http.get('/olympics/kayakers').then(function(response){
      console.log(response);
      $scope.kayak =  ('Our kayaker is ' + response.data.name + ' from ' + response.data.location);
      return $scope.kayak;
      })

      $http.get('/olympics/judoka').then(function(response){
      console.log(response);
      $scope.judo = ('Our judoka is ' + response.data.name + ' from ' + response.data.location);
      return $scope.judo;
      })

  }



});
