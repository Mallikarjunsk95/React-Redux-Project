const Expdetail = (state=[], action) =>{
    let expdata = Object.assign([], state);

    if( action.type === "Addexperience"){
        expdata.push(action.expinfo);
    }
    if(action.type === "Delexperience"){
        expdata.splice(action.expindex,1)
    }
   
    return expdata;
}
export default Expdetail;