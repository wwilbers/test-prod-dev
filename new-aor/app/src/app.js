angular.module("newAor", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('dashboard',{
        url: '/dashboard',
        templateUrl: 'views/dashboard.html'
    });
    $urlRouterProvider.otherwise('/dashboard');
});