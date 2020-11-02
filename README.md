# iwatchseries-api

API for [iwatchseries app](https://github.com/SabrinaFZ/iwatchseries)

## Pre-requisites
1. Install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
2. Enable [Authentication Control](https://docs.mongodb.com/manual/tutorial/enable-authentication/)
3. Install [Node.js](https://nodejs.org/es/download/)

## Setup
1. Clone the repo in your machine
```
git clone https://github.com/SabrinaFZ/iwatchseries-api.git
```
2. Create a `.env` file with the following enviroment variables:
```
MONGO_CLIENT_URI=mongodb://yourmongodbhost:yourmongodbport
MONGO_DB=database_name
MONGO_USER=yourmongodbuser
MONGO_PASSWORD=yourmongodbpassword
JWT_SECRET=random_secret
```
3. Install dependencies
```
npm i
```
4. Run the server
```
npm run start
```

## Build with
- MongoDB
- NodeJs
- Express

## Authors 
- [SabrinaFZ](https://github.com/SabrinaFZ)
