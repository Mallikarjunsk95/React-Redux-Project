import { useState } from "react";
import { useSelector } from "react-redux";

const Mypreview = () =>{
    const allpersonal = useSelector(state=>state.Personaldetail); 
    const allcontact = useSelector(state=>state.Contactdetail);
    const alleducation = useSelector(state=>state.Edudetail);
    const allexperience = useSelector(state=>state.Expdetail)  

    return(
        <div className="container mt-2">
            <h3 className="text-center text-danger"> Welcome To Preview Page</h3>
            <div className="row">
                <div className="col-lg- 12">
                    
                    <table className="table  table-bordered table-stripped table-hover text-center bg-warning m-3 shadow-lg">
                        <thead>
                            <tr>
                            <th>Sl No.</th>
                            <th>Name</th>
                            <th>Education</th>
                            <th>Age</th>
                            <th>Address</th>
                            </tr>    
                        </thead>
                        <tbody>
                            {
                                allpersonal.map((name,index)=>{
                                    return(
                                        <tr key={index} className="bg-light">
                                            <td>{index}</td>
                                            <td>{name.pname}</td>
                                            <td>{name.pedu}</td>
                                            <td>{name.page}</td>
                                            <td>{name.paddress}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        </table>

                    <div className="row"> 
                    {
                        allcontact.map((name,index)=>{
                            return(
                              <div className="col-lg-4 mb-3 mt-3"> 
                                <div className="bg-light p-3 rounded border text-center shadow-lg">
                                    <p className="fw-bold">{name.cname}</p>
                                    <p>{name.cmobile}</p>
                                    <p><i> {name.cemail} </i></p>
                                </div>
                              </div>    
                                    
                            );
                        })
                    }      
                    </div> 


                    <table className="table table-bordered mt-5 mb-3 shadow-lg table-hover">
                        <thead>
                            <tr className="text-center bg-secondary text-white ">
                                <th>Sl No.</th>
                                <th>College Name</th>
                                <th>Heighest Degree</th>
                                <th>Subject</th>
                                <th>Marks(%)</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                        {
                            alleducation.map((info, index)=>{
                                return(
                                    <tr>
                                        <td>{index}</td>
                                        <td>{info.clgname}</td>
                                        <td>{info.degree}</td>
                                        <td>{info.sub}</td>
                                        <td>{info.marks}</td>
                                    
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>  
                    
                    <table className="table table-bordered mt-5 table-stripped table-hover">
                    <thead>
                        <tr className="text-center bg-warning">
                            <th>Sl No.</th>
                            <th>Company Name</th>
                            <th>Year of Experience</th>
                            <th>Salary</th>
                            <th>Job Dexcription(%)</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                    {
                        allexperience.map((info, index)=>{
                            return(
                                <tr className="bg-info" key={index}>
                                    <td>{index}</td>
                                    <td>{info.company}</td>
                                    <td>{info.year}</td>
                                    <td>{info.salary}</td>
                                    <td>{info.job}</td>

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
export default Mypreview;