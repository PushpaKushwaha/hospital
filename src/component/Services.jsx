import React from 'react'
import Heading from './common/Heading'
import { service } from '../dummydata'
function Services() {
  return (
    <>
      <section className='service'>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
            <Heading title="Why Choose Us" subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            </div>
          <div className="row">
            {service.map((a)=>(
              <div className="col-lg-4">
               <img src= {a.cover} alt="" />
               <h3>{a.depart}</h3>
               <p>{a.desc}</p>
              </div>
            ))}
          </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
