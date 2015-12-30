angular.module('app').controller('mvMainCtrl', ['$scope', function($scope) {
  $scope.goals = [
    {name: "onTrack App", active: true, published: new Date('12/28/2015'), goalDate: new Date('12/31/2015'), completed: false},
    {name: "Personal Portfolio", active: true, published: new Date('12/28/2015'), goalDate: new Date('12/31/2015'), completed: false},
    {name: "Anh Thuong's Website", active: true, published: new Date('11/28/2015'), goalDate: new Date('12/31/2015'), completed: false},
    {name: "Mastering CSS", active: false, published: new Date('11/28/2015'), goalDate: new Date('12/31/2015'), completed: true, completedDate: new Date('12/16/2015')}
  ]
}]);