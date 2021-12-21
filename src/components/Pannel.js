import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Select from '@material-ui/core/Select';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
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
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import './table.css'
import GradeIcon from '@material-ui/icons/Grade';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import Paper from '@material-ui/core/Paper';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
const styles = theme => ({
  
  

 test:{
        fontFamily:'Helvetica Neue',
     color:"red"
 },
  root: {
       fontFamily:'Helvetica Neue',
      marginLeft:'200px',
     width: '80%',
    marginTop:' 90px',
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

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function SimpleTable(props) {
  const { classes } = props;
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const baseUrl = 'https://fakestoreapi.com/users'
  const [users, setUsers] = useState([]);
  const [FiltredUsers, setFiltredUsers] = useState([]);
 const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [sortOrder, setSortOrder] = useState('asc');
 const DropdownIndicator = (props) => (
        <div {...props.innerProps} className={classes.dropdown}>
            <UnfoldMoreIcon   className={classes.arrowDropUp}/>
           
        </div>
    );
  useEffect(() => {
    axios.get(baseUrl).then(result => {
      setUsers(result.data);
      setFiltredUsers(result.data)
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
               // style={{ color:"#000000"}}
                
                 style={{fontWeight:'bold', fontSize:'15px'}}
                   IconComponent={DropdownIndicator}
                  active={true}
                  direction={sortOrder}
                  //onClick={() => requestSort()}
                >
           Session Information
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">
              <TableSortLabel
       style={{fontWeight:'bold', fontSize:'15px'}}
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
               style={{fontWeight:'bold', fontSize:'15px'}}
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
                 style={{fontWeight:'bold ', fontSize:'15px'}}
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
          
          <MenuItem style={{color:'black',fontWeight:'bold '}} value={10}>All</MenuItem>
          <MenuItem  style={{color:'black',fontWeight:'bold '}} value={20}>New</MenuItem>
          <MenuItem   style={{color:'black',fontWeight:'bold '}} value={20}>Favorites</MenuItem>
          <MenuItem  style={{color:'black',fontWeight:'bold '}} value={30}>Questions</MenuItem>
          <MenuItem style={{color:'black',fontWeight:'bold '}} value={30}>Deleted</MenuItem>
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
                <TableCell component="th" scope="row" >
                  {row.name.firstname}  {row.name.lastname}
                </TableCell>
                <TableCell align="center">
                
                
                {row.email}
                
                
                
                </TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{row.address.city} {row.address.city} {row.address.street} {row.address.number}   </TableCell>
                <TableCell align="left" >   
                
                    
                 <GradeIcon   style = {{color:"#FF7900",  fontSize: "2.5em"}} /> &nbsp;
                 
                 <CloseOutlinedIcon   style = {{color:"#FF7900",  fontSize: "2.5em"}} />  &nbsp;
                 <Button onClick={handleOpen}>Open modal</Button>

            
                    </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
      </Modal>



      <Modal      style = {{ borderRadius: "1px"}} 
       open={open}
        onClose={handleClose}
       
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title" >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div class="container">
  <div class="row">
    <div class="col-sm">
    <h6 style={{color:"#FF7900"}}>Session N°9324 </h6>
    
    
    
    <div className="form-group">
                    <label >Fullname</label>
                    <input style = {{ borderRadius: "1px"}}type="text" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label> Profession</label>
                    <input style = {{ borderRadius: "1px"}} type="text" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label> Email</label>
                    <input  style = {{ borderRadius: "1px"}}type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Label</label>
                    <input  style = {{ borderRadius: "1px"}}type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Label</label>
                    <input  style = {{ borderRadius: "1px"}}type="email" className="form-control" placeholder="Enter email" />
                </div>
               
               
       </div>
       <div class="vl"></div>

    <div class="col-sm">
<h6>Question</h6>
<p> Aenean nec iaculis ex, vitae ornare eros. Integer tincidunt arcu sed ornare congue. Fusce eu urna mauris. Morbi dui magna, egestas id massa at, vulputate sodales orci. Pellentesque ultrices varius accumsan?</p>
   
  
    </div>
    
  </div>
</div>


        </Modal.Body>
        <Modal.Footer>
        <Button  style = {{background:'white',borderWidth:1,borderColor:'#000',color:'black',marginLeft:'-100px',borderRadius: "1px"}} variant="secondary" onClick={handleClose}>
         Delete
          </Button>
        <Button  style = {{background:'#000',color:"white",border:"20px", borderRadius: "1px"}} variant="secondary" onClick={handleClose}>
          Add to favorites
          </Button>
          <Button  style = {{background:'#FF7900',color:"black",border:"20px", marginLeft:"400px",borderRadius: "1px"}} variant="secondary" onClick={handleClose}>
          Send mail
          </Button>
        </Modal.Footer>
      </Modal>
    </Paper>

  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);