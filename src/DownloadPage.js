import React, { Component } from "react";
import googleplay from "./images/images/google-play.png";
import appstore from "./images/images/app-store.png";
import download from "./images/images/download.svg";




class DownloadPage extends Component {
    render() {
      return (
  
        <section className="section section--downloads py-5 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-7 section text-left">
                <h3 className="section__heading heading heading--downloads font-30-sm my-4">Download our App now !</h3>
                <p className="section__subheading my-4">
                  The rise of mobile devices transforms the way we consume information entirely
                  and the world's most elevant channels such as Facebook.
                </p>
                <div className="section__downloads my-4"><a className="link link--download mr-4" href="#"><img src={googleplay} alt="Google play" /></a><a className="link link--download" href="#"><img src={appstore} alt="App store" /></a></div>
              </div>
              <div className="col"><img className="section__image" src={download} /></div>
            </div>
          </div>
        </section>
      );
    }
};

export default DownloadPage;
