var friendsArray = [{
    name: "Arnold",
    photo: "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=47625075",
    scores: ["1", "2", "3", "2", "1", "2", "4", "2", "1", "2"]
}, {
	name: "Helga",
	photo: "https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F7a7e41b6-505f-467d-a210-75304b39bdda.jpg",
	scores: ["3", "4", "1", "3", "4", "1", "3", "4", "1", "3"]
}, {
	name: "Gerald",
	photo: "https://vignette2.wikia.nocookie.net/heyarnold/images/c/c8/GeraldShow.jpg/revision/latest?cb=20120613120813",
	scores: ["1", "2", "3", "4", "1", "2", "3", "4", "1", "2"]
}, {
	name: "Harold",
	photo: "https://i.ytimg.com/vi/GJJVx_T0S3c/hqdefault.jpg",
	scores: ["5", "6", "4", "3", "2", "1", "1", "1", "3", "4"]
}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
