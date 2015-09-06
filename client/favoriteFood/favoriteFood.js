

if (Meteor.isClient) {

    var favoriteFood = "apples";
    var favoriteFoodDep = new Tracker.Dependency;

    var getFavoriteFood = function() {
        favoriteFoodDep.depend();
        return favoriteFood;
    }

    var setFavoriteFood = function(newValue) {
        favoriteFood = newValue;
        favoriteFoodDep.changed();
    }

    var getRandomNumber = function() {
        favoriteFoodDep.depend();
        return Math.random();
    }

    Template.favoriteFood.helpers({
        "favoriteFood" : function() {
            return getFavoriteFood();
        },
        "randomNumber": function() {
            return getRandomNumber();
        }
    })

    Template.favoriteFood.events({
        "submit form": function(e) {
            e.preventDefault();
            setFavoriteFood(e.currentTarget.newFood.value);
        }
    })
}