

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

    Template.favoriteFood.helpers({
        "is" : function() {
            return 'is ' + getFavoriteFood();
        }
    })

    Template.favoriteFood.events({
        "submit form": function(e) {
            e.preventDefault();
            setFavoriteFood(e.currentTarget.newFood.value);
        }
    })
}