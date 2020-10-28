import React, { useState, useEffect } from "react";
import "./style-route.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchSkillsByID, updateSkill } from "../actions/index";

function Update() {
  const [skills, setSkill] = useState({
    name: "",
    level: "",
  });
  const { name, level } = skills;
  const skill = useSelector((state) => state.skills.skills);
  console.log(skill);
  const changeHandler = (e) => {
    setSkill({ ...skills, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  //Adding skills
  const id = window.location.href.split("/")[4];
  console.log(id);

  useEffect(() => {
    dispatch(fetchSkillsByID(id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      name: name,
      level: level,
    };

    console.log(data);
    dispatch(updateSkill(data));
    window.location.href = "/";
  };

  return (
    <div className="skillUpdate">
      <div className="container">
        <div className="row">
          {skill.map((m) => (
            <form
              className="product form  col-sm-12 offset-sm-0 offset-md-2"
              onSubmit={handleSubmit}
            >
              <div className="form-group row">
                <input
                  className="form-control col-sm-4 offset-sm-0 offset-md-1"
                  id="name"
                  placeholder={"Name: " + m.name}
                  type="text"
                  name="name"
                  value={name}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group row">
                <input
                  className="form-control col-sm-4 offset-sm-0 offset-md-1"
                  id="name"
                  placeholder={"Level: " + m.level}
                  type="text"
                  name="level"
                  value={level}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group row">
                <input
                  id="btn-create"
                  className="form-control col-md-2 offset-sm-0 offset-md-2 btn btn-primary"
                  type="submit"
                  value="UPDATE"
                />
              </div>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Update;
