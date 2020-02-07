import React from 'react';
import { Col } from 'react-bootstrap';
import '../../stylesheets/About.scss';

const About = () => {
    return(
        <Col md="10" sm="10" xs="7" id="AboutPage">
            <div className="col-md-10 customJumbo my-5">
                    <h2 style={{color: '#155724'}}>About Page</h2>
                    <p className="lead"></p>
                    <hr className="my-4"/>
                    <p className="d-none d-md-block d-lg-block" id="customP">Hi, this serves as the class website.
                    Created and maintained by Biwott.
                     Explore my content and get free designs by clicking the button below... </p>
                     <p className="visible" id="customP">Use your laptop to view content</p>
                    <a className="btn btn-outline-success btn-lg" href="https://sghost.herokuapp.com" role="button">Learn more</a>
            </div>
        </Col>

    )
}

export default About;