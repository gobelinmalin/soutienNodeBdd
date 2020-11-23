const express = require("express");
const router = express.Router();
const connection = require("../config");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM school", (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

router.get("/:id/users", (req, res) => {
  const {id} = req.params;
  connection.query(
    "SELECT * FROM user WHERE id_school = ?",
    [id],
    (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/:id/users", (req, res) => {
  const {id} = req.params;
  connection.query(
    "SELECT * FROM user WHERE id_school = ?",
    [id],
    (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/:idSchool/students/:idStudent", (req, res) => {
  const {idSchool, idStudent} = req.params;
  const filterSchool = req.params.idSchool;
  connection.query(
    "SELECT st.name as student_name, sc.name as school_name FROM school_student as ss JOIN student as st ON ss.id_student = ? JOIN school as sc ON ss.id_school = ? WHERE sc.id = ?",
    [idStudent, idSchool, filterSchool],
    (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
