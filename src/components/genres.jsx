import { Grid3x3GapFill, GridFill } from 'react-bootstrap-icons';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function Genres() {
    return (
        <>
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <h2 className="mb-4">TV Shows</h2>
                    <div className="dropdown ml-4 mt-1">
                        <button
                            className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style={{backgroundColor: "#221f1f"}}
                        >
                            Genres &nbsp;
                        </button>
                        <div
                            className="dropdown-menu bg-dark"
                            aria-labelledby="dropdownMenuButton"
                        >
                            <a className="dropdown-item text-white bg-dark" href="#Link">Comedy</a>
                            <a className="dropdown-item text-white bg-dark" href="#Link">Drama</a>
                            <a className="dropdown-item text-white bg-dark" href="#Link">Thriller</a>
                        </div>
                    </div>
                </div>
                <div>
     
                    <GridFill color="#f5f5f1" size={20}></GridFill>
            
                    <Grid3x3GapFill color="#f5f5f1" size={20}/>
       
                </div>
            </div>
        
        </>
    );
}

export default Genres;