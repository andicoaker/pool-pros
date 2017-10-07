import React, { Component } from 'react';
import FooterLogo from '../assets/pool-pros-logo-footer.png'
import FBIcon from '../assets/facebook-icon.png'
import TwitterIcon from '../assets/twitter-icon.png'
import YoutubeIcon from '../assets/youtube-icon.png'
import ActionIcon from "../assets/action-commercial-icon.png"
import '../styles/footer.css';

export default class Footer extends Component {

  render () {
    return (
      <div className="d-flex flex-column p-0 m-0 footer">

        <div className="d-flex flex-column py-3 connect">
          <div className="logo-img align-self-center">
            <img src={FooterLogo} alt="Logo" />
          </div>
          <div className="d-flex justify-content-around pt-3 connect-text ">
            <div className="align-self-start">CONNECT WITH US</div>
            <div className="social-icons align-self-end">
              <img src={TwitterIcon} alt="Twitter Icon" />
              <img className="px-3" src={FBIcon} alt="Facebook Icon" />
              <img src={YoutubeIcon} alt="Youtube Icon" />
            </div>
          </div>
        </div>

        <div className="d-flex py-2 flex-column text-center align-items-center footer-nav">
          <div className="flex-row row1 pb-2">
            <a className="text-white link1 px-2" href="#">Dealers and Distributors< /a>
            <a className="text-white px-2" href="#">Commericial Service< /a>
            <img className="pr-2" src={ActionIcon} alt="Action Icon" />
          </div>

          <div className="flex-row pt-2">
            <a className="text-white mr-2" href="#">
              <i className="fa fa-copyright pr-1" aria-hidden="true"></i>
              2017 Pool Pros
            < /a>
            <a className="text-white px-2 privacy" href="#">Privcy Policy< /a>
            <a className="text-white ml-2" href="#">Terms and Conditions< /a>

          </div>
        </div>
      </div>
    );
  }
}
