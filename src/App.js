import logo from './logo.svg';
import './App.css';
import Contact from './Contact'
import About from './About'
import { useState } from 'react';
import Users from './Users'
import CreateUser from './CreateUser'
import Home from './Home'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
function App() {
  // const [name,setName]=useState("shabahat")
  return (
    <div className="App">
      <Router>

        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#features"><Link to="/about">About</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to="/contact">Contact</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to="/list">User List</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to="/create">Create User</Link></Nav.Link>

            </Nav>
            </Navbar>
            <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/list">
         <Users/>
        </Route>
        <Route path="/Contact">
         <Contact/>
        </Route>
        <Route path="/create">
         <CreateUser/>
        </Route>
        <Route path="/">
         <Home/>
        </Route>
      </Switch>
            {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
       

        </>
        {/* <Link to="/about">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about">Contact</Link>
        <Link to="/about">User List</Link>
        <Link to="/about">Create User</Link> */}

        {/* <h1>
      Home Page
    </h1> */}
        {/* <About name={name}/> */}
        {/* <button onClick={()=>{setName("Shabahat Ali Chishti")}}>Update Props</button> */}
        {/* <Contact /> */}
        {/* <Users/> */}
        {/* <CreateUser></CreateUser> */}
      </Router>
    </div>
  );
}

export default App;
