const fs = require("fs");
const url = require("url");
const http = require("http");

const queryString = require("querystring");

const server = http.createServer();

const database = [{
  firstname: "Michel",
  lastname: "Blanc",
  age: 59
}, {
  firstname: "Thierry",
  lastname: "Lhermite",
  age: 62
}, {
  firstname: "Chantal",
  lastname: "Lauby",
  age: 47
}];

const reply = function(request, response) {
  response.writeHead(response.statusCode, {
    "Content-Length": response.body.length,
    "Content-Type": response.mimeType,
    "Access-Control-Allow-Origin": "*"
  });

  response.write(response.body, function(){
    response.end();
  });
};

const reply404HTML = function(request, response){
  response.body = new Buffer("<h1>Erreur : Résultat non trouvé</h1>");
  response.statusCode = 404;
  response.mimeType = "text/html;charset=utf8";

  reply(request, response);
}

const reply404JSON = function(request, response){
  response.body = Buffer.from(JSON.stringify({
    status: "ERROR"
  }));
  response.statusCode = 404;
  response.mimeType = "application/json";

  reply(request, response);
}
server.on("request", function(request, response){
  const parsedUrl =  url.parse(request.url, true);
  if ( "/person" === parsedUrl.pathname ) {
    if ( "GET" === request.method ) {
      if ( parsedUrl.query && ! isNaN( parsedUrl.query.id ) ) {
        if (database[parsedUrl.query.id]) {
          const body = Buffer.from(JSON.stringify({
            status: "OK",
            data: database[parsedUrl.query.id]
          }));

          response.body = body;
          response.statusCode = 200;
          response.mimeType = "application/json";

          reply(request, response);
        } else {
          reply404JSON(request, response);
        }
      } else {
        reply404HTML(request, response);
      }
    }
  }
});

server.on("request", function(request, response){
  const parsedUrl =  url.parse(request.url, true);
  if ( "/person" === parsedUrl.pathname ) {
    if ( "POST" === request.method ) {
      let data = [];
      request.on("data", function(chunk){
        data.push(chunk);
      });
      request.on("end", function(){
        data = queryString.parse(Buffer.concat(data).toString());
        if (data.firstname && data.lastname && data.age) {
          database.push(data);

          const body = Buffer.from(JSON.stringify({
            status: "OK"
          }));

          response.body = body;
          response.statusCode = 200;
          response.mimeType = "application/json";

          reply(request, response);
        } else {
          reply404JSON(request, response);
        }
      });
    }
  }
});

server.on("request", function(request, response){
  const parsedUrl =  url.parse(request.url, true);
  if ( "/xhr" === parsedUrl.pathname ) {
    fs.readFile("../clients/xhr.html", function(error, data){
      if (error) {
        reply404HTML(request, response);
      } else {
        response.body = data;
        response.statusCode = 200;
        response.mimeType = "text/html;charset=utf8";

        reply(request, response);
      }
    });
  }
});

server.on("request", function(request, response){
  const parsedUrl =  url.parse(request.url, true);
  if ( "/fetch" === parsedUrl.pathname ) {
    fs.readFile("../clients/fetch.html", function(error, data){
      if (error) {
        reply404HTML(request, response);
      } else {
        response.body = data;
        response.statusCode = 200;
        response.mimeType = "text/html;charset=utf8";

        reply(request, response);
      }
    });
  }
});

server.listen(8080, function(){
  console.log("Serveur démarré sur le port 8080");
});