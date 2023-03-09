import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Edudetail from "./edureducer";
const Myeducation = () =>{
    let[clgname, pickClgname] = useState("");
    let[degree, pickDegree] = useState("");
    let[sub, pickSub] = useState("");
    let[marks, pickMarks] = useState("")

    let[msg, updateMsg] = useState();
    let dispatch = useDispatch();

    const save = () =>{
        let newedu = {clgname:clgname, degree: degree, sub:sub, marks:marks}
        let dispatchData = {type:"Addedu", eduinfo:newedu}
        dispatch(dispatchData);
        updateMsg("submitted successfully!")
        pickClgname("");pickDegree("");pickSub("");pickMarks("");
    }

    let alledu = useSelector(state=>state.Edudetail);

    const deledu = (index) =>{
        let dispatchData = {type:"Deledu", eduindex: index}
        dispatch(dispatchData);
    }
    
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-4">
                    <div className ="card">
                        <div className="card-header bg-danger"> <h4 className="text-center m-2 text-white">Education Details</h4></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 mb-3">
                                    <p className="fw-bold">College Name</p>
                                </div>
                                <div className="col-lg-8 mb-3">
                                    <input className="form-control" onChange={obj=>pickClgname(obj.target.value)} value={clgname}/>  
                                </div>
                                <div className="col-lg-4 mb-3">
                                    <p className="fw-bold">Highest Degree</p>
                                </div>
                                <div className="col-lg-8 mb-3">
                                    <select class="form-control text-center" onChange={obj=>pickDegree(obj.target.value)} value={degree}>
                                        <option>-Select-</option>
                                        <option>B.tech</option>
                                        <option>M.tech</option>
                                        <option>BCA</option>
                                        <option>MCA</option>
                                    </select> 
                                </div>
                                <div className="col-lg-4 mb-3">
                                    <p className="fw-bold">Subject</p>
                                </div>
                                <div className="col-lg-8 mb-3">
                                    <select class="form-control text-center" onChange={obj=>pickSub(obj.target.value)} value={sub}>
                                        <option>-Select-</option>
                                        <option>Computer</option>
                                        <option>IT</option>
                                        <option>Electrical</option>
                                        <option>Mechanical</option>
                                        <option>Civil</option>
                                    </select> 
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <p className="fw-bold">Marks</p>
                                </div>
                                <div className="col-lg-8 mb-4">
                                    <input className="form-control" type="number" onChange={obj=>pickMarks(obj.target.value)} value={marks} placeholder="in %"/>  
                                </div>
                                <div className="col-lg-12 text-center"> 
                                    <button className="btn btn-warning " onClick={save}> Submit </button>
                                </div>
                            </div>  
                        </div>
                        
                    </div>
                </div>
                
                <div className="col-lg-8">
                     <h3 className="text-center text-danger "> Education Details</h3>
                    <table className="table table-bordered mt-3">
                        <thead>
                            <tr className="text-center bg-light">
                                <th>Sl No.</th>
                                <th>College Name</th>
                                <th>Heighest Degree</th>
                                <th>Subject</th>
                                <th>Marks(%)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                        {
                            alledu.map((info, index)=>{
                                return(
                                    <tr>
                                        <td>{index}</td>
                                        <td>{info.clgname}</td>
                                        <td>{info.degree}</td>
                                        <td>{info.sub}</td>
                                        <td>{info.marks}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={deledu.bind(this,index)}> Delete </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Myeducation;