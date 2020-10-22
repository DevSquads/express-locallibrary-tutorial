#!/bin/bash
export MONGODB_URI=$TEST_MONGODB_URI
npm start &
npm test