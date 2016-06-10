angular.module( 'neel', [
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

.run( function run () {
})

.controller( 'AppCtrl', ['$scope', '$location', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | New Edge Engineering Limited' ;
    }
  });
}])

;

