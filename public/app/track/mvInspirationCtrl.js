angular.module('app').controller('mvInspirationCtrl', ['$scope', 'mvCachedGoals', function($scope, mvCachedGoals) {
  $scope.inspirations = mvCachedGoals.query();

  $scope.sortOptions = [
    {value: "title", text: "Sort by Title"},
    {value: "endDate", text: "Sort by End Date"}
  ];

  $scope.sortOrder = $scope.sortOptions[0].value;
}]);