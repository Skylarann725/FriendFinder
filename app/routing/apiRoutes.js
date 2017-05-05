var friendsArray = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friendsArray);
    });

    app.post("/api/survey", function(req, res) {
        var friendSurvey = res.body.scores;
        console.log(friendSurvey);
        friendsArray.push(friendSurvey);
    });
};
