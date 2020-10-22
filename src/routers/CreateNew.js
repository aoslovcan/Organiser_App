import React, { useState } from "react";
import "./style-route.css";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from "react-redux";
import {insertMember} from '../actions/index';

function CreateNew() {
    const [member, setMember] = useState({
        name: "",
        sex: "",
        email: "",
        mainSkill: "mainSkill",
        status: ""

    });
    const { name, sex, email, mainSkill, status } = member;
    const [skills, setSkills] = useState([
        { name: "", level: "" },
    ]);
    const changeHandler = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };
    const dispatch = useDispatch();
    //Adding skills
    const handleSkills = (e, index) => {
        const { name, value } = e.target;
        const list = [...skills];
        list[index][name] = value;
        setSkills(list);
    };

    const handleAddClick = () => {
        setSkills([...skills, { name: "", level: "" }]);
    };

    const handleRemoveClick = (index) => {
        const list = [...skills];
        list.splice(index, 1);
        setSkills(list);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name : name,
           
            sex: sex,
            email: email,
            skills : skills,
            mainSkill: mainSkill,
            status: status

        }

        console.log(data);
        dispatch(insertMember(data));

    };


    return (
        <div className="membersCreate">
            <div className="container">

                <form
                    className="product form  col-sm-8 offset-sm-0 offset-md-2"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
                            Potential heist member
                         </h3>
                    </div>
                    <div className="form-group row">
                        <input
                            className="form-control col-sm-4 offset-sm-0 offset-md-1"
                            id="name"
                            placeholder="Jack"
                            type="text"
                            name="name"
                            value={name}
                            onChange={changeHandler}
                        />
                        <select
                            className="form-control col-sm-4 offset-sm-0 offset-md-2 "
                            onChange={changeHandler}
                            name="sex"
                            value={sex}
                            id="sex"
                        >
                            <option selected>sex</option>
                            <option value="m">m</option>
                            <option value="f">f</option>

                        </select>
                    </div>
                    <div className="form-group row">
                        <input
                            className="form-control col-sm-10 offset-sm-0 offset-md-1"
                            id="email"
                            name="email"
                            value={email}
                            onChange={changeHandler}
                            placeholder="example@gmail.com"
                            type="email"
                        />
                    </div>
                    <div className="form-group row">
                        <label
                            style={{ textAlign: "center" }}
                          
                            className="col-form-label col-sm-10 offset-sm-0 offset-md-1"
                        >
                            <h5>Skills</h5>
                        </label>
                        <div className="form-group row offset-sm-0 offset-md-2">
                            {skills.map((x, i) => {
                                return (
                                    <>
                                        <input
                                            className="form-control col-sm-5"
                                            name="name"
                                            placeholder="combat"
                                            value={x.name}
                                            onChange={(e) => handleSkills(e, i)}
                                            style={{ margin: "1px 1px 0 1px" }}
                                        />
                                        <input
                                            className="form-control col-sm-3"
                                            name="level"
                                            placeholder="***"
                                            value={x.level}
                                            onChange={(e) => handleSkills(e, i)}
                                            style={{ margin: "1px 1px 0 1px" }}
                                        />

                                        {skills.length - 1 === i + 1 && (
                                            <button
                                                className="btn btn-secondary"
                                                onClick={handleRemoveClick}
                                            >
                                               <DeleteIcon/>
                                            </button>
                                        )}
                                        {skills.length - 1 === i && (
                                            <button
                                                className="btn btn-secondary "
                                                style={{ margin: "0 2px 0 2px" }}
                                                onClick={handleAddClick}
                                            >
                                                <AddIcon/>
                                            </button>
                                        )}
                                    </>
                                );
                            })}
                        </div>
                    </div>

                    <div className="form-group row ">
                        <select
                            className="form-control col-sm-4 offset-sm-0 offset-md-1 "
                            onChange={changeHandler}
                            name="mainSkill"
                            value={mainSkill}
                            id="mainSkill"

                        >
                          
                            {
                                <>
                                <option selected>main skill</option>
                                {
                                     skills.map(m => <option value={m.name}>{m.name}</option>) 
                                   
                                }
                             
                            
                                </>

                            }



                        </select>
                  
                        
                        <select
                            className="form-control col-sm-4 offset-sm-0 offset-md-2 "
                            onChange={changeHandler}
                            name="status"
                            value={status}
                            id="status"
                        >
                            <option selected>status</option>
                            <option value="available">available</option>
                            <option value="expired">expired</option>
                            <option value="incarcerated">incarcerated</option>
                            <option value="retired">retired</option>

                        </select>
                    </div>
                    <input
                        id="btn-create"
                        className="form-control col-md-4 offset-sm-0 offset-md-4"
                        type="submit"
                        value="Add member"
                    />
                </form>
            </div>
        </div>
    );

}
export default CreateNew;


