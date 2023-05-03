# CardWise

![homepage](/public/photos/screenshot-homepage.png)
![dashboard](/public/photos/screenshot-dashboard.png)
![review](/public/photos/screenshot-review.png)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Future Development](#future-development) 
- [Contributing](#contributing) 
- [License](#license)

## Description
CardWise is a powerful and user-friendly browser-based application designed to enhance your study experience using spaced repetition techniques. With CardWise you can effortlessly create, save, and review decks of study cards, helping you master any subject with ease! Built using Node.js, Express.js, MySQL, and Handlebars, CardWise was created with the intention of revolutionizing the way users study and learn, allowing them to maximize their study efficiency, boost their retention, and ace their exams. 

Key features of the CardWise application include:
- Deck Organization - Stay organized by creating multiple decks to categorize your study materials. Whether it's for different subjects, chapters, or topics, StudyCard Pro provides a seamless way to manage and access your decks for efficient studying.
- Spaced Repetition Algorithm - CardWise employs an advanced spaced repetition algorithm that optimizes your learning process. The app intelligently schedules card reviews based on your performance, ensuring that you focus more on challenging cards and spend less time on well-mastered ones. This scientifically-proven technique enhances retention and long-term memory recall.
- Access your study cards seamlessly across different devices -  CardWise was crafted with data persistence in mind, and intended to be accessed from a range of devices. This means that users can pick up where they left off and study on the device that best suits them, whether that is a laptop, tablet, or mobile device. 
- Customized Study Sessions - CardWise allows users to tailor their study sessions to fit their schedule and needs. Users can select the number of cards they want to review each day and also the option to select the specific decks they want to review. This allows Cardwise to adapts to user preferences, ensuring an efficient and personalized study experience.

Sign up with CardWise today and unlock your full potential as a confident and knowledgeable learner!

The deployed application may be visited [here](https://dry-badlands-78694.herokuapp.com/).

## Installation
### Remote
As this application is deployed on Heroku, no installation is required for regular access other than installation of a modern and compatible web browser.

### Local
For those interested in deploying this application locally or testing their own modifications, however, users may follow these steps to get it up and running on their local system:

1. Clone the repository to your local machine by typing the following command into your command line: `git clone git@github.com:Pilotguide9897/CardWise.git`.

2. Navigate to the project directory and execute `npm install` in the command line to download the required packages and dependencies specified in the project's `package.json` file.

3. Update the MySQL database connection configuration in `./config/connection.js` and create one's own database for the app to access.

4. Ensure that MySQL is installed and running on your system. In the MySQL shell or a SQL client, run the contents of the db/schema.sql file using the `SOURCE` command to generate the necessary database. Once the database is generated, ensure that it is used with the `USE your_db_name` command.

5. Seed the database by navigating to the root folder of the project and executing `npm run seed` in the terminal to seed the database with test data. *Note: seed data may be modified from the project's seed folder to suit user needs and specifications.  

5. If desired, configure environment variables by creating a `.env` file within the project's root folder. 

6. Start the server and sync the Sequelize models with the MySQL database by executing `run npm start` or `npm run watch` from the terminal.

## Usage


The CardWise spaced-repetition study app allows users to easily create, edit, and delete decks of cards to facilitate their studies. To use the app, first create an account or sign-in. Upon login users are directed to their dashboard, from where they can create decks for each topic they wish to study. Within each deck users can add cards that contain questions and concepts that they need to review. Each card has two sides, write the question or term on the front side of the card and provide the corresponding answer or explanation on the back side. Users can create as many cards as they need to cover the material comprehensively.

Once a deck is completed, users may start a study session by selecting the deck they want to review. CardWise intelligently schedules the cards based on the spaced repetition algorithm. Begin by flipping the first card to see the question, then try to recall the answer from memory. Once ready, flip the card to check the answer. Before moving on to the next card, users are challenged to evaluate their understanding and mastery by grading their performance on each card. If users answered correctly, they may mark the card as "easy" or "mastered" by indicating a score closer to 5. If users struggled or got it wrong, they can mark it as "difficult" or "needs review" by marking closer to 0. CardWise will adapt future review sessions based on their performance to prioritize challenging cards and effective study.

In on our app, each page features a navigation bar containing links for the homepage, dashboard, and authentication-related functions (i.e., login/logout) to allow easy access to the site's features. When clicking into their dashboard, users are presented with a list of their existing decks. Each deck is matched with a title and provides a brief user-generated description of the subject matter, letting user's easily identify each deck. All decks have associated buttons that lead users to pages where they may review the deck's queued cards for study pruposes or update the deck; including its title, description, and card contents, respectively. Users may also delete a decks from this page. If a user remains idle on the site for an extended period, they will be prompted to log in again before being able to

## Future Development
Additional plans for development include:
1. Progress Tracking: It is our goal to eventually implement robust progress and performance tracking through the use of comprehensive user statistics. This would allow us to provide insightful metrics, such as accuracy rates, study time, and progress charts, better enabling users to gauge their improvement over time and identify areas in need of more attention.

2. Study Modes: We hope to be able to offer users a range o study modes to choose from based on their preferences and study goals. Whether you prefer traditional flashcards, multiple-choice questions, or fill-in-the-blank exercises, we here at CardWise would like to provides versatile options to cater to your learning style.

3. Improved support for math and chemistry: We would like to be able to integrate use of the Mathpix-Markdown-It library to be able to improve the user experience when rendering math equations and chemical formulas. 

## Contributing

Users interested in contributing to this project may fork the GitHub repository, make their intended alterations, and submit these changes to the original repository as a pull request. Pull requests will be reviewed by the project author. If accepted, the changes will be merged and added to the project's main branch to create the new starting point for future development! The updated changes will then be hosted on Heroku to make it accessible by the public at large.Alternatively, you may deploy your own instance of the application by following Heroku's documentation on deploying Node.js apps.

## License

MIT License Copyright (c) 2023 Lorne Cyr, Victoria Benoit, Jared Green.

## Badges

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
