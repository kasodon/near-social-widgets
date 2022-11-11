import React from "react";
import "./landing.scss";

function Landing() {
  return (
    <div className="container my-4 text-sm-start text-md-start text-lg-start text-center">
        <div style={{ borderRadius: "12px"}} className="row py-2 mb-2">
            <div style={{}} className="col-12">
                <h2 style={{fontFamily: "Tahoma, sans-serif", fontWeight: "bolder", margin: "0", color: "#414449"}}>Welcome to <span style={{color: "#25A18E"}}><i>NEAR</i></span> Social!</h2>
            </div>
        </div>
        <div style={{ borderRadius: "12px"}} className="row py-2">
            <div style={{fontFamily: "Tahoma, sans-serif"}} className="col-12 font-weight-bold">
                <a style={{background: "transperent", border: "2px solid #3D7EFF",color: "#3D7EFF", fontWeight: "bold", textDecoration: "none"}} className="btn btn mx-2 text-capitalize">Get Involved</a>
                <a href="" style={{background: "#3D7EFF", color: "#FEFFFE", fontWeight: "bold"}} className="btn mx-2 text-capitalize">View Profile</a>
            </div>
        </div>
        <div style={{fontFamily: "Tahoma, sans-serif", fontWeight: "bold"}} className="row gy-4 mt-4">
                        <div className="col-12"><a style={{textDecoration: "none", color: "#FAF8D4", background: "#11151C", padding: "10px 22px", borderRadius: "8px"}} href="#">Learn More &rarr;</a></div>
                        <div className="col-12"><a style={{textDecoration: "none", color: "#FAF8D4", background: "#11151C", padding: "10px 22px", borderRadius: "8px"}} href="#">Ask Questions &rarr;</a></div>
                        <div className="col-12"><a style={{textDecoration: "none", color: "#FAF8D4", background: "#11151C", padding: "10px 22px", borderRadius: "8px"}} href="#">Explore All Data &rarr;</a></div>
                        <div className="col-12"><a style={{textDecoration: "none", color: "#FAF8D4", background: "#11151C", padding: "10px 22px", borderRadius: "8px"}} href="#">Explore All widgets &rarr;</a></div>
                        <div className="col-12"><a style={{textDecoration: "none", color: "#FAF8D4", background: "#11151C", padding: "10px 22px", borderRadius: "8px"}} href="#">Last Updated widgets &rarr;</a></div>
                        <div className="col-12"><a style={{textDecoration: "none", color: "#FAF8D4", background: "#11151C", padding: "10px 22px", borderRadius: "8px"}} href="#">Edit This Homepage &rarr;</a></div>
                        <div className="col-12"><a style={{textDecoration: "none", color: "#FAF8D4", background: "#11151C", padding: "10px 22px", borderRadius: "8px"}} href="#">View All Memes &rarr;</a></div>
            </div>

            <div class="container-fluid mt-5 d-flex justify-content-center justify-content-md-start justify-content-sm-start justify-content-lg-start">
            <div style={{border: "none", borderRadius: "10px", backgroundColor: "#FAF8D4"}} class="card p-3">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="image">
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" class="rounded" width="100" />
                </div>
                <div style={{marginLeft: "10px"}} class=""> 
                   <h4 class="mb-0 mt-0 fw-bold">@kasodon.near</h4>
                   <div style={{background: "#11151C", color: "#FAF8D4"}} class="p-2 mt-2 d-flex justify-content-between rounded">
                    <div style={{marginRight: "5px"}} class="d-flex flex-column">
                        <span class="fw-bold text-lowercase">Widgets</span>
                        <span class="text-center">0</span>                       
                    </div>
                    <div style={{marginRight: "5px"}} class="d-flex flex-column">
                        <span class="fw-bold text-lowercase">Memes</span>
                        <span class="text-center">0</span>                       
                    </div>
                    <div class="d-flex flex-column">
                        <span class="fw-bold text-lowercase">Review</span>
                        <span class="text-center">0</span>                       
                    </div>                     
                   </div>
              </div>                 
                </div>           
            </div>           
         </div>

    </div>
  );
}

export default Landing;
