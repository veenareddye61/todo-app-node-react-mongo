const express = require("express");
const app = express();
const dbConfig = require('./config/db.config');
const  mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoute = require('./routes/todo.routes');
const router = express.Router();
const cors = require("cors")
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then( () => {
    console.log("successfully connected to the db");
}).catch( err => {
    console.log(err)
    process.exit();
})
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/api/todolist", todoRoute);
app.get('/', (req, res) => {
    res.json({ "mesaage": "welcome to todolist" });
})
app.listen(5000, function () {
    console.log("Server is listening at port : " + 5000);
});