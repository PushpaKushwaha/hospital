import React from 'react'
import Heading from './common/Heading'
import { department } from '../dummydata'
import Appointment from './Appointment'

function Department() {
  return (
    <>
     <section className='department'>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-12">
            <Heading title='Our Departments' subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry lorem. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry lorem. '/>
          </div>
          <ul>
              <li>
                <a href="">Dental Care</a>
              </li>
              <li>
                <a href="">Heart Disease</a>
              </li>
              <li>
                <a href="">General Treatment</a>
              </li>
              <li>
                <a href="">Pharmacy Store</a>
              </li>
          </ul>
        </div>
        <div className="row ">
          {department.map((a)=>(
            <>
            <div className="col-lg-4 my-3 desc ">
            <h2>{a.title}</h2>
              <p>{a.desc}</p>
              <button className='btn'>Get Appointment</button>
            </div>
            <div className="col-lg-8 my-3">
            <img className='w-100' src={a.cover} alt="" />             
            </div>
            </>
          ))}
        </div>
      </div>
     </section> 
     <Appointment/>
    </>
  )
}

export default Department
