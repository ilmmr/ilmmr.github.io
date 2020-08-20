#!/bin/bash

ls -lah > notforgit/fich.txt
cd notforgit/
./of < fich.txt > output.txt
./adhtml < template.html > ../pl.html
cd ..
git add .
git commit -m "plAlterado"

