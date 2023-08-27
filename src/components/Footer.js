import map from '../img/map.png';
import phone from '../img/phone.png';
import massag from '../img/massag.png';
import Vector from '../img/Vector.png'
import Group from '../img/Group.png';




function Footer() {
  return(
    <footer>
      <div className='run_box'>
          <div className="footer container">
            <div className="contact__us">Contact Us
              <div className='flex'>
                <img src={map} alt='map' className='map' ></img>
                <p className="title-text">329 Queensberry Street, North Melbourne VIC 3051, Australia.</p> 
              </div>
              <div className='flex'>
                <img src={phone} alt='phone' className='phone' ></img>
                <p className="title-number">123 456 7890</p>
              </div>
              <div className='flex'>
                <img src={massag} alt='messeg'className='massag'></img>
                <p className="support">support@houzing.com</p>
              </div>
            </div>
            <div className="contact__us">Discover
              <p className="m-top-bottom">Chicago</p>
              <p className="m-top-bottom">Los Angeles</p>
              <p className="m-top-bottom">Miami</p>
              <p>New York</p>
            </div>
            <div className="contact__us">Lists by Category
                <p className="m-top-bottom">Apartments</p>
                <p className="m-top-bottom">Condos</p>
                <p className="m-top-bottom">Houses</p>
                <p className="m-top-bottom">Offices</p>
                <p className="m-top-bottom">Retail</p>
                <p>Villas</p>
            </div>
            <div className="contact__us">Lists by Category
                <p className="m-top-bottom">About Us</p>
                <p className="m-top-bottom">Terms & Conditions</p>
                <p className="m-top-bottom">Support Center</p>
                <p>Contact Us</p>
            </div>
          </div>
            <div className="line"></div>
          <div className="container d-flex">
            <div className="last__box"> <img src={Vector} alt='vector'></img> Houzing</div>
            <div className='group_check'>
                <div className="last__info">Copyright © 2021 CreativeLayers. All Right Reserved.
                <div className='in_check'>
                  <img src={Group} alt='group' className='group'></img>
                </div>
                </div>
            </div>
            
          </div> 
      </div>
      
  </footer>
  )
}


export default Footer