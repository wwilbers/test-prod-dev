angular.module('newAor')
.controller('FormCtrl', ['WagersService', function(WagersService) {
    this.game = null;
    this.price = null;

    this.onSubmit = function() {
        WagersService.add({
        game: this.game,
        price: this.price
        });
    };

    this.getWagers = function(){
        return WagersService.getWagers();
    }
}]);