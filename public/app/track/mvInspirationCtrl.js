angular.module('app').controller('mvInspirationCtrl', ['$scope', 'mvInspiration', function($scope, mvInspiration) {
  $scope.publicGoals = mvInspiration.query();
}]);