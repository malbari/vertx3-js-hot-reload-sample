module.exports = function path2(routingContext) {
    var ver = "v01";
    var response = routingContext.response();
    console.log("inside: path2 with message " + ver);
    response.putHeader("content-type", "text/plain");
    response.end("route: path2 with message " + ver);
}
