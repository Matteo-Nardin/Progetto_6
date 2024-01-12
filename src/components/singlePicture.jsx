const SinglePicture = (props) => (
    <>
     
        <div className="col mb-2 px-1">
            <img className="img-fluid" src={props.src.Poster} alt={props.alt.Title} style={{maxWidth: "301px", maxHeight: "164px"}}/>
        </div>
     
    </>
)
  
export default SinglePicture