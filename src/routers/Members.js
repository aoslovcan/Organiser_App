import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchMembers } from "../actions/index";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { fetchSkills } from "../actions/index";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    width: "100%",
    backgroundColor: "white",
  },
});

function Members(props) {
  const members = useSelector((state) => state.members.members);
  const skills = useSelector((state) => state.skills.skills);

  const [open, setOpen] = useState(false);
  console.log(members);
  console.log(skills);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMembers());
  }, []);

  const getData = (x) => {
    console.log(x);

    dispatch(fetchSkills(x));

    handleOpen();
  };

  const getIdSkill = (x) => {
    console.log(x);

    console.log(x);
  };

  const body = (
    <div className="skillModal">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="rigth">
              <strong>Name</strong>
            </TableCell>
            <TableCell align="rigth">
              <strong>Level</strong>
            </TableCell>
            <TableCell align="rigth">
              <strong>Main skill</strong>
            </TableCell>
            <TableCell align="rigth">
              <strong></strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {skills.map((skill) => (
            <TableRow key={skill.skill_id}>
              <TableCell align="rigth">{skill.name}</TableCell>
              <TableCell align="rigth">{skill.level}</TableCell>
              <TableCell align="rigth">{skill.main_skill}</TableCell>
              <Link to={`/update/${skill.skill_id}`}>
                {" "}
                <button className="btn btn-primary">Update</button>
              </Link>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <>
      <div className="members">
        <div className="container">
          <div className="row">
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="rigth">
                    <strong>Member name</strong>
                  </TableCell>
                  <TableCell align="rigth">
                    <strong>Gender</strong>
                  </TableCell>
                  <TableCell align="rigth">
                    <strong>Email</strong>
                  </TableCell>
                  <TableCell align="rigth">
                    <strong>Status</strong>
                  </TableCell>
                  <TableCell align="rigth"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.member_id}>
                    <TableCell align="center">{member.member_name}</TableCell>
                    <TableCell align="center">{member.gender}</TableCell>
                    <TableCell align="center">{member.email}</TableCell>
                    <TableCell align="center">{member.status}</TableCell>
                    <TableCell align="center">
                      <button
                        className="btn btn-primary"
                        onClick={() => getData(member.member_id)}
                      >
                        Skills
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            );
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
export default Members;