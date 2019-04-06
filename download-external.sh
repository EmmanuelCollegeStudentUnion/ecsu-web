#! /bin/bash 
for i in $(cat .env); do
    export $i
done
bash ./scripts/download-dropbox.sh