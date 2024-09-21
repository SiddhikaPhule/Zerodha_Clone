import React from "react";
import "../../index.css";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="SupportWrapper">
        <h4 className="" >
          Support Portal
        </h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
      <div className="col-6">
        <h1 className="fs-3 mb-5">Search for an answer or browse help topics to create a ticket</h1>
        <input className="mb-3" placeholder="E.g how do i activate F&O, why is my order getting Rejected..."></input>
        <a href="">Track account opening </a>
        <a href="">Track segment activation </a>
        <a href="">Intraday margins </a>
        <a href="">Kite user manual</a>
      </div>
      <div className="col-6 p-5">
        <h5>Featured</h5>
        <ol>
            <li><a href="">Current Buybacks - August 2024</a></li>
            <li><a href="">Offer for sale (OFS) - August 2024</a></li>
        </ol>
      </div>
      </div>
    </section>
  );
}

export default Hero;
