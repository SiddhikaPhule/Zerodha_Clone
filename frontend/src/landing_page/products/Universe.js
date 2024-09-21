import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3">The Zerodha Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img className="mb-3"
            src="media\Images\zerodhafundhouse.png"
            style={{ width: "200px" }}
            alt="universe_image"
          ></img>
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img className="mb-3"
            src="media\Images\sensibullLogo.svg"
            style={{ width: "250px" }}
             alt="universe_image"
          ></img>
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img className="mb-3" src="media\Images\tijori.svg" style={{ width: "180px" }}  alt="universe_image"></img>
          <p className="text-small text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img className="mb-3"
            src="media\Images\streak-logo.png"
            style={{ width: "200px" }}
             alt="universe_image"
          ></img>
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img className="mb-3"
            src="media/Images/smallcase-logo.png"
            style={{ width: "250px" }}
             alt="universe_image"
          ></img>
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img className="mb-3"
            src="media\Images\ditto-logo.png"
            style={{ width: "150px" }}
             alt="universe_image"
          ></img>
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button className='p-2.5 btn btn-primary fs-5 mt-5 mb-5' style={{width:"12%", margin: "0 auto", borderRadius: "4px"}}>Sign up now</button>

      </div>
    </div>
  );
}

export default Universe;
