var app = angular.module('timingApp',[]);

graph = [
  {
    "type":"class LA",
    "time":2,//sept freshman year
    "desc":"Your mandated English (LA) class.",
    "link":"",
    "name":"LA1",
    "duration": 10
  },
  {
    "type": "class Math",
    "time": 2,
    "desc": "The mandated math course.",
    "link": "",
    "name": "Geometry",
    "duration": 10
  },
  {
    "type": "class LA",
    "time": 14,
    "desc": "Mandated LA course",
    "link": "",
    "name": "LA2",
    "duration": 10
  },
  {
    "type": "college app",
    "time": 2
  },
  {
    "type": "grade level",
    "time": 2,
    "desc": "Your freshman year.",
    "link": "",
    "name": "Freshman year",
    "duration": 10
  },
  {
    "type": "grade level",
    "time": 14,
    "desc": "Your sophomore year.",
    "link": "",
    "name": "Sophomore year",
    "duration": 10
  },
  {
    "type": "grade level",
    "time": 26,
    "desc": "Your junior year.",
    "link": "",
    "name": "Junior year",
    "duration": 10
  },
  {
    "type": "grade level",
    "time": 38,
    "desc": "Your senior year.",
    "link": "",
    "name": "Senior year",
    "duration": 10
  },
  {
    "type": "class elective",
    "time": 12,
    "duration": 2,
    "name": "summer course",
    "desc": "A possible summer course.",
    "link":""
  }
];

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
yOffset = 50;

app.controller('graphDisp',function($scope){
  $scope.scl = 25;

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
