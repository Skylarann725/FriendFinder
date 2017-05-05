var friendsArray = [{
    name: "Arnold",
    photo: "https://static1.comicvine.com/uploads/original/11121/111213005/5301702-8463448373-81jtN.jpg?width=400",
    scores: ["4", "4", "4", "4", "4", "4", "1", "1", "1", "2"]
}, {
	name: "Helga",
	photo: "https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F7a7e41b6-505f-467d-a210-75304b39bdda.jpg?width=400",
	scores: ["1", "2", "1", "3", "4", "1", "3", "4", "1", "3"]
}, {
	name: "Gerald",
	photo: "http://www.hey-arnold.com/Arnold/Gerald5.jpg?width=400",
	scores: ["1", "2", "3", "4", "1", "2", "3", "4", "1", "2"]
}, {
	name: "Harold",
	photo: "https://i.ytimg.com/vi/GJJVx_T0S3c/hqdefault.jpg?width=400",
	scores: ["2", "1", "4", "3", "2", "1", "1", "1", "3", "4"]
}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
