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
    
    
    //So I'm adding a cool feature in branch feature 01_01
}]);