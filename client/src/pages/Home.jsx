import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import myImage1 from '../assets/images/Logo.png';
import myImage2 from '../assets/images/gettyimages-1256375779.jpg';
import myImage3 from '../assets/images/gym.jpg';
import myImage4 from '../assets/images/outdoorexercise.jpg';
import myImage5 from '../assets/images/water.jpg';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Your Fitness Tracker</h1>
      <h2>FITNESS FIRST</h2>
      <Carousel>
      <div>
          <img src={myImage1} alt="Logo" />
        </div>
        <div>
          <img src={myImage2} alt="Plank" />
        </div>
        <div>
          <img src={myImage3} alt="Lifting" />
        </div>
        <div>
          <img src={myImage4} alt="Running" />
        </div>
        <div>
          <img src={myImage5} alt="Drinking water" />
        </div>
      </Carousel>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/Signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default HomePage;
