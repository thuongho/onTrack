angular.module('app').controller('mvInspirationDetailCtrl', ['$scope', 'mvInspiration', '$routeParams', function($scope, mvInspiration, $routeParams) {
  $scope.inspiration = mvInspiration.get({ _id:$routeParams.id });
}]);