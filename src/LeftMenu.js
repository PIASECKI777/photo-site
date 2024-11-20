import React  from 'react';
import { useSelector } from 'react-redux'
import langObj from './texts/texts'

import  './LeftMenu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "react-bootstrap";
import {Nav, Container} from "react-bootstrap";

import Language from './Language';

export default function Header () {
  const data = useSelector((state)=>state.dudu);
  const  keys = Object.entries(langObj);


  console.log(langObj);


console.log(keys);
console.log(keys[0][1]["en"]);
const a =keys[0][1][data];
console.log(a);

  return (
    <>
    <div className='navbar-container'>
    <Navbar  fixed= 'top' collapseOnSelect expand= 'lg' bg= 'dark' variant= 'dark'>

        <Container> 
        <Language />

{/*        
            <Navbar.Brand href= '/'>
              <img
                src= {camera}
                height= '50'
                width=  '50'
                className='d-inline-block align-top'
                alt= 'Logo'
              />
            </Navbar.Brand>

              console.log(`${key}: ${user[key]}`);
*/}
            <Navbar.Toggle aria-controls= 'responsive-navbar-nav'/>
            <Navbar.Collapse id= 'responsive-navbar-nav'>
                <Nav className='mr-auto'>
                  <Nav.Link href= '/'> {keys[0][1][data]} </Nav.Link>
                  <Nav.Link href= '/photo'> {keys[1][1][data]} </Nav.Link>
                  <Nav.Link href= '/studio'> {keys[2][1][data]} </Nav.Link>
                  <Nav.Link href= '/art'> {keys[3][1][data]} </Nav.Link>
                  <Nav.Link href= '/articles'> {keys[4][1][data]} </Nav.Link>
                  <Nav.Link href= '/video'> {keys[5][1][data]} </Nav.Link>
                  <Nav.Link href= '/services'> {keys[6][1][data]} </Nav.Link>
                  <Nav.Link href= '/contacts'> {keys[7][1][data]} </Nav.Link>
         {/*         <p>Data From Child: {data}</p>     */}

                  <Nav.Link href= '/about'> {keys[8][1][data]}</Nav.Link>

                </Nav>


            </Navbar.Collapse> 
 
        </Container>
    </Navbar>
  
    </div>
 
    </>
   )
}

