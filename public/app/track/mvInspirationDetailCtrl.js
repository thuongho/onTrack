angular.module('app').controller('mvInspirationDetailCtrl', ['$scope', 'mvCachedGoals', '$routeParams', function($scope, mvCachedGoals, $routeParams) {
  // $scope.inspiration = mvCachedGoals.get({ _id:$routeParams.id });
  mvCachedGoals.query().$promise.then(function(collection) {
    collection.forEach(function(inspiration) {
      if (inspiration._id === $routeParams.id) {
        $scope.inspiration = inspiration;
      }
    })
  })
}]);