var friendsFind = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friendsFind);
    });

    app.post("/api/survey", function(req, res) {
    	var friendSurvey = res.body;
    	console.log(friendSurvey);
    	friendsFind.push(friendSurvey);
    });
};
