import './_top-nav.scss';

const TopNav = () => {
  return(
    <div>
      <div className='header bg-dark'>
        <div class='row top-nav-row'>
          <div className='brand my-1'>
            <h1>eStore</h1>
          </div>
          <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
            <div className='dropdown m-o p-0'>
              <select className='select-btn p-0 m-0 w-100'>
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>
            </div>
            <input className='form-control' placeholder='Search...' />
            <button><i className='fa fa-search'></i></button>
          </div>
          <div className='login-container p-0'>
            <i className='fa fa-user-circle user-icon'></i>
            <h5><a href='#'>Login</a></h5>&nbsp;/&nbsp;
            <h5><a href='#'>Register</a></h5>
          </div>
          <div className='cart-wishlist'>
            <ul>
              <li className='list-icon'><i className='fa fa-heart' /></li>
              <li className='list-icon'><i className='fa fa-shopping-cart' /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav;