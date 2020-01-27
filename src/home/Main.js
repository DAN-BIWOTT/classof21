import React from 'react';
import { SideBar } from './components/SideBar';
import { Row } from 'react-bootstrap';

const Main = () =>{
    return(
        <div className="Container-fluid">
                  <Row>
                    <SideBar />
                  </Row>
        </div>
    );
}

export default Main;