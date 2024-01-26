import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaPinterest,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className="mt-5 d-md-flex  justify-content-between align-items-center">
        <div className="mt-3 mb-4">
          <h6>Hobbycue</h6>
          <div className="d-flex flex-column">
            <a>About Us</a>
            <a>Our Services</a>
            <a>Work with Us</a>
            <a>FAQ</a>
            <a>Contact Us</a>
          </div>
        </div>
        <div className="mt-3 mb-3">
          <h6>How Do I</h6>
          <div className="d-flex flex-column">
            <a>Sign Up</a>
            <a>Add a Listing</a>
            <a>Claim Listing</a>
            <a>Post a Query</a>
            <a>Add a Blog Post</a>
            <a>Other Quires</a>
          </div>
        </div>{" "}
        <div className=" mb-5">
          <h6>Quick Links</h6>
          <div className="d-flex flex-column">
            <a>Listings</a>
            <a>Blog Posts</a>
            <a>Shop / Store</a>
            <a>Community</a>
          </div>
        </div>{" "}
        <div className="mt-3 mb-3">
          <h6>Social Media</h6>
          <div className="d-flex flex-row">
            <a className="h4 me-2">
              <FaFacebook></FaFacebook>
            </a>
            <a className="h4 me-2">
              <FaTwitter></FaTwitter>
            </a>
            <a className="h4 me-2">
              <FaInstagram></FaInstagram>
            </a>
            <a className="h4 me-2">
              <FaPinterest></FaPinterest>
            </a>
            <a className="h4 me-2">
              <FaGooglePlus></FaGooglePlus>
            </a>
            <a className="h4 me-2">
              <FaYoutube></FaYoutube>{" "}
            </a>
            <a className="h4 me-2">
              <FaTelegram></FaTelegram>{" "}
            </a>
          </div>
          <h6 className="mt-2">Invite Friends</h6>
          <form className="d-flex" role="search">
            <input
              className="form-control me-1"
              type="search"
              placeholder="Email ID"
              aria-label="Search"
            />
            <button className="h6 search-btn rounded-end" type="submit">
              Invite
            </button>
          </form>
        </div>
      </div>
      <h4 className="text-center mt-3 mb-5">© Purple Cues Private Limited</h4>
    </div>
  );
};

export default Footer;
