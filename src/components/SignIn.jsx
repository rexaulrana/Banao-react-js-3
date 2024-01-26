import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// import { FaRegEye } from "react-icons/fa";

const SignIn = () => {
  return (
    <div>
      <div className="d-flex flex-column ">
        <button className="h6 px-5 py-2 mb-2 rounded border border-primary-subtle">
          <span className="me-3">
            <FaGoogle />
          </span>
          Continue With Google
        </button>
        <button className="h6 py-2  rounded border border-primary-subtle">
          <span className="me-3">
            <FaFacebook />
          </span>
          Continue With Facebook
        </button>
      </div>
      <div className="mt-3 text-center mb-3">
        <h4>---- Or Connect with ---</h4>
      </div>
      <div>
        <input
          className="form-control border-2"
          type="text"
          placeholder="Email"
        ></input>
        <div>
          <input
            className="form-control position-relative mt-2 border-2 mb-4"
            type="text"
            placeholder="Password"
          ></input>
          {/* <span className="position-absolute bottom-10 end-50">
            {" "}
            <FaEyeSlash></FaEyeSlash>{" "}
          </span> */}
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label">Remember Me.</label>
        </div>

        <a href="">Forgot Password?</a>
      </div>
      <button className=" btn-login h6 px-4 w-100 py-2 mt-3  rounded border border-primary-subtle">
        Continue
      </button>
    </div>
  );
};

export default SignIn;
