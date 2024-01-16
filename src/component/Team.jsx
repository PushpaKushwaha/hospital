import React from "react";
import Heading from "./common/Heading";
import { team } from "../dummydata";

function Team() {
  return (
    <>
      <section className="team py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <Heading
                title="Meet our Medical Specialists"
                subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>
          </div>
          <div className="row">
            {team.map((a) => (
              <div className="col-lg-4">
                <img className="w-100" src={a.cover} alt="" />
                <h4>{a.name}</h4>
                <h5>{a.department}</h5>
                <div className="icons">
                  <a className="mx-3" href="#">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a className="mx-3" href="#">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a className="mx-3" href="#">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a className="mx-3" href="#">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="background">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <h3>Meeting the challenges of an ever-changing healthcare environment.</h3>
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
