import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? 
              <>
              <b>Mission </b>
                {props.data.mission}
                <br></br>
                <br></br>
                <b>Story </b>
                {props.data.story}
                <br></br>
                <br></br>
              <b>Values</b><br></br>
              {
              props.data.ourvalues ? props.data.ourvalues.map((v,i)=>(
                <><b>{v.split(":")[0]}</b>{v.split(":")[1]}<br></br></>
              )) :""
              }
              </>
              
               : "loading..."} </p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}><b>{d.split(":")[0]}</b>{d.split(":")[1]}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
