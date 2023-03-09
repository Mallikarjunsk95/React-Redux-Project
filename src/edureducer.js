const Edudetail = ( state=[], action) =>{
    let edudata = Object.assign([],state);

    if(action.type==="Addedu"){
        edudata.push(action.eduinfo);
    }
    if(action.type==="Deledu"){
        edudata.splice(action.eduindex,1)
    }
    return edudata;
}
export default Edudetail;