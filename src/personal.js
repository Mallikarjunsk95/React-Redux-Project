import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";

const Mypersonal = () =>{
    let[name, pickName] = useState("");
    let[edu,pickEdu] = useState("");
    let[age, pickAge] = useState("");
    let[address, pickAddress] = useState("");

    let[msg, updateMsg] = useState("");
    let dispatch = useDispatch(); // object creation of useDiapatch().

    const save = () =>{
        let newperson = {pname: name, pedu : edu, page: age, paddress: address };
        let dispatchData = {type:"addpersonal", pinfo:newperson};
        dispatch(dispatchData);
        updateMsg(name + " saved sucessfully!");
        pickName(""); pickEdu(""); pickAge(""); pickAddress("");
    }
    let allperson = useSelector(state=>state.Personaldetail) // useSelector will store the data from react to redux

    const deleteinfo = (index,Name) =>{
        updateMsg(Name + " deleted successfully");
        let dispatchData = {type:"delpersonal", pindex:index};
        
        dispatch(dispatchData);
       

    }
    

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-4 mt-5">
                    <div className="border-dark card">
                        <div className="card-header bg-primary text-white"><h3>Personal Details</h3> </div>
                        <div className="card-body"> 
                            <label className="fw-bold">Full Name</label>
                            <input className="form-control mb-3" onChange={obj=>pickName(obj.target.value)} value={name}/>

                            <label className="fw-bold">Education</label>
                            <input className="form-control mb-3" onChange={obj=>pickEdu(obj.target.value)} value={edu}/>

                            <label className="fw-bold">Age</label>
                            <input type="number" className="form-control mb-3" onChange={obj=>pickAge(obj.target.value)} value={age}/>

                            <label className="fw-bold">Address</label>
                            <textarea className="form-control mb-4" onChange={obj=>pickAddress(obj.target.value)} value={address}></textarea>

                            <p className="text-center">
                                <button className="btn btn btn-warning" onClick={save}> Submit </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <h2 className="text-center text-danger"> Personal Details List </h2>
                    <p className="text-center text-success">{msg}</p>
                    <table className="table  table-bordered table-stripped table-hover text-center bg-warning m-3 shadow-lg">
                        <thead>
                            <tr>
                            <th>Sl No.</th>
                            <th>Name</th>
                            <th>Education</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Action</th>
                            </tr>    
                        </thead>
                        <tbody>
                            {
                                allperson.map((name,index)=>{
                                    return(
                                        <tr key={index} className="bg-light">
                                            <td>{index}</td>
                                            <td>{name.pname}</td>
                                            <td>{name.pedu}</td>
                                            <td>{name.page}</td>
                                            <td>{name.paddress}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={deleteinfo.bind(this,index,name.pname)}> Delete </button>
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
export default Mypersonal;