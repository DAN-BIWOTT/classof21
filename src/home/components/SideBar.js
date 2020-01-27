import React, { useState } from 'react';
import '../stylesheets/SideBar.css';
import { Col } from 'react-bootstrap';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FaHome } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";
import { Mainpage } from './Mainpage';

export const SideBar = () => {
    const[page,setPage] = useState("home");
    
    const changePage = (selected) =>{
     switch (selected) {
                case 'home':
                    setPage("home");
                    break;
                case 'attachment':
                    setPage("attachment");
                    break;
                default:
                    setPage("home");
                    break;
        }
    }

    return(
        <>
       <Col id="sideBar">
            <SideNav style={{backgroundColor:"green"}}
        onSelect={changePage}
        >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home" >
            <NavItem eventKey="home">
                <NavIcon>
                    <FaHome style={{ fontSize: '1.75em' }}/>
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="attachment">
                <NavIcon>
                    <GoBriefcase style={{ fontSize: '1.75em' }}/>
                </NavIcon>
                <NavText>
                    Attachment
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
        </Col>

        <Mainpage 
         myRender = {page} 
        />
     </>

    );
}
