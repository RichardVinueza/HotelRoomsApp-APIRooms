'use strict'
//Sirve para cargar una librería
var express =  require("express"); 

//Cargamos otra librería
var bodyParser = require("body-parser");

//Marcamos una ruta para llegar a un destino
var app = express();
app.use(bodyParser.urlencoded({extended:true}));

/* Dentro de una variable metemos una función
*  
*  req es lo que me pide el cliente
*
*   res es lo que le doy al cliente
*/
const showHelloMessage = (req, res) => { 
    console.log(req.body);
    res.send({
        message: 'hello',
        author: 'richard'
    });
};

const showRoomState = (req, res) => {
    console.log(req.body);
        res.send({
            room: '103',
            state: 'available'
    
        });
}

var ArrayListRooms = [
    {
        room: '101',
        price: '50€'
    },
    {
        room: '102',
        price: '60€'
    },
    {
        room: '103',
        price: '70€'
    },
    {
        room: '104',
        price: '80€'
    },
    {
        room: '105',
        price: '90€'
    },

];

var showListRooms = (req,res) => {
    console.log(req.body)
    res.send(ArrayListRooms);

}


app.get("/hello", showHelloMessage);
app.get("/103", showRoomState);
app.get("/listRooms", showListRooms);

app.get("/goodbye", (req, res) => {
    res.send({
        something: "bye"
    });

});

//Introducimos el comando para arrancar el servidor
const port = 40000;
app.listen(port, () => {
    console.log("Running on http://localhost:" + port );

});
