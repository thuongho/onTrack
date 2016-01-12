angular.module('app').factory('mvCachedGoals', ['mvInspiration', function(mvInspiration) {
  var goalsList;

  return {
    query: function() {
      if (!goalsList) {
        goalsList = mvInspiration.query();
      }
      return goalsList;
    }
  }
}]);