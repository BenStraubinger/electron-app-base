#!/bin/bash


# PROJ_ROOT is the root directory containing this script.
# All paths are relative to this project root.
PROJ_ROOT=$(dirname "$0")

# install location for external libraries
EXT_SRC_ROOT=$PROJ_ROOT/src/public/ext




#
# Download and setup project dependencies
#

npm install
export PATH=$PROJ_ROOT/node_modules/.bin:$PATH




#
# Download and setup the external javascript libraries
#

mkdir $EXT_SRC_ROOT
bower install


mkdir $EXT_SRC_ROOT/jquery/
cp -r $PROJ_ROOT/bower_components/jquery/dist/* $EXT_SRC_ROOT/jquery/


mkdir $EXT_SRC_ROOT/babel/
cp -r $PROJ_ROOT/bower_components/babel/* $EXT_SRC_ROOT/babel/


mkdir $EXT_SRC_ROOT/react/
cp -r $PROJ_ROOT/bower_components/react/* $EXT_SRC_ROOT/react/


mkdir $EXT_SRC_ROOT/react-bootstrap/
cp -r $PROJ_ROOT/bower_components/react-bootstrap/* $EXT_SRC_ROOT/react-bootstrap/


mkdir $EXT_SRC_ROOT/bootstrap/
cp -r $PROJ_ROOT/bower_components/bootstrap/dist/* $EXT_SRC_ROOT/bootstrap/


ls -l $EXT_SRC_ROOT/




echo -e "\n  Setup completed successfully. \n"

