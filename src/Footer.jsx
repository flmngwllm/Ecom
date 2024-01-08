import {
  FaFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <span>
        <FaFacebook />
        <FaSquareInstagram />
        <FaSquareXTwitter />
      </span>
      <p>About</p>
      <p>Contact Us</p>
      <p>©2024 Ecom.com. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
