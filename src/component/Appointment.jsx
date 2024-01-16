import React from 'react'
import './appointment.css'
function Appointment() {
  return (
    <>
    <section className='appointment py-3'>
        <div className="container">
            <div className="row align-items-center text-center py-5">
                <div className="col-lg-6">
                    <h2>Register today and get first appointment!</h2>
                </div>
                <div className="col-lg-6">
                    <a href="#"><button>APPOINTMENT NOW <i class="fa-solid fa-arrow-right-long"></i></button></a>
                    
                </div>
            </div>
        </div>
        </section>  
    </>
  )
}

export default Appointment
