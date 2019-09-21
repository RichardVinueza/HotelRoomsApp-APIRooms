'use strict'
//Sirve para cargar una librería
var express = require("express");

//Cargamos otra librería
var bodyParser = require("body-parser");

//Marcamos una ruta para llegar a un destino
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

/* Dentro de una variable metemos una función
*  
*  req es lo que me pide el cliente
*
*   res es lo que le doy al cliente
*/

//Array de objetos Json con todas las habitaciones y sus atributos.
var arrayListRooms = [
    {
        "room": "100",
        "price": "120",
        "state": "unavailable"
    },
    {
        "room": "101",
        "price": "60",
        "state": "unavailable"
    },
    {
        "room": "102",
        "price": "70",
        "state": "available"
    },
    {
        "room": "103",
        "price": "80",
        "state": "available"
    },
    {
        "room": "104",
        "price": "50",
        "state": "unavailable"
    }

];

//Se muestra cuando el usuario es incorrecto
const showIncorrectMessage = (req, res) => {
    console.log(req.body);
    res.send({
        error: 'Try again'
    });
};

app.get("/error", showIncorrectMessage);

//Se muestra cuando el usuario es correcto
const showCorrectMessage= (req, res) => {
    console.log(req.body);
    res.send({
        error: 'Correct'
    });
};

app.get("/ok", showCorrectMessage);


//Muestra el listado de todas las habitaciones
var showListRooms = (req, res) => {
    console.log(req.body)
    res.send(arrayListRooms);
};
app.get("/listRooms", showListRooms);



//Ver solo las habitaciones que estan disponibles
app.get("/availableRooms", (req, res) => {
    console.log(req.body)
    var arrayAux = new Array();
    for (var i=0; i < arrayListRooms.length; i++){
        if (arrayListRooms[i].state == 'available') {
            arrayAux.push(arrayListRooms[i]);
        }
    }
    res.send(arrayAux);
});

//Mostrar la habitación más barata y disponible
app.get("/cheaperRoom", (req, res) => {
    console.log(req.body);
    var bestPrice = 0;
    for (var j = 0; j < arrayListRooms.length; j++){
        if( arrayListRooms[j].price < arrayListRooms[bestPrice].price){
            bestPrice = j;
        }
    } 
    res.send(arrayListRooms[bestPrice]);
});


//Introducimos el comando para arrancar el servidor
const port = 40000;
app.listen(port, () => {
    console.log("Running on http://localhost:" + port);

});
