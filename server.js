const express = require("express");
const app = express();

app.use(express.json());

//Task 1
app.get('/hello', function(req,res) {
    res.json({msg: "Hello world"})
});

//Task 2
app.get('/echo/:id', function(req,res) {
    res.json({id: req.params.id})
});

//Task3


app.post("/sum", function(req, res) {
    const numbers = req.body.numbers;

    let sum = 0;
    for (let i=0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    res.json({sum: sum});
})

//Task 4
app.use('/',express.static(__dirname + '/task4'));


app.listen(3000, function () {

});

/*const http = require("http");

console.log("Server running... fully!")

http.createServer(function(req,res) {
    console.log(req);
    res.write("Hello World!!");
    res.end();
    console.log("Browser reached us!")
}).listen(3000);*/
