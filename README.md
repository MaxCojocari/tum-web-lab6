# CourseMe

The CourseMe is a portal to a diverse world of learning, offering personalized courses tailored to fit every learner's pace and passion.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Key Features

Target entity: **Course**

The application comprises three main areas, accessible via the sidebar:

1. Home
2. Favorites
3. Cart

All app state is in runtime, except the items selected in `Favorite` and `Cart`. The course IDs are saved in localStorage (key-value pairs `cart - id[]`, `favorite - id[]`) and fetched back when user goes to the desired section.

### Home

This section displays all available courses. Each course is presented on a card that includes details such as name, price, number of tutors, number of views, along with an `Add to Cart` button, and options to `Favorite` and `Share`.

When the `Add to Cart` button is clicked:

- The course is added to the cart;
- The button's label changes to `IN CART`;
- This action can be reversed by toggling the button again;
- The course appears in the `CART` section.

When the `Favorite` button is clicked:

- The course is moved to the `Favorites` section;
- This action can be reversed by toggling the button again.

### Favorites

This section lists courses that have been marked as favorites through the `Favorite` button on each course card in the Home section.

- Courses here can be sorted by price and/or popularity using checkboxes;

- Courses can be removed by clicking `REMOVE`. On the Home page, the corresponding course card will revert from `IN CART` to `CART`.

### Cart

This section contains courses that have been added to the cart. Courses can be removed by clicking the `REMOVE` button.

### Course Filters

Filters are provided as checkboxes in a collapsible list under the `Filter Courses` section.

Courses can be sorted by:

1. Both price and popularity - prioritizing price first, followed by popularity for courses with identical prices;
2. Price only - exclusively sorted by price;
3. Popularity only - sorted solely based on the number of views.

## Live Link

Deployed app can accessed through this [link](https://tum-web-lab6.vercel.app/).
