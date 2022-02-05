import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Row } from 'react-bootstrap';


function App() {
  return (
    <div>
      <div className='App d-flex flex-column'>
        <Navbar />
        <Header />
        <Footer />
      </div>
      <div className='animatedwrapper'>
        <div className='dot dot--one'></div>
        <div className='dot dot--two'></div>
        <div className='dot dot--three'></div>
      </div>
    </div>
  );

}

export default App;
