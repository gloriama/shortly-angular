angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.data = {};
  $scope.serverPath = $location.$$protocol + '://' + $location.$$host + ':' + $location.$$port;

  if (!Auth.isAuth()) {
    $location.path('/signin');
  }

  //render all links
  Links.getAll().then(function (links) {
    $scope.data.links = links;
  });

  $scope.signout = Auth.signout;
});
