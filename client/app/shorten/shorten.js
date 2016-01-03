angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.serverPath = $location.$$protocol + '://' + $location.$$host + ':' + $location.$$port;

  if (!Auth.isAuth()) {
    $location.path('/signin');
  }

  $scope.addLink = function (link) { //inside shortenControllerSpec, the test doesn't take a parameter..hmm
    console.log("submitted link on shorten page:", link);
    //client-side validation of url
    //if valid:
      Links.addOne({url: link})
      .then(function (resp) { //for whatever reason, we only get here if the response is status 200
        console.log("response to POST to /api/links:", resp);
        $scope.response = resp;
      });
    //otherwise:
      //print some kind of error to user
  };
  $scope.signout = Auth.signout;

});
