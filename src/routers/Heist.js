import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { getHeist } from "../actions/index";

const useStyles = makeStyles({
  table: {
    width: "100%",
    backgroundColor: "white",
  },
});

function Heist(props) {
  const heists = useSelector((state) => state.heists.heist);
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log(heists);

  useEffect(() => {
    dispatch(getHeist());
  }, []);

  return (
    <>
      <div className="members">
        <div className="container">
          <div className="row">
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="rigth">
                    <strong>Heist name</strong>
                  </TableCell>
                  <TableCell align="rigth">
                    <strong>Location</strong>
                  </TableCell>
                  <TableCell align="rigth">
                    <strong>Start time</strong>
                  </TableCell>
                  <TableCell align="rigth">
                    <strong>End time</strong>
                  </TableCell>
                  <TableCell align="rigth">
                    <strong>Skills</strong>
                  </TableCell>
                  <TableCell align="rigth"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {heists.map((heist) => (
                  <TableRow key={heist.heist_id}>
                    <TableCell align="center">{heist.name}</TableCell>
                    <TableCell align="center">{heist.location}</TableCell>
                    <TableCell align="center">
                      {moment(heist.startTime).format("LLLL")}
                    </TableCell>
                    <TableCell align="center">
                      {moment(heist.endTime).format("LLLL")}
                    </TableCell>
                    <TableCell align="center">
                      {heist.skills.split("]").map((m) => (
                        <li className="list-group-item">{m.split(",")}</li>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            );
          </div>
        </div>
      </div>
    </>
  );
}
export default Heist;