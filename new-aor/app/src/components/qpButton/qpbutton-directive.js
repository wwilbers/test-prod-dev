angular.module('newAor')
.directive('qpButton', function() {
    return (
        templateUrl: 'components/qpButton/qpButton.html',
        scope: {
            game: '@',
            price: '@',
            action: '&'
        },
        controller: function(){
            this.performAction = function() {
                this.action([
                    wager: {
                        game: this.game,
                        price: parseInt(this.price, 10)
                    }
                ]);
            };
        },
        controllerAs: 'ctrl',
        bindToController: true
    );
});