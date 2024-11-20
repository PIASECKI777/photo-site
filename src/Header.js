import React from 'react';
import face from './icons/face.png'
import insta from './icons/insta.png'
import camera from './icons/camera.png'
import './App.css';
import {Row, Col, Container} from "react-bootstrap";


function Header() {
    return (
      <>

      <div className="container_header">

        <Row>
          <Col lg= {1}>
          </Col>
          <Col lg= {2}>
            <div className='header-tel'>
                 Tel: +44 75 00 616 777
            </div>
            <div className='header-tel'>
                 WhatsApp: +44 75 00 616 777
            </div>
          </Col>
          <Col lg= {6}>

            <h1>
                 WŁADYSŁAW PIASECKI 
            </h1>
            <img
                src= {camera}
                height= '40'
                width=  '40'
                className='d-inline-block align-top'
                alt= 'CAMERA'
            />
            <div className='header-tel'>photographer</div>  
          </Col>
          <Col lg= {1}>
          </Col>
          <Col lg= {1} >
              <img
                src= {face}
                height= '40'
                width=  '40'
                className='d-inline-block align-top'
                alt= 'FACE'
              />
              <img
                src= {insta}
                height= '40'
                width=  '40'
                className='d-inline-block align-top'
                alt= 'INSTA'
              />  
          </Col>
          <Col lg= {1}>
          </Col>
        </Row>

      </div>

      </>
    );
  }
  
  export default Header;