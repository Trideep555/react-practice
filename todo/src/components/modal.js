import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ModalShow(props) { 
    const [data,setData]=useState({title:"",status:"Incomplete"})
    const HandleChange= (event) =>{
      if(event.target.name==="title")
      setData({...data,[event.target.name]: event.target.value});
      else
      setData({...data,status: event.target.value});
    }
    const HandleSubmit = ()=>{
      if(data.title===""){
        toast.error("Please Enter Title", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          return;
    }
      props.setTodo(ele => [...ele,data]);
      
    }
    return(<>
     <Modal
      show={props.modalshow}
      onHide={() => props.modal(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add ToDo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal'>
        <div>
      <Form.Label htmlFor="title">Title</Form.Label>
      
      <Form.Control type="text" onChange={HandleChange} name="title" value={data.title} required  />
    </div>
    <div>
      
    <Form.Label htmlFor="status">Status</Form.Label>
        
    <Form.Select aria-label="Default select example" name="status" onChange={HandleChange}>
      <option value="incomplete">Incompleted</option>
      <option value="complete">Completed</option>
      
    </Form.Select>
    </div>
    
      </Modal.Body>
      <Modal.Footer className='footer'>
        <Button className='add' onClick={HandleSubmit}>Add Task</Button>
        <Button className='close' onClick={() => props.modal(false)}>Cancel</Button>
      </Modal.Footer>
    </Modal>
    <ToastContainer />
     
    </>)
}