logo : deploy

deploy :
	./node_modules/.bin/rimraf lib
	./node_modules/.bin/babel src --copy-files --source-maps --extensions .es6,.es,.jsx --out-dir lib

publish :
	npm publish
