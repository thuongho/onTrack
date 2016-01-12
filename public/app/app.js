angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: { 
      auth: function(mvAuth) {
        return mvAuth.authorizeCurrentUserForRoute('admin');
      }
    },
    user: { 
      auth: function(mvAuth) {
        return mvAuth.authorizeAuthenticatedUserForRoute();
      }
    }
  }

  // html5 mode for routing
  $locationProvider.html5Mode({enabled: true, requireBase: false});
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main/main',
      controller: 'mvMainCtrl'
    })
    .when('/admin/users', {
      templateUrl: '/partials/admin/user-list',
      controller: 'mvUserListCtrl',
      resolve: routeRoleChecks.admin
    })
    .when('/signup', {
      templateUrl: '/partials/account/signup',
      controller: 'mvSignupCtrl'
    })
    .when('/profile', {
      templateUrl: '/partials/account/profile',
      controller: 'mvProfileCtrl',
      resolve: routeRoleChecks.user
    })
    .when('/inspiration', {
      templateUrl: '/partials/track/inspiration',
      controller: 'mvInspirationCtrl'
    });
}]);

angular.module('app').run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
    if (rejection === 'not authorized') {
      $location.path('/');
    }
  });
});