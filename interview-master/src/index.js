var fs = require("fs");

let FeedbackApp = require("./FeedbackApp.js");
let feedbackApiData = JSON.parse(fs.readFileSync("feedback.json"));

let app = new FeedbackApp();

feedbackApiData.map(feedback => console.log(app.formatFeedback(feedback)));
