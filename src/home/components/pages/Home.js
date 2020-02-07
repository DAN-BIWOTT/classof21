import React from 'react';
import '../../stylesheets/Mainpage.css';
import { Col } from 'react-bootstrap';

const Home = () => {
    return(
        <Col md="10" sm="10" xs="10" id="MainPage">
            <Col className="d-block d-md-none"  md="10" sm="10" xs="10">
            <div className="col-md-10 customJumbo my-5">
                    <p className="lead"></p>
                    <hr className="my-4"/>
                     <p className="visible" id="customP">Use your laptop to view content</p>
            </div>
            </Col>
        </Col>
    );
}

export default Home;