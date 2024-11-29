import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import Header from './components/Header';
import MainInfo from './components/MainInfo';
import MainPhotos from './components/MainPhotos';
import Products from './components/Products/Products';
import Reviews from './components/Reviews';
import AboutInfo from './components/AboutInfo';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPhotos />
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
