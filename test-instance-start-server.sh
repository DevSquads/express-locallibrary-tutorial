#!/bin/bash
export MONGODB_URI=$TEST_MONGODB_URI
echo 'Starting server'
npm start &
echo 'Starting tests'
npm test