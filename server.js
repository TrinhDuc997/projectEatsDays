//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express(); 

// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
 var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initiallising connection string
var dbConfig = {
    server:'localhost',
    user: 'sa',
    password: '123',
    database: 'QlyBuaAn' 
};

//Function to connect to database and execute query
var  executeQuery = function(res, query){     
    var sql = require('mssql');
    var config = {
        user: 'sa',
        password: '123',
        server: 'localhost', 
        database: 'QlyBuaAn' 
    }
    sql.connect(config,function(err){
        if(err) console.log(err)
        var request = new sql.Request()
        request.query(query,function(err,recordset){
            if(err) console.log(err)
            res.send(recordset)
        });
    });             
}
//GET API
app.get("/api", function(req , res){
    console.log("check req in getAPI:",req.query)
    var query = "select * from LoaiMonAn";
    executeQuery (res, query);
});
app.post("/login", function(req , res){
    const reqData = req.body.data
    var query = `select * from NguoiDung where Taikhoan = '${reqData.email}' and Matkhau = '${reqData.pass}' `;
    executeQuery (res, query);
});