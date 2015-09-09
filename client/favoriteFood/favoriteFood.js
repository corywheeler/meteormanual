var favoriteFood = 'apples';
var favoriteFoodDep = new Tracker.Dependency;

var getFavoriteFood = function() {
    favoriteFoodDep.depend();
    console.log('getFavoriteFood just ran.')
    return favoriteFood;
}

var setFavoriteFood = function(newValue) {
    console.log('setFavoriteFood just ran.')
    favoriteFood = newValue;
    favoriteFoodDep.changed();
}

var getRandomNumber = function() {
    favoriteFoodDep.depend();
    console.log('getRandomNumber just ran.');
    return Math.random();
}

var handle = Tracker.autorun(function() {
    // This will run immediately once at least when the app loads
    // in the client due to it asking for the favorite food,
    // which has been made into a reactive variable. It will run
    // regardless of what route you are on.
    console.log('Your favorite food is ' + getFavoriteFood());
});

Template.favoriteFood.helpers({
    "favoriteFood" : function() {
        return getFavoriteFood();
    },
    "randomNumber": function() {
        return getRandomNumber();
    }
});

Template.favoriteFood.events({
    "submit form": function(e) {
        e.preventDefault();
        setFavoriteFood(e.currentTarget.newFood.value);
    }
});
