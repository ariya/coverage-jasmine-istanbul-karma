This repo contains an example setup for tracking code coverage of [Jasmine](https://jasmine.github.io/) tests via [Istanbul](http://gotwarlost.github.io/istanbul/) and [Karma](http://karma-runner.github.io/).

Run the following:

```
npm install
npm test
```

and then open the code coverage report under the subdirectory `coverage`.

The tests are executed using [PhantomJS](http://phantomjs.org). It is easy to add [other browsers](http://karma-runner.github.io/0.10/config/browsers.html) as well

Using Grunt? Apply [the tweak](https://github.com/ariya/coverage-jasmine-istanbul-karma/tree/grunt) and now the test becomes a task.


