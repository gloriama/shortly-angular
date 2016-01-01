angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function (link) { //inside shortenControllerSpec, the test doesn't take a parameter..hmm
    Links.addOne(link);
  };

});
