let express = require("express");
let request = require("request");
var path = require("path");
let bodyParser = require("body-parser");
let cors = require("cors");
let { json } = require("express");
const mysql = require("mysql");
let fs = require("fs");

//Server create
const server = express();

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "frontend_dev",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected");
});

server.listen("3001", () => {
  console.log("Server started on port 3001");
});

//Include json

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// aprove connection to server
server.use(cors());

//Get data from server
server.get("/members", function (req, res) {
  let sql = "SELECT * from members";
  db.query(sql, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

server.post("/insert", function (req, res) {
  data = req.body;

  skillName = data.skills;

  //console.log(skillName.map((m) => m.name + " " + m.level));

  let sql =
    "INSERT INTO members (member_name, gender, email, status)" +
    "VALUES('" +
    data.name +
    "','" +
    data.sex +
    "','" +
    data.email +
    "','" +
    data.status +
    "')";

  db.query(sql, function (err, result) {
    if (err) throw err;
    const id = result.insertId;
    //console.log(id);
    res.json({ msg: "Uspješno uneseno" });
    let sqlTwo;

    sqlTwo = "INSERT INTO skills (name, level, member_id, main_skill) VALUES ?";

    db.query(
      sqlTwo,
      [skillName.map((item) => [item.name, item.level, id, data.mainSkill])],
      function (err, res) {
        if (err) throw err;
      }
    );
  });
});

//skills

server.get("/skills/:id", function (req, res) {
  let sql = "SELECT * from skills where member_id = " + req.params.id + "";
  db.query(sql, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

server.get("/skills/skill/:skillId", function (req, res) {
  data = req.body;

  db.query(
    "select * from skills WHERE skill_id =  '" + req.params.skillId + "'",
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

server.post("/update", function (req, res) {
  data = req.body;

  let sql =
    "update skills SET name='" +
    data.name +
    "', level='" +
    data.level +
    "' WHERE skill_id = '" +
    data.id +
    "'";

  db.query(sql, function (err, result) {
    if (err) throw err;
    const id = result.insertId;
    console.log(id);
    res.json({ msg: "Uspješno uneseno" });
  });
});

//heist
server.get("/heist", function (req, res) {
  let sql = "SELECT * from heist";
  db.query(sql, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

server.post("/insertHeist", function (req, res) {
  data = req.body;

  let sql =
    "INSERT into heist(name, location, startTime, endTime, skills) " +
    "VALUES('" +
    data.name +
    "','" +
    data.location +
    "','" +
    data.startTime +
    "','" +
    data.endTime +
    "','" +
    data.skills +
    "')";

  db.query(sql, function (err, result) {
    if (err) throw err;

    res.json({ msg: "Uspješno uneseno" });
  });
});