<div align="center" style="max-width:250px; margin:40px auto">

![](/design/emaily_logo.png)

</div>
<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> MERN application for receiveing feedbacks from email survey's. The user can register, buy credits, make surveys, review them and send them out. Once the user receive the survey, his feedback will be collected and displayed to the user dashboard.
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Start dev env](#running)
- [Deployment](#deployment)
- [Built using](#built_using)
- [To do](#todo)


## 🧐 About <a name = "about"></a>

This is a pet project extended from a Udemy course idea. The aim is to have a final product and deliver it to end users.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

Those are software you will need to have in your machine to setup the project:

- Node.js 10.x.x >
- NPM 6.x.x >
- MongoDB (you can use an mLab account instead)

You will also need to have an account for the following services:

- SendGrid: to send mass emails
- mLab (optional): For a MongoDB database on the cloud
- Google account: for oAuth authentication
- Stripe: to receive payments

### Installing

A step by step series of examples that tell you how to get a development env running.

Clone the repo:

```
git clone repo-name
```

Install dependencies from the main folder and from the client folder

```
npm install && cd client && npm install
```

Inside the ./config folder create a dev.js file with the following credential and keys:
```
module.exports = {
  googleClientID: '',
  googleClientSecret: '',
  mongoURI: '',
  cookieKey: '<RANDOM KEY>',
  stripePublishableKey: '',
  stripeSecretKey: '',
  sendGridKey: '',
  redirectDomain: 'http://localhost:3000'
}
```

## 🔧 Running server and client in dev env <a name = "running"></a>

In the root folder:

```
npm run dev
```

## 🎈 Usage <a name="usage"></a>

The user will login with Google oAuth, from now on he can buy credits from stripe, now he can create surveys clicking on the "Add" button at the bottom of every page. Once the survey is created the user will be prompted to review it and send it if ready.

Every user in the recipients list will receive and email, the feedbacks will be collected and displayed when asked.

## 🚀 Deployment <a name = "deployment"></a>

Fast deploy using Heroku.
From the root folder:

```
npm run build
```
In your Heroku account, remember to add env variables like in *./config/prod.js*

Deploy to Heroku

```
git push heroku master
```

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [React](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## 🎉 ToDo <a name = "todo"></a>

A @ToDo list for the next steps can be found in the ToDo.md file in the root folder.
