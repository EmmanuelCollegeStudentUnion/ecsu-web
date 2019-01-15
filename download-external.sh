#! /bin/bash 
for i in $(cat .env); do
    export $i
done
bash ./scripts/download-dropbox.sh
bash ./scripts/download-uploadcare.sh