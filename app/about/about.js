angular.module( 'neel.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(['$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{ pageTitle: 'About Us' }
  });
}])

.controller( 'AboutCtrl', ['$scope', function AboutCtrl( $scope ) {
}])

;
