import { FaFacebook, FaGoogle } from "react-icons/fa";

const JoinIn = () => {
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
      <div className="mt-4 text-center mb-4">
        <h4>------ Or Connect with -----</h4>
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

      <div className="">
        By continuing, you agree to{" "}
        <span className="h6"> our Terms of Service {""}</span>
        and <span className="h6">Privacy Policy.</span>
      </div>
      <button className="btn-login h6 px-4 w-100 py-2 mt-3  rounded border border-primary-subtle">
        Agree and Continue
      </button>
    </div>
  );
};

export default JoinIn;
