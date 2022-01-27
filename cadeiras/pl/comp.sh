#!/bin/bash

ls -lah > nothtml/fich.txt
cd nothtml/
./of < fich.txt > output.txt
./adhtml < template.html > ../pl.html
cd ..

