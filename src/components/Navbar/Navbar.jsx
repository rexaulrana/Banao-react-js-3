import "./Navbar.css";
import { IoIosSearch } from "react-icons/io";
// import { MdStars } from "react-icons/md";
// import { MdOutlineExplore } from "react-icons/md";

import explore from "../../assets/images/Explore.png";
import logo from "../../assets/images/HobbyCue Logo.png";
import star from "../../assets/images/Polygon 3.png";
import bookmark from "../../assets/images/bookmark_black_24dp 1.png";
import notification from "../../assets/images/notifications_black_24dp 1.png";
import cart from "../../assets/images/Product 3.png";
const Navbar = () => {
  return (
    <nav className="navbar border-nav navbar-expand-lg bg-body-tertiary">
      <div className="container-xxl mx-auto">
        <a className="navbar-brand" href="/">
          <img className="col-sm-11 " src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <form className="d-flex" role="search">
            <input
              className="form-control me-1 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="search-btn rounded-end" type="submit">
              <IoIosSearch></IoIosSearch>
            </button>
          </form>
          <ul className="navbar-nav  mx-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="me-1 ">
                  <img src={explore} alt="" />
                </span>
                Explore
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    item
                  </a>
                </li>
                <li>
                  {" "}
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    items
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="me-1">
                  <img src={star} alt="" />
                </span>
                Hobbies
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    item link
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    item link
                  </a>
                </li>
                <li>
                  {" "}
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    item link
                  </a>
                </li>
              </ul>
            </li>
            <a className="nav-item mt-1 ms-3 me-3">
              <img src={bookmark} alt="" />
            </a>
            <a className="nav-item mt-1 ms-3">
              <img src={notification} alt="" />
            </a>
            <a className="nav-item mt-1 ms-3 pb-2">
              <img src={cart} alt="" />
            </a>
            <button className="ms-4 px-5">Sign In</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
