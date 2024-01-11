import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navBar';
import Genres from './components/genres';
import Footer from './components/footer';
import Gallery from './components/gallaery';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Genres></Genres>
      <Gallery></Gallery>
      <Footer></Footer>
  
      
    </div>
  );
}

export default App;
