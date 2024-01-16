import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <section className='footer py-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 py-4 border-bottom">
            <ul className='flex'>
              <li><Link to="/about">About Us</Link></li>
                <li><Link to="/service">Services</Link></li>
                <li><Link to="/department">Departments</Link></li>
                <li><Link to="/team">Medical Team</Link></li>
                <li><Link to="/news">Latest News</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul>
              <li>
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-pinterest"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
              </li>
            </ul>
          </div>
          <p className='text-center py-4'>© 2016 LeadGen is proudly powered by ThemeZaa.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
