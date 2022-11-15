yarn build &&
git checkout gh-pages &&
rm -rf src *.html *.js *.css *.png &&
move dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'update' &&
git push -u origin gh-pages &&
git checkout - 
