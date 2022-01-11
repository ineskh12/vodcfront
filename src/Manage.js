import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter ,NavLink, Switch, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Login from "./components/login";
import SignUp from "./components/signup";
import Pannel from "./components/Pannel";
import './Manage.css'
import logo from "./img/Logo ODCVT.svg"
import avatar from "./img/avatar.svg"
import question  from './components/question';

import { useHistory } from "react-router-dom";
import UnityPart from "./components/UnityPart";
import Dialog from "./components/Dialog";



function Manage() {
  const activeStyle = {
    //background-color: #8F5C2C;
   
    borderBottom: '4px solid #FF7900',
    borderBottomWidth: -2   ,
    color: '#FF7900', 
    fontSize: '19px',
  // textAlign: "right",
  // borderBottomColor: "red",
  // borderBottomWidth: 2 
};
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
        <div  style = {{ marginLeft: '402px' }}  className="row">
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


                    
  
      <>
      <NavLink class='tt' exact to="/setup"  style={{color:'white', cursor : 'pointer', fontFamily:'HelveticaNeue-Bold' ,fontSize:'19px' ,marginTop:"57px", marginLeft: '70px'}} activeStyle={activeStyle}>Setup</NavLink>
      {/* <Link  to="/setup" style={{color:clr, cursor : 'pointer', fontFamily:'HelveticaNeue-Bold' ,fontSize:'19px' ,marginTop:"46px",marginLeft:"70px"
}} onClick={() => 
  setcolor(0)
} >Setup </Link> */}
    
<NavLink  class='tt2'to="/index" style={{color:'white', cursor : 'pointer', fontFamily:'HelveticaNeue-Bold' ,fontSize:'19px' ,marginTop:"57px", marginLeft: '20px',}} activeStyle={activeStyle}>Index</NavLink>

{/* <Link to="/index" style={{color:clr1, cursor : 'pointer', fontFamily:'HelveticaNeue-Bold' ,fontSize:'19px' ,marginTop:"46px",marginLeft:"40px"
}} onClick={() => 
  setcolor(1)
    }>Index </Link> */}
   </>
                     
  
  
  


    <div  style={{marginRight: '20rem'}} className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto" id="iconi">
     
            





{/* 
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
     &ensp;  &ensp; */}
     <NavLink  to="/" style={{color:'white', cursor : 'pointer', fontFamily:'HelveticaNeue-Bold' ,fontSize:'19px' ,marginTop:"20px", marginLeft: '20px',}} activeStyle={activeStyle}>FR</NavLink>


     <NavLink  to="/" style={{color:'white', cursor : 'pointer', fontFamily:'HelveticaNeue-Bold' ,fontSize:'19px' ,marginTop:"20px", marginLeft: '20px',}} > EN</NavLink>
     <div class="btn-group">
  <button type="button" class="dropdown-toggle"   style={{border:'none', background:'none',marginLeft: '20px'}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <img
      
     
      alt=""
      src={avatar}
      //width="100"
      //height="60"
     // className="d-inline-block align-top"
    />
  </button>
  <div class="dropdown-menu dropdown-menu-right" style={{backgroundColor:'black'}}>
 
    <button  class="dropdown-item" type="button">
     <a  style={{color:'white', fontWeight:'bold',fontSize:'19px'}} class="dropdown-item" href="/login">Se déconnecter</a>
     
     </button>

  </div>
</div>
  
  
              
            </ul>

   

          </div>
  </Navbar>
 

  <Switch>
            
            <Route path="/Pannel" component={Pannel} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/index" component={question} />

         <Route exact path='/login' component={Login} />
    
         <Route path="/setup" component={UnityPart} />
         <Route exact path="/More" component={Dialog} />
      </Switch>
    </div>
     </BrowserRouter>
  );
}

export default Manage;

