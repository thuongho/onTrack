angular.module('app').controller('mvMainCtrl', ['$scope', 'mvCachedGoals', function($scope, mvCachedGoals) {

  $scope.goals = mvCachedGoals.query();
}]);