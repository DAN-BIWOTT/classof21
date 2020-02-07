import React,{ useEffect } from 'react';
import '../../stylesheets/PrivateAttachment.scss';
import { Col } from 'react-bootstrap';
import  logo from '../../../images/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../../../redux/actions/userActions';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const AttachmentView = () => {
  // declarations and initialization.
      const dispatch = useDispatch();
      const userData = useSelector(state => state.user);

  useEffect(
    () => {getCurrentData()},[]
  )
  
  const getCurrentData = () => {
    const token = localStorage.getItem('USERTOKEN');
    dispatch(getUserData(token));
    console.log(userData);
  }
    const email = userData.email;
    const name = userData.name;
    const phone = userData.phone;
    const reg = userData.reg;
    const institution = userData.institution;
    const city = userData.city;

    const options = {
      orientation: 'landscape',
      unit: 'in',
      format: [700,500]
  };
  
    return(
    <Col md="10" sm="10" xs="10" id="MainPage">
      <Pdf targetRef={ref} filename="Attachment-Places.pdf" options={options} x={.5} y={.5}>
        {({ toPdf }) => <button className="btn btn-md btn-info my-4" style={{width:"40%"}} onClick={toPdf}>Generate Pdf</button>}
    </Pdf>
<div ref={ref} className="col-md-10 shadow-lg p-3 mb-5 d-none d-md-block d-lg-block bg-white rounded " id="cardBody">
    <header className="clearfix">
      <div id="logo">
        <img src={logo} alt=""/>
      </div>
      <div id="company">
        <div>KABARAK UNIVERSITY</div>
      </div>
    </header>
    <main>
      <div id="details" className="clearfix">
        <div id="client">
          <div className="to">Student Name:</div>
    <h2 style={{color:"blue"}}>{name}</h2>
          <div className="address">Email</div>
          <div className="email"><a href="mailto:john@example.com">{email}</a></div>
        </div>
        <div id="invoice">
        <div className="to">Registration:</div>
        <h2 style={{color:"blue"}}>{reg}</h2>
        </div>
      </div>
      <table border="0" cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th className="no">#</th>
            <th style={{background: "#EEEEEE"}} className="desc">DESCRIPTION</th>
            <th className="total">CONTACTS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="no">Institution</td>
            <td style={{background: "#EEEEEE"}} className="desc"><h2 style={{color:'black'}}>{institution}</h2></td>
            <td className="no"><a href={`mailto: ${email}`}>{email}</a></td>
          </tr>
          <tr>
            <td className="no">City/Town</td>
            <td style={{background: "#EEEEEE"}} className="desc"><h2 style={{color:'black'}}>{city}</h2></td>
            <td className="no">{phone}</td>
          </tr>
        </tbody>
      </table>
      <div id="notices">
        <div></div>
        <div className="notice">Created by Biwott.</div>
      </div>
    </main>
  </div>
    </Col>
    );
}

export default AttachmentView;