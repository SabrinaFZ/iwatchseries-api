#!/usr/bin/env bash
echo "Creating mongo user..."
mongo -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD ${MONGO_PASSWORD} --authenticationDatabase admin --eval "db=db.getSiblingDB(${MONGO_DB});db.createUser({user: 'admin', pwd: 'admin', roles: [{role: 'readWrite', db: ${MONGO_DB}}]});"
echo "Mongo admin user created."
