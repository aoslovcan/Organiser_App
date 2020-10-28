import React, { useState } from "react";
import "./style-route.css";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector, useDispatch } from "react-redux";
import { insertHeist } from "../actions/index";

function NewHeist() {
  const [heist, setHeist] = useState({
    name: "",
    location: "",
    startTime: "",
    endTime: "mainSkill",
  });
  const { name, location, startTime, endTime } = heist;
  const [skills, setSkills] = useState([{ name: "", level: "", members: "" }]);
  const changeHandler = (e) => {
    setHeist({ ...heist, [e.target.name]: e.target.value });
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
      name: name,

      location: location,
      startTime: startTime,
      endTime: endTime,
      skills: skills.map(
        (m) =>
          "Name: " +
          m.name +
          "," +
          " Level: " +
          m.level +
          "," +
          " Members: " +
          m.members +
          "\n"
      ),
    };

    console.log(data);

    dispatch(insertHeist(data));
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
              Add Heist
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
            <input
              className="form-control col-sm-4 offset-sm-0 offset-md-2"
              id="location"
              name="location"
              value={location}
              onChange={changeHandler}
              placeholder="Spain"
              type="text"
            />
          </div>

          <div className="form-group row">
            <input
              className="form-control col-sm-4 offset-sm-0 offset-md-1"
              id="startTime"
              name="startTime"
              value={startTime}
              onChange={changeHandler}
              placeholder=""
              type="datetime-local"
            />
            <input
              className="form-control col-sm-4 offset-sm-0 offset-md-2"
              id="endTime"
              name="endTime"
              value={endTime}
              onChange={changeHandler}
              placeholder=""
              type="datetime-local"
            />
          </div>
          <div className="form-group row">
            <label
              style={{ textAlign: "center" }}
              className="col-form-label col-sm-10 offset-sm-0 offset-md-1"
            >
              <h5>Skills</h5>
            </label>
            <div className="form-group row offset-sm-0 offset-md-1">
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
                    <input
                      className="form-control col-sm-2"
                      name="members"
                      placeholder="2"
                      value={x.members}
                      onChange={(e) => handleSkills(e, i)}
                      style={{ margin: "1px 1px 0 1px" }}
                    />

                    {skills.length - 1 === i + 1 && (
                      <button
                        className="btn btn-secondary"
                        onClick={handleRemoveClick}
                      >
                        <DeleteIcon />
                      </button>
                    )}
                    {skills.length - 1 === i && (
                      <button
                        className="btn btn-secondary "
                        style={{ margin: "0 2px 0 2px" }}
                        onClick={handleAddClick}
                      >
                        <AddIcon />
                      </button>
                    )}
                  </>
                );
              })}
            </div>
          </div>

          <input
            id="btn-create"
            className="form-control col-md-4 offset-sm-0 offset-md-4"
            type="submit"
            value="Add heist"
          />
        </form>
      </div>
    </div>
  );
}
export default NewHeist;