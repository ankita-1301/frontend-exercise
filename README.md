# HelloFreshGO - Front-end Exercise

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Technology stack also includes: NodeJS, Webpack, Redux and CSS Preprocessor - LESS

#### Pre-requisites

##### `NodeJS`

##### `Yarn`

### To Run

In the project directory, you can run:

##### `cd frontend-excercise`

##### `yarn install`

##### `yarn start`

The project will run at [http://localhost:8081/](http://localhost:8081/#/)

#### Project details

1. The project includes two main pages: Login Page and Recipes Page / Home Page.
2. Login page: One can log in using an email address and password. The fields are validated with relevant patterns.
3. Home Page: Displays all the recipes with its meta-data and image. It includes clicking on a heart icon to mark your favorite recipe, and a star icon to rate the recipe from 1 to 5.

#### Redux Store, Actions and Reducers

1. The global state of a user's login and all the recipes are stored in a redux store, accessible to all the components at all times.
2. Reducers are used to toggle between boolean values when user logs-in or logs-out. It is also mainly used to add a rate for a particular recipe's ID.
3. Actions are used as a middleware.

#### Responsive web designs

- The UI is designed for different screen-sizes using CSS media queries.
- Variables / Mixins are used.
- React-router, react-router-dom, and react-dom are used for rendering and routing purposes.

#### NOTE

- The images in the recipes.json file are replaced with new images.
- Sonarlint plugin is used to analyze the code.
- Redux is used to portrait my skills with a state management library, however, for a small project, it is not necessary.
- The star rating algorithm includes taking average all the ratings of a recipe by dividing it with the number of ratings(people in general).
