"use strict";

angular.module('dataGrow')
.controller('activeUnitInfoCtrl', function($scope, $rootScope, websocketService, unitInfoService, activeUnit) {

$scope.unit = activeUnit.data;

// replace unit on rootScope with unit from resolve
$scope.updateActiveUnitsList = function(unit) {
  for(var i = 0; i < $rootScope.activeUnits.length; i++) {
    if ($rootScope.activeUnits[i]._id === unit._id) {
      $rootScope.activeUnits.splice(i, 1, unit);
    }
  }
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


$scope.processHistory = function(unit, reading) {
 
  var dataArr = [];
  var time = 0;
  var tempSum;
  for(var day = 0; day < unit.day.length; day++){
    for(var hour = 0; hour < unit.day[day].hour.length; hour++){

      tempSum = 0; 
      time += 1/24;

      for(var data = 0; data < unit.day[day].hour[hour].data.length; data++){
        tempSum += unit.day[day].hour[hour].data[data][reading];
        
      }
      var dataObj = {};
        dataObj["day"] = time;
        dataObj[reading] = tempSum/4;
        dataArr.push(dataObj); 
    }
  }
 
  return dataArr;
};
  //Get active unit data from server at /api/unit/:unitId

  //Get websocket data to display from websocketService




 // D3 LINE GRAPH STUFF BELOW 
var ambientLineData = $scope.processHistory($scope.unit, "light");
$(function(){

    initChart();

});

function initChart() {
  

  var svg = d3.select("#visualisation"),
    width = 1000,
    height = 500,
    margins = {
      top: 80,
      right: 50,
      bottom: 80,
      left: 80
    },
    xMin = 0,
    xMax = $scope.unit.day.length,
    yMin = d3.min(ambientLineData, function (d) {      
      return d.light;
    }),
    yMax = d3.max(ambientLineData, function (d) {      
      return d.light;
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
      return yRange(d.light);
    })
      // .interpolate('basis');
    
  
  svg.append("svg:path")
    .attr("d", lineFunc(ambientLineData))
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
  };
//END LIGHT GRAPH 


// BEGIN AIR TEMP
var airTempLineData = $scope.processHistory($scope.unit, "airTemp");
$(function(){

    airChart();

});

function airChart() {

  var svg = d3.select("#airvisualisation"),
    width = 1000,
    height = 500,
    margins = {
      top: 80,
      right: 50,
      bottom: 80,
      left: 80
    },
    xMin = 0,
    xMax = $scope.unit.day.length,
    yMin = d3.min(airTempLineData, function (d) {      
      return d.airTemp;
    }),
    yMax = d3.max(airTempLineData, function (d) {      
      return d.airTemp;
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
      return yRange(d.airTemp);
    })
      .interpolate('basis');
    
  
  svg.append("svg:path")
    .attr("d", lineFunc(airTempLineData))
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
    .text("Air Temperature (F)");
  };
// End Air TEMP

//Start HUMIDITY
var humidityLineData = $scope.processHistory($scope.unit, "humidity");
$(function(){

    humidChart();

});
function humidChart() {
  
  
  // var lineDataActual = [{
  //   'day': 0.5,
  //   'lumens': 2000
  // }, {
  //   'day': 10,
  //   'lumens': 50
  // }, {
  //   'day': 20,
  //   'lumens': 180
  // }, {
  //   'day': 30,
  //   'lumens': 60
  // }, {
  //   'day': 40,
  //   'lumens': 120
  // }, {
  //   'day': 50,
  //   'lumens': 30
  // }];

  var svg = d3.select("#humidityvisualisation"),
    width = 1000,
    height = 500,
    margins = {
      top: 80,
      right: 50,
      bottom: 80,
      left: 80
    },
    xMin = 0,
    xMax = $scope.unit.day.length,
    yMin = d3.min(humidityLineData, function (d) {      
      return d.humidity;
    }),
    yMax = d3.max(humidityLineData, function (d) {      
      return d.humidity;
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
      return yRange(d.humidity);
    })
      .interpolate('basis');
    
  
  svg.append("svg:path")
    .attr("d", lineFunc(humidityLineData))
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
    .text("Humidity %");
  };
// END HUMIDITY

// BEGIN WATER TEMP
 var waterLineData = $scope.processHistory($scope.unit, "waterTemp");
$(function(){

    waterChart();

});
function waterChart() {

  var svg = d3.select("#watervisualisation"),
    width = 1000,
    height = 500,
    margins = {
      top: 80,
      right: 50,
      bottom: 80,
      left: 80
    },
    xMin = 0,
    xMax = $scope.unit.day.length,
    yMin = d3.min(waterLineData, function (d) {      
      return d.waterTemp;
    }),
    yMax = d3.max(waterLineData, function (d) {      
      return d.waterTemp;
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
      return yRange(d.waterTemp);
    })
      .interpolate('basis');
    
  
  svg.append("svg:path")
    .attr("d", lineFunc(waterLineData))
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
    .text("Water Temp (F)");
  };
















//END CTRL BELOW
});
