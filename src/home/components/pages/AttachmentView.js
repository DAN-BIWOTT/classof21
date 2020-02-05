import React, { useEffect,useState } from 'react';
import '../../stylesheets/Mainpage.css';
import CenterNav from '../CenterNav';
import { getAttachments } from '../controllers/FireController';
import { RadarSpinner } from 'react-epic-spinners';
import { Col } from 'react-bootstrap';

const AttachmentView = () => {
    useEffect(
        () => {fetchAttachments()},
        []
    )
    const[loading,setLoading] = useState(false);
    const[attachment,setAttachment] = useState([])

    const fetchAttachments = async() => {
        setLoading(true)
        setAttachment((await getAttachments()).data);
        setLoading(false);
    }

    const loadData = () => {
        if(loading === true){
            return(
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><RadarSpinner center color="green" size={150} animationDelay={20} /></td>
                        <td></td>
                        <td></td>
                    </tr>
                 </tbody>
                 )
        }else{
            return(
                <tbody>
                {attachment.map(attach => <tr key={attach.reg} >
                <th scope="row">{attach.reg}</th>
                <td className="text-center">{attach.name}</td>
                <td className="text-center">{attach.phone}</td>
                <td className="text-center">{attach.institution}</td>
                <td className="text-center">{attach.city}</td>
                    </tr>
                    )}
                </tbody>
            )
        }
    }

    return(
    <Col md="10" sm="10" xs="10" id="MainPage">
    <hr/>
    <CenterNav/>
    <div className="Row">
    <div className="col-md-12 col-sm-12">
        <div className="shadow p-3 mb-5 bg-white rounded">
        <h5 className="card-title">Attachment Locations Computer Science Year 4 Sem 1</h5>
        <table className="table table-striped table-hover center">
            <thead>
                <tr>
                    <th scope="col">Reg</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Institution</th>
                    <th scope="col">City</th>
                </tr>
            </thead>
            
              {loadData()}
         
            </table>
        </div>
        </div>

        </div>
    </Col>
    );
}

export default AttachmentView;