SHELL := /bin/bash

install:
	npm install -g @angular/cli; ng version
	npm install -g angular-http-server
	npm install

run:
	ng serve -c local --open

build:
	ng build
	cd dist/webapp; angular-http-server -p 4201

test:
	ng test --browsers ChromeHeadless --no-watch
