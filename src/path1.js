module.exports = function path1(routingContext) {
    var ver = "v02";
    var response = routingContext.response();
    console.log("inside: path1 with version " + ver);
    response.putHeader("content-type", "text/plain");
    response.end("route: path1 with version " + ver);
}

