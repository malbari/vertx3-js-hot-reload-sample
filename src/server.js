// vertx instantiation
var Router = require("vertx-web-js/router");
var server = vertx.createHttpServer();
var router = Router.router(vertx);

// path declaration
var path1 = require("./path1");
router.route("/path1/").handler(path1);

var path2 = require("./path2");
router.route("/path2/").handler(path2);

// starts vertx server
server.requestHandler(router.accept).listen(8080);