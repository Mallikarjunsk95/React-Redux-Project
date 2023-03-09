const Contactdetail = ( state=[], action) =>{

    let contactdata = Object.assign([], state);

    if(action.type ==="addcontact" ){ 
        contactdata.push(action.contactinfo); // dispatchData 
    }
    if(action.type==="delcontact"){
        contactdata.splice(action.cindex, 1)
    }
    return contactdata;
}
export default Contactdetail;