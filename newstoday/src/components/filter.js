import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

export default function Filter(props) {
    
    return (<>
     <Stack direction="horizontal" className='filters' gap={3}>
     <Badge pill bg="primary" className={props.filt.category!=="" ? "pillsfilt active" : "pillsfilt"} onClick={() => { if(props.filt.category!=='') props.setfilt({...props.filt,category:""}) } }>
     <i className={props.filt.category==="" ? "fa-solid fa-filter" : "fa-solid fa-filter-circle-xmark"}></i>
      </Badge>
      <Badge pill bg="primary" className={props.filt.category==="science" ? "pills active" : "pills"} onClick={() => props.setfilt({...props.filt,category:"science"})}>
        Science
      </Badge>
      <Badge pill bg="primary" className={props.filt.category==="sports" ? "pills active" : "pills"} onClick={() => props.setfilt({...props.filt,category:"sports"})}>
        Sports
      </Badge>
      <Badge pill bg="primary" className={props.filt.category==="business" ? "pills active" : "pills"} onClick={() => props.setfilt({...props.filt,category:"business"})}>
         Business
      </Badge>
      <Badge pill bg="primary" className={props.filt.category==="entertainment" ? "pills active" : "pills"} onClick={() => props.setfilt({...props.filt,category:"entertainment"})}>
        Entertainment
      </Badge>
      <Badge pill bg="primary" className={props.filt.category==="general" ? "pills active" : "pills"} onClick={() => props.setfilt({...props.filt,category:"general"})}>
        General
      </Badge>
      <Badge pill bg="primary" className={props.filt.category==="health" ? "pills active" : "pills"} onClick={() => props.setfilt({...props.filt,category:"health"})}>
        Health
      </Badge>
      <Badge pill bg="primary" className={props.filt.category==="technology" ? "pills active" : "pills"} onClick={() => props.setfilt({...props.filt,category:"technology"})} >
        Technology
      </Badge>
      </Stack>
    </>)
}