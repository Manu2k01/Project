import React from 'react';
import './Project.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars ,  faRightLong} from "@fortawesome/free-solid-svg-icons";
import Image1 from '../assets/ProjectImage.jpg';
import Image2 from '../assets/ProjectImage1.jpeg';
import Image3 from '../assets/ProjectImage2.jpg';
import Image4 from '../assets/ProjectImage3.jpg';

const App = () => {


  return (
    <div className='Project_start'>
      <div className='Project_NavbarMain'>
        <div className='Project_Navbar'>
          <div className='Project_first'>
            <p>Home</p>
            <p >Order</p>
            <p  >Food</p>
            <p  >Restaurant</p>
            <p  className='one'>Testimonials</p>
            <p  >Contact Us</p>
          </div>
          <div className='Project_icon' style={{ 'fontSize': '28px' }}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      <div className='Project_second'>
        <div className='Project_content'>
          <div className='Main_content'>
            <p className='text'>LOREM IPSUM</p>
          </div>
          <div className='second_content'>
            <p className='text1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id est vitae dolor rhoncus tristique. Maecenas metus quam,
              rhoncus euismod lorem in, sollicitudin viverra eros. Donec
              dictum luctus quam ut tristique. Curabitur nec faucibus purus.
              Quisque congue sem nec justo mollis, in tincidunt erat pretium.
              Sed pulvinar, massa ac porta viverra.</p>
          </div>
          <div className='third_content'>
            <p className='text2'>Click Me</p>
          </div>
        </div>
        <div className='Project_image1'>
          <img className='image1' src={Image1} alt='image1' />
        </div>
      </div>
      <div className='Project_third'>
        <div className='project_three'>
          <div className='Project_box'>
            <div className='project_box2'>
              <img className='Image2' src={Image2} alt='Image2' />
              <img className='Image2' src={Image3} alt='Image3' />
            </div>
            <div className='Project_box1'>
              <img  className='Image3' src={Image4} alt='Image4' />
            </div>
          </div>
        </div>
        <div className='Project_one'>
          <div className='Project_hover'>
            <p>LOREM IPSUM</p>
           <p className='text5'>LOREM IPSUM SET ADEMIR</p>
           <p>Click <FontAwesomeIcon icon={faRightLong} /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
