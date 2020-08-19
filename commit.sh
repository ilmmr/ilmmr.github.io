#!/bin/bash

if [ "$1" == "" ]; then
  echo "Falta argumento"
  exit -1
fi

commitname=$1

#filename=$1
#extension="${filename##*.}"
#filename="${filename%.*}"

git add .
git commit -m "$commitname"


