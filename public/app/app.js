angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // html5 mode for routing
  $locationProvider.html5Mode({enabled: true, requireBase: false});
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main',
      controller: 'mainCtrl'
    });
}]);

angular.module('app').controller('mainCtrl', ['$scope', function($scope) {
  $scope.myVar = "Hello Angular";
}]);