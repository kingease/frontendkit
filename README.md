frontendkit
===========

## installation

to install all the tools we need
```
$ npm install
```

to install all the client components we need
```
$ bower install
```

## the usage of test suite

the test suite uses

 1. grunt-contrib-jasmine

 1. template : grunt-template-jasmine-requirejs

the default src files lie in app/scripts/src

the specs files lie in app/scripts/specs

start the test sever by command
```
$ npm test
```
and browser the web : http://localhost:8000/_SpecRunner.html to see the test results.