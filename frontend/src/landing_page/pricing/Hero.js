import React from "react";

function Hero() {
  return (
    <div className="container">
      <div
        className="row text-center"
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
      >
        <h1>Pricing</h1>
        <p className="fs-5 mt-3">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>
      <div className="row mt-5  border-top text-center" >
        <div className="col-4 p-5 mt-5">
          <img
            src="media\Images\pricing0.svg"
            alt="pricingImage"
            style={{ width: "60%" }}
          ></img>
          <h1 className="fs-2">Free equity delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img
            src="media\Images\other-trades.svg"
            alt="pricingImage"
            style={{ width: "60%" }}
          ></img>
          <h1 className="fs-2">Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img
            src="media\Images\pricing0.svg"
            alt="pricingImage"
            style={{ width: "60%" }}
          ></img>
          <h1 className="fs-2">Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
