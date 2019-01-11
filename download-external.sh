#!/bin/bash 
set -eo pipefail
cd static/external
export URLS=`grep -ohr "https://ucarecdn.com/\([A-Za-z0-9]\|-\|/\)*" ../../content`
for URL in `echo $URLS |tr " " "\n"| uniq`
do
    echo $URL
    curl $URL -o `echo -n $URL | md5sum | awk '{print $1".jpg"}'`
done