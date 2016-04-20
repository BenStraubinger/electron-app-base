#!/bin/bash


# PROJ_ROOT is the root directory containing this script.
# All paths are relative to this project root.
PROJ_ROOT=$(dirname "$0")


echo 'Deleting external javascript libraries...'
rm -rf $PROJ_ROOT/src/public/ext

echo 'Deleting bower components...'
rm -rf $PROJ_ROOT/bower_components

echo 'Deleting node modules...'
rm -rf $PROJ_ROOT/node_modules



echo -e "\n  Cleanup completed successfully. \n"

