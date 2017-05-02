var friendsArray = [{
    name: "Arnold",
    photo: "jpglink",
    scores: ["1", "2", "3", "2", "1", "2", "4", "2", "1", "2"]
}, {
	name: "Helga",
	photo: "jpglink",
	scores: ["3", "4", "1", "3", "4", "1", "3", "4", "1", "3"]
}, {
	name: "Gerald",
	photo: "jpglink",
	scores: ["1", "2", "3", "4", "1", "2", "3", "4", "1", "2"]
}, {
	name: "Harold",
	photo: "jpglink",
	scores: ["5", "6", "4", "3", "2", "1", "1", "1", "3", "4"]
}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
