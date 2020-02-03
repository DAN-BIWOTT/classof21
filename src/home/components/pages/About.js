import React from 'react';
import { Col } from 'react-bootstrap';
import '../../stylesheets/About.scss';

const About = () => {
    return(
        <Col md="10" sm="10" xs="10" id="AboutPage">
            <div className="customJumbo my-4">
                    <h2>About Page</h2>
                    <p className="lead"></p>
                    <hr className="my-4"/>
                    <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-outline-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        </Col>

    )
}

export default About;