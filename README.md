# three-cards
Three Card Game

# How to setup?
 - clone the repo
 - `cd three-cards`
 - `npm install`

# How to run?
`node index.js`

# How to run tests?
`npm run test`

# Score Calculator Logic
 - ScoreCalculator is built around Chain of Responsibility design pattern
 - In Order to satisfy the use cases, a boosting parameter is added which ensures that max score of 2nd most of calculator is way more lesser than min score of the 1st one
    (Like for eg. Max Score from TopScoreCalculator is lesser than Min Score of PairScoreCalculator)
    This ensures that the score doesn't overlap

