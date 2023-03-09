import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
const Mycontact = () => {
    let[name, pickName] = useState("");
    let[mobile, pickMobile] = useState("");
    let[email, pickEmail] = useState("");
    
    let[msg, updateMsg] = useState();
    let dispatch = useDispatch();

    const save = () =>{
        let newcontact = { cname : name, cmobile : mobile, cemail : email  };
        let dispatchData = {type:"addcontact", contactinfo: newcontact};
        dispatch(dispatchData); //dispatchData will be passed through the object of useDistach.
        updateMsg(mobile + " submitted successfully!");
        pickName(""); pickMobile(""); pickEmail("");
    }

    let allcontact = useSelector(state=>state.Contactdetail);

    const delcontact = (index,name ) =>{
        let dispatchData = { type: "delcontact", cindex : index}
        dispatch(dispatchData);
        updateMsg (name + " delected successfully")
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header"><h3 className="text-danger">Contact Us</h3></div>
                        <div className="card-body bg-info">
                            <div className="input-group mb-4">
                                <span className="input-group-text text-primary mt-3">Name</span>
                                <input className="form-control mt-3" onChange={obj=>pickName(obj.target.value)} value={name}/>
                            </div>
                            <div className="input-group mb-4">
                                <span className="input-group-text text-primary">Mobile</span>
                                <input className="form-control" type="number" onChange={obj=>pickMobile(obj.target.value)} value={mobile}/>
                            </div>
                            <div className="input-group mb-4">
                                <span className="input-group-text text-primary">Email</span>
                                <input className="form-control" type="email" onChange={obj=>pickEmail(obj.target.value)} value={email}/>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-warning" onClick={save}> Submit </button>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-8">  
                        <p>{msg}</p>
                    <div className="row"> 
                    {
                        allcontact.map((name,index)=>{
                            return(
                              <div className="col-lg-4"> 
                                <div className="bg-light p-3 rounded border text-center shadow-lg m-2">
                                    <p className="fw-bold">{name.cname}</p>
                                    <p>{name.cmobile}</p>
                                    <p><i>{name.cemail}</i></p>
                                    <p><button className="btn btn-danger" onClick={delcontact.bind(this,index, name.cname)}> Delete </button></p>
                                </div>
                              </div>    
                                    
                            );
                        })
                    }      
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mycontact;