const url = require("url");
const http = require("http");
const queryString = require("querystring");

const server = http.createServer();

const database = [{
  "firstname": "Pierre",
  "lastname": "Afeu",
  "age": 35
},{
  "firstname": "Paul",
  "lastname": "Tron",
  "age": 78
},{
  "firstname": "Jacques",
  "lastname": "Oeil",
  "age": 18
}];

const reply = function(request, response) {
  response.writeHead(response.statusCode, {
    "Content-Length": response.body.length,
    "Content-Type": response.mimeType,
    "Access-Control-Allow-Origin": "*"
  });

  response.write(response.body, function(){
    response.end();
  })
};

const reply404 = function(request, response) {
  response.statusCode = 404;
  response.mimeType = "text/html; charset=utf8";
  response.body = Buffer.from(`
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>404 Error</title>
      </head>
      <body>
        <h1>404 Error</h1>
        <p>Page not found.</p>
      </body>
    </html>
  `);
  reply(request, response);
}


server.on("request", function(request, response){
  const parsed = url.parse(request.url, true);
  if ( "/person" === parsed.pathname && "GET" === request.method ) {
    response.statusCode = 200;
    response.mimeType = "application/json";
    let person;
    if ( parsed.query && ! isNaN(parsed.query.id) ) {
      if (database[(parsed.query.id)]) {
        person = database[parsed.query.id];
      }
    }
    if (person) {
      response.body = Buffer.from(JSON.stringify({
        "status": "OK",
        "person": person,
      }));
    } else {
      response.body = Buffer.from(JSON.stringify({
        "status": "Error",
      }));
    }
    reply(request, response);
  }
});

server.on("request", function(request, response){
  const parsed = url.parse(request.url, true);
  if ( "/person" === parsed.pathname && "POST" === request.method ) {
    let data = [];
    request.on("data", function(chunk){
      data.push(chunk);
    });
    request.on("end", function(){
      data = Buffer.concat(data).toString();
      const query = queryString.parse(data);
      console.log(query);
      response.statusCode = 200;
      response.mimeType = "application/json";
      if ( query.firstname &&
           query.lastname &&
           query.age
      ) {
        database.push(query);
        response.body = Buffer.from(JSON.stringify({
          "status": "Saved",
        }));
      } else {
        response.body = Buffer.from(JSON.stringify({
          "status": "Error",
        }));
      }
      reply(request, response);
    });
  }
});

server.on("request", function(request, response) {
  const parsed = url.parse(request.url, true);
  if ( "/person" !== parsed.pathname ) {
    reply404(request, response);
  }
});



server.listen(8080, function(){
  console.log("Listening on 8080");
})