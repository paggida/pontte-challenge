# Pontte Challenge
Automation project to receive and evaluate loan agreements.

## Technologies used
- NodeJs in API.
- PostgreSQL in data base.

## Prerequisite
It's necessary that in the application environment you've:<br>
- PostgreSQL (https://www.postgresql.org/).
- NodeJs (https://nodejs.org/en/).
- Dependency management, you may choose Yarn (https://yarnpkg.com/lang/en/) or NPM (It come with Node's installation).

## Installation*
For the correct operation of the application, it's necessary to perform the following procedures:<br>
- You'll fill the fields in all files in **config path** with the desired settings.
- Load libraries for project using the commands below in both root, it's corresponding to your dependency management:

      yarn

    or

       npm install

*&#42; This topic is detailed in docs path of this repository.*

## Usage
At the root of project path use the command below, it's corresponding to your dependency management:

     yarn start
or

    npm run start
The API will be displayed the address to access, as example ```http://localhost:3030```

## Automated tests
The project has automated tests that can be run using the below commands at the root:<br>

When using windows

     yarn test-windows
or

    npm run test-windows
When using linux

     yarn test-linux
or

    npm run test-linux


## Documentation
In the docs path there is a document describing the architecture used in the application and the configuration process with more details.
