var friendsArray = [{
    name: "Arnold",
    photo: "../images/Arnold.jpg",
    scores: ["4", "4", "4", "4", "4", "4", "1", "1", "1", "2"]
}, {
	name: "Helga",
	photo: "../images/Helga.jpg",
	scores: ["1", "2", "1", "3", "4", "1", "3", "4", "1", "3"]
}, {
	name: "Gerald",
	photo: "../images/Gerald.jpg",
	scores: ["1", "2", "3", "4", "1", "2", "3", "4", "1", "2"]
}, {
	name: "Harold",
	photo: "../images/Herald.jpg",
	scores: ["2", "1", "4", "3", "2", "1", "1", "1", "3", "4"]
}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
