import React, { useEffect,useState } from 'react';
import '../../stylesheets/Mainpage.css';
import CenterNav from '../CenterNav';
import { getAttachments } from '../controllers/FireController';

const AttachmentView = () => {
    useEffect(
        () => {fetchAttachments()},
        []
    )
    
    const[attachment,setAttachment] = useState([])

    const fetchAttachments = async() => {
       // console.log((await getAttachments()).data);
        setAttachment((await getAttachments()).data);
    }

    return(
    <><hr/>
    <CenterNav/>
    <div className="Row">
    <div className="col-md-12 col-sm-12">
        <div className="shadow p-3 mb-5 bg-white rounded" style={{width: "70vw"}}>
        <h5 className="card-title">Attachment Locations Computer Science Year 4 Sem 1</h5>
        <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">Reg</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Institution</th>
                </tr>
            </thead>
            <tbody>
            {attachment.map(attach => <tr key={attach.reg} >
            <th scope="row">{attach.reg}</th>
            <td>{attach.name}</td>
            <td>{attach.phone}</td>
            <td>{attach.institution}</td>
                </tr>
                )}
            </tbody>
            </table>
        </div>
        </div>

        </div>
</>
    );
}

export default AttachmentView;