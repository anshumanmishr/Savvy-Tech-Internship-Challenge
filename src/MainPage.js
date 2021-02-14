import React, { Component } from "react";
import "./MainPage.css";
import { Row, Col } from "react-bootstrap";
import hero from "./images/images/hero.jpg";
import screen1 from "./images/images/screen-1-01.svg";
import screen2 from "./images/images/screen-2.svg";
import phone1 from "./images/images/phone-1.svg";
import express from "./images/images/express.png";
import maniac from "./images/images/maniac.png";
import southwest from "./images/images/southwest.png";
import alonzo from "./images/images/alonzo.png";
import anubis from "./images/images/anubis.png";
import prototyping from "./images/images/prototyping.png";
import speed from "./images/images/speed.png";
import vector from "./images/images/vector.png";
import ellipse from "./images/images/ellipse-1.png";
import network from "./images/images/network.png";
import bill from "./images/images/bill.png";
import badge from "./images/images/badge.png";

class MainPage extends Component {
  render() {
    return (
      <div className="maindiv">
        <img src={hero} />
        <Row className="maindiv_content">
          <Col className="maindiv_col1">
            <h2>
              Best app for your
              <br />
              modern lifesyle
            </h2>
            <h6>
              Incerase productivity with a simple to-do app. app for
              <br />
              managing your personal budgets
            </h6>
            <span className="trylink1">Try for free</span>
            Watch demo video
          </Col>
          <Col>
            <img className="screen1" src={screen1} />
          </Col>
        </Row>
        <h6 className="seconddivhead">Trusted by companies like</h6>
        <br />
        <div className="trusted">
          <img src={southwest} />
          <img src={anubis} />
          <img src={alonzo} />
          <img src={express} />
          <img src={maniac} />
        </div>
        <div className="features">
          <Row>
            <Col>
              <img className="screen2_1" src={ellipse} />
              <img className="screen2" src={screen2} />
            </Col>
            <Col>
              <h2>
                Awesome apps
                <br />
                features
              </h2>
              <p>
                {" "}
                Incerase productivity with a simple to-do app. app for
                <br />
                managing your personal budgets{" "}
              </p>
              <div className="featureicon">
                <div className="feature1">
                  <img src={speed} />
                  <span className="featuretext">
                    <h4>Fast Performance</h4>
                    <p>
                      Get your blood tests delivered at
                      <br />
                      home collect a sample from the
                      <br />
                      news your blood tests.{" "}
                    </p>
                  </span>
                </div>
                <div className="feature2">
                  <img src={prototyping} />
                  <span className="featuretext">
                    <h4>Prototyping</h4>
                    <p>
                      Get your blood tests delivered at
                      <br />
                      home collect a sample from the
                      <br />
                      news your blood tests.{" "}
                    </p>
                  </span>
                </div>
                <div className="feature3">
                  <img src={vector} />
                  <span className="featuretext">
                    <h4>Vector Editing</h4>
                    <p>
                      Get your blood tests delivered at
                      <br />
                      home collect a sample from the
                      <br />
                      news your blood tests.{" "}
                    </p>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="screen4">
          <Row>
            <Col className="jackcol1">
              <h3>
                Smart jackpots that
                <br />
                you may love this
                <br />
                anytime & anywhere
              </h3>
            </Col>
            <hr />
            <Col>
              The rise of mobile devices transforms the way we
              <br />
              consume information entirely and the world's most
              <br />
              elevent channels such as Facebook.
            </Col>
          </Row>
        </div>
        <div className="screen5">
          <div className="feature3">
            <img src={bill} />
            <span className="featuretext">
              <h4>Automatic Payouts</h4>
              <p>
                Get your blood tests delivered at
                <br />
                home collect a sample from the
                <br />
                news your blood tests.{" "}
              </p>
            </span>
          </div>
          <div className="feature3">
            <img src={network} />
            <span className="featuretext">
              <h4>Network Effect</h4>
              <p>
                Get your blood tests delivered at
                <br />
                home collect a sample from the
                <br />
                news your blood tests.{" "}
              </p>
            </span>
          </div>
          <div className="feature3">
            <img src={badge} />
            <span className="featuretext">
              <h4>Bigger Rewards Method</h4>
              <p>
                Get your blood tests delivered at
                <br />
                home collect a sample from the
                <br />
                news your blood tests.{" "}
              </p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
