angular.module('app').factory('mvInspiration', ['$resource', function($resource) {
  var inspirationResource = $resource('/api/inspirations/:_id', { _id: "@id" }, {
    update: { method: 'PUT', isArray: false }
  });

  return inspirationResource;
}]);