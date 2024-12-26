# Real-Time-Messaging
 
A WhatsApp Web-like application using React, Typescript, InstantDB. 
The documentation for ui-template [UI/UX](./docs/ui-template.md) and technologies used [tech-used](./docs/technology%20-used.md) can be find under `./docs`.

## Features

A WhatsApp Web-like application
- The application have a contact list on the left and a chat window on the right
- Clicking on a contact opens the chat history of that contact.
- The application also include a message field to send new messages.
- Additionally, user can delete the old messages using delete icon.

## Installation
Git clone

```bash
    git clone https://github.com/shivanisharma19/real-time-messaging.git
    cd real-time-messaging/src
    open index.html
```
Run index.html on browser

## How to run the application

In the project directory, you can run:

* `npm install`
* `npm start`


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment

This application is deployed on [applicationUrl](https://real-time-messaging-f6f39.web.app/)

Setup Firebase tool
Follow the steps [guide](https://www.geeksforgeeks.org/how-to-deploy-react-project-on-firebase/) to have set up firebase in your repository. 

`npm install -g firebase-tools`
`firebase login`


To deploy latest version to firebase
`npm run build`
`firebase deploy`


## How to run test
 
 Open cypress in a browser window and run test
* `npm install` _[Optional]_
* `npm run test`

