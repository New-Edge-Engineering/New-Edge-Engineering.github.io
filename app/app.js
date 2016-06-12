angular.module( 'neel', [
  'ngCookies',
  'angularConsent',
  'segmentio',
  'templates-app',
  'templates-common',
  'neel.about',
  'neel.clients',
  'neel.contact',
  'neel.passion',
  'ui.router'
])

.config( ['$stateProvider', '$urlRouterProvider', function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/about' );
}])

.run( ['segmentio', function run (segmentio) {
  segmentio.load('ueRTHEuLSmyMO1cvVesV5iuD4FecoBdk');
}])

.controller( 'AppCtrl', ['$scope', '$location', function AppCtrl ( $scope, $location ) {
  $scope.date = new Date();
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | New Edge Engineering Limited' ;
    }
  });
}])

;

