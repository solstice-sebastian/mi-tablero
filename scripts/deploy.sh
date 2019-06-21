PS4='$LINENO: '
set -x
mkdir tmp
cp -R dist tmp/
cp scripts/server.js tmp/
cp Procfile tmp/
cp package.json tmp/
cp yarn.lock tmp/
cd tmp
git init
git remote add dokku dokku@138.197.199.22:mi-tablero
git add .
git commit -am "releasing..."
git push dokku master -f
cd ..
# rm -rf tmp/
set +x