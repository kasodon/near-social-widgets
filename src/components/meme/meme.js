import React from "react";
import proc from '../../assets/img/proc.png';
import bg from '../../assets/img/bg.png';
import "./meme.scss";

function Meme() {
  return (
    <>
    <h1 className="text-center mt-4">Meme loading...</h1>
    <div className="meme container my-4">
        <div className="row gy-5 d-flex justify-content-between align-items-center">
        {/* <div style={{
            backgroundColor: "#ecf2ff",
            width: "550px",
            height: "500px",
            borderRadius: "40px",
            padding: "10px",
            position: "relative"
            }} className="meme-single d-flex flex-column justify-content-between col-md-6 col-lg-6 col-12">
                <div style={{marginLeft: "20px", height: "7%",}} className="profile d-flex align-items-center">
                    <img style={{width: "45px", height: "45px", marginRight: "15px", border: "3px solid #FEFFFE", borderRadius: "100%"}} src={proc} alt="" />
                    <div className="profile-text">
                        <h4 style={{fontSize: "16px", marginBottom: "2px",}} className="m-0 text-capitalize">Claire Dangais</h4>
                        <p style={{fontSize: "14px",}} className="m-0 text-lowercase">@ClaireD15</p>
                    </div>
                </div>
                <div style={{height: "75%", width: "100%", background: "#060d19", borderRadius: "30px"}} className="meme-img">
                    <img style={{height: "100%", width: "100%", objectFit: "contain", borderRadius: "30px", backgroundSize: "contain"}} src="https://ipfs.near.social/ipfs/bafkreih4557zsvdgu4uttozus6kqh6faiydmljtikgbekiv7ntiea6i7li" alt="" />
                </div>
                <div style={{ width: "100%", marginLeft: "20px", marginBottom: "15px"}} className="meme-detail">
                    <div className="meme-detail-text" style={{ }}>
                        <h4 style={{margin: "0", fontSize: "18px", textTransform: "capitalize"}}>my entry</h4>
                        <p style={{margin: "0", fontSize: "15px", textTransform: "lowercase"}}>so8 is always on top</p>
                    </div>
                    <div style={{width: "90%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "5px"}} classNmae="meme-detail-note">
                        <div className="icons" style={{}}>
                            <span style={{marginRight: "7px"}} className=""><i className="bi bi-star me-1"></i>4</span>
                            <span style={{marginRight: "7px"}} className=""><i className="bi bi-chat-square me-1"></i>4</span>
                            <span style={{marginRight: "7px"}} className=""><i className="bi bi-reply me-1"></i>4</span>
                        </div>
                        <div className="timestamp" style={{}}>
                        <span className=""><i className="bi bi-clock me-1"></i>4 days ago</span>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="add container mt-5">
                <div style={{background: "#3D7EFF", borderRadius: "12px"}} className="row p-5 mb-5">
            <div className="add-meme col-md-4 col-lg-4" style={{ color: "#183266"}}>
                <h2 className="text">Add Meme</h2>
            </div>
            <div className="post-meme col-md-8 col-lg-8 d-flex justify-content-end text-lowercase font-weight-bolder">
                <button style={{background: "#FAF8D4", color: "#11151C", fontWeight: "bold"}} className="btn btn-lg mx-2 text-lowercase">View Your Last Meme</button>
                <button style={{background: "#11151C", color: "#FAF8D4", fontWeight: "bold"}} className="btn btn-lg mx-2 text-lowercase">Upload an Image</button>
            </div>
            </div>

            <div style={{background: "#414449", borderRadius: "12px"}} className="row p-5 mb-5">
                <div className="col-md-6 col-lg-6"></div>
                <div className="col-md-6 col-lg-6 d-flex justify-content-end">
                <div style={{
            backgroundColor: "#ecf2ff",
            width: "550px",
            height: "500px",
            borderRadius: "40px",
            padding: "10px",
            position: "relative"
            }} className="meme-single d-flex flex-column justify-content-between col-md-6 col-lg-6 col-12">
                <div style={{marginLeft: "20px", height: "7%",}} className="profile d-flex align-items-center">
                    <img style={{width: "45px", height: "45px", marginRight: "15px", border: "3px solid #FEFFFE", borderRadius: "100%"}} src={proc} alt="" />
                    <div className="profile-text">
                        <h4 style={{fontSize: "16px", marginBottom: "2px",}} className="m-0 text-capitalize">Claire Dangais</h4>
                        <p style={{fontSize: "14px",}} className="m-0 text-lowercase">@ClaireD15</p>
                    </div>
                </div>
                <div style={{height: "75%", width: "100%", background: "#060d19", borderRadius: "30px"}} className="meme-img">
                    <img style={{height: "100%", width: "100%", objectFit: "contain", borderRadius: "30px", backgroundSize: "contain"}} src="https://ipfs.near.social/ipfs/bafkreih4557zsvdgu4uttozus6kqh6faiydmljtikgbekiv7ntiea6i7li" alt="" />
                </div>
                <div style={{ width: "100%", marginLeft: "20px", marginBottom: "15px"}} className="meme-detail">
                    <div className="meme-detail-text" style={{ }}>
                        <h4 style={{margin: "0", fontSize: "18px", textTransform: "capitalize"}}>my entry</h4>
                        <p style={{margin: "0", fontSize: "15px", textTransform: "lowercase"}}>so8 is always on top</p>
                    </div>
                    <div style={{width: "90%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "5px"}} classNmae="meme-detail-note">
                        <div className="icons" style={{}}>
                            <span style={{marginRight: "7px"}} className=""><i className="bi bi-star me-1"></i>4</span>
                            <span style={{marginRight: "7px"}} className=""><i className="bi bi-chat-square me-1"></i>4</span>
                            <span style={{marginRight: "7px"}} className=""><i className="bi bi-reply me-1"></i>4</span>
                        </div>
                        <div className="timestamp" style={{}}>
                        <span className=""><i className="bi bi-clock me-1"></i>4 days ago</span>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>

            </div>
        </div>
        <div className="row mt-5">
                <div className="col-12"><h4 className="text-capitalize fw-bold">Recently Joined</h4></div>
                <div className="col-12 mt-3">
                    <div className="container">
                        <div className="row gy-3">
                            <div className="col-4 col-sm-4 col-md-1 col-lg-1">
                            <img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "100%",}} src="https://cdn4.buysellads.net/uu/1/81016/1609783196-authentic-260x200-variation-3.jpg" className="img-fluid" alt="..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 col-lg-1">
                            <img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "100%",}} src="https://cdn4.buysellads.net/uu/1/81016/1609783196-authentic-260x200-variation-3.jpg" className="img-fluid" alt="..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 col-lg-1">
                            <img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "100%",}} src="https://cdn4.buysellads.net/uu/1/81016/1609783196-authentic-260x200-variation-3.jpg" className="img-fluid" alt="..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 col-lg-1">
                            <img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "100%",}} src="https://cdn4.buysellads.net/uu/1/81016/1609783196-authentic-260x200-variation-3.jpg" className="img-fluid" alt="..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 col-lg-1">
                            <img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "100%",}} src="https://cdn4.buysellads.net/uu/1/81016/1609783196-authentic-260x200-variation-3.jpg" className="img-fluid" alt="..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 col-lg-1">
                            <img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "100%",}} src="https://cdn4.buysellads.net/uu/1/81016/1609783196-authentic-260x200-variation-3.jpg" className="img-fluid" alt="..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 col-lg-1">
                            <img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "100%",}} src="https://cdn4.buysellads.net/uu/1/81016/1609783196-authentic-260x200-variation-3.jpg" className="img-fluid" alt="..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 col-lg-1">
                            <img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "100%",}} src="https://cdn4.buysellads.net/uu/1/81016/1609783196-authentic-260x200-variation-3.jpg" className="img-fluid" alt="..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 col-lg-1">
                            <img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "100%",}} src="https://cdn4.buysellads.net/uu/1/81016/1609783196-authentic-260x200-variation-3.jpg" className="img-fluid" alt="..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 col-lg-1">
                            <img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "100%",}} src="https://cdn4.buysellads.net/uu/1/81016/1609783196-authentic-260x200-variation-3.jpg" className="img-fluid" alt="..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 col-lg-1">
                            <img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "100%",}} src="https://cdn4.buysellads.net/uu/1/81016/1609783196-authentic-260x200-variation-3.jpg" className="img-fluid" alt="..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 col-lg-1">
                            <img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "100%",}} src="https://cdn4.buysellads.net/uu/1/81016/1609783196-authentic-260x200-variation-3.jpg" className="img-fluid" alt="..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 col-lg-1">
                            <img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "100%",}} src="https://cdn4.buysellads.net/uu/1/81016/1609783196-authentic-260x200-variation-3.jpg" className="img-fluid" alt="..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 col-lg-1">
                            <img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "100%",}} src="https://cdn4.buysellads.net/uu/1/81016/1609783196-authentic-260x200-variation-3.jpg" className="img-fluid" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
  );
}

export default Meme;
