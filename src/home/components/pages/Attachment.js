import React, { useState } from 'react';
import '../../stylesheets/Mainpage.css';
import { createAttachment } from '../controllers/FireController';

const Attachment = () => {

   
const[reg,setReg] = useState("");
const[institution,setInstitution] = useState("");
const[city,setCity] = useState("");
const[email,setEmail] = useState("");
const[name,setName] = useState("");
const[phone,setPhone] = useState("");
const[inputStatus,setInputStatus] = useState(false);
let data ={
      reg: reg,
      institution: institution,
      city: city,
      email: email,
      name: name,
      phone: phone
    }

const updateReg = (e) => {
  setReg(e.target.value);
}
const updateInstitution = (e) => {
  setInstitution(e.target.value);
}
const updateCity = (e) => {
  setCity(e.target.value);
}
const updateEmail = (e) => {
  setEmail(e.target.value);
}
const updateName = (e) => {
  setName(e.target.value);
}
const updatePhone = (e) => {
  setPhone(e.target.value);
}


const sendData = async (e) => {
    e.preventDefault();

    if((await createAttachment(data)).status === 200){
      setInputStatus(true);
    }
}



    return(
    <><hr/>
        <div className="card" id="formCard">
        <div className="card-body">
          <h5 className="card-title">Attachment Form</h5><hr/>
          <h6 className="card-subtitle mb-2 text-muted">January-May</h6>

          <form onSubmit={ sendData }>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="registration">Registration</label>
                <input disabled={inputStatus} onChange={ updateReg } value={ reg } type="text" className="form-control" id="registration" placeholder="CS/MG/****/05/17" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name">Name</label>
                <input disabled={inputStatus} onChange={ updateName } value={ name } type="inputName" className="form-control" id="name" placeholder="Enter your primate name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input disabled={inputStatus} onChange={ updatePhone } value={ phone } type="text" className="form-control" id="phone" placeholder="07********" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input disabled={inputStatus} onChange={ updateEmail } value={ email } type="email" className="form-control" id="email" placeholder="johndoe@kabarak.ac.ke" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City/Town</label>
                <input disabled={inputStatus} onChange={ updateCity } value={ city } type="text" className="form-control" placeholder="Eldoret" id="inputCity" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="Institution">Institution</label>
                <input disabled={inputStatus} onChange={ updateInstitution } value={ institution } type="text" className="form-control" placeholder="Kenya Power" id="Institution" />
              </div>
            </div>
            <button disabled={inputStatus} type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>
      </div>
</>
    );
}

export default Attachment;