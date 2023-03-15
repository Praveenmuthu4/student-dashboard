import { useContext } from "react";
import {
  useParams,
  useNavigate
} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import { crtContext } from "./App";

export function MentorDetails() {
  const [students, setStudents, mentors, setMentor] = useContext(crtContext);
  const { id } = useParams();
  var navigate = useNavigate();
  console.log(id);
  var data = mentors[id];
  console.log(data);
  return (
    <Paper elevation={20} className="Details">
      <h3>Name: {data.mentorName}</h3>
      <h3>Profession: {data.profession}</h3>
      <h3>Course: {data.Course}</h3>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        variant="outlined"
      >
        BACK
      </Button>
    </Paper>
  );
}
