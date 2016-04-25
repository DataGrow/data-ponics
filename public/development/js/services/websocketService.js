angular.module('dataGrow').service('websocketService', function( $http, $q, $log, ws) {


    this.startWs = function() {
    
      ws.on('message', function (event) {
        $log.info('New message', event.data);
    });
    
    window.setInterval (function() {
        ws.send('test test');

    },2000)  
    }

    

});



