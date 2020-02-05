import React, { useState } from 'react';
import '../stylesheets/SideBar.css';
import { Col } from 'react-bootstrap';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FaHome,FaRegChartBar } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";
import { TiInfoLargeOutline } from "react-icons/ti";
import Attachment from './pages/Attachment';
import AttachmentView from './pages/AttachmentView';
import PrivateAttachment from './pages/PrivateAttachment';
import About from './pages/About';
import Home from './pages/Home';
import { TopNav } from './TopNav';

const SideBar = () => {
    const[page,setPage] = useState(<Home/>);
    
    const changePage = (selected) =>{
     switch (selected) {
                case 'home':
                    setPage(<Home/>);
                    break;
                case 'adminView':
                    setPage(<AttachmentView/>);
                    break;
                case 'attachment':
                    setPage(<Attachment/>);
                    break;
                case 'attachment/view':
                    setPage(<PrivateAttachment/>);
                    break;
                case 'about':
                    setPage(<About/>);
                    break;
                default:
                    setPage(<Home/>);
                    break;
        }
    }

    return(
        <>
        <TopNav />
        <div className="wrapper container-fluid">
        <div className="row">
       <Col md="2" sm="2" xs="2" id="sideBar">
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
            <NavItem eventKey="adminView">
                <NavIcon>
                    <FaRegChartBar style={{ fontSize: '1.75em' }}/>
                </NavIcon>
                <NavText>
                    Students
                </NavText>
            </NavItem>
            <NavItem eventKey="attachment">
            <NavIcon>
                <GoBriefcase style={{ fontSize: '1.75em' }}/>
            </NavIcon>
            <NavText>
                Attachment
            </NavText>
            <NavItem eventKey="attachment">
                <NavText>
                    Form
                </NavText>
            </NavItem>
            <NavItem eventKey="attachment/view">
                <NavText>
                    View
                </NavText>
            </NavItem>
        </NavItem>

        <NavItem eventKey="about">
                <NavIcon>
                    <TiInfoLargeOutline style={{ fontSize: '1.75em' }}/>
                </NavIcon>
                <NavText>
                    About
                </NavText>
        </NavItem>

        </SideNav.Nav>
    </SideNav>
        </Col>

        {/* MainPages Switching */}
        {page}
        {/* End of main page switching */}
        </div>
    </div>
        </>
    );
}

export default SideBar;
