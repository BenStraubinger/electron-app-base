#!/bin/bash


# PROJ_ROOT is the root directory containing this script.
# All paths are relative to this project root.
PROJ_ROOT=$(dirname "$0")

export PATH=$PROJ_ROOT/node_modules/.bin:$PATH


electron $PROJ_ROOT
