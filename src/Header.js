import vector from './img/Vector.png';

// import home_input from './img/home_input.png' 

function Header() {
  return(
    <div className="all-class">
        <header className='header'>
          <div className='header__wrapper container'>
          <h1 className='logo'> <img src={vector} alt='title'></img> Houzing</h1> 
          <nav>
            <ul className='nav-items'>
              <li className='nav-itme'>Home</li>
              <li className='nav-itme'>Properties</li>
              <li className='nav-itme'>Contacts</li>
            </ul> 
          </nav> 
          <button className='login-btn'>Login</button>
          </div>
        </header>

        <section className='search container'>
        {/* <img src={home_input} alt='home'> </img> */}
          <input className='search__input' placeholder='Search'></input>
          <button className='search__btn'>Search</button>
        </section>

    
   
    </div>  
  );
}
export default Header 