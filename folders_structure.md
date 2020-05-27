# Folders structure:

## public

folder contains static files and served as is like:

1. index.html
   the main HTML file which send with first user request
2. images folder
   folder contains all images used in the app

## src

folder contains all the app logic which bundled together and put inside the HTML file:

1. components folder
   contains all the components which are a small parts of pages capable of being used many times
2. hooks folder
   conatins all custom hooks (a modern way of structuring React apps)
3. pages folder
   contains all app's pages
4. App.css file
   contains styling rules for the App.js file
5. App.js file
   the top level app's component
6. index.js
   the entry-point for the app here we decide where to render the app

## .env

a file to store environment variables which are variables contain sensitive data, stored in a safe place in the hosting server

## all styles folders

contain styling rules for one specified .js file

## package.json

a file describing the app and all the external libraries (dependencies) used with their versions, commands to build, test the app and some app's metadata
