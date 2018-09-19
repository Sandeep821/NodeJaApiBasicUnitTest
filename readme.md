# NodeJs API Basic Unit Test project to test how to mock external modules
## I will use mocha and supertest to execute http requests against the server.

## Steps to install:
- git clone <repo>
- cd NodeJsApiBasicUnitTest
- npm install
- npm install mocha -g (to install mocha globally)
- to start the server '$ node server'
- to run test 'mocha -R spec server.spec.js'

## best practice is Create and destroy an Express.js server in each unit test.