import { createContext, useState } from "react";
import "./App.css";
import { Students } from "./Students";
import {Routes,Route,useNavigate,} from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AddStudent from "./AddStudent";
import Mentors from "./Mentors";
import { EditStudent } from "./EditStudent";
import StudentMentor from "./StudentMentor";
import AddMentor from "./AddMentor";
import { EditMentor } from "./EditMentor";
import { Home } from "./Home";
import { StudentDetails } from "./StudentDetails";
import { MentorDetails } from "./MentorDetails";

export const crtContext = createContext();

function App() {
  let [students, setStudents] = useState([
    {
      name: "Rakesh",
      age: 22,
      address: "123,Abc,Xyz.Pin-600001",
      Course: "Full Stack Development",
      Mentors: [],
      classtaking: "Full Stack Development",
      id: 1,
    },
    {
      name: "Anil",
      age: 20,
      address: "12,Abc,Xyz.Pin-600002",
      Course: "Web Development",
      Mentors: [],
      classtaking: "Web Development",
      id: 2,
    },
    {
      name: "Surya",
      age: 28,
      address: "23,Abc,Xyz.Pin-600003",
      Course: "Full Stack Development",
      Mentors: [],
      classtaking: "Full Stack Development",
      id: 3,
    },
    {
      name: "Prasana",
      age: 26,
      address: "3,Abc,Xyz.Pin-600012",
      Course: "Web Development",
      Mentors: [],
      classtaking: "Web Development",
      id: 4,
    },
    {
      name: "Venkatesh",
      age: 24,
      address: "123,Abc,Xyz.Pin-600021",
      Course: "Full Stack Development",
      Mentors: [],
      classtaking: "Full Stack Development",
      id: 5,
    },
    {
      name: "Ram",
      age: 23,
      address: "123,Abc,Xyz.Pin-600201",
      Course: "Web Development",
      Mentors: [],
      classtaking: "",
      id: 6,
    },
    {
      name: "Bharathwaj",
      age: 20,
      address: "123,Abc,Xyz.Pin-600051",
      Course: "Web Development",
      Mentors: [],
      classtaking: "",
      id: 7,
    },
    {
      name: "Vignesh",
      age: 25,
      address: "123,Abc,Xyz.Pin-600025",
      Course: "Full Stack Development",
      Mentors: [],
      classtaking: "",
      id: 8,
    },
  ]);


  let [mentors, setMentor] = useState([
    {
      mentorName: "Sanjay Saranavan",
      Course: "Full Stack Development",
      Students: [],
      age: 25,
      profession: "Software Engineer",
      id: 1,
    },
    {
      mentorName: "Ramya",
      Course: "Web Development",
      Students: [],
      age: 25,
      profession: "Software Engineer",
      id: 2,
    },
    {
      mentorName: "Raghav Kumar",
      Course: "Full Stack Development",
      Students: [],
      age: 25,
      profession: "Software Engineer",
      id: 3,
    },
    {
      mentorName: "Gopi",
      Course: "Web Development",
      Students: [],
      age: 25,
      profession: "Software Engineer",
      id: 4,
    },
  ]);

  var navigate = useNavigate();

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/AddStudent")}>
              Add Student
            </Button>
            <Button color="inherit" onClick={() => navigate("/Addmentor")}>
              Add Mentor
            </Button>
            <Button color="inherit" onClick={() => navigate("/studentmentor")}>
              Student Mentor
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <crtContext.Provider value={[students, setStudents, mentors, setMentor]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/Addstudent" element={<AddStudent />} />
          <Route path="/Addmentor" element={<AddMentor />} />
          <Route path="/viewstudent/:id" element={<StudentDetails />} />
          <Route path="/editstudent/:id" element={<EditStudent />} />
          <Route path="/editmentor/:id" element={<EditMentor />} />
          <Route path="/studentmentor" element={<StudentMentor />} />
          <Route path="/viewmentor/:id" element={<MentorDetails />} />
        </Routes>
      </crtContext.Provider>
    </div>
  );
}
export default App;
