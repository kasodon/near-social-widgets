import React from "react";
import styled from 'styled-components';
// import "./profile.scss";

function Profile() {
    const Profile = styled.div`
    margin: 0;
    padding: 40px;
    background: #111315;
    font-family: Tahoma, sans-serif;
    color: #FEFFFE;
    `;
    const Header = styled.div`
    margin-bottom: 32px;
    `;
    const HeaderText = styled.h2`
    margin: 0;
    font-weight: 700;
    `;
    const Detail = styled.div`
    width: 100%;
    background: #1A1D1F;
    border-radius: 10px;
    margin-bottom: 3rem;
    `;
    const Cover = styled.div`
    height: 180px;
    width: 100%;
    position: relative;
    `;
    const Edit = styled.a`
    position: absolute;
                top: 15px;
                right: 15px;
                text-transform: capitalize;
                border-radius: 6px;
                padding: 7px 20px;
                color: #FEFFFE;
                font-weight: 500;
                background: hsla(0,0%,100%,.30) border-box;
                text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
	            overflow: hidden;
                border: none;
                text-decoration: none;
                @media only screen and (max-width: 540px) {
                    font-size: 14px;
                    padding: 5px 14px;
                }
                &::before {
                    content: '';
	                position: absolute;
	                top: 0; right: 0; bottom: 0; left: 0;
	                margin: -30px;
	                z-index: -1;
	                -webkit-filter: blur(20px);
	                filter: blur(20px);
                }
    `;
    const CoverImage = styled.img`
    object-fit: cover;
                height: 180px;
                width: 100%;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
    `;
    const Prop = styled.div`
    width: 100%;
            display: flex;
            flex-direction: column;
            padding: 24px;
    `;
    const Media = styled.div`
    display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 23%;
                @media only screen and (max-width: 1100px) {
                    width: 32%;
                }
                @media only screen and (max-width: 940px) {
                    width: 38%;
                }
                @media only screen and (max-width: 780px) {
                    width: 45%;
                }
                @media only screen and (max-width: 640px) {
                    width: 58%;
                }
                @media only screen and (max-width: 540px) {
                    width: 100%;
                    flex-direction: column;
                    align-items: center;
                    align-content: center;
                }
    `;
    const ProfileImage = styled.img`
    width: 160px;
                    height: 160px;
                    border-radius: 100%;
                    z-index: 100;
                    margin-top: -100px;
                    border: 5px solid #060d19;
                    @media only screen and (max-width: 540px) {
                        margin-bottom: 10px;
                    }
    `;
    const PropText = styled.div`
    @media only screen and (max-width: 540px) {
        text-align: center;
    }
    h4 {
        font-weight: 700;
        text-transform: capitalize;
    }
    p {
        font-weight: 500;
        text-transform: lowercase;
    }
    `;
    const Social = styled.div`
    margin-top: 30px;
                display: flex;
                flex-direction: column;
    `;
    const Tags = styled.div`
    display: inline-flex;
                    @media only screen and (max-width: 540px) {
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                    }
                    p {
                        margin: 0;
                        margin-right: 10px;
                        background-color: #11151C;
                        color: #a4a5a5;
                        padding: 5px 10px;
                        font-weight: 600;
                        border-radius: 15px;
                        @media only screen and (max-width: 540px) {
                            width: 32%;
                            margin-bottom: 2%;
                            margin-right: 0;
                            padding: 4px;
                            text-align: center;
                        }
                        @media only screen and (max-width: 420px) {
                            font-size: 12px;
                        }
                    }
    `;
    const Links = styled.div`
    display: inline-flex;
                    margin-bottom: 25px;
                    @media only screen and (max-width: 640px) {
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                    }
                    a {
                        text-decoration: none;
                        margin-right: 15px;
                        font-size: 15px;
                        font-weight: 500;
                        text-transform: capitalize;
                        background: transparent;
                        color: #3D7EFF;
                        padding: 7px 20px;
                        border: 1px solid #3D7EFF;
                        border-radius: 6px;
                        @media only screen and (max-width: 640px) {
                            width: 46%;
                            margin-bottom: 2%;
                            margin-right: 0;
                        }
                    }
    `;
    const Data = styled.div`
    width: 100%;
        background: #1A1D1F;
        border-radius: 10px;
        margin-bottom: 3rem;
        padding: 24px;
        .nav {
            .nav-item {
                .nav-link {
                    color: #535557;
                    background: #111315;
                    margin-right: 15px;
                    padding: 10px 20px;
                    @media only screen and (max-width: 420px) {
                        margin-right: 8px;
                        padding: 10px 20px;
                    }
                    &.active {
                        color: #FEFFFE;
                        background-color: #3D7EFF;
                    }
                }
            }
        }
        .tab-content {
            .tab-pane {
                &.nft {
                    display: none;
                    &.active {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                    }
                    .nft-single {
                        width: 32%;
                        padding-bottom: 18%;
                        margin-bottom: 2%;
                        background: #111315;
                        border-radius: 12px;
                        height: 300px;
                        padding: 15px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        @media only screen and (max-width: 780px) {
                            width: 48%;
                        }
                        @media only screen and (max-width: 540px) {
                            width: 100%;
                            margin-bottom: 5%;
                        }
                        img {
                            width: 100%;
                            height: 70%;
                            object-fit: cover;
                            border-radius: 6px;
                        }
                        a {
                            width: 100%;
                            text-align: center;
                            font-size: 20px;
                        font-weight: 600;
                        text-transform: capitalize;
                        text-decoration: none;
                        background: #3d7eff;
                        color: #c5d8ff;
                        padding: 12px 0;
                        border-radius: 6px;
                        @media only screen and (max-width: 940px) {
                            font-size: 18px;
                            padding: 10px 0;
                        }
                        @media only screen and (max-width: 540px) {
                            padding: 12px 0;
                            font-size: 20px;
                        }
                        @media only screen and (max-width: 420px) {
                            font-size: 18px;
                            padding: 10px 0;
                        }
                        }
                    }
                }
            }
        }
    `;

  return (
    <Profile>
        <Header><HeaderText>My Profile</HeaderText></Header>
        <Detail>
            <Cover>
                <Edit href="#">Edit Profile</Edit>
                <CoverImage src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" />
                </Cover>
            <Prop>
                <Media>
                    <ProfileImage src="https://images.unsplash.com/photo-1528731708534-816fe59f90cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                    <PropText>
                        <h4>kasodon</h4>
                        <p>@kasodon.near</p>
                    </PropText>
                </Media>
                <Social>
                    <Links>
                        <a href="#"><i class="bi bi-twitter"> </i>Twitter</a>
                        <a href="#"><i class="bi bi-github"> </i>Github</a>
                        <a href="#"><i class="bi bi-globe"> </i>Website</a>
                        <a href="#"><i class="bi bi-telegram"> </i>Telegram</a>
                    </Links>
                    <Tags>
                        <p>#developer</p>
                        <p>#web3</p>
                        <p>#javascript</p>
                        <p>#near</p>
                        <p>#engineer</p>
                    </Tags>
                </Social>
            </Prop>
        </Detail>
        <Data>
        <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-bio-tab" data-bs-toggle="pill" data-bs-target="#pills-bio" type="button" role="tab" aria-controls="pills-bio" aria-selected="true">Bio</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-nft-tab" data-bs-toggle="pill" data-bs-target="#pills-nft" type="button" role="tab" aria-controls="pills-nft" aria-selected="false">NFTs</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-widget-tab" data-bs-toggle="pill" data-bs-target="#pills-widget" type="button" role="tab" aria-controls="pills-widget" aria-selected="false">Widgets</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade in show active" id="pills-bio" role="tabpanel" aria-labelledby="pills-bio-tab">
      <p>I am a software engineer with more than four years of experience. Love to build innovative software products that moves the blockchain industry forward. I am a software engineer with more than four years of experience. Love to build innovative software products that moves the blockchain industry forward. I am a software engineer with more than four years of experience. Love to build innovative software products that moves the blockchain industry forward. I am a software engineer with more than four years of experience. Love to build innovative software products that moves the blockchain industry forward.</p></div>
  <div class="tab-pane fade nft" id="pills-nft" role="tabpanel" aria-labelledby="pills-nft-tab">
      <div className="nft-single"><img src="https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <a href="#">View Details</a>
      </div>
      <div className="nft-single"><img src="https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <a href="#">View Details</a>
      </div>
      <div className="nft-single"><img src="https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <a href="#">View Details</a>
      </div>
      <div className="nft-single"><img src="https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <a href="#">View Details</a>
      </div>
      <div className="nft-single"><img src="https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <a href="#">View Details</a>
      </div>
  </div>
  <div class="tab-pane fade" id="pills-widget" role="tabpanel" aria-labelledby="pills-widget-tab">...</div>
</div>
        </Data>
</Profile>
  );
}

export default Profile;
