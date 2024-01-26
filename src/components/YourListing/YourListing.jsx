import add from "../../assets/images/Add.png";
import { FaCartPlus } from "react-icons/fa";

import { MdEventAvailable } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import "./YourListing.css";
import { FaLocationDot } from "react-icons/fa6";

const YourListing = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center poppins-semibold">
        <img className="mb-2 me-2" src={add} alt="" />
        Add Your Listing
      </h2>
      {/* 1 */}
      <div
        className="d-sm-flex   flex-sm-column align-items-center 
      d-md-flex
        flex-md-row  justify-content-around mt-3 mb-3"
      >
        <div>
          <div className="firstDiv mb-4">
            <div className="d-flex align-items-center  ">
              <span className="h2 me-2 ">
                <IoIosPeople></IoIosPeople>
              </span>
              <h4 className="">People</h4>
            </div>
            <p>
              Find a teacher, coach, or expert for <br /> your hobby interest in
              your <br /> locality. Find a partner, <br /> teammate, accompanist
              or collaborator.
            </p>
            <button className="border-1 rounded first-btn px-2 ">
              Connect{" "}
            </button>
          </div>
        </div>
        <div>
          <div className="secondDiv  mb-4">
            <div className="d-flex align-items-center ">
              <span className="h4 me-2">
                <FaLocationDot></FaLocationDot>
              </span>
              <h4 className="">Place</h4>
            </div>
            <p>
              Find a class, school, playground, <br /> auditorium, studio, shop
              or an <br />
              event venue. Book a slot at venues that <br /> allow booking
              through hobbycue.
            </p>
            <button className="second-btn border-1 rounded px-2 ">
              Meet Up{" "}
            </button>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div
        className="d-sm-flex   flex-sm-column
      d-md-flex
        flex-md-row align-items-center  justify-content-around mt-3"
      >
        <div className="thirdDiv mb-4">
          <div className="d-flex justify-items-center  ">
            <span className="h4 me-2">
              <FaCartPlus></FaCartPlus>
            </span>
            <h4 className="">Products</h4>
          </div>
          <p>
            Find equipment or supplies required <br /> for your hobby. Buy, rent
            or <br />
            borrow from shops, online stores <br /> or from community members.
          </p>
          <button className="border-1  third-btn rounded px-2 ">Get It </button>
        </div>
        <div>
          <div className="forthDiv mb-4">
            <div className="d-flex align-items-center ">
              <span className="h4 me-2">
                <MdEventAvailable></MdEventAvailable>
              </span>
              <h4 className="">Program</h4>
            </div>
            <p>
              Find events, meetups and workshops <br /> related to your hobby.
              Register <br />
              or buy tickets online.
            </p>
            <button className="border-1 third-btn rounded px-2 ">
              Attend{" "}
            </button>
          </div>
        </div>
      </div>

      {/*
       */}

      <div>
        <h2 className="text-center poppins-semibold">
          <img className="mb-2 me-2" src={add} alt="" />
          Add Your Own
        </h2>
        <p>
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </p>
        <button className="border-1  rounded px-2 ">Add New </button>
      </div>
    </div>
  );
};

export default YourListing;
