import React from 'react';
import '../../stylesheets/Mainpage.css';

const Attachment = () => {
    return(
    <><hr/>
        <div className="card" id="formCard">
        <div className="card-body">
          <h5 className="card-title">Attachment Form</h5><hr/>
          <h6 className="card-subtitle mb-2 text-muted">January-May</h6>

          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="registration">Registration</label>
                <input type="text" className="form-control" id="registration" placeholder="CS/MG/****/05/17" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name">Name</label>
                <input type="inputName" className="form-control" id="name" placeholder="Enter your primate name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" className="form-control" id="phone" placeholder="07********" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="johndoe@kabarak.ac.ke" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City/Town</label>
                <input type="text" className="form-control" placeholder="Eldoret" id="inputCity" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="Institution">Institution</label>
                <input type="text" className="form-control" placeholder="Kenya Power" id="Institution" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>
      </div>
</>
    );
}

export default Attachment;