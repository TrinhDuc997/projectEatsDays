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
//GET mon an
app.get("/getLoaiMonAn", function(req , res){
    var query = "select * from LoaiMonAn";
    executeQuery (res, query);
});
// get take dish by category
app.get("/dishByCategory",function(req,res){
    var query = `select * from monan where maloai = '${req.query.data}'`;
    executeQuery (res, query);
});
//login
app.post("/login", function(req , res){
    const reqData = req.body.data
    var query = `select * from NguoiDung where Taikhoan = '${reqData.email}' and Matkhau = '${reqData.pass}' `;
    executeQuery (res, query);
});
// get good food every day
app.get("/goodFoodDays", function(req , res){
    var query = "select * from monan";
    executeQuery (res, query);
});
//creat new meal
app.get("/newMeal", function(req , res){
    var query = `exec BuaSangTheoNgay
                exec BuaTruaTheoNgay
                exec BuaToiTheoNgay`;
    executeQuery (res, query);
});
//get dish suggestions
app.get("/getDishSuggestions", function(req , res){
    var query = `select * from ThongTinBuaAn 
                    where ngay = (SELECT CONVERT(VARCHAR(10), getdate(), 111))`;
    executeQuery (res, query);
});
//get dish by session
app.get("/getDishSession", function(req , res){
    var query = `select * 
                    from ThongTinBuaAn ,MonAn 
                        where ThongTinBuaAn.MaMonAn = MonAn.MaMonAn and ngay = (SELECT CONVERT(VARCHAR(10), getdate(), 111))`;
    executeQuery (res, query);
});