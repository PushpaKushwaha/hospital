import React from 'react'
import '.././component/common/header.css'
function Front() {
  return (
    <>
      <section className='front'>
        <div className="container">
            <div className="row ">
                <div className="col-lg-6">

                </div>
                <div className="col-lg-6">
                <div className="box py-5">
                    <h2 className="text-center text-light py-4 fw-bold">MAKE AN APPOINTMENT</h2>
                <form action="" method="post">
                    <input className="inp" type="text" name="name" id="" placeholder="*Your name" />
                    <input className="inp" type="text" name="email" id="" placeholder="*Your Email" />
                    <input className="inp" type="text" name="number" id="" placeholder="Your Phone" />
                    <textarea className="inp" type="comment"  name="comment" placeholder="Your Message"></textarea>
                    <button className="btn inp fw-bold">SEND MESSAGE</button>
                </form>
                
                </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Front
