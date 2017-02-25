
let express = require ('express');
let mongoose = require ('mongoose');
let bodyParser = require ('body-parser');
let app = express();
let PORT = process.env.PORT || 3000;

let users  = require('./routes/users');//module jo ham ny export kia ha 


mongoose.connect('mongodb://afzaal:afzaal@ds161039.mlab.com:61039/mong');// monogo db connection
let db = mongoose.connection;

//express middle ware
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//file directory of index.html
app.use(express.static(__dirname +'/public'));
//using the module exports
app.use('/user', users);


app.listen(PORT);
console.log('listening  ' +   PORT);