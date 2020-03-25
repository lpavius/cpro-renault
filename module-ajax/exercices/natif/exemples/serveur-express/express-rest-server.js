/**
 * On installe le module express
 * Voir : https://expressjs.com/
 * npm i express
 */
const express = require("express");
/**
 * Pour autoriser les requêtes depuis n'importe quelle origine
 * Voir : https://expressjs.com/en/resources/middleware/cors.html
 * npm i cors
 */
const cors = require("cors");
/**
 * Pour traiter le corps des requêtes
 * Voir : https://expressjs.com/en/resources/middleware/body-parser.html
 * npm i body-parser
 */
const bodyParser = require("body-parser");
/**
 * On installe le module pg (qui contient pg-native, pg-types, etc...)
 * Voir : https://node-postgres.com/
 * npm i pg
 */
const { Pool } = require('pg');

// Création du client postgreSQL
const pool = new Pool({
  connectionString: 'postgresql://postgres:123456@localhost:5432/ajax_module_crc',
});

const app = express();

// Ajoute Access-Control-Allow-Origin: * à toutes les en-tête de réponse HTTP
app.use(cors());
// Ajoute la gestion des contenus de requête HTTP au format JSON
app.use(bodyParser.json())

app.get("/countries", function(request, response){
  pool.connect()
    .then(() => {
      return pool.query(
        "SELECT * FROM countries"
      );
    }).then((results) => {
      response.json({
        "status": "OK",
        "data": {
          "countries": results.rows
        }
      });
    })
    .catch((error) => {
      response.json({
        status: "Error",
        message : error.message
      });
    });
});

app.post("/country", function(request, response){
   if ( request.body && request.body.name ) {
    pool.connect()
    .then(() => {
      return pool.query(
        "INSERT INTO countries(name) VALUES($1) RETURNING *",
        [
          request.body.name
        ]
      );
    }).then((results) => {
      response.json({
        "status": "OK",
        "data": {
          "country": results.rows
        }
      });
    })
    .catch((error) => {
      response.json({
        status: "Error",
        message : error.message
      });
    });
   } else {
    response.json({
      status: "Error",
      message: "Please provide a valid country name"
    });
   }
});

app.get("/regions/:country", function(request, response){
  if (! isNaN(request.params.country)) {
    const countryId = parseFloat(request.params.country);

    pool.connect()
    .then(() => {
      return pool.query(
        "SELECT * FROM regions WHERE country_id=$1",
        [
          countryId
        ]
      );
    }).then((results) => {
      response.json({
        "status": "OK",
        "data": {
          "regions": results.rows
        }
      });
    })
    .catch((error) => {
      response.json({
        status: "Error",
        message : error.message
      });
    });
  } else {
    response.json({
      status: "Error",
      message: "Please provide a valid country identifier"
    });
  }
});

app.post("/region", function(request, response){
  if ( request.body &&
       request.body.name &&
       request.body.country_id
     ) {
    pool.connect()
    .then(() => {
      return pool.query(
        "INSERT INTO regions(name,country_id) VALUES($1,$2) RETURNING *",
        [
          request.body.name,
          request.body.country_id,
        ]
      );
    }).then((results) => {
      response.json({
       "status": "OK",
       "data": {
         "region": results.rows
       }
      });
    })
    .catch((error) => {
      response.json({
        status: "Error",
        message : error.message
      });
    });
  } else {
    response.json({
      status: "Error",
      message: "Please provide a valid region name or country identifier"
    });
  }
});

app.get("/cities/:region", function(request, response){
  if (! isNaN(request.params.region)) {
    const regionId = parseFloat(request.params.region);

    pool.connect()
    .then(() => {
      return pool.query(
        "SELECT * FROM cities WHERE region_id=$1",
        [
          regionId
        ]
      );
    }).then((results) => {
      response.json({
        "status": "OK",
        "data": {
          "regions": results.rows
        }
      });
    })
    .catch((error) => {
      response.json({
        status: "Error",
        message : error.message
      });
    });
  } else {
    response.json({
      status: "Error",
      message: "Please provide a valid country identifier and a valid region identifier"
    });
  }
});

app.post("/city", function(request, response){
  if ( request.body &&
       request.body.name &&
       request.body.region_id
     ) {
    pool.connect()
    .then(() => {
      return pool.query(
        "INSERT INTO cities(name,region_id) VALUES($1,$2) RETURNING *",
        [
          request.body.name,
          request.body.region_id,
        ]
      );
    }).then((results) => {
      response.json({
       "status": "OK",
       "data": {
         "city": results.rows
       }
      });
    })
    .catch((error) => {
      response.json({
        status: "Error",
        message : error.message
      });
    });
  } else {
    response.json({
      status: "Error",
      message: "Please provide a valid city name or region identifier"
    });
  }
});

app.listen(1337, () => {
  console.log("Express server started on 1337");
});