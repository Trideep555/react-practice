import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards(props) {
   return (<>
    <div className="card-grp container">
        {props.data && props.data.map((item,index)=> ( 
    <Card key={index} style={{ width: '18rem' }}>
      <Card.Img variant="top" className='image' src={item.urlToImage ? item.urlToImage: "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg" } />
      <Card.Body>
        <Card.Title className='title'>{item.title}</Card.Title>
        <h5 className='author'><i className="fa-solid fa-pen-nib"></i>&nbsp;{item.author}</h5>
          
        <Card.Text>
          {item.description && item.description.substring(0,50)+"..."}
        </Card.Text>
        <div className='d-flex justify-content-end publish'><i className="fa-solid fa-calendar-plus"></i>&nbsp;{item.publishedAt}</div>
        <Button variant="primary" className='read'><a href={item.url} className='more'>Read More</a></Button>
      </Card.Body>
    </Card>
    ))}
    
    </div>
    </>);

}