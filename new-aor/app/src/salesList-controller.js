angular.module('newAor')
.controller('SalesListCtrl', ['WagersService', function(WagersService){

    this.getWagers = function(){
        return WagersService.getWagers();
    };

    this.getTotal = function(){
        return WagersService.getTotal();
    };

    this.removeWager = function(wager) {
        return WagersService.removeWager(wager);
    }
}]);