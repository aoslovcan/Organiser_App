
let express = require('express');
let request = require('request');
var path = require('path');
let bodyParser = require('body-parser');
let cors = require('cors');
let { json } = require('express');
const mysql = require('mysql');
let fs = require('fs');

//Server create
const server = express();

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'frontend_dev'
})

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected');
})

server.listen('3001', () => {
  console.log('Server started on port 3001');
})

//Include json 

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));


server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// aprove connection to server
server.use(cors());

server.get('/members', function (req, res) {

  db.query('select * from members', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//Get data from server

server.post('/insert', function (req, res) {
  data = req.body

  console.log(data.skills);

  const dataS = data.skills.join(',');

 let sql = "INSERT INTO members (member_name, gender, email, skills, main_skills, status)" +
    "VALUES('" + data.name + "','" + data.sex + "','" + data.email + "','" + dataS + "','" + data.mainSkill+ "','" + data.status +"')";

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ msg: "Uspješno uneseno" });

  });
})



server.get('/recipes/:category', function (req, res) {

  data = req.body;
  console.log('Request URL:', req.originalUrl);
  console.log('Request URL:', req.params.category);


   db.query("select * from recipes WHERE category =  '" + req.params.category + "'", function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
    console.log('Uspješno');
  });
});
