angular.module('newAor')
.service('WagersService', function(){
    var wagers = [];

    this.add = function(wager) {
        wagers.push(wager);
    }

    this.getWagers = function() {
        return [].concat(wagers);
    }

    this.getTotal = function() {
        return wagers.reduce(function(sum, wager) {
            return sum + wager.price;
        }, 0);
    }

    this.removeWager = function(wager) {
        var wagerIndex = wagers.indexOf(wager);
        if (wagerIndex == -1) {
            return;
        }
        return wagers.splice(wagerIndex, 1);
    }
});