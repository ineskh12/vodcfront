import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Close } from '@material-ui/icons';
import './table.css'
import DialogActions from '@material-ui/core/DialogActions';

import Paper from '@material-ui/core/Paper';


import axios from 'axios';
import logo from '../img/order.svg';

import fav from '../img/fav.svg';
import close from '../img/delete.svg';
import question from '../img/question.svg';
const styles = theme => ({
  
  

 test:{
        fontFamily:'Helvetica Neue',
     color:"red"
 },
  root: {
       fontFamily:'Helvetica Neue',
      marginLeft:'200px',
     width: '80%',
  
    overflowX: 'auto',
  },
  table: {
  fontFamily:'Helvetica Neue',
    minWidth: 100,
  },
  arrowDropUp:{
      color:'#000000'
  },

});


function SimpleTable(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
     const baseUrl = 'https://virtuelodc-backend.herokuapp.com/quess'
   const [users, setUsers] = useState([]);
     const [FiltredUsers, setFiltredUsers] = useState([]);
 const [age, setAge] = React.useState('');

   const handleChange = (event) => {
     setAge(event.target.value);
   };

   const [sortOrder, setSortOrder] = useState('asc');
 const DropdownIndicator = (props) => (
         <div {...props.innerProps} className={classes.dropdown}>
             <button style={{backgroundColor:"white",border: "none"}}> <img src={logo} alt="" /></button>
             {/* <UnfoldMoreIcon   className={classes.arrowDropUp}/> */}
           
        </div>
     );


   useEffect(() => {
    axios.get(baseUrl).then(result => {
             setUsers(result.data.quess)
             console.log(result.data.quess)
       setFiltredUsers(result.data.quess)
       // console.log('test',result.data);


    })
  }, []);

  return (
    <Paper className={classes.root}>
      <TableContainer component={Paper} >

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell   >
                <TableSortLabel
                //style={{ color:"#000000"}}
                
                 style={{fontWeight:'bold', fontSize:'16px'}}
                   IconComponent={DropdownIndicator}
                  active={true}
                 direction={sortOrder}
               // onClick={() => requestSort()}
                >
               
           Session Information
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">
              <TableSortLabel
       style={{fontWeight:'bold', fontSize:'16px'}}
                  active={true}
                  direction={sortOrder}
                   IconComponent={DropdownIndicator}
                 // onClick={() => requestSort2()}
                >
                 Full Name
                </TableSortLabel>
                </TableCell>
              <TableCell align="center"
              
              > 
               <TableSortLabel
               style={{fontWeight:'bold', fontSize:'16px'}}
            IconComponent={DropdownIndicator}
                  active={true}
                 direction={sortOrder}
                 // onClick={() => requestSort2()}
                >
                Profession
                </TableSortLabel>
              
              </TableCell>
              <TableCell align="center">
              
              
                <TableSortLabel
                 style={{fontWeight:'bold ', fontSize:'16px'}}
              IconComponent={DropdownIndicator}
                  active={true}
                  direction={sortOrder}
                 // onClick={() => requestSort2()}
                >
                Email
                </TableSortLabel>
              </TableCell>
              <TableCell align="left">
                <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      
          <InputLabel id="demo-simple-select-filled-label" style={{color:'black',fontWeight:'bold '}}>Filtre</InputLabel>

          <Select
         style={{color:'black',fontWeight:'bold '}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
         onChange={handleChange}
        >
          
          <MenuItem style={{color:'black',fontWeight:'bold '}} value={1}>All</MenuItem>
          <MenuItem  style={{color:'black',fontWeight:'bold '}} value={2}>New</MenuItem>
          <MenuItem   style={{color:'black',fontWeight:'bold '}} value={3}>Favorites</MenuItem>
          <MenuItem  style={{color:'black',fontWeight:'bold '}} value={4}>Questions</MenuItem>
          <MenuItem style={{color:'black',fontWeight:'bold '}} value={5}>Deleted</MenuItem>
        </Select>
      </FormControl>
    </Box>   
               </TableCell>

            </TableRow>
          </TableHead>

    
           <TableBody>
            {FiltredUsers.map((row, id) => (
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{fontWeight:'regular', height:'40px',width:'240px',fontSize:'16px'}}>
                  {row.sessioninformation} 
                </TableCell>
                <TableCell align="center" style={{fontWeight:'regular', height:'40px',width:'240px',fontSize:'16px'}}>
                
                

                {row.nom} {row.prenom}
                
                
                
                </TableCell>
                <TableCell align="center" style={{fontWeight:'regular', height:'40px',width:'240px',fontSize:'16px'}}>{row.job}</TableCell>
                <TableCell align="center"  style={{fontWeight:'regular', height:'40px',width:'240px',fontSize:'16px'}}> {row.email}  </TableCell>
                <TableCell align="left"  style={{fontWeight:'regular', height:'40px',width:'240px',fontSize:'16px'}}>   
                
                <button style={{backgroundColor:"white",border: "none"}}> <img src={fav} alt="" /></button>
                <button style={{backgroundColor:"white",border: "none"}}> <img src={close} alt="" /></button>

                
                <button  style={{backgroundColor:"white",border: "none"}} onClick={handleClickOpen}>
                {/* <Link to={{
                      pathname: '/More',
                      state: row
                    }} >
                                
                                  </Link> */} <img src={question} alt=""/>  
               

      </button>

            
                    </TableCell>
              </TableRow>
            ))}
          </TableBody> 
        </Table>
      </TableContainer>
  




  <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description" >
          <div class="container">
  <div class="row">
    <div class="col-sm">
    <h6 style={{color:"#FF7900"}}>Session N°9324 </h6>
    
    
    
    <div className="form-group">
                    <label style={{color:'black',fontWeight:'bold '}} >Fullname</label>
                    <input style = {{color:'black',fontWeight:'bold ', borderRadius: "1px"}}type="text" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label style={{color:'black',fontWeight:'bold '}}> Profession</label>
                    <input style = {{ borderRadius: "1px"}} type="text" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label style={{color:'black',fontWeight:'bold '}}> Email</label>
                    <input  style = {{ borderRadius: "1px"}}type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label style={{color:'black',fontWeight:'bold '}}>Label</label>
                    <input  style = {{ borderRadius: "1px"}}type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label style={{color:'black',fontWeight:'bold '}}>Label</label>
                    <input  style = {{ borderRadius: "1px"}}type="email" className="form-control" placeholder="Enter email" />
                </div>
               
               
       </div>
       <div class="vl"></div>

    <div class="col-sm">
<h6 style={{color:'black',fontWeight:'bold '}}>Question</h6>
<p style={{fontWeight:'regular', height:'40px',width:'240px',fontSize:'16px', color:'black'}}> Aenean nec iaculis ex, vitae ornare eros. Integer tincidunt arcu sed ornare congue. Fusce eu urna mauris. Morbi dui magna, egestas id massa at, vulputate sodales orci. Pellentesque ultrices varius accumsan?</p>
   
  
    </div>
    
  </div>
</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      
    </Paper>

  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);