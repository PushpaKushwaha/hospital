import React from 'react'
import { about } from '../dummydata'
import Heading from './common/Heading'
function About() {
  return (
    <>
      <section className='about'>
        <div className="container text-center">
          <div className="row ">
          <div className="col-lg-12">
          <Heading title="Welcome to the Health Center" subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
          </div>
          <div className="row g-4">
          {about.map((a)=>(
            <>
              <div className="col-lg-6 ">
                <img className='w-100' src={a.cover} alt="" />
              </div>
              <div className="col-lg-6 green">
                <h3>{a.titleLarge}</h3>
                <h4>{a.titleSmall}</h4>
                <p>{a.text}</p>
              </div>
              </>
            ))} 
          </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default About
