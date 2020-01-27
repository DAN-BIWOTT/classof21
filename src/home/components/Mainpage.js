import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import '../stylesheets/Mainpage.css';
import { TopNav } from './TopNav';
import Home from './pages/Home';
import Attachment from './pages/Attachment';


export const Mainpage = (myRender) => {

    const[componentPage,setComponentPage] = useState(<Attachment/>);

        useEffect(
            ()=>{temp(myRender)}
        );
       const temp = () =>{

       }
        switch (myRender) {
            case "home":
                setComponentPage(<Home/>);
                break;
            case "attachment":
                setComponentPage(<Attachment/>);
                break;
            default:
                break;
        }
    return(
        <Col md="10" id="MainPage">
             <TopNav />
            { componentPage }
        </Col>
    );
}
