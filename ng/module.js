angular.module('app', [
    'ngRoute',
    'ng-polymer-elements'
]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});