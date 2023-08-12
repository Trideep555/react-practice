import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Header(props) 
{
    return (
        <>
        <div className="heading">
        {props.heading}    
        </div> 
        <div className="container layer">
        <Button variant="primary" className='btn-task' onClick={()=> props.modal(true)}>Add task</Button>
        <Form.Select className='select' aria-label="Default select example">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
        </Form.Select>
        </div>
        
        </>
    )
}