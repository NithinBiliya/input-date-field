(function () {

  angular.module('input.date.field', ['ui.bootstrap', 'ngAnimate'])

    .directive('inputDateField', ['$timeout', function ($timeout) {
      return {
        restrict: 'E',
        scope: {
          model: '=ngModel',
          disabled: '=ngDisabled',
          required: '=ngRequired',
//          change: '=ngChange',
          onChangeCallback: '&',
          onFocusCallback: '&',
          dateOptions: '=?datepickerOptions',
//          focus: "=ngFocus",
          clazz: "="
        },
        require: "?ngModel",
        templateUrl: 'html/inputDateField.tmpl.html',
        link: function (scope, ele, attr, ctrl) {
          //      scope.validate = function() {
          //        if(angular.isUndefined(scope.model))
          //          bootbox.alert("Date should be in DD/MM/YYYY format");
          //      }

          scope.valueChanged = function () {

            if(!(angular.isUndefined(scope.model) || scope.model==null)) {
              // update the model to the milliseconds value
              scope.model = scope.model.getTime();

              // set the form validity
              if((scope.model>scope.dateOptions.maxDate) || (scope.model<scope.dateOptions.minDate)) {
                ctrl.$setValidity('outOfBoundDate', false);
              }
              else {
                ctrl.$setValidity('outOfBoundDate', true);
              }

              $timeout(function() {
                // anything you want can go here and will safely be run on the next digest.
                // call the on change callback function
                scope.onChangeCallback();
              })

            }
          }

        }
      };
}]);

})();
