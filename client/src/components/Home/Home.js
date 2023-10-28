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
        <img src="https://sadsindia.org/wp-content/themes/fusion/images/hero/happy_children_SADS_1920x800.jpg" alt="Image 2" />
        </div>
        <div>
        <img src="https://donate.smilefoundationindia.org/images/shikshanaruke/DmEonEblPlNoVAFLZjHxCVIjHrS6Ljf15kUZLC57.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="https://www.savethechildren.org/content/dam/global/images/countries/vietnam/vietnam-girls-m111823-hero.jpg/_jcr_content/renditions/original.img.jpg" alt="Image 3" />
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

        <div className="green-background">
          <div className="events-text">Urgent cause </div>
          <div className="events-text2">We Help More Than 9k Children Every Year BigHearts is the largest global crowdfunding community connecting nonprofits, donors, and companies in nearly every country. We help nonprofits from </div>

          {/* Horizontal scrollable card container */}
          <div className="events-container2">
      <div className="eventcard">
        <img src="https://charite.solverwp.com/wp-content/uploads/2023/08/cause-two3-274x249.jpg" alt="Event 1" />
        <h2>The Right of Childen</h2>
        <p>Description of Event 1</p>
        <button>Donate</button>
      </div>

      <div className="eventcard">
        <img src="https://charite.solverwp.com/wp-content/uploads/2023/08/cause-two4-274x249.jpg" alt="Event 2" />
        <h2>Event 2</h2>
        <p>Integer pulvinar elementum iaculis. Phasellus non turpis in nisi semper</p>
        <button>Donate</button>
      </div>

      <div className="eventcard">
        <img src="https://charite.solverwp.com/wp-content/uploads/2023/08/cause-two5-274x249.jpg" alt="Event 3" />
        <h2>Event 3</h2>
        <p>Description of Event 3</p>
        <button>Donate</button>
      </div>
          </div>
          </div>
    </div>
    
    </div>
    
  );
};

export default Home;
