
import React from "react";
import { useHistory } from "react-router-dom";

import '../App.css';
export default function Login()  {
    let history = useHistory();

       
    function goin(){
        history.push("/setup");
        window.location.reload(false);
        localStorage.setItem("Login", true);


    }
    
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
                <h5 style={{fontFamily:'Helvetica Neue',fontWeight:'bold',height:'102px',width:'320px',fontSize:'33px'}} >Orange Digital
                    Center Virtual Tour</h5>
                 
                  
                    <p style={{width:'320px', height:'102px'}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

                <div className="form-group">
                    <label  style={{fontWeight:'bold', fontSize:'16px'}}>Email</label>
                    <input style={{width:'320px', height:'40px'}} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label style={{fontWeight:'bold', fontSize:'16px'}}>Password</label>
                    <input style={{width:'320px', height:'40px'}}type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">

                        {/* <input  style = {{background:'red',color:"black",border:"20px"}}   type="checkbox"  className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label"htmlFor="customCheck1" >Remember me</label>
                        <p  style = {{ marginTop: '-1.9rem' }}  className="forgot-password text-right">
                            Forgot account?
                        </p> */}
                    </div>
                </div>

                <button  onClick={(e) => goin()}  style = {{background:'#FF7900', fontWeight:'bold',fontSize:'16px',color:"black",border:"20px",width:'320px', height:'40px', borderRadius: "1px"}}   className="btn btn-primary btn-block">Login</button>
                
            </div></div>
        );
    
}
