import React from 'react'
import Heading from './common/Heading'
import { news } from '../dummydata'
import { useEffect } from 'react';
function News() {
  useEffect(() => {
    // Initialize Owl Carousel here
    $('.owl-carousel').owlCarousel({
      // Owl Carousel options go here
      items: 4,
      loop: true,
      autoplay: true,
    });
  }, []); 
  return (
    <>
     <section className='news'>
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 text-center">
          <Heading title="Latest News" subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
          </div>
        </div>
        <div className="row">
          {news.map((a)=>(
            <div className="col-lg-4">
              <img className='w-100' src={a.cover} alt="" />
              <div className='new'>
                <a href="">{a.department}</a>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <span>{a.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section> 

     <section className='slider '>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
  
  <div className="owl-carousel">
      {/* Your carousel items go here */}
      <div className="item">
        <img className='w-100' src="../img/clients/clients1.png" alt="" />
      </div>
      <div className="item">
      <img className='w-100' src="../img/clients/clients2.png" alt="" />
      </div>
      <div className="item">
      <img className='w-100' src="../img/clients/clients3.png" alt="" />
      </div>
      <div className="item">
      <img className='w-100' src="../img/clients/clients4.png" alt="" />
      </div>
      <div className="item">
      <img className='w-100' src="../img/clients/clients5.png" alt="" />
      </div>
      <div className="item">
      <img className='w-100' src="../img/clients/clients6.png" alt="" />
      </div>
      <div className="item">
      <img className='w-100' src="../img/clients/clients7.png" alt="" />
      </div>
    </div>
          </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default News
