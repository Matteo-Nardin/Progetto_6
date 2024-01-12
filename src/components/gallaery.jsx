import { Component } from "react";
//import { Col, Row, Image } from 'react-bootstrap'
//import Image from 'react-bootstrap/Image';
import SinglePicture from "./singlePicture";
//import key from "../apiKey.json"

class Gallery extends Component{

    state={
        reservations: []
    }

    componentDidMount = async () => {
        try {
            const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=80f3bc8c&s="+this.props.title
            )
            if(response.ok) {
                const data = await response.json();
                this.setState({ reservations: data.Search });
            } else {
                console.log('error while fetching')
            }
        }
        catch(e) { console.log(e) }
        console.log(this.state.reservations.Search)  
    }

    stato = () => {console.log(this.state.reservations)}

    render(){
        console.log(this.state.reservations.Search, "render")  
        return(
            <>
            {/* {console.log(this.state.reservations, "return") } */}
                <h4> </h4>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
                    {this.state.reservations.map(x =>
                        <SinglePicture src={x} alt={x}></SinglePicture>
                        
                        // <Image src={x.Poster} alt={x.Title} fluid className='' />
                        )
                    }
                </div>
            </>

        );
    }
}

export default Gallery