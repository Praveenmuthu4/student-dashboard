import { useContext } from "react";
import {
  useParams,
  useNavigate
} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import { crtContext } from "./App";

export function StudentDetails() {
  const [students, setStudents] = useContext(crtContext);
  const { id } = useParams();
  var navigate = useNavigate();
  var data = students[id];
  console.log(data);
  return (
    <Paper elevation={20} className="Details">
      <h3>Name: {data.name}</h3>
      <h3>Address: {data.address}</h3>
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
