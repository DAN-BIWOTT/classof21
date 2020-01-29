import React, { useState } from 'react';
import '../stylesheets/SideBar.css';
import { Row,Col } from 'react-bootstrap';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FaHome } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";
import Attachment from './pages/Attachment';
import AttachmentView from './pages/AttachmentView';
import Home from './pages/Home';
import { TopNav } from './TopNav';

const SideBar = () => {
    const[page,setPage] = useState(<Home/>);
    
    const changePage = (selected) =>{
     switch (selected) {
                case 'home':
                    setPage(<Home/>);
                    break;
                case 'attachment':
                    setPage(<Attachment/>);
                    break;
                case 'attachment/view':
                    setPage(<AttachmentView/>);
                    break;
                default:
                    setPage(<Home/>);
                    break;
        }
    }

    return(
        <div className="wrapper container-fluid">
                  <div className="row">
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

        </SideNav.Nav>
    </SideNav>
        </Col>
        <Col md="10" id="MainPage">
             <TopNav />
             {page}
        </Col>
        </div>
    </div>

    );
}

export default SideBar;
