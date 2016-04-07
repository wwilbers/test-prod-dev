angular.module('newAor')
.controller('QuickPickCtrl', function(WagersService)){
    this.add = function(wager){
        return WagersService.add(wager);
    };
}