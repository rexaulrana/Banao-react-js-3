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
import searchIcon from "../../assets/images/search-icon.png";
const Navbar = () => {
  return (
    <nav className="navbar border-nav navbar-expand-md bg-body-tertiary">
      <div className="container-xxl mx-auto">
        <a className="navbar-brand">
          <img className="w-50 me-5" src={logo} alt="" />
          <button className="d-sm-none border-0" type="submit">
            <img src={searchIcon} alt="" />
          </button>
          <a className="nav-item  ms-3 me-3">
            <img className="d-sm-none" src={notification} alt="" />
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
        </a>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <form className="d-flex" role="search">
            <input
              className="form-control me-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="search-btn rounded-end" type="submit">
              <IoIosSearch></IoIosSearch>
            </button>
          </form>
          <ul className="navbar-nav   mx-2 my-lg-0 navbar-nav-scroll">
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
                    People - Community
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Places - Venues
                  </a>
                </li>
                <li></li>
                <li>
                  <a className="dropdown-item" href="#">
                    Programs - Events
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Products - Store
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Blogs
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="ms-1 me-1">
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
          </ul>
          <div className="d-flex flex-md-row ">
            <a className="nav-item mt-1 ms-3 ">
              <img src={bookmark} alt="" />
            </a>
            <a className="nav-item mt-1 ms-2 ">
              <img src={notification} alt="" />
            </a>
            <a className="nav-item mt-1 ms-2">
              <img src={cart} alt="" />
            </a>
            <button className="px-4 ms-3 rounded ">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
