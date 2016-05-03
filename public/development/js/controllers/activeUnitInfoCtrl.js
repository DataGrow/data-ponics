angular.module('dataGrow')
.controller('activeUnitInfoCtrl', ['$scope', '$rootScope', 'websocketService', 'unitInfoService', 'activeUnit', function($scope, $rootScope, websocketService, unitInfoService, activeUnit) {

$scope.unit = activeUnit.data;

// replace unit on rootScope with unit from resolve
$scope.updateActiveUnitsList = function (unit) {
  for (var i = 0; i <$rootScope.activeUnits.length; i++) {
    if ($rootScope.activeUnits[i]._id === unit._id) {
      $rootScope.activeUnits.splice(i, 1, unit)
    };
  };
};

$scope.updateActiveUnitsList($scope.unit);

//  websocketService.startWs();

 // $scope.websocketUpdate = {};

 // window.setInterval(function() {
 // 	$scope.websocketUpdate = websocketService.getUpdate();
 // 	console.log($scope.websocketUpdate);
 // },2000);

// toggle graph functionality
$scope.showLight = true;

$scope.selectGraph = function (event){
  $(event.target).parent().children().removeClass('active');
  $(event.target).addClass('active')
};
  //Get active unit data from server at /api/unit/:unitId

  //Get websocket data to display from websocketService

 // LINE GRAPH STUFF BELOW 

$(function(){

    initChart();

});

function initChart() {
  
  var fakedata = [{
    'day': 0,
    'lumens': 2000
  }, {
    'day': 10,
    'lumens': 50
  }, {
    'day': 20,
    'lumens': 180
  }, {
    'day': 30,
    'lumens': 60
  }, {
    'day': 40,
    'lumens': 120
  }, {
    'day': 50,
    'lumens': 30
  }];

  var svg = d3.select("#visualisation"),
    width = 1000,
    height = 500,
    margins = {
      top: 80,
      right: 50,
      bottom: 80,
      left: 80
    },
    xMin = d3.min(fakedata, function (d) {      
      return d.day;
    }),
    xMax = d3.max(fakedata, function (d) {      
      return d.day;
    }),
    yMin = d3.min(fakedata, function (d) {      
      return d.lumens;
    }),
    yMax = d3.max(fakedata, function (d) {      
      return d.lumens;
    }),

    xRange = d3.scale.linear().range([margins.left, width - margins.right]).domain([

    xMin,xMax
    ]),

  yRange = d3.scale.linear().range([height - margins.top, margins.bottom]).domain([
  
    yMin,yMax   
  ]),

  xAxis = d3.svg.axis()
    .scale(xRange)
    .tickSubdivide(true),
  
  yAxis = d3.svg.axis()
    .scale(yRange)
    .orient("left")
    .tickSubdivide(true);
    
  function make_x_axis() {        
    return d3.svg.axis()
      .scale(xRange)
       .orient("bottom")
      .tickSubdivide(true)
  }
  
  function make_y_axis() {        
    return d3.svg.axis()
      .scale(yRange)
      .orient("left")
      .tickSubdivide(true)
  }
  
  
  svg.append("g")         
        .attr("class", "grid")
        .attr("transform", "translate(0," + (height - margins.top) + ")")
        .call(make_x_axis()
            .tickSize((-height) + (margins.top + margins.bottom), 0, 0)
            .tickFormat("")
        )

    svg.append("g")         
        .attr("class", "grid")
    .attr("transform", "translate(" + (margins.left) + ",0)")
        .call(make_y_axis()
            .tickSize((-width) + (margins.right + margins.left), 0, 0)
            .tickFormat("")
        )

  svg.append("svg:g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (height - (margins.bottom)) + ")")
    .call(xAxis);

  svg.append("svg:g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + (margins.left) + ",0)")
    .call(yAxis);
    
    

  var lineFunc = d3.svg.line()
    .x(function (d) {
      return xRange(d.day);
    })
    .y(function (d) {
      return yRange(d.lumens);
    })
      .interpolate('basis');


  
  svg.append("svg:path")
    .attr("d", lineFunc(fakedata))
    .attr("class", "actual");
    
  svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", 500)
    .attr("y", height -6)
    .text("Days");
    
  svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("x", -200)
    .attr("dy", "1em")
    .attr("transform", "rotate(-90)")
    .text("Light (lumens)");
}
//END LIGHT GRAPH 





















//END CTRL BELOW
}]);
