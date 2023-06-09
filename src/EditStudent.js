import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { crtContext } from "./App";

export function EditStudent() {
  const [students, setStudents] = useContext(crtContext);
  const { id } = useParams();
  var navigate = useNavigate();
  var data = students[id];
  let [name, setname] = useState(data.name);
  let [age, setage] = useState(data.age);
  let [address, setAddress] = useState(data.address);
  let [Course, setCourse] = useState(data.Course);
  let [Mentors, setMentor] = useState(data.Mentors);
  let [classtaking, setClasstaking] = useState(data.classtaking);
  let [Id, Setid] = useState(data.id);
  const EditData = {
    name,
    age,
    address,
    Course,
    Mentors,
    classtaking,
    id: Id,
  };
  const onChangeValue = (e) => {
    setCourse(e.target.value);
  };
  const editdetails = () => {
    var index = parseInt(id);
    setStudents([
      ...students.slice(0, index),
      EditData,
      ...students.slice(index + 1),
    ]);
    navigate(`/students`);
  };
  return (
    <form className="formdata">
      <b>{`EDIT DETAILS OF ${data.name}`}</b>
      <br></br>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">COURSE</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={onChangeValue}
        >
          <FormControlLabel
            value="Full Stack Development"
            control={<Radio />}
            label="Full Stack Development"
          />
          <FormControlLabel
            value="Web Development"
            control={<Radio />}
            label="Web Development"
          />
        </RadioGroup>
      </FormControl>
      <br></br>
      <Button
        onClick={editdetails}
        variant="contained"
        className="btnclass btn btn-primary"
      >
        Submit
      </Button>
      <br></br>
      <label>NAME: {data.name} </label>
      <br></br>
      <label>Course: {data.Course} </label>
    </form>
  );
}
