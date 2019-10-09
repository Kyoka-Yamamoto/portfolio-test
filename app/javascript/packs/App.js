import React, {useState} from 'react';
import './App.css';

import Header from './components/Header'
import LandingCarousel from './components/LandingCarousel'
import LazyLoadContainer from './components/LazyLoadContainer'

function App() {
  const [activeImage, setActiveImage] = useState(1)
  return (
    <React.Fragment>
      <Header />
      <div className="main-container">
        <LandingCarousel activeImage={activeImage} setActiveImage={setActiveImage}/>
        <LazyLoadContainer>
        </LazyLoadContainer>
      </div>
    </React.Fragment>
  );
}

export default App;
