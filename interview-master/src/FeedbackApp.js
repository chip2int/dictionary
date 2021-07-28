const moment = require('moment')
const MAX_LINE_LEN = 80;
const SPACE_LEN = 1;
const ELLIPSIS = '...';

module.exports = class FeedbackApp {
    formatFeedback(feedback) {
        /* Start here */
        const { word, comment, date, rating } = feedback;
        const formattedRating = this.formatRating(rating);
        const formattedDate = this.formatDate(date);

        /* construct formatted strings */
        const formattedString = `${word}: ${comment}`;
        const formattedStringWithRating = rating && `${formattedString} ${formattedRating}` || `${formattedString}`;
        const formattedStringWithDate = `${formattedStringWithRating} (${formattedDate})`;

        if (rating && formattedStringWithDate.length > 80 && formattedStringWithRating.length <= 80) {
            /* Omit Date */
            return formattedStringWithRating;
        } else if (formattedStringWithRating.length > 80) {
            /* truncate the comment */
            const requiredCommentLen = this.calculateCommentLength(word.length, formattedRating.length);
            return `${word}: ${comment.substring(0, requiredCommentLen)}${ELLIPSIS} ${formattedRating}`;
        } else {
            /* return the full formatted string */
            return formattedStringWithDate;
        }
    }

    formatDate(date) {
        return moment(date).format('l')
    }

    formatRating(rating) {
        const star = '★';
        const half = '½';
        if (!rating) {
            return '';
        }
        const starRating = this.calculateStarRating(rating);

        if (Math.floor(starRating) !== starRating) {
            return star.repeat(Math.floor(starRating)) + half;
        } else {
            return star.repeat(starRating);
        }
    }

    calculateStarRating(rating) {
        const starRating = (rating / 100) * 5;
        if (starRating - parseInt(starRating) >= 0.5) {
            return parseInt(starRating) + 0.5;
        } else {
            return parseInt(starRating);
        }
    }

    calculateCommentLength(wordLength, ratingLength) {
        return MAX_LINE_LEN - (ratingLength + (3 * SPACE_LEN) + wordLength + ELLIPSIS.length);
    }
};