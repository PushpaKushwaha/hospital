import React from "react";
import Heading from "./common/Heading";

function Contact() {
  const map='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d904726.610278206!2d85.245655!3d27.652739!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1703921350302!5m2!1sen!2sus'
  return (
    <>
      <section className="contact">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <Heading
                title="Contact Us"
                subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <i class="fa-solid fa-location-dot icon"></i>
              <div className="base">
                301 The Greenhouse, Custard, <br />
                Factory, London, E2 8DY.
              </div>
            </div>
            <div className="col-lg-4">
              <i class="fa-solid fa-mobile-screen-button icon"></i>
              <div className="base">
                (M) +44 (0) 123 456 7890 <br />
                (O) +44 (0) 123 456 7890
              </div>
            </div>
            <div className="col-lg-4">
              <i class="fa-regular fa-envelope icon"></i>
              <div className="base">
                no-reply@domain.com <br />
                help@domain.com
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="location">
        <iframe  width="100%" height="400" src={map} frameborder="0"></iframe>

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d904726.610278206!2d85.245655!3d27.652739!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1703921350302!5m2!1sen!2sus" width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

      </section>
    </>
  );
}

export default Contact;
