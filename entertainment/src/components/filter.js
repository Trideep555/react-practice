import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';

export default function Filter(props) 
{
    const [filt,setFilt]=useState("");
    
    useEffect(()=>{
        if(props.filter===0)
        setFilt({0 : "Now Playing",1:"Popular",2:"Top Rated",3:"Upcoming"})
        else if(props.filter===1)
        setFilt({0 : "Airing Today",1:"On the Air",2:"Top Rated",3:"Popular"})
        else
        setFilt({0 : "Songs",1:"Albums",2:"Artists"})
        
    },[props.filter])
    return(<>
    <div className="filter">
      <Badge bg="light" onClick={()=> { props.setData(filt[0]); props.page(1); props.total_page(1); props.setQuery("");} } className='pills' text="dark">
        {filt[0]}
      </Badge>
      <Badge bg="light" onClick={()=> { props.setData(filt[1]); props.page(1); props.total_page(1); props.setQuery("");} } className='pills' text="dark">
      {filt[1]}
      </Badge>
      <Badge bg="light" onClick={()=> { props.setData(filt[2]); props.page(1); props.total_page(1); props.setQuery("");} } className='pills' text="dark">
      {filt[2]}
      </Badge>
      {filt[3] && <Badge bg="light" onClick={()=> { props.setData(filt[3]); props.page(1); props.total_page(1); props.setQuery("");} } className='pills' text="dark">
      {filt[3]}
      </Badge> }
     
     </div>

    </>)
}