import quote from "../../assets/images/quote.png";
import "./Testimonials.css";
import women from "../../assets/images/Ellipse 12.png";
import footimg1 from "../../assets/images/footimg1.png";
import footimg2 from "../../assets/images/footimg2.png";
const Testimonials = () => {
  return (
    <div>
      <div className="d-flex align-items-center mt-5 ">
        <img src={quote} alt="" />
        <h3 className="ms-2 ">Testimonials</h3>
      </div>
      <p className="mt-4 mb-5">
        In a fast growing and ever changing city like Bangalore, it sometimes
        becomes very difficult to find or connect with like minded people.
        Websites like hobbycue.com is a great service which helps me get in
        touch with, communicate, connect, and exchange ideas with other dancers.
        It also provides the extra benefit of finding products and services that
        I can avail, which I can be assured is going to be of great quality as
        it comes recommended by people of the hobbycue community. To have
        discussions, to get visibility, and to be able to safely explore various
        hobbies and activities in my city, all under one roof, is an excellent
        idea and I highly recommend it.
      </p>
      <div
        className="d-md-flex 
          
          flex-md-row
          d-sm-flex flew-sm-column-reverse 
      justify-content-evenly align-items-start"
      >
        <div className="audios d-flex justify-content- mb-2">
          <audio controls>
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
          </audio>
          <img className="women" src={women} alt="" />
        </div>
        <div className="d-flex  align-items-center ">
          <img className="women" src={women} alt="" />
          <h6 className="text-dark mt-4 ms-3">
            Shubha Nagarajan
            <p className="text-info">Classical Dancers</p>
          </h6>
        </div>
      </div>
      {/*  */}

      <div>
        <h4 className="mt-5">
          Your {""}
          <span className="passion">Hobby</span>, Your {""}
          <span className="hobby">Community...</span>
        </h4>
        <button className="btn-login border-0 h6 py-2 rounded">
          Get Started
        </button>
        <div className="d-flex mt-5">
          <img className="w-50" src={footimg1} alt="" />
          <img className="w-50" src={footimg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
