import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';

export default function ModalData(props) {
    const [data,setData]=useState("");
    useEffect(()=>{
            if(props.data!==""){
            axios.get(`https://api.themoviedb.org/3/movie/${props.data}?api_key=${process.env.REACT_APP_MOVIE_API}&append_to_response=videos,credits`).then(res =>
            {
                setData(res.data);
            })
        
        }
        
    },[props.data])
    return(<>
     {data!=="" && <Modal
        show={props.modalShow && data!==""}
        onHide={()=> { props.setModalShow(false); setData("");}}
        backdrop="static"
        keyboard={false}
        size='xl'
        contentClassName='modal-height'
        centered
      >
        <Modal.Header closeButton className='dark'>
          <Modal.Title>{data!=="" && data.original_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='dark'>
        <div class="d-flex justify-content-center panel">
          <div className="video">
          <iframe className='trailer' title="title" src={data!==""  && 'https://www.youtube.com/embed/'+(data.videos.results.filter(ele => ele.name==="Final Trailer")[0] ? data.videos.results.filter(ele => ele.name==="Final Trailer")[0].key : data.videos.results[0] ? data.videos.results[0].key: "")} />
        </div>
        <div className='content'>
          <div className='d-flex justify-content-center overview'>Overview</div>
          {data !== "" && data.overview}
          <div className='d-flex justify-content-center overview'>Actors</div>
          <div className='act-photos'>
          {data!=="" && data.credits.cast.filter(ele => ele.known_for_department==='Acting').slice(0,6).map((item2,index2)=>(
            <div className="actors" key={index2}>
              <img src={`https://image.tmdb.org/t/p/w500/${item2.profile_path}`} height="100" width="100" className='act-pic' alt={`act ${index2}`} />
              {item2.name}
            </div>            
          ))}
          </div>
          <div className='d-flex justify-content-center overview'>Details</div>
          <div className='row'>
            <div className='col-md-6'>
              Release Date - {data.release_date}
            </div>
            <div className='col-md-6'>
              Budget - {data.budget}
            </div>
          </div>
          <div className='d-flex justify-content-center overview'>Genres</div>
          <div className="genres">
          {data!=="" && data.genres.map((item2,index2)=>(
          <Badge bg="light"  className='pills pill2' text="dark" key={index2}>
            {item2.name.substr(0,10)}
        </Badge>
          ))}
          </div>
        </div>
        </div>  
        
        </Modal.Body>
        <Modal.Footer className='dark'>
          <Button variant="primary" onClick={()=> { props.setModalShow(false); setData("");}}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>}
    </>)
}