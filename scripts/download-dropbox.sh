#! /bin/bash 
set -eo pipefail
curl -X POST https://content.dropboxapi.com/2/files/download_zip \
    --header "Authorization: Bearer $DROPBOX_ACCESS_TOKEN" \
    --header 'Dropbox-API-Arg: {"path": "/downloads"}' \
    -o downloads.zip
unzip -oLL ./downloads -d ./static/
rm downloads.zip -f