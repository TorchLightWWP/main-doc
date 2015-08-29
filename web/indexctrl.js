var app = angular.module('timingApp',[]);

typeCoordinate = {
  "class LA": 0,
  "class Math": 1,
  "class Science": 2,
  "class History": 3,
  "class Wrld Lang": 4,
  "class elective": 5,
  "extracurricular 1": 6,
  "extracurricular 2": 7,
  "test": 8,
  "competition": 9,
  "college app": 10,
  "grade level": 11
};

xOffset = 100;
yOffset = 75;

app.controller('graphDisp',function($scope, $http){
  $http.get('events.json').success(function(graph){

    //graph = JSON.parse(gr.data);

    $scope.scl = 45;

    $scope.graph = graph;
    $scope.types = typeCoordinate;

    $scope.offsets = [xOffset, yOffset];

    $scope.currDesc = "";
    $scope.currLink = "";
    $scope.descStyle = {display: 'none'};

    $scope.getY = function(node){
      return (typeCoordinate[node.type] * $scope.scl + yOffset) + 'px';
    };

    $scope.getX = function(node){
      return (node.time * $scope.scl + xOffset) + 'px';
    };

    $scope.getW = function(node){
      return node.duration * $scope.scl + 'px';
    };

    $scope.getStyle = function(node){
      return {left : $scope.getX(node),
              top: $scope.getY(node),
              width: $scope.getW(node),
              height: $scope.scl + 'px'
             };
    }

    $scope.lBarStyle = function(val){
      return {top: ($scope.scl * val + yOffset) + 'px',
              height: $scope.scl + 'px',
              width: ($scope.scl*50 + xOffset) + 'px'
             };
    };

    $scope.showDesc = function(desc,val,evt){
      $scope.currDesc = desc;
      $scope.currLink = val;
      $scope.descStyle = {display: 'block', position: 'absolute',
                          left: evt.pageX + 'px',
                          top: evt.pageY + 'px'};
    };

    $scope.hideDesc = function(){
      $scope.descStyle = {display: 'none'};
    };
  });
});
