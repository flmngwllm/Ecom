import {
  FaFacebook,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <p>SOCIAL MEDIA</p>
      <span>
        <FaFacebook />
        <FaSquareInstagram />
        <FaSquareXTwitter />
        <FaLinkedin />
      </span>
      <p>OUR COMPANY</p>
      <p>Careers</p>
      <p>About Us</p>

      <p>HELP</p>
      <p>Contact Us</p>
      <p>
        ©2024 Ecom.com. All rights reserved. Terms of Use. Privacy. Site map
      </p>
    </footer>
  );
}

export default Footer;
