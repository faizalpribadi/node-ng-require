# node-ng-require
prototype for building large scale application architecture

### app-server
as backend service, in this case, using `Node.js` and then for database using NoSQL mongodb, requirement details: 

* node.js
* mongodb 

### app-client
as client view application in this case provide for handling so much service through service such as `REST` or `SOAP`
and another web service, if you have a much web service in backend server and you build the view as standalone package including backend service in the same package or directory its very bad.
requirement details:

* require.js
* angular.js

for example bad architecture, if you have to plan build large scale application

`1:1 ( 1 view + 1 service )`

```
|-----------------------------------------------------|
|______________CLIENT______________CLIENT_____________|
|                |                   |                |
|                |                   |                |
|                |                   |                |
|                |                   |                |
|         REST API SERVICE      SOAP SERVICE          |
|_____________________________________________________|
```


good schema architecture, provide seems like this:

`1:100 ( 1 view + 100 service)`

```
|-----------------------------------------------------|
|_______________________CLIENT________________________|
|                         |                           |
|                         |                           |
|                         |                           |
|                         |                           |
|_____________________________________________________|
|______________________SERVICE________________________|
|       |       |       |       |       |       |     |
|       |       |       |       |       |       |     |
|       |       |       |       |       |       |     |
|       1       2       3       4       5       6     |
|      PHP    JAVA    ERLANG  PYTHON  GOLANG  NODEJS  |
|_____________________________________________________|
```


install
=======

>>> Note: You are machine must installed Node.js and installed bower as global tool

* `npm -d -g install bower`

* `git clone https://github.com/faizalpribadi/node-ng-require.git`

* `cd node-ng-require/app-server && npm -d install`

* `cd node-ng-require/app-client && bower install`

