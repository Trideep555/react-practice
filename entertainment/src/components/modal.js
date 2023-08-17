import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import ImageGallery from "react-image-gallery";
import parse from 'html-react-parser';
export default function ModalData(props) {
    const [data,setData]=useState("");
    const [images,setImages]=useState([]);
    //console.log(images);
    useEffect(()=>{
            if(props.data!==""){
              //console.log(props.data)
              if(props.value===0)
            axios.get(`https://api.themoviedb.org/3/movie/${props.data}?api_key=${process.env.REACT_APP_MOVIE_API}&append_to_response=videos,credits`).then(res =>
            {
                setData(res.data);
            })
            else if(props.value===1)
            axios.get(`https://api.themoviedb.org/3/tv/${props.data}?api_key=${process.env.REACT_APP_MOVIE_API}&append_to_response=videos,credits`).then(res =>
            {
                setData(res.data);
            })
            else if(props.value===2)
            axios.get(`https://saavn.me/songs?id=${props.data}`).then(res=> 
          {
            setData(res.data.data[0]);
            //console.log(res.data.data);
          })
          else{
            if(props.type==='Games'){
          axios.get(`https://api.rawg.io/api/games/${props.data}?key=${process.env.REACT_APP_GAMES_API}`).then(res =>{ 
            setData(res.data);
            axios.get(`https://api.rawg.io/api/games/${props.data}/screenshots?key=${process.env.REACT_APP_GAMES_API}`).then(res2 => {
              let newimg=[];
              for(let i of res2.data.results)
              {
                  newimg.push({original:i.image});
              }
              setImages(newimg);
              //console.log(images);
            })

        });
      }
      else{
        axios.get(`https://api.rawg.io/api/${props.type.toLowerCase()}/${props.data}?key=${process.env.REACT_APP_GAMES_API}`).then(res =>{ 
            setData(res.data);
      });

      }
      }
            
        
        }
        
    },[props.data])
    return(<>
    {props.value===0 ||  props.value===1 ?
     data!=="" && <Modal
        show={props.modalShow && data!==""}
        onHide={()=> { props.setModalShow(false); setData("");  setImages([]);}}
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
        <div className="d-flex justify-content-center panel">
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
              <img src={item2.profile_path ? `https://image.tmdb.org/t/p/w500/${item2.profile_path}`: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} height="100" width="100" className='act-pic' alt={`act ${index2}`} />
              {item2.name}
            </div>            
          ))}
          </div>
          {props.value===0 ? <>
          <div className='d-flex justify-content-center overview'>Details</div>
          <div className='row'>
            <div className='col-md-6'>
              Release Date - {data.release_date}
            </div>
            <div className='col-md-6'>
              Budget - {data.budget}
            </div>
          </div></> :  <>
          <div className='d-flex justify-content-center overview'>Details</div>
          <div className='row'>
            <div className='col-md-6'>
              Total Episodes - {data.number_of_episodes}
            </div>
            <div className='col-md-6'>
              No. of Seasons - {data.number_of_seasons}
            </div>
          </div></> }
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
          <Button variant="primary" onClick={()=> { props.setModalShow(false); setData(""); setImages([]);}}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>: props.value===2 ? data!=="" && <Modal
        show={props.modalShow && data!==""}
        onHide={()=> { props.setModalShow(false); setData("");}}
        backdrop="static"
        keyboard={false}
        size='xl'
        contentClassName='modal-height'
        centered
      >
        <Modal.Header closeButton className='dark'>
          <Modal.Title>{data!=="" && data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='dark'>
        <div className="d-flex justify-content-center panel">
          <div className="video">
          <a href={data!=="" && data.downloadUrl[4].link} download><img className='download' alt="title" src={data!==""  && "https://upload.wikimedia.org/wikipedia/commons/3/35/1_Monet_Play_logo.png"} /></a>
        </div>
        <div className='content'>
          <div className='d-flex justify-content-center overview'>Overview</div>
          <div className='row'>
            <div className='col-md-6'>
              Label - {data.label}
            </div>
            <div className='col-md-6'>
              Release Date - {data.releaseDate}
            </div>
          </div>
          <div className='d-flex justify-content-center overview'>Singers</div>
          <div className="genres">
          {data!=="" && data.primaryArtists.split(",").map((item2,index2)=>(
          <Badge bg="light"  className='pills pill2' text="dark" key={index2}>
            {item2}
        </Badge>
          ))}
          </div>
          <div className='d-flex justify-content-center overview'>Details</div>
          <div className='row'>
            <div className='col-md-7'>
              Duration - {data.duration+" Minutes"}
            </div>
            <div className='col-md-7'>
            Play Count - {data.playCount+ " Times"}
            </div>
            <div className='col-md-7'>
            <Button variant='Primary' className='savan-btn' ><a href={data.url} style={{textDecoration:"none",color:"#030e30"}}><i className="fa-solid fa-music"></i>Listen On Jio Savaan</a></Button>
            </div>
            
          </div>
          </div> 
           
        </div>  
        
        </Modal.Body>
        <Modal.Footer className='dark'>
          <Button variant="primary" onClick={()=> { props.setModalShow(false); setData("");}}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>: <Modal
        show={props.modalShow && data!==""}
        onHide={()=> { props.setModalShow(false); setData("");}}
        backdrop="static"
        keyboard={false}
        size='xl'
        contentClassName='modal-height'
        centered
      >
        <Modal.Header closeButton className='dark'>
          <Modal.Title>{data!=="" && data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='dark'>
        <div className="d-flex justify-content-center panel">
          <div className="video">
            {props.type==="Games" ?
          <ImageGallery items={images} originalHeight="200px" originalWidth="200px"/> : <img src={data.image_background} className='trailer' height={"200px"} width={"200px"} alt='no-img' /> }
          </div>
        <div className='content'>
          <div className='d-flex justify-content-center overview'>Overview</div>
          {data !== "" && parse(data.description)}
         
         {props.type==='Games' ? <><div className='row'>
            <div className='col-md-6'>
              Rating - {data.rating+'⭐'}
            </div>
            <div className='col-md-6'>
              Release Date - {data.released}
            </div>
          </div>
          <div className='d-flex justify-content-center overview'>Genres</div>
          <div className="genres">
          {data!=="" && data.genres.map((item2,index2)=>(
          <Badge bg="light"  className='pills pill2' text="dark" key={index2}>
            {item2.name}
        </Badge> 
          ))}
          </div>
          <div className='d-flex justify-content-center overview'>Platforms</div>
          <div className="genres">
          {data!=="" && data.stores.map((item2,index2)=>(
          <Badge bg="light"  className='pills pill2' text="dark" key={index2}>
            {item2.store.name}
        </Badge> 
          ))}
          </div>
          <div className='d-flex justify-content-center overview'>Details</div>
          <div className='row'>
            <div className='col-md-6'>
              Metacritic - {data.metacritic}
            </div>
            <div className='col-md-6'>
            Rating - {data.esrb_rating ? data.esrb_rating.name: "Unkown"}
            </div>
            </div>
            <div className='row'>
            <div className='col-md-6'>
              Game in Series - {data.game_series_count}
            </div>
            <div className='col-md-6'>
            Acheivements - {data.achievements_count}
            </div>
            <div className='col-md-7'>
            <Button variant='Primary' className='savan-btn' ><a href={data.website} style={{textDecoration:"none",color:"#030e30"}}><i className="fa-solid fa-music"></i>Website</a></Button>
            </div>
            <div className='d-flex justify-content-center overview'>Developers</div>
          <div className="genres">
          {data!=="" && data.developers.map((item2,index2)=>(
          <Badge bg="light"  className='pills pill2' text="dark" key={index2}>
            {item2.name}
        </Badge> 
          ))}
          </div>
          </div> </> : ""}
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