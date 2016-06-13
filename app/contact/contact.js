angular.module( 'neel.contact', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ui.bootstrap.alert'
])

.config(['$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'contact', {
    url: '/contact',
    views: {
      "main": {
        controller: 'ContactCtrl',
        templateUrl: 'contact/contact.tpl.html'
      }
    },
    data:{ pageTitle: 'Contact Us' }
  });
}])

.controller( 'ContactCtrl', ['$scope', '$log', '$http', '$timeout', function ContactCtrl( $scope, $log, $http, $timeout ) {
  $scope.capturing = true;

  $scope.send = function() {
    $scope.capturing = false;
    $scope.sending = true;
    $http({
      method  : 'POST',
      url     : 'https://script.google.com/macros/s/AKfycbwlgWtpZWVdq0HgfKPEYlfAK2TeVApv9LIwgOUaLGpycB6GBnw/exec',
      data    : $scope.enquiry,
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).success(function(response) {
      // this callback will be called asynchronously
      $scope.enquiry.name = "";
      $scope.enquiry.email = "";
      $scope.enquiry.message = "";
      $scope.sending = false;
      $scope.thankyou = true;
      $timeout(function(){
        $scope.thankyou = false;
        $scope.capturing = true;
      }, 15000);
      // when the response is available
    }).error(function(response) {
      // called asynchronously if an error occurs
      $log.debug("failure " + angular.toJson(response));
      // or server returns response with an error status.
      $scope.error = true;
      $scope.capturing = true;
    });
    return false;
  };

  $scope.close = function() {
    $scope.error = false;
  };
}])

;
