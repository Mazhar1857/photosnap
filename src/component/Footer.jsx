import React from "react";
import "./Footer.css";
import Logo from "../assets/svg-component/shared/desktop/logo";
import FacebookGradientIcon from "../assets/svg-component/shared/desktop/FacebookGradientIcon";
import YoutubeGradientIcon from "../assets/svg-component/shared/desktop/YoutubeGradientIcon";
import TwitterGradientIcon from "../assets/svg-component/shared/desktop/TwitterGradientIcon";
import InstagramGradientIcon from "../assets/svg-component/shared/desktop/InstagramGradientIcon";
import PinterestGradientIcon from "../assets/svg-component/shared/desktop/PinterestGradientIcon";
import ArrowRightIcon from "../assets/svg-component/shared/desktop/ArrowRightIcon.JSX";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <div>
          <Logo fill="#fff" />
        </div>
      </div>
      <ul className="social-media">
        <li>
          <FacebookGradientIcon />
          <FacebookGradientIcon fill="#fff" />
        </li>
        <li>
          <YoutubeGradientIcon />
          <YoutubeGradientIcon fill="#fff" />
        </li>
        <li>
          <TwitterGradientIcon />
          <TwitterGradientIcon fill="#fff" />
        </li>
        <li>
          <PinterestGradientIcon />
          <PinterestGradientIcon fill="#fff" />
        </li>
        <li>
          <InstagramGradientIcon />
          <InstagramGradientIcon fill="#fff" />
        </li>
      </ul>
      <ul className="lists">
        <li>HOME</li>
        <li>STORIES</li>
        <li>FEATURES</li>
        <li>PRICING</li>
      </ul>
      <div className="invite">
        <p>GET AN INVITE</p>
        <ArrowRightIcon stroke="#fff" />
      </div>
      <div className="copyright">
        <p>copyright 2019. All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
