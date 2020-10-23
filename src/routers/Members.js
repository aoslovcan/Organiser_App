import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchMembers } from '../actions/index';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function Members(props) {

    const members = useSelector(state => state.members.members);
    console.log(members);
    const classes = useStyles();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMembers());
    }, []);

    return (

        <>
            <div className="members">
                <div className="container">


                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Member name</TableCell>
                                    <TableCell align="right">gender</TableCell>
                                    <TableCell align="right">email</TableCell>
                                    <TableCell align="right">skills</TableCell>
                                    <TableCell align="right">main skill</TableCell>
                                    <TableCell align="right">status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {members.map((member) => (
                                    <TableRow key={member.member_id}>
                                        <TableCell component="th" scope="row">
                                            {member.name}
                                        </TableCell>
                                        <TableCell align="right">{member.gender}</TableCell>
                                        <TableCell align="right">{member.email}</TableCell>
                                <TableCell align="right">{member.skills.split(',').map(m => m.split(' ').map(n => <ul> <li>Name {n}</li></ul>))}</TableCell>;
                                        <TableCell align="right">{member.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
  );

        </div>
            </div>
        </>
    );
}
export default Members;
