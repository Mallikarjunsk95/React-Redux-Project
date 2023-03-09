import { combineReducers } from "redux";

import Personaldetail from "./personalreducer";
import Contactdetail from "./contactreducer";
import Edudetail from "./edureducer";
import Expdetail from "./expreducer";
 
const Mainreducer = combineReducers({Personaldetail,Contactdetail,Edudetail,Expdetail});

export default Mainreducer; //Mainreducer will be captured in store.


