import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mb-5 mt-5">
        <h1 className=" text-center ">People</h1>
      </div>
      <div className="row  text-muted " style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
        <div className="col text-center ">
          <img src="media\Images\nithinKamath.jpg" alt="nitinKamath" style={{borderRadius:"50%", width:"50%"}}></img>
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col  text-muted">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
