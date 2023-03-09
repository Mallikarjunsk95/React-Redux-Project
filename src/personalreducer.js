const Personaldetail = (state=[], action) =>{

    let personaldata = Object.assign([], state);

    if(action.type==="addpersonal"){
        personaldata.push(action.pinfo) // newpersonal is assign to pinfo for sstoring the data in redux
    }
    if(action.type==="delpersonal"){
        personaldata.splice(action.pindex,1);
    }
    return personaldata;
}
export default Personaldetail;


//"action" is "type" , which is written is personal.js file 
//state =[], means initially the store is empty