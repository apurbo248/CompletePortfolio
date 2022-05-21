import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import Connect from "../Connect/Connect";

const Footer = () => {
  return (
    <div>
      <footer class="border-t pt-4 bg-black text-center text-medium text-mainBaseColor pb-2 ">
        <p class="">
        [ copyright - 2022 &copy; APURBO ]
         
        </p>
      </footer>
    </div>
  );
};

export default Footer;
