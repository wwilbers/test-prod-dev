angular.module('newAor')
.directive('section', function(){
    return {
        scope: {
            name: '@'
        },
        transclude: true,
        templateUrl: 'components/section/section.html'
    }
})