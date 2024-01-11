import { Component } from "react";
import Button from 'react-bootstrap/Button';
//import Image from 'react-bootstrap/Image';
import SinglePicture from "./singlePicture";

class Gallery extends Component{

    state={
        reservations: []
    }

    //80f3bc8c
    // getProduct = () => {

    //     fetch('http://www.omdbapi.com/?i=tt3896198&apikey=80f3bc8c&s=harry%20potter',
    //     {
    //         method: 'GET',
    //     }
    //     )
    //     .then(response => response.json())
    //     .then(json => this.setState({ reservations: json }))
    //     .catch(err => console.error(err))
    // }

    componentDidMount = async () => {
        try {
            const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=80f3bc8c&s=harry%20potter"
            )
            if(response.ok) {
                const data = await response.json();
                this.setState({ reservations: data });
            } else {
                console.log('error while fetching')
            }
        }
        catch(e) { console.log(e) }
        console.log(this.state.reservations.Search)  
    }

    stato = () => {console.log(this.state.reservations.Search)}

    render(){
        console.log(this.state.reservations.Search, "render")  
        return(
            <>
                {/* <div>
                    {this.state.reservations.Search.map( (x) => <p>{x.Title}</p> ) }
                </div> */}
               

                {/* <Image src={this.state.reservations.Search} thumbnail style={{width: "250px", height: "250px"}}/> */}
             
                {/* <Button variant="primary" onClick={this.getProduct}>Primary</Button> */}
                <Button variant="primary" onClick={this.stato}>State</Button>
                <SinglePicture immagini={this.state.reservations}></SinglePicture>
            </>

        );
    }
}

export default Gallery