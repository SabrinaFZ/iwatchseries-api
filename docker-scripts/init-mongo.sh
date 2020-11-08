#!/usr/bin/env bash
echo "Creating mongo user..."
mongo -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --host localhost --port 27017 --authenticationDatabase admin --eval "db=db.getSiblingDB(${MONGO_INITDB_DATABASE});db.createUser({user: ${MONGO_INITDB_ROOT_USERNAME}, pwd: ${MONGO_INITDB_ROOT_PASSWORD}, roles: [{role: 'readWrite', db: ${MONGO_INITDB_DATABASE}}]});"
echo "Mongo admin user created."
