import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export function Home() {
  var navigate = useNavigate();
  return (
    <div className="Home">
      <div className="StudentHome">
        <Button onClick={() => navigate("/students")} variant="outlined">
          STUDENT
        </Button>
      </div>
      <div className="StudentHome">
        <Button onClick={() => navigate("/Mentors")} variant="outlined">
          Mentors
        </Button>
      </div>
    </div>
  );
}
