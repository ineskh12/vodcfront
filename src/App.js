import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter , Switch, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Login from "./components/login";
import SignUp from "./components/signup";
import Pannel from "./components/Pannel";

import logo from "./img/Logo ODCVT.svg"
import avatar from "./img/avatar.svg"
import question  from './components/question';

import { useHistory } from "react-router-dom";
import UnityPart from "./components/UnityPart";
import Dialog from "./components/Dialog";



function App() {
  const [clr, setclr] = useState("#FF7900");
  const [clr1, setclr1] = useState("white");
  function setcolor(id){
    if (id=== 0){
      setclr1("white");
      setclr("#FF7900");

    }
    
    else {
      setclr1("#FF7900");
      setclr("white");
    }
    
  }
  let history = useHistory();

  return (
  
  <BrowserRouter>
    <div className="App">

    <Navbar  style={{width: 'auto',height: '90px'}}   className="navbarcolor " variant="dark">
    <div >
      <Navbar.Brand href="#home">
        <div  style = {{ marginLeft: '14.9rem' }}  className="row">
        <img
          alt=""
          src={logo}
          //width="100"
          //height="60"
          className="d-inline-block align-top"
        />{' '}
      
          </div>
         
      </Navbar.Brand>
      
    </div>


                    
    {localStorage.Login && (
      <>
      <Link  to="/setup" style={{color:clr, cursor : 'pointer', fontFamily:'HelveticaNeue-Bold' ,fontSize:'19px' ,marginTop:"46px",marginLeft:"70px"
}} onClick={() => 
  setcolor(0)
} >Setup </Link>
    


<Link to="/index" style={{color:clr1, cursor : 'pointer', fontFamily:'HelveticaNeue-Bold' ,fontSize:'19px' ,marginTop:"46px",marginLeft:"40px"
}} onClick={() => 
  setcolor(1)
    }>Index </Link>
   </>
                  )}     
  
  
  


    <div  style={{marginRight: '20rem'}} className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto" id="iconi">
     
            






      <a href="/" style={{color:"#FF7900", cursor : 'pointer', fontFamily:'HelveticaNeue-Bold' ,fontSize:'19px' ,marginTop:"35px",
}} onMouseEnter={() => {
       setclr("#FF7900");
    }}  onMouseLeave={() => {
      setclr("#FF7900");
    }}  >FR </a>
    &ensp; &ensp;


    <a href="/"  onClick={() => {
       console.log(localStorage.Login);localStorage.clear();
    }} style={{color:"white", cursor : 'pointer', fontFamily:'HelveticaNeue-Bold',fontSize:'19px' ,marginTop:"35px", 
}} onMouseEnter={() => {
       setclr1("#FF7900");
    }}  onMouseLeave={() => {
      setclr1("white");
    }}  >EN </a>      
     &ensp;  &ensp;


     <button  style={{border:'none', background:'none'}} onClick={() => {
            localStorage.clear();
      history.push("/");
        window.location.reload(false);
    }}   >
      <img
      marginTop="5OOpx"
          alt=""
          src={avatar}
          //width="100"
          //height="60"
         // className="d-inline-block align-top"
        />
    
    </button>

          <hr style={{border:"2px solid #FF7900" ,width:"19px",marginLeft:"-110px",marginTop:"60px"}}></hr>
          {localStorage.Login && (
      <>
      {/* <hr style={{border:"2px solid" ,color:clr,width:"60px",marginLeft:"-887px",marginTop:"60px"}}></hr> */}

          {/* <hr style={{border:"2px solid ",color:clr1 ,width:"60px",marginRight:"470px",marginLeft:"-500px",marginTop:"60px"}}></hr> &nbsp;&nbsp;&nbsp; */}

              </>
          )} 



              
            </ul>

      <li className="nav-item">
                            {/* <NavLink className="nav-link" style={{color:"white"}} activeStyle={{ color: 'orange' }} to="/"><h6>EN</h6></NavLink> */}
                        </li>

          </div>
  </Navbar>
 

  <Switch>
            
            <Route path="/Pannel" component={Pannel} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/index" component={question} />

        <Route exact path='/' component={Login} />
        <Route path="/sign-in" component={Login} />
         <Route path="/setup" component={UnityPart} />
         <Route exact path="/More" component={Dialog} />
      </Switch>
    </div>
     </BrowserRouter>
  );
}

export default App;

