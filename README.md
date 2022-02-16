# Hack the North 2022 Frontend Developer Challenge

## Question 1

Walk us through your development process as you worked on this project. How did you plan out the structure and design of it? How did decide on the tools you've used? Did you encounter any problems? And if so, how did you solve them? Are there any areas of your code that you're particularly proud of or want to point out?

First, I read the requirments and the background story of the problem and created a mental picture of the broad structure of the program. I decided to use React, react-bootstrap, and Axios because I am familiar with Angular and React Native, but I don't usually build a big project using React before. I wanted this time to not only show my skills, but learn new things a long the way. Knowing React Native helped a lot since React Native uses many React hooks such as useEffect and it follows the general structure of React. For my React Native apps, I used Axios to get data from the endpoint, so I chose to the same for this project. I divided up the work into days, to keep track of my progress and to have a goal for each day. I created a list of functionalities to implement such as creating an "event" component and wrote down story points (how long each task would take). Then I divided up the work so that every day would have similar number of story points in total. I added new tasks to the plan accordingly if new ideas came up along the way. For the design part, I didn't have any design assets so I took non copyrighted images from the internet and cropped it in circular shapes to fit my simplistic theme. I looked at other hackathon websites such as ElleHacks to get some inspiration for the design. I encountered a problem when I was finding a way to link to and view each related event. It was hard to come up with a good design at first. I initially tried to put each event in a tab group and by clicking the “related events” tab, you can view the related events. However, when I put the event in a tab group, something broke in the code and nothing was showing for the main events. When I succeeded in displaying the main event, the tab was not inline with the description and it was hard to tell what tab belonged to what event. I realized that it wouldn’t be ideal to continue debugging since I started to dislike that version of the design. Therefore, I came up with another idea which became what I’m particularly proud of from this code. I created a separate page for related events and you can pass in the event Id as a parameter to collect its related events. I believed that it would be too messy if I kept related events on the same page as the main events, so without thinking harder, I took actions to implement this change. This is another proof that if something doesn’t work in your code, it is encouraged to start again from scratch and try to think from a different point of view.  


## Question 2
Given additional time, how would you extend your application to become a fully functional product that thousands of hackers and the general public would use at Hackathon Global Inc.™'s next event? Would you add more features and performance metrics? If so, what would they be?

Given additional time, I would first implement all the additional functionalities mentioned in the notion page, such as allowing the user to search for a specific event, and making the app into a progressive web app. There are so many more features that would improve the user experience, such as putting more resources on the page and having more pages in general such as a FAQ page, a page that has information about the speakers, and a page for tips and tools that you can use during the hackathon. I think it would also be beneficial to have a calendar view of the events so users can visualize the timeline better. In addition, for the code, I think filtering data should not be done in the frontend but should have backend endpoints to grab the filtered data. Front end should focus on the display of the data and backend should focus on optimizing data retrieval. 

## Question 3
Any other thoughts you have (not limited to the previous questions).

One more aspect of my code that I would like to highlight is the use of cookies. I used cookies to save user preferences for filtering and the log in authentication status, so that users would not have to go back to the unauthenticated, general page if they click refresh. This will increase the quality of the user experience since they don’t have to continuously input the same information again. 

If you encounter an error like

```(ESLint) Failed to load plugin 'flowtype' declared in 'package.json » eslint-config-react-app': Cannot find module 'eslint-plugin-flowtype```, when you first start this app in your local environment (even if you did npm install),

then try

```npm i -g eslint-plugin-flowtype```

This is an issue with ESLint that they haven't fixed. I got this error when I switched to a different laptop to work on the project but got fixed by running the above command. 

Thank you for your time, and I hope to hear back from you soon : ) Also, I would appreciate any feedback that you have from this website. There’s always room for improvement. 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
