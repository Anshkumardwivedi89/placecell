 

 (NOTE: Admin Panel and services not yet completed)
## Introduction :

Training & Placement Cell, IPS Academy Indore aims at building a strong interface between industry and the University for training and placement of students. To make recruitment session smoother for students, Training & Placement Cell to have a web portal for handling the placement registration for companies visiting our campus.

## Motivation :
The motivation for doing this project was primarily to make recruitment session smoother for students & make the complete Placement Process paperless at IPS Academy Indore. This is my small contribution, as an IPSian, to the betterment of the system of Placements in IPS Academy Indore.

We will be deeply thankful to T&P Authorities for approving my project to use as **Official Placement Portal - IPS Academy Indore**.

## Tech Stack :
* Node.Js (Server side JavaScript runtime environment)
* ExpressJs (Web Application Framework for Node.Js)
* MongoDB (Cross Platform, Document oriented NoSQL Database)
* AngularJs (JavaScript based Front-end Framework)

## Getting Started :

### Prerequisites -

1. Install Node.Js
```
$ sudo apt-get update
$ sudo apt-get install nodejs
```
2. Install npm
```
$ sudo apt-get install npm
```
3. Install MongoDB
```
https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-ubuntu/
```
### Run Software


3. Install Dependencies 
```
$ npm install
```
4. Start server
```
$ PORT=8080 node server.js
```
Server would be running at port 8080. Open any browser. Access the project - http://localhost:8080/

> You need to set environment variables PTP_EMAIL, PTP_EMAIL_PASSWORD, SECRET, SMS_API_KEY,SMS_SENDERID & SMS_BASE_URI in .env file (root folder). For more info refer API files in router folder.

## Project Status

This project is currently under Development and we aim to deploy it with the functionalities we can enable before Placement sessions .


## Project Structure
   
    PlacementIPS/
    ├── app/                    # Backend Folder
    │   ├── controllers/            # All business logic for routers
    │   ├── middlewares/            # ExpressJs Middlewares
    │   ├── models/                 # MongoDB database models
    │   ├── routes/                 # Backend API routes
    │   └── services/               # Server side services 
    ├── public/                 # Frontend Folder
    │   ├── app/                    # Frontend Application
    │   │   ├── controllers/            # AngularJs Controllers
    │   │   ├── directives/             # Custom AngularJs directives 
    │   │   ├── filters/                # Custom AngularJs filters
    │   │   ├── services/               # Services in AngularJs
    │   │   ├── views/                  # All HTML files
    │   │   ├── app.js                  # AngularJs App file
    │   │   └── routes.js               # All AngularJs Front end Routes 
    │   └── assets/                 # Project assets including CSS, Images, Icons, JavaScripts files
    ├── README.md               # README file
    ├── package.json            # Holds metadata relevent to project & project's dependencies 
    ├── .gitignore              # Git ignore files 
    └── server.js               # Node App start file


## Contributing
We are constantly working on towards making the placement portal more efficient and to speed up the overall service of Placement Portal to ensure smooth transition.

Any further Contribution will be appriciated




## Reference PlacementMNIT 
 
