# iwatchseries-api

API for [iwatchseries app](https://github.com/SabrinaFZ/iwatchseries)

## Pre-requisites
1. Install [Docker](https://www.docker.com/products/docker-desktop)
2. Install [Node.js](https://nodejs.org/es/download/)

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
4. Build the image for the container
```
docker-compose build
```
5. Start running  the container
```
docker-compose up -d
```
**In case of restarting the docker container from scratch**
```
docker-compose down
docker volume rm iwatchseries-api_mongodbdata
docker-compose build
docker-compose up -d
```

## Build with
- MongoDB
- NodeJs
- Express
- Docker

## Authors 
- [SabrinaFZ](https://github.com/SabrinaFZ)
