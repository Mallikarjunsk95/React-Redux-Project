import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
const Myexperience = () =>{
    let[company, pickCompany] = useState("");
    let[year, pickYear] = useState("");
    let[salary, pickSalary] = useState("");
    let[job, pickJob] = useState("");

    let[msg, updateMsg] = useState();
    let dispatch= useDispatch();

    const save = () =>{
        let newexp = {company: company, year: year, salary:salary, job:job}
        let dispatchData = {type:"Addexperience", expinfo:newexp};
        dispatch(dispatchData);
        updateMsg("submitted successfully!");
        pickCompany("");pickJob("");pickSalary("");pickYear("");
    }
     
    let allexp = useSelector(state=>state.Expdetail)

    const delexp = ( index) =>{
        let dispatchData = {type:"Delexperience", expindex:index};
        dispatch(dispatchData);
        updateMsg("Data deleted successfully!");
    }

    return(
        <div className="container mt-3">
        <div className="row">
            <div className="col-lg-4">
                <div className ="card">
                    <div className="card-header bg-warning"> <h4 className="text-center m-2">Experience Details</h4></div>
                    <div className="card-body bg-light"> 
                            <label className="fw-bold">Company Name</label>
                            <input className="form-control mb-3" onChange={obj=>pickCompany(obj.target.value)} value={company}/>

                            <label className="fw-bold">Years of Experience</label>
                            <input className="form-control mb-3" type="number" onChange={obj=>pickYear(obj.target.value)} value={year}/>

                            <label className="fw-bold">Salary</label>
                            <input type="number" className="form-control mb-3" onChange={obj=>pickSalary(obj.target.value)} value={salary}/>

                            <label className="fw-bold">Job-Role</label>
                            <textarea className="form-control mb-3" onChange={obj=>pickJob(obj.target.value)} value={job}></textarea>

                            <div className="text-center">
                                <button className="btn btn btn-success" onClick={save}> Submit </button>
                            </div>
                        </div>
                    
                </div>
            </div>
            
            <div className="col-lg-8">
                 <h3 className="text-center text-danger "> Experience Details</h3>
                 <p className="text-center">{msg}</p>
                <table className="table table-bordered mt-3 table-stripped table-hover">
                    <thead>
                        <tr className="text-center bg-warning">
                            <th>Sl No.</th>
                            <th>Company Name</th>
                            <th>Year of Experience</th>
                            <th>Salary(LPA)</th>
                            <th>Job Dexcription(%)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                    {
                        allexp.map((info, index)=>{
                            return(
                                <tr className="bg-info" key={index}>
                                    <td>{index}</td>
                                    <td>{info.company}</td>
                                    <td>{info.year}</td>
                                    <td>{info.salary}</td>
                                    <td>{info.job}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={delexp.bind(this,index)}> Delete </button>
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
    );
}
export default Myexperience;