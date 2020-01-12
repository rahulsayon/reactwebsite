import React,{ Component } from "react"
import { Navbar ,Nav ,NavItem } from "react-bootstrap"
import  { Link } from "react-router-dom"

 class CustomNavbar extends React.Component {
    render(){
        return(
            <>

            {/* <Navbar default collapseOnSelect>
                 <Navbar.Header>
                     <Navbar.Brand>
                         <Link to="/">CodeLife</Link>
                     </Navbar.Brand>
                     <Navbar.Toggle />
                 </Navbar.Header>
                 <Navbar.Collapse>
                     <Nav pullRight>
                         <NavItem eventKey={1} componentClass={Link} href="/" >Home</NavItem>
                         <NavItem eventKey={2} componentClass={Link} href="/about" >About</NavItem>
                         <NavItem eventKey={3} componentClass={Link} href="/news" >News</NavItem>

                        
                     </Nav>
                    
                 </Navbar.Collapse>
         </Navbar>
         <br/> */}

         <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link eventKey={1}  href="/">Home</Nav.Link>
      <Nav.Link eventKey={2}  href="/about">About</Nav.Link>
      <Nav.Link eventKey={3}  href="/news">News</Nav.Link>

      
    </Nav>
  </Navbar.Collapse>
</Navbar>
           
            </>
        )
    }
}

export default CustomNavbar