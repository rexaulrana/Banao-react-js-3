import first from "../../src/assets/images/first.png";
import second from "../../src/assets/images/second.png";
const Img = () => {
  return (
    <div>
      <div className="d-flex   mt-5 justify-item-center align-items-center">
        <img className="col-6" src={first} alt="" />
        <img className="col-6 " src={second} alt="" />
      </div>
    </div>
  );
};

export default Img;
