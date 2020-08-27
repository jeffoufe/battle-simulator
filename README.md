
# Battle Simulator

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br  />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner in the interactive watch mode.<br  />

### `npm run build` 

Builds the app for production to the `build` folder.<br  />

It correctly bundles React in production mode and optimizes the build for the best performance.

### `serve -s build`

Runs the app in the production mode.<br  />

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Technologies Used

Bootstrapped from Create React App ([https://create-react-app.dev/](https://create-react-app.dev/))

- TypeScript
 - React
 - Styled Components (for the styling)
 - Redux + Redux Saga (for the state management)
 - Jest / Enzyme (for the testing)
 - react-dice-complete ([https://www.npmjs.com/package/react-dice-complete](https://www.npmjs.com/package/react-dice-complete))

## Technology Choices

I chose Styled Components because I personally enjoy this library. I could have used SCSS modules too. The app should be responsive.

I decided to use Redux Saga as it makes the scenario really easy to test. I decided not to include the dice rollings in the saga as the method to roll the dices is in the ReactDice component ref. The rest of the turn is included in the saga though.

Jest is a standard in the JavaScript ecosystem. Enzyme is also a personal preference, I could have used react-testing-library as well.

## Possible improvements

 - Design
 - More animations
 - End To End Testing (using Cypress.io) : This is not really mandatory for an app of this size but it is for an application with more features
