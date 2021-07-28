const assert = require("assert");
const FeedbackApp = require("../../src/FeedbackApp.js");

describe("FeedbackApp", () => {
    const app = new FeedbackApp();

    describe("#formatFeedback", () => {
        it("should format the feedback to one line", () => {
            assert.equal(
                app.formatFeedback(swashbucklerFeedback),
                "swashbuckler: Yar, a good word, matey! Shiver me timbers! ★★★★ (9/19/2019)"
            );
        });

        context("when formatted feedback would be over 80 characters", () => {
            it("removes the date", () => {
                assert.equal(
                    app.formatFeedback(slubberFeedback),
                    "slubber: Slubber sounds like slobber. So gross! More pretty words, please! ★½"
                );
            });
        });

        context("when date is removed and when formatted feedback is still over 80 characters", () => {
            it("truncates the comment until the formatted feedback is 80 characters", () => {
                assert.equal(
                    app.formatFeedback(textlationshipFeedback),
                    "textlationship: I'm in a textlationship with my friend! We text all the t... ★★★"
                );
            });
        });

        context("when the rating is omitted", () => {
            it("omits the rating", () => {
                assert.equal(
                    app.formatFeedback(hyperbolicFeedback),
                    "hyperbolic: How come teethpaste isn't in the dictionary? (8/22/2019)"
                );
            });
        });
    });

    describe("#formatDate", () => {
        it("should return a formatted date", () => {
            assert.equal(
                app.formatDate("22 Aug 2019 01:20:00 PST"),
                "8/22/2019"
            );
        });
    });

    describe("#formatRating", () => {
        context('when there is no rating', () => {
            it('should return an empty string', () => {
                assert.equal(
                    app.formatRating(),
                    ''
                );
            });
        });

        context('when there is a rating', () => {
            it('should return the star rating with full stars correctly', () => {
                assert.equal(
                    app.formatRating(85),
                    "★★★★"
                );
            });
            it('should return the star rating with half stars correctly', () => {
                assert.equal(
                    app.formatRating(31),
                    "★½"
                );
            });
        });
    });

    describe("#calculateStarRating", () => {
        it('should return the correct star rating with integers', () => {
            assert.equal(
                app.calculateStarRating(23),
                1
            );
        });
        it('should return the correct star rating with half values', () => {
            assert.equal(
                app.calculateStarRating(31),
                1.5
            );
        });

    });

    describe("#calculateCommentLength", () => {
        it('should return the required comment length', () => {
            assert.equal(
                app.calculateCommentLength(7, 4),
                63
            );
        })
    });
});

let swashbucklerFeedback = {
    word: "swashbuckler",
    comment: "Yar, a good word, matey! Shiver me timbers!",
    date: "19 Sep 2019 12:12:00 GMT",
    rating: 85
};

let slubberFeedback = {
    word: "slubber",
    comment: "Slubber sounds like slobber. So gross! More pretty words, please!",
    date: "10 Sep 2019 04:14:00 PST",
    rating: 31
};

let textlationshipFeedback = {
    word: "textlationship",
    comment: "I'm in a textlationship with my friend! We text all the time! I feel like it's every second! LMAO!",
    date: "24 Aug 2019 20:54:00 GMT",
    rating: 60
};

let hyperbolicFeedback = {
    word: "hyperbolic",
    comment: "How come teethpaste isn't in the dictionary?",
    date: "22 Aug 2019 01:20:00 PST"
};