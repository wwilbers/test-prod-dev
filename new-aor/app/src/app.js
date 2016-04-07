angular.module("newAor", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('dashboard',{
        url: '/dashboard',
        templateUrl: 'views/dashboard.html'
    });
    $urlRouterProvider.otherwise('/dashboard');
    console.log('pretend bug fix here!');
    //Global baseline fix made by product group to baseline version 2.0
});

