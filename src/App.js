import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import MainInfo from './components/MainInfo/MainInfo.jsx';
//import MainPhotos from './components/MainPhotos';
import Products from './components/Products/Products';
import Reviews from './components/Reviews/Reviews.jsx';
import AboutInfo from './components/AboutInfo/AboutInfo.jsx';
import Info from './components/Info/Info.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <MainInfo />
      <Info />
      <Products />
      <AboutInfo />
      <Reviews />
      <Footer />
      <div id="modal-root"></div>
    </div>
  );
}

export default App;
