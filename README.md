# Zendesk Front End Coding Challenge By Chris Krajewski

## Contribution

I've collected a list of [Improvements and New Features](#improvements) that need to be done.
If you'd like to help by contributing to the project, you're more than welcome to! 

## Install and run

First clone the repository:

```
https://github.com/ckrajewski/Zendesk
```

Open a terminal and cd into the `Zendesk` folder. Then:

1. `npm install` (installs the node modules and the TypeScript definition files)
2. `npm start` 

Your default browser should automatically open and redirect you to `http://localhost:8080`
It may open the tab before everything is loaded, but that's OK. After waiting for a bit, it should load :)

## Running Tests

Open a terminal and cd into the `Zendesk` folder. Then:

1. `npm test` 

Your terminal will scan through and run the tests in the test directory using Jest

## Looking at the code

To take a close look at the front end code (React) feel free to use any text editor i.e. Sublime/Atom. Here's not the time to argue which is better :) 


## Tools Used

- React and Redux.
- Webpack to bundle JS, and webpack-dev-server to run client side code on port 8080
- Node and Nodemon for backend (server) code. Server runs on port 3000
- ESLint used for formatting
- Material UI for styling
- Redux First Router for handling routing in React (navigating between subscription and submitted screen)
- Jest and Enzyme for testing

## Feedback
In case you have any comments, questions, bugs, enhancements feel free to open an issue in this repository.

## Improvements
- [ ] Improve client-side testing (Jest). Basic tests exist to test rendering, but more asserts should be done
- [ ] Add better error handling

## New Features To Add
- [ ] Display an error message if an error is received from the server endpoints
- [ ] Support multiple products (each with their own plan and seat count)
- [ ] Display/update the payment information
- [ ] Display/update the contact information