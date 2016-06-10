angular.module( 'neel.passion', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(['$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'passion', {
    url: '/passion',
    views: {
      "main": {
        controller: 'PassionCtrl',
        templateUrl: 'passion/passion.tpl.html'
      }
    },
    data:{ pageTitle: 'Passion' }
  });
}])

.controller( 'PassionCtrl', ['$scope', function PassionCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
}])

;
