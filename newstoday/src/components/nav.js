import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../logo.png';
import {  useState } from 'react';
export default function Nav(props) 
{
    const [search,setsearch] = useState("");
    
    return(
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
    
      <Navbar.Brand href="#"><img src={logo} alt="no logo" height="50" width="50" />News Today</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <div className="d-flex w-100 justify-content-end">
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(event)=> setsearch(event.target.value)}
            />
            <Button variant="outline-success" onClick={()=> props.setfilt({...props.filt,q: search})}>Search</Button>
          </Form>
          </div>
          </Navbar.Collapse>
          
  </Navbar>  
  
    );

}