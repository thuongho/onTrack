angular.module('app').controller('mvInspirationCtrl', ['$scope', 'mvInspiration', function($scope, mvInspiration) {
  $scope.inspirations = mvInspiration.query();

  $scope.sortOptions = [
    {value: "title", text: "Sort by Title"},
    {value: "endDate", text: "Sort by End Date"}
  ];

  $scope.sortOrder = $scope.sortOptions[0].value;
}]);