import villa from '../img/villa.png';
import housebig from '../img/housebig.png';
import minihouse from '../img/minihouse.png';
import Ellipse from '../img/Ellipse.png';
import Ellipse11 from '../img/Ellipse11.png';
import Ellipse12 from '../img/Ellipse12.png';
import bed from '../img/bed.png';
import tilet from '../img/tilet.png';
import car from '../img/car.png';
import ruler from '../img/ruler.png';
import way from '../img/way.png';
import love from '../img/love.png';





function Main() {
  return(
    <main className='container'>
            <h1 className='big_text'>Properties</h1>
            <p className='more__text'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
            <p className='result'> <spana className='spana_1'>13,474 </spana>results</p>
 
          
            <div className='flex'>
                <div className='box-room'>
                    <img src={villa} alt='villa'></img>
                    <img src={Ellipse} alt='man' className='ellipse'></img>
                    <h4 className='text-h4'>New Apartment Nice Wiew</h4>
                    <p className='title-pr'>Quincy St, Brooklyn, NY, USA</p>
                    <div className='icon_box flex jcsb'>
                        <div className='mini-box'>
                          <img src={bed} alt='bed' className='bed'></img>
                          <p className='beds-room'>8 beds</p>
                        </div>
                        <div className='mini-box'>
                          <img src={tilet} alt='WC' className='bed'></img>
                          <p className='beds-room'>5 Baths</p>
                        </div>
                        <div className='mini-box'>
                          <img src={car} alt='car' className='bed'></img>
                          <p className='beds-room'>1 Garage</p>
                        </div>
                        <div className='mini-box'>
                          <img src={ruler} alt='ruler' className='bed'></img>
                          <p className='beds-room'>1200 Sq Ft</p>
                        </div>
                    </div>
                    <hr className='hr'/>
                    <div className='wrapper d-flex '>
                      <div className='wrap'>
                          <div className='slogan'>$2,800/mo</div>
                          <div className='meta'>$7,500/mo</div>
                      </div>
                      <div className='row aie'>
                          <button className='delete'>Delete</button>
                      </div>
                    </div>     
              </div>

              <div className='box-room'>
                    <img src={housebig} alt='house'></img>
                    <img src={Ellipse11} alt='man' className  ='ellipse' ></img>
                    <h4 className='text-h4'>New Apartment Nice Wiew</h4>
                    <p className='title-pr'>Quincy St, Brooklyn, NY, USA</p>
                    <div className='icon_box flex jcsb'>
                        <div className='mini-box'>
                          <img src={bed} alt='bed' className='bed'></img>
                          <p className='beds-room'>10 beds</p>
                        </div>
                        <div className='mini-box'>
                          <img src={tilet} alt='WC' className='bed'></img>
                          <p className='beds-room'>7 Baths</p>
                        </div>
                        <div className='mini-box'>
                          <img src={car} alt='car' className='bed'></img>
                          <p className='beds-room'>2 Garage</p>
                        </div>
                        <div className='mini-box'>
                          <img src={ruler} alt='ruler' className='bed'></img>
                          <p className='beds-room'>1200 Sq Ft</p>
                        </div>
                    </div>
                    <hr className='hr'/>
                    <div className='wrapper d-flex '>
                      <div className='wrap'>
                          <div className='slogan'>$3,800/mo</div>
                          <div className='meta'>$8,500/mo</div>
                      </div>
                      <div className='row down'>
                         <img src={way} alt='way' className='way'></img>
                         <img src={love} alt='love' className='love'></img>
                      </div>
                    </div>     
              </div>
              <div className='box-room'>
                    <img src={minihouse} alt='house'></img>
                    <img src={Ellipse12} alt='man' className  ='ellipse' ></img>
                    <h4 className='text-h4'>New Apartment Nice Wiew</h4>
                    <p className='title-pr'>Quincy St, Brooklyn, NY, USA</p>
                    <div className='icon_box flex jcsb'>
                        <div className='mini-box'>
                          <img src={bed} alt='bed' className='bed'></img>
                          <p className='beds-room'>5 beds</p>
                        </div>
                        <div className='mini-box'>
                          <img src={tilet} alt='WC' className='bed'></img>
                          <p className='beds-room'>5 Baths</p>
                        </div>
                        <div className='mini-box'>
                          <img src={car} alt='car' className='bed'></img>
                          <p className='beds-room'>1 Garage</p>
                        </div>
                        <div className='mini-box'>
                          <img src={ruler} alt='ruler' className='bed'></img>
                          <p className='beds-room'>1200 Sq Ft</p>
                        </div>
                    </div>
                    <hr className='hr'/>
                    <div className='wrapper d-flex '>
                      <div className='wrap'>
                          <div className='slogan'>$1,800/mo</div>
                          <div className='meta'>$5,500/mo</div>
                      </div>
                      <div className='row down'>
                         <img src={way} alt='way' className='way'></img>
                         <img src={love} alt='love' className='love'></img>
                      </div>
                    </div>     
              </div>
            </div>

      </main>
  )
}


export default Main