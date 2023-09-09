import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { BsFillHouseHeartFill } from 'react-icons/bs';
import { BiMap, BiLeftArrow , BiRightArrow} from 'react-icons/bi';
import './Home.css'; // Create a CSS file for styling
import Navbar from '../Navbar/Navbar';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
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
      
      <div className="step-container">
          <div className="step">
            <div className="step-icon">
              <i className="fas fa-search"><AiOutlineSearch/></i> 
            </div>
            <h2>Explore Campaigns</h2>
            <p>Visitors can explore diverse charitable campaigns on the site.</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <i className="fas fa-hand-holding-heart"><IoMdCheckmarkCircleOutline/></i> 
            </div>
            <h2>Select a Campaign</h2>
            <p>Donors select a campaign that aligns with their interests or passions.</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <i className="fas fa-donate"><BsFillHouseHeartFill/></i> 
            </div>
            <h2>Make a Donation</h2>
            <p>Donors have the option to contribute to the chosen campaign.</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <i className="fas fa-share"><BiMap/></i> 
            </div>
            <h2>Track Impact</h2>
            <p>Donors can track their donation's impact and campaign progress.</p>
          </div>
        </div>
    </div>
    </div>
    
  );
};

export default Home;
