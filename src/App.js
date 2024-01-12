import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';

import Genres from './components/genres';
import Footer from './components/footer';
import Gallery from './components/gallaery';

//import ColorSchemesExample from './components/navBar2';
//import NavDropdownExample from './components/navBar2';
import BasicExample from './components/navBar2';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      {/* <BasicExample></BasicExample> */}
      <div class="container-fluid px-4">
        <Genres></Genres>
        <h4>Trending Now</h4>
        <Gallery title={"harry potter"}></Gallery>
        <h4>Watch it Again</h4>
        <Gallery title={"star wars"}></Gallery>
        <h4>New Releses</h4>
        <Gallery title={"The Land Before Time"}></Gallery>
      </div>
    
      <Footer></Footer>
  
      
    </div>
  );
}

export default App;
