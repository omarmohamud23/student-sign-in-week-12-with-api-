#!/usr/bin/env sh 

set -e 

npm run build 

cd dist 

git init
git add -A 
git commit -m 'deploy'

git push -f https://github.com/omarmohamud23/student_sign_in_with_Components master:gh-pages

cd -