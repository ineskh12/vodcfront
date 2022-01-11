import React, { useState } from "react";
import { BrowserRouter ,NavLink, Switch, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import logo from "../img/Logo ODCVT.svg"
import avatar from "../img/avatar.svg"
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './login.css'
import { useHistory } from "react-router-dom";

import axios from "axios";
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


export default function Login  (props) {
  let history = useHistory();
  const [state , setState] = useState({
    email : "",
    password : ""
})
const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
}
const redirectToHome = () => {
  return(<Redirect to="/" />) 



}


function goin(){
  history.push("/setup");
  window.location.reload(false);
  localStorage.setItem("Login", true);


}
const handleSubmitClick = (e) => {
  // e.preventDefault();
  // const payload={
  //     "user_email":state.email,
     
  //     "user_password":state.password,
  // }

  //redirectToHome();
  // axios.post('https://virtuelodc-backend.herokuapp.com/login', payload)
      
  //     .then(function (response) {
          
  //           console.log(response.data)
  //           localStorage.setItem("first_name", response.data.first_name);
  //           localStorage.setItem("last_name", response.data.last_name);
  //           localStorage.setItem("user_email", response.data.user_email);
  //           localStorage.setItem("country", response.data.country);
           
           
  //             // setState(prevState => ({
  //             //     ...prevState,
  //             //     'successMessage' : 'Login successful. Redirecting to home page..'
  //             // }))
  //             // 
  //             // props.showError(null)
         
  //         // else if(response.data.code === 204){
  //         //     props.showError("Username and password do not match");
  //         // }
  //         // else{
  //         //     props.showError("Username does not exists");
  //         // }
  //     })
  //     .catch(function (error) {
  //         console.log(error);
  //     });
}

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return ( 
    <div>
     <Navbar  style={{width: '1920px',height: '100px'}}   className="navbarcolor " variant="dark">
   
      <Navbar.Brand style = {{ marginLeft: '402px',width: '50px',height: '100px' , marginTop:'25px'}} href="" >

      
        <img
          alt=""
          src={logo}
          //width="100"
          //height="60"
          className="d-inline-block align-top"
        />{' '}
      
         
         
      </Navbar.Brand>
      



                    
  
              
  
  
  

  
 
        <div style={{marginLeft: '1000px',marginBottom:'-76px'}} >

        
        <NavLink  to="/" style={{color:'white', cursor : 'pointer', fontFamily:'HelveticaNeue-Bold' ,fontSize:'19px' ,marginTop:"20px", marginLeft: '20px',}} activeStyle={activeStyle}>FR</NavLink>


     <NavLink  to="/" style={{color:'white', cursor : 'pointer', fontFamily:'HelveticaNeue-Bold' ,fontSize:'19px' ,marginTop:"20px", marginLeft: '20px',}} > EN</NavLink>
   
      <button  style={{border:'none', background:'none',marginLeft: '20px'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <img
      style={{marginBottom:'20px'}}
          alt=""
          src={avatar}
         
          //width="100"
          //height="60"
         // className="d-inline-block align-top"
        />
      </button>

    </div>

         
      
              
        

  
         
  </Navbar>
 
    <div  style={{marginLeft: '800px',marginRight:'800px', marginTop:'175px'}} >
  
    <div style={{height: '74px', width:'310px' }} > 
   <h5 style={{fontFamily: 'HelveticaNeue-Bold'  ,fontSize:'34px',letterSpacing:'-0.68px'}}>
   {/* //bold -20 */}
   Orange Digital Center Virtual Tour</h5> 
    
    </div>
    &nbsp; &nbsp; 
    
    
    <div style={{width: '320px',height: '102px' }} > 
    <p style={{fontFamily:'Helvetica Neue' ,fontSize:'16px',letterSpacing:'-0.32px'}}> Excepteur sint occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est laborum
 duis aute irure dolor in reprehenderit in voluptate velit esse 
 cillum dolore eu fugiat nulla pariatur</p>
    
    </div>
  
  <br/>
  <br/>
  <br/>
<div>
  <form >
                <div className="form-group text-left">
                <label style={{fontWeight:'bold', fontSize:'16px'}}>Email </label>
              
                    <input type="email" 
                       className="form2" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
        
                </div>
                <div className="form-group text-left">
                    <label style={{fontWeight:'bold', fontSize:'16px'}}>Password</label>
                    <input type="password" 
                       className="form2"
                       id="password" 
                       value={state.password}
                        onChange={handleChange} 
                        placeholder="Password"
                    />
                </div>
              
                <button   style = {{background:'#FF7900', fontWeight:'bold',fontSize:'16px',color:"black",border:"20px",width:'320px', height:'40px', borderRadius: "1px"}}   className="btn btn-primary btn-block"  onClick={(e) => goin()} >Login</button>
                
            </form>
        </div>

    </div>
    
  </div>
   
    );
  }
