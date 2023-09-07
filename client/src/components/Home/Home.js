import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; // Create a CSS file for styling
import Navbar from '../Navbar/Navbar';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Auto-rotate images
    autoplaySpeed: 2000, // Interval in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
               <Navbar/>
    <div className="home-page">
      <Slider {...settings}>
        <div>
          <img src="https://i.ytimg.com/vi/e5g1MqWOMNI/maxresdefault.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="https://cdn.givind.org/static/images/campaign/target-image1.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="https://images.jdmagicbox.com/quickquotes/listicle/listicle_1684382273524_k358b_1040x500.jpg" alt="Image 3" />
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default Home;
