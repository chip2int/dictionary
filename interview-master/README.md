# Dictionary.com Code Project

Please read this in its entirety, especially the "What we're looking for" section.

## Overview

One of our favorite and most popular features here at Dictionary.com is Word of the Day. Every day, we pick a new word as our Word of the Day which is mailed out to our users and posted to our social media accounts.

Let's say that we've started allowing users to give **feedback** on these words, and we create a form that accepts a comment and a rating from 0-100. API submissions to this form will be available to us as JSON data.

## Project

We're getting a lot of great feedback, and we'd like to create a dashboard to display it to the team. We've set up an app that has access to the API data, and now we need to format it in a way that's easy to read.

This format is:

- The word, followed by a colon
- The comment
- The rating, converted from an integer into a star rating string, from 0-5 stars including half stars.
- The date, formatted as (month/day/year)

The below API data...

```json
{
  "word": "swashbuckler",
  "comment": "Yar, a good word, matey! Shiver me timbers!",
  "date": "19 Sep 2019 12:12:00 GMT",
  "rating": 85
}
```

would be formatted like this:

```
swashbuckler: Yar, a good word, matey! Shiver me timbers! ★★★★ (9/19/2019)
```

**Additionally,** we would like the formatted feedback to fit on a single line.

- If the formatted feedback is over 80 characters, omit the date.
- If, when the date is omitted, it's still over 80 characters, truncate the comment until the whole formatted feedback is 80 characters.

We have included feature tests that have a few examples of these conditions.

## How to implement your solution

We've setup the app to include the API data, and setup a `FeedbackApp` class with a `formatFeedback` method where you can start your implementation. You are free to create additional source code files in the src/ folder.

To install needed dependencies, run `npm install`

To run the app, run `npm start`

To run the test suite, run `npm test`

## What we're looking for

- Implementation
  - Production-ready and well-designed code which is simple, readable, and modifiable
  - Good object-oriented principles
- Testing
  - We've included feature tests which we are expecting to pass
  - We expect your code to be accompanied by unit tests
- Git
  - Good commit history lets us know you broke down this problem
  - Good commit messages are good communication to the team

There is no perfect solution, and there are no tricks or surprises. We don't expect perfect, idiomatic Javascript, especially if it is a language in which you don't have a lot of experience.

## How to submit your answer

When you are finished, please ZIP your solution and email it to your recruiting contact. Please make sure that this includes the .git folder, which will include your Git history.
