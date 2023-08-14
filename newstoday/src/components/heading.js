export default function Heading(props) {
    
    return(<>
    <h2 className="heading">{props.title.category=== '' ? "Top News in India" : "Top News in "+props.title.category[0].toUpperCase()+props.title.category.slice(1) }</h2>
    </>)
}