### Developed and Designed by : Deepak Kumar (deepak300811@gmail.com)

# Third party / Helper libraries used in this project

1. For styling: TailwindCSS coupled with styled components are used .
2. A third party package called tailwind-styled-components is used, it makes it easy to write components with Tailwind as it would be with Styled components. A tailwind component can be styled to enhance it with styled component.
3. Other libraries:

   - axios -> For making network requests to get questions and options from printful quiz API.
   - react-select -> Provide out of the box solution to use drop down in the landing login form.
   - react-loading-skeleton -> Provide out of the box solution to add loading skeletons. Can be seeing when options loads.
   - animated-number-react -> To animate the number increase in the progress bar from 0 to 100%

   All these libraries are tested and trusted with over 100,000 weekly downloads, and animated-number-react with 8000 weekly downloads

# Architecture of the project:

1. A third party library called reducer might have been used for maintaining the state of this app but, that would be an overkill for a demo project. So we have heavily relied on the concept of React Context API coupled with useReducer.

2. Concept of Action Creators are used which will dispatch actions leading reducer logic to update the state.

3. A central state / store is maintained which contains information of the current session.

   - This information comparises of examineeName,selectedQuiz,noOfQuestions,selectedQuestion,result,testCompletion. And this information is saved in the session storage of the test, so that test status can be retained between page refreshes.
   - This session data we can also store in a server rather than on the sessions storage of the browser, but that is not implemented as it would go out of the scope of this project. Though if u like i am happy to implement 😊

4. Passing props to a component, making it totally dependent on it's parent (/src/Components/Single-Question) or making a component take all it's required props from the central state (src/Components/ProgressBar), this project demos both of these approaches.

5. Also, styles of each component are kept in separate files to keep code logic clean and lean.

6. A separate Error component is introduced which will be triggered if some request fails to do the intended task.

7. Folder Structure:
   - Containers: main components that can contain anothe components.
   - Components: Individual units that can come under another components, can be repeated multiple times as a part of the page, without refreshing the whole page, components can contain their own logic while will not refresh their parent but just themselves. Eg: Single-Question component where the quiz container remain as it is but it's child changes. Or Header component which is again used in Quiz container.
   - Store: Contains logic for coupling of useContext and useReducer hook and provides a custom hook named useStore which can attach any component to the central store.

# A fake server

1. As an addon a fake json server is deployed on heroku and can be used to push the result of the user to this server for tracking perposes, and yeah we can make use of this server to store sessions of the currect user 😉.But it will go out of the scope of this front end project so we are storing it in sessions store for the time being.
   fake server Repo: https://github.com/deepak300811/fake-server-ultimate-quiz
   Heroku Server address: https://fake-server-ultimate-quiz-prin.herokuapp.com/

   Note: If this server is not hit for a long time then it's instance gets cancled as it is a free account, so we loose data. But it is fine here as it is only for demo perposes.

2. If entry in this server jsons file fails but to non avaibality of the instance, then it will not stop anything on the UI, and user will be able to see their final result.

# Availability

This working project can be viewed on: https://ultimate-quiz-by-deepak.netlify.app/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
