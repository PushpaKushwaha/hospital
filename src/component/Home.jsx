import React from 'react'
import Front from './Front'
import About from './About'
import Heading from './common/Heading'
import { service } from '../dummydata'
import { department } from '../dummydata'
import Appointment from './Appointment'
import Team from './Team'
import News from './News'
import Contact from './Contact'

function Home() {
  return (
    <>
    <Front/>
    <About/>
    <section className='service'>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
            <Heading title="Why Choose Us" subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            </div>
          <div className="row">
            {service.slice(0,4).map((a)=>(
              <div className="col-lg-3">
               <img src= {a.cover} alt="" />
               <h3>{a.depart}</h3>
               <p>{a.desc}</p>
              </div>
            ))}
          </div>
            
          </div>
        </div>
      </section>
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
          {department.slice(0,1).map((a)=>(
            <>
            <div className="col-lg-4 my-3">
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
    <Team/>
    <News/>
    <Contact/>
    </>
  )
}

export default Home
