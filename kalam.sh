#!/usr/bin/env bash

. ./scripts/start.sh

. ./scripts/stop.sh

echo "Invalid command: $1"
exit 1