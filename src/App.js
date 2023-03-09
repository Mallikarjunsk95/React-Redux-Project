import { HashRouter,Routes,Route,Link } from "react-router-dom";
import Mycontact from "./contact";
import Myeducation from "./education";
import Myexperience from "./experience";
import Mypersonal from "./personal";
import Mypreview from "./preview";

function App() {
  return (
    <HashRouter>
      <div className="container mt-3">
        <div className="row">
          <h1 className="text-center text-danger"> Data Entry With React & Redux </h1>
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center">
            <Link to="/personal" className="btn btn-primary m-4 btn-lg">Personal</Link>
            <Link to="/contact" className="btn btn-info m-4 btn-lg">Contact</Link>
            <Link to="/edu" className="btn btn-danger m-4 btn-lg">Education</Link>
            <Link to="/exp" className="btn btn-success m-4 btn-lg">Experience</Link>
            <Link to="/" className="btn btn-warning m-4 btn-lg">Preview</Link>
          </div>
        </div>
     </div>
     <Routes>
        <Route exact path="/personal" element={<Mypersonal/>}/>
        <Route exact path="/contact" element={<Mycontact/>}/>
        <Route exact path="/edu" element={<Myeducation/>}/>
        <Route exact path="/exp" element={<Myexperience/>}/>
        <Route exact path="/" element={<Mypreview/>}/>
     </Routes>
    </HashRouter>
   
  );
}

export default App;
