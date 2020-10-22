#!/bin/bash
docker-compose run  --rm --entrypoint sh web ./test-instance-start-server.sh
docker-compose down
