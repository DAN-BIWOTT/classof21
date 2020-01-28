import React from 'react';
import '../../stylesheets/Mainpage.css';
import CenterNav from '../CenterNav';

const AttachmentView = () => {
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
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>

        </div>
</>
    );
}

export default AttachmentView;