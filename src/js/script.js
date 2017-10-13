// Code goes here

angular.module('myApp', ['input.date.field'])
  .controller('myBasicController', ['$log',function($log) {
      var vm = this;

      vm.dt=1499106600000;

      vm.options = {
        minDate: new Date(),
        maxDate: new Date("2017-07-17")
      };

      vm.logChangedTime = function() {
        $log.info("dt2 changed at - "+(new Date()));
      }

      vm.focusHandler = function(para) {
        $log.info("inside focusHandler - "+para);
      }

  }])
