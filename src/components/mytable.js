import React from "react";

import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from '@material-ui/icons/ImportExport';
import movies from "./movies";
import "./table.css";
import Fab from '@material-ui/core/Fab';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

import StarIcon from '@material-ui/icons/Star';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import CloseSharpIcon from '@material-ui/icons/CloseSharp';


export default function App() {
  //const [button, setButton] = React.useState("Click");
  //const [lang, setLang] = React.useState(0);
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const styles = theme => ({
    fab: {
      margin: "2px",
    },
    extendedIcon: {
      top: "190px",
      left: "1513px",
      width: "67px",
      height: "17px",
      textalign: "left",
      font: "normal normal bold 14px/20px Helvetica Neue",
      letterSpacing: "-0.08px",
      color: "#FFFFFF",
      opacity: "1",
      borderRadius: "45px",
  
    },
  });
  
  const classes = styles();

  let columns = [
    {
      name: "Session information",
       
      selector: "year",
      sortable: true
    },
    {
      name: "Full name",
      selector: "year",
      sortable: true
    },
    {
      name: "Profession",
      selector: "year",
      sortable: true,
      right: true
    },
    {
        name: "Email",
        selector: "year",
        sortable: true,
        right: true,
      },
   
      {
        cell:(row) => <div><StarIcon   style = {{color:"orange",border:"20px"}} />
         <CloseSharpIcon color={'disabled'} size={'100%'}   /></div>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
      {
        cell:(row) =><Fab onClick={handleShow} variant="extended" aria-label="Delete" style = {{backgroundColor:"#000",color:"white",width:"110px",height:"35px",outline:"0"}} >
        
        <HelpOutlineIcon className={classes.extendedIcon} >Questions</HelpOutlineIcon>
        &nbsp;Questions
        
      </Fab>,
        ignoreRowClick: true,
        allowOverflow: false,
      }
  ];
// function handleButtonClick (state) {
//     console.log('clicked');
    
//   };
  let lang = {
    rowsPerPageText: "Rows per page:",
    rangeSeparatorText: "of"
  };

 
  console.log("Reader");
  return (
    <>
<Modal      style = {{ borderRadius: "1px"}}   show={show}
        onHide={() => setShow(false)}
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
    <div style={{width:"1100px",marginLeft:"340px",marginTop:"50px"}} className="App">

      <Card>
      
        <DataTable
          
          columns={columns}
          data={movies}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          pagination
          subHeader
          paginationComponentOptions={{
            rowsPerPageText: lang.rowsPerPageText,
            rangeSeparatorText: lang.rangeSeparatorText,
            noRowsPerPage: false
          }}
        />
      </Card>

    </div>
    </>
  );
}

