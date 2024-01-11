// import SingleComment from "./SingleComment"
import ListGroup from 'react-bootstrap/ListGroup';

//array come props

// const CommentList = ({commenti}) => (
const SinglePicture = (props) => (
    <ListGroup as="ol" numbered>
        {props.commenti.map((b)=>{
         return console.log(b.Title);
        // return <SingleComment pluto={b} ></SingleComment>
        })}
       
    </ListGroup>
  )
  
  export default SinglePicture