angular.module( 'neel.clients', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(['$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'clients', {
    url: '/clients',
    views: {
      "main": {
        controller: 'ClientsCtrl',
        templateUrl: 'clients/clients.tpl.html'
      }
    },
    data:{ pageTitle: 'Our Clients' }
  });
}])

.controller( 'ClientsCtrl', ['$scope', function ClientsCtrl( $scope ) {
}])

;
